import React, { Component } from "react";

import style from "./DataBinding.module.css"
// Hiển thị data lên nơi mình cần hiển thị
export default class DataBinding extends Component {
  sinhVien = {
    id: 1,
    hoTen: "Dương Quốc Nam",
  };

  rederSinhVien = () => {
    //Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
    // Truy xuất đến thuộc tính bên ngoài thì dùng this.SinhVien
    return (
      <div>
        id: {this.sinhVien.id} - ten: {this.sinhVien.hoTen}
      </div>
    );
  };

  render() {
    //Phương thức

    let title = "hello cybersoft";
    let sanPham = {
      ten: "Iphone 5s",
      gia: 10000000,
      hinhAnh: "https://picsum.photos/200/200",
    };

    return (
      <div>
        <p className={`text-center ${style.textGreen} ${style['txt-light']}`}>abc</p>
        <p style={{backgroundColor:"red",color:'white',textAlign:'center'}}>HELLO WORD</p>
        {this.rederSinhVien()}
        <h3>Họ Tên: {this.sinhVien.hoTen}</h3>
        <p id="title">{title}</p>
        <div className="card text-left w-25">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
