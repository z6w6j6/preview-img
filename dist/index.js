function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".preview-img-zwj__wrap #preview-img-zwj__mask{\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom:0;\r\n  background-color:rgba(0,0,0,0.8);\r\n}\r\n.preview-img-zwj__wrap .close-icon{\r\n  height: 44px;\r\n  right: 40px;\r\n  top: 40px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  z-index: 2;\r\n}\r\n.preview-img-zwj__wrap .preview-img-zwj__action{\r\n  position: absolute;\r\n  bottom: 44px;\r\n  width: 282px;\r\n  height: 44px;\r\n  line-height: 44px;\r\n  right: 0;\r\n  left: 0;\r\n  margin: auto;\r\n  background: rgba(0,0,0,0.3);\r\n  border-radius: 22px;\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n.preview-img-zwj__wrap .preview-img-zwj__action .icon{\r\n  height: 24px;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n.preview-img-zwj__wrap .preview-img-zwj__action .icon.rotate-left{\r\n  transform: rotateY(180deg);\r\n}\r\n.preview-img-zwj__wrap .preview-img-zwj__content #preview-img-zwj__img{\r\n  /* position: absolute; */\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  /* transition: transform .3s ,width .3s, height .3s; */\r\n  transform: rotate(0deg);\r\n\r\n}\r\n.preview-img-zwj__wrap{\r\n  position: fixed;\r\n  top: 0;\r\n  bottom:0;\r\n  right: 0;\r\n  left: 0;\r\n  opacity: 0;\r\n  transition: all .5s ease .5s;\r\n}\r\n.preview-img-zwj__wrap .preview-img-zwj__content{\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#box{\r\n  position: absolute;\r\n}";
styleInject(css_248z);

var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg t='1620612590519' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='11424' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200' %3e %3cdefs%3e %3cstyle type='text/css'%3e%3c/style%3e %3c/defs%3e %3cpath fill='white' d='M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z' p-id='11425'%3e %3c/path%3e %3cpath d='M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z' p-id='11426' fill='white'%3e %3c/path%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg t='1620612917622' class='icon' viewBox='0 0 1025 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='12188' xmlns:xlink='http://www.w3.org/1999/xlink' width='200.1953125' height='200'%3e%3cdefs%3e%3cstyle type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath fill='white' d='M1010.176 925.248c19.712 19.392 19.584 50.688-0.128 70.144-20.032 19.52-52.032 19.52-71.552 0.256l-254.784-265.408c-162.688 137.728-407.936 131.648-561.472-18.816-161.024-158.08-160.32-414.656 1.472-573.376 161.792-158.784 423.616-159.488 584.448-1.536 150.08 147.072 159.552 379.904 29.248 539.456 3.648 2.176 7.232 4.992 11.136 8.832L1010.176 925.248 1010.176 925.248zM753.344 426.432c0-189.824-153.856-343.68-343.808-343.68-189.824 0-343.744 153.856-343.744 343.68 0 189.888 153.92 343.68 343.744 343.68C599.488 770.112 753.344 616.32 753.344 426.432L753.344 426.432zM196.736 450.176c-19.328 0-34.88-14.144-34.88-31.808 0-17.664 15.616-31.872 34.88-31.872l441.792 0c19.328 0 34.88 14.208 34.88 31.872 0 17.6-15.552 31.808-34.88 31.808L196.736 450.176 196.736 450.176z' p-id='12189'%3e%3c/path%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg t='1620634641388' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='15490' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200'%3e%3cdefs%3e%3cstyle type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath d='M945.8 189.1l-61.6 47C800.2 131.3 669.5 64 522.8 64 269.4 64 64.3 264 64 511.5 63.7 759.1 269.2 960 522.8 960c198.1 0 366.9-122.7 431.1-294.5 1.6-4.5-0.8-9.5-5.4-11l-61.9-20.8c-4.5-1.5-9.4 0.7-11 5.1-2 5.3-4.2 10.7-6.4 15.9-18.9 43.7-46 83-80.5 116.7s-74.7 60.2-119.4 78.7c-46.2 19.1-95.5 28.8-146.2 28.8-50.8 0-100-9.7-146.2-28.8-44.7-18.5-84.9-44.9-119.4-78.7-34.5-33.7-61.6-73-80.5-116.7-19.6-45.2-29.5-93.2-29.5-142.8 0-49.6 9.9-97.6 29.5-142.8 18.9-43.7 46-83 80.5-116.7s74.7-60.2 119.4-78.7c46.2-19.1 95.5-28.8 146.2-28.8 50.8 0 100 9.7 146.2 28.8 44.7 18.5 84.9 44.9 119.4 78.7 10.8 10.6 21 21.8 30.4 33.5L753.2 336c-5.8 4.4-3.8 13.3 3.3 15l191.9 45.9c5.5 1.3 10.8-2.8 10.8-8.2l0.9-193c-0.2-7-8.6-11-14.3-6.6z m0 0' p-id='15491' fill='white'%3e%3c/path%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg t='1620634682801' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='16838' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200'%3e%3cdefs%3e%3cstyle type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath d='M512 1016C233.6 1016 8 790.4 8 512S233.6 8 512 8s504 225.6 504 504-225.6 504-504 504z m0-960C260.8 56 56 260.8 56 512s204.8 456 456 456 456-204.8 456-456S763.2 56 512 56z' p-id='16839' fill='white'%3e%3c/path%3e%3cpath d='M548.8 512L744 316.8c9.6-9.6 9.6-25.6 0-36.8l-1.6-1.6c-9.6-9.6-25.6-9.6-35.2 0L512 475.2 316.8 280c-9.6-9.6-25.6-9.6-35.2 0l-1.6 1.6c-9.6 9.6-9.6 25.6 0 36.8L475.2 512 280 707.2c-9.6 9.6-9.6 25.6 0 36.8l1.6 1.6c9.6 9.6 25.6 9.6 35.2 0L512 548.8 707.2 744c9.6 9.6 25.6 9.6 35.2 0l1.6-1.6c9.6-9.6 9.6-25.6 0-36.8L548.8 512z' p-id='16840' fill='white'%3e%3c/path%3e%3c/svg%3e";

