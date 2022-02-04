import React from 'react';
import { Link } from 'react-router-dom';
import useQuadros from '../../hooks/useQuadros/useQuadros';
import styles from './Home.scss';
const { rootClassName } = styles;

export default function Home() {
  const [quadros, loadingQuadros] = useQuadros();
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}-titulo`}>
        Quadros
        {loadingQuadros ? <span>{' - Carregando...'}</span> : undefined}
      </div>
      <div className={`${rootClassName}-quadros`}>
        {quadros && quadros.length ? (
          quadros.map((q, index) => {
            const bkg = String(q.background).match(/#\w{6}/)
              ? q.background
              : `url("${q.background}")`;

            return (
              <Link
                to='/board'
                key={index}
                className={`${rootClassName}-quadro`}
                style={{ background: bkg }}
              >
                <div className={`${rootClassName}-titulo`}>{q.nome}</div>
              </Link>
            );
          })
        ) : (
          <div className={`${rootClassName}-not-found`}>
            Você não possui nenhum quadro
          </div>
        )}
      </div>
    </div>
  );
}
