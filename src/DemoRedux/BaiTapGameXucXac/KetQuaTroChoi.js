import React, { Component } from 'react'
// Thư viện kết nối store của redux
import {connect} from 'react-redux'

class KetQuaTroChoi extends Component {

    render() {
        let { stateGame } = this.props;
        // this.props.dispatch;
        return (
          <div className="container text-center">
            <div className="display-4">
              Bạn chọn: <span className="text-success">{stateGame.banChon}</span>
            </div>
            <div className="display-4">
              Số bàn thắng: <span className="text-warning">{stateGame.soBanThang}</span>
            </div>
            <div className="display-4">
              Số bàn chời: <span className="text-primary">{stateGame.tongSoBanChoi}</span>
            </div>
            <div className="display-4">
              <button onClick={()=>{
                // Tạo ra 1 action
                const action = {
                    type:"PLAY_GAME",
                }
                // 
                // Đưa action lên reducer
                this.props.dispatch(action);

              }} className="btn btn-succes p-5">
                <span className="bg-success w-25 display-4">Play game</span>
              </button>
            </div>
          </div>
        );
    }
}
// Viết hàm lấy giá trị từ store redux về biến thành prop của component
// Binding lên giao diện bằng Props
const mapStateToProps = (rootReducer) =>{
  // state đại diện cho rootReducer

  // Không return về props thì nó sẽ không sinh ra props nào hết
  return{
    stateGame: rootReducer.baiTapGameReducer
    // banChon: rootReducer.baiTapGameReducer.banChon
  }
}



export default connect(mapStateToProps)(KetQuaTroChoi);
