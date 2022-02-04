import React from 'react';
import Logo from '../../assets/icons/Logo';
import PlusIcon from '../../assets/icons/PlusIcon';
import IconButton from '../iconButton/IconButton';
import styles from './Header.scss';
const { rootClassName } = styles;

export default function Header() {
  return (
    <header className={rootClassName}>
      <div className={`${rootClassName}-logo`}>
        <Logo size={30} translucent />
        <span>LikeTrello</span>
      </div>
      <div>
        <IconButton icon={<PlusIcon />} theme='light' />
      </div>
    </header>
  );
}
