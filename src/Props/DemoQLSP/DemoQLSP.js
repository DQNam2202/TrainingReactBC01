import React, { Component } from "react";
import GioHang from "../GioHang";
import SanPhamDemo from "./SanPhamDemo";

export default class DemoQLSP extends Component {
  //Dữ liệu thay đổi đặt trong State
  // Dùng Object lưu trữ thông tin điện thoại chi tiết
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      {
        maSP: 1,
        hinhAnh: "./img/applephone.jpg",
        tenSP: "Iphone",
        gia: 40000000,
        soLuong: 1,
      },
    ],
  };
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  //

  renderSanPham = () => {
    const arrJSX = this.mangSanPham.map((sanPham, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <SanPhamDemo
            sanPham={sanPham}
            xemCT={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
          {/* <div className="card text-left">
            <img
              style={{ height: 300 }}
              className="card-img-top"
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
            />
            <div className="card-body">
              <h4 style={{ height: 50 }} className="card-title">
                {sanPham.tenSP.length > 50 ? (
                  //Sub dùng để thu nhỏ chữ lại
                  <p>{sanPham.tenSP.sub(0, 100)}</p>
                ) : (
                  <p>{sanPham.tenSP}</p>
                )}
              </h4>
              <p className="card-text">{sanPham.giaBan}</p>
              <button onClick={() => {
                  this.xemChiTiet(sanPham);
              }} className="btn btn-success">
                Xem chi tiết
              </button>
            </div>
          </div> */}
        </div>
      );
    });
    return arrJSX;
  };

  // Hàm xử lý làm thay đổi state sẽ được đặt tại Component chứa state
  themGioHang = (sanPhamClick) => {
    //Sau khi click taọ ra một sản phẩm giống như trong giỏ hàng
    let spGH = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      gia: sanPhamClick.giaBan,
      soLuong: 1,
      hinhAnh: sanPhamClick.hinhAnh,
    };
    // Tạo ra một bảng sao chép giỏ hàng
    let gioHangUpdate = [...this.state.gioHang];
    // Xử lý kiểm tra state giỏ hàng có chữa dữ liệu sản phẩm khi Click hay chưa => nếu có thì tăng số lượng,
    // không có thì thêm vào giỏ hàng

    // FindIndex : tìm ra vị trí
    // Find: tìm ra vị trí của object đó , object có bảng chất tham chiếu
    let indexSPGH = gioHangUpdate.findIndex(
      (sp) => sp.maSP === sanPhamClick.maSP
    );
    if (indexSPGH !== -1) {
      // Nếu có rồi thì sẽ tăng số lượng
      gioHangUpdate[indexSPGH].soLuong += 1; //Tìm thấy vị trí index
    } else {
      // Nếu chưa có sẽ thêm vô
      gioHangUpdate.push(spGH);
    }
    // Cập nhật lại giở hàng
    // giỏ hàng khi thấy dữ liệu thay đổi nó sẽ render lại
    this.setState({
      gioHang: gioHangUpdate,
      // gioHang: ...giỏ hàng mới
    });
  };

  // Xử lý xóa giỏ hàng
  xoaGioHang = (maSP) => {
    //B1: Tạo ra một bảng sao chép giỏ hàng
    let gioHangUpdate = [...this.state.gioHang];
    //B2: Xác định đúng mã giỏ hàng mà ta cần xóa
    let indexSP = gioHangUpdate.findIndex((sp) => sp.maSP === maSP);
    //Chú ý: filter => Hàm lọc ra mảng mới có trả về
    if (indexSP !== -1) {
      // Tìm thấy vị trí giỏ hàng cần xóa
      gioHangUpdate.splice(indexSP, 1);
    }
    //B3: Sau khi xóa xong sẽ render lại giao diện
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  tangGiamSoLuong = (maSP, soLuong) => {
    //B1: Tạo ra một bảng sao giỏ hàng
    let gioHangUpdate = [...this.state.gioHang];
    //B2: Xác định đúng giỏ hàng cần tìm
    let index = gioHangUpdate.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangUpdate[index].soLuong += soLuong;
      // Khi nhỏ hơn 0 thì không cho nó giảm nữa
      // Button tăng: Khi nó nhỏ hơn 0 thì nó sẽ cộng lên 1
      // Button giảm: Khi nó lớn hơn 1 thì nó sẽ trừ đi 1
      if (gioHangUpdate[index].soLuong <= 0) {
        alert("Số lượng không hợp lệ");
        gioHangUpdate[index].soLuong -= soLuong;
        return;
      }
    }

    //B3: render lại giao diện
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  // Một mảng mà muốn biến thành 1 giá trị thì dùng reduce

  xemChiTiet = (sanPhamClick) => {
    // console.log(sanPhamClick);
    this.setState({
      spChiTiet: sanPhamClick,
    });
  };
  render() {
    //Bóc tách phần tử
    let {
      hinhAnh,
      heDieuHanh,
      tenSP,
      manHinh,
      ram,
      rom,
      cameraTruoc,
      cameraSau,
    } = this.state.spChiTiet;

    return (
      <div className="container">
        <h1 className="mt-2">Giỏ Hàng</h1>

        {/* Truyền tên gì thì nhận sẽ phải lấy đúng tên đó */}
        {/* Bên truyền */}
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />

        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h3 className="text-center">{tenSP}</h3>
            <img
              className="card-img-top"
              style={{ height: 300 }}
              src={hinhAnh}
              alt={hinhAnh}
            ></img>
          </div>
          <div className="col-8">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn Hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ Điều Hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
