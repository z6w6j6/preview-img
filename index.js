"use strict";

/*
 * @Author: your name
 * @Date: 2021-04-23 11:25:54
 * @LastEditTime: 2021-05-15 16:01:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dsports-emloyee-webg:\BaiduNetdiskDownload\资料\资料\demo\preview-img\src\index.js
 */
<<<<<<< HEAD
var previewImg = function previewImg(params) {
  var zIndex = params.zIndex,
      src = params.src,
      closeFun = params.closeFun;

  var that = previewImg.prototype;
  that.params = params;
  var dir = "../src/";
  var wrap = document.createElement("div");
  wrap.classList = "preview-img-zwj__wrap";
  wrap.style.opacity = 0;
  setTimeout(function () {
    wrap.style.opacity = 1;
  }, 10);
  document.body.appendChild(wrap);
  var svgs = "<img src=\"" + dir + "assets/fangda.svg\" alt=\"\u653E\u5927\" class=\"icon fangda\" /><img src=\"" + dir + "assets/reduce.svg\" alt=\"\u7F29\u5C0F\"  class=\"icon reduce\" /><img src=\"" + dir + "assets/rotate1.svg\" alt=\"\u65CB\u8F6C\"  class=\"icon rotate-left\"/><img src=\"" + dir + "assets/rotate1.svg\" alt=\"\u65CB\u8F6C\"  class=\"icon rotate-right\"/>";
  wrap.innerHTML = "<div class=\"preview-img-zwj__mask\"></div><div class=\"preview-img-zwj__content\"><img src=\"" + dir + "assets/close1.svg\"  class=\"icon close-icon close\"  /><img id=\"preview-img-zwj__img\" src=\"" + src + "\" /><div class=\"preview-img-zwj__action\">" + svgs + "</div></div>";
  var maxZindex = window.getComputedStyle(document.body).zIndex === "auto" ? 0 : window.getComputedStyle(document.body).zIndex;
  document.getElementsByClassName("preview-img-zwj__mask")[0].style.zIndex = maxZindex + 1;
  document.getElementsByClassName("preview-img-zwj__content")[0].style.zIndex = maxZindex + 2;
  document.getElementsByClassName("preview-img-zwj__action")[0].style.zIndex = maxZindex + 3;
  document.getElementsByClassName("close-icon")[0].style.zIndex = maxZindex + 3;
  var style = document.createElement("link");
  style.href = dir + "style/index.css";
  style.rel = "stylesheet";
  style.type = "text/css";
  document.getElementsByTagName("HEAD").item(0).appendChild(style);
  setTimeout(function () {
    // that.resetStyle();
  }, 100);

  that._renderEvent();
};
previewImg.prototype = {
  resetStyle: function resetStyle() {
    var comStyle = window.getComputedStyle(document.getElementById("preview-img-zwj__img"));
    var marginLeft = comStyle.marginLeft;
    var marginTop = comStyle.marginTop;
    document.getElementById("preview-img-zwj__img").style.margin = 0;
    document.getElementById("preview-img-zwj__img").style.left = marginLeft;
    document.getElementById("preview-img-zwj__img").style.top = marginTop;
  },
  _renderEvent: function _renderEvent() {
    document.querySelector(".preview-img-zwj__content .close").onclick = this._closeFun;
    document.querySelector(".preview-img-zwj__content .preview-img-zwj__action .fangda").onclick = this._fangdaFun;
    document.querySelector(".preview-img-zwj__content .preview-img-zwj__action .reduce").onclick = this._reduceFun;
    document.querySelector(".preview-img-zwj__content .preview-img-zwj__action .rotate-left").onclick = this._rotateLeft;
    document.querySelector(".preview-img-zwj__content .preview-img-zwj__action .rotate-right").onclick = this._rotateRight;
    // this._move();
    this._newMove();
  },

  _newMove: function _newMove() {
    var dom = document.getElementById("preview-img-zwj__img");
    var computedStyle = window.getComputedStyle(document.getElementById("preview-img-zwj__img"));
    var mouseTop = void 0,
        mouseLeft = void 0,
        currentTop = computedStyle.marginTop,
        currentLeft = computedStyle.marginLeft,
        move = void 0,
        targetLeft = void 0,
        targetTop = void 0;
    dom.onmousedown = function (e) {
      //鼠标按下
      currentTop = parseInt(computedStyle.marginTop);
      currentLeft = parseInt(computedStyle.marginLeft);
      mouseLeft = e.clientX;
      mouseTop = e.clientY;
      move = true;
      targetLeft = mouseLeft - currentLeft;
      targetTop = mouseTop - currentTop;
    };
    window.onmousemove = function (e) {
      //获取当前鼠标位置，图片跟随移动
      if (move) {
        dom.style.marginLeft = e.clientX - targetLeft;
        dom.style.marginTop = e.clientY - targetTop;
      }
      e.preventDefault(); //解决鼠标move后监听不到up事件的问题
    };
    dom.onmouseup = function (e) {
      //图片目标位置
      move = false;
    };
  },
  _closeFun: function _closeFun() {
    var cb = previewImg.prototype.params.closeFun;
    document.getElementsByClassName("preview-img-zwj__wrap")[0].remove();
    cb && typeof cb === "function" && cb();
  },
  _fangdaFun: function _fangdaFun() {
    var current = document.getElementById("preview-img-zwj__img").height;
    document.getElementById("preview-img-zwj__img").height = current * 1.2;
  },
  _reduceFun: function _reduceFun() {
    var current = document.getElementById("preview-img-zwj__img").height;
    document.getElementById("preview-img-zwj__img").height = current / 1.2;
  },
  _rotateLeft: function _rotateLeft() {
    previewImg.prototype._rotate();
  },
  _rotateRight: function _rotateRight() {
    previewImg.prototype._rotate(true);
  },
  _rotate: function _rotate(type) {
    var dom = document.getElementById("preview-img-zwj__img");
    var current = dom.style.transform;
    var deg = current && +dom.style.transform.substring(7, dom.style.transform.length - 4);
    var currentDeg = type ? deg + 90 : deg - 90;
    dom.style.transform = current ? "rotate(" + currentDeg + "deg)" : "rotate(90deg)";
  },
  _move: function _move() {
    var dv = document.getElementById("preview-img-zwj__img");
    var x = 0;
    var y = 0;
    var l = 0;
    var t = 0;
    var isDown = false;
    //鼠标按下事件
    dv.onmousedown = function (e) {
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;

      //获取左部和顶部的偏移量
      l = dv.offsetLeft;
      t = dv.offsetTop;
      //开关打开
      isDown = true;
      //设置样式
      dv.style.cursor = "move";
    };
    //鼠标抬起事件
    dv.onmouseup = function () {
      //拖拽之后放开监听不到？？？？？
      //开关关闭
      isDown = false;
      dv.style.cursor = "default";
    };
    //鼠标移动
    window.onmousemove = function (e) {
      if (isDown == false) {
        return;
      }

      //获取x和y
      var nx = e.clientX;
      var ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      var nl = nx - (x - l);
      var nt = ny - (y - t);

      dv.style.left = nl + "px";
      dv.style.top = nt + "px";
    };
  },
  _scroll: function _scroll() {
    //滚轮放大缩小
  }
};

// export default preview;
// return preview;
=======
import previewImg from 'src/index'

export default previewImg
>>>>>>> 9b037dbf69a6a3cf928ac01ec2f064ef678abde7
