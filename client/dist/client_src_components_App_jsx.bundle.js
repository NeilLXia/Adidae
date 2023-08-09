"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_App_jsx"],{

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _Modal = _interopRequireDefault(__webpack_require__(/*! @modular/Modal */ "./client/src/modular/Modal.jsx"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _headerBar = _interopRequireDefault(__webpack_require__(/*! ./headerBar */ "./client/src/components/headerBar/index.jsx"));
var _productOverview = _interopRequireDefault(__webpack_require__(/*! ./productOverview */ "./client/src/components/productOverview/index.jsx"));
var _ratingsReviews = _interopRequireDefault(__webpack_require__(/*! ./ratingsReviews */ "./client/src/components/ratingsReviews/index.jsx"));
var _questionsAnswers = _interopRequireDefault(__webpack_require__(/*! ./questionsAnswers */ "./client/src/components/questionsAnswers/index.jsx"));
var _relatedItems = _interopRequireDefault(__webpack_require__(/*! ./relatedItems */ "./client/src/components/relatedItems/index.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable quotes */

var appStyles = "max-w-[390px] md:max-w-[950px] grid grid-flow-row auto-rows-max mx-auto shadow-sm" + " bg-primary-100 text-gray-700 dark:bg-secondary-100 dark:text-gray-300";
var backgroundStyles = "w-full h-full bg-slate-300 dark:bg-neutral-900 overflow-x-hidden";
function App() {
  var rendered = (0, _reactRedux.useSelector)(function (state) {
    return state.modal.modalOpen;
  });
  var isDarkTheme = (0, _reactRedux.useSelector)(function (state) {
    return state.theme.isDarkTheme;
  });
  if (isDarkTheme) {
    document.body.style.backgroundColor = "#1f2937";
  } else {
    document.body.style.backgroundColor = "#d1d5db";
  }
  (0, _react.useEffect)(function () {
    if (rendered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [rendered]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: isDarkTheme ? "dark" : ""
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "background",
    className: backgroundStyles
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "app",
    className: appStyles
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n            body::-webkit-scrollbar {\n              width: 1.5vh;\n              height: 2vh;\n            }\n            body::-webkit-scrollbar-thumb {\n              background-color: rgb(97 32 216);\n              border-radius: 6px;\n            }\n            body::-webkit-scrollbar-button {\n              display: none;\n            }\n            body::-webkit-scrollbar-track {\n              background-color: #e5f4ff;\n              border-radius: 6px;\n            }\n            "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 grow max-w-[390px] md:max-w-[950px]"
  }, /*#__PURE__*/_react["default"].createElement(_headerBar["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 grow max-w-[390px] md:max-w-[950px]"
  }, /*#__PURE__*/_react["default"].createElement(_productOverview["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    id: "ratingsReviewMark",
    className: "row-span-1 p-10 grow max-w-[390px] md:max-w-[950px]"
  }, /*#__PURE__*/_react["default"].createElement(_ratingsReviews["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 p-5 grow max-w-[390px] md:max-w-[950px]"
  }, /*#__PURE__*/_react["default"].createElement(_questionsAnswers["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 p-10 grow max-w-[390px] md:max-w-[950px]"
  }, /*#__PURE__*/_react["default"].createElement(_relatedItems["default"], null)), rendered ? /*#__PURE__*/_react["default"].createElement(_Modal["default"], null) : null)));
}
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/headerBar/index.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/headerBar/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _cartSlice = __webpack_require__(/*! @reducers/cartSlice */ "./client/src/reducers/cartSlice.js");
var _themeSlice = __webpack_require__(/*! @reducers/themeSlice */ "./client/src/reducers/themeSlice.js");
var _cartRender = __webpack_require__(/*! @lib/cartRender */ "./client/src/lib/cartRender.js");
var _ADIDA_logo_white = _interopRequireDefault(__webpack_require__(/*! @images/ADIDA_logo_white.png */ "./client/src/assets/images/ADIDA_logo_white.png"));
var _cartDisplay = _interopRequireDefault(__webpack_require__(/*! ./subComponents/cartDisplay */ "./client/src/components/headerBar/subComponents/cartDisplay.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function HeaderBar() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productListData = (0, _reactRedux.useSelector)(function (state) {
    return state.product.productList;
  });
  var isDarkTheme = (0, _reactRedux.useSelector)(function (state) {
    return state.theme.isDarkTheme;
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _productSlice.getProductListAsync)());
    dispatch((0, _cartSlice.initializeProductData)());
    dispatch((0, _cartSlice.getCartDataAsync)());
    (0, _cartRender.hideCart)();
  }, []);
  function productChangeHandler(event) {
    dispatch((0, _productSlice.getProductDetailsAsync)(event.target.value));
  }
  function renderProductList() {
    var productList = productListData.map(function (product) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        value: product.id,
        key: product.id,
        "data-testid": "product-dropdown",
        className: "dark:bg-black"
      }, product.name);
    });
    productList.unshift( /*#__PURE__*/_react["default"].createElement("option", {
      value: "none",
      key: "none",
      className: " bg-stone-200 dark:bg-black",
      disabled: true
    }, "you can use axios"));
    return productList;
  }
  var productSelector = /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-[80%]"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    name: "productSelector",
    id: "product-selector",
    "data-testid": "product-selector",
    className: "w-full p-2 border-b-2 border-white bg-transparent text-lg text-white text-clip m-2",
    defaultValue: "none",
    onChange: productChangeHandler
  }, renderProductList()));
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "header-bar",
    "data-testid": "header-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-bar fixed w-full max-w-[390px] md:max-w-[950px] z-40 overflow-visible"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-bar bg-gradient-to-r from-primary-300 to-secondary-300 flex justify-between pl-4 gap-x-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-auto max-w-[40%]"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "logo",
    src: _ADIDA_logo_white["default"],
    className: "max-h-8 aspect-auto"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-[60%] flex justify-end my-auto gap-2"
  }, productSelector, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-auto w-[110px] flex ml-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-[50px]",
    onClick: function onClick() {
      return dispatch((0, _themeSlice.toggleTheme)());
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: isDarkTheme ? "fa-sharp fa-solid fa-sun text-2xl text-white p-3" : "fa-sharp fa-solid fa-moon text-2xl text-white p-3"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "link to cart",
    "data-testid": "cart-button",
    className: "w-[50px] p-3",
    onMouseEnter: _cartRender.renderCart,
    onMouseLeave: _cartRender.hideCart
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-cart-shopping text-white text-xl"
  }))))), /*#__PURE__*/_react["default"].createElement(_cartDisplay["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-bar h-14 bg-gradient-to-r from-primary-300 to-secondary-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative overflow-x-auto header-bar w-full h-8 pt-2 text-xs italic text-center border-solid border-y-2 border-gray-100 dark:border-gray-900 bg-white dark:bg-black"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "overflow-x-auto"
  }, "SITE-WIDE ANNOUNCEMENT MESSAGE!")));
}
var _default = HeaderBar;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/headerBar/subComponents/cartDisplay.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/components/headerBar/subComponents/cartDisplay.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = CartDisplay;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _cartRender = __webpack_require__(/*! @lib/cartRender */ "./client/src/lib/cartRender.js");
var _cartItem = _interopRequireDefault(__webpack_require__(/*! ./cartItem */ "./client/src/components/headerBar/subComponents/cartItem.jsx"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function CartDisplay() {
  var cartData = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.items;
  });
  var allProductData = (0, _reactRedux.useSelector)(function (state) {
    return state.cart.itemInfo;
  });
  var cartList = cartData.map(function (i) {
    var item = _objectSpread(_objectSpread({}, i), allProductData[i.sku_id]);
    item.count = Number(item.count);
    item.original_price = Number(item.original_price);
    item.sale_price = Number(item.sale_price);
    if (allProductData[i.sku_id]) {
      return /*#__PURE__*/_react["default"].createElement(_cartItem["default"], {
        item: item,
        key: item.sku_id
      });
    }
    return null;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "cart-list",
    "data-testid": "cart-list",
    className: "collapse transition-[max-height] duration-500 absolute top-13 right-4 w-72 bg-white text-gray-700 shadow-lg overflow-y-auto",
    onMouseEnter: _cartRender.renderCart,
    onMouseLeave: _cartRender.hideCart
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed w-72 text-md font-bold bg-white p-4"
  }, "SHOPPING CART"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-8"
  }, cartList));
}

/***/ }),

/***/ "./client/src/components/headerBar/subComponents/cartItem.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/headerBar/subComponents/cartItem.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = CartItem;
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});
function CartItem(_ref) {
  var item = _ref.item;
  var totalPrice = currencyFormatter.format(item.count * (item.sale_price ? item.sale_price : item.original_price));
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "cart-item",
    className: "grid grid-flow-row grid-cols-6 grid-rows-3 gap-x-2 mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 col-span-6 text-md font-bold"
  }, item.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-2 col-span-1"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    src: item.thumbnail_url,
    className: "rounded-md bg-gray-100 h-12 w-12 object-cover"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-2 col-span-2 text-xs"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Style:"), /*#__PURE__*/_react["default"].createElement("div", null, "Quantity:"), /*#__PURE__*/_react["default"].createElement("div", null, "Total Price:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-2 col-span-3 text-xs text-right"
  }, /*#__PURE__*/_react["default"].createElement("div", null, item.style), /*#__PURE__*/_react["default"].createElement("div", null, item.count), /*#__PURE__*/_react["default"].createElement("div", null, totalPrice)));
}
CartItem.propTypes = {
  item: _propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    style: _propTypes["default"].string.isRequired,
    thumbnail_url: _propTypes["default"].string.isRequired,
    count: _propTypes["default"].number.isRequired,
    sale_price: _propTypes["default"].number.isRequired,
    original_price: _propTypes["default"].number.isRequired
  }).isRequired
};

/***/ }),

/***/ "./client/src/components/productOverview/index.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/productOverview/index.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _productShopper = _interopRequireDefault(__webpack_require__(/*! ./subComponents/productShopper */ "./client/src/components/productOverview/subComponents/productShopper.jsx"));
var _productDetails = _interopRequireDefault(__webpack_require__(/*! ./subComponents/productDetails */ "./client/src/components/productOverview/subComponents/productDetails.jsx"));
var _imageGallery = _interopRequireDefault(__webpack_require__(/*! ./subComponents/imageGallery */ "./client/src/components/productOverview/subComponents/imageGallery.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var productOverviewStyle = 'standard-grid';
function ProductOverview() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _productSlice.getProductDetailsAsync)(productID));
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "product-overview",
    className: productOverviewStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "gallery-container",
    className: "row-span-1 col-span-1 bg-gray-100"
  }, /*#__PURE__*/_react["default"].createElement(_imageGallery["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 col-span-1"
  }, /*#__PURE__*/_react["default"].createElement(_productShopper["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 col-span-2"
  }, /*#__PURE__*/_react["default"].createElement(_productDetails["default"], null)));
}
var _default = ProductOverview;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/scripts/checkExpandedView.js":
/*!****************************************************************************!*\
  !*** ./client/src/components/productOverview/scripts/checkExpandedView.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = checkExpandedView;
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function checkExpandedView() {
  var isExpandedView = (0, _reactRedux.useSelector)(function (state) {
    return state.product.isExpandedView;
  });
  if (document.getElementById('app')) {
    document.getElementById('image-gallery').style.width = '100%';
    if (isExpandedView) {
      var expandedWidth = JSON.stringify(document.getElementById('app').clientWidth);
      document.getElementById('image-gallery').style.width = "".concat(expandedWidth, "px");
    }
  }
}

/***/ }),

/***/ "./client/src/components/productOverview/scripts/redirectionLink.js":
/*!**************************************************************************!*\
  !*** ./client/src/components/productOverview/scripts/redirectionLink.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = redirectionLink;
function redirectionLink(url) {
  var newTab = document.createElement('a');
  newTab.target = '_blank';
  newTab.href = url;
  newTab.click();
}

/***/ }),

/***/ "./client/src/components/productOverview/scripts/scrollCarousel.js":
/*!*************************************************************************!*\
  !*** ./client/src/components/productOverview/scripts/scrollCarousel.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = scrollCarousel;
function scrollCarousel(index, isAbsolute) {
  var scrollRate = 62.78;
  var carousel = document.getElementById('carousel-body');
  var scrollLocation = isAbsolute ? 0 : carousel.scrollTop;
  scrollLocation += index * scrollRate;
  if (scrollLocation > carousel.scrollHeight) {
    scrollLocation = carousel.scrollHeight;
  }
  if (scrollLocation < 0) {
    scrollLocation = 0;
  }
  carousel.scrollTo({
    top: scrollLocation,
    behavior: 'smooth'
  });
}

/***/ }),

