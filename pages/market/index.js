import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import SiteLayout from '../../layouts/SiteLayout';
import TopBar from '../../components/Tables/TopBar/TopBar';
import MarketRow from '../../components/Tables/Market/MarketRow';
import TopCoins from '../../components/Tables/Market/TopCoins';
import Footer from '../../components/Footer/Footer';

const MarketScreen = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);
    const checkViewerCountInterval = setInterval(async () => {
      axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      )
      .then(res => {
        if (res && res.data) {
          setData(res.data);
        }
      })
      .catch(error => console.log(error));
    }, 1000 * 1);
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
        <TopCoins />
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
