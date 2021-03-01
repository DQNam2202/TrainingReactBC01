import React, { Component } from "react";
//Kết nối redux
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    console.log("prop123", this.props);
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
            <button
              className="btn btn-danger ml-2"
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

//Hàm lấy dùng để lấy State từ redux về tạo thành Props của component
const mapStateToProps = (state) => {
  return {};
};

//Hàm dùng để tạo ra props là hàm xử lý sự kiện đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    // Tham số dispatch đưa dữ liệu lên redux
    // Tạo ra những hàm đưa dữ liệu lên redux
    themGioHang: (sanPhamClick) => {
      console.log("sp được Click", sanPhamClick);
      // Tạo ra spGioHang từ spClick
      // Mỗi lần Click số lượng sẽ là 1
      const spGioHang = { ...sanPhamClick, soLuong: 1 };
      // Đưa dữ liệu lên redux store
      const action = {
        type: "THEM_GIO_HANG",// Thuộc tính bắt buộc khi gửi dữ liệu lên redux
        spGioHang: spGioHang
      }
      // Dùng hàm dispatch đưa dữ liệu lên reducer (redux store)
      dispatch(action);
    },
  };
};

// nếu mapStateToProps không trả ra giá trị nào thì mình có thể để: null
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