/***/ "./client/src/components/productOverview/scripts/zoomPanning.js":
/*!**********************************************************************!*\
  !*** ./client/src/components/productOverview/scripts/zoomPanning.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ZoomPanning;
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
function ZoomPanning(event) {
  var container = document.getElementById('main-image-container');
  var image = document.getElementById('main-image');
  var imageURL = image.style['background-image'].replace('url("', '').replace(')"', '');
  function getPhotoDimensions(url, cb) {
    var img = new Image();
    img.onload = function () {
      return cb(null, img);
    };
    img.onerror = function (err) {
      return cb(err);
    };
    img.src = url;
  }
  function boundScroll(scroll, ratio) {
    var result = scroll - 0.5;
    result *= -Math.max(ratio * 250, 150);
    result = Math.max(result, -ratio * 100);
    result = Math.min(result, ratio * 100);
    return result;
  }
  getPhotoDimensions(imageURL, function (err, img) {
    if (err) return;
    var imageScaleRatio = Math.min(container.offsetWidth / img.width, container.offsetHeight / img.height);
    var imageDimensions = {
      width: img.width * imageScaleRatio * 2.5,
      height: img.height * imageScaleRatio * 2.5
    };
    var scrollLimit = {
      x: (imageDimensions.width - container.offsetWidth) / (2 * container.offsetWidth),
      y: (imageDimensions.height - container.offsetHeight) / (2 * container.offsetHeight)
    };
    var xScroll = boundScroll((event.clientX - container.getBoundingClientRect().x) / container.offsetWidth, scrollLimit.x);
    var yScroll = boundScroll((event.clientY - container.getBoundingClientRect().y) / container.offsetHeight, scrollLimit.y);
    image.style.transform = "translate(".concat(xScroll, "%, ").concat(yScroll, "%) scale(", 2.5, ")");
  });
}

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/addToCart.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/addToCart.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _cartSlice = __webpack_require__(/*! @reducers/cartSlice */ "./client/src/reducers/cartSlice.js");
var _relatedSlice = __webpack_require__(/*! @reducers/relatedSlice */ "./client/src/reducers/relatedSlice.js");
var _cartRender = __webpack_require__(/*! @lib/cartRender */ "./client/src/lib/cartRender.js");
var _Button = _interopRequireDefault(__webpack_require__(/*! @modular/Button */ "./client/src/modular/Button.jsx"));
var addToCartStyle = 'grid grid-rows-2';
var productSizesStyles = 'w-full h-14 p-2 text-sm font-semibold' + ' bg-white text-secondary-300 hover:bg-secondary-300/5 standard-border' + ' dark:bg-black dark:text-primary-300 dark:hover:bg-primary-300/5 dark:standard-border-dark';
var quantitySelectorStyle = 'w-full h-14 p-2 text-sm font-semibold' + ' bg-white text-secondary-300 hover:bg-secondary-300/5 standard-border' + ' dark:bg-black dark:text-primary-300 dark:hover:bg-primary-300/5 dark:standard-border-dark';
function AddToCart() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productDetails = (0, _reactRedux.useSelector)(function (state) {
    return state.product.value;
  });
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  var styles = (0, _reactRedux.useSelector)(function (state) {
    return state.product.styles;
  });
  var selectedStyleID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.selectedStyleID;
  });
  var selectedSKU = (0, _reactRedux.useSelector)(function (state) {
    return state.product.selectedSKU;
  });
  var selectedStyle = styles.find(function (style) {
    return style.style_id === selectedStyleID;
  });
  var isFavorited = false;
  (0, _reactRedux.useSelector)(function (state) {
    return state.related.itemsOutfit;
  }).forEach(function (product) {
    if (product.id === productID) {
      isFavorited = true;
    }
  });
  var favoriteIcon = 'text-md text-left font-semibold';
  var favoriteButton = 'w-full h-14 p-2 px-3 flex justify-center items-center';
  if (isFavorited) {
    favoriteIcon += ' text-gray-700 dark: text-gray-300';
    favoriteButton += ' bg-secondary-300 hover:bg-secondary-300/95 standard-border' + ' dark:bg-primary-300 dark:hover:bg-primary-300/95 dark:standard-border-dark';
  } else {
    favoriteIcon += ' text-secondary-300 dark:text-primary-300';
    favoriteButton += ' bg-white hover:bg-secondary-300/5 standard-border' + ' dark:bg-black dark:hover:bg-primary-300/5 dark:standard-border-dark';
  }
  var listSKUs = [];
  var sizeArray = [];
  if (selectedStyle) {
    listSKUs = Object.keys(selectedStyle.skus);
    sizeArray = Array.from({
      length: selectedStyle.skus[selectedSKU].quantity
    }, function (_, i) {
      return i + 1;
    });
  }
  function sizeChangeHandler(event) {
    dispatch((0, _productSlice.selectSize)(event.target.value));
  }
  function addToCartHandler() {
    var quantity = Number(document.getElementById('productQuantities').value);
    dispatch((0, _cartSlice.addCartItem)(productID, Number(selectedSKU), quantity));
    dispatch((0, _cartSlice.getCartDataAsync)());
    (0, _cartRender.renderCart)();
    setTimeout(_cartRender.hideCart, 3000);
  }
  function favoriteHandler() {
    dispatch((0, _relatedSlice.addOutfitItem)(productDetails));
  }
  var sizeSelector = /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 pt-2 pb-2"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "productSizes"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs font-semibold"
  }, "SIZE:"), /*#__PURE__*/_react["default"].createElement("select", {
    name: "productSizes",
    id: "productSizes",
    className: productSizesStyles,
    value: selectedSKU,
    onChange: sizeChangeHandler
  }, listSKUs.map(function (indivSKU) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: indivSKU,
      key: indivSKU
    }, selectedStyle.skus[indivSKU].size);
  }))));
  var quantitySelector = /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 pt-2 pb-2"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "productQuantities"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs font-semibold"
  }, "QUANTITY:"), /*#__PURE__*/_react["default"].createElement("select", {
    name: "productQuantities",
    id: "productQuantities",
    className: quantitySelectorStyle
  }, sizeArray.map(function (quantity) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: quantity,
      key: quantity
    }, quantity);
  }))));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: addToCartStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 grid grid-cols-[1fr_7rem] gap-4"
  }, sizeSelector, quantitySelector), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 grid grid-cols-[1fr_3.5rem] gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 pt-2 pb-2"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, "ADD TO CART"), /*#__PURE__*/_react["default"].createElement("span", null, "+")),
    styleOverride: " flex justify-between items-center",
    onClick: function onClick() {
      return addToCartHandler();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 pt-2 pb-2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: favoriteButton,
    onClick: favoriteHandler
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: favoriteIcon
  }, "\u2606")))));
}
var _default = AddToCart;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/imageGallery.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/imageGallery.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _placeHolder = _interopRequireDefault(__webpack_require__(/*! @images/place-holder.jpg */ "./client/src/assets/images/place-holder.jpg"));
var _checkMobileBrowser = _interopRequireDefault(__webpack_require__(/*! @lib/checkMobileBrowser */ "./client/src/lib/checkMobileBrowser.js"));
var _checkValidImage = _interopRequireDefault(__webpack_require__(/*! @lib/checkValidImage */ "./client/src/lib/checkValidImage.js"));
var _checkExpandedView = _interopRequireDefault(__webpack_require__(/*! ../scripts/checkExpandedView */ "./client/src/components/productOverview/scripts/checkExpandedView.js"));
var _zoomPanning = _interopRequireDefault(__webpack_require__(/*! ../scripts/zoomPanning */ "./client/src/components/productOverview/scripts/zoomPanning.js"));
var _thumbnailCarousel = _interopRequireDefault(__webpack_require__(/*! ./thumbnailCarousel */ "./client/src/components/productOverview/subComponents/thumbnailCarousel.jsx"));
var imageGalleryStyle = 'transition-[width] duration-300 relative h-full max-v-screen mx-auto z-20 bg-gray-100 dark:bg-gray-900';
function ImageGallery() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var isZoomView = false;
  var expandButtonStyle = 'absolute top-2 right-2 z-30 h-7 w-7 rounded-full justify-center items-center bg-white text-black dark:bg-black dark:text-white';
  var photoURL = (0, _reactRedux.useSelector)(function (state) {
    if (state.product.styles.length === 0) return '';
    return state.product.selectedImage[3];
  });
  function viewStateHandler() {
    dispatch((0, _productSlice.toggleViewState)());
  }
  function zoomHandler(event) {
    if (event.type === 'dblclick') {
      isZoomView = !isZoomView;
      document.getElementById('main-image').style.transform = 'scale(2.5)';
    }
    if (event.type === 'mouseleave') {
      isZoomView = false;
    }
    if (isZoomView) {
      if (event.type === 'mousemove') {
        (0, _zoomPanning["default"])(event);
      }
    } else {
      document.getElementById('main-image').style.transform = '';
    }
  }
  (0, _checkExpandedView["default"])();
  (0, _checkValidImage["default"])(photoURL, function (isValid) {
    if (!isValid) {
      photoURL = _placeHolder["default"];
    }
    if (document.getElementById('app')) {
      document.getElementById('main-image').style.backgroundImage = "url(\"".concat(photoURL, "\")");
    }
  });
  var imageViewer = /*#__PURE__*/_react["default"].createElement("div", {
    id: "main-image-container",
    className: "w-full h-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "main-image",
    className: "w-full h-full min-h-[530px] bg-no-repeat bg-contain bg-center",
    "data-testid": "main-image",
    onMouseMove: zoomHandler,
    onMouseLeave: zoomHandler,
    onDoubleClick: zoomHandler
  }));
  (0, _checkMobileBrowser["default"])(function (isMobile) {
    if (isMobile) {
      expandButtonStyle = 'invisible';
    }
  });
  var expandButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "expand image view",
    className: expandButtonStyle,
    onClick: viewStateHandler
  }, "+");
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "image-gallery",
    className: imageGalleryStyle
  }, expandButton, /*#__PURE__*/_react["default"].createElement(_thumbnailCarousel["default"], null), imageViewer);
}
var _default = ImageGallery;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/productDetails.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/productDetails.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productFeature = _interopRequireDefault(__webpack_require__(/*! ./productFeature */ "./client/src/components/productOverview/subComponents/productFeature.jsx"));
var productDetailsStyle = 'standard-grid';
function ProductDetails() {
  var slogan = (0, _reactRedux.useSelector)(function (state) {
    return state.product.slogan;
  });
  var description = (0, _reactRedux.useSelector)(function (state) {
    return state.product.description;
  });
  var features = (0, _reactRedux.useSelector)(function (state) {
    return state.product.features;
  });
  var productFeatures = features.map(function (feature) {
    return /*#__PURE__*/_react["default"].createElement(_productFeature["default"], {
      feature: feature,
      key: feature.feature
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: productDetailsStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 mx-auto my-10 w-4/5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-2 text-md font-bold"
  }, slogan), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm"
  }, description)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-span-1 w-9/10 mx-4 my-10 px-[10%] border-l-2 border-solid border-l-gray-500"
  }, productFeatures));
}
var _default = ProductDetails;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/productFeature.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/productFeature.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var productFeaturesStyle = 'grid grid-cols-2 text-sm mb-2';
function ProductFeatures(_ref) {
  var feature = _ref.feature;
  var featureValue = feature.value || '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: productFeaturesStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 font-semibold"
  }, "".concat(feature.feature)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1"
  }, "".concat(featureValue)));
}
var _default = ProductFeatures;
exports["default"] = _default;
ProductFeatures.propTypes = {
  feature: _propTypes["default"].shape({
    feature: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].string
  }).isRequired
};

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/productShopper.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/productShopper.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _StarRatingView = _interopRequireDefault(__webpack_require__(/*! @modular/StarRatingView */ "./client/src/modular/StarRatingView.jsx"));
var _styleSelector = _interopRequireDefault(__webpack_require__(/*! ./styleSelector */ "./client/src/components/productOverview/subComponents/styleSelector.jsx"));
var _addToCart = _interopRequireDefault(__webpack_require__(/*! ./addToCart */ "./client/src/components/productOverview/subComponents/addToCart.jsx"));
var _socialMedia = _interopRequireDefault(__webpack_require__(/*! ./socialMedia */ "./client/src/components/productOverview/subComponents/socialMedia.jsx"));
var currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});
var productShopperStyle = 'grid auto-rows-max gap-2 p-4';
function ProductShopper() {
  var averageRating = (0, _reactRedux.useSelector)(function (state) {
    return state.reviews.averageRating;
  }) || 0;
  var styles = (0, _reactRedux.useSelector)(function (state) {
    return state.product.styles;
  });
  var name = (0, _reactRedux.useSelector)(function (state) {
    return state.product.name;
  });
  var category = (0, _reactRedux.useSelector)(function (state) {
    return state.product.category;
  });
  var defaultPrice = (0, _reactRedux.useSelector)(function (state) {
    return state.product.default_price;
  });
  var salePrice = (0, _reactRedux.useSelector)(function (state) {
    return state.product.sale_price;
  });
  var selectedStyle = (0, _reactRedux.useSelector)(function (state) {
    return state.product.selectedStyleID;
  });
  var styleText = null;
  function scrollToReviews(event) {
    event.preventDefault();
    var scrollLocation = document.getElementById('ratingsReviewMark').getBoundingClientRect().top;
    window.scrollTo({
      top: scrollLocation - 50,
      behavior: 'smooth'
    });
  }
  var styleSelectorList = styles.map(function (style) {
    if (selectedStyle === style.style_id) {
      styleText = style.name;
    }
    return /*#__PURE__*/_react["default"].createElement(_styleSelector["default"], {
      style: style,
      key: style.style_id
    });
  });
  var defaultPriceStyle = '';
  var salePriceStyle = 'invisible';
  if (salePrice !== null) {
    defaultPriceStyle = 'line-through';
    salePriceStyle = 'visible font-bold text-red-600';
  }
  var renderPrice = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: defaultPriceStyle
  }, currencyFormatter.format(defaultPrice)), "\xA0", /*#__PURE__*/_react["default"].createElement("span", {
    className: salePriceStyle
  }, currencyFormatter.format(salePrice)));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: productShopperStyle
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#ratingsReviews",
    className: "row-span-1 text-xs flex text-gray-500 dark:text-gray-400",
    onClick: scrollToReviews
  }, (0, _StarRatingView["default"])({
    averageRating: averageRating
  }), "\xA0 Read all reviews"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-sm"
  }, (category || 'CATEGORY').toUpperCase()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-4xl font-extrabold"
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-md mt-1 mb-1"
  }, renderPrice), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm font-extrabold"
  }, "STYLE > "), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm"
  }, styleText)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-4 grid-flow-row gap-x-2 w-0 min-w-max"
  }, styleSelectorList)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1"
  }, /*#__PURE__*/_react["default"].createElement(_addToCart["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1"
  }, /*#__PURE__*/_react["default"].createElement(_socialMedia["default"], null)));
}
var _default = ProductShopper;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/socialMedia.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/socialMedia.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _redirectionLink = _interopRequireDefault(__webpack_require__(/*! ../scripts/redirectionLink */ "./client/src/components/productOverview/scripts/redirectionLink.js"));
var socialMediaStyle = 'm-2 text-secondary-200 dark:text-primary-200';
function SocialMedia() {
  var domainName = 'https://www.facebook.com/adidasUS/?brand_redir=182162001806727';
  var emailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=\"\"&su=Check out this product from Adidae!&body=".concat(domainName);
  var messengerURL = 'http://www.facebook.com/dialog/send?' + 'app_id=782031183543584' + "&link=".concat(domainName) + "&redirect_uri=".concat(domainName);
  var twitterURL = 'https://twitter.com/share?' + 'text=Check out this product from Adidae! \n' + "&url=".concat(domainName);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "share via Email",
    className: socialMediaStyle,
    onClick: function onClick() {
      return (0, _redirectionLink["default"])(emailURL);
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-envelope text-xl"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "share via Messenger",
    className: socialMediaStyle,
    onClick: function onClick() {
      return (0, _redirectionLink["default"])(messengerURL);
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-brands fa-facebook-messenger text-xl"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "share via Twitter",
    className: socialMediaStyle,
    onClick: function onClick() {
      return (0, _redirectionLink["default"])(twitterURL);
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-brands fa-twitter text-xl"
  })));
}
var _default = SocialMedia;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/styleSelector.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/styleSelector.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
function StyleSelector(_ref) {
  var style = _ref.style;
  var dispatch = (0, _reactRedux.useDispatch)();
  var selectedStyle = (0, _reactRedux.useSelector)(function (state) {
    return state.product.selectedStyleID;
  });
  var thumbnailURL = style.photos[0].thumbnail_url;
  var styleSelectorStyle = 'rounded-full bg-gray-100 h-14 w-14 object-cover';
  var selectedMarker = 'invisible';
  if (selectedStyle === style.style_id) {
    styleSelectorStyle += ' style-selected dark:style-selected-dark';
    selectedMarker = 'visible absolute top-0 right-0 rounded-full h-4 w-4 z-10' + ' style-selected dark:style-selected-dark bg-secondary-300 dark:bg-primary-300';
  } else {
    styleSelectorStyle += ' style-unselected dark:style-unselected-dark';
  }
  function selectStyleHandler() {
    dispatch((0, _productSlice.selectStyle)(style.style_id));
    dispatch((0, _productSlice.selectImage)([style.style_id, 0, style.photos[0].thumbnail_url, style.photos[0].url]));
  }
  var thumbnailRender = /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    src: thumbnailURL,
    className: styleSelectorStyle
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 col-span-1 h-16 w-16"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": style.style_id,
    className: "relative",
    onClick: selectStyleHandler
  }, thumbnailRender, /*#__PURE__*/_react["default"].createElement("div", {
    className: selectedMarker
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "relative -top-2 fa fa-solid fa-check text-white text-xs font-bold"
  }))));
}
var _default = StyleSelector;
exports["default"] = _default;
StyleSelector.propTypes = {
  style: _propTypes["default"].shape({
    style_id: _propTypes["default"].number.isRequired,
    photos: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      thumbnail_url: _propTypes["default"].string,
      url: _propTypes["default"].string
    })).isRequired
  }).isRequired
};

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/thumbnailCard.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/thumbnailCard.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _scrollCarousel = _interopRequireDefault(__webpack_require__(/*! ../scripts/scrollCarousel */ "./client/src/components/productOverview/scripts/scrollCarousel.js"));
function ThumbnailCard(_ref) {
  var thumbnail = _ref.thumbnail,
    index = _ref.index;
  var dispatch = (0, _reactRedux.useDispatch)();
  var thumbnailURL = thumbnail[2];
  var selectedImage = (0, _reactRedux.useSelector)(function (state) {
    return state.product.selectedImage;
  });
  var thumbnailCardStyle = 'object-cover rounded-md bg-gray-300 h-14 w-14';
  if (selectedImage[0] === thumbnail[0] && selectedImage[1] === thumbnail[1]) {
    thumbnailCardStyle += ' image-selected dark:image-selected-dark';
    (0, _scrollCarousel["default"])(index - 3, true);
  }
  var thumbnailRender = /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    src: thumbnailURL,
    className: thumbnailCardStyle
  });
  function selectImageHandler() {
    dispatch((0, _productSlice.selectImage)(thumbnail));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "snap-always snap-start"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": thumbnail[0],
    onClick: selectImageHandler
  }, thumbnailRender));
}
var _default = ThumbnailCard;
exports["default"] = _default;
ThumbnailCard.propTypes = {
  thumbnail: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])).isRequired,
  index: _propTypes["default"].number.isRequired
};

