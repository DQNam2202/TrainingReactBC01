import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {
    //Tên tự đặt ta lấy ra từ prop
    let { sanPham } = this.props;
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src={sanPham?.hinhAnh}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{sanPham?.tenSP}</h4>
                <p className="card-text">
                  Giá: {sanPham?.gia}
                </p>
                <a href="#" className="btn btn-primary mx-1">
                  Detail
                </a>
                <a href="#" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
