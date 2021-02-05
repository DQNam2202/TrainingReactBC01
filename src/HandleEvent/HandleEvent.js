import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Xin chào năm 2021");
  };

  showMessage = (name) => {
    alert(" Hello " + name);
  };
  render() {
    return (
      <div>
        {/* Cách 1 truyền callback trực tiếp  */}
        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Click me
        </button>
        <button
          id="btnClickMe"
          className="btn btn-success"
          onClick={this.showMessage.bind(this, "Nam")}
        >
          Show Message
        </button>
        <br /> <br />
        {/* Cách 2: truyền hàm nặc danh _ biến event có thể gọi ngược lại thẻ xảy ra sự kiện này luôn */}
        <button
          onClick={() => {
            this.showMessage("Nam");
          }}
        >
          Show Message
        </button>
      </div>
    );
  }
}
