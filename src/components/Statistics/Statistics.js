import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    <div className={s.box}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s['stat-list']}>
        {stats.map(stats => (
          <li
            key={stats.id}
            className={s.item}
            style={{
              backgroundColor: `${generateColor()}`,
            }}
          >
            <span className={s.label}>{stats.label}</span>
            <span className={s.percentage}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
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
};

export default Statistics;
