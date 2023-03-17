import React from 'react';
import Layout from '@components/layout';
import Header from '@components/sections/header';
import Main from '@components/sections/main';

export default function App() {
  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}

export { Head } from '@components/head';
