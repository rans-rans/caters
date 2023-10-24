"use client"
import React from 'react';
import { NextUIProvider as Provider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import NavBar from '../clients/navbar';

export default function NextUiProvider({children}) {
  return (
    <Provider  >
        <SessionProvider >
          <NavBar/>
          <>
            {children}
          </>
        </SessionProvider>
    </Provider>
  );
}
