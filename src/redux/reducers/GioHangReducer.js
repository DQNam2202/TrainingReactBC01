const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      giaBan: 40000000,
      hinhAnh: "./img/applePhone.jpg",
      soLuong: 1,
    }
  ]
}

export const gioHangReducer = (state = stateDefault, action) => {
    
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        //Xử lý thay đổi state.gioHang trên redux
        //console.log('object',action)

        // Bước 1: sao chép giỏ hàng ra array mới
        const gioHangUpdate = [...state.gioHang];
        // Bước 2: Kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
        let index = gioHangUpdate.findIndex(
          (sp) => sp.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          gioHangUpdate.push(action.spGioHang);
        }
        // Bước 3: Cập nhật lại state.gioHang => bước này giống như this.setState tại component
        state.gioHang = gioHangUpdate;

        // khi so sánh giữa state cũ và state mới thì dựa vào địa chỉ
        // khi vào chuỗi hoặc số thì không cần {...}
        // Đó là quy định tính bất biến của redux
        return { ...state };
      }
      break;

    case "THAY_DOI_SO_LUONG":
      {
        // Bước 1: sao chép giỏ hàng ra array mới
        const gioHangUpdate = [...state.gioHang];
        // Bước 2: Kiểm tra sản phẩm có trong giỏ hàng hay chưa
        let index = gioHangUpdate.findIndex((sp) => sp.maSP === action.maSP);
        if (index !== -1) {
          if( gioHangUpdate[index].soLuong >= 1){
            gioHangUpdate[index].soLuong += action.soLuong;
          }else{
            alert("Số lượng không hợp lệ")
          }
        }

        state.gioHang = gioHangUpdate;

        return { ...state };
      }
      break;

    case "XOA_SAN_PHAM":
      {
        // Bước 1: sao chép giỏ hàng ra array mới
        const gioHangUpdate = [...state.gioHang];
        // Bước 2: Kiểm tra sản phẩm có trong giỏ hàng hay chưa
        let index = gioHangUpdate.findIndex((sp) => sp.maSP === action.maSP);
        if (index !== -1) {
          gioHangUpdate.splice(index,1);
        }

        state.gioHang = gioHangUpdate;

        return { ...state };
      }
      break;

    default:
      break;
  }
  
  //Hàm xử lý để trả về Object
    return { ...state };
}