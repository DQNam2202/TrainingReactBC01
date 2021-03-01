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
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './StateReact/DemoState';
import BaiTapChonXe from './StateReact/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderMap from './RenderWithMap/BaiTapRenderMap';
import DemoProps from './Props/DemoProps';
import DemoQLSP from './Props/DemoQLSP/DemoQLSP';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';
import BaiTapGameXucXac from './DemoRedux/BaiTapGameXucXac/BaiTapGameXucXac';

function App() {
  return (
    <div className="App">
      {/* <BTProductList /> */}
      {/* <BTHeader/>
      <BTSlider/>
      <BTProduct />
      <BTFooter/> */}
      {/* <DataBinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoQLSP / > */}
      {/* <BTGioHangRedux /> */}
      <BaiTapGameXucXac />
    </div>
  );
}

export default App;
