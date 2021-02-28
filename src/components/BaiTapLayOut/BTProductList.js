import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 4, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];

  renderSanPham = () => {
    const arrJSX = this.mangSanPham.map((sp, index) => {
      return (
        <div key={index} className="col-3">
          <BTProductItem sanPham={sp}/>
        </div>
      )
    });
    return arrJSX;
  };

  render() {
    return (
      <div className="container-fluid bg-dark pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {this.renderSanPham()}
          {/* <div className="col-3">
            <BTProductItem />
          </div>
          <div className="col-3">
            <BTProductItem />
          </div>
          <div className="col-3">
            <BTProductItem />
          </div>
          <div className="col-3">
            <BTProductItem />
          </div> */}
        </div>
      </div>
    );
  }
}
