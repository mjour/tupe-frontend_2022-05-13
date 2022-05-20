import { memo } from 'react';

const TopCoins = memo(({topcoin}) => (
  <div className='topcoins'>
    <div className='flex flex-space-between list-box'>
      <div className='item'>
        <div className='flex flex-v-center'>
          <div
            className='icon cover'
            style={{
              backgroundImage: `url(https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png)`,
            }}
          />
          <p>BTC</p>
        </div>
        <div className='flex flex-v-center flex-space-between'>
          <p>${topcoin.btc[0].toLocaleString()}</p>
          <p className={topcoin.btc[1] > 0 ? 'green': 'red'}>{topcoin.btc[1]}%</p>
        </div>
      </div>
      <div className='item'>
        <div className='flex flex-v-center'>
          <div
            className='icon cover'
            style={{
              backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/ETH_1_LOGO.png)`,
            }}
          />
          <p>ETH</p>
        </div>
        <div className='flex flex-v-center flex-space-between'>
          <p>${topcoin.eth[0].toLocaleString()}</p>
          <p className={topcoin.eth[1] > 0 ? 'green': 'red'}>{topcoin.eth[1]}%</p>
        </div>
      </div>
      <div className='item'>
        <div className='flex flex-v-center'>
          <div
            className='icon cover'
            style={{
              backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/asset_logos/DOGE_LOGO.png)`,
            }}
          />
          <p>DOGE</p>
        </div>
        <div className='flex flex-v-center flex-space-between'>
          <p>${topcoin.doge[0].toLocaleString()}</p>
          <p className={topcoin.doge[1] > 0 ? 'green': 'red'}>{topcoin.doge[1]}%</p>
        </div>
      </div>
      <div className='item'>
        <div className='flex flex-v-center'>
          <div
            className='icon cover'
            style={{
              backgroundImage: `url(https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/SHIB_LOGO.png)`,
            }}
          />
          <p>SHIB</p>
        </div>
        <div className='flex flex-v-center flex-space-between'>
          <p>${topcoin.shib[0]}</p>
          <p className={topcoin.shib[1] > 0 ? 'green': 'red'}>{topcoin.shib[1]}%</p>
        </div>
      </div>
    </div>
  </div>
));

export default TopCoins;
