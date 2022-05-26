import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SiteLayout from '../../layouts/SiteLayout';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MarketRow from '../../components/Tables/Market/MarketRow';
import TopCoins from '../../components/Tables/Market/TopCoins';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Common/Pagination';
import {isNil, cloneDeep} from "lodash";

const MarketScreen = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [token, setToken] = useState('');
  const [current_page, setCurrentPage] = useState(1);
  const [trade, setTrade] = useState({});
  const [tradeType, setTradeType] = useState('Favorites');
  const tradeTypes = {'Favorites':1, 'TUPE':1, 'AUD':0.71, 'NZD':0.65, 'LKR':0.0028, 'INR':0.013, 'BTC':29609.7, 'ETH':1969.82, 'BNB':328.11, 'TAUD':1.9107635219957542, 'USDT':1, 'SHIB':0.00001};
  const [trade_price, setTradePrice] = useState(tradeTypes);
  const [multiple, setMulti] = useState(1);
  const [unit, setUnit] = useState('$');
  const unit_list = {'Favorites':'$', 'TUPE':'$', 'AUD':'A$', 'NZD':'NZ$', 'LKR':'LKR', 'INR':'₹', 'BTC':'₿', 'ETH':'Ξ', 'BNB':'BNB', 'TAUD':'$', 'USDT':'$', 'SHIB':'SHIB'};

  const init_state = {
    btc: ['', ''],
    eth: ['', ''],
    doge: ['', ''],
    shib: ['', '']
  };
  const [topcoin, setTopcoin] = useState(init_state);
  const [allSymbol, setAllSymbol] = useState([]);
  const CRYTOCOMPARE_API_KEY = '22ecd4c3d9ba9629fe8555875cb826598533e729ef38e46af033f4f6fdec2802';
  // const trade_api = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=TUPE,AUD,NZD,LKR,INR,BTC,ETH,BNB,TAUD,USDT,SHIB';


  const apiFunction = async () => {
    var all_coins = [];
    var all_symbols = [];
    await axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
    )
    .then(res => {
      if (res && res.data) {
        const new_data = [];
        res.data.map((item, index)=>{
          item.sort_number = index + 1;
          if (tradeTypes[item.symbol.toUpperCase()] !== undefined && item.current_price !== undefined) tradeTypes[item.symbol.toUpperCase()] = item.current_price;
          new_data.push(item);
        });
        setTradePrice(tradeTypes);
        all_coins = [...new_data];
        const btc = res.data.find(x=>x.symbol === "btc");
        const eth = res.data.find(x=>x.symbol === "eth");
        const doge = res.data.find(x=>x.symbol === "doge");
        const shib = res.data.find(x=>x.symbol === "shib");
        if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h];
        if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
        if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
        if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
        setTopcoin({...topcoin});
        res.data.map(item=>{
          if (allSymbol.indexOf(item.symbol.toUpperCase()) === -1)
          all_symbols.push(item.symbol.toUpperCase());
        })
      }
    })
    .catch(error => console.log(error));

    setTimeout(()=>{
      axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=2&sparkline=false'
      )
      .then(res => {
        if (res && res.data) {
          const new_data_1 = [];
          res.data.map((item, index)=>{
            item.sort_number = index + data.length;
            if (tradeTypes[item.symbol.toUpperCase()] !== undefined && item.current_price !== undefined) tradeTypes[item.symbol.toUpperCase()] = item.current_price;
            new_data_1.push(item);
          })
          setTradePrice(tradeTypes);
          const merge_data = all_coins.concat(new_data_1);
          setData(merge_data);
          res.data.map(item=>{
            if (allSymbol.indexOf(item.symbol.toUpperCase()) === -1)
            all_symbols.push(item.symbol.toUpperCase());
          })
          setAllSymbol([...all_symbols])
        }
      })
      .catch(error => console.log(error));
    }, 100 * 1);
  }


  useEffect(()=> {
    const localToken = localStorage.getItem('token');
    setToken(localToken);
    apiFunction();
  }, []);

  useEffect(()=>{
    const subs = [];
    if (allSymbol.length === 0) return;
    allSymbol.map(item=>{
      const push_item =  '5~CCCAGG~' + item + '~USD';
      subs.push(push_item);
    });
    const controller = new AbortController();
    const apiCall = {action: 'SubAdd',subs};
    const url = 'wss://streamer.cryptocompare.com/v2?api_key=' + CRYTOCOMPARE_API_KEY;
    const isBrowser = typeof window !== "undefined";
    const ws = isBrowser ? new WebSocket(url) : null;
    if (!isNil(ws)) {
      ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
      };
      ws.onmessage = function (event) {
        const json = JSON.parse(event.data);
        try {
          if (json.FROMSYMBOL !== undefined) {
            const new_data = cloneDeep(data);
            const insert_item = data.find(x=>x.symbol === json.FROMSYMBOL.toLowerCase());
            if (json.PRICE !== undefined) {
              insert_item.price_change_percentage_24h *= (insert_item.current_price/json.PRICE)
              insert_item.current_price = json.PRICE;
            }
            if (json.CURRENTSUPPLYMKTCAP !== undefined) insert_item.market_cap = json.CIRCULATINGSUPPLYMKTCAP;
            if (trade_price[json.FROMSYMBOL] !== undefined && json.PRICE !== undefined) trade_price[json.FROMSYMBOL] = json.PRICE;
            setTradePrice(trade_price);

            const findIndex = data.findIndex(x=>x.symbol === insert_item.symbol);
            if (findIndex > -1) {
              new_data[findIndex] = {...insert_item};
            }
            setData([...new_data]);
            const btc = data.find(x=>x.symbol === "btc");
            const eth = data.find(x=>x.symbol === "eth");
            const doge = data.find(x=>x.symbol === "doge");
            const shib = data.find(x=>x.symbol === "shib");
            if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h];
            if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
            if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
            if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
            setTopcoin({...topcoin});
          }
        } catch (err) {
          console.log(err);
        }
      };
    }
    return () => controller.abort();
  }, [allSymbol]);

  const handleSearchValue = (e) => {
    const { value } = e.target;
    setKeyword(value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCoins = data.filter(coin =>
    (coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase()) || (coin.symbol !== undefined && coin.symbol.toLowerCase().includes(keyword.toLowerCase())))
  );


  function onChangePage (pager) {
    if (!isNil(pager)) setCurrentPage(pager.currentPage);
  }

  const handleTopButtonEvent = (type) => {
    setTradeType(type);
    const multiple = trade_price[type];
    setMulti(multiple);
    setUnit(unit_list[type]);
  }

  return (
    <>
      <SiteLayout>
        <TopCoins topcoin={topcoin} unit={unit}/>
        <TopBar
          searchValue={keyword}
          searchOnChange={handleSearchValue}
          searchSubmit={handleSearchSubmit}
          topButtonEvent={handleTopButtonEvent}
          type={tradeType}
          unit={unit}
        />
        
        {filteredCoins && filteredCoins.length > 0 && (
          <table className='data-table'>
            <thead>
              <tr>
                <th className='markFavorite left'>
                  {/* <i className='markFavorite-icon material-icons'>star_border</i> */}
                  <span style={{marginLeft: 35}}>#</span>
                </th>
                <th className='left'>Coin</th>
                <th className='left'>&nbsp;</th>
                <th className='right'>Price</th>
                <th className='right'>24H Change</th>
                <th className='right responsive-hide2'>24H High</th>
                <th className='right responsive-hide2'>24H Low</th>
                <th className='right responsive-hide'>24H Volume</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((item, index) => (
                <>
                  {index >= (current_page - 1) * 20 && index < current_page *20 && (
                    <MarketRow key={item.id.toString()} item={JSON.parse(JSON.stringify(item))} index={index + 1} multiple={multiple} unit={unit}/>

                  )}
                </>
              ))}
            </tbody>
            
          </table>
        )}
        <div style={{display: 'flex'}}>
          <Pagination
            items={filteredCoins}
            initialPage={current_page}
            onChangePage={onChangePage}
            pageSize={20}
          />
        </div>

      </SiteLayout>
      <Footer />
    </>
  );
};

export default MarketScreen;
