import React from 'react';
import Header from '../components/header';
import Blockchainlist from '../components/blockchainList';

const Home = ()=> {
    return (
      
      <div>
        <Header />
        <h1>This is the home page</h1>

        <Blockchainlist />
      </div>
    );
  }
  
  export default Home;