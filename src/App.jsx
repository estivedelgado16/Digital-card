//import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo.jsx';
import SocialNetworks from './components/SocialNetworks.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import Avatar from './components/Avatar.jsx';

function App() {
  return (
    <div className='card '>
      <Avatar/>
      <MyInfo/>
      <SocialNetworks/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
