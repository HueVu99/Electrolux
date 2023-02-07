"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["module"],{

/***/ "./javascript/components/dynamicForm/FormService.js":
/*!**********************************************************!*\
  !*** ./javascript/components/dynamicForm/FormService.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/HttpClient */ "./javascript/utilities/HttpClient.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./javascript/constants/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FormService = /*#__PURE__*/function () {
  function FormService() {
    var _this = this;

    _classCallCheck(this, FormService);

    _defineProperty(this, "getFormData", function (params) {
      return _this.httpClient.get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT.DYNAMICS_FORM, "/").concat(params));
    });

    _defineProperty(this, "sendData", function (url, data) {
      return _this.httpClient.post(url.replace(_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_PREFIX, ""), data);
    });

    this.httpClient = _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance();
  }

  _createClass(FormService, [{
    key: "getKey",
    value: function getKey(params) {
      return this.httpClient.post("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT.RECAPTCHA, "/"), params, true);
    }
  }]);

  return FormService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FormService());

/***/ }),

/***/ "./javascript/components/howDoIFind/howDoService.js":
/*!**********************************************************!*\
  !*** ./javascript/components/howDoIFind/howDoService.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/HttpClient */ "./javascript/utilities/HttpClient.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/index */ "./javascript/constants/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var howDoService = /*#__PURE__*/_createClass(function howDoService() {
  var _this = this;

  _classCallCheck(this, howDoService);

  _defineProperty(this, "getHowdo", function (url) {
    return _this.httpClient.get("".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT.HOWDO, "/").concat(url, "/"), true);
  });

  this.httpClient = _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("");
});

/* harmony default export */ __webpack_exports__["default"] = (howDoService);

/***/ }),

/***/ "./javascript/components/howDoIFind/index.js":
/*!***************************************************!*\
  !*** ./javascript/components/howDoIFind/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ howDoIFind; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/EventEmitter */ "./javascript/utilities/EventEmitter.js");
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template */ "./javascript/components/howDoIFind/Template.vue");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var howDoIFind = /*#__PURE__*/_createClass(function howDoIFind(element) {
  _classCallCheck(this, howDoIFind);

  this.selector = element;
  var vueEl = document.createElement('div');
  this.selector.appendChild(vueEl); // let elementID = element.getAttribute('id');
  // this.searchService = new searchService();
  // const self= this;
  // this.popupData = {};
  // EventEmitter.on('showPopup', (data) => {
  //   self.popupData = data;
  // });

  new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: vueEl,
    render: function render(renderComponent) {
      return renderComponent(_Template__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: {// popupData: {
          //   slideShow: self.slideShow,
          //   slideData: self.popupData
          // }
        }
      });
    }
  });
});



/***/ }),

/***/ "./javascript/components/registerProduct/Index.js":
/*!********************************************************!*\
  !*** ./javascript/components/registerProduct/Index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerProduct; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-screen */ "./node_modules/vue-screen/dist/vue-screen.esm.js");
/* harmony import */ var _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities//HttpCancelError */ "./javascript/utilities/HttpCancelError.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/EventEmitter */ "./javascript/utilities/EventEmitter.js");
/* harmony import */ var _utilities_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/route */ "./javascript/utilities/route.js");
/* harmony import */ var _searchService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchService */ "./javascript/components/registerProduct/searchService.js");
/* harmony import */ var _dynamicForm_FormService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamicForm/FormService */ "./javascript/components/dynamicForm/FormService.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var QrcodeReaderStream = function QrcodeReaderStream() {
  return __webpack_require__.e(/*! import() | qrcodeReaderStream */ "qrcodeReaderStream").then(__webpack_require__.bind(__webpack_require__, /*! ../qrCodeReader/Template */ "./javascript/components/qrCodeReader/Template.vue"));
};

var registerForm = function registerForm() {
  return __webpack_require__.e(/*! import() | registerForm */ "registerForm").then(__webpack_require__.bind(__webpack_require__, /*! ../dynamicForm/DynamicFormVue */ "./javascript/components/dynamicForm/DynamicFormVue.vue"));
};

