//import file
import logo from './logo.svg';
import './App.css';
import Navbar from './komponen/Navbar';
import Carddata from './komponen/Carddata';
import Datanegara from './komponen/Datanegara';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Carddata />
        <Datanegara />
    </div>
  );
}

export default App;

