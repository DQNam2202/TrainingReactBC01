import { combineReducers, createStore } from "redux";
import { baiTapGameReducer } from "./reducers/BaiTapGameXucXacReducer";
import { gioHangReducer } from "./reducers/GioHangReducer";


const rootReducer = combineReducers({
  // Gộp chung 2 cái State và setState đều được gom chung
  gioHangReducer: gioHangReducer,
  // State theo từng nghiệp vụ
  // Tên giá trị trùng với teen thuộc tính thì chỉ sử dụng 1 cái
  baiTapGameReducer: baiTapGameReducer 
});


export const store = createStore(rootReducer);
