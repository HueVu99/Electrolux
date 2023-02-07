"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["lazyform"],{

/***/ "./javascript/components/dynamicForm/FormMixin.js":
/*!********************************************************!*\
  !*** ./javascript/components/dynamicForm/FormMixin.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var LIST_TAG_ATTR = ['required', 'max', 'min', 'maxlength', 'minlength', 'readonly', 'pattern'];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    customClass: {
      type: String,
      "default": ''
    },
    type: {
      type: String,
      "default": 'text'
    },
    label: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      "default": 'custom'
    },
    isAlterNative: {
      type: Boolean,
      "default": false
    },
    defaultValue: {
      type: String,
      "default": ''
    },
    placeholder: {
      type: String,
      "default": ''
    },
    mobileWidth: {
      type: Number,
      "default": 12
    },
    width: {
      type: Number,
      "default": 12
    },
    validations: {
      type: Array,
      "default": Array
    }
  },
  computed: {
    customId: function customId() {
      return (this.type + '_' + this.name + '_' + this.label.slice(0, 10)).replaceAll(' ', '');
    },
    groupClass: function groupClass() {
      var res = ['c_form__group', 'js_form-group'];
      res.push(this.customClass);
      res.push('col-' + (this.mobileWidth ? this.mobileWidth : '12'));
      res.push('col-md-' + (this.width ? this.width : '12'));
      return res.join(' ');
    },
    isRequired: function isRequired() {
      return this.validations.find(function (v) {
        return v.type === 'required';
      });
    },
    validationAttr: function validationAttr() {
      var res = {};
      this.validations.forEach(function (validator) {
        var attrKey = validator.type.toString().toLowerCase();

        if (LIST_TAG_ATTR.find(function (a) {
          return a == attrKey;
        })) {
          var _validator$value;

          res[attrKey] = (_validator$value = validator.value) !== null && _validator$value !== void 0 ? _validator$value : true;
        }
      });
      return res;
    }
  },
  methods: {
    toggleAlternate: function toggleAlternate() {
      var _this = this;

      var alternativeContent = this.$refs.alternativeContent;

      if (!alternativeContent) {
        return;
      }

      if (this.isShowAlternate) {
        alternativeContent.style.height = alternativeContent.scrollHeight + 'px';
        alternativeContent.classList.remove('is-active');
        setTimeout(function () {
          alternativeContent.style.height = '0px';
        }, 0);
        setTimeout(function () {
          _this.isShowAlternate = false;
          alternativeContent.style.removeProperty('height');
        }, 350);
      } else {
        this.isShowAlternate = true;
        setTimeout(function () {
          alternativeContent.style.height = alternativeContent.scrollHeight + 'px';
        }, 0);
        setTimeout(function () {
          alternativeContent.style.removeProperty('height');
          alternativeContent.classList.add('is-active');
        }, 350);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
//
//
//
//
//
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
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    type: {
      type: String,
      "default": "captcha"
    },
    defaultValue: {
      type: String,
      "default": ""
    },
    invalidcaptcha: {
      type: Boolean,
      "default": false
    },
    validations: {
      type: Array,
      "default": Array
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  methods: {
    checkCaptcha: function checkCaptcha(response) {
      this.$emit('emitTokenUser', response);
    },
    expiredCaptcha: function expiredCaptcha(response) {
      this.$emit('expiredTokenUser');
    },
    resetCaptcha: function resetCaptcha() {
      grecaptcha.reset();
    },
    checkStatusCatpcha: function checkStatusCatpcha() {
      return grecaptcha && grecaptcha.getResponse().length !== 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMixin */ "./javascript/components/dynamicForm/FormMixin.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
//
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
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    type: {
      type: String,
      "default": 'datetime'
    },
    formatValue: {
      type: String,
      "default": 'DD/MM/YYYY'
    }
  },
  mixins: [_FormMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      isRange: this.type == 'daterange' ? {
        range: 'range'
      } : {},
      time2: this.defaultValue ? new Date() : ''
    };
  },
  mounted: function mounted() {// console.log('formatValue: ' + this.formatValue, this);
  },
  computed: {},
  methods: {
    onChange: function onChange(value) {
      var _this = this;

      var changeEvent = new CustomEvent("changeDatepicker", {
        value: value
      });
      setTimeout(function () {
        document.querySelector("[name=".concat(_this.name, "]")).dispatchEvent(changeEvent);
      }, 10);
    },
    disabledFunction: function disabledFunction(date) {
      if (this.validations.find(function (v) {
        return v.type == 'beforeToday';
      })) {
        return date > new Date(new Date().setHours(0, 0, 0, 0));
      }

      if (this.validations.find(function (v) {
        return v.type == 'notBeforeToday';
      })) {
        return date < new Date(new Date().setHours(0, 0, 0, 0));
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./javascript/components/dynamicForm/Captcha.vue":
/*!*******************************************************!*\
  !*** ./javascript/components/dynamicForm/Captcha.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Captcha.vue?vue&type=template&id=60e23d39& */ "./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39&");
/* harmony import */ var _Captcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Captcha.vue?vue&type=script&lang=js& */ "./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Captcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__.render,
  _Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/dynamicForm/Captcha.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/dynamicForm/DatePicker.vue":
/*!**********************************************************!*\
  !*** ./javascript/components/dynamicForm/DatePicker.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=template&id=7f1c13ed& */ "./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed&");
/* harmony import */ var _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=script&lang=js& */ "./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/dynamicForm/DatePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Captcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Captcha.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Captcha_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39&":
/*!**************************************************************************************!*\
  !*** ./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Captcha_vue_vue_type_template_id_60e23d39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Captcha.vue?vue&type=template&id=60e23d39& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39&");


/***/ }),

/***/ "./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed&":
/*!*****************************************************************************************!*\
  !*** ./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_7f1c13ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=template&id=7f1c13ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/Captcha.vue?vue&type=template&id=60e23d39& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c_form__group c_form__captcha col-12" },
    [
      _c("vue-recaptcha", {
        attrs: { sitekey: _vm.defaultValue, loadRecaptchaScript: true },
        on: { verify: _vm.checkCaptcha, expired: _vm.expiredCaptcha },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.invalidcaptcha,
              expression: "invalidcaptcha",
            },
          ],
          staticClass: "c_form__error-message",
        },
        _vm._l(_vm.validations, function (error) {
          return _c("p", { key: error.type }, [
            _vm._v(_vm._s(error.messageError)),
          ])
        }),
        0
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DatePicker.vue?vue&type=template&id=7f1c13ed& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.groupClass },
    [
      _c(
        "label",
        { staticClass: "c_form__label", attrs: { for: _vm.customId } },
        [
          _c("span", { domProps: { innerHTML: _vm._s(_vm.label) } }),
          !!_vm.validationAttr.required
            ? _c("span", { staticClass: "c_form__required" }, [_vm._v("*")])
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      _c(
        "DatePicker",
        _vm._b(
          {
            attrs: {
              format: _vm.formatValue,
              "input-attr": Object.assign(
                {},
                { name: _vm.name },
                _vm.validationAttr,
                { id: _vm.customId }
              ),
              "disabled-date": _vm.disabledFunction,
            },
            on: { change: _vm.onChange },
            model: {
              value: _vm.time2,
              callback: function ($$v) {
                _vm.time2 = $$v
              },
              expression: "time2",
            },
          },
          "DatePicker",
          _vm.isRange,
          false
        )
      ),
      _vm._v(" "),
      _c("div", { staticClass: "c_form__error-message" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=lazyform.bundle-legacy.50b56fe5f2d22b2ecff5.js.map