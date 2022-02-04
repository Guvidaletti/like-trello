import React, { ButtonHTMLAttributes, useMemo } from 'react';
import { getMergedClassNames } from '../../utiils/HTMLUtils';
import styles from './IconButton.scss';
const { rootClassName } = styles;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  theme?: 'dark' | 'light';
}

export default function IconButton(props: IconButtonProps) {
  const filteredProps = useMemo(() => {
    const p = { ...props };
    delete p.icon;
    delete p.theme;
    return p;
  }, [props]);
  return (
    <button
      {...filteredProps}
      className={getMergedClassNames([
        rootClassName,
        props.className,
        props.theme || 'dark',
      ])}
    >
      {props.children || props.icon}
    </button>
  );
}
