
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Categorieslist from './components/Categorieslist/Categorieslist';
import Carousel from "./components/Carousel/Carousel";
import BankImage from './components/BankImage/BankImage';
function App() {
  return (
    <div >
     <Navbar/>
    <Categorieslist/>
    <Carousel/>
    <BankImage/>
    </div>
  );
};

export default App;
