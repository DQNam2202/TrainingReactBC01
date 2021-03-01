import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
// import file css vào trong component
import './BaiTapGameXucXac.css';

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
          <div className="bgGameXucXac">
            <h1 style={{textAlign:"center"}}>Bài Tập Game Xúc Xắc</h1>
            <XucXac />

            <KetQuaTroChoi />
          </div>
        );
    }
}
