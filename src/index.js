import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
// images
import myImage from './images/feed.png';
import myImage2 from './images/explore.png';
import myImage3 from './images/favourite.png';
import myImage4 from './images/group1.png';
import myImage5 from './images/favourite.png';
import myImage6 from './images/message.png';
import myImage7 from './images/setting.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar text="Feed" img={myImage}/>
    <Navbar text="Explore" img={myImage2}/>
    <Navbar text="MarketPlace" img={myImage3}/>
    <Navbar text="Groups" img={myImage4}/>
    <Navbar text="My Favorites" img={myImage5}/>
    <Navbar text="Messages" img={myImage6}/>
    <Navbar text="Settings" img={myImage7}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
