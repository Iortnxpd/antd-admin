import React from 'react';
import { connect } from 'dva';
import styles from './Costs.css';

function Costs() {
  return (
    <div className={styles.normal}>
      Route Component: Costs
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Costs);
