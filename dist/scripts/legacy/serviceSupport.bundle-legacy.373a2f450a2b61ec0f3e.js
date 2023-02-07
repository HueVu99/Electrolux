"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["serviceSupport"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//const Glide = () => import(/* webpackChunkName: "Glide" */ "@glidejs/glide");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    datasupport: {
      type: Array,
      defaults: []
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    DisableControls: function DisableControls(Glide, Components, Events) {
      var PREV_CONTROL_SELECTOR = "[data-glide-dir='<']";
      var NEXT_CONTROL_SELECTOR = "[data-glide-dir='>']";
      var component = {
        buildAfter: function buildAfter() {
          this.prevBtn = Components.Html.root.querySelector(PREV_CONTROL_SELECTOR);
          this.nextBtn = Components.Html.root.querySelector(NEXT_CONTROL_SELECTOR);
        },
        handleDisable: function handleDisable() {
          var perView = Glide.settings.perView;
          var slidesCount = Components.Html.slides.length;
          this.prevBtn.disabled = Glide.index <= 0;
          this.nextBtn.disabled = Glide.index >= slidesCount - perView;
        }
      };
      Events.on("build.after", function () {
        component.buildAfter();
        component.handleDisable();
      });
      Events.on("run.after", function () {
        component.handleDisable();
      });
      return component;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    if (this.datasupport.length > 1) {
      new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](".glide", {
        type: "slider",
        startAt: 0,
        perView: 1,
        rewind: false
      }).mount({
        DisableControls: this.DisableControls
      });
    }
  },
  updated: function updated() {}
});

/***/ }),

/***/ "./javascript/components/serviceSupport/ServiceSupport.vue":
/*!*****************************************************************!*\
  !*** ./javascript/components/serviceSupport/ServiceSupport.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceSupport.vue?vue&type=template&id=a9533c4c& */ "./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c&");
/* harmony import */ var _ServiceSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceSupport.vue?vue&type=script&lang=js& */ "./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServiceSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/serviceSupport/ServiceSupport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceSupport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSupport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c&":
/*!************************************************************************************************!*\
  !*** ./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSupport_vue_vue_type_template_id_a9533c4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceSupport.vue?vue&type=template&id=a9533c4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/serviceSupport/ServiceSupport.vue?vue&type=template&id=a9533c4c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "service-support" }, [
    _c("div", { staticClass: "glide" }, [
      _c(
        "div",
        { staticClass: "glide__track", attrs: { "data-glide-el": "track" } },
        [
          _c(
            "div",
            { staticClass: "glide__slides" },
            _vm._l(_vm.datasupport, function (support) {
              return _c(
                "div",
                {
                  key: support.id,
                  staticClass: "service-support__wrapper glide__slide",
                  class: { relative: support.isFullImages },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "service-support__header",
                      class: { img__full: support.isFullImages },
                    },
                    [
                      _c(
                        "a",
                        { attrs: { href: support.url ? support.url : false } },
                        [
                          _c("picture", [
                            _c("source", {
                              attrs: {
                                media: "(min-width: 992px)",
                                srcset: support.sourceLarge,
                                type: "image/webp",
                              },
                            }),
                            _vm._v(" "),
                            _c("source", {
                              attrs: {
                                media: "(min-width: 768px)",
                                srcset: support.sourceMedium,
                                type: "image/webp",
                              },
                            }),
                            _vm._v(" "),
                            _c("source", {
                              attrs: {
                                media: "(min-width: 320px)",
                                srcset: support.sourceSmall,
                                type: "image/webp",
                              },
                            }),
                            _vm._v(" "),
                            _c("img", {
                              attrs: {
                                src: support.srcDefault,
                                alt: support.title,
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          support.title
                            ? _c(
                                "h2",
                                {
                                  staticClass: "service-support__header-title",
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(support.title) +
                                      "\n              "
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "service-support__body",
                      class: { border__none: support.isFullImages },
                    },
                    [
                      support.description
                        ? _c(
                            "p",
                            { staticClass: "service-support__body-title" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(support.description) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      support.items
                        ? _c(
                            "div",
                            { staticClass: "service-support__body-group" },
                            _vm._l(support.items, function (icon, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "service-support__icon",
                                  style: {
                                    width:
                                      100 /
                                        (support.columnLayout
                                          ? +support.columnLayout
                                          : 2) +
                                      "%",
                                  },
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: icon.url ? icon.url : false,
                                      },
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: icon.imageSrc,
                                          alt: icon.title,
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("p", [_vm._v(_vm._s(icon.title))]),
                                    ]
                                  ),
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      support.moreSupport
                        ? _c(
                            "div",
                            { staticClass: "service-support__more-support" },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: support.moreSupport.url
                                      ? support.moreSupport.url
                                      : false,
                                  },
                                },
                                [
                                  _c("p", [
                                    _vm._v(_vm._s(support.moreSupport.title)),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", {
                                    staticClass:
                                      "service-support__more-support-icon",
                                  }),
                                ]
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                ]
              )
            }),
            0
          ),
        ]
      ),
      _vm._v(" "),
      _vm.datasupport && _vm.datasupport.length > 1
        ? _c(
            "div",
            {
              staticClass: "glide__arrows",
              attrs: { "data-glide-el": "controls" },
            },
            [
              _c("button", {
                staticClass: "glide__arrow glide__arrow--left",
                attrs: { "data-glide-dir": "<" },
              }),
              _vm._v(" "),
              _c("button", {
                staticClass: "glide__arrow glide__arrow--right",
                attrs: { "data-glide-dir": ">" },
              }),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.datasupport && _vm.datasupport.length > 1
        ? _c(
            "div",
            {
              staticClass: "glide__bullets",
              attrs: { "data-glide-el": "controls[nav]" },
            },
            _vm._l(_vm.datasupport, function (dot, index) {
              return _c("button", {
                key: dot.id,
                staticClass: "glide__bullet",
                attrs: { index: index, "data-glide-dir": "=" + index },
              })
            }),
            0
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=serviceSupport.bundle-legacy.373a2f450a2b61ec0f3e.js.map