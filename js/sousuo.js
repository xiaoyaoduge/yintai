//搜索框失去焦点
var wugui4=getclass("wugui4")[0]
wugui4.onfocus=function  () {
	if (wugui4.value=="暑期旅游攻略") {
		wugui4.value=""
		}
	}
	    wugui4.onblur=function  () {
	if (wugui4.value=="") {
		wugui4.value="暑期旅游攻略"
		};
	} 
//banner
var bdx=$(".bdx")
var ulfangkuai=$(".fangkuai")[0]
var fangkuai=ulfangkuai.getElementsByTagName("li")
var num=0
function change () {
	num++;
	if (num>=bdx.length) {
		num=0
	};
	for (var i = 0; i < bdx.length; i++) {
		bdx[i].style.zIndex="0"
		fangkuai[i].id=""
	};
	bdx[num].style.zIndex="5"
	fangkuai[num].id="hong"
}
var t=setInterval(change,3000)
var banner=$(".bannerbox")[0]
var left=$(".banner13")[0]
var right=$(".banner14")[0]
banner.onmouseover=function  () {
    clearInterval(t)
    left.style.display="block"
    right.style.display="block"
}
banner.onmouseout=function  () {
    t=setInterval(change,3000)
    left.style.display="none"
    right.style.display="none"
}
right.onclick=function  () {
	change()
}
left.onclick=function  () {
	num--;
	if (num<=-1) {
		num=bdx.length-1
	};
	for (var i = 0; i < bdx.length; i++) {
		bdx[i].style.zIndex="0"
		fangkuai[i].id=""
	};
	bdx[num].style.zIndex="5"
	fangkuai[num].id="hong"
}
for (var K = 0; K < fangkuai.length; K++) {
	fangkuai[K].aa=K//记录元素下标
	fangkuai[K].onclick=function(){
       //this.aa当前元素下标
       for(var j=0;j<fangkuai.length;j++){
              fangkuai[j].id=""
       	bdx[j].style.zIndex=0
       }
       this.id="hong"
	   bdx[this.aa].style.zIndex=5
       num=this.aa
      }
};
var banner12=$(".banner12")[0]
banner12.onmouseover=function  () {
	animate(banner12,{right:10},300)
}
banner12.onmouseout=function  () {
	animate(banner12,{right:0},300)
}

//选项卡
var hentiao=$(".chaozhi3")
var hezi=$(".chaozhi5")
for (var i = 0; i < hentiao.length; i++) {
	hentiao[i].aa=i
	hentiao[i].onmouseover=function  () {
		for (var j = 0; j < hezi.length; j++) {
			hentiao[j].style.cssText="font-weight:normal;border-bottom:5px solid black;"
			hezi[j].style.display="none"
		};
	this.style.cssText="font-weight:bold;border-bottom:5px solid red;"
	hezi[this.aa].style.display="block"
	}
};

//移动黑色框
var kuang=$(".kuang")
var tops=$(".top")
var lefts=$(".left")
var rights=$(".right")
var bottom=$(".bottom")
for (var i = 0; i < kuang.length; i++) {
	kuang[i].aa=i
	kuang[i].onmouseover=function  () {
		var ow=this.offsetWidth
		var oh=this.offsetHeight
		animate(tops[this.aa],{width:ow},300)
		animate(bottom[this.aa],{width:ow},300)
		animate(lefts[this.aa],{height:oh},300)
		animate(rights[this.aa],{height:oh},300)
	}
	kuang[i].onmouseout=function  () {
		var ow=this.offsetWidth
		var oh=this.offsetHeight
		animate(tops[this.aa],{width:0},300)
		animate(bottom[this.aa],{width:0},300)
		animate(lefts[this.aa],{height:0},300)
		animate(rights[this.aa],{height:0},300)
	}
};

//滑入透明
var touming=$(".touming")
for (var i = 0; i < touming.length; i++) {
	touming[i].aa=i
	touming[i].onmouseover=function  () {
		touming[this.aa].style.opacity="0.7"
	}
	touming[i].onmouseout=function  () {
		touming[this.aa].style.opacity="1"
	}
};


