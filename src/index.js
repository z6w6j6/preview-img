/*
 * @Author: your name
 * @Date: 2021-04-23 11:25:54
 * @LastEditTime: 2021-05-15 16:01:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsports-emloyee-webg:\BaiduNetdiskDownload\资料\资料\demo\preview-img\src\index.js
 */
const previewImg = function(params){
  const {zIndex,src,closeFun} = params
  const that = previewImg.prototype
  that.params = params
  const dir = '../src/'
  const wrap = document.createElement('div')
  wrap.classList="preview-img-zwj__wrap"
  wrap.style.opacity = 0
  setTimeout(function(){
    wrap.style.opacity = 1
  },10)
  document.body.appendChild(wrap)
  const svgs = `<img src="${dir}assets/fangda.svg" alt="放大" class="icon fangda" /><img src="${dir}assets/reduce.svg" alt="缩小"  class="icon reduce" /><img src="${dir}assets/rotate1.svg" alt="旋转"  class="icon rotate-left"/><img src="${dir}assets/rotate1.svg" alt="旋转"  class="icon rotate-right"/>`
  wrap.innerHTML = `<div class="preview-img-zwj__mask"></div><div class="preview-img-zwj__content"><img src="${dir}assets/close1.svg"  class="icon close-icon close"  /><img id="preview-img-zwj__img" src="${src}" /><div class="preview-img-zwj__action">${svgs}</div></div>`
  const maxZindex =  window.getComputedStyle(document.body).zIndex === 'auto' ? 0 : window.getComputedStyle(document.body).zIndex
  document.getElementsByClassName('preview-img-zwj__mask')[0].style.zIndex =maxZindex+1
  document.getElementsByClassName('preview-img-zwj__content')[0].style.zIndex =maxZindex+2
  document.getElementsByClassName('preview-img-zwj__action')[0].style.zIndex =maxZindex+3
  var style = document.createElement('link');
  style.href = `${dir}style/index.css`;
  style.rel = 'stylesheet';
  style.type = 'text/css';
  document.getElementsByTagName('HEAD').item(0).appendChild(style);
  setTimeout(function(){
    that.resetStyle()
  },100)
  
  that._renderEvent()
}
previewImg.prototype = {
  resetStyle:function(){
    const comStyle = window.getComputedStyle(document.getElementById('preview-img-zwj__img'))
    const marginLeft = comStyle.marginLeft
    const marginTop = comStyle.marginTop
    document.getElementById('preview-img-zwj__img').style.margin = 0
    document.getElementById('preview-img-zwj__img').style.left = marginLeft
    document.getElementById('preview-img-zwj__img').style.top = marginTop
  },
  _renderEvent(){
    document.querySelector('.preview-img-zwj__content .close').onclick = this._closeFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .fangda').onclick = this._fangdaFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .reduce').onclick = this._reduceFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-left').onclick = this._rotateLeft
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-right').onclick = this._rotateRight
    this._move()
  },
  _closeFun:function(){
    const cb = previewImg.prototype.params.closeFun
    document.getElementsByClassName('preview-img-zwj__wrap')[0].remove()
    cb && typeof cb === 'function' && cb()
  },
  _fangdaFun:function(){
    const current = document.getElementById('preview-img-zwj__img').height
    document.getElementById('preview-img-zwj__img').height = current*1.2
  },
  _reduceFun:function(){
    const current = document.getElementById('preview-img-zwj__img').height
    document.getElementById('preview-img-zwj__img').height = current/1.2
  },
  _rotateLeft:function(){
    previewImg.prototype._rotate()
  },
  _rotateRight:function(){
    previewImg.prototype._rotate(true)
  },
  _rotate:function(type){
    const dom = document.getElementById('preview-img-zwj__img')
    const current = dom.style.transform
    const deg = current && +dom.style.transform.substring(7, dom.style.transform.length - 4)
    const currentDeg = type ? deg + 90 : deg - 90
    dom.style.transform = current ? `rotate(${currentDeg}deg)` : 'rotate(90deg)'
  },
  _move:function(){
    const dv = document.getElementById('preview-img-zwj__img')
    var x = 0;
    var y = 0;
    var l = 0;
    var t = 0;
    var isDown = false;
    //鼠标按下事件
    dv.onmousedown = function(e) {
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;

      //获取左部和顶部的偏移量
      l = dv.offsetLeft;
      t = dv.offsetTop;
      //开关打开
      isDown = true;
      //设置样式  
      dv.style.cursor = 'move';
    }
    //鼠标抬起事件
    dv.onmouseup = function() {//拖拽之后放开监听不到？？？？？
      //开关关闭
      isDown = false;
      dv.style.cursor = 'default';
    }
    //鼠标移动
    window.onmousemove = function(e) {
     
      if (isDown == false) {
          return;
      }
     
      //获取x和y
      var nx = e.clientX;
      var ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      var nl = nx - (x - l);
      var nt = ny - (y - t);

      dv.style.left = nl + 'px';
      dv.style.top = nt + 'px';
    }

  },
  _scroll:function(){//滚轮放大缩小

  }
}

// export default preview
// return preview
