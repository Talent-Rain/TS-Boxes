/*
 * @Author: your name
 * @Date: 2021-07-08 19:02:06
 * @LastEditTime: 2021-07-09 09:59:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Typescript-Toolbox/src/App.tsx
 */
import React from 'react'
import {GetDumping, CookFood } from './components/TowIntersMessage';
function App() {

  return (
    <div className="App">
      <GetDumping name='咸汤圆' saltyness={2} />
      <GetDumping name='甜汤圆'  sweetness='little' />
      {/* <GetDumping name='咸甜汤圆' saltyness={2} sweetness='little' /> */}
      {/* <GetDumping name='咸甜汤圆' /> */}
      <CookFood rice={1} finishActive={true} />
      {/* <CookFood  finishActive={true} /> */}
      {/* <CookFood rice={1}  /> */}
      <CookFood />
   </div>
  )
}

export default App