//银泰百货选项卡
var hentiao1=$(".baihuo5")
var hezi1=$(".baihuo6")
for (var i = 0; i < hentiao1.length; i++) {
	hentiao1[i].aa=i
	hentiao1[i].onmouseover=function  () {
		for (var j = 0; j < hezi1.length; j++) {
			hentiao1[j].style.cssText="font-weight:normal;border-bottom:3px solid black;"
			hezi1[j].style.display="none"
		};
	this.style.cssText="font-weight:bold;border-bottom:3px solid red;"
	hezi1[this.aa].style.display="block"
	}
};

//时尚中轮播
var shishangtu=$(".shishangtu")[0]
var shishangtua=shishangtu.getElementsByTagName("a")
var shishangyuan=$(".shishangyuan")[0]
var shishangyuana=shishangyuan.getElementsByTagName("li")
shishangtua[0].style.left="0px;"
shishangtua[1].style.left="390px;"
shishangyuana[1].onclick=function(){
	shishangyuana[0].id=""
	shishangyuana[1].id="hongdian"
	animate(shishangtua[0],{left:-390},500)
	animate(shishangtua[1],{left:0},500)
shishangyuana[0].onclick=function(){
	shishangyuana[1].id=""
	shishangyuana[0].id="hongdian"
	animate(shishangtua[0],{left:0},500)
	animate(shishangtua[1],{left:390},500)
}
}
var ssleft=$(".ssleft")[0]
var ssright=$(".ssright")[0]
ssleft.onclick=function(){
	shishangyuana[1].id=""
	shishangyuana[0].id="hongdian"
	animate(shishangtua[0],{left:0},500)
	animate(shishangtua[1],{left:390},500)
}
ssright.onclick=function  () {
	shishangyuana[0].id=""
	shishangyuana[1].id="hongdian"
	animate(shishangtua[0],{left:-390},500)
	animate(shishangtua[1],{left:0},500)
}
var shishang2=$(".shishang2")[0]
shishang2.onmouseover=function  () {
	animate(ssleft,{width:30},200)
	animate(ssright,{width:30},200)
}
shishang2.onmouseout=function  () {
	animate(ssleft,{width:0},200)
	animate(ssright,{width:0},200)
}



//xialunbo
var lunbobox=$(".lunbobox")
var zuotiao=$(".zuotiao")[0]
var youtiao=$(".youtiao")[0]
for (var i = 1; i < lunbobox.length; i++) {
	lunbobox[i].style.left="159px"
};
var now=0
var next=0
zuotiao.onclick=function  () {
	next++
	if (next>=lunbobox.length) {
		next=0
	};
	animate(lunbobox[now],{left:-159},500)
	lunbobox[next].style.left="159px"
	animate(lunbobox[next],{left:0},500)
	now=next
}
youtiao.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunbobox.length-1
	};
	animate(lunbobox[now],{left:159},500)
	lunbobox[next].style.left="-159px"
	animate(lunbobox[next],{left:0},500)
	now=next
}

//潮流女装
//xialunbo
var lunboboxc=$(".lunboboxc")
var zuotiaoc=$(".zuotiaoc")[0]
var youtiaoc=$(".youtiaoc")[0]
for (var i = 1; i < lunboboxc.length; i++) {
	lunboboxc[i].style.left="159px"
};
var now=0
var next=0
zuotiaoc.onclick=function  () {
	next++
	if (next>=lunboboxc.length) {
		next=0
	};
	animate(lunboboxc[now],{left:-159},500)
	lunboboxc[next].style.left="159px"
	animate(lunboboxc[next],{left:0},500)
	now=next
}
youtiaoc.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxc.length-1
	};
	animate(lunboboxc[now],{left:159},500)
	lunboboxc[next].style.left="-159px"
	animate(lunboboxc[next],{left:0},500)
	now=next
}