var serviceSupport = function serviceSupport() {
  return Promise.all(/*! import() | serviceSupport */[__webpack_require__.e("vendors"), __webpack_require__.e("serviceSupport")]).then(__webpack_require__.bind(__webpack_require__, /*! ../serviceSupport/ServiceSupport */ "./javascript/components/serviceSupport/ServiceSupport.vue"));
};

vue__WEBPACK_IMPORTED_MODULE_7__["default"].use(vue_screen__WEBPACK_IMPORTED_MODULE_0__["default"], {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
});

var registerProduct = /*#__PURE__*/_createClass(function registerProduct(element) {
  _classCallCheck(this, registerProduct);

  this.selector = element;
  var elementID = element.getAttribute("id");
  var pageid = element.getAttribute("pageId");
  var productModel = _utilities_route__WEBPACK_IMPORTED_MODULE_4__.route.getParam("modelno"); // if (productModel && productModel.length > 0) {
  //   this.loadForm = true;
  // }
  // let requiredsearch =
  //   element.getAttribute("requiredvalidationfromsearch") && element.getAttribute("requiredvalidationfromsearch") != "false"
  //     ? true
  //     : false;

  var requiredurl = element.getAttribute("requiredvalidationfromurl") && element.getAttribute("requiredvalidationfromurl") != "false" ? true : false;
  var requiredsearch = requiredurl;
  new vue__WEBPACK_IMPORTED_MODULE_7__["default"]({
    el: "#" + elementID,
    components: {
      "register-form": registerForm,
      "service-support": serviceSupport,
      "qrcode-reader-stream": QrcodeReaderStream
    },
    props: {
      customClass: {
        type: String,
        defaults: ""
      },
      valueHtml: {
        type: String,
        defaults: ""
      }
    },
    data: function data() {
      return {
        loading: true,
        scanProduct: true,
        firstSearch: false,
        stepIndex: 0,
        selectedData: {},
        searchQuery: "",
        loadingSuggestion: false,
        isShow: false,
        isShowInfo: true,
        searchDatas: [],
        slideShow: false,
        slideData: {},
        listRow: [],
        formAPI: "",
        pageid: pageid,
        requiredsearch: requiredsearch,
        requiredurl: requiredurl,
        registrationProduct: {},
        registrationRes: {},
        loadForm: false,
        numState: 1,
        isShowQrScan: false
      };
    },
    created: function created() {
      var _this = this;

      var self = this;
      this.listenToHashChange();
      this.listenToReload(); //step__contents--show

      var $stepContents = document.getElementById("step__contents");
      var $stepContent1 = document.getElementById("step__content-1");

      if ($stepContents) {
        $stepContents.classList.remove("step__contents--show");
      }

      if ($stepContent1) {
        $stepContent1.classList.remove("step__content--show");
      }

      this.getService = new _searchService__WEBPACK_IMPORTED_MODULE_5__["default"]();
      _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("activeStep", function (index) {
        _this.setQueryUrl(index);

        self.stepIndex = index;
      });
      this.checkAfterReload();
      _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("registrations", function (data) {
        self.registrationProduct = data.registrationProduct;
        self.registrationRes = data.registrationRes;
        self.loadForm = data.loadForm;
      });
      _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("qrScan", function (data) {
        self.isShowQrScan = data;
      });
    },
    methods: {
      openQrScan: function openQrScan() {
        this.isShowQrScan = true; // window.setTimeout(function () {
        // }, 1000);

        _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("showQrScan", true);
      },
      removeProduct: function removeProduct() {
        this.clearSearch();
      },
      selectProduct: function selectProduct(data) {
        // this.loadForm = true;
        // this.searchQuery = data.ProductModel;
        this.selectedData = data;
        var dataJSON = JSON.parse(this.getRegisterLocalData());
        var arrSelected = (dataJSON ? dataJSON : []).slice();
        arrSelected[window.history.state.index] = this.selectedData;
        this.setRegisterLocalData(JSON.stringify(arrSelected));
        this.isShowInfo = true;
        this.closeSuggestion();
      },
      highlight: function highlight(textContent) {
        if (!this.searchQuery) {
          return textContent;
        }

        return textContent.replace(new RegExp(this.searchQuery, "gi"), function (match) {
          return '<span class="highlight-text">' + match + "</span>";
        });
      },
      closeSuggestion: function closeSuggestion() {
        this.isShow = false;
      },
      clearSearch: function clearSearch() {
        this.searchQuery = "";
        this.selectedData = {};
        this.closeSuggestion();
      },
      getSuggestion: function getSuggestion() {
        var _this2 = this;

        var that = this;

        if (this.searchQuery.length < 3) {
          return false;
        }

        this.isShow = false;
        this.loadingSuggestion = true;
        that.searchDatas = [];
        var obj = this.getService.getData(this.searchQuery).then(function (data) {
          if (data.length > 0) {
            that.searchDatas = data;
            that.searchDatas.forEach(function (searchData) {
              searchData.SerialNumber = "";
            });
          } else {
            _this2.selectedData = {};
          }

          _this2.loadingSuggestion = false;
          _this2.isShow = true;
        })["catch"](function (err) {
          _this2.loadingSuggestion = false;

          if (err instanceof _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            return;
          }
        });
      },
      inputFocus: function inputFocus(value) {
        if (value.length > 2) {
          this.isShow = true;
        }
      },
      // inputEnter() {
      // if (this.isShow) {
      //   if (this.searchDatas.length > 0) {
      //     this.selectProduct(this.searchDatas[0]);
      //   }
      // } else {
      //   if (this.searchQuery.length > 2) {
      //     this.getSuggestion();
      //   }
      // }
      // },
      onClose: function onClose() {
        this.isShow = false;
      },
      "goto": function goto(refName) {
        var $element = document.getElementById(refName);
        setTimeout(function () {
          if (refName && refName.length > 0) {
            $element.scrollIntoView();
          } else {
            document.documentElement.scrollIntoView();
          }
        }, 100);
      },
      onOpenSlide: function onOpenSlide(apisrc) {
        _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("showPopup", apisrc);
      },
      proceedModalCode: function proceedModalCode(pramProductModel, pramSerialNumber, pramProductCode) {
        this.selectedData = {
          ImageSrc: "",
          ImageSrcSet: "",
          ProductModel: pramProductModel,
          ProductCode: pramProductCode,
          SerialNumber: pramSerialNumber
        };
        this.registerProduct();
      },
      backStep: function backStep() {
        if (this.stepIndex >= 1) {
          _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("activeStep", this.stepIndex - 1);
          this["goto"]('');
        }
      },
      showInfo: function showInfo() {
        this.isShowInfo = !this.isShowInfo;
      },
      registerProduct: function registerProduct() {
        var _this3 = this;

        var self = this;
        self["goto"](''); // EventEmitter.emit("activeStep", 2);

        if (self.loadForm) {
          this.setQueryUrl(2, self.selectedData.ProductModel);
          self.stepIndex = 2;
          return;
        } else {
          self.loadForm = true;

          if (!!self.listRow.length && !!this.registrationProduct) {
            self.listRow.forEach(function (row) {
              row.listElement.forEach(function (element) {
                if (!!element.autofill && element.autofill == true) {
                  element.defaultValue = self.registrationProduct[element.name];
                }

                if (element.name == "ModelNumber" || element.name == "model") {
                  element.defaultValue = self.selectedData.ProductModel;
                  element.type = "hidden";
                }

                if (element.name == "ProductCode") {
                  element.defaultValue = self.selectedData.ProductCode;
                  element.type = "hidden";
                }

                if (element.name == "SerialNumber") {
                  // element.defaultValue = self.selectedData.SerialNumber;
                  if (self.selectedData.SerialNumber.length > 0) {
                    element.defaultValue = self.selectedData.SerialNumber;
                    element.type = "hidden";
                  } else {
                    element.type = "text";
                    element.defaultValue = "";
                  }
                }
              });
            });
            this.setQueryUrl(2, self.selectedData.ProductModel);
            self.stepIndex = 2;
          } else {
            self.loading = true;
            _dynamicForm_FormService__WEBPACK_IMPORTED_MODULE_6__["default"].getFormData("?id=" + this.pageid).then(function (res) {
              res.listRow.forEach(function (row) {
                row.listElement.forEach(function (element) {
                  if (element.name == "ModelNumber" || element.name == "model") {
                    element.defaultValue = self.selectedData.ProductModel;
                    element.type = "hidden";
                  }

                  if (element.name == "ProductCode") {
                    element.defaultValue = self.selectedData.ProductCode;
                    element.type = "hidden";
                  }

                  if (element.name == "SerialNumber") {
                    // element.defaultValue = self.selectedData.SerialNumber;
                    if (self.selectedData.SerialNumber.length > 0) {
                      element.defaultValue = self.selectedData.SerialNumber;
                      element.type = "hidden";
                    } else {
                      element.defaultValue = "";
                    }
                  }
                });
              });
              self.listRow = res.listRow;
              self.formAPI = res.formAPI;
              self.loading = false;

              _this3.setQueryUrl(2, self.selectedData.ProductModel);

              self.stepIndex = 2;
            })["catch"](function (err) {
              self.loading = false;

              _this3.setQueryUrl(1);

              self.stepIndex = 1;

              if (err instanceof _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                return;
              }
            });
          }
        } // }

      },
      reRegistration: function reRegistration() {
        this.resetParams();
        this.stepIndex = 1;
        this.selectedData = {};
        this.searchQuery = "";
        this.isShowInfo = false;
        this["goto"]('');
      },
      resetParams: function resetParams() {
        var url = new URL(window.location);
        url.search = "";
        url.searchParams.set("step", 1);
        var state = window.history.state;
        var index = state.index;

        var stateData = _objectSpread(_objectSpread({}, state), {}, {
          index: index + 1,
          num: this.numState += 1
        });

        window.history.pushState(stateData, "", url);
      },
      setQueryUrl: function setQueryUrl(number) {
        var productModel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var url = new URL(window.location);
        var state = window.history.state;

        if (productModel) {
          url.searchParams.set("modelno", productModel);
        }

        url.searchParams.set("step", number);

        if (state) {
          var registrationProduct = state.registrationProduct,
              selectedData = state.selectedData,
              index = state.index;
          var regisData = registrationProduct.slice();
          var selected = selectedData.slice();
          regisData[index] = this.registrationProduct;
          selected[index] = this.selectedData;

          var _stateData = _objectSpread(_objectSpread({}, state), {}, {
            registrationProduct: regisData,
            selectedData: selected,
            num: this.numState += 1
          });

          window.history.pushState(_stateData, "", url);
          return;
        }

        var stateData = {
          registrationProduct: [],
          selectedData: [],
          index: 0,
          num: this.numState
        };
        window.history.pushState(stateData, "", url);
      },
      listenToHashChange: function listenToHashChange() {
        var _this4 = this;

        window.addEventListener("popstate", function (e) {
          var url = new URL(window.location);
          var step = url.searchParams.get("step");

          if (step) {
            var _e$state = e.state,
                selectedData = _e$state.selectedData,
                index = _e$state.index,
                registrationProduct = _e$state.registrationProduct,
                num = _e$state.num;
            _this4.selectedData = selectedData[index] ? selectedData[index] : num <= _this4.numState ? JSON.parse(_this4.getRegisterLocalData())[index] ? JSON.parse(_this4.getRegisterLocalData())[index] : {} : _this4.selectedData;
            _this4.registrationProduct = registrationProduct[index] ? registrationProduct[index] : _this4.registrationProduct;
            _this4.stepIndex = step;
            return;
          }
        });
      },
      listenToReload: function listenToReload() {
        var _this5 = this;

        window.addEventListener("beforeunload", function () {
          _this5.removePreviousData();
        });
      },
      checkAfterReload: function checkAfterReload() {
        var params = new URLSearchParams(window.location.search);
        var step = params.get("step");
        var model = params.get("modelno");

        if (!step || step === "1" || (step === "2" || step === "3") && !model || step !== "1" && step !== "2" && step !== "3" && !model) {
          this.setActiveStep(1);
        }
      },
      setActiveStep: function setActiveStep(number) {
        _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("activeStep", number);
      },
      setRegisterLocalData: function setRegisterLocalData(value) {
        localStorage.setItem("dataPrevious", value);
      },
      getRegisterLocalData: function getRegisterLocalData() {
        return localStorage.getItem("dataPrevious");
      },
      removePreviousData: function removePreviousData() {
        localStorage.removeItem("dataPrevious");
      }
    },
    mounted: function mounted() {
      var _this6 = this;

      var self = this;
      var getProductModel = _utilities_route__WEBPACK_IMPORTED_MODULE_4__.route.getParam("modelno");
      var getSerialNumber = _utilities_route__WEBPACK_IMPORTED_MODULE_4__.route.getParam("machineno") || "";
      var getProductCode = _utilities_route__WEBPACK_IMPORTED_MODULE_4__.route.getParam("pnc") || "";

      if (getProductModel) {
        self.firstSearch = true;
        var obj = this.getService.getData(getProductModel).then(function (data) {
          if (data.length > 0) {
            self.scanProduct = true;
            self.selectedData = data[0];

            if (getSerialNumber.length > 0) {
              self.selectedData.SerialNumber = getSerialNumber;
            } else {
              self.selectedData.SerialNumber = self.selectedData.SerialNumber ? self.selectedData.SerialNumber : "";
            }

            if (getProductCode.length > 0) {
              self.selectedData.ProductCode = getProductCode;
            } else {
              self.selectedData.ProductCode = self.selectedData.ProductCode ? self.selectedData.ProductCode : "";
            }

            self.isShowInfo = true;
            self.registerProduct();
          } else {
            if (requiredurl) {
              self.stepIndex = 1; // self.goto("step__content-1");

              self.searchQuery = getProductModel;
              self.isShow = true;
              self.scanProduct = false;

              _this6.$nextTick(function () {
                return _this6.$refs.refInputModelCode.focus();
              });
            } else {
              self.isShowInfo = true;
              self.proceedModalCode(getProductModel, getSerialNumber, getProductCode);
            }
          }

          self.loading = false;
        })["catch"](function (err) {
          self.loading = false;
          _this6.stepIndex = 1;

          if (err instanceof _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            return;
          }
        });
      } else {
        self.loading = false;
        this.stepIndex = 1;
      }
    },
    watch: {
      searchQuery: {
        immediate: true,
        handler: function handler(value) {
          //check and dont reget suggestion when scan false
          if (this.firstSearch) {
            this.firstSearch = false;
            return false;
          }

          this.scanProduct = true;

          if (value.length > 2) {
            this.getSuggestion();
          } else {
            this.isShow = false;
          }
        },
        deep: true
      }
    },
    computed: {},
    // do not forget this section
    directives: {
      ClickOutside: (vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default())
    }
  });
});



