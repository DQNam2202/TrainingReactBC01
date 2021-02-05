import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";

export default class DemoProps extends Component {


    mangSinhVien = [
        {ma: "SV01", ten: "nam", tuoi: 18},
        {ma: "SV02", ten: "minh", tuoi: 8},
        {ma: "SV03", ten: "huy", tuoi: 9}
    ]

    renderSinhVien = () =>{
        const result = this.mangSinhVien.map((sv,index)=>{
            return (
              <div className="col-4" key={index}>
                {/* <ThongTinSinhVien maSV={this.mangSinhVien[0].ma} tenSV = {this.mangSinhVien[0].ten}/> */}
                <ThongTinSinhVien sinhVien={sv} />
              </div>
            );
        })
        return result;
    }


  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center display-4">Thông tin sinh viên</h3>
          <div className="row">
            {this.renderSinhVien()}
          </div>
        </div>
      </div>
    );
  }
}
