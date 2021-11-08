/*
 * @Author: your name
 * @Date: 2021-10-14 15:36:19
 * @LastEditTime: 2021-10-15 16:02:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsports-emloyee-webg:\BaiduNetdiskDownload\资料\资料\demo\preview-img\rollup.config.js
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js', // 打包入口
  output: { // 打包出口
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name:'index'
  },
  plugins: [ // 打包插件
    postcss({
             extensions: [ '.css' ],
           }),
    resolve(), // 查找和打包node_modules中的第三方模块
    babel({
      exclude: 'node_modules/**' // 只转译我们的源代码
  }),
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    image()
  ]
};