/***/ }),

/***/ "./client/src/components/productOverview/subComponents/thumbnailCarousel.jsx":
/*!***********************************************************************************!*\
  !*** ./client/src/components/productOverview/subComponents/thumbnailCarousel.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _thumbnailCard = _interopRequireDefault(__webpack_require__(/*! ./thumbnailCard */ "./client/src/components/productOverview/subComponents/thumbnailCard.jsx"));
var _scrollCarousel = _interopRequireDefault(__webpack_require__(/*! ../scripts/scrollCarousel */ "./client/src/components/productOverview/scripts/scrollCarousel.js"));
function ThumbnailCarousel() {
  var thumbnailList = [];
  var thumbnailCarouselStyle = 'absolute top-4 left-2';
  (0, _reactRedux.useSelector)(function (state) {
    return state.product.styles;
  }).forEach(function (style) {
    thumbnailList = thumbnailList.concat(style.photos.map(function (photo, index) {
      return [style.style_id, index, photo.thumbnail_url, photo.url];
    }));
  });
  var galleryStyle = 'w-24 h-[435px] overflow-y-hidden snap-y p-2';
  function scrollUpHandler() {
    (0, _scrollCarousel["default"])(-7, false);
  }
  function scrollDownHandler() {
    (0, _scrollCarousel["default"])(7, false);
  }
  var thumbnailCards = thumbnailList.map(function (thumbnail, index) {
    var key = "Carousel-".concat(thumbnail[0], "-").concat(thumbnail[1]);
    return /*#__PURE__*/_react["default"].createElement(_thumbnailCard["default"], {
      thumbnail: thumbnail,
      index: index,
      key: key
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: thumbnailCarouselStyle
  }, thumbnailList.length > 7 ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "scroll up",
    className: "mx-7",
    onClick: scrollUpHandler
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-caret-up text-3xl text-secondary-100 hover:text-secondary-200 dark:text-primary-100 dark:hover:text-primary-200"
  })) : null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "carousel-body",
    className: galleryStyle
  }, thumbnailCards), thumbnailList.length > 7 ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "scroll down",
    className: "mx-7",
    onClick: scrollDownHandler
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-caret-down text-3xl text-secondary-100 hover:text-secondary-200 dark:text-primary-100 dark:hover:text-primary-200"
  })) : null);
}
var _default = ThumbnailCarousel;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/index.jsx":
/*!**********************************************************!*\
  !*** ./client/src/components/questionsAnswers/index.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _Button = _interopRequireDefault(__webpack_require__(/*! @modular/Button */ "./client/src/modular/Button.jsx"));
