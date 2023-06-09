import PropTypes from 'prop-types';
import styles from './container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
