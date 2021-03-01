import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";


const rootReducer = combineReducers({
  // Gộp chung 2 cái State và setState đều được gom chung
  gioHangReducer: gioHangReducer,
  // State theo từng nghiệp vụ
});

export const store = createStore(rootReducer);