//潮流男装
var lunboboxn=$(".lunboboxn")
var zuotiaon=$(".zuotiaon")[0]
var youtiaon=$(".youtiaon")[0]
for (var i = 1; i < lunboboxn.length; i++) {
	lunboboxn[i].style.left="159px"
};
var now=0
var next=0
zuotiaon.onclick=function  () {
	next++
	if (next>=lunboboxn.length) {
		next=0
	};
	animate(lunboboxn[now],{left:-159},500)
	lunboboxn[next].style.left="159px"
	animate(lunboboxn[next],{left:0},500)
	now=next
}
youtiaon.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxn.length-1
	};
	animate(lunboboxn[now],{left:159},500)
	lunboboxn[next].style.left="-159px"
	animate(lunboboxn[next],{left:0},500)
	now=next
}
//时尚鞋靴
var lunboboxx=$(".lunboboxx")
var zuotiaox=$(".zuotiaox")[0]
var youtiaox=$(".youtiaox")[0]
for (var i = 1; i < lunboboxx.length; i++) {
	lunboboxx[i].style.left="159px"
};
var now=0
var next=0
zuotiaox.onclick=function  () {
	next++
	if (next>=lunboboxx.length) {
		next=0
	};
	animate(lunboboxx[now],{left:-159},500)
	lunboboxx[next].style.left="159px"
	animate(lunboboxx[next],{left:0},500)
	now=next
}
youtiaox.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxx.length-1
	};
	animate(lunboboxx[now],{left:159},500)
	lunboboxx[next].style.left="-159px"
	animate(lunboboxx[next],{left:0},500)
	now=next
}

//1
var shishangtux=$(".shishangtux")[0]
var shishangtuxa=shishangtux.getElementsByTagName("a")
var shishangyuanx=$(".shishangyuanx")[0]
var shishangyuanxa=shishangyuanx.getElementsByTagName("li")
shishangtuxa[0].style.left="0px;"
shishangtuxa[1].style.left="390px;"
shishangyuanxa[1].onclick=function(){
	shishangyuanxa[0].id=""
	shishangyuanxa[1].id="hongdianx"
	animate(shishangtuxa[0],{left:-390},500)
	animate(shishangtuxa[1],{left:0},500)
shishangyuanxa[0].onclick=function(){
	shishangyuanxa[1].id=""
	shishangyuanxa[0].id="hongdianx"
	animate(shishangtuxa[0],{left:0},500)
	animate(shishangtuxa[1],{left:390},500)
}
}
var ssleftx=$(".ssleftx")[0]
var ssrightx=$(".ssrightx")[0]
ssleftx.onclick=function(){
	shishangyuanxa[1].id=""
	shishangyuanxa[0].id="hongdianx"
	animate(shishangtuxa[0],{left:0},500)
	animate(shishangtuxa[1],{left:390},500)
}
ssrightx.onclick=function  () {
	shishangyuanxa[0].id=""
	shishangyuanxa[1].id="hongdianx"
	animate(shishangtuxa[0],{left:-390},500)
	animate(shishangtuxa[1],{left:0},500)
}
var shishang2x=$(".shishang2x")[0]
shishang2x.onmouseover=function  () {
	animate(ssleftx,{width:30},200)
	animate(ssrightx,{width:30},200)
}
shishang2x.onmouseout=function  () {
	animate(ssleftx,{width:0},200)
	animate(ssrightx,{width:0},200)
}


//箱包、
var lunboboxb=$(".lunboboxb")
var zuotiaob=$(".zuotiaob")[0]
var youtiaob=$(".youtiaob")[0]
for (var i = 1; i < lunboboxb.length; i++) {
	lunboboxb[i].style.left="159px"
};
var now=0
var next=0
zuotiaob.onclick=function  () {
	next++
	if (next>=lunboboxb.length) {
		next=0
	};
	animate(lunboboxb[now],{left:-159},500)
	lunboboxb[next].style.left="159px"
	animate(lunboboxb[next],{left:0},500)
	now=next
}
youtiaob.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxb.length-1
	};
	animate(lunboboxb[now],{left:159},500)
	lunboboxb[next].style.left="-159px"
	animate(lunboboxb[next],{left:0},500)
	now=next
}

