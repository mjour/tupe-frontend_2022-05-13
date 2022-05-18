import { memo } from 'react';
import PropTypes from 'prop-types';

const TopBar = memo(({ searchValue, searchOnChange, searchSubmit }) => (
  <div className='top-buttons'>
    <div className='top-search no-select nowrap'>
      <form onSubmit={searchSubmit} noValidate>
        <input
          type='text'
          id='search'
          name='search'
          autoComplete='off'
          placeholder='Search...'
          onChange={searchOnChange}
          value={searchValue}
        />
        <button type='submit' className='pointer'>
          <i className='material-icons'>search</i>
        </button>
      </form>
    </div>
    <div className='flex flex-center flex-space-between mt-2'>
      <div className='btn-box'>
        <button className='button button-white button-small active' type='button'>
          <span className='txt'>Favorites</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>TUPE</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>AUD</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>NZD</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>LKR</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>INR</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>BTC</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>ETH</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>BNB</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>TAUD</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>USDT</span>
        </button>
        <button className='button button-white button-small' type='button'>
          <span className='txt'>SHIBU</span>
        </button>
      </div>
      {/* <button type='button' className='button button-white button-large'>
        <i className='material-icons button-icon-left'>event</i>
        Period
        <i className='material-icons button-icon-right'>keyboard_arrow_down</i>
      </button> */}
      {/* <button type='button' className='button button-white button-small'>
        Favorites
      </button>
      <button type='button' className='button button-white button-small'>
        Global Select
      </button>
      <button type='button' className='button button-white button-small'>
        Global
      </button>
      <button type='button' className='button button-white button-small'>
        Growing
      </button> */}
      {/* <button type='button' className='button button-white button-small'>
        DAO
      </button>
      <button type='button' className='button button-white button-small'>
        Cosmos
      </button>
      <button type='button' className='button button-white button-small'>
        GameFi
      </button>
      <button type='button' className='button button-white button-small'>
        Metaverse
      </button>
      <button type='button' className='button button-white button-small'>
        OHM&forks
      </button>
      <button type='button' className='button button-white button-small'>
        Sections
      </button> */}
      {/* <button type='button' className='button button-purple button-large'>
        <i className='material-icons button-icon-left'>download</i>
        CSV Download
      </button> */}
    </div>
  </div>
));

TopBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired,
};

export default TopBar;
