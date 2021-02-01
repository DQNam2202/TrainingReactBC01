import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayOut/BaiTapLayout';
import BTHeader from './components/BaiTapLayOut/BTHeader';
import BTSlider from './components/BaiTapLayOut/BTSlider';
import BTProductList from './components/BaiTapLayOut/BTProductList';
import BTProduct from './components/BaiTapLayOut/BTProduct';
import BTFooter from './components/BaiTapLayOut/BTFooter';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <BTHeader/>
      <BTSlider/>
      <BTProductList/>
      <BTProduct />
      <BTFooter/> */}
      <DataBinding/>
    </div>
  );
}

export default App;
