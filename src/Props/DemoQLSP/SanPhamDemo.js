import React, { Component } from "react";

export default class SanPhamDemo extends Component {
  render() {
    let { sanPham } = this.props;
    let { xemCT } = this.props;

    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            style={{ height: 300 }}
            src={sanPham.hinhAnh}
            alt={sanPham.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button className="btn btn-success" onClick={() => xemCT(sanPham)}>
              Xem chi tiết
            </button>
            <button
              className="btn btn-danger ml-3"
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
