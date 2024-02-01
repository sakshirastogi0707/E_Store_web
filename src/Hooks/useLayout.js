import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const useLayout = (WrappedComponent) => {
  return (props) => (
    <>
      <Header />
      <WrappedComponent {...props} />
      <Footer />
    </>
  );
};


