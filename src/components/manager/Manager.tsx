import React from 'react';
import Routes from '../../routes';
import Header from '../header/Header';
import styles from './Manager.scss';
const { rootClassName } = styles;
function Manager() {
  return (
    <div className={rootClassName}>
      <Header />
      <div className={`${rootClassName}-content`}>{<Routes />}</div>
    </div>
  );
}

export default Manager;
