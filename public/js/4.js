(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8rvD":function(e,t,i){"use strict";i.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"chat-title"}},[t("span",[this._v("Rehema")]),this._v(" "),t("img",{attrs:{height:"20px",width:"20px",src:i("PXjP"),alt:"Delete Conversation"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"message-row you-message"},[t("div",{staticClass:"message-text"},[this._v("Ok then")]),this._v(" "),t("div",{staticClass:"message-time"},[this._v("Jun 27")])])}],a=i("L2JU");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o={data:function(){return{}},mounted:function(){this.messageThreads&&this.messageThreads.length>0||this.fetchThreads()},computed:s({},Object(a.e)({messageThreads:function(e){return e.message.threads}}),{},Object(a.c)({thread:"message/getThreads"})),methods:s({},Object(a.b)({fetchThreads:"message/fetchThreads"}),{getMessages:function(e){this.$router.push({name:"Message",params:{threadId:e}})}})},l=i("KHd+"),v=i("ZUTo"),x=i.n(v),p=i("sK+t"),u=i("Ey0z"),f=i("iGBT"),c=i("2hOt"),h=i("gnBG"),g=i("XSMC"),m=i("hlRy"),b=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450"}},[i("v-list",{attrs:{"three-line":""}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""}}),e._v(" "),i("v-list-item",{on:{click:function(t){return e.getMessages(e.thread.id)}}},[i("v-list-item-avatar",{attrs:{color:"red"}},[i("v-icon",{attrs:{dark:""}},[e._v("mdi-account-circle")])],1),e._v(" "),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(e.thread.user_to.uname))]),e._v(" "),i("v-list-item-subtitle",[e._v(e._s(e.thread.message))])],1)],1)],1)],1)}),[],!1,null,null,null),_=b.exports;x()(b,{VCard:p.a,VIcon:u.a,VList:f.a,VListItem:c.a,VListItemAvatar:h.a,VListItemContent:g.a,VListItemSubtitle:g.b,VListItemTitle:g.c,VTextField:m.a});function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach((function(t){O(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function O(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var j={data:function(){return{valid:!0,message:"",placeholder:"Type a message",autoGrow:!0,rows:1}},computed:y({},Object(a.c)({user:"user/getUserTo"})),methods:y({},Object(a.b)({sendMessage:"message/sendMessage"}),{submit:function(){if(this.$refs.form.validate(),this.valid){var e=new FormData,t=this.user.id;e.append("message",this.message),this.sendMessage({receiverId:t,formData:e}),this.$refs.form.reset()}}})},P=i("gzZi"),I=i("S9TP"),V=i("pyJu"),T=i("qEQh"),E=Object(l.a)(j,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-avatar",{staticClass:"mt-8",attrs:{color:"red",size:"30"}},[i("v-icon",{attrs:{dark:""}},[e._v("mdi-account-circle")])],1),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-list-item-content",[i("v-layout",{attrs:{justify:"start",fluid:""}},[i("v-textarea",{attrs:{"auto-grow":e.autoGrow,rows:e.rows,placeholder:e.placeholder,required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),i("v-btn",{staticClass:"mt-5",attrs:{text:"",color:"red"},on:{click:e.submit}},[i("v-icon",{attrs:{color:"red",size:"25",left:""}},[e._v("mdi-send")])],1)],1)],1)],1)],1)}),[],!1,null,"1e25a3c8",null),k=E.exports;function z(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function B(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}x()(E,{VBtn:P.a,VForm:I.a,VIcon:u.a,VLayout:V.a,VListItem:c.a,VListItemAvatar:h.a,VListItemContent:g.a,VTextarea:T.a});var $={components:{Thread:_,ChatForm:k},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?z(Object(i),!0).forEach((function(t){B(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):z(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(a.c)({user:"user/getUserTo",messages:"message/getThreadMessages"}))},C=(i("RgEt"),Object(l.a)($,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"chat-container"}},[i("div",{attrs:{id:"conversation-list"}},[i("Thread")],1),e._v(" "),e._m(0),e._v(" "),void 0!==e.messages?i("div",e._l(e.messages,(function(t){return i("div",{key:t.id,attrs:{id:"chat-message-list"}},[e._m(1,!0),e._v(" "),i("div",{staticClass:"message-row other-message"},[i("div",{staticClass:"message-text"},[e._v("\n\t\t\t\t"+e._s(t.message)+"  \n\t\t\t")]),e._v(" "),i("div",{staticClass:"message-time"},[e._v("Jun 27")])])])})),0):e._e(),e._v(" "),i("div",{attrs:{id:"chat-form"}},[i("ChatForm")],1)])}),n,!1,null,"27af259d",null));t.default=C.exports},FoHa:function(e,t,i){var n=i("HlDU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("SZ7m").default)("23312b9e",n,!0,{})},HlDU:function(e,t,i){(t=i("JPst")(!1)).push([e.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer,.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=t},PXjP:function(e,t){e.exports="/images/trash.png?78563eaeef62d229eb67f8a92d0d523f"},"Q8d+":function(e,t,i){(t=i("JPst")(!1)).push([e.i,"\n*[data-v-27af259d] {\r\nmargin: 0;\r\npadding: 0;\r\nbox-sizing: border-box;\n}\nhtml[data-v-27af259d], body[data-v-27af259d] {\r\nheight: 100%;\n}\nhtml[data-v-27af259d] {\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tbackground: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);\r\n\tfont-size: 10px;\n}\nbody[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tplace-items: center;\n}\n#chat-container[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tgrid:\r\n\t\t'conversation-list chat-title' 71px\r\n\t\t'conversation-list chat-message-list' 1fr\r\n\t\t'conversation-list chat-form' 78px\r\n\t\t/ 275px 1fr;\r\n\tmin-width: 800px;\r\n\tmax-width: 1000px;\r\n\tmax-height: 800px;\r\n\twidth: 100%;\r\n\theight: 95vh;\r\n\tbackground: #FFF;\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid rgba(0,0,0,0.25);\r\n\tbox-shadow: 3px 3px 3px 3px rgba(0,0,0,0.75);\n}\n#search-container[data-v-27af259d] {\r\n\tcolor: #eee;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tborder-radius: 2px;\r\n\theight: 30px;\r\n\tborder: 0;\r\n\tpadding-left: 48px;\r\n\tpadding-right: 20px;\n}\n#conversation-list[data-v-27af259d] {\r\n\tgrid-area: conversation-list;\n}\n#new-message-container[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tgrid: 40px / 40px;\r\n\talign-content: center;\r\n\tgrid-area: new-message-container;\r\n\tborder-top: 1px solid rgba(0,0,0,0.25);\r\n\tborder-radius: 0 0 0 10px;\n}\n#new-message-container a[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tplace-content: center center;\r\n\tbackground: #eee;\r\n\tborder-radius: 100%;\r\n\tcolor: #002C88;\r\n\ttext-decoration: none;\r\n\tfont-size: 3.6rem;\n}\n#chat-title[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tgrid: 36px / 1fr 36px;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\tgrid-area: chat-title;\r\n\tcolor: #0048AA;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\tborder-radius: 0 10px 0 0;\r\n\tbox-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);\r\n\tpadding: 0 20px;\n}\n#chat-title > img[data-v-27af259d] {\r\n\tcursor: pointer\n}\n#chat-message-list[data-v-27af259d] {\r\n\tgrid-area: chat-message-list;\r\n\tdisplay: flex;\r\n\tflex-direction: column-reverse;\r\n\tpadding: 0 20px;\r\n\toverflow-y: scroll;\n}\n.message-row[data-v-27af259d] {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 70%;\r\n\tmargin-bottom: 20px;\n}\n.you-message[data-v-27af259d] {\r\n\tjustify-content: end;\r\n\tjustify-items: end;\n}\n.other-message[data-v-27af259d] {\r\n\tjustify-items: start;\n}\n.message-text[data-v-27af259d] {\r\n\tpadding: 9px 14px;\r\n\tfont-size: 8 px;\r\n\tmargin-bottom: 5px;\n}\n.message-time[data-v-27af259d] {\r\n\tfont-size: 9 px;\r\n\tcolor: #777;\n}\n.you-message .message-text[data-v-27af259d] {\r\n\tbackground: red;\r\n\tcolor: #eee;\r\n\tborder: 1px solid #0048AA;\r\n\tborder-radius: 14px 14px 0 14px;\n}\n.other-message .message-text[data-v-27af259d] {\r\n\tbackground: #eee;\r\n\tcolor: #111;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 14px 14px 14px 0;\n}\n#chat-form[data-v-27af259d] {\r\n\tgrid-area: chat-form;\r\n\tborder-radius: 0 0 10px 0;\r\n\tborder-top: 1px solid rgba(0,0,0,0.25);\r\n\tbox-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);\n}\r\n",""]),e.exports=t},RgEt:function(e,t,i){"use strict";var n=i("SBso");i.n(n).a},S9TP:function(e,t,i){"use strict";var n=i("WN+I"),a=i("fiu3"),r=i("MgYL");t.a=Object(n.a)(a.a,Object(r.b)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",n=>{n&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))}):i.valid=t(e),i},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const i=this.watchers.find(e=>e._uid===t._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},SBso:function(e,t,i){var n=i("Q8d+");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,a);n.locals&&(e.exports=n.locals)},qEQh:function(e,t,i){"use strict";i("FoHa");var n=i("hlRy"),a=i("WN+I");const r=Object(a.a)(n.a);t.a=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n.a.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=n.a.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){n.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);