var _Search = _interopRequireDefault(__webpack_require__(/*! ./subComponents/Search */ "./client/src/components/questionsAnswers/subComponents/Search.jsx"));
var _QuestionsList = _interopRequireDefault(__webpack_require__(/*! ./subComponents/QuestionsList */ "./client/src/components/questionsAnswers/subComponents/QuestionsList.jsx"));
var _MoreAnsweredQuestions = _interopRequireDefault(__webpack_require__(/*! ./subComponents/MoreAnsweredQuestions */ "./client/src/components/questionsAnswers/subComponents/MoreAnsweredQuestions.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
function QuestionsAnswers() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var id = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  var toggleModal = function toggleModal() {
    dispatch((0, _modalSlice.setModalProps)({}));
    dispatch((0, _modalSlice.setModalType)('AddQuestionForm'));
    dispatch((0, _modalSlice.toggle)());
  };
  var API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/';
  var API_CONFIG = {
    params: {
      product_id: id,
      page: 1,
      count: 200
    },
    headers: {
      Authorization: "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"
    }
  };
  (0, _react.useEffect)(function () {
    axios.get(API_URL, API_CONFIG).then(function (res) {
      dispatch((0, _qnaSlice.saveGetResults)(res.data));
    })["catch"](function (err) {
      throw new Error(err);
    });
  }, [id]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "QUESTIONS & ANSWERS"), /*#__PURE__*/_react["default"].createElement(_Search["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "questionList max-h-[65vh] overflow-auto"
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n            .questionList::-webkit-scrollbar {\n              width: 1vh;\n              height: 2vh;\n            }\n            .questionList::-webkit-scrollbar-thumb {\n              background-color: rgb(97 32 216);\n              border-radius: 6px;\n            }\n            .questionList::-webkit-scrollbar-button {\n              display: none;\n            }\n            .questionList::-webkit-scrollbar-track {\n              background-color: #fff;\n              border-radius: 6px;\n            }\n          "), /*#__PURE__*/_react["default"].createElement(_QuestionsList["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3 ml-5 flex gap-3"
  }, /*#__PURE__*/_react["default"].createElement(_MoreAnsweredQuestions["default"], null), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    content: "ADD A QUESTION",
    styleOverride: "text-center",
    onClick: toggleModal
  })));
}
var _default = QuestionsAnswers;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/AddAnswerForm.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/AddAnswerForm.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
var _placeHolder = _interopRequireDefault(__webpack_require__(/*! @images/place-holder.jpg */ "./client/src/assets/images/place-holder.jpg"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _formData = _interopRequireDefault(__webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js"));
var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function AddAnswerForm(_ref) {
  var qBodyId = _ref.qBodyId;
  var _useState = (0, _react.useState)([0]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    images = _useState2[0],
    setImages = _useState2[1];
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.product;
    }),
    name = _useSelector.name;
  var dispatch = (0, _reactRedux.useDispatch)();
  var photosArr = [];

  // const uploadPhotos = () => {
  //   // TODO: add photo links to photosArr
  // };

  // const getImage = (e) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (images[0] === 0) {
  //       setImages(() => [reader.result]);
  //     } else {
  //       setImages((current) => [...current, reader.result]);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  var uploadImageToImgur = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(imageData) {
      var data, config, response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = new _formData["default"]();
            data.append('image', imageData);
            config = {
              method: 'post',
              url: 'https://api.imgur.com/3/image',
              headers: {
                Authorization: 'Bearer 72f560c29407c932a0b76f8a1adc287ed03ae950',
                Cookie: 'IMGURSESSION=494f1e879f30e1625de8cb15b931bd92; _nc=1',
                'Content-Type': 'multipart/form-data'
              },
              data: data
            };
            _context.prev = 3;
            _context.next = 6;
            return (0, _axios["default"])(config);
          case 6:
            response = _context.sent;
            console.log(response.data.data.link);
            if (images[0] === 0) {
              setImages(function () {
                return [response.data.data.link];
              });
            } else {
              setImages(function (current) {
                return [].concat((0, _toConsumableArray2["default"])(current), [response.data.data.link]);
              });
            }
            photosArr.push(response.data.data.link);
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12]]);
    }));
    return function uploadImageToImgur(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleImageUpload = function handleImageUpload(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      var base64Data = reader.result.replace(/^data:image\/\w+;base64,/, '');
      uploadImageToImgur(base64Data);
    };
    reader.readAsDataURL(file);
  };
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var API_URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/".concat(qBodyId.qId, "/answers");
    var API_CONFIG = {
      headers: {
        Authorization: "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"
      },
      params: {
        question_id: qBodyId.qId
      }
    };
    var API_DATA = {
      body: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      photos: photosArr
    };
    var payload = {
      qId: qBodyId.qId,
      answerData: {
        answerer_name: e.target[1].value,
        body: e.target[0].value,
        date: new Date(),
        helpfulness: 0,
        photos: photosArr
      }
    };
    _axios["default"].post(API_URL, API_DATA, API_CONFIG).then(function (postRes) {
      console.log('POST RES: ', postRes);
      // axios.get(API_URL, API_CONFIG)
      //   .then((res) => {
      //     dispatch(saveGetResults(res.data));
      //   })
      //   .catch((err) => {
      //     throw new Error(err);
      //   });
    })["catch"](function (err) {
      console.log('ERROR: ', err);
    });
    dispatch((0, _qnaSlice.updateQAndA)(payload));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold"
  }, "Submit Your Answer"), /*#__PURE__*/_react["default"].createElement("h5", null, name, ":\xA0", qBodyId.qBody), /*#__PURE__*/_react["default"].createElement("form", {
    className: "m-[5%]",
    onSubmit: submitHandler
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourQuestion my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Your Answer", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "4",
    cols: "50",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100  p-2",
    maxLength: "1000",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourNickname my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "What is your nickname?", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100 font-xs p-2",
    maxLength: "60",
    placeholder: "Example: jackson543!",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block text-gray-700 dark:text-stone-300"
  }, "For privacy reasons, do not use your full name or email address")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourEmail my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Your email", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100 p-2",
    maxLength: "60",
    placeholder: "Example: jack@email.com",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block text-gray-700 dark:text-stone-300"
  }, "For authentication reasons, you will not be emailed")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "uploadPhotos my-7"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "thumbnails my-2 py-2 px-1 col-span-5 grid grid-cols-5 gap-2 items-center justify-items-center border rounded-md dark:bg-secondary-100 border-secondary-300 dark:border-primary-300 font-xs border p-1 rounded",
    id: "getImage"
  }, images.map(function (image, index) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      className: "my-2",
      id: "outputImage-".concat(index),
      key: "outputImage-".concat(index),
      alt: "outputImage-".concat(index),
      onError: function onError(e) {
        e.target.src = _placeHolder["default"];
      },
      src: image,
      style: {
        maxHeight: '4em',
        maxWidth: '4em'
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "uploadButton my-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "actualButton",
    className: "styledUploadButton hover:bg-primary-100 dark:hover:bg-secondary-300 border border-secondary-300 dark:border-primary-300 text-secondary-300 dark:text-primary-300 rounded p-2"
  }, images.length < 5 && /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    id: "actualButton",
    name: "filename",
    accept: "image/*",
    onChange: handleImageUpload,
    multiple: true,
    hidden: true
  }), /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-plus text-secondary-300 dark:text-primary-300"
  }), "\xA0 Upload a photo"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "submitAnswer flex justify-end mt-10"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "object-right-bottom bg-secondary-300 dark:bg-primary-300 hover:bg-primary-200 dark:hover:bg-primary-200 rounded text-white dark:text-secondary-200 hover:text-secondary-300 p-2"
  }, "Submit Answer"))));
}
AddAnswerForm.propTypes = {
  qBodyId: _propTypes["default"].shape({
    qBody: _propTypes["default"].string.isRequired,
    qId: _propTypes["default"].number.isRequired
  }).isRequired
};
var _default = AddAnswerForm;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/AddQuestionForm.jsx":
/*!**********************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/AddQuestionForm.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
function AddQuestionForm(_ref) {
  var props = _ref.props;
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.product;
    }),
    name = _useSelector.name,
    id = _useSelector.id;
  console.log('props: ', props);
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/';
    var API_CONFIG = {
      headers: {
        Authorization: "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"
      }
    };
    var API_DATA = {
      body: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      product_id: id
    };
    axios.post(API_URL, API_DATA, API_CONFIG).then(function (res) {
      console.log('POST RES: ', res);
    })["catch"](function (err) {
      throw new Error('ERROR: ', err);
    });

    // dispatch(updateQAndA(API_DATA));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "addQuestion",
    className: "m-5"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-xl font-bold text-gray-700 dark:text-stone-300"
  }, "Ask Your Question"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "font-semibold text-gray-700 dark:text-stone-300"
  }, "about the\xA0", name), /*#__PURE__*/_react["default"].createElement("form", {
    className: "m-[5%]",
    onSubmit: submitHandler
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourQuestion my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 dark:text-stone-300"
  }, "Your Question", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: "4",
    cols: "50",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100 p-2",
    maxLength: "1000",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourNickname my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 dark:text-stone-300"
  }, "What is your nickname?", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100  font-xs p-2",
    maxLength: "60",
    placeholder: "Example: jackson11!",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block text-gray-700 dark:text-stone-300"
  }, "For privacy reasons, do not use your full name or email address")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "yourEmail my-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 dark:text-stone-300"
  }, "Your email", /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    className: "w-full border rounded-md border-gray-500 dark:bg-secondary-100  p-2",
    maxLength: "60",
    placeholder: "Example: jackson@email.com",
    required: true
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block text-gray-700 dark:text-stone-300"
  }, "For authentication reasons, you will not be emailed")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "submitQuestion flex justify-end mt-10"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "object-right-bottom bg-secondary-300 dark:bg-primary-300 hover:bg-primary-200 dark:hover:bg-primary-200 rounded text-white dark:text-secondary-200 hover:text-secondary-300 p-2"
  }, "Submit Question"))));
}
var _default = AddQuestionForm;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/AnswerEntry.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/AnswerEntry.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
function AnswerEntry(_ref) {
  var answerData = _ref.answerData;
  var answererName = answerData.answerer_name.toLowerCase() === 'Seller' ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold text-violet-700"
  }, "Seller") : /*#__PURE__*/_react["default"].createElement("span", null, answerData.answerer_name);
  var date = new Date(answerData.date);
  var formattedDate = "".concat(date.toLocaleString('default', {
    month: 'long'
  }), " ").concat(date.getDate(), ", ").concat(date.getFullYear());
  var markHelpful = function markHelpful() {
    // mark helpful
  };
  var markReported = function markReported() {
    // mark helpful
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 dark:text-gray-300",
    style: {
      wordBreak: 'break-word'
    }
  }, answerData.body)), /*#__PURE__*/_react["default"].createElement("div", {
    className: ""
  }, /*#__PURE__*/_react["default"].createElement("small", {
    className: "inline-block"
  }, "by \xA0", answererName, ", \xA0", formattedDate, "\xA0\xA0"), /*#__PURE__*/_react["default"].createElement("small", {
    className: "inline-block border-l border-solid border-gray-500"
  }, "\xA0\xA0 Helpful? \xA0", /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "underline text-secondary-200 dark:text-secondary-300 hover:text-violet-600 dark:hover:text-primary-300",
    onClick: markHelpful
  }, "Yes"), "\xA0(", answerData.helpfulness, ") \xA0\xA0"), /*#__PURE__*/_react["default"].createElement("small", {
    className: "inline-block border-l border-solid border-gray-500"
  }, "\xA0\xA0\xA0", /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "underline text-secondary-200 dark:text-secondary-300 hover:text-violet-600 dark:hover:text-primary-300",
    onClick: markReported
  }, "Report"))));
}
AnswerEntry.propTypes = {
  answerData: _propTypes["default"].shape({
    answerer_name: _propTypes["default"].string.isRequired,
    body: _propTypes["default"].string.isRequired,
    date: _propTypes["default"].string.isRequired,
    helpfulness: _propTypes["default"].number.isRequired,
    id: _propTypes["default"].number.isRequired
  }).isRequired
};
var _default = AnswerEntry;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/AnswersList.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/AnswersList.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _AnswerEntry = _interopRequireDefault(__webpack_require__(/*! ./AnswerEntry */ "./client/src/components/questionsAnswers/subComponents/AnswerEntry.jsx"));
function AnswersList(_ref) {
  var answersObj = _ref.answersObj,
    qId = _ref.qId;
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.qna;
    }),
    aViewExpanded = _useSelector.aViewExpanded;
  var dispatch = (0, _reactRedux.useDispatch)();
  var isOpen = aViewExpanded[qId] || false;
  var buttonText = aViewExpanded[qId] ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS';
  var answerKeys = Object.keys(answersObj);
  var allAnswers = [];
  for (var i = 0; i < answerKeys.length; i += 1) {
    allAnswers.push(answersObj[answerKeys[i]]);
  }
  var sortedAnswers = allAnswers.sort(function (a, b) {
    if (a.answerer_name.toLowerCase() === 'seller' && b.answerer_name.toLowerCase() !== 'seller') {
      return -1;
    }
    if (b.answerer_name.toLowerCase() === 'seller' && a.answerer_name.toLowerCase() !== 'seller') {
      return 1;
    }
    return b.helpfulness - a.helpfulness;
  });
  var viewAnswers = [];
  if (answerKeys.length) {
    var aViewLength = 1;
    if (answerKeys.length > 1) {
      aViewLength = isOpen ? answerKeys.length : 2;
    }
    for (var j = 0; j < aViewLength; j += 1) {
      viewAnswers.push(sortedAnswers[j]);
    }
  }
  function handleClick(e) {
    e.preventDefault();
    isOpen = !isOpen;
    var payload = {
      qId: e.target.attributes.value.value,
      opened: isOpen
    };
    dispatch((0, _qnaSlice.expandAnswers)(payload));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "answerList max-h-[35vh] overflow-auto border border-primary-200 dark:border-neutral-500 rounded p-3"
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n          .answerList::-webkit-scrollbar {\n            width: 0.75vh;\n            height: 2vh;\n          }\n          .answerList::-webkit-scrollbar-thumb {\n            background-color: rgb(97 32 216);\n            border-radius: 6px;\n          }\n          .answerList::-webkit-scrollbar-button {\n            display: none;\n          }\n          .answerList::-webkit-scrollbar-track {\n            background-color: #e5f4ff;\n            border-radius: 6px;\n          }\n        "), /*#__PURE__*/_react["default"].createElement("div", null, viewAnswers.map(function (a) {
    return /*#__PURE__*/_react["default"].createElement(_AnswerEntry["default"], {
      className: "answerEntry",
      answerData: a,
      key: a.id
    });
  })), answerKeys.length > 2 ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "dark:text-stone-400 hover:text-secondary-300 dark:hover:text-primary-300 text-xs font-semibold",
    value: qId,
    onClick: handleClick
  }, buttonText) : null);
}
AnswersList.propTypes = {
  answersObj: _propTypes["default"].shape({
    answerer_name: _propTypes["default"].string,
    body: _propTypes["default"].string,
    date: _propTypes["default"].string,
    helpfulness: _propTypes["default"].number,
    id: _propTypes["default"].number
  }).isRequired,
  qId: _propTypes["default"].number.isRequired
};
var _default = AnswersList;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/MoreAnsweredQuestions.jsx":
/*!****************************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/MoreAnsweredQuestions.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
var _Button = _interopRequireDefault(__webpack_require__(/*! @modular/Button */ "./client/src/modular/Button.jsx"));
function MoreAnsweredQuestions() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.qna;
    }),
    allQuestions = _useSelector.allQuestions,
    viewQuestions = _useSelector.viewQuestions;
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleClick = function handleClick(e) {
    e.preventDefault();
    dispatch((0, _qnaSlice.loadMoreQuestions)());
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    role: "button"
  }, viewQuestions.length < allQuestions.length ? /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    name: "loadMoreQs",
    content: "MORE ANSWERED QUESTIONS",
    onClick: handleClick
  }) : null);
}
var _default = MoreAnsweredQuestions;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/QuestionEntry.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/QuestionEntry.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _AnswersList = _interopRequireDefault(__webpack_require__(/*! ./AnswersList */ "./client/src/components/questionsAnswers/subComponents/AnswersList.jsx"));
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
function QuestionEntry(_ref) {
  var q = _ref.q;
  var API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/:question_id/helpful';
  var API_CONFIG = {
    params: {
      question_id: q.question_id
    },
    headers: {
      Authorization: "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"
    }
  };

  // * Use localStorage.getItem(), setItem(), and removeItem()
  var markHelpful = function markHelpful() {
    //   axios.put(API_URL, API_CONFIG)
    //     .then((res) => {
    //       console.log('res: ', res);
    //     })
    //     .catch((err) => {
    //       console.log('error: ', err);
    //     });
  };
  var qBodyId = {
    qBody: q.question_body,
    qId: q.question_id
  };
  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleModal = function toggleModal() {
    dispatch((0, _modalSlice.setModalProps)({
      qBodyId: qBodyId
    }));
    dispatch((0, _modalSlice.setModalType)('AddAnswerForm'));
    dispatch((0, _modalSlice.toggle)());
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-[1fr_75px] gap-4 p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "questionEntry grid grid-cols-[35px_1fr] rounded-lg border border-primary-300 bg-white dark:bg-stone-950 p-4"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-gray-700 dark:text-gray-300 font-semibold"
  }, "Q: "), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-gray-700 dark:text-gray-300 font-semibold",
    style: {
      wordBreak: 'break-word'
    }
  }, q.question_body), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "mt-[30px] text-gray-700 dark:text-gray-300 font-semibold"
  }, "A: "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react["default"].createElement(_AnswersList["default"], {
    className: "answersList",
    answersObj: q.answers,
    qId: q.question_id
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col pt-4"
  }, /*#__PURE__*/_react["default"].createElement("small", {
    className: "mb-3"
  }, "Helpful?\xA0\xA0", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "underline text-secondary-200 dark:text-secondary-300 hover:text-violet-600 dark:hover:text-primary-300",
    onClick: markHelpful
  }, "Yes"), "\xA0(", q.question_helpfulness, ")"), /*#__PURE__*/_react["default"].createElement("small", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "underline text-secondary-200 dark:text-secondary-300 hover:text-violet-600 dark:hover:text-primary-300",
    onClick: toggleModal
  }, "Add Answer"))));
}
QuestionEntry.propTypes = {
  q: _propTypes["default"].shape({
    question_body: _propTypes["default"].string.isRequired,
    question_helpfulness: _propTypes["default"].number.isRequired,
    answers: _propTypes["default"].shape({
      id: _propTypes["default"].shape({
        answerer_name: _propTypes["default"].string,
        body: _propTypes["default"].string,
        date: _propTypes["default"].string,
        helpfulness: _propTypes["default"].number,
        id: _propTypes["default"].number
      })
    }).isRequired,
    question_id: _propTypes["default"].number.isRequired
  }).isRequired
};
var _default = QuestionEntry;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/QuestionsList.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/QuestionsList.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _QuestionEntry = _interopRequireDefault(__webpack_require__(/*! ./QuestionEntry */ "./client/src/components/questionsAnswers/subComponents/QuestionEntry.jsx"));
function QuestionsList() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.qna;
    }),
    viewQuestions = _useSelector.viewQuestions;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "questionsList"
  }, viewQuestions.length === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 text-gray-600 dark:text-stone-300"
  }, "No results available.") : /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "qEntries"
  }, viewQuestions.map(function (q) {
    return /*#__PURE__*/_react["default"].createElement(_QuestionEntry["default"], {
      q: q,
      key: q.question_id
    });
  })));
}
var _default = QuestionsList;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/questionsAnswers/subComponents/Search.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/components/questionsAnswers/subComponents/Search.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _qnaSlice = __webpack_require__(/*! @reducers/qnaSlice */ "./client/src/reducers/qnaSlice.js");
function Search() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleChange = function handleChange(e) {
    e.preventDefault();
    dispatch((0, _qnaSlice.search)(e.target.value));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "searchbar",
    className: "m-4"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    className: "flex bg-white dark:bg-stone-950 border-solid border-[3px] border-secondary-300 dark:border-primary-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grow"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "ml-4 w-full dark:bg-stone-950 dark:text-stone-300 h-10 outline-none",
    placeholder: "Have a question? Search for answers...",
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa-solid fa-magnifying-glass my-auto text-secondary-300 dark:text-primary-300 px-3"
  })));
}
var _default = Search;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/index.jsx":
/*!********************************************************!*\
  !*** ./client/src/components/ratingsReviews/index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _reviewSlice = __webpack_require__(/*! @reducers/reviewSlice */ "./client/src/reducers/reviewSlice.js");
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _RatingsBreakdown = _interopRequireDefault(__webpack_require__(/*! ./subComponents/RatingsBreakdown */ "./client/src/components/ratingsReviews/subComponents/RatingsBreakdown.jsx"));
var _ProductBreakdown = _interopRequireDefault(__webpack_require__(/*! ./subComponents/ProductBreakdown */ "./client/src/components/ratingsReviews/subComponents/ProductBreakdown.jsx"));
var _SortOptions = _interopRequireDefault(__webpack_require__(/*! ./subComponents/SortOptions */ "./client/src/components/ratingsReviews/subComponents/SortOptions.jsx"));
var _ReviewList = _interopRequireDefault(__webpack_require__(/*! ./subComponents/ReviewList */ "./client/src/components/ratingsReviews/subComponents/ReviewList.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RatingsReviews() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _reviewSlice.getReviewsAsync)());
  }, [productID]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "ratingsReviews"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "breakdown",
    className: "w-full md:w-2/5 text-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4 flex flex-col sm:flex-row md:flex-col mx-auto gap-4 md:gap-0 md:items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow"
  }, /*#__PURE__*/_react["default"].createElement(_RatingsBreakdown["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-4 my-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full md:w-auto md:ml-4"
  }, /*#__PURE__*/_react["default"].createElement(_ProductBreakdown["default"], null))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "reviews",
    className: "w-full md:w-3/5  mr-1em sm:ml-[30px] ml-[0px]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement(_SortOptions["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full max-w-full overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement(_ReviewList["default"], null)))));
}
var _default = RatingsReviews;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/scripts/API_Helper.js":
/*!********************************************************************!*\
  !*** ./client/src/components/ratingsReviews/scripts/API_Helper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = markAsHelpful;
exports.postReview = postReview;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
var API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews';
var API_CONFIG = {
  headers: {
    Authorization: "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"
  }
};
function markAsHelpful(_x) {
  return _markAsHelpful.apply(this, arguments);
}
function _markAsHelpful() {
  _markAsHelpful = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(reviewId) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios.put("".concat(API_URL, "/").concat(reviewId, "/helpful"), {}, API_CONFIG);
        case 2:
          response = _context.sent;
          console.log(response.status);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _markAsHelpful.apply(this, arguments);
}
function postReview(_x2) {
  return _postReview.apply(this, arguments);
}
function _postReview() {
  _postReview = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(reviewObj) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios.post("".concat(API_URL), reviewObj, API_CONFIG);
        case 2:
          response = _context2.sent;
          console.log(response.status);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _postReview.apply(this, arguments);
}

/***/ }),

