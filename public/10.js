(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{138:function(t,e,i){var o=i(139);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("b9a57c7c",o,!0,{})},139:function(t,e,i){(e=i(7)(!1)).push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:rgba(255,255,255,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0px;max-height:0px;border:solid;border-width:thin 0 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0px;width:0px;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=e},146:function(t,e,i){var o=i(147);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("c287033a",o,!0,{})},147:function(t,e,i){(e=i(7)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(0.25, 0.8, 0.25, 1);width:100%;z-index:inherit;box-shadow:0px 11px 15px -7px rgba(0,0,0,.2),0px 24px 38px 3px rgba(0,0,0,.14),0px 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__subtitle{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(0.25, 0.8, 0.25, 1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0 !important;padding:0 !important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)}}",""]),t.exports=e},148:function(t,e,i){var o=i(149);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(11).default)("719041d9",o,!0,{})},149:function(t,e,i){(e=i(7)(!1)).push([t.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(0.25, 0.8, 0.5, 1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),t.exports=e},316:function(t,e,i){"use strict";i(138);var o=i(10);e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},318:function(t,e,i){"use strict";i(146);var o=i(347),n=i(43),s=i(84),a=i(85),r=(i(148),i(13)),l=i(10),c=i(21),d=i(2),h=Object(d.a)(r.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),v=i(0),u=i(3),p=i.n(u).a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:()=>({animationFrame:0,overlay:null}),watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new h({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(v.o)(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(v.a)(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[v.q.up,v.q.pageup],i=[v.q.down,v.q.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:(t,e)=>0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0,isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,i)}for(let t=0;t<e.length;t++){const o=e[t];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,i)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;for(;i;){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(v.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),m=i(87),f=i(86),g=i(88),y=i(8);const b=Object(d.a)(n.a,s.a,a.a,p,m.a,f.a,c.a);e.a=b.extend({name:"v-dialog",directives:{ClickOutside:g.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):p.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v.q.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=[...this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].find(t=>!t.hasAttribute("disabled"));t&&t.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(o.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(v.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(v.f)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},330:function(t,e,i){"use strict";i.r(e);var o={name:"following",components:{Following:i(47).a}},n=i(4),s=i(6),a=i.n(s),r=i(350),l=i(352),c=i(351),d=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{cols:"12",lg:"8",md:"6",sm:"4"}},[e("v-content",[e("Following")],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports;a()(d,{VCol:r.a,VContent:l.a,VRow:c.a})},47:function(t,e,i){"use strict";var o=i(5);function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={data:function(){return{dialog:!1}},computed:s({},Object(o.c)({user:"user/getAuthUser"}),{followings:function(){return this.user.followings}}),methods:s({},Object(o.b)({unfollowUser:"user/unfollowUser"}),{unfollow:function(t){this.unfollowUser(t)}})},l=i(4),c=i(6),d=i.n(c),h=i(96),v=i(111),u=i(14),p=i(318),m=i(316),f=i(109),g=i(132),y=i(108),b=i(61),w=i(110),x=i(1),_=i(351),O=i(348),k=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{text:"",color:"white",dark:""}},o),[t._v("\n          Following\n        ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),i("v-card",{attrs:{"max-width":"400"}},[i("v-list",{attrs:{subheader:""}},t._l(t.followings,(function(e){return i("v-list-item",{key:e.id},[i("v-list-item-avatar",{attrs:{color:"red",size:"40"}},["default.gif"!=e.dp?i("v-img",{attrs:{src:"https://redrosse.com/app/public/storage/pics/"+e.dp}}):i("v-icon",{attrs:{dark:""}},[t._v("mdi-account-circle")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),t._v(" "),i("v-btn",{attrs:{value:"left",color:"white"},on:{click:function(i){return t.unfollow(e.id)}}},[i("span",{staticClass:"hidden-sm-and-down",attrs:{color:"red"}},[t._v("Unfollow")])])],1)})),1),t._v(" "),i("v-divider"),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=k.exports;d()(k,{VBtn:h.a,VCard:v.a,VCardActions:u.a,VDialog:p.a,VDivider:m.a,VIcon:f.a,VImg:g.a,VList:y.a,VListItem:b.a,VListItemAvatar:w.a,VListItemContent:x.a,VListItemTitle:x.c,VRow:_.a,VSpacer:O.a})}}]);