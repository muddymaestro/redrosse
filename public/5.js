(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/Slider */ "./resources/js/components/auth/Slider.vue");
/* harmony import */ var _auth_SignUpStepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/SignUpStepper */ "./resources/js/components/auth/SignUpStepper.vue");
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
  name: 'SignUp',
  components: {
    Slider: _auth_Slider__WEBPACK_IMPORTED_MODULE_0__["default"],
    SignUpStepper: _auth_SignUpStepper__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
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
  name: 'SignUpStepper',
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  validations: {
    fname: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(100)
    },
    lname: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(100)
    },
    uname: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(15),
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
    },
    phone: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(6)
    },
    password_confirmation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      sameAs: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
    }
  },
  data: function data() {
    return {
      e6: 1,
      value: true,
      uname: '',
      fname: '',
      lname: '',
      email: '',
      password: '',
      phone: '',
      password_confirmation: ''
    };
  },
  computed: {
    fnameErrors: function fnameErrors() {
      var errors = [];
      if (!this.$v.fname.$dirty) return errors;
      !this.$v.fname.maxLength && errors.push('First Name is too long (use 100 charcters max)');
      !this.$v.fname.required && errors.push('First Name is required');
      return errors;
    },
    lnameErrors: function lnameErrors() {
      var errors = [];
      if (!this.$v.lname.$dirty) return errors;
      !this.$v.lname.maxLength && errors.push('Last Name is too long (use 100 charcters max)');
      !this.$v.lname.required && errors.push('Last Name is required');
      return errors;
    },
    unameErrors: function unameErrors() {
      var errors = [];
      if (!this.$v.uname.$dirty) return errors;
      !this.$v.uname.maxLength && errors.push('Username can not have more than 15 characters');
      !this.$v.uname.minLength && errors.push('Username Must have more than 2 characters');
      !this.$v.uname.required && errors.push('Username is required');
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail Address is required');
      return errors;
    },
    phoneErrors: function phoneErrors() {
      var errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push('Phone Number is required');
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('Password is required.');
      !this.$v.password.minLength && errors.push('Password is too short.');
      return errors;
    },
    password_confirmationErrors: function password_confirmationErrors() {
      var errors = [];
      if (!this.$v.password_confirmation.$dirty) return errors;
      !this.$v.password_confirmation.required && errors.push('password confirmation is required.');
      !this.$v.password_confirmation.sameAs && errors.push('passwords must match.');
      return errors;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    signUp: 'auth/signUp'
  }), {
    submit: function submit(event) {
      var _this = this;

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.signUp({
          email: this.email,
          uname: this.uname,
          fname: this.fname,
          lname: this.lname,
          password: this.password,
          password_confirmation: this.password_confirmation,
          phone: this.phone
        }).then(function () {
          _this.clear();

          _this.$router.replace({
            name: 'Home'
          })["catch"](function (err) {
            throw new Error("Problem handling something: ".concat(err, "."));
          });
        })["catch"](function (err) {
          console.log("sign-up error: ".concat(err, "."));
        });
      }
    },
    clear: function clear() {
      this.$v.$reset();
      this.fname = '';
      this.fname = '';
      this.uname = '';
      this.email = '';
      this.phone = '';
      this.password = '';
      this.password_confirmation = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Slider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'Slider',
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.v-carousel{\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 250px !important;\n}\n#caption-highlight {\r\n  color: #f6851f;\r\n  font-size: 24pt;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "7", lg: "7", sm: "12" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "pa-2 indigo lighten-5",
                  attrs: { outlined: "", tile: "" }
                },
                [_c("Slider")],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "5", lg: "5", sm: "12" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-0", attrs: { elevation: "4", tile: "" } },
                [_c("SignUpStepper")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "v-stepper",
    {
      attrs: { vertical: "", outlined: "" },
      model: {
        value: _vm.e6,
        callback: function($$v) {
          _vm.e6 = $$v
        },
        expression: "e6"
      }
    },
    [
      _c(
        "v-list-item",
        { staticClass: "pt-4" },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", { staticClass: "headline mb-2" }, [
                _vm._v("Sign Up Below...")
              ]),
              _vm._v(" "),
              _c("hr")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-stepper-step",
        {
          attrs: {
            complete: _vm.e6 > 1,
            editable: "",
            rules: [
              function() {
                return (
                  !_vm.fnameErrors.length > 0 && !_vm.lnameErrors.length > 0
                )
              }
            ],
            step: "1"
          }
        },
        [
          _vm._v("\n    Personal Details\n    "),
          _c("small", [_vm._v("Who are you?")])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-stepper-content",
        { attrs: { step: "1" } },
        [
          _c(
            "v-card",
            { attrs: { height: "auto", flat: "" } },
            [
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  "solo-inverted": "",
                  dense: "",
                  "hide-details": "auto",
                  clearable: "",
                  counter: 100,
                  "error-messages": _vm.fnameErrors,
                  label: "First Name",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.fname.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.fname.$touch()
                  }
                },
                model: {
                  value: _vm.fname,
                  callback: function($$v) {
                    _vm.fname = $$v
                  },
                  expression: "fname"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  "solo-inverted": "",
                  dense: "",
                  "hide-details": "auto",
                  clearable: "",
                  counter: 100,
                  "error-messages": _vm.lnameErrors,
                  label: "Last Name",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.lname.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.lname.$touch()
                  }
                },
                model: {
                  value: _vm.lname,
                  callback: function($$v) {
                    _vm.lname = $$v
                  },
                  expression: "lname"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.fnameErrors.length > 0 && !_vm.lnameErrors.length > 0
            ? _c(
                "v-btn",
                {
                  attrs: { small: "", color: "primary", rounded: "" },
                  on: {
                    click: function($event) {
                      _vm.e6 = 2
                    }
                  }
                },
                [_vm._v("Continue")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-stepper-step",
        {
          attrs: {
            complete: _vm.e6 > 2,
            editable: "",
            rules: [
              function() {
                return (
                  !_vm.emailErrors.length > 0 && !_vm.phoneErrors.length > 0
                )
              }
            ],
            step: "2"
          }
        },
        [_vm._v("Your Contacts")]
      ),
      _vm._v(" "),
      _c(
        "v-stepper-content",
        { attrs: { step: "2" } },
        [
          _c(
            "v-card",
            { attrs: { height: "auto", flat: "" } },
            [
              _c("v-text-field", {
                attrs: {
                  type: "email",
                  "solo-inverted": "",
                  dense: "",
                  clearable: "",
                  "error-messages": _vm.emailErrors,
                  label: "E-mail Address",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.email.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.email.$touch()
                  }
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  "solo-inverted": "",
                  dense: "",
                  clearable: "",
                  "error-messages": _vm.phoneErrors,
                  label: "Phone Number"
                },
                on: {
                  input: function($event) {
                    return _vm.$v.phone.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.phone.$touch()
                  }
                },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.emailErrors.length > 0 && !_vm.phoneErrors.length > 0
            ? _c(
                "v-btn",
                {
                  attrs: { small: "", color: "primary", rounded: "" },
                  on: {
                    click: function($event) {
                      _vm.e6 = 3
                    }
                  }
                },
                [_vm._v("Continue")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-stepper-step",
        {
          attrs: {
            complete: _vm.e6 > 3,
            editable: "",
            rules: [
              function() {
                return (
                  !_vm.password_confirmationErrors.length > 0 &&
                  !_vm.unameErrors.length > 0 &&
                  !_vm.passwordErrors.length > 0
                )
              }
            ],
            step: "3"
          }
        },
        [_vm._v("Account Details")]
      ),
      _vm._v(" "),
      _c(
        "v-stepper-content",
        { attrs: { step: "3" } },
        [
          _c(
            "v-card",
            { attrs: { height: "auto", flat: "" } },
            [
              _c("v-text-field", {
                attrs: {
                  type: "text",
                  "solo-inverted": "",
                  dense: "",
                  "hide-details": "auto",
                  clearable: "",
                  counter: 15,
                  "error-messages": _vm.unameErrors,
                  label: "Username",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.uname.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.uname.$touch()
                  }
                },
                model: {
                  value: _vm.uname,
                  callback: function($$v) {
                    _vm.uname = $$v
                  },
                  expression: "uname"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "solo-inverted": "",
                  dense: "",
                  "error-messages": _vm.passwordErrors,
                  label: "Password",
                  counter: "",
                  required: "",
                  "append-icon": _vm.value ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.value ? "password" : "text",
                  clearable: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.password.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.password.$touch()
                  },
                  "click:append": function() {
                    return (_vm.value = !_vm.value)
                  }
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "solo-inverted": "",
                  dense: "",
                  "error-messages": _vm.password_confirmationErrors,
                  label: "Password confirmation",
                  counter: "",
                  required: "",
                  "append-icon": _vm.value ? "mdi-eye" : "mdi-eye-off",
                  type: _vm.value ? "password" : "text",
                  clearable: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.password_confirmation.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.password_confirmation.$touch()
                  },
                  "click:append": function() {
                    return (_vm.value = !_vm.value)
                  }
                },
                model: {
                  value: _vm.password_confirmation,
                  callback: function($$v) {
                    _vm.password_confirmation = $$v
                  },
                  expression: "password_confirmation"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.password_confirmationErrors.length > 0 &&
          !_vm.unameErrors.length > 0 &&
          !_vm.passwordErrors.length > 0
            ? _c(
                "v-btn",
                {
                  attrs: { small: "", color: "primary", rounded: "" },
                  on: {
                    click: function($event) {
                      _vm.e6 = 4
                    }
                  }
                },
                [_vm._v("Continue")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("v-stepper-step", { attrs: { editable: "", step: "4" } }, [
        _vm._v("Terms & Conditions")
      ]),
      _vm._v(" "),
      _c(
        "v-stepper-content",
        { attrs: { complete: _vm.e6 == 1, step: "4" } },
        [
          _c(
            "v-card",
            { staticClass: "mb-4 ", attrs: { height: "auto", flat: "" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    border: "left",
                    "colored-border": "",
                    color: "indigo accent-4",
                    elevation: "4"
                  }
                },
                [
                  _vm._v(
                    "\n          By clicking Sign Up I agree to the terms and conditions of using redrosse.\n      "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.$v.$invalid
            ? _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", rounded: "" },
                      on: { click: _vm.submit }
                    },
                    [_vm._v("Sign Up")]
                  ),
                  _vm._v(" "),
                  _c("v-btn", { attrs: { text: "" } }, [_vm._v("Cancel")])
                ],
                1
              )
            : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "v-carousel",
    {
      staticClass: "mx-auto pt-lg-10 pt-md-10 mt-lg-12 pt-sm-2 mt-sm-2",
      attrs: { "hide-delimiters": "", cycle: "" }
    },
    [
      _c(
        "v-carousel-item",
        [
          _c("center", [
            _c("h1", [
              _vm._v("\n          The Cultural Melting\n          "),
              _c("span", { attrs: { id: "caption-highlight" } }, [
                _vm._v("Pot of the World!")
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          From Paris to Rio, New York to Dubai, Lagos to Beijing, Delhi to Buenos Aires, San Juan to Casablanca.\n          "
              ),
              _c("span", [
                _vm._v(
                  "“Our cultural strength has always been derived from our diversity of understanding and experience.”"
                )
              ]),
              _vm._v(" Break cultural barriers, life is fun!\n        ")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-carousel-item",
        [
          _c("center", [
            _c("h1", [
              _vm._v("\n          Join Our Global\n          "),
              _c("span", { attrs: { id: "caption-highlight" } }, [
                _vm._v("Community Platform!")
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          Share your cultural stories and adventures. Share your experience about food, music, fashion & beauty, and language. Share your memorable stories and not so memorable adventures with your friends, family and citizens of the world.\n          "
              ),
              _c("span")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("center", [
        _c("h1", [
          _vm._v("\n          Celebrate Your Culture,\n          "),
          _c("span", { attrs: { id: "caption-highlight" } }, [
            _vm._v("Spread Love!")
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n          Tell the world about your culture such as art , poetry, religion, historical landmarks or sites as well as nature sceneries.\n          "
          ),
          _c("span", [
            _vm._v(
              "Celebrate your culture and heritage, respect n’ love others, bring the world together!"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("v-carousel-item")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/SignUp.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/SignUp.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUp.vue?vue&type=template&id=17d58b24& */ "./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24&");
/* harmony import */ var _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/SignUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUp.vue?vue&type=template&id=17d58b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUp.vue?vue&type=template&id=17d58b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_template_id_17d58b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/auth/SignUpStepper.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/auth/SignUpStepper.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpStepper.vue?vue&type=template&id=38383a86& */ "./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86&");
/* harmony import */ var _SignUpStepper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpStepper.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VStepper */ "./node_modules/vuetify/lib/components/VStepper/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignUpStepper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"],VStepper: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_8__["VStepper"],VStepperContent: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_8__["VStepperContent"],VStepperStep: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_8__["VStepperStep"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/SignUpStepper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpStepper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpStepper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUpStepper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpStepper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignUpStepper.vue?vue&type=template&id=38383a86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/SignUpStepper.vue?vue&type=template&id=38383a86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUpStepper_vue_vue_type_template_id_38383a86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/auth/Slider.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Slider.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=a25ecb66& */ "./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66&");
/* harmony import */ var _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCarousel */ "./node_modules/vuetify/lib/components/VCarousel/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCarousel: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_5__["VCarousel"],VCarouselItem: vuetify_lib_components_VCarousel__WEBPACK_IMPORTED_MODULE_5__["VCarouselItem"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Slider.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Slider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=template&id=a25ecb66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Slider.vue?vue&type=template&id=a25ecb66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_a25ecb66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);