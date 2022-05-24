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
  const [showTrade, setShowTrade] = useState(false);
  const [tradeType, setTradeType] = useState('');

  const init_state = {
    btc: ['', ''],
    eth: ['', ''],
    doge: ['', ''],
    shib: ['', '']
  }
  const [topcoin, setTopcoin] = useState(init_state);
  const [allSymbol, setAllSymbol] = useState([]);
  const CRYTOCOMPARE_API_KEY = '22ecd4c3d9ba9629fe8555875cb826598533e729ef38e46af033f4f6fdec2802';

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
          new_data.push(item);
        })
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
            new_data_1.push(item);
          })
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
    }, 100 * 1)
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
            if (json.PRICE !== undefined) insert_item.current_price = json.PRICE;
            if (json.CURRENTSUPPLYMKTCAP !== undefined) insert_item.market_cap = json.VOLUME24HOUR;

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
    coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase())
  );


  function onChangePage (pager) {
    if (!isNil(pager)) setCurrentPage(pager.currentPage);
  }

  const handleTopButtonEvent = (type) => {
    console.log(type);
    setTradeType(type);
    // clearInterval()
    if (type === 'Favorites') {
      setShowTrade(false);

    } else {
      setShowTrade(true);
      
    }
  }

  useEffect(()=>{
    const tsyms = "BNB,BTC";
    const api = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${tradeType}&tsyms=${tsyms}`;
    let checkViewerCountInterval = 0;
    if (tradeType != '' && tradeType != 'Favorites') {
      checkViewerCountInterval = setInterval(async () => {
        axios.get(api).then(res=>{
          if (res && res.data && res.data.RAW && res.data.RAW[tradeType]) {
  
            setTrade({...res.data.RAW[tradeType]});
          }
        })
      }, 1000 * 3);
    }
    return () => clearInterval(checkViewerCountInterval);
  },[tradeType])

  return (
    <>
      <SiteLayout>
        <TopCoins topcoin={topcoin}/>
        <TopBar
          searchValue={keyword}
          searchOnChange={handleSearchValue}
          searchSubmit={handleSearchSubmit}
          topButtonEvent={handleTopButtonEvent}
        />

        {showTrade ? (
          <table className='data-table' style={{width:"50%", margin:"0 auto"}}>
            <thead>
              <tr>
                <th className='markFavorite left'>Pair</th>
                <th className='responsive-hide2 right'>Price</th>
                <th className='right'>Change</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(trade).length > 0 && Object.keys(trade).map(key=>(
                <>
                  {trade[key].FROMSYMBOL == tradeType && (
                    <tr key={key}>
                      <td style={{width: "20%"}}>
                        {trade[key].FROMSYMBOL}/{key}
                      </td>
                      <td className='right' style={{width: "40%"}}>{trade[key].PRICE}</td>
                      <td style={{width: "40%"}} className={'right ' + (trade[key].CHANGE24HOUR > 0 ? 'green' : (trade[key].CHANGE24HOUR < 0 ? 'red' : ''))}>{trade[key].CHANGE24HOUR}%</td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        ):(
          <>
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
                        <MarketRow key={item.id.toString()} item={JSON.parse(JSON.stringify(item))} index={index + 1} />

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
          </>
        )}

      </SiteLayout>
      <Footer />
    </>
  );
};

export default MarketScreen;
