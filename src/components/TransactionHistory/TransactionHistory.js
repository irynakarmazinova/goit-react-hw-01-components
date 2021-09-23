import classnames from 'classnames';
// var classnames = require('classnames');
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  // <table className={s['transaction-history']}> //дефис в ключах объекта нельзя использовать, модульные стили возвращают js объект. Дефис не использовать в названиях классов!
  <table className={s.transaction_history}>
    <thead className={s.thead}>
      <tr className={s.head_line}>
        <th className={s.th}>Type</th>
        <th className={s.th}>Amount</th>
        <th className={s.th}>Currency</th>
      </tr>
    </thead>

    <tbody className={s.tbody}>
      {items.map(item => (
        <tr key={item.id} className={s.body_line}>
          <td className={classnames(s.td, s.td_type)}>{item.type}</td>
          <td className={s.td}>{item.amount}</td>
          <td className={classnames(s.td, s.td_currency)}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

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
