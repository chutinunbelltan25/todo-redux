import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import "antd/dist/antd.css";
import "./index.css";

import { Provider } from 'react-redux'  //ทำให้storeของredexสามารถเอามาใช้ในการเก็บcomponent เวลาใช้พิมคำสั่งconnect
import store from './redux/store/store'
//มีการแจ้งเตือนในstore เมื่อมีการเรียกใช้ localStorege เมื่อมีการเพิ่มnodes เข้าไป 
store.subscribe(() => {
  localStorage.setItem('notes',
  JSON.stringify(store.getState().notes)) //เก็บค่าโน้ตnodesของ    jsonเปนฟอแมตในการส่ง text ใช้ในการสร้าง obj ขึ้นมา
})
console.log(localStorage)
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)


