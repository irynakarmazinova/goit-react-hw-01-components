import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => <section className={s.section}>{children}</section>;

Section.propTypes = {
  children: PropTypes.node, //node-что угодно, все, что может быть зарендерино
};

export default Section;
