import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const secondLaneColor = '#ecf1f4';

  // const classes = s.td + ' ' + s['td-type'];
  const classesType = `${s.td} ${s['td-type']}`;
  const classesCurrency = `${s.td} ${s['td-currency']}`;

  return (
    <table className={s['transaction-history']}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={classesType}>{item.type}</td>
            <td className={s.td}>{item.amount}</td>
            <td className={classesCurrency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
