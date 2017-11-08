/*
 * @Author: Sellenite 
 * @Date: 2017-11-08 22:11:51 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-08 23:32:49
 */
var util = require('util/util.js')

var _user = {
    checkLogin: function (resolve, reject) {
        util.request({
            url: util.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
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