//1
var shishangtub=$(".shishangtub")[0]
var shishangtuba=shishangtub.getElementsByTagName("a")
var shishangyuanb=$(".shishangyuanb")[0]
var shishangyuanba=shishangyuanb.getElementsByTagName("li")
shishangtuba[0].style.left="0px;"
shishangtuba[1].style.left="390px;"
shishangyuanba[1].onclick=function(){
	shishangyuanba[0].id=""
	shishangyuanba[1].id="hongdianx"
	animate(shishangtuba[0],{left:-390},500)
	animate(shishangtuba[1],{left:0},500)
shishangyuanba[0].onclick=function(){
	shishangyuanba[1].id=""
	shishangyuanba[0].id="hongdianx"
	animate(shishangtuba[0],{left:0},500)
	animate(shishangtuba[1],{left:390},500)
}
}
var ssleftb=$(".ssleftb")[0]
var ssrightb=$(".ssrightb")[0]
ssleftb.onclick=function(){
	shishangyuanba[1].id=""
	shishangyuanba[0].id="hongdianx"
	animate(shishangtuba[0],{left:0},500)
	animate(shishangtuba[1],{left:390},500)
}
ssrightb.onclick=function  () {
	shishangyuanba[0].id=""
	shishangyuanba[1].id="hongdianx"
	animate(shishangtuba[0],{left:-390},500)
	animate(shishangtuba[1],{left:0},500)
}
var shishang2b=$(".shishang2b")[0]
shishang2b.onmouseover=function  () {
	animate(ssleftb,{width:30},200)
	animate(ssrightb,{width:30},200)
}
shishang2b.onmouseout=function  () {
	animate(ssleftb,{width:0},200)
	animate(ssrightb,{width:0},200)
}





//美容
var lunboboxm=$(".lunboboxm")
var zuotiaom=$(".zuotiaom")[0]
var youtiaom=$(".youtiaom")[0]
for (var i = 1; i < lunboboxm.length; i++) {
	lunboboxm[i].style.left="159px"
};
var now=0
var next=0
zuotiaom.onclick=function  () {
	next++
	if (next>=lunboboxm.length) {
		next=0
	};
	animate(lunboboxm[now],{left:-159},500)
	lunboboxm[next].style.left="159px"
	animate(lunboboxm[next],{left:0},500)
	now=next
}
youtiaom.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxm.length-1
	};
	animate(lunboboxm[now],{left:159},500)
	lunboboxm[next].style.left="-159px"
	animate(lunboboxm[next],{left:0},500)
	now=next
}

//1
var shishangtum=$(".shishangtum")[0]
var shishangtuma=shishangtum.getElementsByTagName("a")
var shishangyuanm=$(".shishangyuanm")[0]
var shishangyuanma=shishangyuanm.getElementsByTagName("li")
shishangtuma[0].style.left="0px;"
shishangtuma[1].style.left="390px;"
shishangyuanma[1].onclick=function(){
	shishangyuanma[0].id=""
	shishangyuanma[1].id="hongdianx"
	animate(shishangtuma[0],{left:-390},500)
	animate(shishangtuma[1],{left:0},500)
shishangyuanma[0].onclick=function(){
	shishangyuanma[1].id=""
	shishangyuanma[0].id="hongdianx"
	animate(shishangtuma[0],{left:0},500)
	animate(shishangtuma[1],{left:390},500)
}
}
var ssleftm=$(".ssleftm")[0]
var ssrightm=$(".ssrightm")[0]
ssleftm.onclick=function(){
	shishangyuanma[1].id=""
	shishangyuanma[0].id="hongdianx"
	animate(shishangtuma[0],{left:0},500)
	animate(shishangtuma[1],{left:390},500)
}
ssrightm.onclick=function  () {
	shishangyuanma[0].id=""
	shishangyuanma[1].id="hongdianx"
	animate(shishangtuma[0],{left:-390},500)
	animate(shishangtuma[1],{left:0},500)
}
var shishang2m=$(".shishang2m")[0]
shishang2m.onmouseover=function  () {
	animate(ssleftm,{width:30},200)
	animate(ssrightm,{width:30},200)
}
shishang2m.onmouseout=function  () {
	animate(ssleftm,{width:0},200)
	animate(ssrightm,{width:0},200)
}




