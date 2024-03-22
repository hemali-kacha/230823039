// import logo from './logo.svg';
import './App.css';



function App(props) {
  return (
    <>
        <Navbar text="Feed" img={myImage}/>
            <Navbar text="Explore" img={myImage2}/>
            <Navbar text="MarketPlace" img={myImage3}/>
            <Navbar text="Groups" img={myImage4}/>
            <Navbar text="My Favorites" img={myImage5}/>
            <Navbar text="Messages" img={myImage6}/>
            <Navbar text="Settings" img={myImage7}/>
    </>
  );
}

export default App;
