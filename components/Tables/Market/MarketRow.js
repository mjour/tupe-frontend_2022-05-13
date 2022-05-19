import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MarketRow = memo(({ item }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  return (
    <tr>
      <td className='markFavorite'>
        <div className='markFavorite-icon'>
          <i className='material-icons'>star_border</i>
        </div>
      </td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.image}')` }} />
        <strong>{item.symbol}</strong>
      </td>
      <td className='nowrap'>
        <strong>{item.name}</strong>
      </td>
      <td className='right'>
        <strong>
          {item.current_price.toLocaleString()} {item.currency}
        </strong>
      </td>
      <td className='right'>
        <strong className={color}>{item.price_change_percentage_24h.toFixed(1)}%</strong>
      </td>
      <td className='right responsive-hide2'>{item.high_24h}</td>
      <td className='right responsive-hide2'>{item.low_24h}</td>
      <td className='right'>${item.market_cap.toLocaleString()}</td>
    </tr>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;
