import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MarketRow = memo(({ item, index, multiple }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);
  const price = item.price_change_percentage_24h;

  function round(x) {
    return (Math.round(x * 100000000) / 100000000);
  }

  return (
    <tr>
      <td className='markFavorite' style={{width:80}}>
        <div className='markFavorite-icon'>
          <i className='material-icons'>star_border</i>
          <span style={{marginLeft:5, marginTop: 7, display:"inline-flex", verticalAlign:"top"}}>{index}</span>
        </div>
      </td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
        <strong>{item.symbol}</strong>
      </td>
      <td className='nowrap'>
        <strong>{item.name}</strong>
      </td>
      <td className='right' style={{width: 150}}>
        <strong>
          {round(item.current_price/multiple)} {item.currency}
        </strong>
      </td>
      <td className='right'>
        <strong className={price > 0 ? 'green': (price == '0.00' ? 'gray':'red')}>{price > 0 ? "+" : ""} {round(price/multiple)}%</strong>
      </td>
      <td className='right responsive-hide2'>{round(item.high_24h/multiple)}</td>
      <td className='right responsive-hide2'>{round(item.low_24h/multiple)}</td>
      <td className='right' style={{width: 300}}>${(round(item.market_cap/multiple)).toLocaleString()}</td>
    </tr>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;
