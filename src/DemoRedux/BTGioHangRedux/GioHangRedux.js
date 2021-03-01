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
            {this.props.gioHang.map((spGioHang, index) => {
              return (
                <tr key={index}>
                  <td>{spGioHang.maSP}</td>
                  <td>{spGioHang.tenSP}</td>
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, 1);
                      }}
                    >
                      +
                    </button>
                    {spGioHang.soLuong}
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGioHang.maSP, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGioHang.giaBan}</td>
                  <td>{spGioHang.giaBan * spGioHang.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaSanPham(spGioHang.maSP);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
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
    // gioHang: tên props component
    gioHang: state.gioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      // console.log("object",maSP,soLuong);
      const action = {
        type: "THAY_DOI_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };
      dispatch(action);
    },
    xoaSanPham: (maSP) => {
      const action = {
        type: "XOA_SAN_PHAM",
        maSP: maSP,
      };
      //Đưa dữ liệu lên dispatch
      dispatch(action);
    },
  };
};

//B1: Xóa export default trên dòng 4
//B2: import { connect } from "react-redux";
//B3: Kết nối giữa component và redux

// khi component này được gọi nó sẽ trả về GioHangRedux kèm với props
const GioHangConnectRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(GioHangRedux);

export default GioHangConnectRedux;
