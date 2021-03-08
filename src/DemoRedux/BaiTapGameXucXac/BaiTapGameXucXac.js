import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
// import file css vào trong component
import './BaiTapGameXucXac.css';
import {connect} from 'react-redux'

class BaiTapGameXucXac extends Component {
    render() {
        return (
          <div className="bgGameXucXac">
            <h1 style={{textAlign:"center"}}>Bài Tập Game Xúc Xắc</h1>
            <XucXac />
            <div className="text-center display-4 text-warning">
              {this.props.tongDiem}:{this.props.ketQua}
            </div>
            <KetQuaTroChoi />
          </div>
        );
    }
}
const mapStateToProps = (state) =>{

  let mangXucXac = state.baiTapGameReducer.mangXucXac;
  
  // tính tổng điểm từ mảng xúc xắc
  let tongDiem = mangXucXac.reduce((td,xucXac,index)=>{
    return td+=xucXac.diem;
  },0)
  // Lấy tổng điểm tạo ra kết quả
  let ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu';

  //Prop của bạn sinh ra từ hàm mapStateToProps
  return{
    tongDiem: tongDiem,
    ketQua: ketQua
  }
}


export default connect(mapStateToProps)(BaiTapGameXucXac);
