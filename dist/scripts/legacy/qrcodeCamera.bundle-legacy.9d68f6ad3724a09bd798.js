"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["qrcodeCamera"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-qrcode-reader */ "./node_modules/vue-qrcode-reader/dist/VueQrcodeReader.common.js");
/* harmony import */ var vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    QrcodeStream: vue_qrcode_reader__WEBPACK_IMPORTED_MODULE_0__.QrcodeStream
  },
  props: {
    cameraProp: {
      type: Array,
      defaults: []
    }
  },
  data: function data() {
    return {
      camera: "auto",
      result: null,
      showScanConfirmation: false,
      error: "",
      isValid: undefined,
      loading: false
    };
  },
  methods: {
    switchCamera: function switchCamera() {
      switch (this.camera) {
        case "front":
          this.camera = "rear";
          break;

        case "auto":
          this.camera = "front";
          break;

        case "rear":
          this.camera = "front";
          break;
      }
    },
    onInit: function onInit(promise) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return promise;

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

                if (_context.t0.name === "NotAllowedError") {
                  _this.error = "ERROR: you need to grant camera access permission";
                } else if (_context.t0.name === "NotFoundError") {
                  _this.error = "ERROR: no camera on this device";
                } else if (_context.t0.name === "NotSupportedError") {
                  _this.error = "ERROR: secure context required (HTTPS, localhost)";
                } else if (_context.t0.name === "NotReadableError") {
                  _this.error = "ERROR: is the camera already in use?";
                } else if (_context.t0.name === "OverconstrainedError") {
                  _this.error = "ERROR: installed cameras are not suitable";
                } else if (_context.t0.name === "StreamApiNotSupportedError") {
                  _this.error = "ERROR: Stream API is not supported in this browser";
                } else if (_context.t0.name === "InsecureContextError") {
                  _this.error = "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
                } else {
                  _this.error = "ERROR: Camera error (".concat(_context.t0.name, ")");
                }

              case 9:
                _context.prev = 9;
                _this.showScanConfirmation = _this.camera === "off";
                _this.loading = false;
                return _context.finish(9);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6, 9, 13]]);
      }))();
    },
    onDecode: function onDecode(content) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.result = content;

                _this2.pause();

                _context2.next = 4;
                return _this2.timeout(3000);

              case 4:
                _this2.isValid = content.startsWith("http");

                _this2.unpause();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    unpause: function unpause() {
      this.camera = "auto";
    },
    pause: function pause() {
      this.camera = "off";
    },
    timeout: function timeout(ms) {
      return new Promise(function (resolve) {
        window.setTimeout(resolve, ms);
      });
    }
  }
});

/***/ }),

/***/ "./javascript/components/qrCodeReader/QrScanTemplate.vue":
/*!***************************************************************!*\
  !*** ./javascript/components/qrCodeReader/QrScanTemplate.vue ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QrScanTemplate.vue?vue&type=template&id=434e3301& */ "./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301&");
/* harmony import */ var _QrScanTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QrScanTemplate.vue?vue&type=script&lang=js& */ "./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QrScanTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__.render,
  _QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/qrCodeReader/QrScanTemplate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QrScanTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301&":
/*!**********************************************************************************************!*\
  !*** ./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanTemplate_vue_vue_type_template_id_434e3301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QrScanTemplate.vue?vue&type=template&id=434e3301& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/qrCodeReader/QrScanTemplate.vue?vue&type=template&id=434e3301& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "c_slidebar__content" }, [
    _c(
      "div",
      { staticClass: "c_qr-reader" },
      [
        _c(
          "qrcode-stream",
          {
            attrs: { camera: _vm.camera },
            on: { decode: _vm.onDecode, init: _vm.onInit },
          },
          [
            _vm.loading
              ? _c("div", { staticClass: "loading-indicator" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "c_icon c_icon--spinner c_search__icon",
                      attrs: { viewBox: "0 0 37 37" },
                    },
                    [_c("use", { attrs: { "xlink:href": "#spinner" } })]
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showScanConfirmation,
                    expression: "showScanConfirmation",
                  },
                ],
                staticClass: "c_qr-reader__scan-confirmation",
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "c_icon-svg",
                    attrs: {
                      width: "74",
                      height: "74",
                      viewBox: "0 0 74 74",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("circle", {
                      attrs: {
                        cx: "37",
                        cy: "37",
                        r: "36",
                        stroke: "",
                        "stroke-width": "2",
                      },
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M19.6562 37.4437L23.125 34.3308L32.0446 42.3356L50.875 25.4365L54.3438 28.5495L32.0446 48.5615L19.6562 37.4437Z",
                        fill: "",
                      },
                    }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            !_vm.loading && _vm.error.length == 0
              ? _c(
                  "button",
                  {
                    staticClass: "c_qr-reader__switch-camera",
                    attrs: { type: "button" },
                    on: { click: _vm.switchCamera },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "c_icon-svg",
                        attrs: {
                          viewBox: "0 0 41 41",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "36",
                          height: "36",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M-1.74846e-07 12L4 8L8 12L5 12L5 32L32 32L32 34L4 34C3.44771 34 3 33.5523 3 33L3 12L-1.74846e-07 12ZM9 10L9 8L37 8C37.5523 8 38 8.44772 38 9L38 30L41 30L37 34L33 30L36 30L36 10L9 10Z",
                            fill: "",
                          },
                        }),
                        _vm._v(" "),
                        _c("circle", {
                          attrs: {
                            cx: "20",
                            cy: "22",
                            r: "5.25",
                            stroke: "",
                            "stroke-width": "1.5",
                          },
                        }),
                        _vm._v(" "),
                        _c("circle", {
                          attrs: { cx: "32", cy: "14", r: "2", fill: "" },
                        }),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
          ]
        ),
      ],
      1
    ),
    _vm._v(" "),
    !!_vm.result
      ? _c("div", { staticClass: "c_howdo__cat-summary" }, [
          !!_vm.isValid
            ? _c(
                "a",
                {
                  staticClass: "c_qr-reader__link",
                  attrs: { href: _vm.result },
                },
                [_vm._v(_vm._s(_vm.result))]
              )
            : _c("span", { staticClass: "c_qr-reader__link" }, [
                _vm._v(_vm._s(_vm.result)),
              ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    !!_vm.error
      ? _c("div", { staticClass: "c_howdo__help-text c_qr-reader__error" }, [
          _vm._v(_vm._s(_vm.error)),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=qrcodeCamera.bundle-legacy.9d68f6ad3724a09bd798.js.map