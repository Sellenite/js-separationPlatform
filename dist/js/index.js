webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 22:11:51 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 23:00:18
 */
var util = __webpack_require__(0)

var _user = {
    // 检测登录状态，nav组件使用
    checkLogin: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 注册，注册页面使用
    register: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/register.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录，登录页面使用
    login: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/login.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 检测用户名是否存在，注册页面使用
    checkUsername: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/check_valid.do'),
            data: {
                type: 'username',
                str: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据用户名获取答案提示，找回密码页面使用
    getQuestion: function (username, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_get_question.do'),
            data: {
                username: username
            },
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 根据提示答案获取token，找回密码页面使用
    checkAnswer: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_check_answer.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 非登录状态下根据token等信息重置密码，找回密码页面使用
    resetPassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/forget_reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登录状态下修改密码，修改密码页面使用
    updatePassword: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/reset_password.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 获取个人信息，个人中心页面使用，未登录状态下请求会返回不同的状态码
    // 所有需要载入用户信息的页面都要加载这个函数做验证
    getUserInfo: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_information.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 更新个人信息，修改更人信息页面使用
    updateUserInfo: function (userInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/update_information.do'),
            data: userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 退出登录状态，nav组件使用
    logout: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    }
}

module.exports = _user

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 23:36:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-10 14:52:43
 */
var util = __webpack_require__(0)

var _cart = {
    // 拿到购物车数量，nav组件使用
    getCartCount: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        })
    },
    // 添加购物车功能，商品详情页使用
    addToCart: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取购物车列表，购物车页面使用
    getCartList: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/list.do'),
            success: resolve,
            error: reject
        })
    },
    // 选中一个购物车列表的物件，购物车页面使用
    selectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 取消选中一个购物车列表的物件，购物车页面使用
    unSelectProduct: function (productId, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        })
    },
    // 全选购物车列表的物件，购物车页面使用
    selectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 取消全选购物车列表的物件，购物车页面使用
    unSelectAllProduct: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/un_select_all.do'),
            success: resolve,
            error: reject
        })
    },
    // 更新购物车商品数量，购物车页面使用
    updateProduct: function (productInfo, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/update.do'),
            data: productInfo,
            success: resolve,
            error: reject
        })
    },
    // 删除指定商品，购物车页面使用
    deleteProduct: function (productIds, resolve, reject) {
        util.request({
            url: util.getServerUrl('/cart/delete_product.do'),
            data: {
                productIds: productIds
            },
            success: resolve,
            error: reject
        })
    }
}

module.exports = _cart

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 21:43:50 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:41:29
 */
__webpack_require__(4)
var util = __webpack_require__(0)
var _user = __webpack_require__(1)
var _cart = __webpack_require__(2)

var nav = {
    init: function () {
        this.bindEvent()
        this.loadUserInfo()
        this.loadCartCount()
        return this
    },
    bindEvent: function () {
        $('.js-login').on('click', function () {
            util.doLogin()
        })
        $('.js-register').on('click', function () {
            util.doRegister()
        })
        $('.js-logout').on('click', function () {
            _user.logout(function (data, msg) {
                window.location.reload()
            }, function (err) {
                util.errorTips(err)
            })
        })
    },
    loadUserInfo: function () {
        _user.checkLogin(function (data, msg) {
            $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(data.username)
        }, function (err) {
            util.errorTips(err)
        })
    },
    loadCartCount: function () {
        _cart.getCartCount(function (data, msg) {
            $('.nav .cart-count').text(data || 0)
        }, function (err) {
            $('.nav .cart-count').text(0)
        })
    }
}

module.exports = nav.init()

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 19:53:06 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-25 14:45:08
 */
__webpack_require__(6)
var util = __webpack_require__(0)

var header = {
    init: function () {
        this.onLoad()
        this.bindEvent()
    },
    onLoad: function () {
        var keyword = util.getUrlParam('keyword')
        if (keyword) {
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        var _this = this
        $('#search-btn').on('click', function () {
            _this.searchSubmit()
        })
        $('#search-input').on('keyup', function (e) {
            // 13是回车键的keycode
            if (e.keyCode === 13) {
                _this.searchSubmit()
            }
        })
    },
    // 搜索提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val())
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword
        } else {
            util.goHome()
        }
    }
}

header.init()

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-09 22:18:59 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-17 22:12:59
 */
__webpack_require__(8)
var util = __webpack_require__(0)
var template = __webpack_require__(9)

var navSide = {
    option: {
        name: '',
        navList: [{
                name: 'user-center',
                desc: '个人中心',
                href: './user-center.html'
            },
            {
                name: 'order-list',
                desc: '我的订单',
                href: './order-list.html'
            },
            {
                name: 'user-pass-update',
                desc: '修改密码',
                href: './user-pass-update.html'
            },
            {
                name: 'about',
                desc: '关于MMall',
                href: './about.html'
            }
        ]
    },
    init: function (option) {
        this.option = $.extend({}, this.option, option)
        this.renderNav()
    },
    renderNav: function () {
        // 标记激活位置
        for (var i = 0, length = this.option.navList.length; i < length; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true
            }
        }
        // 渲染函数
        var navHtml = util.renderHtml(template, {
            navList: this.option.navList
        })
        $('.nav-side').html(navHtml)
    }
}

