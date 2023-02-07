"use strict";
(self["webpackChunkelectrolux"] = self["webpackChunkelectrolux"] || []).push([["registerForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/EventEmitter */ "./javascript/utilities/EventEmitter.js");
/* harmony import */ var _howDoIFind_Template_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../howDoIFind/Template.vue */ "./javascript/components/howDoIFind/Template.vue");
/* harmony import */ var _FormService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormService */ "./javascript/components/dynamicForm/FormService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var InputHtml = function InputHtml() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./InputHtml */ "./javascript/components/dynamicForm/InputHtml.vue"));
};

var InputText = function InputText() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./InputText */ "./javascript/components/dynamicForm/InputText.vue"));
};

var Checkbox = function Checkbox() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./Checkbox */ "./javascript/components/dynamicForm/Checkbox.vue"));
};

var Radio = function Radio() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./Radio */ "./javascript/components/dynamicForm/Radio.vue"));
};

var Select = function Select() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./Select */ "./javascript/components/dynamicForm/Select.vue"));
};

var CountryPhone = function CountryPhone() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./CountryPhone */ "./javascript/components/dynamicForm/CountryPhone.vue"));
};

var DatePicker = function DatePicker() {
  return Promise.all(/*! import() | lazyform */[__webpack_require__.e("vendors"), __webpack_require__.e("lazyform")]).then(__webpack_require__.bind(__webpack_require__, /*! ./DatePicker */ "./javascript/components/dynamicForm/DatePicker.vue"));
};

var InputHidden = function InputHidden() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./InputHidden */ "./javascript/components/dynamicForm/InputHidden.vue"));
};

var Captcha = function Captcha() {
  return Promise.all(/*! import() | lazyform */[__webpack_require__.e("vendors"), __webpack_require__.e("lazyform")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Captcha */ "./javascript/components/dynamicForm/Captcha.vue"));
};

var SubmitBtn = function SubmitBtn() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./SubmitBtn.vue */ "./javascript/components/dynamicForm/SubmitBtn.vue"));
};

var ResetBtn = function ResetBtn() {
  return __webpack_require__.e(/*! import() | form */ "form").then(__webpack_require__.bind(__webpack_require__, /*! ./ResetBtn.vue */ "./javascript/components/dynamicForm/ResetBtn.vue"));
}; // import InputHtml from "./InputHtml";
// import InputText from "./InputText";
// import Checkbox from "./Checkbox";
// import Radio from "./Radio";
// import Select from "./Select";
// import CountryPhone from "./CountryPhone";
// import DatePicker from "./DatePicker";
// import InputHidden from "./InputHidden";
// import Captcha from "./Captcha.vue";