//运动
var lunboboxy=$(".lunboboxy")
var zuotiaoy=$(".zuotiaoy")[0]
var youtiaoy=$(".youtiaoy")[0]
for (var i = 1; i < lunboboxy.length; i++) {
	lunboboxy[i].style.left="159px"
};
var now=0
var next=0
zuotiaoy.onclick=function  () {
	next++
	if (next>=lunboboxy.length) {
		next=0
	};
	animate(lunboboxy[now],{left:-159},500)
	lunboboxy[next].style.left="159px"
	animate(lunboboxy[next],{left:0},500)
	now=next
}
youtiaoy.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxy.length-1
	};
	animate(lunboboxy[now],{left:159},500)
	lunboboxy[next].style.left="-159px"
	animate(lunboboxy[next],{left:0},500)
	now=next
}

//1
var shishangtuy=$(".shishangtuy")[0]
var shishangtuya=shishangtuy.getElementsByTagName("a")
var shishangyuany=$(".shishangyuany")[0]
var shishangyuanya=shishangyuany.getElementsByTagName("li")
shishangtuya[0].style.left="0px;"
shishangtuya[1].style.left="390px;"
shishangyuanya[1].onclick=function(){
	shishangyuanya[0].id=""
	shishangyuanya[1].id="hongdiany"
	animate(shishangtuya[0],{left:-390},500)
	animate(shishangtuya[1],{left:0},500)
shishangyuanya[0].onclick=function(){
	shishangyuanya[1].id=""
	shishangyuanya[0].id="hongdiany"
	animate(shishangtuya[0],{left:0},500)
	animate(shishangtuya[1],{left:390},500)
}
}
var sslefty=$(".sslefty")[0]
var ssrighty=$(".ssrighty")[0]
sslefty.onclick=function(){
	shishangyuanya[1].id=""
	shishangyuanya[0].id="hongdiany"
	animate(shishangtuya[0],{left:0},500)
	animate(shishangtuya[1],{left:390},500)
}
ssrighty.onclick=function  () {
	shishangyuanya[0].id=""
	shishangyuanya[1].id="hongdiany"
	animate(shishangtuya[0],{left:-390},500)
	animate(shishangtuya[1],{left:0},500)
}
var shishang2y=$(".shishang2y")[0]
shishang2y.onmouseover=function  () {
	animate(sslefty,{width:30},200)
	animate(ssrighty,{width:30},200)
}
shishang2y.onmouseout=function  () {
	animate(sslefty,{width:0},200)
	animate(ssrighty,{width:0},200)
}




//内衣
var lunboboxp=$(".lunboboxp")
var zuotiaop=$(".zuotiaop")[0]
var youtiaop=$(".youtiaop")[0]
for (var i = 1; i < lunboboxp.length; i++) {
	lunboboxp[i].style.left="159px"
};
var now=0
var next=0
zuotiaop.onclick=function  () {
	next++
	if (next>=lunboboxp.length) {
		next=0
	};
	animate(lunboboxp[now],{left:-159},500)
	lunboboxp[next].style.left="159px"
	animate(lunboboxp[next],{left:0},500)
	now=next
}
youtiaop.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxp.length-1
	};
	animate(lunboboxp[now],{left:159},500)
	lunboboxp[next].style.left="-159px"
	animate(lunboboxp[next],{left:0},500)
	now=next
}

