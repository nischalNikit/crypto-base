webpackHotUpdate("app",{

/***/ "./src/store/actions/actionHome.ts":
/*!*****************************************!*\
  !*** ./src/store/actions/actionHome.ts ***!
  \*****************************************/
/*! exports provided: getPopularCoins, getPopularCoinsDetails, followCoin, unfollowCoin, getFollowingCoinsDetails, startNotifications, stopNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCoins", function() { return getPopularCoins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularCoinsDetails", function() { return getPopularCoinsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCoin", function() { return followCoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollowCoin", function() { return unfollowCoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingCoinsDetails", function() { return getFollowingCoinsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startNotifications", function() { return startNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopNotifications", function() { return stopNotifications; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./src/services/api.ts");



const getPopularCoinsSuccess = coins => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_SUCCESS"],
    coins
  };
};

const getPopularCoinsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_FAILURE"],
    error
  };
};

const getPopularCoins = () => {
  return async dispatch => {
    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].popularCoins);
      const json = await response.json();

      if (response.ok) {
        dispatch(getPopularCoinsSuccess(json.data));
      } else {
        dispatch(getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'));
      }
    } catch (error) {
      dispatch(getPopularCoinsFailure('Unable to fetch popular cryptocurrency.'));
    }
  };
};

const getPopularCoinsDetailsSuccess = coinsInfo => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_SUCCESS"],
    coinsInfo
  };
};

const getPopularCoinsDetailsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_POPULAR_COINS_DETAILS_FAILURE"],
    error
  };
};

const getPopularCoinsDetails = coins => {
  return async dispatch => {
    const data = coins.map(coin => coin.slug);
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${data.join(',')}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);
      const json = await response.json();

      if (response.ok) {
        dispatch(getPopularCoinsDetailsSuccess(json.data));
      } else {
        dispatch(getPopularCoinsDetailsFailure('Unable to fetch popular coins details.'));
      }
    } catch (error) {
      dispatch(getPopularCoinsDetailsFailure('Unable to fetch popular coins details.'));
    }
  };
};
const followCoin = coin => {
  console.log(coin);
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FOLLOW_COIN"],
    coin
  };
};
const unfollowCoin = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UNFOLLOW_COIN"],
    coin
  };
};

const getFollowingCoinsDetailsSuccess = coinsInfo => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_SUCCESS"],
    coinsInfo
  };
};

const getFollowingCoinsDetailsFailure = error => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_FOLLOWING_COINS_DETAILS_FAILURE"],
    error
  };
};

const getFollowingCoinsDetails = coins => {
  return async dispatch => {
    const data = coins.map(coin => coin.slug);
    const requestURL = `${_services_api__WEBPACK_IMPORTED_MODULE_1__["apiEndPoints"].coinsInfo}${data.join(',')}`;

    try {
      const response = await Object(_services_api__WEBPACK_IMPORTED_MODULE_1__["fetchApi"])(requestURL);
      const json = await response.json();

      if (response.ok) {
        dispatch(getFollowingCoinsDetailsSuccess(json.data));
      } else {
        dispatch(getFollowingCoinsDetailsFailure('Unable to fetch following coins details.'));
      }
    } catch (error) {
      dispatch(getFollowingCoinsDetailsFailure('Unable to fetch following coins details.'));
    }
  };
};
const startNotifications = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["START_COIN_NOTIFICATION"],
    coin
  };
};
const stopNotifications = coin => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOP_COIN_NOTIFICATION"],
    coin
  };
};

/***/ })

})
//# sourceMappingURL=app.1c36449490331297672b.hot-update.js.map