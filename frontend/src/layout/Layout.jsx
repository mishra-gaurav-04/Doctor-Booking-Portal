import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Routers from '../Routes/Routers';

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout