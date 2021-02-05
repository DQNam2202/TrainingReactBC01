import React, { Component } from "react";

export default class DemoState extends Component {
  userName = "DuongQuocNam";
  //   isLogin = false;
  state = {
    // this.state là một thuộc tính đặc biệt (có sẵn ) của React class Component
    // Những giá trị thay đổi khi người dùng thao tác được lưu trong State
    isLogin: false,
  };

  renderLoginTemplate = () => {
    if (this.state.isLogin) {
      return <a className="nav-link">Hello {this.userName} </a>;
    }
    return (
      <button
        className="nav-link"
        onClick={(e) => {
          //   Khi vào nút đăng nhập => gọi hàm handle login
          this.handleLogin();
        }}
      >
        Đăng Nhập
      </button>
    );
  };

  handleLogin = () => {
    // this.state.isLogin = true;
    let newState = {
      isLogin: true,
    };
    // CallBack: là hàm
    // Tham số thứ 1 là những thuộc tính state mới, tham số thứ 2 là callback hàm thực thi khi render lại
    this.setState(newState, () => {
      console.log(this.state);
    });

    // setState là phương thức có sẵn của React Class Component dùng để set lại giá trị của biến state và làm render lại giao diện
    // this.setState({
    //   isLogin: true,
    // });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* {this.isLogin ? (
                    <a className="nav-link">Hello {this.userName} </a>
                  ) : (
                    <button>Đăng nhập</button>
                  )} */}
                  {this.renderLoginTemplate()};
                </li>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
