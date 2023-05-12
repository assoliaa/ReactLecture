import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Expericne from './components/Experience';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hello/>
      <AboutMe/>
      <Expericne/>
      <Footer/>
    </div>
  );
}

export default App;
