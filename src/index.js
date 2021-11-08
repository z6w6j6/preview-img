/*
 * @Author: your name
 * @Date: 2021-04-23 11:25:54
 * @LastEditTime: 2021-11-08 14:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsports-emloyee-webg:\BaiduNetdiskDownload\资料\资料\demo\preview-img\src\index.js
 */
import './style/index.css'
import fangda from './assets/fangda.svg'
import reduce from './assets/reduce.svg'
import rotate1 from './assets/rotate1.svg'
import close1 from './assets/close1.svg'
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
  const svgs = `<img src="${fangda}" alt="放大" class="icon fangda" /><img src="${reduce}" alt="缩小"  class="icon reduce" /><img src="${rotate1}" alt="旋转"  class="icon rotate-left"/><img src="${rotate1}" alt="旋转"  class="icon rotate-right"/>`
  wrap.innerHTML = `<div id="preview-img-zwj__mask">
                     <div class="preview-img-zwj__content">
                      <img src="${close1}"  class="icon close-icon close"  />
                        <div id="box">
                          <img id="preview-img-zwj__img" src="${src}" />
                        </div>
                      <div class="preview-img-zwj__action">${svgs}</div>
                    </div>`
  const maxZindex =  window.getComputedStyle(document.body).zIndex === 'auto' ? 0 : window.getComputedStyle(document.body).zIndex
  document.getElementById('preview-img-zwj__mask').style.zIndex =maxZindex+1
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
  // that.getStyle()
}
previewImg.prototype = {
  resetStyle:function(){
    const comStyle = window.getComputedStyle(document.getElementById('box'))
    // 需要减去图片的初始宽高才能让他展示在中间
    const maskStyle = window.getComputedStyle(document.getElementById('preview-img-zwj__mask'))
    var marginLeft = maskStyle.width;
    var marginTop = maskStyle.height;
    const imgDom =  document.getElementById('preview-img-zwj__img')
    // imgDom.style.margin = 0;
    if(imgDom.naturalWidth){
      document.getElementById('box').style.left = (parseFloat(marginLeft)-imgDom.naturalWidth) / 2 + 'px';
      document.getElementById('box').style.top = (parseFloat(marginTop)-imgDom.naturalHeight) / 2 + 'px';
    }else{
      imgDom.onload = function(){
        document.getElementById('box').style.left = (parseFloat(marginLeft)-imgDom.naturalWidth) / 2 + 'px';
        document.getElementById('box').style.top = (parseFloat(marginTop)-imgDom.naturalHeight) / 2 + 'px';
      }
    }
  },
  _renderEvent(){
    document.querySelector('.preview-img-zwj__content .close').onclick = this._closeFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .fangda').onclick = this._fangdaFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .reduce').onclick = this._reduceFun
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-left').onclick = this._rotateLeft
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-right').onclick = this._rotateRight
    this._newMove()
  },
  _closeFun:function(){
    const cb = previewImg.prototype.params.closeFun
    const dom = document.getElementsByClassName('preview-img-zwj__wrap')[0]
    if(dom.remove){
      dom.remove && dom.remove();
    }else{
      dom.parentNode.removeChild(dom)
    }
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
      e.preventDefault();
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
    // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
    window.onmouseleave = function () {
      window.onmousemove=null;
      window.onmouseup=null;
    }
    //鼠标抬起事件
    dv.onmouseup = function() {//拖拽之后放开监听不到？？？？？
      //开关关闭
      isDown = false;
      dv.style.cursor = 'default';
    }
  },
  _newMove(){
    var box = document.getElementById("box");
    var fa = document.getElementById('preview-img-zwj__mask');
    // var scale = document.getElementById("scale");
    // 图片移动效果
    box.onmousedown=function(ev) {
        var oEvent = ev; 
        // 浏览器有一些图片的默认事件,这里要阻止
        oEvent.preventDefault();
        var disX = oEvent.clientX - box.offsetLeft;
        var disY = oEvent.clientY - box.offsetTop;
        fa.onmousemove=function (ev) {
            oEvent = ev;
            oEvent.preventDefault();
            var x = oEvent.clientX -disX;
            var y = oEvent.clientY -disY;

            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;
            x = x >= fa.offsetWidth-box.offsetWidth ? fa.offsetWidth-box.offsetWidth : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa.offsetHeight-box.offsetHeight ? fa.offsetHeight-box.offsetHeight : y;
            box.style.left = x + 'px';
            box.style.top = y + 'px';
        }
        // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
        fa.onmouseleave = function () {
          fa.onmousemove=null;
          fa.onmouseup=null;
        }
        // 鼠标弹起后停止移动
        fa.onmouseup=function() {
           fa.onmousemove=null;
           fa.onmouseup=null;
        } 
    }
  },
  _scroll:function(){//滚轮放大缩小

  },
  getStyle:function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'style/index.css')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send();
  }
}

 export default previewImg
// return preview