/***/ }),

/***/ "./javascript/components/registerProduct/searchService.js":
/*!****************************************************************!*\
  !*** ./javascript/components/registerProduct/searchService.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/HttpClient */ "./javascript/utilities/HttpClient.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/index */ "./javascript/constants/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var searchService = /*#__PURE__*/_createClass(function searchService() {
  var _this = this;

  _classCallCheck(this, searchService);

  _defineProperty(this, "getData", function (code) {
    return _this.httpClient.get("".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT.SEARCH, "/?Query=").concat(code), true);
  });

  _defineProperty(this, "getHowdo", function (url) {
    return _this.httpClient.get("".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__.ENDPOINT.HOWDO, "/").concat(url, "/"), true);
  });

  this.httpClient = _utilities_HttpClient__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("");
});

/* harmony default export */ __webpack_exports__["default"] = (searchService);

/***/ }),

/***/ "./javascript/constants/index.js":
/*!***************************************!*\
  !*** ./javascript/constants/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_PREFIX": function() { return /* binding */ BASE_PREFIX; },
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "ENDPOINT": function() { return /* binding */ ENDPOINT; }
/* harmony export */ });
var BASE_PREFIX = "electrolux/product-registration/";
var BASE_URL = "".concat(window.location.origin + "/" + BASE_PREFIX);
var ENDPOINT = {
  SEARCH: "search/suggestion",
  REGISTER: "register",
  HOWDO: "",
  RECAPTCHA: "recaptcha/validate",
  DYNAMICS_FORM: "/form/getform"
};

