import React, { Component } from "react";
// Kết nối react component với redux store
import { connect } from "react-redux";
class GioHangRedux extends Component {
  render() {
    // console.log(this.props.gioHang, "gioHang");
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th>Thành Tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGioHang,index)=>{
                return (
                  <tr key={index}>
                    <td>{spGioHang.maSP}</td>
                    <td>{spGioHang.tenSP}</td>
                    <td>{spGioHang.soLuong}</td>
                    <td>{spGioHang.gia}</td>
                    <td>{spGioHang.gia * spGioHang.soLuong}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//B4: Hàm chuyển State trên redux trở thành Props của component
const mapStateToProps = (state) => {
  //Tạo props từ state redux
  return {
    //Tạo ra props giỏ hàng
    gioHang: state.gioHangReducer.gioHang,
  };
};

//B1: Xóa export default trên dòng 4
//B2: import { connect } from "react-redux";
//B3: Kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux);
