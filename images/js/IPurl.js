//接口地址
var IPurl = "http://szbxrent.800123456.top/api.aspx";
var imgurl = "http://szbxrent.800123456.top/";

function getNowCanshu() {
  var aa = window.location.href; //返回当前页面的url
  var urlinfo = aa.replace("#", " ");
  var canshu = (function() {
    var ind = urlinfo.indexOf("?"); //返回某个指定的字符串值在字符串中首次出现的位置
    var cs = urlinfo.substr(ind + 1);
    var tempobj = new Object();
    var csarr = cs.split("&");
    jQuery.each(csarr, function(i, v) {
      var temparr = v.split("=");
      var objname = temparr[0];
      tempobj[objname] = temparr[1];
    });
    return tempobj;
  })();
  // console.log(canshu);
  return canshu;
}
var login = false;

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}





function getpri(price) {
  var pri = price * 0.01;
  pri = pri.toFixed(2);
  return pri;
}
function telReg(tel) {
  if (tel) {
    var tel0 = "" + tel;
    var reg = /(\d{3})\d{4}(\d{4})/;
    var tel1 = tel0.replace(reg, "$1****$2");
    // console.log(tel1);
    return tel1;
  }
}
function namereg(name) {
  // var reg=/(\d{3})\d{4}(\d{4})/;
  var name1 = name.split("");
  if (name1.length >= 3) {
    // console.log(name1);
    var sxs = "";
    for (var i = 0; i < name1.length - 3; i++) {
      sxs = sxs + "*";
    }
    var newname = name1[0] + sxs + name1[name1.length - 1];
    return newname;
  } else {
    return name;
  }
}
//获取img
function getgimg(pic) {
  if (!pic) {
    return;
  }
  var arr = [];
  arr = pic.split(",");
  var arr1 = [];
  arr1 = arr[0].split("|");

  return imgurl + arr1[1];
  // vm.tclist[index].picbox
}
function getgimg1(pic) {
  if (!pic) {
    return;
  }
  var arr = [];
  // console.log(pic)
  arr = pic.split("^");
  var arr1 = [];
  // arr1=arr[0].split("|");
  // console.log(imgurl+arr1[1])
  // console.log(imgurl+arr1[1])
  return imgurl + arr[0];
  // vm.tclist[index].picbox
}
function getTime(time) {
  if (!time) {
    return;
  }
  var arr = [];
  // console.log(pic)
  arr = time.split(" ");
  var arr1 = arr[0].split("/");
  return arr1[2] + "-" + arr1[0] + "-" + arr1[1] + " " + arr[1];
}

function jump(url) {
  window.location.href = url;
}


$(function () {
	$.fn.serializeObject = function() {
	    var ct = this.serializeArray();
	    var obj = {};
	    $.each(ct, function() {
	        if (obj[this.name] !== undefined) {
	            if (!obj[this.name].push) {
	                obj[this.name] = [obj[this.name]];
	            }
	            obj[this.name].push(this.value || "");
	        } else {
	            obj[this.name] = this.value || "";
	        }
	    });
	    return obj;
	};
	// if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	//    // alert('手机端')
	// 	 window.location.href="../web/index.html"
	// }else{
	//    // alert('PC端')
	// 	 if(window.screen.width<1300&&window.screen.width>1000){
	// 	   s = window.screen.width / 1440;
	// 	   document.body.style.zoom = s;
	// 	 }
	// }
  
	// $('.tk_box').hide()
	// setTimeout(function (){
	// 	$('.tk_box').show()
	// },1000)
})