//1
var shishangtup=$(".shishangtup")[0]
var shishangtupa=shishangtup.getElementsByTagName("a")
var shishangyuanp=$(".shishangyuanp")[0]
var shishangyuanpa=shishangyuanp.getElementsByTagName("li")
shishangtupa[0].style.left="0px;"
shishangtupa[1].style.left="390px;"
shishangyuanpa[1].onclick=function(){
	shishangyuanpa[0].id=""
	shishangyuanpa[1].id="hongdianp"
	animate(shishangtupa[0],{left:-390},500)
	animate(shishangtupa[1],{left:0},500)
shishangyuanpa[0].onclick=function(){
	shishangyuanpa[1].id=""
	shishangyuanpa[0].id="hongdianp"
	animate(shishangtupa[0],{left:0},500)
	animate(shishangtupa[1],{left:390},500)
}
}
var ssleftp=$(".ssleftp")[0]
var ssrightp=$(".ssrightp")[0]
ssleftp.onclick=function(){
	shishangyuanpa[1].id=""
	shishangyuanpa[0].id="hongdianp"
	animate(shishangtupa[0],{left:0},500)
	animate(shishangtupa[1],{left:390},500)
}
ssrightp.onclick=function  () {
	shishangyuanpa[0].id=""
	shishangyuanpa[1].id="hongdianp"
	animate(shishangtupa[0],{left:-390},500)
	animate(shishangtupa[1],{left:0},500)
}
var shishang2p=$(".shishang2p")[0]
shishang2p.onmouseover=function  () {
	animate(ssleftp,{width:30},200)
	animate(ssrightp,{width:30},200)
}
shishang2p.onmouseout=function  () {
	animate(ssleftp,{width:0},200)
	animate(ssrightp,{width:0},200)
}


//可爱婴童
var lunboboxt=$(".lunboboxt")
var zuotiaot=$(".zuotiaot")[0]
var youtiaot=$(".youtiaot")[0]
for (var i = 1; i < lunboboxt.length; i++) {
	lunboboxt[i].style.left="159px"
};
var now=0
var next=0
zuotiaot.onclick=function  () {
	next++
	if (next>=lunboboxt.length) {
		next=0
	};
	animate(lunboboxt[now],{left:-159},500)
	lunboboxt[next].style.left="159px"
	animate(lunboboxt[next],{left:0},500)
	now=next
}
youtiaot.onclick=function  () {
	next--
	if (next<=-1) {
		next=lunboboxt.length-1
	};
	animate(lunboboxt[now],{left:159},500)
	lunboboxt[next].style.left="-159px"
	animate(lunboboxt[next],{left:0},500)
	now=next
}


   // 侧导
//     var cedao1=$(".miss")
//     var cedao2=$(".qinai")
//     var cedao3=$(".shishang")
//     var cedao=$(".zaihui")[0]
//     var now1=0
//     for(var i=0;i<cedao1.length;i++){
//   cedao1[i].aa=i
//   cedao1[i].onmouseover=function(){
//     cedao2[this.aa].style.display="block"
//   }
//   cedao1[i].onmouseout=function(){
//     cedao2[this.aa].style.display="none"
//   }
// }
// document.documentElement.scrollTop=1
// var obj=document.documentElement.scrollTop?document.documentElement:document.body;
//  window.onscroll=function(){
//     for (var i = 0; i < cedao3.length; i++) {
//       if(cedao3[i].offsetTop<=obj.scrollTop+100){
//         for(var j=0;j<cedao2.length;j++){
//           cedao2[j].style.display="none"
//         }
//         cedao2[i].style.display="block"
//         now1=i
//       }
//     };
//     if(obj.scrollTop>=1100){
//        cedao.style.display="block"
//     }else{
//       cedao.style.display="none"
//     }
//   } 