/***/ }),

/***/ "./javascript/utilities/EventEmitter.js":
/*!**********************************************!*\
  !*** ./javascript/utilities/EventEmitter.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var instance;

var EventEmitter = /*#__PURE__*/_createClass(function EventEmitter() {
  var _this = this;

  _classCallCheck(this, EventEmitter);

  _defineProperty(this, "callbacks", {});

  _defineProperty(this, "on", function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments.length > 1 ? arguments[1] : undefined;

    if (!_this.callbacks[event]) {
      _this.callbacks[event] = [];
    }

    _this.callbacks[event].push(cb);
  });

  _defineProperty(this, "emit", function (event, data) {
    var callbacks = _this.callbacks[event];

    if (callbacks) {
      callbacks.forEach(function (cb) {
        cb(data);
      });
    }
  });

  if (instance) {
    return instance;
  }

  instance = this;
});

/* harmony default export */ __webpack_exports__["default"] = (new EventEmitter());

/***/ }),

/***/ "./javascript/utilities/HttpCancelError.js":
/*!*************************************************!*\
  !*** ./javascript/utilities/HttpCancelError.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HttpCancelError; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HttpCancelError = /*#__PURE__*/function (_Error) {
  _inherits(HttpCancelError, _Error);

  var _super = _createSuper(HttpCancelError);

  function HttpCancelError() {
    var _this;

    _classCallCheck(this, HttpCancelError);

    _this = _super.call(this);
    _this.message = 'Cancel Error';
    return _this;
  }

  return _createClass(HttpCancelError);
}( /*#__PURE__*/_wrapNativeSuper(Error));



