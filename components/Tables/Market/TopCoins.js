import { memo } from 'react';

const TopCoins = memo(() => (
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
          <p>$39959.73</p>
          <p>11.2%</p>
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
          <p>$2742.35</p>
          <p>11.2%</p>
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
          <p>$0.1400</p>
          <p>11.2%</p>
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
          <p>$0.000027</p>
          <p>11.2%</p>
        </div>
      </div>
    </div>
  </div>
));

export default TopCoins;
