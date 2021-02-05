import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  
    // this.state != this.props   
  
    render() {
    // let {ten,tuoi,ma} = this.props.sinhVien;
    let{sinhVien} = this.props;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            width="100"
            height="180"
            className="card-img-top"
            src="https://picsum.photos/100/180/"
            alt="abc"
          />
          <div className="card-body">
              {/* ?: component thiên về giao diện thì sẽ cần dấu ?  */}
            <h4 className="card-title">{sinhVien?.ten}</h4>
            <p className="card-text">{sinhVien?.tuoi}</p>
          </div>
        </div>

      </div>
    );
  }
}
