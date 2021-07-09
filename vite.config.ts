/*
 * @Author: your name
 * @Date: 2021-07-08 19:02:06
 * @LastEditTime: 2021-07-08 20:22:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /Typescript-Toolbox/vite.config.ts
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()]
})