//   for (var i = 0; i < cedao2.length; i++) {
//     cedao2[i].aa=i
//     cedao2[i].onclick=function(){
//       animate(obj,{scrollTop:cedao3[this.aa].offsetTop},600)
//       cedao2[this.aa].style.display="block" 
//       now1=this.aa
//     }
//   }

//返回顶部
var dear=$(".miss")
var qinai=$(".qinai")
for (var i = 0; i < dear.length; i++) {
	dear[i].aa=i
	dear[i].onmouseover=function(){
		qinai[this.aa].style.display="block"
	}
	dear[i].onmouseout=function(){
		qinai[this.aa].style.display="none"
	}
};
//侧边导航
document.documentElement.scrollTop=1;
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var zaihui=$(".zaihui")[0]
var sekuai=$(".shishang")
var flagtop=1
var flagdown=true
var nowsb=0
window.onscroll=function  () {
	if(obj.scrollTop>=700){
		if (flagtop==1) {
			zaihui.style.display="block"
			flagtop=2
			flagdown=true
		}
	}
	else{
		if (flagdown==true) {
			zaihui.style.display="none"
			flagtop=1
			flagdown=false
		}
	}
	for (var i = 0; i < sekuai.length; i++) {
		if(sekuai[i].offsetTop<=obj.scrollTop+200){
			for (var j = 0; j < qinai.length; j++) {
				qinai[j].style.display="none"
			}
			qinai[i].style.display="block"
			nowsb=i
		}
	};
}
for (var q = 0; q < qinai.length; q++) {
	qinai[q].aa=q
	qinai[q].onclick=function  () {
		animate(obj,{scrollTop:sekuai[this.aa].offsetTop-150},300)
	    qinai[this.aa].style.display="block" 
	    nowsb=this.aa
	}
	}


//开头
var msd1=$(".msd1")[0]
var cu=$(".cu")[0]
var yanyuan=$(".yanyuan")[0]
msd1.onmouseover=function(){
	cu.style.display="block"
    yanyuan.style.color="#e5004f"
}
msd1.onmouseout=function(){
	cu.style.display="none"
    yanyuan.style.color=""
}
var msd2=$(".msd2")[0]
var wxerweima=$(".wxerweima")[0]
var jiangyou=$(".jiangyou")[0]
var yanyuan1=$(".yanyuan1")[0]
msd2.onmouseover=function(){
	jiangyou.style.display="block"
    yanyuan1.style.color="#e5004f"
    msd2.style.background="white"
    msd2.style.width="124px"
    msd2.style.zIndex="10"
    wxerweima.style.display="block"
}
msd2.onmouseout=function(){
	jiangyou.style.display="none"
    yanyuan1.style.color=""
    msd2.style.background=""
    msd2.style.width="79px"
    wxerweima.style.display="none"
}
var msd3=$(".msd3")[0]
var mayou=$(".mayou")[0]
var yanyuan2=$(".yanyuan2")[0]
var yterweima=$(".yterweima")[0]
msd3.onmouseover=function(){
	mayou.style.display="block"
    yanyuan2.style.color="#e5004f"
    msd3.style.background="white"
    yterweima.style.display="block"
}
msd3.onmouseout=function(){
	mayou.style.display="none"
    yanyuan2.style.color=""
    msd3.style.background=""
    yterweima.style.display="none"
}


//banner图选项
var banner7=$(".banner7")
var banma=$(".banma")
var banner11=$(".banner11")
var ycbox=$(".ycbox")[0]
for (var i = 0; i < banner7.length; i++) {
	banner7[i].aa=i
	banner7[i].onmouseover=function(){
		banma[this.aa].style.display="block"
		banner11[this.aa].style.display="none"
		ycbox.style.display="block"
		ycbox.onmouseover=function  () {
			ycbox.style.display="block"
		}
	}
	banner7[i].onmouseout=function(){
		banma[this.aa].style.display="none"
		banner11[this.aa].style.display="block"
		ycbox.style.display="none"
		ycbox.onmouseout=function  () {
		ycbox.style.display="none"
		}
	}
};