module.exports = navSide

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "{{#navList}}\r\n{{#isActive}}\r\n    <li class=\"nav-item active\">\r\n{{/isActive}}\r\n{{^isActive}}\r\n    <li class=\"nav-item\">\r\n{{/isActive}}\r\n        <a class=\"link\" href=\"{{href}}\">{{desc}}</a>\r\n    </li>\r\n{{/navList}}";

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 20:10:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-21 23:04:39
 */
__webpack_require__(24)
__webpack_require__(3)
__webpack_require__(5)
__webpack_require__(28)
/* require('util/slider/index.js') */
var navSide = __webpack_require__(7)
var templateBanner = __webpack_require__(32)
var util = __webpack_require__(0)

$(function () {
    navSide.init({
        name: 'user-center'
    })

    // 渲染轮播内容
    var bannerHtml = util.renderHtml(templateBanner)
    $('.banner-con').html(bannerHtml)
    // 初始化轮播插件并绑定按键
    var $slider = $('.banner').unslider().data('unslider')
    $('.banner-arrow').on('click', function (e) {
        if ($(this).hasClass('prev')) {
            $slider.prev()
        } else {
            $slider.next()
        }
    })
})

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: Sellenite 
 * @Date: 2017-11-21 22:17:33 
 * @Last Modified by:   Sellenite 
 * @Last Modified time: 2017-11-21 22:17:33 
 */
