(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: true,
      message: '',
      placeholder: 'Type a message',
      autoGrow: true,
      rows: 1
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    user: 'user/getUserTo'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    sendMessage: 'message/sendMessage'
  }), {
    // submittng form data 
    submit: function submit() {
      this.$refs.form.validate();

      if (this.valid) {
        var formData = new FormData();
        var receiverId = this.user.id;
        formData.append('message', this.message);
        this.sendMessage({
          receiverId: receiverId,
          formData: formData
        });
        this.$refs.form.reset();
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/Thread.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message/Thread.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    if (this.messageThreads && this.messageThreads.length > 0) return; // already fetched.

    this.fetchThreads();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    messageThreads: function messageThreads(state) {
      return state.message.threads;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    thread: 'message/getThreads'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchThreads: 'message/fetchThreads'
  }), {
    getMessages: function getMessages(id) {
      this.$router.push({
        name: 'Message',
        params: {
          threadId: id
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_message_Thread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/message/Thread */ "./resources/js/components/message/Thread.vue");
/* harmony import */ var _components_message_ChatForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/message/ChatForm */ "./resources/js/components/message/ChatForm.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Thread: _components_message_Thread__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChatForm: _components_message_ChatForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    user: 'user/getUserTo',
    messages: 'message/getThreadMessages'
  }))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n*[data-v-0109012a] {\r\nmargin: 0;\r\npadding: 0;\r\nbox-sizing: border-box;\n}\nhtml[data-v-0109012a], body[data-v-0109012a] {\r\nheight: 100%;\n}\nhtml[data-v-0109012a] {\r\n\tfont-family: Arial, Helvetica, sans-serif;\r\n\tbackground: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);\r\n\tfont-size: 10px;\n}\nbody[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tplace-items: center;\n}\n#chat-container[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tgrid:\r\n\t\t'conversation-list chat-title' 71px\r\n\t\t'conversation-list chat-message-list' 1fr\r\n\t\t'conversation-list chat-form' 78px\r\n\t\t/ 275px 1fr;\r\n\tmin-width: 800px;\r\n\tmax-width: 1000px;\r\n\tmax-height: 800px;\r\n\twidth: 100%;\r\n\theight: 95vh;\r\n\tbackground: #FFF;\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid rgba(0,0,0,0.25);\r\n\tbox-shadow: 3px 3px 3px 3px rgba(0,0,0,0.75);\n}\n#search-container[data-v-0109012a] {\r\n\tcolor: #eee;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tborder-radius: 2px;\r\n\theight: 30px;\r\n\tborder: 0;\r\n\tpadding-left: 48px;\r\n\tpadding-right: 20px;\n}\n#conversation-list[data-v-0109012a] {\r\n\tgrid-area: conversation-list;\n}\n#new-message-container[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tgrid: 40px / 40px;\r\n\talign-content: center;\r\n\tgrid-area: new-message-container;\r\n\tborder-top: 1px solid rgba(0,0,0,0.25);\r\n\tborder-radius: 0 0 0 10px;\n}\n#new-message-container a[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tplace-content: center center;\r\n\tbackground: #eee;\r\n\tborder-radius: 100%;\r\n\tcolor: #002C88;\r\n\ttext-decoration: none;\r\n\tfont-size: 3.6rem;\n}\n#chat-title[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tgrid: 36px / 1fr 36px;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\tgrid-area: chat-title;\r\n\tcolor: #0048AA;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\tborder-radius: 0 10px 0 0;\r\n\tbox-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);\r\n\tpadding: 0 20px;\n}\n#chat-title > img[data-v-0109012a] {\r\n\tcursor: pointer\n}\n#chat-message-list[data-v-0109012a] {\r\n\tgrid-area: chat-message-list;\r\n\tdisplay: flex;\r\n\tflex-direction: column-reverse;\r\n\tpadding: 0 20px;\r\n\toverflow-y: scroll;\n}\n.message-row[data-v-0109012a] {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 70%;\r\n\tmargin-bottom: 20px;\n}\n.you-message[data-v-0109012a] {\r\n\tjustify-content: end;\r\n\tjustify-items: end;\n}\n.other-message[data-v-0109012a] {\r\n\tjustify-items: start;\n}\n.message-text[data-v-0109012a] {\r\n\tpadding: 9px 14px;\r\n\tfont-size: 8 px;\r\n\tmargin-bottom: 5px;\n}\n.message-time[data-v-0109012a] {\r\n\tfont-size: 9 px;\r\n\tcolor: #777;\n}\n.you-message .message-text[data-v-0109012a] {\r\n\tbackground: red;\r\n\tcolor: #eee;\r\n\tborder: 1px solid #0048AA;\r\n\tborder-radius: 14px 14px 0 14px;\n}\n.other-message .message-text[data-v-0109012a] {\r\n\tbackground: #eee;\r\n\tcolor: #111;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 14px 14px 14px 0;\n}\n#chat-form[data-v-0109012a] {\r\n\tgrid-area: chat-form;\r\n\tborder-radius: 0 0 10px 0;\r\n\tborder-top: 1px solid rgba(0,0,0,0.25);\r\n\tbox-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-item",
    { attrs: { "three-line": "" } },
    [
      _c(
        "v-list-item-avatar",
        { staticClass: "mt-8", attrs: { color: "red", size: "30" } },
        [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-account-circle")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "v-list-item-content",
            [
              _c(
                "v-layout",
                { attrs: { justify: "start", fluid: "" } },
                [
                  _c("v-textarea", {
                    attrs: {
                      "auto-grow": _vm.autoGrow,
                      rows: _vm.rows,
                      placeholder: _vm.placeholder,
                      required: ""
                    },
                    model: {
                      value: _vm.message,
                      callback: function($$v) {
                        _vm.message = $$v
                      },
                      expression: "message"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-5",
                      attrs: { text: "", color: "red" },
                      on: { click: _vm.submit }
                    },
                    [
                      _c(
                        "v-icon",
                        { attrs: { color: "red", size: "25", left: "" } },
                        [_vm._v("mdi-send")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "mx-auto", attrs: { "max-width": "450" } },
    [
      _c(
        "v-list",
        { attrs: { "three-line": "" } },
        [
          _c("v-text-field", {
            attrs: {
              "append-icon": "mdi-magnify",
              label: "Search",
              "single-line": "",
              "hide-details": ""
            }
          }),
          _vm._v(" "),
          _c(
            "v-list-item",
            {
              on: {
                click: function($event) {
                  return _vm.getMessages(_vm.thread.id)
                }
              }
            },
            [
              _c(
                "v-list-item-avatar",
                { attrs: { color: "red" } },
                [
                  _c("v-icon", { attrs: { dark: "" } }, [
                    _vm._v("mdi-account-circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", [
                    _vm._v(_vm._s(_vm.thread.user_to.uname))
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm._v(_vm._s(_vm.thread.message))
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "chat-container" } }, [
    _c("div", { attrs: { id: "conversation-list" } }, [_c("Thread")], 1),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.messages !== undefined
      ? _c(
          "div",
          _vm._l(_vm.messages, function(message) {
            return _c(
              "div",
              { key: message.id, attrs: { id: "chat-message-list" } },
              [
                _vm._m(1, true),
                _vm._v(" "),
                _c("div", { staticClass: "message-row other-message" }, [
                  _c("div", { staticClass: "message-text" }, [
                    _vm._v(
                      "\n\t\t\t\t" + _vm._s(message.message) + "  \n\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "message-time" }, [_vm._v("Jun 27")])
                ])
              ]
            )
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { attrs: { id: "chat-form" } }, [_c("ChatForm")], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "chat-title" } }, [
      _c("span", [_vm._v("Rehema")]),
      _vm._v(" "),
      _c("img", {
        attrs: {
          height: "20px",
          width: "20px",
          src: __webpack_require__(/*! ../assets/img/trash.png */ "./resources/js/assets/img/trash.png"),
          alt: "Delete Conversation"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-row you-message" }, [
      _c("div", { staticClass: "message-text" }, [_vm._v("Ok then")]),
      _vm._v(" "),
      _c("div", { staticClass: "message-time" }, [_vm._v("Jun 27")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/trash.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/img/trash.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/trash.png?78563eaeef62d229eb67f8a92d0d523f";

/***/ }),

/***/ "./resources/js/components/message/ChatForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/message/ChatForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatForm.vue?vue&type=template&id=68b691af&scoped=true& */ "./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true&");
/* harmony import */ var _ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatForm.vue?vue&type=script&lang=js& */ "./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68b691af",
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_5__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemContent"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_9__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/message/ChatForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/ChatForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatForm.vue?vue&type=template&id=68b691af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/ChatForm.vue?vue&type=template&id=68b691af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatForm_vue_vue_type_template_id_68b691af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/message/Thread.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/message/Thread.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thread.vue?vue&type=template&id=0b1adb3d& */ "./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d&");
/* harmony import */ var _Thread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thread.vue?vue&type=script&lang=js& */ "./resources/js/components/message/Thread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Thread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_7__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/message/Thread.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/message/Thread.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/message/Thread.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Thread.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/Thread.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Thread.vue?vue&type=template&id=0b1adb3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message/Thread.vue?vue&type=template&id=0b1adb3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Thread_vue_vue_type_template_id_0b1adb3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Messages.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Messages.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=0109012a&scoped=true& */ "./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/views/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& */ "./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0109012a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Messages.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Messages.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=style&index=0&id=0109012a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_0109012a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=0109012a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages.vue?vue&type=template&id=0109012a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_0109012a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);