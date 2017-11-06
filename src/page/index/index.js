/*
 * @Author: Sellenite 
 * @Date: 2017-11-03 20:10:08 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-05 19:41:44
 */
var array = require('../module.js')
require('./index.css')
var util = require('util/util.js')

var data = {
    name: 'yuuhei',
    age: 23
}

console.log(util.renderHtml('<div>name:{{name}}, age:{{age}}</div>', data))

console.log('index')