/*
 * @Author: your name
 * @Date: 2021-07-08 20:11:39
 * @LastEditTime: 2021-07-09 09:48:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Typescript-Toolbox/src/components/getDumpling.tsx
 */

// 给定两个 interface， 他们之间的关联
import React from "react";
import { OneTypeExist, TwoTypeExist } from "../utils/TwoTypeUtils";

interface BaseProps {
  name: string;
  // name: "咸汤圆" | "甜汤圆";
}

interface SaltyProps {
  saltyness: number; // 咸度
}

interface SweetProps {
  sweetness: "little" | "middle" | "more"; // 甜度
}

interface Food {
  rice:number
}

interface Active {
  finishActive:true
}

type CookProps = TwoTypeExist<Food,Active>

type GetDumpingProps = BaseProps & OneTypeExist<SaltyProps, SweetProps>;

export const GetDumping: React.FC<GetDumpingProps> = (props) => {
  return (
    <>
      <header>汤圆必须吃{props.name}的</header>
      {props.sweetness ? (
        <p>
          甜度要： {props.sweetness}
        </p>
      ) : null}
      {props.saltyness ? (
        <p>
          咸度要： {props.saltyness}
        </p>
      ) : null}
     
    </>
  );
};

export const CookFood :React.FC<CookProps> = (props) => {
  return (
    <>
    <header>做饭必须要准备食材和执行做饭流程，否则做不出一份好饭</header>
   {
     props.rice ?
     <>
     <p>准备米饭 {props.rice} L</p>
     <p>准备米饭 {props.finishActive} L</p>
     </>
     :
     <p>只要食材或者操作没做好，饭就没得成功了</p>
   }
   </>
  )
}

