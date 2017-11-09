/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 20:10:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-09 23:05:16
 */
var util = require('util/util.js')
require('page/common/nav-simple/index.js')
require('page/common/nav/index.js')
require('page/common/header/index.js')
var navSide = require('page/common/nav-side/index.js')

navSide.init({
    name: 'user-center'
})