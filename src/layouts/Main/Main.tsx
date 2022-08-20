import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

function Main({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <main className={`${pathname === '/' ? 'main' : 'min-h-screen'}`}>{children}</main>;
}

export default Main;