__webpack_require__(29)
__webpack_require__(30)

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t){"object"==typeof module&&"object"==typeof module.exports?t(__webpack_require__(31)): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t(window.jQuery)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t(window.jQuery)}(function(t){if(!t)return console.warn("Unslider needs jQuery");t.Unslider=function(n,e){var i=this;return i._="unslider",i.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+i._+'-arrow prev">Prev</a>',next:'<a class="'+i._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:i._+"-active",swipe:!0,swipeThreshold:.2},i.$context=n,i.options={},i.$parent=null,i.$container=null,i.$slides=null,i.$nav=null,i.$arrows=[],i.total=0,i.current=0,i.prefix=i._+"-",i.eventSuffix="."+i.prefix+~~(2e3*Math.random()),i.interval=[],i.init=function(n){return i.options=t.extend({},i.defaults,n),i.$container=i.$context.find(i.options.selectors.container).addClass(i.prefix+"wrap"),i.$slides=i.$container.children(i.options.selectors.slides),i.setup(),t.each(["nav","arrows","keys","infinite"],function(n,e){i.options[e]&&i["init"+t._ucfirst(e)]()}),jQuery.event.special.swipe&&i.options.swipe&&i.initSwipe(),i.options.autoplay&&i.start(),i.calculateSlides(),i.$context.trigger(i._+".ready"),i.animate(i.options.index||i.current,"init")},i.setup=function(){i.$context.addClass(i.prefix+i.options.animation).wrap('<div class="'+i._+'" />'),i.$parent=i.$context.parent("."+i._),"static"===i.$context.css("position")&&i.$context.css("position","relative"),i.$context.css("overflow","hidden")},i.calculateSlides=function(){if(i.$slides=i.$container.children(i.options.selectors.slides),i.total=i.$slides.length,"fade"!==i.options.animation){var t="width";"vertical"===i.options.animation&&(t="height"),i.$container.css(t,100*i.total+"%").addClass(i.prefix+"carousel"),i.$slides.css(t,100/i.total+"%")}},i.start=function(){return i.interval.push(setTimeout(function(){i.next()},i.options.delay)),i},i.stop=function(){for(var t;t=i.interval.pop();)clearTimeout(t);return i},i.initNav=function(){var n=t('<nav class="'+i.prefix+'nav"><ol /></nav>');i.$slides.each(function(e){var o=this.getAttribute("data-nav")||e+1;t.isFunction(i.options.nav)&&(o=i.options.nav.call(i.$slides.eq(e),e,o)),n.children("ol").append('<li data-slide="'+e+'">'+o+"</li>")}),i.$nav=n.insertAfter(i.$context),i.$nav.find("li").on("click"+i.eventSuffix,function(){var n=t(this).addClass(i.options.activeClass);n.siblings().removeClass(i.options.activeClass),i.animate(n.attr("data-slide"))})},i.initArrows=function(){!0===i.options.arrows&&(i.options.arrows=i.defaults.arrows),t.each(i.options.arrows,function(n,e){i.$arrows.push(t(e).insertAfter(i.$context).on("click"+i.eventSuffix,i[n]))})},i.initKeys=function(){!0===i.options.keys&&(i.options.keys=i.defaults.keys),t(document).on("keyup"+i.eventSuffix,function(n){t.each(i.options.keys,function(e,o){n.which===o&&t.isFunction(i[e])&&i[e].call(i)})})},i.initSwipe=function(){var t=i.$slides.width();"fade"!==i.options.animation&&i.$container.on({movestart:function(t){if(t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)return!!t.preventDefault();i.$container.css("position","relative")},move:function(n){i.$container.css("left",-100*i.current+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>i.options.swipeThreshold?i[n.distX<0?"next":"prev"]():i.$container.animate({left:-100*i.current+"%"},i.options.speed/2)}})},i.initInfinite=function(){var n=["first","last"];t.each(n,function(t,e){i.$slides.push.apply(i.$slides,i.$slides.filter(':not(".'+i._+'-clone")')[e]().clone().addClass(i._+"-clone")["insert"+(0===t?"After":"Before")](i.$slides[n[~~!t]]()))})},i.destroyArrows=function(){t.each(i.$arrows,function(t,n){n.remove()})},i.destroySwipe=function(){i.$container.off("movestart move moveend")},i.destroyKeys=function(){t(document).off("keyup"+i.eventSuffix)},i.setIndex=function(t){return t<0&&(t=i.total-1),i.current=Math.min(Math.max(0,t),i.total-1),i.options.nav&&i.$nav.find('[data-slide="'+i.current+'"]')._active(i.options.activeClass),i.$slides.eq(i.current)._active(i.options.activeClass),i},i.animate=function(n,e){if("first"===n&&(n=0),"last"===n&&(n=i.total),isNaN(n))return i;i.options.autoplay&&i.stop().start(),i.setIndex(n),i.$context.trigger(i._+".change",[n,i.$slides.eq(n)]);var o="animate"+t._ucfirst(i.options.animation);return t.isFunction(i[o])&&i[o](i.current,e),i},i.next=function(){var t=i.current+1;return t>=i.total&&(t=i.options.noloop&&!i.options.infinite?i.total-1:0),i.animate(t,"next")},i.prev=function(){var t=i.current-1;return t<0&&(t=i.options.noloop&&!i.options.infinite?0:i.total-1),i.animate(t,"prev")},i.animateHorizontal=function(t){var n="left";return"rtl"===i.$context.attr("dir")&&(n="right"),i.options.infinite&&i.$container.css("margin-"+n,"-100%"),i.slide(n,t)},i.animateVertical=function(t){return i.options.animateHeight=!0,i.options.infinite&&i.$container.css("margin-top",-i.$slides.outerHeight()),i.slide("top",t)},i.slide=function(t,n){if(i.animateHeight(n),i.options.infinite){var e;n===i.total-1&&(e=i.total-3,n=-1),n===i.total-2&&(e=0,n=i.total-2),"number"==typeof e&&(i.setIndex(e),i.$context.on(i._+".moved",function(){i.current===e&&i.$container.css(t,-100*e+"%").off(i._+".moved")}))}var o={};return o[t]=-100*n+"%",i._move(i.$container,o)},i.animateFade=function(t){i.animateHeight(t);var n=i.$slides.eq(t).addClass(i.options.activeClass);i._move(n.siblings().removeClass(i.options.activeClass),{opacity:0}),i._move(n,{opacity:1},!1)},i.animateHeight=function(t){i.options.animateHeight&&i._move(i.$context,{height:i.$slides.eq(t).outerHeight()},!1)},i._move=function(t,n,e,o){return!1!==e&&(e=function(){i.$context.trigger(i._+".moved")}),t._move(n,o||i.options.speed,i.options.easing,e)},i.init(e)},t.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},t._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},t.fn._move=function(){return this.stop(!0,!0),t.fn[t.fn.velocity?"velocity":"animate"].apply(this,arguments)},t.fn.unslider=function(n){return this.each(function(e,i){var o=t(i);if(!(t(i).data("unslider")instanceof t.Unslider)){if("string"==typeof n&&o.data("unslider")){n=n.split(":");var s=o.data("unslider")[n[0]];if(t.isFunction(s))return s.apply(o,n[1]?n[1].split(","):null)}return o.data("unslider",new t.Unslider(o,n))}})}});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"banner\">\r\n    <ul>\r\n        <li>\r\n            <a href=\"./list.html?categoryId=100021\" target=\"_blank\">\r\n                <img class=\"banner-img\" src=\"" + __webpack_require__(33) + "\" />\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"./list.html?categoryId=100030\" target=\"_blank\">\r\n                <img class=\"banner-img\" src=\"" + __webpack_require__(34) + "\" />\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"./list.html?categoryId=100016\" target=\"_blank\">\r\n                <img class=\"banner-img\" src=\"" + __webpack_require__(35) + "\" />\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"./list.html?categoryId=100001\" target=\"_blank\">\r\n                <img class=\"banner-img\" src=\"" + __webpack_require__(36) + "\" />\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"./list.html?categoryId=100021\" target=\"_blank\">\r\n                <img class=\"banner-img\" src=\"" + __webpack_require__(37) + "\" />\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"banner-arrow prev\">\r\n        <i class=\"fa fa-angle-left\"></i>\r\n    </div>\r\n    <div class=\"banner-arrow next\">\r\n        <i class=\"fa fa-angle-right\"></i>\r\n    </div>\r\n</div>";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/images/banner1.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/images/banner2.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/images/banner3.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/images/banner4.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/images/banner5.jpg";

/***/ })
],[22]);