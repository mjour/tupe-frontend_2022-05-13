import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = ({ responsive }) => {
  const toggleAccordion = (elementId) => {
    const accordionContainer = document.getElementById('footerAccordion');
    const accordions = accordionContainer.querySelectorAll(':scope > .accordion');

    const currentAccordion = document.getElementById(elementId);
    const isActive = currentAccordion.classList.contains('active');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < accordions.length; i++) {
      accordions.item(i).classList.remove('active');
    }

    if (!isActive) {
      currentAccordion.classList.add('active');
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      toggleAccordion();
    }
  };

  return (
    <Box>
      <div className={responsive ? 'footerDesktop' : ''}>
        <Container>
          <Row>
            <Column>
              <Heading className='mb-4'>Trading Pairs</Heading>
              <FooterLink href='#'>TUPE</FooterLink>
              <FooterLink href='#'>AUD</FooterLink>
              <FooterLink href='#'>NZD</FooterLink>
              <FooterLink href='#'>LKR</FooterLink>
              <FooterLink href='#'>INR</FooterLink>
              <FooterLink href='#'>BTC</FooterLink>
              <FooterLink href='#'>ETH</FooterLink>
              <FooterLink href='#'>BNB</FooterLink>
              <FooterLink href='#'>TAUD</FooterLink>
              <FooterLink href='#'>USDT</FooterLink>
              <FooterLink href='#'>SHIBU</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>About Us</Heading>
              <FooterLink href='#'>Security Settings</FooterLink>
              <FooterLink href='#'>AML</FooterLink>
              <FooterLink href='#'>About Us</FooterLink>
              <FooterLink href='#'>Join Us</FooterLink>
              <FooterLink href='#'>Referral Bouns</FooterLink>
              <FooterLink href='#'>Privacy Policy</FooterLink>
              <FooterLink href='#'>Terms of Service</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Data & Cooperation</Heading>
              <FooterLink>Apply to be VIP</FooterLink>
              <FooterLink>Fees</FooterLink>
              <FooterLink>Apply To List</FooterLink>
              <FooterLink>IEO Listing</FooterLink>
              <FooterLink>Market Cooperation</FooterLink>
              <FooterLink>Events</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Reference</Heading>
              <FooterLink>Quick Start</FooterLink>
              <FooterLink>API</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Support</Heading>
              <FooterLink href='#'>Contact Us</FooterLink>
              <FooterLink href='#'>Submit Your Request</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Account Recovery</Heading>
              <FooterLink>Change mail Address</FooterLink>
              <FooterLink>Change Mobile Number</FooterLink>
              <FooterLink>I have lost my 2FA code</FooterLink>
              <FooterLink>Unlock my Account</FooterLink>
              <FooterLink>Forgot my password</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>24h Total Trading Volume</Heading>
              <FooterLink href='#'>TUPE: 1.00</FooterLink>
              <FooterLink href='#'>AUD: 414.70</FooterLink>
              <FooterLink href='#'>NZD: 4302.11</FooterLink>
              <FooterLink href='#'>LKR: 320.1K</FooterLink>
              <FooterLink href='#'>INR: 1.00</FooterLink>
              <FooterLink href='#'>BTC: 237.72</FooterLink>
              <FooterLink href='#'>ETH: 3260.00</FooterLink>
              <FooterLink href='#'>BNB: 3.41K</FooterLink>
              <FooterLink href='#'>TAUD: 12.90</FooterLink>
              <FooterLink href='#'>USDT: 1050.00</FooterLink>
              <FooterLink href='#'>SHIBU: 1.46</FooterLink>
            </Column>
            <Column>
              <Heading className='mb-4'>Communities</Heading>
              <FooterLink href='#'>
                <i className='fab fa-facebook-f'>
                  <span style={{ marginLeft: '10px' }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-instagram'>
                  <span style={{ marginLeft: '10px' }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-twitter'>
                  <span style={{ marginLeft: '10px' }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>Youtube</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>Medium</span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span style={{ marginLeft: '10px' }}>GitHub</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <h1 style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
          2017-2022&copy;Copyright tupetrading.io All Rights Reserved.
        </h1>
      </div>
      {responsive && (
        <div className='footerMobile'>
          <div className='accordion-container' id='footerAccordion'>
            <div className='accordion' id='accordionAbout'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionAbout')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>About</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>About Us</FooterLink>
                <FooterLink href='#'>Security Settings</FooterLink>
                <FooterLink href='#'>AML</FooterLink>
                <FooterLink href='#'>Join Us</FooterLink>
                <FooterLink href='#'>Referral Bouns</FooterLink>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Terms of Service</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionTradingPairs'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionTradingPairs')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Trading Pairs</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>TUPE</FooterLink>
                <FooterLink href='#'>AUD</FooterLink>
                <FooterLink href='#'>NZD</FooterLink>
                <FooterLink href='#'>LKR</FooterLink>
                <FooterLink href='#'>INR</FooterLink>
                <FooterLink href='#'>BTC</FooterLink>
                <FooterLink href='#'>ETH</FooterLink>
                <FooterLink href='#'>BNB</FooterLink>
                <FooterLink href='#'>TAUD</FooterLink>
                <FooterLink href='#'>USDT</FooterLink>
                <FooterLink href='#'>SHIBU</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionData'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionData')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Data & Cooperation</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Apply to be VIP</FooterLink>
                <FooterLink>Fees</FooterLink>
                <FooterLink>Apply To List</FooterLink>
                <FooterLink>IEO Listing</FooterLink>
                <FooterLink>Market Cooperation</FooterLink>
                <FooterLink>Events</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionReference'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionReference')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Reference</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Quick Start</FooterLink>
                <FooterLink>API</FooterLink>
                <FooterLink>FAQ</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionSupport'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionSupport')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Support</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>Contact Us</FooterLink>
                <FooterLink href='#'>Submit Your Request</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionTradingvolume'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionTradingvolume')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>24h Total Trading Volume</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink href='#'>TUPE: 1.00</FooterLink>
                <FooterLink href='#'>AUD: 414.70</FooterLink>
                <FooterLink href='#'>NZD: 4302.11</FooterLink>
                <FooterLink href='#'>LKR: 320.1K</FooterLink>
                <FooterLink href='#'>INR: 1.00</FooterLink>
                <FooterLink href='#'>ETH: 3260.00</FooterLink>
                <FooterLink href='#'>BNB: 3.41K</FooterLink>
                <FooterLink href='#'>TAUD: 12.90</FooterLink>
                <FooterLink href='#'>USDT: 1050.00</FooterLink>
                <FooterLink href='#'>SHIBU: 1.46</FooterLink>
              </div>
            </div>

            <div className='accordion' id='accordionRecovery'>
              <div
                className='accordion-header'
                role='button'
                tabIndex={0}
                onClick={() => toggleAccordion('accordionRecovery')}
                onKeyDown={() => handleKeyDown()}
              >
                <Heading>Account Recovery</Heading>
                <i className='material-icons expand-icon'>expand_more</i>
              </div>
              <div className='accordion-content'>
                <FooterLink>Change mail Address</FooterLink>
                <FooterLink>Change Mobile Number</FooterLink>
                <FooterLink>I have lost my 2FA code</FooterLink>
                <FooterLink>Unlock my Account</FooterLink>
                <FooterLink>Forgot my password</FooterLink>
              </div>
            </div>
          </div>
          <div className='socials'>
            <FacebookIcon sx={{ fontSize: 32, color: 'white' }} />
            <InstagramIcon sx={{ fontSize: 32, color: 'white' }} />
            <TwitterIcon sx={{ fontSize: 32, color: 'white' }} />
            <YouTubeIcon sx={{ fontSize: 32, color: 'white' }} />
            <GitHubIcon sx={{ fontSize: 32, color: 'white' }} />
            <img src='/images/medium_icon.png' alt='' className='medium-icon' />
          </div>
          <div className='copyright'>
            <span className='nowrap'>2017-2022&copy;Copyright tupetrading.io</span>
            <br />
            <span className='nowrap'>All Rights Reserved.</span>
          </div>
        </div>
      )}
    </Box>
  );
};

Footer.defaultProps = {
  responsive: false,
};

Footer.propTypes = {
  responsive: PropTypes.bool,
};

export default Footer;
