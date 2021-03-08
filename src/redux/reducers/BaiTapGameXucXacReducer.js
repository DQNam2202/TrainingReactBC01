import XucXac from "../../DemoRedux/BaiTapGameXucXac/XucXac";

const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/1.png" },
    { diem: 6, hinhAnh: "./img/6.png" },
    { diem: 1, hinhAnh: "./img/1.png" },
  ],
};

export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // Deafault nếu không có xảy ra action nào thì trả về state mặc định
    // Khi thay đổi Object này bằng Object khác
    // rootReducer chứa các state con
    case "CHON_TAI_XIU": {
      state.banChon = action.giaTri;

      return { ...state };
    }
    case "PLAY_GAME": {
      // Xử lý random
      // console.log('playgame')
      // Bước 1: tạo ra mảng xúc xắc ngẫu nhiên
      let mangMXXNN = [];
      for (let i = 0; i < 3; i++) {
            //Tạo ra số ngẫu nhiên
            let soNgauNhien = (Math.floor(Math.random()*6)+1);
            //Tạo ra 3 Object ngẫu nhiên
            // Điểm lấy từ số ngẫu nhiên
            let xxNN = {diem:soNgauNhien,hinhAnh:`./img/${soNgauNhien}.png`}
            mangMXXNN.push(xxNN);
      }
      state.mangXucXac = mangMXXNN;

      // Xử lý kết quả
      // index là giá trị ban đầu
      let tongDiem = mangMXXNN.reduce((td,xucXac,index)=>{
          return td += xucXac.diem;
      },0);

      console.log(tongDiem);
      // 3 -> 11 Xỉu 11 -> 18 Tải
      if((tongDiem >= 11 && state.banChon === "Tài") || (tongDiem < 11 && state.banChon === "Xỉu")){
          state.soBanThang += 1;
      }

      state.tongSoBanChoi +=1;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
