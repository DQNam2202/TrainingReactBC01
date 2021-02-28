import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    // Bên nhận
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình Ảnh</th>
                <th>Giá SP</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
              </tr>
            </thead>
            <tbody>
              {gioHang.map((spGH, index) => {
                return (
                  <tr key={index}>
                    <th>{spGH.maSP}</th>
                    <th>{spGH.tenSP}</th>
                    <th>
                      <img src={spGH.hinhAnh} width={50} height={50}></img>
                    </th>
                    <th>{spGH.gia}</th>
                    <th>
                      <button
                        className="btn btn-primary mr-1"
                        onClick={() => tangGiamSoLuong(spGH.maSP, 1)}
                      >
                        +
                      </button>
                      {spGH.soLuong}
                      <button
                        className="btn btn-primary ml-1"
                        onClick={() => tangGiamSoLuong(spGH.maSP, -1)}
                      >
                        -
                      </button>
                    </th>
                    <th>{spGH.gia * spGH.soLuong}</th>
                    <th>
                      <button
                        className="btn btn-danger"
                        onClick={() => xoaGioHang(spGH.maSP)}
                      >
                        Xóa
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td>Tổng Tiền: </td>
                <td>{this.tinhTongTien()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
  tinhTongTien = () => {
    let tongTien = this.props.gioHang.reduce((tongTien, sp, index) => {
      tongTien += sp.soLuong * sp.gia;
      return tongTien;
    }, 0);
    // Muốn hiển thị giá trị đẹp
    return tongTien.toLocaleString();
  };
}
