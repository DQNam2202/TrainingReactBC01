import React, { Component } from 'react'

export default class RenderWithMap extends Component {
  mangSinhVien = [
    { ma: 1, ten: "Dương Quốc Nam"},
    { ma: 2, ten: "Duong Quốc Anh Minh" },
    { ma: 3, ten: "Nguyễn Quang Huy" }
  ];

  renderSinhVien = () => {
    //   const arrJSX = [];
    //     for (let index = 0; index < this.mangSinhVien.length; index++) {
    //         let tagP =  <p key={index}>{this.mangSinhVien[index].ten}</p>
    //         arrJSX.push(tagP);
    //     }
    //     return arrJSX;

    const arrJSX = this.mangSinhVien.map((sinhVien, index)=>{
        return <li key={index}>
            {sinhVien.ten}
        </li>
    })
    return arrJSX;
  };

    //div là một thẻ đối tượng của react
    // key để phân biệt hai thẻ song song và đồng cấp với nhau
    // nodemodule khi F12 là môi trường để mình debug khi đóng gói sẽ không còn nữa
    //   [<p key={1}>Nam nek</p>, <p key={2}>Nam 2 nek</p>]
  render() {
    return (
      //  this.renderSinhVien()
      <div className="container">
        <ul>{this.renderSinhVien()}</ul>

        <table className='table'>
          <thead>
            <th>Mã Sinh Viên</th>
            <th>Tên Sinh Viên</th>
          </thead>
          <tbody>{this.mangSinhVien.map((sinhVien,index)=>{
              return (
                <tr key={index}>
                  <td>{sinhVien.ma}</td>
                  <td>{sinhVien.ten}</td>
                  <td><button className="btn btn-danger">Xóa</button></td>
                </tr>
              );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}
