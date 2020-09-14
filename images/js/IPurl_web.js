//接口地址
// var IPurl = "http://bojiujia.800123456.top/api.aspx";
var IPurl = "http://xiaoyudaigou168.com.aa.800123456.top/api/";
var imgurl = "http://xiaoyudaigou168.com.aa.800123456.top/";
// var headurl = "http://bojiujia.800123456.top";


//表单获取
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

window.onresize = function() {
	window.location.href = ""
}

function fontsize(designWidth) {
	function fontsizeRel() {
		var fontSize = 100;
		//获取屏幕的宽度
		var relWidth = document.documentElement.clientWidth;
		// console.log(relWidth)
		if (768 < relWidth) {
			relWidth = 768
		}
		if (relWidth < 320) {
			relWidth = 320
		}
		// relWidth/designWidth屏幕与设计稿宽度的比值
		var relFontSize = fontSize * relWidth / designWidth;
		document.getElementsByTagName("html")[0].style.fontSize = relFontSize + "px";
	}
	fontsizeRel();
	window.onresize = fontsizeRel;
}
fontsize(750);
/**
 * 页面传参
 * @returns {Object}
 */

function getUrlParam() { //获取参数
	var url = decodeURIComponent(location.search);
	var theParam = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theParam;
}

function getNowCanshu() {
	var aa = window.location.href; //返回当前页面的url
	var urlinfo = aa.replace("#", " ");
	var canshu = function() {
		var ind = urlinfo.indexOf('?'); //返回某个指定的字符串值在字符串中首次出现的位置
		var cs = urlinfo.substr(ind + 1);
		var tempobj = new Object();
		var csarr = cs.split("&");
		jQuery.each(csarr, function(i, v) {
			var temparr = v.split("=");
			var objname = temparr[0];
			tempobj[objname] = temparr[1];
		});
		return tempobj;
	}();
	return canshu;
}

function contentN(text) {
	if (text) {
		var reg = text.replace(/(\r\n)|(\n)/g, '<br>');
		return reg

	}
}

function getpri(price) {
	var pri = price * 0.01
	pri = pri.toFixed(2)
	return pri
}

function telReg(tel) {
	if (tel) {
		var tel0 = "" + tel;
		var reg = /(\d{3})\d{4}(\d{4})/;
		var tel1 = tel0.replace(reg, "$1****$2")
		console.log(tel1);
		return tel1
	}
}

function namereg(name) {
	// var reg=/(\d{3})\d{4}(\d{4})/;
	var name1 = name.split("")
	if (name1.length >= 3) {
		// console.log(name1);
		var sxs = ''
		for (var i = 0; i < name1.length - 3; i++) {
			sxs = sxs + '*'
		}
		var newname = name1[0] + sxs + name1[name1.length - 1]
		return newname
	} else {
		return name
	}
}
//获取img
//获取img
function getgimg(pic) {
	if (!pic) {
		return
	}
	var arr = []
	// arr=pic.split(",");
	arr = pic
	// var arr1=[]
	// arr1=arr[0].split("|");
	console.log(imgurl + arr[0])
	return imgurl + arr[0]
	// vm.tclist[index].picbox
}

function getgimg1(pic) {
	if (!pic) {
		return
	}
	var arr = []
	// console.log(pic)
	arr = pic.split("^");
	var arr1 = []
	// arr1=arr[0].split("|");
	// console.log(imgurl+arr1[1])
	// console.log(imgurl+arr1[1])
	return imgurl + arr[0]
	// vm.tclist[index].picbox
}

function getTime(time) {
	if (!time) {
		return
	}
	var arr = []
	// console.log(pic)
	arr = time.split(" ");
	var arr1 = arr[0].split('/')
	return arr1[2] + '-' + arr1[0] + '-' + arr1[1] + ' ' + arr[1]
}








function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	if (!exdays) {
		exdays = 1
	}
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

function jump(url) {
  window.location.href = url;
}

var jiazai_loading=false
$(function() {
	// 等比例缩放		
	if ((navigator.userAgent.match(
			/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
		))) {
		// alert('手机端')
		if (window.screen.width > 472) {
			s = window.screen.width / 472;
			s = s > 1 ? 1 : s
			document.body.style.zoom = s;
		} else {
			document.body.style.zoom = 1;
		}

	} else {
		console.log('PC端')
		window.location.href = "../pc/index.html"
	}


	//返回顶部
	$('.gotop_btn').hide(); //隐藏go to top按钮

	$('.flex-con').scroll(function() {
		// console.log($(this).scrollTop());

		//当window的scrolltop距离大于1时，go to 
		if ($(this).scrollTop() > 100) {
			// console.log()
			$('.gotop_btn').show();
		} else {
			$('.gotop_btn').hide();
		}
		if ($(this).scrollTop() > 10) {
			$('.web_logo_box').css("background-color", 'rgba(0,0,0,.5)')
		} else {
			$('.web_logo_box').css("background-color", 'rgba(0,0,0,0)')
		}
		
				var pub_add_kg=$('.flex-con div').hasClass('jiazai_box')
				// console.log(pub_add_kg)
				if(!pub_add_kg){
					return
				}
		
		
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $('.jiazai_box').height();
				var windowHeight = $(this).height();
				console.log(scrollTop + windowHeight - scrollHeight)
				if (scrollTop + windowHeight>= scrollHeight) {
					// 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
					console.log("弹弹弹");
					if (jiazai_loading == true) {
						return
					}
					layer.msg('加载中')
					jiazai_fuc(jiazai_loading)
				}

		// getdatalist()
	});

	$('.gotop_btn').click(function() {
		$('.flex-con').animate({
			scrollTop: 0
		}, 300);
		return false;
	});



});
function set_loading(type){
	jiazai_loading=type
}
function dh_back(){
	history.back()
}
function dh_back_new(){
	history.go(-1)
}

// var tk_show=false
// var tw_content=''
//提问
function sub_tw(str){
	layer.msg('提交成功')
	return false
	console.log(str)
}