/***/ }),

/***/ "./javascript/utilities/HttpClient.js":
/*!********************************************!*\
  !*** ./javascript/utilities/HttpClient.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HttpClient; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./javascript/constants/index.js");
/* harmony import */ var _HttpCancelError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpCancelError */ "./javascript/utilities/HttpCancelError.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CancelToken = (axios__WEBPACK_IMPORTED_MODULE_0___default().CancelToken);
var instance;
var callerSecret = {};

var HttpClient = /*#__PURE__*/function () {
  function HttpClient() {
    var _this = this;

    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var secret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, HttpClient);

    _defineProperty(this, "handleResponse", function (_ref) {
      var data = _ref.data;
      return Promise.resolve(data);
    });

    _defineProperty(this, "handleError", function (err) {
      if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(err)) {
        return Promise.reject(new _HttpCancelError__WEBPACK_IMPORTED_MODULE_2__["default"]());
      }

      return Promise.reject(err && err.response && err.response.data);
    });

    _defineProperty(this, "handleCancelRequest", function (doCancel) {
      return doCancel && _this.cancelRequest && _this.cancelRequest();
    });

    _defineProperty(this, "setCancelRequest", function () {
      return {
        cancelToken: new CancelToken(function (canceler) {
          _this.cancelRequest = canceler;
        })
      };
    });

    if (callerSecret !== secret) {
      throw "This is a singelton class. Use HttpClient.getInstance(baseUrl).";
    }

    this.axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: baseUrl || _constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL
    });
    this.axios.interceptors.request.use(function (request) {
      var token = document.getElementsByName("__RequestVerificationToken")[0].value;
      var htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");
      request.headers.__requestverificationtoken = token;
      request.headers.language = htmlLang;
      return request;
    });
  }

  _createClass(HttpClient, [{
    key: "get",
    value: function get(url) {
      var cancelRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.handleCancelRequest(cancelRequest);
      return this.axios.get(url, _objectSpread({}, this.setCancelRequest())).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "post",
    value: function post(url, body) {
      var _this2 = this;

      var cancelRequest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.handleCancelRequest(cancelRequest);
      return this.axios.post(url, body, _objectSpread({}, this.setCancelRequest())).then(function (response) {
        return _this2.handleResponse(response);
      })["catch"](this.handleError);
    }
  }, {
    key: "put",
    value: function put(url, body) {
      var cancelRequest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.handleCancelRequest(cancelRequest);
      return this.axios.put(url, body, _objectSpread({}, this.setCancelRequest())).then(this.handleResponse)["catch"](this.handleError);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var cancelRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.handleCancelRequest(cancelRequest);
      return this.axios["delete"](url, _objectSpread({}, this.setCancelRequest())).then(this.handleResponse)["catch"](this.handleError);
    }
  }]);

  return HttpClient;
}();

