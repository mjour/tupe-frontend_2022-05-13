import { useEffect, useState } from 'react';
import { MarketData } from 'react-tradingview-embed';
import { useRouter } from 'next/router';

import Head from 'next/head';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CooperativePartners from '../../components/Widgets/CooperativePartners/CoopPartners';
import EventCarousel from '../../components/Widgets/Homescreen/EventCarousel';

export default function HomeScreen() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const marketChartProps = {
    width: '100%',
    marginLeft: 100,
    height: 350,
    symbolsGroups: [
      {
        name: 'Coins',
        originalName: 'Indices',
        symbols: [
          {
            name: 'COINBASE:ETHUSD',
          },
          {
            name: 'BITSTAMP:BTCUSD',
          },
          {
            name: 'BINANCE:SHIBUSDT',
          },
          {
            name: 'BINANCE:DOTUSDT',
          },
          {
            name: 'BINANCE:GALAUSDT',
          },
        ],
      },
    ],
    showSymbolLogo: true,
    colorTheme: 'light',
    isTransparent: false,
    locale: 'en',
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    setToken(localToken);

    // if (!localToken) {
    //   router.push('/');
    // }

    document.body.setAttribute('style', 'min-width: auto;');
  }, []);

  const commonWidthStyle = {
    minWidth: 'auto',
    width: 'inherit',
  };

  const spotStyle = {
    marginTop: 50,
    minWidth: 'auto',
    width: 'inherit',
  };

  return (
    <MainLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='mobileResponsive HomeScreen content'>
        <Header />
        <div className='index-page'>
          <div
            data-v-4654f51e
            className='banner-index'
            style={{
              backgroundImage: `url('https://upload-hotbit-io.oss-accelerate.aliyuncs.com/index-finalbanner.png')`,
            }}
          >
            <div
              data-v-4654f51e
              className='banner-index-content common-width'
              style={commonWidthStyle}
            >
              <div data-v-4654f51e className='banner-txt'>
                <p data-v-4654f51e style={{ textAlign: 'center' }} data-nsfw-filter-status='swf'>
                  {/* The Worlds Leading Cryptocurrency Trading Platform */}
                  Thanks for your registration with Tupe.
                  <br />
                  Tupe exchange platform is coming soon for crypto currency investors
                  <br /> all around the world, stay connected with Tupe for more update’s.
                </p>
                {/* <p data-v-4654f51e style={{ textAlign: 'center' }} data-nsfw-filter-status='swf'>
                  Highly-Efficient &nbsp;·&nbsp; Flexible &nbsp;·&nbsp; Diverse &nbsp;·&nbsp; Stable
                  &nbsp;·&nbsp; Secure
                </p> */}
              </div>
              <div data-v-4654f51e className='banner-index-poster-box'>
                <EventCarousel />
                <div data-v-4654f51e className='banner-index-quotations'>
                  <div data-v-4654f51e className='fixed_term'>
                    <div data-v-a2f3dc54 data-v-4654f51e className='rate-wrap'>
                      <div data-v-a2f3dc54 className='rate-inner'>
                        <div data-v-a2f3dc54 className='rate-container interest-box'>
                          <div data-v-a2f3dc54 className='rate-left'>
                            <div data-v-a2f3dc54 className='quotation-title font-bold'>
                              APY of Investment Products
                            </div>
                          </div>
                          <div data-v-a2f3dc54 className='rate-marquee2 col-xs-6 col-md-6 col-sm-6'>
                            <ul data-v-a2f3dc54 className='item-list3'>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li data-v-a2f3dc54='' className='rate-item'>
                                <div data-v-a2f3dc54='' className='rate-item-content2'>
                                  <span data-v-a2f3dc54=''>
                                    <img
                                      data-v-a2f3dc54=''
                                      src='https://upload-hotbit-io.oss-ap-southeast-1.aliyuncs.com/files/NEW_ATOM_LOGO.png'
                                      alt=''
                                      srcSet=''
                                      className='rate-icon2'
                                    />
                                    <span data-v-a2f3dc54='' className='text symbol'>
                                      ATOM
                                    </span>
                                  </span>
                                  <a data-v-a2f3dc54='' href='/invest' className='sdf'>
                                    <span data-v-a2f3dc54='' className='text' />
                                    <span data-v-a2f3dc54='' className='vam'>
                                      10.67%
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='markets-data common-width' style={spotStyle}>
            <ol className='exchange-type'>
              <li className='active-type'>Spot Trading</li>
            </ol>
            {/* <SpotTradingDummy /> */}
            <div style={{width:"60%", margin:'auto'}}>
              <MarketData widgetProps={marketChartProps} />
            </div>
          </div>
          <div className='section3'>
            <div className='common-width s3-wrap' style={commonWidthStyle}>
              <ul className='s3_main text-center'>
                <li>
                  <img
                    src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/resource/static/img/s3-img3.796436e.png'
                    alt='.png'
                    data-nsfw-filter-status='sfw'
                    style={{ visibility: 'visible' }}
                  />
                  <p className='s3_main_text1' data-nsfw-filter-status='swf'>
                    Various Token Types Supported
                  </p>
                  <p className='s3_main_text2' data-nsfw-filter-status='swf'>
                    Constantly introducing and listing high quality digital currencies from all over
                    the world, providing users with various types of transactional services in most
                    digital currencies.
                  </p>
                </li>
                <li>
                  <img
                    src='/images/user.png'
                    alt='.png'
                    data-nsfw-filter-status='sfw'
                    style={{ visibility: 'visible' }}
                  />
                  <p className='s3_main_text1' data-nsfw-filter-status='swf'>
                    User Experience
                  </p>
                  <p className='s3_main_text2' data-nsfw-filter-status='swf'>
                    We provide 24/7 online customer support to ensure quick and readily available
                    support when needed.
                  </p>
                </li>
                <li>
                  <img
                    src='/images/high.png'
                    alt='.png'
                    data-nsfw-filter-status='sfw'
                    style={{ visibility: 'visible' }}
                  />
                  <p className='s3_main_text1' data-nsfw-filter-status='swf'>
                    High Liquidity
                  </p>
                  <p className='s3_main_text2' data-nsfw-filter-status='swf'>
                    With a built in Artificial Intelligence market maker that meets the high
                    standards set by Wall Street, our model analysis based on over 250 market
                    parameters, providing 24/7 Customer Support and high liquidity.
                  </p>
                </li>
                <li>
                  <img
                    src='/images/secure.png'
                    alt='.png'
                    data-nsfw-filter-status='sfw'
                    style={{ visibility: 'visible' }}
                  />
                  <p className='s3_main_text1' data-nsfw-filter-status='swf'>
                    Secure And Stable
                  </p>
                  <p className='s3_main_text2' data-nsfw-filter-status='swf'>
                    We conduct the multinodular structure which meets the requirements set by the IT
                    surveillance logical structure from the Financial Industry, ensuring steady
                    operations of our systems. The front and back-end designs, combined with our
                    multi-node and multimodular distributed deployment, scales out our capacity and
                    thus providing better service for our customers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='mobile-banner'>
            <div className='mobile-banner-bg common-width' style={commonWidthStyle}>
              <div className='mobile-banner-right'>
                <img
                  src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/resource/static/img/mobile-phone-img-index.b3bc6e1.png'
                  alt='phone.png'
                  data-nsfw-filter-status='sfw'
                  style={{ visibility: 'visible' }}
                  data-xblocker='passed'
                />
              </div>
              <div className='mobile-banner-wrap'>
                <div className='mobile-banner-left'>
                  <p className='title' data-nsfw-filter-status='swf'>
                    Trade Anytime, Anywhere
                  </p>
                  <p className='text' data-nsfw-filter-status='swf'>
                    Download and enjoy Tupe&apos;s mobile APP specially tailored for you, enjoy
                    real-time transactions anytime, anywhere, together with the latest market trends
                    right in the palm of your hands.
                  </p>
                  <div className='download'>
                    <div className='download_android'>
                      <div className='download_text google'>
                        <img
                          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAz1BMVEUAAAD/ygr6Pk3b0BsQ1uXKXHKpcIu8ZXwP8H4P74EP8H4Qz//6Pk0P8H4Q1OsQ3cwQ2N0P8H78eTH/ygr6Pk0P8H7/ygr/ygr/ygoP8H4P8H7/ygoY73n/ygr/ygrlzhca28D6Pk3NWm/8gS0Q2deYe5iwbIYQ2tP8bjb6Pk0d7nf6QEz6Pk0P8H4P8H76Pk2QgJ4Q2df6Pk0P8H4P8H76Pk36Pk0P8H4P8H76Pk36Pk36Pk3izxj+shX6Pk36Pk0Qz//6Pk0P8H7/ygoV73tYL49GAAAAQHRSTlMA4frS0NDOzgL9+u/r6tLQz8/PwrSxflcnJA4J/fb11dPT0dHQz8/OzsqopZOQiIeAfGtpYWBDQjw4KyIhHhINoSjA4QAAALtJREFUKM910NUSAjEMQNGw2OLu7u7u2Sz//03QLlBoy309M0kmALAIZAqgLxQNBCdFLSFGiSIrU0voIaLETkvcSF2JHwtOixrCOLEia1MiYZTYq4RtchqeFcIel3Ktki3JhLGn3N22bbtyEjFjwkrlJcI6E55Lpmb/H3ktKykNFMJNnCGE16oqx/stp9EF3v3K4ACibwlv1M93GRizGyjkY5I+gdRLGltQ4hJemqAW6ljG+Aq65kb6CJoeQKJO6tjlVf0AAAAASUVORK5CYII='
                          alt=''
                        />
                        <div className='download_font'>
                          <span data-nsfw-filter-status='swf'>Download </span>
                          <span data-nsfw-filter-status='swf'>Android APK </span>
                        </div>
                      </div>
                    </div>
                    <div className='download_android'>
                      <div className='download_text android'>
                        <i className='material-icons'>android</i>
                        <div className='download_font'>
                          <span data-nsfw-filter-status='swf'>Download </span>
                          <span data-nsfw-filter-status='swf'>Android APK </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='download'>
                    <div className='download_ios'>
                      <div className='download_text ios'>
                        <i className='material-icons'>apple</i>
                        <div className='download_font'>
                          <span data-nsfw-filter-status='swf'>Download </span>
                          <span data-nsfw-filter-status='swf'>IOS </span>
                        </div>
                      </div>
                    </div>
                    <div className='download_ios download_code'>
                      <div className='download_text code flex flex-center'>
                        <i className='material-icons'>qr_code</i>
                      </div>
                      <div className='qr-code-box'>
                        <img
                          src='https://upload-hotbit-io.oss-accelerate.aliyuncs.com/mobile-qr.png'
                          className='mobile-qrcode'
                          data-nsfw-filter-status='sfw'
                          style={{ visibility: 'visible' }}
                          data-xblocker='passed'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CooperativePartners />
          <div className='communities'>
            <div className='communities-content'>
              <p data-nsfw-filter-status='swf'>Join Tupe communities</p>
              <p data-nsfw-filter-status='swf'>
                Tupe has already accumulated more than 700,000 registered users from more than 210
                countries and areas all over the world. By focusing on the world&apos;s emerging
                markets such as the markets of Russia, Japan, South Korea, Turkey and Southeast
                Asian countries, Tupe has gathered its users from Twitter, Telegram, VK and
                Facebook. Join in Tupe community, communicate and share your thoughts and experience
                of cryptocurrency with our experienced users from all over the world and gain an
                insight into the new trend of cryptocurrency industry.
              </p>
              <button className type='button'>
                Join now
              </button>
            </div>
          </div>
          <div className='Using-HotBit'>
            <div className='start-trading'>
              <p className='title' data-nsfw-filter-status='swf'>
                Start Trading Now
              </p>
              <div className='btn-wrap'>
                <a href='/market' className='btn1' data-nsfw-filter-status='swf'>
                  Trade now
                </a>
                <a href='/members/signup/' className='btn2' data-nsfw-filter-status='swf'>
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer responsive />
    </MainLayout>
  );
}
