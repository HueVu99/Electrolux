"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["qrcodeReaderStream"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/EventEmitter */ "./javascript/utilities/EventEmitter.js");
/* harmony import */ var _utilities_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/getScrollbarWidth */ "./javascript/utilities/getScrollbarWidth.js");
//
//
//
//
//
//
//
//
//
//
//
//
var QrCamera = function QrCamera() {
  return Promise.all(/*! import() | qrcodeCamera */[__webpack_require__.e("vendors"), __webpack_require__.e("qrcodeCamera")]).then(__webpack_require__.bind(__webpack_require__, /*! ./QrScanTemplate */ "./javascript/components/qrCodeReader/QrScanTemplate.vue"));
}; // import QrCamera from "./QrScanTemplate";




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    QrCamera: QrCamera
  },
  data: function data() {
    return {
      slideShow: false
    };
  },
  created: function created() {
    var self = this;
    _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].on("showQrScan", function (data) {
      if (data) {
        self.onOpenSlide();
      }
    });
  },
  methods: {
    onOpenSlide: function onOpenSlide() {
      var self = this;
      self.slideShow = true;
      document.body.classList.add("c_slidebar-opened");
      document.body.style.paddingRight = "".concat((0,_utilities_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidth)(), "px");
    },
    onCloseSlide: function onCloseSlide() {
      var self = this;
      self.slideShow = false;
      _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("qrScan", self.slideShow);
      document.body.classList.remove("c_slidebar-opened");
      document.body.style.removeProperty("padding-right");
    }
  }
});

/***/ }),

/***/ "./javascript/components/qrCodeReader/Template.vue":
/*!*********************************************************!*\
  !*** ./javascript/components/qrCodeReader/Template.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=df56873a& */ "./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a&");
/* harmony import */ var _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=script&lang=js& */ "./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/qrCodeReader/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a&":
/*!****************************************************************************************!*\
  !*** ./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_df56873a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Template.vue?vue&type=template&id=df56873a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/Template.vue?vue&type=template&id=df56873a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "c_slidebar-wrap" }, [
    _c(
      "div",
      {
        staticClass: "c_slidebar",
        class: { "c_slidebar--show": _vm.slideShow },
      },
      [
        _c(
          "button",
          {
            staticClass: "c_slidebar__close",
            attrs: { type: "button", "aria-label": "Close Button" },
            on: { click: _vm.onCloseSlide },
          },
          [_c("span", [_vm._v("x")])]
        ),
        _vm._v(" "),
        _vm.slideShow ? _c("qr-camera") : _vm._e(),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", {
      staticClass: "c_slidebar-backdrop",
      on: { click: _vm.onCloseSlide },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=qrcodeReaderStream.bundle-legacy.2a924d732f514a13a17c.js.map