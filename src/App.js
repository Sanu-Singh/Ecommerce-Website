
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Categorieslist from './components/Categorieslist/Categorieslist';
import Carousel from "./components/Carousel/Carousel";
import BankImage from './components/BankImage/BankImage';
import ProductCards from './components/ProductCards/ProductCards';

function App() {
  return (

    <div className="app">
     <Navbar/>
    <Categorieslist/>
    <Carousel/>
    <BankImage/>
    <ProductCards/>
    </div>
  );
};

export default App;