/***/ "./client/src/components/ratingsReviews/scripts/characteristicsMeaning.js":
/*!********************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/scripts/characteristicsMeaning.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var characteristicsMeaning = {
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too wide'
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide'
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect'
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect'
  },
  Length: {
    1: 'Runs Short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long'
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long'
  }
};
var _default = characteristicsMeaning;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/NewReviewModal.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/NewReviewModal.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _StarRatingView = _interopRequireDefault(__webpack_require__(/*! @modular/StarRatingView */ "./client/src/modular/StarRatingView.jsx"));
var _placeHolder = _interopRequireDefault(__webpack_require__(/*! @images/place-holder.jpg */ "./client/src/assets/images/place-holder.jpg"));
var _formData = _interopRequireDefault(__webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js"));
var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs"));
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _API_Helper = __webpack_require__(/*! ../scripts/API_Helper */ "./client/src/components/ratingsReviews/scripts/API_Helper.js");
var _characteristicsMeaning = _interopRequireDefault(__webpack_require__(/*! ../scripts/characteristicsMeaning */ "./client/src/components/ratingsReviews/scripts/characteristicsMeaning.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function NewReviewModal() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.reviews.metaData;
    }),
    characteristics = _useSelector.characteristics;
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    enteredCharacteristics = _useState2[0],
    setEnteredCharacteristics = _useState2[1];
  var isDarkTheme = (0, _reactRedux.useSelector)(function (state) {
    return state.theme.isDarkTheme;
  });
  var prodId = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    recommend = _useState4[0],
    setRecommend = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    nickName = _useState6[0],
    setNickName = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    summary = _useState8[0],
    setSummary = _useState8[1];
  var _useState9 = (0, _react.useState)([0]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    images = _useState10[0],
    setImages = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    rating = _useState12[0],
    setRating = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    email = _useState14[0],
    setEmail = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    body = _useState16[0],
    setBody = _useState16[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  var handleCharacteristicChange = function handleCharacteristicChange(characteristic, value) {
    setEnteredCharacteristics(_objectSpread(_objectSpread({}, enteredCharacteristics), {}, (0, _defineProperty2["default"])({}, characteristic, value)));
  };
  var handleInputChange = function handleInputChange(setStateFunc, maxLength, e) {
    e.preventDefault();
    setStateFunc(e.target.value);
    if (e.target.value.length === maxLength) {
      window.alert("Input shouldn't exceed ".concat(maxLength, " characters"));
    }
  };
  (0, _react.useEffect)(function () {
    // add event listener to all star elements with parent div of freeContent
    var freeContentStars = isDarkTheme ? document.querySelectorAll('#stars .Dstar') : document.querySelectorAll('#stars .star');
    freeContentStars.forEach(function (star, index) {
      star.addEventListener('click', function () {
        setRating(index + 1);
      });
    });
  }, []);
  var uploadImageToImgur = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(imageData) {
      var data, config, response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = new _formData["default"]();
            data.append('image', imageData);
            config = {
              method: 'post',
              url: 'https://api.imgur.com/3/image',
              headers: {
                Authorization: 'Bearer 72f560c29407c932a0b76f8a1adc287ed03ae950',
                Cookie: 'IMGURSESSION=494f1e879f30e1625de8cb15b931bd92; _nc=1',
                'Content-Type': 'multipart/form-data'
              },
              data: data
            };
            _context.prev = 3;
            _context.next = 6;
            return (0, _axios["default"])(config);
          case 6:
            response = _context.sent;
            console.log(response.data.data.link);
            if (images[0] === 0) {
              setImages(function () {
                return [response.data.data.link];
              });
            } else {
              setImages(function (current) {
                return [].concat((0, _toConsumableArray2["default"])(current), [response.data.data.link]);
              });
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11]]);
    }));
    return function uploadImageToImgur(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleImageUpload = function handleImageUpload(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      var base64Data = reader.result.replace(/^data:image\/\w+;base64,/, '');
      uploadImageToImgur(base64Data);
    };
    reader.readAsDataURL(file);
  };
  var handlePostNewReview = function handlePostNewReview() {
    var submitCharacteristics = Object.entries(enteredCharacteristics).reduce(function (acc, _ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      var characteristic = characteristics[key];
      acc[characteristic.id] = enteredCharacteristics[key].value;
      return acc;
    }, {});
    var postObj = {
      product_id: prodId,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: nickName,
      email: email,
      photos: images,
      characteristics: submitCharacteristics
    };
    var mandatoryFields = [{
      field: 'rating',
      message: 'Rating'
    }, {
      field: 'body',
      message: 'Review Body'
    }, {
      field: 'email',
      message: 'Email Address'
    }];
    var invalidFields = [];
    mandatoryFields.forEach(function (field) {
      if (!postObj[field.field]) {
        invalidFields.push(field.message);
      }
    });
    if (body.length < 50) {
      invalidFields.push('Review body must be at least 50 characters long');
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      invalidFields.push('Email address is not valid');
    }
    if (images.some(function (image) {
      return !image;
    })) {
      invalidFields.push('Some images are invalid or unable to be uploaded');
    }
    if (invalidFields.length > 0) {
      window.alert("You must enter the following: ".concat(invalidFields.join(', ')));
      return;
    }
    (0, _API_Helper.postReview)(postObj);
    dispatch((0, _modalSlice.toggle)());
  };
  var renderStarsSwitch = function renderStarsSwitch() {
    switch (rating) {
      case 1:
        return 'Poor';
      case 2:
        return 'Fair';
      case 3:
        return 'Average';
      case 4:
        return 'Good';
      case 5:
        return 'Great';
      default:
        return '';
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "newReviewModel",
    className: "px-1 w-[min-content] mx-3"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handlePostNewReview();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "freeContent",
    className: "grid grid-rows-3 gap-2 mt-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:ml-4 grid items-end md:grid-cols-2 grid-cols-1 justify-items-center pt-2 py-3 text-xl sm:text-xl md:text-2xl lg:text-4xl",
    id: "overallRating"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "stars",
    className: "flex md:inline-flex md:justify-self-start border rounded-md border-gray-500 font-xs border p-1 rounded bg-stone-100 dark:bg-stone-500"
  }, /*#__PURE__*/_react["default"].createElement(_StarRatingView["default"], {
    averageRating: rating
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-3"
  }, renderStarsSwitch())), /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-auto"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "grid md:grid-cols-2 grid-cols-1 justify-items-center items-end"
  }, "Do you recommend this product?"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 grid-cols-1 justify-center justify-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "radio flex justify-center justify-items-center gap-3"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "mx-2",
    htmlFor: "radioYes"
  }, "Yes", /*#__PURE__*/_react["default"].createElement("input", {
    "data-testid": "radioYes",
    type: "radio",
    id: "radioYes",
    name: "recommend",
    className: "mx-2",
    value: "yes",
    onChange: function onChange() {
      return setRecommend(true);
    }
  })), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "radioNo"
  }, "No", /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: "radioNo",
    name: "recommend",
    className: "mx-2",
    value: "no",
    onChange: function onChange() {
      return setRecommend(false);
    }
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "characteristics",
    className: "flex flex-col mb-5 flex-center",
    style: {
      alignItems: 'center',
      borderWidth: 'medium',
      borderStyle: 'ridge',
      borderRadius: '5px',
      backgroundColor: 'lightgrey',
      padding: '1em'
    }
  }, Object.entries(characteristics).map(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
      key = _ref5[0],
      value = _ref5[1];
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: value.id,
      className: "border p-3 mb-3 w-[max-content] bg-[#f5f5f5] dark:bg-[#110029]",
      style: {
        borderStyle: 'outset',
        borderWidth: '3px'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-span-1 flex items-center"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-center block font-bold w-24"
    }, key)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center mb-2"
    }, enteredCharacteristics[key] ? _characteristicsMeaning["default"][key][enteredCharacteristics[key]] : 'none selected'), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-span-4 grid grid-cols-5 gap-2 items-center"
    }, [1, 2, 3, 4, 5].map(function (num) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: num,
        className: "col-span-1 flex flex-col items-center"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "radio-".concat(key, "-").concat(num),
        className: "block w-full border rounded-md border-gray-200 font-xs border p-1 rounded text-center lg:w-[6em] sm:w-[10vw] w-[3em]",
        style: {
          padding: '4px'
        },
        maxLength: 60
      }, num), /*#__PURE__*/_react["default"].createElement("input", {
        type: "radio",
        value: num,
        id: "radio-".concat(key, "-").concat(num),
        checked: enteredCharacteristics[key] === num.toString(),
        onChange: function onChange() {
          return handleCharacteristicChange(key, num.toString());
        },
        style: {
          minWidth: '16px',
          width: 'calc(100% - 8px)',
          margin: '4px 0'
        }
      }));
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-span-5 grid grid-cols-5 gap-2 items-center"
    }, [1, 2, 3, 4, 5].map(function (num) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: num,
        id: "".concat(key, "-range"),
        className: "col-span-1 flex flex-col items-center"
      }, (num === 1 || num === 5) && /*#__PURE__*/_react["default"].createElement("span", {
        className: "block font-xs p-1 text-center lg:w-[6em] sm:w-[10vw] w-[3em]"
      }, _characteristicsMeaning["default"][key][num]));
    }))));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 mx-3",
    id: "summary"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "summaryInput",
    className: "block w-full border rounded-md border-gray-500 font-xs",
    style: {
      padding: '4px'
    },
    maxLength: 60
  }, "Summary:", /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "summaryInput",
    className: "w-full border rounded-md border-gray-500 px-[0.25em]",
    placeholder: "Example: Best purchase ever!",
    maxLength: "60",
    value: summary,
    id: "summaryInput",
    onChange: function onChange(e) {
      handleInputChange(setSummary, 60, e);
    }
    // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex justify-end"
  }, "".concat(summary.length, "/60")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-4 mx-3",
    id: "body"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "bodyInput",
    className: "block w-full border rounded-md border-gray-500 font-xs",
    style: {
      padding: '4px'
    },
    maxLength: 1000
  }, "Review:", /*#__PURE__*/_react["default"].createElement("textarea", {
    id: "bodyInput",
    name: "bodyInput",
    rows: "4",
    cols: "50",
    className: "w-full border rounded-md border-gray-500 px-[0.25em]",
    placeholder: "Why did you like the product or not?",
    maxLength: "1000",
    value: body,
    onChange: function onChange(e) {
      handleInputChange(setBody, 1000, e);
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex justify-end ".concat(body.length < 50 && 'text-red-600')
  }, "".concat(body.length, "/1000")))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 py-2 px-1 col-span-5 grid grid-cols-5 gap-2 items-center justify-items-center  border rounded-md border-gray-500 font-xs border p-1 rounded bg-violet-600",
    id: "getImage"
  }, images.map(function (image, idx) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      className: "my-2",
      id: "outputImage-".concat(idx),
      key: "outputImage-".concat(idx),
      alt: "outputImage-".concat(idx),
      onError: function onError(e) {
        e.target.src = _placeHolder["default"];
      },
      src: image,
      style: {
        maxHeight: '4em',
        maxWidth: '4em'
      }
    });
  })), images.length < 5 && /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handleImageUpload
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 mx-3",
    id: "nickName"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "nickNameInput",
    className: "block w-full border rounded-md border-gray-500 font-xs",
    style: {
      padding: '4px'
    },
    maxLength: 60
  }, "What is your nickname?", /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "nickNameInput",
    className: "w-full border rounded-md border-gray-500 px-[0.25em]",
    placeholder: "Example: jackson11",
    maxLength: "60",
    value: nickName,
    id: "nickNameInput",
    onChange: function onChange(e) {
      handleInputChange(setNickName, 60, e);
    }
    // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block"
  }, "For privacy reasons, do not use your full name or email address"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex justify-end"
  }, "".concat(nickName.length, "/60")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-2 mx-3",
    id: "email"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "emailInput",
    className: "block w-full border rounded-md border-gray-500 font-xs",
    style: {
      padding: '4px'
    },
    maxLength: 60
  }, "What is your email?", /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "email",
    className: "w-full border rounded-md border-gray-500 px-[0.25em]",
    placeholder: "Example: jackson11@email.com",
    maxLength: "60",
    value: email,
    id: "emailInput",
    onChange: function onChange(e) {
      handleInputChange(setEmail, 60, e);
    }
    // style={{ minWidth: '16px', width: 'calc(100% - 8px)', margin: '4px 0' }}
  }), /*#__PURE__*/_react["default"].createElement("small", {
    className: "block"
  }, "For authentication reasons, you will not be emailed"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex justify-end"
  }, "".concat(email.length, "/60")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center my-5"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "object-right-bottom bg-secondary-300 rounded text-white p-2"
  }, "Submit Review"))));
}
var _default = NewReviewModal;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/ProductBreakdown.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/ProductBreakdown.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _characteristicsMeaning = _interopRequireDefault(__webpack_require__(/*! ../scripts/characteristicsMeaning */ "./client/src/components/ratingsReviews/scripts/characteristicsMeaning.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ProductBreakdown() {
  var metaData = (0, _reactRedux.useSelector)(function (state) {
    return state.reviews.metaData;
  });
  var characteristics = metaData.characteristics;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-auto-rows"
  }, characteristics && Object.keys(characteristics).map(function (key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mb-[10px]",
      key: "".concat(key, "-").concat(characteristics[key].id)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      id: "ratingsLabel",
      className: "px-[10px]"
    }, "".concat(key)), /*#__PURE__*/_react["default"].createElement("div", {
      id: "ratingsContent"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      id: "ratingBar",
      style: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
        width: '200px',
        height: '15px',
        border: '1px solid grey',
        marginRight: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-stone-200 dark:bg-secondary-200",
      style: {
        display: 'inline-block',
        position: 'relative',
        width: "".concat(characteristics[key].value / 5 * 100, "%"),
        height: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-[#591cc0] dark:text-primary-200 fas fa-sharp fa-caret-down",
      style: {
        fontSize: '40.5pt',
        zIndex: '2',
        display: 'inline-block',
        position: 'absolute',
        left: '95%',
        top: '50%',
        transform: 'translateY(-53.8%)',
        backgroundColor: 'transparent'
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-stone-200 dark:bg-secondary-200",
      style: {
        zIndex: '1',
        display: 'inline-block',
        position: 'relative',
        width: "".concat(100 - characteristics[key].value / 5 * 100, "%"),
        height: '100%'
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '12px'
      }
    }, _characteristicsMeaning["default"][key][1]), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        display: 'flex',
        fontSize: '12px',
        marginLeft: 'auto'
      }
    }, _characteristicsMeaning["default"][key][5]))));
  })));
}
var _default = ProductBreakdown;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/RatingsBreakdown.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/RatingsBreakdown.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _reviewSlice = __webpack_require__(/*! @reducers/reviewSlice */ "./client/src/reducers/reviewSlice.js");
var _StarRatingView = _interopRequireDefault(__webpack_require__(/*! @modular/StarRatingView */ "./client/src/modular/StarRatingView.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RatingsBreakdown() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var reviews = (0, _reactRedux.useSelector)(function (state) {
    return state.reviews.data;
  });
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    filteredReviews = _useState2[0],
    setFilteredReviews = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    activeFilters = _useState4[0],
    setActiveFilters = _useState4[1];
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });

  // Calculate average rating
  var avgRating = reviews.reduce(function (total, review) {
    return total + review.rating;
  }, 0) / reviews.length;
  dispatch((0, _reviewSlice.setAverageRating)(avgRating));

  // Calculate rating breakdown
  var ratings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  reviews.forEach(function (review) {
    ratings[review.rating] += 1;
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _reviewSlice.setRenderedReviews)(reviews));
  }, [productID]);
  (0, _react.useEffect)(function () {
    dispatch((0, _reviewSlice.setRenderedReviews)(reviews));
  }, [reviews]);
  (0, _react.useEffect)(function () {
    dispatch((0, _reviewSlice.setRenderedReviews)(filteredReviews));
  }, [filteredReviews]);

  // Handle filter clicks
  var handleFilterClick = function handleFilterClick(rating) {
    var newFilters = (0, _toConsumableArray2["default"])(activeFilters);
    if (newFilters.includes(rating)) {
      newFilters = newFilters.filter(function (filter) {
        return filter !== rating;
      });
    } else {
      newFilters.push(rating);
    }
    setActiveFilters(newFilters);
    setFilteredReviews(reviews.filter(function (review) {
      return newFilters.includes(review.rating);
    }));
    document.getElementById('reviewList').scrollTo(0, 0);
  };

  // Clear all filters
  var clearFilters = function clearFilters() {
    setActiveFilters([]);
    setFilteredReviews(reviews);
    dispatch((0, _reviewSlice.setRenderedReviews)(reviews));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "RatingsBreakdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:ml-4 grid items-end grid-cols-1 justify-items-center pt-2 py-3 text-xl",
    id: "overallRating"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex md:inline-flex md:justify-self-start border rounded-md border-gray-500 font-xs p-1 bg-stone-100 dark:bg-stone-700 dark:border-gray-950"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement(_StarRatingView["default"], {
    averageRating: avgRating
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "mt-3"
  }, "".concat(reviews.length, " reviews")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-auto"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-rows-5 text-lg"
  }, Object.entries(ratings).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      rating = _ref2[0],
      count = _ref2[1];
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "bg-white dark:bg-grey-500",
      type: "button",
      key: rating,
      onClick: function onClick() {
        return handleFilterClick(parseInt(rating, 10));
      },
      style: {
        backgroundColor: 'transparent'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "pl-[10px] whitespace-pre"
    }, "".concat(rating, " Stars")), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
        width: '100px',
        height: '10px',
        border: '1px solid grey',
        marginRight: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-secondary-300 dark:bg-primary-300",
      style: {
        display: 'inline-block',
        width: "".concat(count / reviews.length * 100, "%"),
        height: '100%'
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-primary-200 dark:bg-secondary-200",
      style: {
        display: 'inline-block',
        width: "".concat(100 - count / reviews.length * 100, "%"),
        height: '100%'
      }
    })), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pr-[10px]"
    }, "".concat(count)), activeFilters.includes(parseInt(rating, 10)) && /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa-solid fa-caret-left text-secondary-300 dark:bg-primary-300",
      style: {
        backgroundColor: 'transparent'
      }
    })));
  })), activeFilters.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, "Filters applied: ".concat(activeFilters.map(function (filter) {
    return "".concat(filter, " stars");
  }).join(', ')), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: clearFilters
  }, "Remove all filters"))));
}
var _default = RatingsBreakdown;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/ReviewList.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/ReviewList.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _reviewSlice = __webpack_require__(/*! @reducers/reviewSlice */ "./client/src/reducers/reviewSlice.js");
var _Button = _interopRequireDefault(__webpack_require__(/*! @modular/Button */ "./client/src/modular/Button.jsx"));
var _ReviewListTile = _interopRequireDefault(__webpack_require__(/*! ./ReviewListTile */ "./client/src/components/ratingsReviews/subComponents/ReviewListTile.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */

function ReviewList() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayMoreReviewsButton = _useState2[0],
    setDisplayMoreReviewsButton = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    renderedReviews = _useState4[0],
    setRenderedReviews = _useState4[1];
  var reviews = (0, _reactRedux.useSelector)(function (state) {
    return state.reviews.data;
  });
  var filteredReviews = (0, _reactRedux.useSelector)(function (state) {
    return state.reviews.rendered;
  });
  var prodID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  // const [reachedBottom, setReachedBottom] = useState(false);
  var sort = (0, _reactRedux.useSelector)(function (state) {
    return state.sort.sortedBy;
  });
  // const elementPointerRef = useRef(null);

  (0, _react.useEffect)(function () {
    document.getElementById('reviewList').scrollTo(0, 0);
    setDisplayMoreReviewsButton(true);
    dispatch((0, _reviewSlice.getReviewsAsync)());
  }, [prodID]);
  (0, _react.useEffect)(function () {
    if (filteredReviews.length > 0) {
      if (displayMoreReviewsButton) {
        setRenderedReviews(filteredReviews.slice(0, 2));
      } else {
        setRenderedReviews(filteredReviews);
      }
    } else {
      setRenderedReviews(reviews);
    }
  }, [filteredReviews]);
  (0, _react.useEffect)(function () {
    document.getElementById('reviewList').scrollTo(0, 0);
    dispatch((0, _reviewSlice.getReviewsAsync)());
  }, [sort]);

  // useEffect(() => {
  //   if (displayMoreReviewsButton) {
  //     setRenderedReviews(reviews.slice(0, 2));
  //   } else if (!displayMoreReviewsButton) {
  //     // setRenderedReviews(reviews.slice(0, renderedReviews.length + 5));
  //     setRenderedReviews(reviews);
  //   }
  // }, [reviews]);

  // const isElementOnScreen = (element, container) => {
  //   const elementRect = element.getBoundingClientRect();
  //   const containerRect = container.getBoundingClientRect();
  //   return (
  //     elementRect.bottom > containerRect.top
  //     && elementRect.top < containerRect.bottom
  //   );
  // };

  var toggleModal = function toggleModal() {
    dispatch((0, _modalSlice.setModalProps)({}));
    dispatch((0, _modalSlice.setModalType)('NewReviewModal'));
    dispatch((0, _modalSlice.toggle)());
  };

  // const handleScroll = (e) => {
  //   e.preventDefault();

  //   if (!reachedBottom) {
  //     const list = e.target;
  //     const elementPointer = elementPointerRef.current;
  //     const scrolledToBottom = (filteredReviews.length - 10) === Number(elementPointer.getAttribute('data'));

  //     if (isElementOnScreen(elementPointer, list)) {
  //       setRenderedReviews((rendered) => filteredReviews.slice(0, rendered.length + 10));
  //       if (scrolledToBottom) {
  //         setReachedBottom(true);
  //       }
  //     }
  //   }
  // };onScroll={handleScroll}

  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "scrollableDiv",
    style: {
      paddingRight: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "reviewList",
    style: {
      maxHeight: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n            #reviewList::-webkit-scrollbar {\n              background: transparent;\n              width: 0;\n            }\n            scroll-behavior: smooth;\n          "), renderedReviews.map(function (review, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      // ref={idx === (renderedReviews.length - 5) ? elementPointerRef : null}
      key: "review-".concat(review.id, "-").concat(idx),
      id: "review-".concat(idx),
      data: idx
    }, /*#__PURE__*/_react["default"].createElement(_ReviewListTile["default"], {
      key: "review-".concat(review.id, "-").concat(idx),
      review: review
    }));
  }), !displayMoreReviewsButton && /*#__PURE__*/_react["default"].createElement("span", {
    "data-testid": "endScroll",
    className: "flex justify-center items-center"
  }, "All caught up!")), /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "moreReviewsButtonContainer",
    className: "flex justify-center gap-3 pt-3"
  }, displayMoreReviewsButton && reviews.length > 2 && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    testID: "moreReviewsButton",
    content: "MORE REVIEWS",
    onClick: function onClick() {
      var list = document.getElementById('reviewList');
      list.style.maxHeight = '55em';
      list.style.overflow = 'scroll';
      list.style.paddingRight = '10px';
      setDisplayMoreReviewsButton(false);
      // setRenderedReviews(reviews.slice(0, 10));
      setRenderedReviews(reviews);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "openWriteReviewModel",
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    content: "NEW REVIEW",
    onClick: toggleModal
  }))));
}
var _default = ReviewList;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/ReviewListTile.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/ReviewListTile.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _reviewSlice = __webpack_require__(/*! @reducers/reviewSlice */ "./client/src/reducers/reviewSlice.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _StarRatingView = _interopRequireDefault(__webpack_require__(/*! @modular/StarRatingView */ "./client/src/modular/StarRatingView.jsx"));
var _API_Helper = _interopRequireDefault(__webpack_require__(/*! ../scripts/API_Helper */ "./client/src/components/ratingsReviews/scripts/API_Helper.js"));
var _dompurify = _interopRequireDefault(__webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */

function ReviewListTile(_ref) {
  var review = _ref.review;
  var dispatch = (0, _reactRedux.useDispatch)();
  var toggleModal = function toggleModal(photo) {
    dispatch((0, _modalSlice.setModalProps)({
      photo: photo
    }));
    dispatch((0, _modalSlice.setModalType)('ImageTile'));
    dispatch((0, _modalSlice.toggle)());
  };
  var date = new Date(review.date);
  var outputDateString = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date).replace(/\d+/, date.getDate().toString().padStart(2, '0'));
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showFullReview = _useState2[0],
    setShowFullReview = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showFullResponse = _useState4[0],
    setShowFullResponse = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    helpfulClicked = _useState6[0],
    setHelpfulClicked = _useState6[1];
  var handleLikeClick = function handleLikeClick() {
    setHelpfulClicked('like');
    if (helpfulClicked === null) {
      (0, _API_Helper["default"])(review.review_id);
      dispatch((0, _reviewSlice.getReviewsAsync)());
    }
  };
  var handleDislikeClick = function handleDislikeClick() {
    setHelpfulClicked('dislike');
  };
  var sanitize = function sanitize(text) {
    text = String(text);
    return _dompurify["default"].sanitize(text);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "tile",
    className: "flex-col w-full bg-white dark:bg-stone-950 p-4",
    style: {
      margin: '0.25em',
      border: '1px solid grey',
      boxShadow: '1px 1px 3px rgb(40, 11, 135, 0.4)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full max-w-lg overflow-x-auto h-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "summary",
    className: "font-bold w-full break-words overflow-hidden text-overflow-ellipsis white-space-nowrap"
  }, review.summary.slice(0, 60)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row flex-wrap"
  }, /*#__PURE__*/_react["default"].createElement(_StarRatingView["default"], {
    averageRating: review.rating
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: ' 0 0 0 0.5em'
    },
    className: "flex items-center"
  }, outputDateString)), review.recommend ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-green-600 mb-1 text-xs"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "far fa-check-circle text-[#2caf53]"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2"
  }, "I recommend this product")) : null), /*#__PURE__*/_react["default"].createElement("div", {
    id: "reviewBody",
    className: "w-full break-words overflow-hidden text-overflow-ellipsis white-space-nowrap text-sm"
  }, review.body.length <= 250 ? review.body : showFullReview ? sanitize(review.body) : "".concat(sanitize(review.body.slice(0, 250)), "... "), review.body.length > 250 && /*#__PURE__*/_react["default"].createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "text-blue-500 cursor-pointer",
    onClick: function onClick() {
      return setShowFullReview(!showFullReview);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        setShowFullReview(!showFullReview);
      }
    }
  }, showFullReview ? '  Show less' : 'Show more')), /*#__PURE__*/_react["default"].createElement("div", {
    id: "user",
    className: "text-xs mt-2 text-[#615e6e]"
  }, 'Submitted by: ', sanitize(review.reviewer_name)), /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "notAnything",
    id: "photos",
    className: "grid grid-cols-5 gap-2 my-2"
  }, review.photos.map(function (photo, idx) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      "data-testid": "notAnything1",
      id: "photo"
      // eslint-disable-next-line react/no-array-index-key
      ,
      key: "".concat(review.review_id, "-").concat(sanitize(photo.id), "-").concat(idx),
      type: "button",
      onClick: function onClick() {
        return toggleModal(photo);
      },
      onKeyDown: function onKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          toggleModal(photo);
        }
      },
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative max-h-75px",
      style: {
        paddingBottom: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "absolute top-0 left-0 w-full h-full object-cover",
      src: photo.url,
      alt: "Review ".concat(sanitize(photo.id))
    })));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    id: "recommend",
    className: "flex text-xs"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '0 0.5em 0 0'
    }
  }, review.response !== null ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '0 0.5em 0 0'
    }
  }, review.response !== null ? /*#__PURE__*/_react["default"].createElement("div", {
    id: "response",
    className: "break-words overflow-hidden text-overflow-ellipsis white-space-nowrap rounded-md border border-solid border-secondary-200 text-sm",
    style: {
      margin: '10px',
      padding: '10px',
      display: 'inline-block',
      maxWidth: '100%'
    }
  }, 'Response from seller: ', review.response.length <= 100 ? sanitize(review.response) : showFullResponse ? sanitize(review.response) : "".concat(sanitize(review.response.slice(0, 100)), "... "), review.response.length > 100 && /*#__PURE__*/_react["default"].createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "text-blue-500 cursor-pointer",
    onClick: function onClick() {
      return setShowFullResponse(!showFullResponse);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        setShowFullResponse(!showFullResponse);
      }
    }
  }, showFullResponse ? '  Show less' : 'Show more')) : null) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    id: "helpful",
    className: "grid grid-rows justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-semibold text-xs"
  }, "Was this review helpful?"), /*#__PURE__*/_react["default"].createElement("div", {
    id: "helpfulButts",
    className: "flex justify-center gap-8 mt-2"
  }, helpfulClicked !== 'like' && /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-duotone fa-thumbs-up fa-rotate-180 text-[#300e7f] dark:text-secondary-300",
    "aria-label": "dislike button",
    style: {
      opacity: '0.8',
      cursor: 'pointer',
      fontSize: '1.5em',
      padding: '3px',
      paddingBottom: '8px'
    },
    onClick: handleDislikeClick,
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        handleDislikeClick();
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      if (helpfulClicked === null) {
        e.target.style.textShadow = '0 0 1px #ff5733, 0 0 4px #300e7f, 0 0 6px #6120d8';
      } else {
        e.target.style.cursor = 'not-allowed';
      }
    },
    onMouseLeave: function onMouseLeave(e) {
      e.target.style.textShadow = '';
      e.target.style.cursor = 'auto';
    }
  }), helpfulClicked !== 'dislike' && /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-duotone fa-thumbs-up  text-[#300e7f] dark:text-secondary-300",
    "aria-label": "like button",
    style: {
      opacity: '0.8',
      cursor: 'pointer',
      fontSize: '1.5em',
      padding: '3px'
    },
    onClick: handleLikeClick,
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        handleLikeClick();
      }
    },
    onMouseEnter: function onMouseEnter(e) {
      if (helpfulClicked === null) {
        e.target.style.textShadow = '0 0 1px #a4d8ff, 0 0 4px #300e7f, 0 0 6px #6120d8';
      } else {
        e.target.style.cursor = 'not-allowed';
      }
    },
    onMouseLeave: function onMouseLeave(e) {
      e.target.style.textShadow = '';
      e.target.style.cursor = 'auto';
    }
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "mt-2 text-xs"
  }, review.helpfulness, '\tusers found this helpful')));
}
ReviewListTile.propTypes = {
  review: _propTypes["default"].shape({
    review_id: _propTypes["default"].number.isRequired,
    rating: _propTypes["default"].number.isRequired,
    summary: _propTypes["default"].string.isRequired,
    recommend: _propTypes["default"].bool.isRequired,
    response: _propTypes["default"].string,
    body: _propTypes["default"].string.isRequired,
    date: _propTypes["default"].string.isRequired,
    reviewer_name: _propTypes["default"].string.isRequired,
    helpfulness: _propTypes["default"].number.isRequired,
    photos: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      id: _propTypes["default"].number.isRequired,
      url: _propTypes["default"].string.isRequired
    })).isRequired
  }).isRequired
};
var _default = ReviewListTile;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ratingsReviews/subComponents/SortOptions.jsx":
/*!****************************************************************************!*\
  !*** ./client/src/components/ratingsReviews/subComponents/SortOptions.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _sortSlice = __webpack_require__(/*! @reducers/sortSlice */ "./client/src/reducers/sortSlice.js");
