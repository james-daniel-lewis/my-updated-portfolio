import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'


const Layout = (props) => {
  return (
    <div className={LayoutStyles.container}>
    <div className={LayoutStyles.content}>
      <Header />
      {props.children}
    </div>
      <Footer />
    </div>
   );
}
 
export default Layout;