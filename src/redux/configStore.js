import { combineReducers, createStore } from "redux";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      gia: 40000000,
      hinhAnh: "./img/applePhone.jpg",
      soLuong: 1
    },
  ],
};

const rootReducer = combineReducers({
  // Gộp chung 2 cái State và setState đều được gom chung
  gioHangReducer: (state = stateDefault, action) => {
      //Hàm xử lý để trả về Object
    return { ...state };
  },
  // State theo từng nghiệp vụ

});

export const store = createStore(rootReducer);