function SortOptions() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var sortedBy = (0, _reactRedux.useSelector)(function (state) {
    return state.sort.sortedBy;
  });
  var options = [{
    label: 'Relevance',
    value: 'relevant'
  }, {
    label: 'Newest',
    value: 'newest'
  }, {
    label: 'Helpful',
    value: 'helpful'
  }];
  var handleChange = function handleChange(event) {
    dispatch((0, _sortSlice.toggleSort)(event.target.value));
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("select", {
    className: "bg-white dark:text-white dark:bg-stone-700 mb-[10px] p-[2px] rounded-md text-lg",
    value: sortedBy,
    onChange: handleChange
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }))));
}
var _default = SortOptions;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/relatedItems/index.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/relatedItems/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _relatedSlice = __webpack_require__(/*! @reducers/relatedSlice */ "./client/src/reducers/relatedSlice.js");
var _ProductList = _interopRequireDefault(__webpack_require__(/*! ./subComponents/ProductList */ "./client/src/components/relatedItems/subComponents/ProductList.jsx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RelatedItems() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  var itemsRelated = (0, _reactRedux.useSelector)(function (state) {
    return state.related.itemsRelated;
  });
  var itemsOutfit = (0, _reactRedux.useSelector)(function (state) {
    return state.related.itemsOutfit;
  });
  (0, _react.useEffect)(function () {
    dispatch((0, _relatedSlice.getRelatedProductsAsync)(productID));
  }, [productID]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-md font-semibold"
  }, "RELATED ITEMS"), /*#__PURE__*/_react["default"].createElement(_ProductList["default"], {
    items: itemsRelated
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-md font-semibold"
  }, "OUTFITS"), /*#__PURE__*/_react["default"].createElement(_ProductList["default"], {
    items: itemsOutfit,
    hasPlaceholder: true
  }));
}
var _default = RelatedItems;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/relatedItems/subComponents/ProductCard.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/relatedItems/subComponents/ProductCard.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ProductCard;
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _productSlice = __webpack_require__(/*! @reducers/productSlice */ "./client/src/reducers/productSlice.js");
var _relatedSlice = __webpack_require__(/*! @reducers/relatedSlice */ "./client/src/reducers/relatedSlice.js");
var _StarRatingView = _interopRequireDefault(__webpack_require__(/*! @modular/StarRatingView */ "./client/src/modular/StarRatingView.jsx"));
var _placeHolder = _interopRequireDefault(__webpack_require__(/*! @images/place-holder.jpg */ "./client/src/assets/images/place-holder.jpg"));
var _checkValidImage = _interopRequireDefault(__webpack_require__(/*! @lib/checkValidImage */ "./client/src/lib/checkValidImage.js"));
var currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});
var cardStyle = 'h-72 w-48 border-2 border-secondary-300 dark:border-primary-300';
var imageStyle = 'object-cover w-full h-48 bg-gray-100 dark:bg-gray-900';
var textboxStyle = ' text-left p-2 bg-white dark:bg-black';
var starStyle = 'absolute top-2 right-3 z-20 text-secondary-300 dark: text-primary-300';
function ProductCard(_ref) {
  var item = _ref.item;
  var dispatch = (0, _reactRedux.useDispatch)();
  var averageRating = Math.random() * 3 + 2;
  var name = item.name,
    category = item.category,
    default_price = item.default_price;
  var isFavorited = false;
  (0, _reactRedux.useSelector)(function (state) {
    return state.related.itemsOutfit;
  }).forEach(function (product) {
    if (product.id === item.id) {
      isFavorited = true;
    }
  });
  var photoURL = item.results[0].photos[0].url;
  var starIconType = 'fa-sharp fa-regular fa-star';
  if (isFavorited) {
    starIconType = 'fa-sharp fa-solid fa-star';
  }
  (0, _checkValidImage["default"])(photoURL, function (isValid) {
    if (!isValid) {
      photoURL = _placeHolder["default"];
    }
    if (document.getElementById('app')) {
      document.getElementById("related-".concat(item.id)).src = photoURL;
    }
  });
  function linkToProduct() {
    dispatch((0, _productSlice.getProductDetailsAsync)(item.id));
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function addOutfitItemHandler() {
    dispatch((0, _relatedSlice.addOutfitItem)(item));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative border-2 "
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: cardStyle,
    onClick: linkToProduct
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    id: "related-".concat(item.id),
    src: photoURL,
    alt: "related item",
    className: imageStyle
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: textboxStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-xs"
  }, (category || 'CATEGORY').toUpperCase()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-sm font-extrabold"
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-xs mt-1 mb-1"
  }, currencyFormatter.format(default_price)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row-span-1 text-xs flex"
  }, (0, _StarRatingView["default"])({
    averageRating: averageRating
  }))))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "like this item",
    className: starStyle,
    onClick: addOutfitItemHandler
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: starIconType
  })));
}
ProductCard.propTypes = {
  item: _propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    name: _propTypes["default"].string.isRequired,
    category: _propTypes["default"].string.isRequired,
    results: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      url: _propTypes["default"].string
    })),
    default_price: _propTypes["default"].number
  }).isRequired
};

