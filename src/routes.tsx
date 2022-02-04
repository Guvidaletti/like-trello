import React from 'react';
import { Route, Routes as RouterDomRoutes } from 'react-router-dom';
import Board from './pages/board/Board';
import Home from './pages/home/Home';

export default function Routes() {
  return (
    <RouterDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/board'>
        <Route path=':id' element={<Board />} />
      </Route>
    </RouterDomRoutes>
  );
}
