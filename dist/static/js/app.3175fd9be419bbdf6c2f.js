webpackJsonp([1],{"0iPh":function(t,i){t.exports=window.$},"7o6G":function(t,i){},"7zGH":function(t,i){},"9pxM":function(t,i){},DPlV:function(t,i){},HRRm:function(t,i,e){"use strict";function s(t){e("hIrR")}Object.defineProperty(i,"__esModule",{value:!0});var o=e("Y52p"),n=(o.a,{components:{XImg:o.a},data:function(){return{url:"https://ego.tmall.hk/category-1239096640.htm?spm=a1z10.10044-b-s.w5001-15800929123.8.1e15154du716Y9&search=y&catName=%D3%A4%B6%F9%CF%B5%C1%D0&scene=taobao_shop#bd"}},methods:{onBtnClick:function(){if(window.is_wx()){var t=new window.ClipboardJS(".img-btn");console.log(t),this.$vux.toast.text('<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>')}else window.location.href=this.url}}}),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b3/b3-1.jpg"}}),t._v(" "),e("img",{staticClass:"ximg-demo",attrs:{src:"static/b3/b3-2.jpg",offset:-200}}),t._v(" "),e("img",{staticClass:"ximg-demo",attrs:{src:"static/b3/b3-3.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"relative"}},[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b3/b3-4.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0","text-align":"center",bottom:"18%"}},[e("img",{staticClass:"img-btn",staticStyle:{width:"45%"},attrs:{src:"static/btn-goumai.png","data-clipboard-text":t.url},on:{click:t.onBtnClick}})])])])},r=[],l={render:a,staticRenderFns:r},c=l,u=e("VU/8"),h=s,d=u(n,c,!1,h,null,null);i.default=d.exports},MUCD:function(t,i){},NHnr:function(t,i,e){"use strict";function s(t){e("RjyN")}function o(t){e("owug")}function n(t){e("d1Im")}function a(t){e("MUCD")}function r(t){e("cqo/")}function l(t){e("7zGH")}function c(t){e("9pxM")}Object.defineProperty(i,"__esModule",{value:!0});var u=e("7+uW"),h=e("v5o6"),d=e.n(h),p=e("/ocq"),f={name:"app"},m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},v=[],g={render:m,staticRenderFns:v},w=g,x=e("VU/8"),b=s,y=x(f,w,!1,b,null,null),S=y.exports,_=e("0iPh"),k=e.n(_),C=e("63CM"),B=e("Y52p"),$=e("BEQ0"),O=e.n($),T=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return O()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),I=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-header"},[e("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[e("transition",{attrs:{name:t.transition}},[e("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(i){if(!("button"in i)&&t._k(i.keyCode,"preventDefault",void 0,i.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():e("h1",{staticClass:"vux-header-title",on:{click:function(i){t.$emit("on-click-title")}}},[t._t("default",[e("transition",{attrs:{name:t.transition}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?e("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),e("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?e("a",{staticClass:"vux-header-more",on:{click:[function(i){if(!("button"in i)&&t._k(i.keyCode,"preventDefault",void 0,i.key,void 0))return null},function(i){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},N=[],z={render:I,staticRenderFns:N},M=z,V=e("VU/8"),j=o,A=V(T,M,!1,j,null,null),R=A.exports,L=e("mvHQ"),D=e.n(L),F=e("NjrX"),H=e("0FxO"),U=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(H.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(D()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new F.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(i,e){t.current=e%t.length,t.index=e%t.length}),i>0&&this.swiper.go(i)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,i){D()(t)!==D()(i)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var i=this;t!==this.current&&this.$nextTick(function(){i.swiper&&i.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),E=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(i,s){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":s},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(i,s){return t.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":s},on:{click:function(e){t.clickListItem(i)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(i)}}),t._v(" "),t.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(i.title))]):t._e()])]):t._e()})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(i){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:i-1===t.current}})])}))])},P=[],W={render:E,staticRenderFns:P},X=W,q=e("VU/8"),Y=n,G=q(U,X,!1,Y,null,null),J=G.exports,Q={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},Z=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},K=[],tt={render:Z,staticRenderFns:K},it=tt,et=e("VU/8"),st=et(Q,it,!1,null,null,null),ot=st.exports,nt=e("fZjL"),at=e.n(nt),rt=e("+v63"),lt=e("te2A"),ct=(Boolean,String,String,Boolean,Boolean,Boolean,String,String,Object,Boolean,Boolean,Boolean,{name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object,hideOnDeactivated:{type:Boolean,default:!0},shouldRerenderOnShow:{type:Boolean,default:!1},shouldScrollTopOnShow:{type:Boolean,default:!1}},created:function(){this.$vux&&this.$vux.config&&"VIEW_BOX"===this.$vux.config.$layout&&(this.layout="VIEW_BOX")},mounted:function(){var t=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var i=t;t.popup=new rt.a({showMask:i.showMask,container:i.$el,hideOnBlur:i.hideOnBlur,onOpen:function(){i.fixSafariOverflowScrolling("auto"),i.show=!0},onClose:function(){i.show=!1,window.__$vuxPopups&&at()(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){i.fixSafariOverflowScrolling("touch")},300)}}),t.value&&t.popup.show(),t.initialShow=!1})},deactivated:function(){this.hideOnDeactivated&&(this.show=!1),this.removeModalClassName()},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var i=0;i<this.$overflowScrollingList.length;i++)this.$overflowScrollingList[i].style.webkitOverflowScrolling=t},removeModalClassName:function(){"VIEW_BOX"===this.layout&&lt.a.removeClass(document.body,"vux-modal-open")},doShow:function(){this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),"VIEW_BOX"===this.layout&&lt.a.addClass(document.body,"vux-modal-open"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)},scrollTop:function(){var t=this;this.$nextTick(function(){t.$el.scrollTop=0;var i=t.$el.querySelectorAll(".vux-scrollable");if(i.length)for(var e=0;e<i.length;e++)i[e].scrollTop=0})}},data:function(){return{layout:"",initialShow:!0,hasFirstShow:!1,shouldRenderBody:!0,show:this.value}},computed:{styles:function(){var t={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?t.width=this.width:t.height=this.height,this.maxHeight&&(t["max-height"]=this.maxHeight),this.isTransparent&&(t.background="transparent"),this.popupStyle)for(var i in this.popupStyle)t[i]=this.popupStyle[i];return t}},watch:{value:function(t){this.show=t},show:function(t){var i=this;this.$emit("input",t),t?this.shouldRerenderOnShow?(this.shouldRenderBody=!1,this.$nextTick(function(){i.scrollTop(),i.shouldRenderBody=!0,i.doShow()})):(this.shouldScrollTopOnShow&&this.scrollTop(),this.doShow()):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||i.fixSafariOverflowScrolling("touch"),i.removeModalClassName()},200))}},beforeDestroy:function(){this.popup&&this.popup.destroy(),this.fixSafariOverflowScrolling("touch"),this.removeModalClassName()}}),ut=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"vux-popup-animate-"+t.position}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&!t.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+t.position,t.show?"vux-popup-show":""],style:t.styles},[t.shouldRenderBody?t._t("default"):t._e()],2)])},ht=[],dt={render:ut,staticRenderFns:ht},pt=dt,ft=e("VU/8"),mt=a,vt=ft(ct,pt,!1,mt,null,null),gt=vt.exports,wt=(Number,String,String,String,String,String,{name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}),xt=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},bt=[],yt={render:xt,staticRenderFns:bt},St=yt,_t=e("VU/8"),kt=r,Ct=_t(wt,St,!1,kt,null,null),Bt=Ct.exports,$t=["-moz-box-","-webkit-box-",""],Ot=(Number,String,Number,String,["-moz-box-","-webkit-box-",""]),Tt={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},i="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[i]=this.$parent.gutter+"px"),this.span)for(var e=0;e<Ot.length;e++)t[Ot[e]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},It=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},Nt=[],zt={render:It,staticRenderFns:Nt},Mt=zt,Vt=e("VU/8"),jt=Vt(Tt,Mt,!1,null,null,null),At=jt.exports,Rt=e("QUsI"),Lt="%D 天 %H 小时 %M 分 %S 秒";Lt="%D 天 %H 小时 %M 分 %S 秒";var Dt=(String,Number,String,"%D 天 %H 小时 %M 分 %S 秒");Dt="%D 天 %H 小时 %M 分 %S 秒";var Ft={name:"clocker",mounted:function(){var t=this;this.$nextTick(function(){t.slot=t.$el.querySelector(".vux-clocker-tpl"),t.slotString=t.slot.innerHTML,""!==t.slotString&&(t.showTimeString=!1),t.render()})},methods:{render:function(){var t=this;this.time&&(this.clocker=new Rt.a(this.time).on("tick",function(i){t.update(i),t.$emit("on-tick",i)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start())},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var i=t.strftime(this.slotString);i!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=i)}}},props:{time:[String,Number],format:{type:String,default:Dt}},watch:{time:function(){this.clocker&&this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker&&(this.clocker.remove(),this.clocker=null)}},Ht=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{display:"inline-block"}},[t.showTimeString?e("span",[t._v(t._s(t.timeString))]):t._e(),t._v(" "),e("div",{staticClass:"vux-clocker-tpl"},[t._t("default")],2)])},Ut=[],Et={render:Ht,staticRenderFns:Ut},Pt=Et,Wt=e("VU/8"),Xt=Wt(Ft,Pt,!1,null,null,null),qt=Xt.exports,Yt=e("JkZY"),Gt=(Yt.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[Yt.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),i=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&i)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),Jt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},Qt=[],Zt={render:Jt,staticRenderFns:Qt},Kt=Zt,ti=e("VU/8"),ii=l,ei=ti(Gt,Kt,!1,ii,null,null),si=ei.exports;({versions:function(){var t=navigator.userAgent;return{mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1}}}).versions();C.a,e("i3bH").default,e("nEyF").default,e("HRRm").default,B.a;window.videoUpdate=function(t){var i=100;t.src.includes("zbyrsp")?i=22:t.src.includes("hxsp")?i=36:t.src.includes("video-kunao")?i=49:t.src.includes("video-xizao")?i=37:t.src.includes("video-zhuomicang")&&(i=21),t.currentTime>=i&&(this.showVideoBox=!1)};({versions:function(){var t=navigator.userAgent;return{mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1}}}).versions();var oi={directives:{TransferDom:C.a},components:{banner1:e("i3bH").default,banner2:e("nEyF").default,banner3:e("HRRm").default,XImg:B.a,XHeader:R,Swiper:J,SwiperItem:ot,Popup:gt,Flexbox:Bt,FlexboxItem:At,Clocker:qt,XDialog:si},data:function(){return{firstVisibility:!1,drawerVisibility:!1,bannerList:["static/home/banner-1.png","static/home/banner-2.png","static/home/banner-3.png","static/home/banner-4.png"],bannerIndex:0,videoList:["static/home/video-kunao.png","static/home/video-xizao.png","static/home/video-zhuomicang.png"],videos:["video-kunao.mp4","video-xizao.mp4","video-zhuomicang.mp4"],videoIndex:0,baobaoList:["static/home/baobao-1.png","static/home/baobao-2.png","static/home/baobao-3.png","static/home/baobao-4.png","static/home/baobao-5.png"],baobaoIndex:0,showVideoBox:!1,videoSrc:"",bannerStyle:{height:"auto"},bannerPopupStatus:!1,banner:"",yiyuanUrl:"https://h5.m.taobao.com/awp/core/detail.htm?id=576977040134"}},mounted:function(){var t=this;new Date("2018-10-08").getTime(),(new Date).getTime(),setTimeout(function(){t.firstVisibility=!0},300)},methods:{onBannerClick:function(t){var i=this;3===t||(0===t?(this.banner="banner1",this.$nextTick(function(){i.bannerPopupStatus=!0})):1===t?(this.banner="banner3",this.$nextTick(function(){i.bannerPopupStatus=!0})):2===t&&(this.banner="banner2",this.$nextTick(function(){i.bannerPopupStatus=!0})))},playVideo:function(t){this.videoSrc="static/home/"+t,this.showVideoBox=!0,setTimeout(function(){k()("#video-1")[0].currentTime=.5,setTimeout(function(){k()("#video-1")[0].play()},500)},300)},scrollTop:function(){k()(window).scrollTop(0)},goYiyuan:function(){if(window.is_wx()){var t=new window.ClipboardJS(".yiyuan");console.log(t),this.$vux.toast.text('<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>')}else window.location.href=this.yiyuanUrl},onBannerShow:function(){k()("body").css({"overflow-y":"hidden"})},onBannerHide:function(){k()("body").css({"overflow-y":"auto"})}}};window.videoUpdate=function(t){var i=100;t.src.includes("zbyrsp")?i=22:t.src.includes("hxsp")?i=36:t.src.includes("video-kunao")?i=49:t.src.includes("video-xizao")?i=37:t.src.includes("video-zhuomicang")&&(i=21),t.currentTime>=i&&(this.showVideoBox=!1)};var ni=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticStyle:{position:"fixed",width:"100%",top:"0",left:"0","z-index":"2"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/topbar.png"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",top:"0",width:"21%",height:"100%"},on:{click:function(i){t.drawerVisibility=!t.drawerVisibility}}}),t._v(" "),t.drawerVisibility?e("div",{staticStyle:{background:"#fff",position:"absolute","z-index":"1",top:"100%",padding:"40px 20px 40px 40px",width:"30%"}},[e("flexbox",{staticStyle:{margin:"5px 0"},nativeOn:{click:function(i){t.onBannerClick(0)}}},[e("flexbox-item",{staticStyle:{"font-size":"28px"}},[t._v("新款小老虎")]),t._v(" "),e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-right",attrs:{type:"ios-arrow-right",size:"40",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])],1),t._v(" "),e("br"),t._v(" "),e("flexbox",{staticStyle:{margin:"5px 0"},nativeOn:{click:function(i){t.onBannerClick(2)}}},[e("flexbox-item",{staticStyle:{"font-size":"28px"}},[t._v("KIDS系列")]),t._v(" "),e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-right",attrs:{type:"ios-arrow-right",size:"40",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])],1),t._v(" "),e("br"),t._v(" "),e("flexbox",{staticStyle:{margin:"5px 0"},nativeOn:{click:function(i){t.onBannerClick(1)}}},[e("flexbox-item",{staticStyle:{"font-size":"28px"}},[t._v("BABY系列")]),t._v(" "),e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-right",attrs:{type:"ios-arrow-right",size:"40",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"}})])],1)],1):t._e()],1),t._v(" "),e("div",{staticStyle:{position:"relative",overflow:"hidden","margin-top":"16%"},style:t.bannerStyle},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-1.jpg","success-class":"success-img"}}),t._v(" "),t.firstVisibility?e("swiper",{staticClass:"banner",staticStyle:{position:"absolute",left:"0",top:"0",right:"0",bottom:"0"},attrs:{"aspect-ratio":919/645,"show-dots":!1},model:{value:t.bannerIndex,callback:function(i){t.bannerIndex=i},expression:"bannerIndex"}},[t._l(t.bannerList,function(i,s){return e("swiper-item",{key:s,staticClass:"swiper-demo-img",staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{width:"100%","margin-top":"-36%"},attrs:{src:i},on:{click:function(i){t.onBannerClick(s)}}}),t._v(" "),s<3?e("div",{staticStyle:{position:"absolute",left:"0",right:"0",bottom:"6%","text-align":"center"}},[e("img",{staticStyle:{width:"40%"},attrs:{src:"static/home/btn-liaojie.png"},on:{click:function(i){t.onBannerClick(s)}}})]):e("div",{staticStyle:{position:"absolute",left:"0",right:"0",bottom:"11%","text-align":"center"}},[e("img",{staticStyle:{width:"57%"},attrs:{src:"static/home/btn-shipin.png"},on:{click:function(i){t.onBannerClick(s)}}})])])}),t._v(" "),e("img",{staticStyle:{width:"10%",position:"absolute",left:"2%",top:"40%"},attrs:{src:"static/home/icon-l.png"},on:{click:function(i){t.bannerIndex>0&&t.bannerIndex--}}}),t._v(" "),e("img",{staticStyle:{width:"10%",position:"absolute",right:"2%",top:"40%"},attrs:{src:"static/home/icon-r.png"},on:{click:function(i){t.bannerIndex<3&&t.bannerIndex++}}})],2):t._e()],1),t._v(" "),t.$route.query.showClock?e("div",{staticStyle:{position:"relative"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-2.jpg"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0",top:"-8%"}},[e("x-img",{attrs:{src:"static/home/daojishi.png",width:"100%"}}),t._v(" "),e("clocker",{staticStyle:{position:"absolute",display:"block",top:"29%",left:"0",right:"0","font-size":"50px"},attrs:{time:"2018-10-01"}},[e("div",{staticStyle:{position:"relative",width:"100%",color:"#fff"}},[e("span",{staticStyle:{position:"absolute",left:"8%"}},[t._v("%D")]),t._v(" "),e("span",{staticStyle:{position:"absolute",left:"40%"}},[t._v("%H")]),t._v(" "),e("span",{staticStyle:{position:"absolute",left:"70%"}},[t._v("%M")]),t._v("\n           \n        ")])])],1),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",bottom:"17%",width:"100%",height:"42%"},on:{click:function(i){t.playVideo("zbyrsp.mp4")}}})],1):t._e(),t._v(" "),t.firstVisibility?e("div",{staticStyle:{position:"relative"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-3.jpg",offset:-400}}),t._v(" "),e("div",{staticStyle:{position:"absolute",top:"44%",left:"13%",width:"17%",height:"12%"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",top:"44%",left:"32%",width:"17%",height:"12%"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",top:"44%",left:"51%",width:"17%",height:"12%"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",top:"44%",left:"70%",width:"17%",height:"12%"}}),t._v(" "),e("swiper",{staticStyle:{position:"absolute",left:"0",right:"0",bottom:"0"},attrs:{"aspect-ratio":1,"show-dots":!1},model:{value:t.videoIndex,callback:function(i){t.videoIndex=i},expression:"videoIndex"}},t._l(t.videoList,function(i,s){return e("swiper-item",{key:s,staticStyle:{"text-align":"center"},nativeOn:{click:function(i){t.playVideo(t.videos[s])}}},[e("img",{staticStyle:{width:"100%"},attrs:{src:i}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0",bottom:"26%","text-align":"center"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"static/home/bofang.png"}})])])})),t._v(" "),e("img",{staticStyle:{width:"6%",position:"absolute",left:"2%",bottom:"12%"},attrs:{src:"static/home/icon-l.png"},on:{click:function(i){t.videoIndex>0&&t.videoIndex--}}}),t._v(" "),e("img",{staticStyle:{width:"6%",position:"absolute",right:"2%",bottom:"12%"},attrs:{src:"static/home/icon-r.png"},on:{click:function(i){t.videoIndex<2&&t.videoIndex++}}})],1):t._e(),t._v(" "),t.firstVisibility?e("div",{staticStyle:{position:"relative"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-4.jpg",offset:-400}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",bottom:"20%",width:"100%",height:"31%"},on:{click:function(i){t.playVideo("hxsp.mp4")}}}),t._v(" "),e("x-img",{staticStyle:{width:"40%",position:"absolute",bottom:"4%",left:"3%"},attrs:{src:"static/home/btn-shangdian.png"}})],1):t._e(),t._v(" "),t.firstVisibility?e("div",{staticStyle:{position:"relative"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-5.jpg",offset:-400}}),t._v(" "),e("swiper",{staticStyle:{position:"absolute",left:"0",top:"1%",right:"0"},attrs:{"aspect-ratio":1.7,"show-dots":!1},model:{value:t.baobaoIndex,callback:function(i){t.baobaoIndex=i},expression:"baobaoIndex"}},t._l(t.baobaoList,function(t,i){return e("swiper-item",{key:i,staticClass:"swiper-demo-img",staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t}})])})),t._v(" "),e("img",{staticStyle:{width:"10%",position:"absolute",left:"2%",top:"45%"},attrs:{src:"static/home/icon-l.png"},on:{click:function(i){t.baobaoIndex>0&&t.baobaoIndex--}}}),t._v(" "),e("img",{staticStyle:{width:"10%",position:"absolute",right:"2%",top:"45%"},attrs:{src:"static/home/icon-r.png"},on:{click:function(i){t.baobaoIndex<4&&t.baobaoIndex++}}})],1):t._e(),t._v(" "),t.firstVisibility?e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-6.jpg",offset:-400}}):t._e(),t._v(" "),t.firstVisibility?e("div",{staticStyle:{position:"relative"}},[e("x-img",{staticClass:"ximg-demo",attrs:{src:"static/home/home-7.jpg",offset:-400}}),t._v(" "),e("div",{staticStyle:{position:"absolute",top:"22%",left:"0",right:"0","text-align":"center",overflow:"hidden"}},[e("x-img",{staticClass:"dazhuanpan",staticStyle:{width:"90%"},attrs:{src:"static/home/dazhuanpan.png"}}),t._v(" "),e("div",{staticStyle:{position:"absolute",width:"100%",bottom:"45%"}},[e("flexbox",{staticStyle:{"justify-content":"center"}},[e("x-img",{staticClass:"dazhuanpan-go",staticStyle:{width:"10%"},attrs:{src:"static/home/dazhuanpan-go.jpg"}})],1)],1)],1),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0",bottom:"6%","text-align":"center"}},[e("x-img",{staticStyle:{width:"47%"},attrs:{src:"static/home/btn-fanhui.png"},nativeOn:{click:function(i){t.scrollTop()}}})],1)],1):t._e(),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("x-dialog",{staticClass:"dialog-demo video",attrs:{id:"video"},model:{value:t.showVideoBox,callback:function(i){t.showVideoBox=i},expression:"showVideoBox"}},[e("video",{attrs:{controls:"controls",src:t.videoSrc,"x-webkit-airplay":"true","webkit-playsinline":"true",preload:"auto",ontimeupdate:"videoUpdate(this)",id:"video-1"}},[e("source",{attrs:{src:t.videoSrc,type:"video/mp4"}})]),t._v(" "),e("div",{on:{click:function(i){i.stopPropagation(),t.showVideoBox=!1}}},[e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-outline",staticStyle:{fill:"#fff","margin-top":"20px"},attrs:{type:"ios-close-outline",size:"50",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 512 512"}},[e("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z"}}),e("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z"}})])])])],1),t._v(" "),t.firstVisibility?e("div",{staticStyle:{position:"fixed",right:"0",top:"10%"}},[e("img",{staticClass:"yiyuan",staticStyle:{width:"200px"},attrs:{src:"static/home/yiyuan.png","data-clipboard-text":t.yiyuanUrl},on:{click:t.goYiyuan}})]):t._e(),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("popup",{attrs:{height:"100%"},on:{"on-show":t.onBannerShow,"on-hide":t.onBannerHide},model:{value:t.bannerPopupStatus,callback:function(i){t.bannerPopupStatus=i},expression:"bannerPopupStatus"}},[e(t.banner,{tag:"component"}),t._v(" "),e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty",staticStyle:{position:"fixed",right:"20px",top:"20px",background:"#fff","border-radius":"10px"},attrs:{type:"ios-close-empty",size:"60",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 512 512"},on:{click:function(i){t.bannerPopupStatus=!1}}},[e("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})])],1)],1)],1)},ai=[],ri={render:ni,staticRenderFns:ai},li=ri,ci=e("VU/8"),ui=c,hi=ci(oi,li,!1,ui,null,null),di=hi.exports,pi=e("i3bH"),fi=e("nEyF"),mi=e("HRRm");u.a.use(p.a);var vi=new p.a({routes:[{path:"/",name:"HelloWorld",component:di},{path:"/banner1",name:"banner1",component:pi.default},{path:"/banner2",name:"banner2",component:fi.default},{path:"/banner3",name:"banner3",component:mi.default}]}),gi=(e("wcOv"),e("3BeM"));u.a.use(p.a),u.a.use(gi.a),d.a.attach(document.body),u.a.config.productionTip=!1,new u.a({router:vi,render:function(t){return t(S)}}).$mount("#app-box"),window.is_wx=function(){return!!navigator.userAgent.toLowerCase().includes("micromessenger")}},RjyN:function(t,i){},Y52p:function(t,i,e){"use strict";function s(t){e("DPlV")}var o=e("iRq5"),n=e.n(o),a=e("p3QP"),r=e("OFgA"),l=(r.a,String,String,String,String,String,Number,Object,String,Number,String,{name:"x-img",mixins:[r.a],created:function(){this.$vux&&this.$vux.bus&&this.$vux.bus.$on("vux:after-view-enter",this.init)},methods:{init:function(){var t=this;this.blazy&&this.blazy.destroy(),this.$el.src=this.defaultSrc,this.$el.className=this.$el.className.replace("b-loaded",""),this.blazy=new n.a({scroller:this.scroller,container:this.container,selector:"#vux-ximg-"+this.uuid,offset:t.offset,errorClass:t.errorClass,successClass:t.successClass,separator:t.separator,success:function(i){t.$emit("on-success",t.src,i)},error:function(i,e){t.$emit("on-error",t.src,i,e)}})}},mounted:function(){var t=this;this.$el.setAttribute("id","vux-ximg-"+this.uuid),this.$nextTick(function(){setTimeout(function(){t.init()},t.delay)}),Object(a.a)()},computed:{currentSrc:function(){return Object(a.b)()&&this.webpSrc?this.webpSrc:this.src}},props:{src:String,webpSrc:String,defaultSrc:{type:String,default:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,default:100},scroller:Object,container:String,delay:{type:Number,default:0},separator:String},watch:{src:function(t){this.init()}},beforeDestroy:function(){this.blazy&&this.blazy.destroy(),this.blazy=null,this.$vux&&this.$vux.bus&&this.$vux.bus.$off("vux:after-view-enter",this.init)}}),c=function(){var t=this,i=t.$createElement;return(t._self._c||i)("img",{staticClass:"vux-x-img",attrs:{src:t.defaultSrc,"data-src":t.currentSrc}})},u=[],h={render:c,staticRenderFns:u},d=h,p=e("VU/8"),f=s,m=p(l,d,!1,f,null,null);i.a=m.exports},"cqo/":function(t,i){},d1Im:function(t,i){},hIrR:function(t,i){},i3bH:function(t,i,e){"use strict";function s(t){e("7o6G")}Object.defineProperty(i,"__esModule",{value:!0});var o=e("Y52p"),n=(o.a,{components:{XImg:o.a},data:function(){return{url:"https://detail.tmall.hk/hk/item.htm?spm=a1z10.10044-b-s.196.2.1e15154du716Y9&id=573893162110&scene=taobao_shop"}},mounted:function(){},methods:{onBtnClick:function(){if(window.is_wx()){var t=new window.ClipboardJS(".img-btn");console.log(t),this.$vux.toast.text('<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>')}else window.location.href=this.url}}}),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b1/b1-1.jpg"}}),t._v(" "),e("img",{staticClass:"ximg-demo",attrs:{src:"static/b1/b1-2.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"relative"}},[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b1/b1-3.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0","text-align":"center",top:"61%"}},[e("img",{staticClass:"img-btn",staticStyle:{width:"45%"},attrs:{src:"static/btn-goumai.png","data-clipboard-text":t.url},on:{click:t.onBtnClick}})])])])},r=[],l={render:a,staticRenderFns:r},c=l,u=e("VU/8"),h=s,d=u(n,c,!1,h,null,null);i.default=d.exports},kllH:function(t,i){},nEyF:function(t,i,e){"use strict";function s(t){e("zM8P")}Object.defineProperty(i,"__esModule",{value:!0});var o=e("Y52p"),n=(o.a,{components:{XImg:o.a},data:function(){return{url:"https://ego.tmall.hk/category-1242652197.htm?spm=a1z10.5-b-s.w5001-15800929123.7.6dd41cadCrbseq&search=y&catName=%B6%F9%CD%AF%CF%B5%C1%D0&scene=taobao_shop#bd"}},methods:{onBtnClick:function(){if(window.is_wx()){var t=new window.ClipboardJS(".img-btn");console.log(t),this.$vux.toast.text('<span style="font-size: 30px;">链接已复制，请在其他浏览器中打开</span>')}else window.location.href=this.url}}}),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b2/b2-1.jpg"}}),t._v(" "),e("img",{staticClass:"ximg-demo",attrs:{src:"static/b2/b2-2.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"relative"}},[e("img",{staticClass:"ximg-demo",attrs:{src:"static/b2/b2-3.jpg",offset:-200}}),t._v(" "),e("div",{staticStyle:{position:"absolute",left:"0",right:"0","text-align":"center",bottom:"8%"}},[e("img",{staticClass:"img-btn",staticStyle:{width:"45%"},attrs:{src:"static/btn-goumai.png","data-clipboard-text":t.url},on:{click:t.onBtnClick}})])])])},r=[],l={render:a,staticRenderFns:r},c=l,u=e("VU/8"),h=s,d=u(n,c,!1,h,null,null);i.default=d.exports},owug:function(t,i){},rLAy:function(t,i,e){"use strict";function s(t){e("kllH")}var o=e("xNvf"),n=(o.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var i=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){i.show=!1,i.$emit("input",!1),i.$emit("on-hide"),i.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},r=[],l={render:a,staticRenderFns:r},c=l,u=e("VU/8"),h=s,d=u(n,c,!1,h,null,null);i.a=d.exports},wcOv:function(t,i){},zM8P:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.3175fd9be419bbdf6c2f.js.map