/***/ }),

/***/ "./client/src/components/relatedItems/subComponents/ProductList.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/components/relatedItems/subComponents/ProductList.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = ProductList;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _ProductCard = _interopRequireDefault(__webpack_require__(/*! ./ProductCard */ "./client/src/components/relatedItems/subComponents/ProductCard.jsx"));
var _placeholderCard = _interopRequireDefault(__webpack_require__(/*! ./placeholderCard */ "./client/src/components/relatedItems/subComponents/placeholderCard.jsx"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ProductList(_ref) {
  var items = _ref.items,
    hasPlaceholder = _ref.hasPlaceholder;
  var productID = (0, _reactRedux.useSelector)(function (state) {
    return state.product.id;
  });
  var itemsList = items;
  var currentProductExists = false;
  var itemsCarousel = [];
  if (itemsList.length > 0) {
    itemsCarousel = itemsList.map(function (i) {
      var item = _objectSpread({}, i);
      if (productID === item.id) {
        currentProductExists = true;
      }
      item.default_price = Number(item.default_price);
      return /*#__PURE__*/_react["default"].createElement(_ProductCard["default"], {
        item: item,
        key: item.id
      });
    });
  }
  if (hasPlaceholder && !currentProductExists) {
    itemsCarousel.push( /*#__PURE__*/_react["default"].createElement(_placeholderCard["default"], {
      key: "placeholder"
    }));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4 flex flex-row gap-2 w-full overflow-x-scroll scrollbar-hide"
  }, itemsCarousel);
}
ProductList.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired
  })).isRequired
};

