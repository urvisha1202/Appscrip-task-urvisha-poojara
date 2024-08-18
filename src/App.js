//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import MainContent from './MainContent';
import './App.css';
import ProductList from './ProductList'; 
import Footer from './Footer';   
//import FilterLayout from './FilterLayout';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body"> 
      <SideMenu /> 
        <MainContent />
      </div>
      <div style={styles.content}>
        <ProductList />
    </div>
    <Footer/>
    </div>
  );
}
const styles = {
  app: {
      fontFamily: 'Arial, sans-serif',
  },
  content: {
      marginLeft: '220px', // Space for the side menu
     
     
  }
};
export default App;
