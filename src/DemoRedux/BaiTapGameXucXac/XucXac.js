import React, { Component } from 'react'

export default class XucXac extends Component {
    render() {
        return (
          <div className="container mt-5">
            <div className="row text-center">
              <div className="col-4">
                <button style={{ border: "none" }} className="btn btn-danger">
                  <div
                    className="p-5 bg-danger text-white w-100 h-100"
                    style={{ fontSize: 50 }}
                  >
                    Tài
                  </div>
                </button>
              </div>
              <div className="col-4">
                <img src="./img/1.png" width="50" style={{marginRight:"5px"}}></img>
                <img src="./img/1.png" width="50" style={{marginRight:"5px"}}></img>
                <img src="./img/1.png" width="50" style={{marginRight:"5px"}}></img>
              </div>
              <div className="col-4">
                <button style={{ border: "none" }} className="btn btn-dark">
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
