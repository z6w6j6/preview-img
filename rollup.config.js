
import resolve from 'rollup-plugin-node-resolve';// 提供解析import引入第三方依赖支持（node_modules里的文件）
import commonjs from '@rollup/plugin-commonjs';//插件将它们转换为ES6版本
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import babel from 'rollup-plugin-babel';//将代码转译为浏览器或者node支持的语法，
import json from 'rollup-plugin-json'//引入该插件可以让源码中可以用import引入json文件
import pkg from './package.json';

export default {
  input: 'src/index.js', // 打包入口//必填
  external:[],//指出应该将哪些模块看做外部模块，不和我们的源码包打在一起，该参数接收数组或者参数为模块名称的函数，返回true则将被看做外部引入不打包在一起
  output: { // 打包出口
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: 'umd', // 必填//umd是兼容amd/cjs/iife的通用打包格式，适合浏览器//不设置该选项导出代码无法执行（无法识别export）
    name:'index',//导出的文件名称//必填
    globals:{//设置全局变量？
      jquery:"$"
    }
  },
  plugins: [ // 打包插件
    postcss({
             extensions: [ '.css' ],
           }),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理,用在其他插件转换源码之前，放置其他插件改变破坏CommonJS的检测
    babel({
      exclude: 'node_modules/**' // 只转译我们的源代码
  }),
    image(),
    json()//让源码可以引入json 文件
  ]

};