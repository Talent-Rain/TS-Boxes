/*
 * @Author: your name
 * @Date: 2021-07-09 09:07:34
 * @LastEditTime: 2021-07-09 09:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Typescript-Toolbox/src/utils/OneTypeExist.ts
 */

// 两个属性有且仅有一个存在
export type OneTypeExist<U, V> =
  | (U & { [K in keyof V]?: never })
  | (V & { [K in keyof U]?: never });

// 两个属性必须同时存在或者同时不存在
export type TwoTypeExist<U, V> =
  | (U & Required<V>)
  | (V & Required<U>)
  | ({ [K in keyof U]?: never } & { [K in keyof V]?: never }); // 所有的属性都只能是 undefined 或者不存在了
