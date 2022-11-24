import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Topheader from './components/Header/Topheader';

function App() {
  return (
    <div className=" ">
<Topheader></Topheader>
      <Header></Header>
     <Home></Home>
    </div>
  );
}

export default App;
