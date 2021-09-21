import PropTypes from 'prop-types';

const Statistics = ({ title, stats, children }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stats => (
        <li key={stats.id} className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}%</span>
        </li>
      ))}
    </ul>

    {children}
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
  children: PropTypes.node, //node-что угодно, все, что может быть зарендерино
};

// function getRandomColor() {
//   return `rgb${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(
//     0,
//     255,
//   )}, ${randomIntegerFromInterval(0, 255)}`;
// }

export default Statistics;