// import {Loader} from 'three'
// import $ from 'jquery'
// console.log($)
const previewImg = function(params){
  const {zIndex,src,closeFun} = params;
  const that = previewImg.prototype;
  that.params = params;
  const wrap = document.createElement('div');
  wrap.classList="preview-img-zwj__wrap";
  wrap.style.opacity = 0;
  setTimeout(function(){
    wrap.style.opacity = 1;
  },10);
  document.body.appendChild(wrap);
  const svgs = `<img src="${img$3}" alt="放大" class="icon fangda" /><img src="${img$2}" alt="缩小"  class="icon reduce" /><img src="${img$1}" alt="旋转"  class="icon rotate-left"/><img src="${img$1}" alt="旋转"  class="icon rotate-right"/>`;
  wrap.innerHTML = `<div id="preview-img-zwj__mask">
                     <div class="preview-img-zwj__content">
                      <img src="${img}"  class="icon close-icon close"  />
                        <div id="box">
                          <img id="preview-img-zwj__img" src="${src}" />
                        </div>
                      <div class="preview-img-zwj__action">${svgs}</div>
                    </div>`;
  const maxZindex =  window.getComputedStyle(document.body).zIndex === 'auto' ? 0 : window.getComputedStyle(document.body).zIndex;
  document.getElementById('preview-img-zwj__mask').style.zIndex =maxZindex+1;
  document.getElementsByClassName('preview-img-zwj__content')[0].style.zIndex =maxZindex+2;
  document.getElementsByClassName('preview-img-zwj__action')[0].style.zIndex =maxZindex+3;
  that._renderEvent();
};
previewImg.prototype = {
  _renderEvent(){
    document.querySelector('.preview-img-zwj__content .close').onclick = this._closeFun;
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .fangda').onclick = this._fangdaFun;
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .reduce').onclick = this._reduceFun;
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-left').onclick = this._rotateLeft;
    document.querySelector('.preview-img-zwj__content .preview-img-zwj__action .rotate-right').onclick = this._rotateRight;
    this._newMove();
  },
  _closeFun:function(){
    const cb = previewImg.prototype.params.closeFun;
    const dom = document.getElementsByClassName('preview-img-zwj__wrap')[0];
    if(dom.remove){
      dom.remove && dom.remove();
    }else {
      dom.parentNode.removeChild(dom);
    }
    cb && typeof cb === 'function' && cb();
  },
  _fangdaFun:function(){
    const current = document.getElementById('preview-img-zwj__img').height;
    document.getElementById('preview-img-zwj__img').height = current*1.2;
  },
  _reduceFun:function(){
    const current = document.getElementById('preview-img-zwj__img').height;
    document.getElementById('preview-img-zwj__img').height = current/1.2;
  },
  _rotateLeft:function(){
    previewImg.prototype._rotate();
  },
  _rotateRight:function(){
    previewImg.prototype._rotate(true);
  },
  _rotate:function(type){
    const dom = document.getElementById('preview-img-zwj__img');
    const current = dom.style.transform;
    const deg = current && +dom.style.transform.substring(7, dom.style.transform.length - 4);
    const currentDeg = type ? deg + 90 : deg - 90;
    dom.style.transform = current ? `rotate(${currentDeg}deg)` : 'rotate(90deg)';
  },
  _move:function(){
    const dv = document.getElementById('preview-img-zwj__img');
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
    };

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
    };
    // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
    window.onmouseleave = function () {
      window.onmousemove=null;
      window.onmouseup=null;
    };
    //鼠标抬起事件
    dv.onmouseup = function() {//拖拽之后放开监听不到？？？？？
      //开关关闭
      isDown = false;
      dv.style.cursor = 'default';
    };
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
        };
        // 图形移出父盒子取消移动事件,防止移动过快触发鼠标移出事件,导致鼠标弹起事件失效
        fa.onmouseleave = function () {
          fa.onmousemove=null;
          fa.onmouseup=null;
        };
        // 鼠标弹起后停止移动
        fa.onmouseup=function() {
           fa.onmousemove=null;
           fa.onmouseup=null;
        }; 
    };
  },
  _scroll:function(){//滚轮放大缩小

  }
};
// return preview

export { previewImg as default };