/***/ }),

/***/ "./client/src/components/relatedItems/subComponents/placeholderCard.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/relatedItems/subComponents/placeholderCard.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = PlaceholderCard;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _relatedSlice = __webpack_require__(/*! @reducers/relatedSlice */ "./client/src/reducers/relatedSlice.js");
function PlaceholderCard() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var productDetails = (0, _reactRedux.useSelector)(function (state) {
    return state.product.value;
  });
  function addOutfitItemHandler() {
    dispatch((0, _relatedSlice.addOutfitItem)(productDetails));
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "flex h-72 w-48 border-2 p-18 border-secondary-300 dark:border-primary-300 bg-white dark:bg-black",
    onClick: addOutfitItemHandler
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "self-center mx-auto fa-solid fa-circle-plus text-8xl"
  }));
}

/***/ }),

/***/ "./client/src/lib/cartRender.js":
/*!**************************************!*\
  !*** ./client/src/lib/cartRender.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hideCart = hideCart;
exports.renderCart = renderCart;
function renderCart() {
  document.getElementById('cart-list').style['max-height'] = '500px';
  document.getElementById('cart-list').style.visibility = 'visible';
}
function hideCart() {
  document.getElementById('cart-list').style['max-height'] = 0;
  document.getElementById('cart-list').style.visibility = 'collapse';
}

/***/ }),

/***/ "./client/src/lib/checkMobileBrowser.js":
/*!**********************************************!*\
  !*** ./client/src/lib/checkMobileBrowser.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = checkMobileBrowser;
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
function checkMobileBrowser(callback) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return callback(true);
  }
  return callback(false);
}

/***/ }),

/***/ "./client/src/lib/checkValidImage.js":
/*!*******************************************!*\
  !*** ./client/src/lib/checkValidImage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = checkImage;
function checkImage(url, callback) {
  var image = new Image();
  image.onload = function () {
    if (image.width > 0) {
      callback(true);
    }
  };
  image.onerror = function () {
    callback(false);
  };
  image.src = url;
}

/***/ }),

/***/ "./client/src/modular/Button.jsx":
/*!***************************************!*\
  !*** ./client/src/modular/Button.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
function Button(_ref) {
  var content = _ref.content,
    href = _ref.href,
    onClick = _ref.onClick,
    styleOverride = _ref.styleOverride,
    testID = _ref.testID,
    name = _ref.name;
  var buttonStyle = 'w-full h-14 p-2 px-3 text-sm text-left font-semibold' + ' bg-secondary-300 hover:bg-secondary-300/95 text-white standard-border' + ' dark:bg-primary-300 dark:hover:bg-primary-300/95 dark:text-black dark:standard-border-dark';
  buttonStyle += styleOverride;
  var renderButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    href: href,
    onClick: onClick,
    className: buttonStyle,
    "data-testid": testID,
    name: name
  }, content);
  if (href) {
    renderButton = /*#__PURE__*/_react["default"].createElement("a", {
      href: href,
      onClick: onClick,
      className: buttonStyle,
      "data-testid": testID,
      name: name
    }, content);
  }
  return /*#__PURE__*/_react["default"].createElement("div", null, renderButton);
}
Button.propTypes = {
  content: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].string,
  onClick: _propTypes["default"].any.isRequired,
  styleOverride: _propTypes["default"].string
};
Button.defaultProps = {
  href: undefined,
  styleOverride: ''
};
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/modular/ImageTile.jsx":
/*!******************************************!*\
  !*** ./client/src/modular/ImageTile.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ImageTile(_ref) {
  var photo = _ref.photo;
  var rendered = (0, _reactRedux.useSelector)(function (state) {
    return state.modal.modalOpen;
  });
  var imageRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var zoomScreen = document.querySelector('#zoomable');
    var zoom = 1;
    var zoomingSpeed = 0.1;
    document.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) {
        zoomScreen.style.transform = "scale(".concat(zoom -= zoomingSpeed, ")");
      } else {
        zoomScreen.style.transform = "scale(".concat(zoom += zoomingSpeed, ")");
      }
    });
    var isDragging = false;
    var lastX = 0;
    var lastY = 0;
    var x = 0;
    var y = 0;
    var handleMouseDown = function handleMouseDown(e) {
      e.preventDefault();
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    var handleMouseMove = function handleMouseMove(e) {
      e.preventDefault();
      if (isDragging) {
        x = x + e.clientX - lastX;
        y = y + e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        imageRef.current.style.transform = "translate(".concat(x / 2, "px, ").concat(y / 2, "px)");
      }
    };
    var handleMouseUp = function handleMouseUp() {
      isDragging = false;
    };
    zoomScreen.addEventListener('mousedown', handleMouseDown);
    zoomScreen.addEventListener('mousemove', handleMouseMove);
    zoomScreen.addEventListener('mouseup', handleMouseUp);
    return function () {
      zoomScreen.removeEventListener('mousedown', handleMouseDown);
      zoomScreen.removeEventListener('mousemove', handleMouseMove);
      zoomScreen.removeEventListener('mouseup', handleMouseUp);
    };
  }, [rendered]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "zoomable",
    style: {
      maxHeight: 'calc(95vh + 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    ref: imageRef,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    },
    src: photo.url,
    alt: photo.id
  }));
}
ImageTile.propTypes = {
  photo: _propTypes["default"].shape({
    id: _propTypes["default"].number.isRequired,
    url: _propTypes["default"].string.isRequired
  }).isRequired
};
var _default = ImageTile;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/modular/Modal.jsx":
/*!**************************************!*\
  !*** ./client/src/modular/Modal.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _modalSlice = __webpack_require__(/*! @reducers/modalSlice */ "./client/src/reducers/modalSlice.js");
var _ImageTile = _interopRequireDefault(__webpack_require__(/*! @modular/ImageTile */ "./client/src/modular/ImageTile.jsx"));
var _NewReviewModal = _interopRequireDefault(__webpack_require__(/*! @components/ratingsReviews/subComponents/NewReviewModal */ "./client/src/components/ratingsReviews/subComponents/NewReviewModal.jsx"));
var _AddQuestionForm = _interopRequireDefault(__webpack_require__(/*! @components/questionsAnswers/subComponents/AddQuestionForm */ "./client/src/components/questionsAnswers/subComponents/AddQuestionForm.jsx"));
var _AddAnswerForm = _interopRequireDefault(__webpack_require__(/*! @components/questionsAnswers/subComponents/AddAnswerForm */ "./client/src/components/questionsAnswers/subComponents/AddAnswerForm.jsx"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  backgroundColor: '#FFF',
  padding: '50px',
  boxShadow: '0px 0px 30px 5px rgba(0, 0, 0, 0.2)',
  maxWidth: '90vw',
  maxHeight: '95vh',
  borderRight: '0px'
};
var backdropStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: 9998,
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
};
function Modal() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var isOpen = (0, _reactRedux.useSelector)(function (state) {
    return state.modal.modalOpen;
  });
  var ModalComponent = (0, _reactRedux.useSelector)(function (state) {
    return state.modal.componentType;
  });
  var componentProps = (0, _reactRedux.useSelector)(function (state) {
    return state.modal.componentProps;
  });
  function closeModal() {
    dispatch((0, _modalSlice.toggle)([null, []]));
  }
  if (!isOpen) {
    return null;
  }
  function renderComponent() {
    switch (ModalComponent) {
      case 'NewReviewModal':
        return /*#__PURE__*/_react["default"].createElement(_NewReviewModal["default"], null);
      case 'ImageTile':
        return /*#__PURE__*/_react["default"].createElement(_ImageTile["default"], {
          photo: componentProps.photo
        });
      case 'AddQuestionForm':
        return /*#__PURE__*/_react["default"].createElement(_AddQuestionForm["default"], null);
      case 'AddAnswerForm':
        return /*#__PURE__*/_react["default"].createElement(_AddAnswerForm["default"], {
          qBodyId: componentProps.qBodyId
        });
      // case '5': return <ComponentThree/>;
      // case '6': return <ComponentFour/>;
      default:
        return null;
    }
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "notAnything5",
    className: "relative rounded-b-xl rounded-t-lg dark:bg-secondary-200",
    style: _objectSpread(_objectSpread({}, modalStyles), {}, {
      padding: '0px',
      paddingTop: '27px'
    })
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    "aria-label": "Close Modal",
    onClick: closeModal,
    className: "fa fa-window-close bg-inherent absolute top-0 right-0 focus:outline-none",
    style: {
      color: '#e30606',
      paddingRight: '4px',
      paddingTop: '2px',
      fontSize: '25px',
      transition: 'background-color 0.2s ease-in-out'
    },
    onMouseEnter: function onMouseEnter(e) {
      var target = e.target;
      target.style.color = '#9c0606';
    },
    onMouseLeave: function onMouseLeave(e) {
      var target = e.target;
      target.style.color = '#e30606';
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      borderTop: 'outset'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-b-xl",
    style: {
      border: '.5',
      height: '99.5%',
      overflow: 'hidden',
      padding: '0px',
      borderRight: '0px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal",
    "data-testid": "notAnything6",
    className: "dark:bg-secondary-200",
    style: {
      overflowY: 'auto',
      overflowX: 'auto',
      maxHeight: 'calc(95vh - 50px)'
    }
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n                #modal::-webkit-scrollbar {\n                background: transparent;\n                width: 0;\n                height: 0;\n                }\n              "), renderComponent()))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    style: backdropStyles,
    onClick: closeModal,
    tabIndex: -1,
    "aria-hidden": "true"
  }));
}
var _default = Modal;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/modular/StarRatingView.jsx":
/*!***********************************************!*\
  !*** ./client/src/modular/StarRatingView.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function StarRatingView(_ref) {
  var averageRating = _ref.averageRating;
  var filledStars = Math.floor(averageRating);
  var filledQuarters = Math.floor((averageRating - filledStars) * 4);
  var isDarkTheme = (0, _reactRedux.useSelector)(function (state) {
    return state.theme.isDarkTheme;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-baseline",
    style: {
      maxWidth: '100%'
    }
  }, Array.from({
    length: 5
  }, function (_, index) {
    var starType = '';
    if (isDarkTheme) starType += 'D';
    starType += 'star';
    if (index < filledStars) {
      starType += 'Full';
    } else if (index === filledStars && filledQuarters > 0) {
      starType += "".concat(filledQuarters);
    }
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      className: "".concat(starType, " fa fa-star"),
      style: {
        fontSize: '100%'
      }
    });
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-500 dark:text-gray-400 ml-1"
  }, averageRating.toFixed(1)));
}
StarRatingView.propTypes = {
  averageRating: _propTypes["default"].number.isRequired
};
var _default = StarRatingView;
exports["default"] = _default;

/***/ }),

/***/ "./client/src/assets/images/ADIDA_logo_white.png":
/*!*******************************************************!*\
  !*** ./client/src/assets/images/ADIDA_logo_white.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ADIDA_logo_white.png");

/***/ }),

/***/ "./client/src/assets/images/place-holder.jpg":
/*!***************************************************!*\
  !*** ./client/src/assets/images/place-holder.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/place-holder.jpg");

/***/ })

}]);
//# sourceMappingURL=client_src_components_App_jsx.bundle.js.map