var INPUT_TYPES = ["text", "email", "tel", "number"];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InputHtml: InputHtml,
    InputText: InputText,
    Checkbox: Checkbox,
    Radio: Radio,
    Select: Select,
    CountryPhone: CountryPhone,
    DatePicker: DatePicker,
    InputHidden: InputHidden,
    Captcha: Captcha,
    SubmitBtn: SubmitBtn,
    ResetBtn: ResetBtn
  },
  props: {
    pageid: {
      type: String,
      defaults: ""
    },
    formapi: {
      type: String,
      defaults: ""
    },
    listrow: {
      type: Array,
      defaults: Array
    }
  },
  data: function data() {
    return {
      invalidInput: "",
      listField: "",
      inputTypes: INPUT_TYPES,
      isSubmitting: false,
      submitError: "",
      invalidCaptcha: false,
      tokenUser: "",
      isActiveComponent: false
    };
  },
  updated: function updated() {
    this.generateListField();
    this.watchValidateForm();
  },
  created: function created() {},
  mounted: function mounted() {
    this.generateListField();
    this.watchValidateForm();
    window.addEventListener('scroll', this.scrollListener);
  },
  destroyed: function destroyed() {// window.removeEventListener("scroll", this.scrollListener);
  },
  watch: {
    listrow: function listrow(value) {
      var _this = this;

      setTimeout(function () {
        _this.generateListField();

        _this.watchValidateForm();
      }, 10);
    },
    isActiveComponent: function isActiveComponent(value) {
      if (value) {
        window.removeEventListener("scroll", this.scrollListener);
      }
    }
  },
  computed: {},
  methods: {
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      var dynamicForm = this.$refs.dynamicForm;
      var formData = this.convertData(Object.fromEntries(new FormData(dynamicForm).entries()));
      this.submitError = '';
      this.isSubmitting = true;
      var self = this;
      _FormService__WEBPACK_IMPORTED_MODULE_2__["default"].sendData(this.formapi, formData).then(function (data) {
        var resData = data;

        if (resData && resData.success) {
          _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("registrations", {
            registrationProduct: formData,
            registrationRes: resData,
            loadForm: false
          });
          _utilities_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"].emit("activeStep", 3);
          setTimeout(function () {
            //scroll top document
            document.documentElement.scrollIntoView();
          }, 100); // dynamicForm.reset();

          if (_this2.$refs.captcha) {// this.$refs.captcha[0].resetCaptcha();
          }
        }
      }).then(function (data) {
        _this2.$refs.captcha[0].resetCaptcha();
      })["catch"](function (err) {
        console.log('innnnnn', err);
        _this2.submitError = "Can not submit this data!";
      })["finally"](function () {
        self.isSubmitting = false;
      });
    },
    convertData: function convertData(formData) {
      var dynamicForm = this.$refs.dynamicForm;
      Object.keys(formData).forEach(function (key) {
        var inputElement = dynamicForm.querySelector("[name='".concat(key, "']"));

        if (!inputElement) {
          return;
        }

        var prefixValue = inputElement.getAttribute("data-prefix-value");

        if (prefixValue) {
          formData[key] = prefixValue + formData[key];
        }

        if (inputElement.type == "checkbox" || inputElement.type == "radio") {
          formData[key] = inputElement.checked ? 1 : 0;
        }
      });
      formData.blockid = this.pageid;
      return formData;
    },
    appendErrorElement: function appendErrorElement(input) {
      var _inputParent$querySel;

      var inputParent = input.parentElement;
      var groupElement = input.closest(".js_form-group");
      var errorElement = (_inputParent$querySel = inputParent.querySelector(".c_form__error-message")) !== null && _inputParent$querySel !== void 0 ? _inputParent$querySel : groupElement.querySelector(".c_form__error-message");

      if (errorElement) {
        errorElement.innerText = "";
      } else {
        errorElement = document.createElement("div");
        errorElement.classList.add("c_form__error-message");
        inputParent.append(errorElement);
      }

      return errorElement;
    },
    validateInput: function validateInput(input, validations) {
      var validity = input.validity;
      var errorElement = this.appendErrorElement(input);
      input.setAttribute("data-has-validated", 1);

      if (validity.valid) {
        if (this.invalidInput && this.invalidInput.isEqualNode(input)) {
          this.invalidInput = "";
        }

        input.classList.remove("has-error");
        return;
      }

      input.classList.add("has-error");
      var errorMessage = "This field is invalid";

      if (!this.invalidInput) {
        this.invalidInput = input;
      }

      if (validity.valueMissing) {
        var validOpt = validations.find(function (o) {
          return o.type == "required";
        });
        errorMessage = validOpt ? validOpt.messageError : "This field is required";
      } else if (validity.patternMismatch) {
        var _validOpt = validations.find(function (o) {
          return o.type == "pattern";
        });

        errorMessage = _validOpt ? _validOpt.messageError : "This field is invalid";
      } else if (validity.typeMismatch) {
        var _validOpt2 = validations.find(function (o) {
          return o.type != "required" && o.type != "pattern";
        });

        errorMessage = _validOpt2 ? _validOpt2.messageError : "This field is not valid";
      }

      errorElement.innerText = errorMessage;
    },
    generateListField: function generateListField() {
      var _this3 = this;

      var res = [];
      [].forEach.call(this.$refs.dynamicForm.querySelectorAll("[name]"), function (inputElement) {
        if (inputElement.tagName.toLowerCase() != "input" && inputElement.tagName.toLowerCase() != "select") {
          return;
        }

        if (inputElement.getAttribute("type") == "hidden") {
          return;
        }

        var fieldData;

        _this3.listrow.forEach(function (rowData) {
          rowData.listElement.forEach(function (item) {
            if (item.name == inputElement.getAttribute("name")) {
              fieldData = item;
            }
          });
        });

        if (!fieldData || !fieldData.validations || fieldData.validations.length === 0) {
          return;
        }

        res.push({
          inputElement: inputElement,
          fieldData: fieldData
        });
      });
      this.listField = res;
    },
    watchValidateForm: function watchValidateForm() {
      var _this4 = this;

      this.listField.forEach(function (field) {
        var inputElement = field.inputElement,
            fieldData = field.fieldData;
        var listenEvent = fieldData.type == "datetime" ? "changeDatepicker" : "input";
        inputElement.addEventListener(listenEvent, function () {
          _this4.validateInput(inputElement, fieldData.validations);
        });
      });
    },
    validateForm: function validateForm() {
      var _this5 = this;

      this.listField.forEach(function (field) {
        var inputElement = field.inputElement,
            fieldData = field.fieldData;

        _this5.validateInput(inputElement, fieldData.validations);
      });

      if (this.invalidInput) {
        this.invalidInput.scrollIntoView();
        this.invalidInput.focus();
      }

      ;

      if (this.$refs.captcha) {
        this.validateCaptcha();
        return;
      }

      console.log(this.invalidInput);

      if (!this.invalidInput) {
        this.handleSubmit();
      }
    },
    resetForm: function resetForm() {
      var _this6 = this;

      this.listField.forEach(function (field) {
        var inputElement = field.inputElement,
            fieldData = field.fieldData;

        var errorElement = _this6.appendErrorElement(inputElement);

        inputElement.classList.remove("has-error");
        errorElement.innerText = '';
      });

      if (this.$refs.captcha) {
        this.$refs.captcha[0].resetCaptcha();
      }
    },
    handleTokenUser: function handleTokenUser(token) {
      this.tokenUser = token;
      this.invalidCaptcha = false;
    },
    validateCaptcha: function validateCaptcha(event) {
      var _this7 = this;

      _FormService__WEBPACK_IMPORTED_MODULE_2__["default"].getKey({
        Response: this.tokenUser
      }).then(function (res) {
        if (_this7.$refs.captcha[0].checkStatusCatpcha() && !res.Success) {
          // this.$refs.captcha[0].resetCaptcha();
          return;
        }

        _this7.invalidCaptcha = !res.Success;
      })["finally"](function (res) {
        if (!_this7.invalidCaptcha && !_this7.invalidInput) {
          _this7.handleSubmit();
        }
      });
    },
    scrollListener: function scrollListener() {
      var posScroll = window.scrollY;

      if (posScroll > 300 && this.isActiveComponent == false) {
        this.isActiveComponent = true;
      }
    }
  }
});

