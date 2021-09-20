import React from 'react';
import MainLayout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <MainLayout />
      <ToastContainer />
    </>
  );
};

export default App;
