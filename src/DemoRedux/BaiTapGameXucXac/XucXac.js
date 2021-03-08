import React, { Component } from 'react'

// Bước 1:
import {connect} from 'react-redux'
class XucXac extends Component {
    render() {
        return (
          <div className="container mt-5">
            <div className="row text-center">
              <div className="col-4">
                <button onClick={()=>{
                  this.props.chonTaiXiu("Tài");
                }} style={{ border: "none" }} className="btn btn-danger">
                  <div
                    className="p-5 bg-danger text-white w-100 h-100"
                    style={{ fontSize: 50 }}
                  >
                    Tài
                  </div>
                </button>
              </div>
              <div className="col-4">
                  {this.props.mangXucXac.map((xucXac,index)=>{
                    return <img key={index} src={xucXac.hinhAnh} width="50"></img>
                  })}
              </div>
              <div className="col-4">
                <button onClick={()=>{
                  this.props.chonTaiXiu("Xỉu")
                }} style={{ border: "none" }} className="btn btn-dark">
                  <div
                    className="p-5 bg-dark text-white w-100 h-100"
                    style={{ fontSize: 50 }}
                  >
                    Xỉu
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
    }
}


const mapStateToProps = (state) => ({
  mangXucXac: state.baiTapGameReducer.mangXucXac
}) // state là rootReducer // return {} => ({})

const mapDispathToProps = (dispatch)=>{
  return{
    chonTaiXiu: (giaTri)=>{
      // console.log("giá trị",giaTri);

      // Gửi giá trị được chọn lên redux
      const action ={
        type:"CHON_TAI_XIU",
        giaTri
      };
      dispatch(action);
    }
  }
}

// let show = (value)=>{
//   console.log(value);
// }
// mapDispathToProps(value);

// Bước 2:
// khi bỏ map sẽ biến thành props
export default connect(mapStateToProps,mapDispathToProps)(XucXac)
