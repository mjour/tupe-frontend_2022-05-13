import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import SiteLayout from '../../layouts/SiteLayout';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MarketRow from '../../components/Tables/Market/MarketRow';
import TopCoins from '../../components/Tables/Market/TopCoins';
import Footer from '../../components/Footer/Footer';
import { InsightsOutlined, InstallMobileOutlined } from '@mui/icons-material';
import {isNil, cloneDeep} from "lodash";
// import 
const MarketScreen = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [token, setToken] = useState('');
  const init_state = {
    btc: ['', ''],
    eth: ['', ''],
    doge: ['', ''],
    shib: ['', '']
  }
  const [topcoin, setTopcoin] = useState(init_state);
  const [allSymbol, setAllSymbol] = useState([]);
  const CRYTOCOMPARE_API_KEY = '22ecd4c3d9ba9629fe8555875cb826598533e729ef38e46af033f4f6fdec2802';

  const apiFunction = () => {
    axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
    )
    .then(res => {
      if (res && res.data) {
        const new_data = [];
        res.data.map((item, index)=>{
          item.sort_number = index + 1;
          new_data.push(item);
        })
        setData(new_data);
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
          allSymbol.push(item.symbol.toUpperCase());
        })
        setAllSymbol([...allSymbol])
      }
    })
    .catch(error => console.log(error));
  }


  useEffect(()=> {
    const localToken = localStorage.getItem('token');
    setToken(localToken);
    apiFunction();
    const checkViewerCountInterval = setInterval(async () => {
      apiFunction();
    }, 1000 * 60);
    return () => clearInterval(checkViewerCountInterval);
  }, []);

  useEffect(()=>{
    const subs = [];
    if (allSymbol.length === 0) return;
    allSymbol.map(item=>{
      const push_item =  '5~CCCAGG~' + item + '~USD';
      subs.push(push_item);
    })
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
            if (json.LOW24HOUR !== undefined) insert_item.low_24h = json.LOW24HOUR;
            if (json.LOWHOUR !== undefined) insert_item.high_24h = json.LOWHOUR;
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
  }, [allSymbol])

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCoins = data.filter(coin =>
    coin.name !== undefined && coin.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <SiteLayout>
        <TopCoins topcoin={topcoin}/>
        <TopBar
          searchValue={keyword}
          searchOnChange={handleSearchValue}
          searchSubmit={handleSearchSubmit}
        />

        {filteredCoins && filteredCoins.length > 0 && (
          <table className='data-table'>
            <thead>
              <tr>
                <th className='markFavorite left'>
                  <i className='markFavorite-icon material-icons'>star_border</i>
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
                <MarketRow key={item.id.toString()} item={item} index={index + 1} />
              ))}
            </tbody>
          </table>
        )}
      </SiteLayout>
      <Footer />
    </>
  );
};

export default MarketScreen;