/***/ }),

/***/ "./javascript/components/dynamicForm/DynamicFormVue.vue":
/*!**************************************************************!*\
  !*** ./javascript/components/dynamicForm/DynamicFormVue.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicFormVue.vue?vue&type=template&id=18a40af4& */ "./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4&");
/* harmony import */ var _DynamicFormVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicFormVue.vue?vue&type=script&lang=js& */ "./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DynamicFormVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__.render,
  _DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "javascript/components/dynamicForm/DynamicFormVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFormVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicFormVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFormVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4&":
/*!*********************************************************************************************!*\
  !*** ./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicFormVue_vue_vue_type_template_id_18a40af4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DynamicFormVue.vue?vue&type=template&id=18a40af4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./javascript/components/dynamicForm/DynamicFormVue.vue?vue&type=template&id=18a40af4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      ref: "dynamicForm",
      staticClass: "c_form",
      on: { submit: _vm.handleSubmit },
    },
    _vm._l(_vm.listrow, function (formRow) {
      return _vm.listrow
        ? _c(
            "div",
            { staticClass: "c_form__row row" },
            [
              _vm._l(formRow.listElement, function (formElement) {
                return [
                  _vm.inputTypes.find(function (i) {
                    return i == formElement.type
                  })
                    ? _c(
                        "InputText",
                        _vm._b({}, "InputText", formElement, false)
                      )
                    : formElement.type == "checkbox"
                    ? _c("Checkbox", _vm._b({}, "Checkbox", formElement, false))
                    : formElement.type == "radio"
                    ? _c("Radio", _vm._b({}, "Radio", formElement, false))
                    : formElement.type == "select"
                    ? _c("Select", _vm._b({}, "Select", formElement, false))
                    : formElement.type == "countryPhone"
                    ? _c(
                        "CountryPhone",
                        _vm._b({}, "CountryPhone", formElement, false)
                      )
                    : (formElement.type == "datetime" ||
                        formElement.type === "daterange") &&
                      _vm.isActiveComponent
                    ? _c(
                        "DatePicker",
                        _vm._b({}, "DatePicker", formElement, false)
                      )
                    : formElement.type == "html"
                    ? _c(
                        "InputHtml",
                        _vm._b({}, "InputHtml", formElement, false)
                      )
                    : formElement.type == "hidden"
                    ? _c(
                        "InputHidden",
                        _vm._b({}, "InputHidden", formElement, false)
                      )
                    : formElement.type == "captcha" &&
                      formElement.defaultValue &&
                      _vm.isActiveComponent
                    ? _c(
                        "Captcha",
                        _vm._b(
                          {
                            ref: "captcha",
                            refInFor: true,
                            attrs: { invalidcaptcha: _vm.invalidCaptcha },
                            on: {
                              emitTokenUser: function ($event) {
                                return _vm.handleTokenUser($event)
                              },
                              expiredTokenUser: function ($event) {
                                _vm.tokenUser = ""
                              },
                            },
                          },
                          "Captcha",
                          formElement,
                          false
                        )
                      )
                    : formElement.type == "button"
                    ? [
                        _vm.submiterror
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-12 c_form__group c_form__error-message",
                              },
                              [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(_vm.submiterror) +
                                    "\n        "
                                ),
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "SubmitBtn",
                          _vm._b(
                            {
                              attrs: {
                                submiterror: _vm.submitError,
                                issubmitting: _vm.isSubmitting,
                              },
                              on: {
                                validateForm: function ($event) {
                                  return _vm.validateForm()
                                },
                              },
                            },
                            "SubmitBtn",
                            formElement,
                            false
                          )
                        ),
                      ]
                    : formElement.type == "reset"
                    ? _c(
                        "ResetBtn",
                        _vm._b(
                          {
                            on: {
                              resetForm: function ($event) {
                                return _vm.resetForm()
                              },
                            },
                          },
                          "ResetBtn",
                          formElement,
                          false
                        )
                      )
                    : _vm._e(),
                ]
              }),
            ],
            2
          )
        : _vm._e()
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=registerForm.bundle-legacy.ad9af31350f60a1d640f.js.map