_defineProperty(HttpClient, "getInstance", function (baseUrl) {
  if (instance) return instance;
  return instance = new HttpClient(baseUrl, callerSecret);
});



/***/ }),

/***/ "./javascript/utilities/getScrollbarWidth.js":
/*!***************************************************!*\
  !*** ./javascript/utilities/getScrollbarWidth.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScrollbarWidth": function() { return /* binding */ getScrollbarWidth; }
/* harmony export */ });
function getScrollbarWidth() {
  // Creating invisible container
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear

  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer); // Creating inner element and placing it in the container

  var inner = document.createElement('div');
  outer.appendChild(inner); // Calculating difference between container's full width and the child width

  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth; // Removing temporary elements from the DOM

  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

/***/ }),

/***/ "./javascript/utilities/route.js":
/*!***************************************!*\
  !*** ./javascript/utilities/route.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": function() { return /* binding */ route; }
/* harmony export */ });
var getParam = function getParam(param) {
  var queryString = window.location.search;
  var params = new URLSearchParams(queryString);
  return params.get(param);
};

var onChange = function onChange(cb) {
  window.addEventListener('popstate', cb);
};

var getQueryString = function getQueryString() {
  return window.location.search;
};

var route = {
  getParam: getParam,
  onChange: onChange,
  getQueryString: getQueryString
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities//HttpCancelError */ "./javascript/utilities/HttpCancelError.js");
/* harmony import */ var _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/EventEmitter */ "./javascript/utilities/EventEmitter.js");
/* harmony import */ var _utilities_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/getScrollbarWidth */ "./javascript/utilities/getScrollbarWidth.js");
/* harmony import */ var _howDoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./howDoService */ "./javascript/components/howDoIFind/howDoService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {},
  data: function data() {
    return {
      popupAPI: '',
      popupData: {
        slideShow: false,
        slideData: {},
        customClass: ''
      },
      selected: 0
    };
  },
  mounted: function mounted() {},
  computed: {
    templateComputed: function templateComputed() {
      return this.templateData + ' Niteco';
    }
  },
  created: function created() {
    var self = this;
    this.howDoService = new _howDoService__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].on('showPopup', function (apisrc) {
      self.onOpenSlide(apisrc);
    }); // Click handler for entire DIV container

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('js_show_howdo')) {
        e.preventDefault();
        var $btnShowHowDo = e.target;
        self.onOpenSlide($btnShowHowDo.getAttribute('data-api') || $btnShowHowDo.getAttribute('href') || 'where-to-find-pnc');
      }
    });
  },
  methods: {
    onCloseSlide: function onCloseSlide() {
      this.popupData.slideShow = false;
      document.body.classList.remove('c_slidebar-opened');
      document.body.style.removeProperty("padding-right");
    },
    onOpenSlide: function onOpenSlide(apisrc) {
      var self = this;

      if (self.popupAPI !== apisrc) {
        self.popupAPI = apisrc;
        var obj = this.howDoService.getHowdo(apisrc).then(function (data) {
          if (data) {
            document.body.classList.add("c_slidebar-opened");
            document.body.style.paddingRight = "".concat((0,_utilities_getScrollbarWidth__WEBPACK_IMPORTED_MODULE_2__.getScrollbarWidth)(), "px");
            self.popupData = {
              slideShow: true,
              slideData: data,
              customClass: 'c_slidebar-wrap--' + apisrc
            };
            self.selected = 0;
          }
        })["catch"](function (err) {
          if (err instanceof _utilities_HttpCancelError__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            return;
          }
        });
      } else {
        self.popupData.slideShow = true;
      }
    }
  }
});

