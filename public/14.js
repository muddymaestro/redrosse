(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{204:function(t,e,r){"use strict";var a=r(73);r.n(a).a},205:function(t,e,r){(e=r(7)(!1)).push([t.i,"\na[data-v-4eea264e] {  \n    text-decoration: none;\n}\n",""]),t.exports=e},324:function(t,e,r){"use strict";r.r(e);var a=r(5),o=r(82),s=r(81),i=r(47),n=r(83);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{Following:i.a,Follower:n.a},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(a.c)({user:"user/getAuthUser"}),{followersCount:function(){return this.user.followers.length},followingCount:function(){return this.user.followings.length}})},v=(r(204),r(4)),d=r(6),p=r.n(d),f=r(96),m=r(316),b=r(349),g=r(27),h=r(44),_=Object(v.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-toolbar-items",{staticClass:"hidden-sm-and-down mx-auto"},[r("v-divider",{staticClass:"mx-4",attrs:{color:"white",inset:"",vertical:""}}),t._v(" "),r("v-btn",{attrs:{text:""}},[t._v("\n              About\n          ")]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{color:"white",inset:"",vertical:""}}),t._v(" "),r("div",{staticClass:"my-auto"},[r("v-layout",{attrs:{justify:"start"}},[r("span",{staticClass:"mt-2",attrs:{left:""}},[t._v(t._s(this.followingCount))]),t._v(" "),r("Following")],1)],1),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{color:"white",inset:"",vertical:""}}),t._v(" "),r("div",{staticClass:"my-auto"},[r("v-layout",{attrs:{justify:"start"}},[r("span",{staticClass:"mt-2",attrs:{left:""}},[t._v(t._s(this.followersCount))]),t._v(" "),r("Follower")],1)],1),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{color:"white",inset:"",vertical:""}}),t._v(" "),r("v-btn",{attrs:{text:""}},[t._v("\n              Posts\n          ")]),t._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{color:"white",inset:"",vertical:""}})],1)],1)}),[],!1,null,"4eea264e",null),C=_.exports;p()(_,{VBtn:f.a,VDivider:m.a,VLayout:b.a,VToolbar:g.a,VToolbarItems:h.a});function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w={props:{userProfile:{type:Object,required:!0}},data:function(){return{user:P({},this.userProfile),valid:!0,nameRules:[function(t){return!!t||"Name is required"}],unameRules:[function(t){return!!t||"Username is required"}],dialog:!1,date:(new Date).toISOString().substr(0,10),modal:!1,radios:""}},methods:P({},Object(a.b)({updateProfile:"user/updateProfile"}),{submit:function(){var t=P({},this.user,{dob:this.date,gender:this.radios});this.updateProfile(t),this.$refs.form.reset(),this.dialog=!1}})},x=r(111),k=r(14),j=r(350),V=r(313),D=r(323),S=r(318),E=r(314),$=r(109),F=r(338),T=r(321),A=r(351),I=r(348),q=r(59),R=Object(v.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{tile:"",color:"primary",dark:""}},a),[r("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Edit Profile\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("User Profile")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Fullname*",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Username*"},model:{value:t.user.uname,callback:function(e){t.$set(t.user,"uname",e)},expression:"user.uname"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Bio",required:""},model:{value:t.user.bio,callback:function(e){t.$set(t.user,"bio",e)},expression:"user.bio"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Home Town"},model:{value:t.user.home_town,callback:function(e){t.$set(t.user,"home_town",e)},expression:"user.home_town"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Current City",required:""},model:{value:t.user.current_city,callback:function(e){t.$set(t.user,"current_city",e)},expression:"user.current_city"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-text-field",t._g({attrs:{label:"Picker in dialog","prepend-icon":"event",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),r("v-date-picker",{attrs:{scrollable:"",min:"1916-06-15",max:"2018-03-20"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-radio-group",{scopedSlots:t._u([{key:"label",fn:function(){return[r("div",[t._v("Gender")])]},proxy:!0}]),model:{value:t.radios,callback:function(e){t.radios=e},expression:"radios"}},[t._v(" "),r("v-radio",{attrs:{value:"m"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",[t._v("Male")])]},proxy:!0}])}),t._v(" "),r("v-radio",{attrs:{value:"f"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",[t._v("Female")])]},proxy:!0}])})],1)],1)],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.submit()}}},[t._v("Save")])],1)],1)],1)],1)}),[],!1,null,null,null),B=R.exports;function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}p()(R,{VBtn:f.a,VCard:x.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VCol:j.a,VContainer:V.a,VDatePicker:D.a,VDialog:S.a,VForm:E.a,VIcon:$.a,VRadio:F.a,VRadioGroup:T.a,VRow:A.a,VSpacer:I.a,VTextField:q.a});var G={name:"Profile",data:function(){return{image:""}},components:{PostForm:o.a,PostCard:s.a,ToolBar:C,EditProfile:B},computed:U({},Object(a.c)({user:"user/getAuthUser"})),methods:U({},Object(a.b)({updateProfilePicture:"user/updateProfilePicture",updateCoverPicture:"user/updateCoverPicture"}),{onAvatarClick:function(){this.$refs.dpChange.click()},onDpChange:function(t){this.image=t.target.files[0];var e=new FormData;e.append("image",this.image),this.updateProfilePicture(e)},onCoverPhotoClick:function(){this.$refs.coverPhotoChange.click()},onCoverPhotoChange:function(t){this.image=t.target.files[0];var e=new FormData;e.append("image",this.image),this.updateCoverPicture(e)}})},J=r(319),H=r(106),K=r(132),M=r(61),N=r(1),Q=Object(v.a)(G,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mb-12"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mt-0",attrs:{height:"300px",tile:""}},["cover.jpg"==t.user.cover?a("v-img",{attrs:{height:"100%",src:r(118)("./"+t.user.cover)},on:{click:function(e){return e.target!==e.currentTarget?null:t.onCoverPhotoClick(e)}}},[a("v-row",{staticClass:"fill-height",attrs:{align:"end"}},[a("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"12"}},[a("v-avatar",{staticClass:"profile mx-8 my-8",attrs:{color:"grey",size:"164",rounded:""},on:{click:function(e){return e.stopPropagation(),t.onAvatarClick(e)}}},["default.gif"==t.user.dp?a("v-img",{attrs:{src:r(76)("./"+t.user.dp)}}):a("v-img",{attrs:{src:"https://redrosse.com/app/public/storage/pics/"+t.user.dp}})],1),t._v(" "),a("input",{ref:"dpChange",staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return t.onDpChange(e)}}}),t._v(" "),a("input",{ref:"coverPhotoChange",staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return t.onCoverPhotoChange(e)}}})],1),t._v(" "),a("v-col",{staticClass:"py-0",attrs:{lg:"6",md:"8",sm:"10"}},[a("v-alert",{attrs:{color:"rgba(42,59,77, .8)",dark:"",border:"top",tile:"",dense:""}},[a("v-list-item",{attrs:{color:"rgba(0, 0, 0, .4)",dark:""}},[a("v-list-item-content",{staticClass:"py-0"},[a("v-list-item-title",{staticClass:"title py-0"},[t._v(t._s(t.user.name))]),t._v(" "),a("v-list-item-subtitle",[t._v("@ "+t._s(t.user.uname))])],1)],1)],1)],1),t._v(" "),a("v-spacer"),t._v(" "),a("div",{staticClass:"mb-7 mr-10"},[a("EditProfile",{attrs:{"user-profile":t.user}})],1)],1)],1):a("v-img",{attrs:{height:"100%",src:"https://redrosse.com/app/public/storage/pics/"+t.user.cover},on:{click:function(e){return e.target!==e.currentTarget?null:t.onCoverPhotoClick(e)}}},[a("v-row",{staticClass:"fill-height",attrs:{align:"end"}},[a("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"12"}},[a("v-avatar",{staticClass:"profile mx-8 my-8",attrs:{color:"grey",size:"164",rounded:""},on:{click:function(e){return e.stopPropagation(),t.onAvatarClick(e)}}},["default.gif"==t.user.dp?a("v-img",{attrs:{src:r(76)("./"+t.user.dp)}}):a("v-img",{attrs:{src:"https://redrosse.com/app/public/storage/pics/"+t.user.dp}})],1),t._v(" "),a("input",{ref:"dpChange",staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return t.onDpChange(e)}}}),t._v(" "),a("input",{ref:"coverPhotoChange",staticClass:"d-none",attrs:{type:"file"},on:{change:function(e){return t.onCoverPhotoChange(e)}}})],1),t._v(" "),a("v-col",{staticClass:"py-0",attrs:{lg:"6",md:"8",sm:"10"}},[a("v-alert",{attrs:{color:"rgba(42,59,77, .8)",dark:"",border:"top",tile:"",dense:""}},[a("v-list-item",{attrs:{color:"rgba(0, 0, 0, .4)",dark:""}},[a("v-list-item-content",{staticClass:"py-0"},[a("v-list-item-title",{staticClass:"title py-0"},[t._v(t._s(t.user.name))]),t._v(" "),a("v-list-item-subtitle",[t._v("@ "+t._s(t.user.uname))])],1)],1)],1)],1),t._v(" "),a("v-spacer"),t._v(" "),a("div",{staticClass:"mb-7 mr-10"},[a("EditProfile",{attrs:{"user-profile":t.user}})],1)],1)],1),t._v(" "),a("ToolBar")],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"pt-1 mt-6",attrs:{lg:"8"}},[a("PostForm",{attrs:{"user-id":t.user.id}}),t._v(" "),a("PostCard")],1),t._v(" "),a("v-row",{staticClass:"pt-1 mt-6",attrs:{lg:"4"}})],1)],1)}),[],!1,null,null,null);e.default=Q.exports;p()(Q,{VAlert:J.a,VAvatar:H.a,VCard:x.a,VCol:j.a,VImg:K.a,VListItem:M.a,VListItemContent:N.a,VListItemSubtitle:N.b,VListItemTitle:N.c,VRow:A.a,VSpacer:I.a})},73:function(t,e,r){var a=r(205);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(23)(a,o);a.locals&&(t.exports=a.locals)}}]);