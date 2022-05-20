import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import SiteLayout from '../../layouts/SiteLayout';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MarketRow from '../../components/Tables/Market/MarketRow';
import TopCoins from '../../components/Tables/Market/TopCoins';
import Footer from '../../components/Footer/Footer';
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


  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://api.coinranking.com/v2/coins',
//   headers: {
//     'x-access-token': 'your-api-key'
//   }
// };

// fetch(options, (error, response) => {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
    // const config = {
    //   headers:{
    //     'x-access-token': 'coinranking471129a98c49875cae6b912b6ef8fcdff479f80004726b9f',
    //   }
    // };
    // axios
    //   .get(
    //     'https://api.coinranking.com/v2/markets', config
    //   ).then(res=>{
    //     console.log(res)
    //   })
    const checkViewerCountInterval = setInterval(async () => {
      axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
      )
      .then(res => {
        if (res && res.data) {
          setData(res.data);
          const btc = res.data.find(x=>x.symbol === "btc");
          const eth = res.data.find(x=>x.symbol === "eth");
          const doge = res.data.find(x=>x.symbol === "doge");
          const shib = res.data.find(x=>x.symbol === "shib");
          if (btc !== undefined) topcoin.btc = [btc.current_price, btc.price_change_percentage_24h];
          if (eth !== undefined) topcoin.eth = [eth.current_price, eth.price_change_percentage_24h];
          if (doge !== undefined) topcoin.doge = [doge.current_price, doge.price_change_percentage_24h];
          if (shib !== undefined) topcoin.shib = [shib.current_price, shib.price_change_percentage_24h];
          setTopcoin({...topcoin});
        }
      })
      .catch(error => console.log(error));
    }, 1000 * 10);
    return () => clearInterval(checkViewerCountInterval);
  }, []);

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredCoins = data.filter(coin =>
    coin.name.toLowerCase().includes(keyword.toLowerCase())
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