/***/ }),

/***/ "./javascript/components/howDoIFind/Template.vue":
/*!*******************************************************!*\
  !*** ./javascript/components/howDoIFind/Template.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Template.vue?vue&type=template&id=f82e1526& */ "./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526&");
/* harmony import */ var _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Template.vue?vue&type=script&lang=js& */ "./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__.render,
  _Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/howDoIFind/Template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526&":
/*!**************************************************************************************!*\
  !*** ./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Template_vue_vue_type_template_id_f82e1526___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Template.vue?vue&type=template&id=f82e1526& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/howDoIFind/Template.vue?vue&type=template&id=f82e1526& ***!
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
    { staticClass: "c_slidebar-wrap", class: [_vm.popupData.customClass] },
    [
      _c(
        "div",
        {
          staticClass: "c_slidebar",
          class: { "c_slidebar--show": _vm.popupData.slideShow },
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
          _c(
            "div",
            { staticClass: "c_slidebar__content c_howdo" },
            [
              !!_vm.popupData.slideData
                ? [
                    !!_vm.popupData.slideData.categoryTitle
                      ? _c("h3", { staticClass: "c_howdo__cat-title" }, [
                          _vm._v(_vm._s(_vm.popupData.slideData.categoryTitle)),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !!_vm.popupData.slideData.categorySecondTitle
                      ? _c("div", { staticClass: "c_howdo__cat-summary" }, [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm.popupData.slideData.categorySecondTitle
                              ) +
                              "\n        "
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.popupData.slideData.categoryList &&
                    _vm.popupData.slideData.categoryList.length > 0
                      ? [
                          _c("div", { staticClass: "c_form__group" }, [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selected,
                                    expression: "selected",
                                  },
                                ],
                                staticClass: "c_form__control c_form__select",
                                attrs: { name: "howdo-select-category" },
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.selected = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _vm.selected == -1
                                  ? _c("option", { attrs: { value: "-1" } }, [
                                      _vm._v("Select category"),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.popupData.slideData.categoryList,
                                  function (option, index) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: index },
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(option.displayText) +
                                            "\n              "
                                        ),
                                      ]
                                    )
                                  }
                                ),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.selected >= 0 &&
                          _vm.popupData.slideData.categoryList &&
                          _vm.popupData.slideData.categoryList[_vm.selected]
                            .Image
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "c_howdo__cat-summary" },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.popupData.slideData.categoryList[
                                            this.selected
                                          ].displayText
                                        )
                                      ),
                                    ]),
                                    _c("br"),
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(
                                          _vm.popupData.slideData.categoryList[
                                            this.selected
                                          ].description
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "picture",
                                  { staticClass: "c_howdo__product-img" },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.popupData.slideData
                                          .categoryList[this.selected].Image,
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            : _vm._e(),
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    !!_vm.popupData.slideData.title
                      ? _c("h3", { staticClass: "c_howdo__title" }, [
                          _vm._v(_vm._s(_vm.popupData.slideData.title)),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !!_vm.popupData.slideData.description
                      ? _c("div", { staticClass: "c_howdo__description" }, [
                          _vm._v(_vm._s(_vm.popupData.slideData.description)),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.popupData.slideData.mobileImg ||
                    _vm.popupData.slideData.img
                      ? _c("div", { staticClass: "c_img" }, [
                          _c("picture", { staticClass: "c_img__picture" }, [
                            _vm.popupData.slideData.img
                              ? _c("source", {
                                  attrs: {
                                    media: "(min-width: 768px)",
                                    srcset: _vm.popupData.slideData.img,
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.popupData.slideData.mobileImg ||
                                  _vm.popupData.slideData.img,
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          !!_vm.popupData.slideData.exampleImgCaption
                            ? _c("div", { staticClass: "c_img__caption" }, [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.popupData.slideData.exampleImgCaption
                                    )
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !!_vm.popupData.slideData.hintText
                      ? _c("div", {
                          staticClass: "c_howdo__help-text",
                          domProps: {
                            innerHTML: _vm._s(_vm.popupData.slideData.hintText),
                          },
                        })
                      : _vm._e(),
                  ]
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "c_slidebar-backdrop",
        on: { click: _vm.onCloseSlide },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=module.bundle-legacy.583225f442c9bde6d149.js.map