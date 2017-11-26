/*
 * @Author: Sellenite 
 * @Date: 2017-11-26 00:00:47 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-26 12:56:45
 */
require('./index.css')
var util = require('util/util.js')
var template = require('./index.string')

var Pagination = function () {
    var _this = this
    // pageRange，当前页前后距离
    this.defaultOption = {
        container: null,
        pageNum: 1,
        pageRange: 3,
        onSelectChange: null
    }
    $(document).on('click', '.pg-item', function () {
        var $this = $(this)
        if ($this.hasClass('active') || $this.hasClass('disabled')) {
            return
        }
        typeof _this.option.onSelectChange === 'function' ?
            _this.option.onSelectChange($this.data('value')) : ''
    })
}

Pagination.prototype.render = function (userOption) {
    this.option = $.extend({}, this.defaultOption, userOption)
    if (!(this.option.container instanceof $)) {
        return
    }
    if (this.option.pages <= 1) {
        return
    }
    this.option.container.html(this.getPaginationHtml())
}

Pagination.prototype.getPaginationHtml = function () {
    var html = ''
    var pageArray = []
    var start = this.option.pageNum - this.option.pageRange
    start > 0 ? '' : start = 1
    var end = this.option.pageNum + this.option.pageRange
    end > this.option.pages ? end = this.option.pages : ''
    pageArray.push({
        name: '上一页',
        value: this.option.prePage,
        isEnable: this.option.hasPreviousPage
    })
    for (var i = start; i <= end; i++) {
        pageArray.push({
            name: i,
            value: i,
            isEnable: true,
            isActive: i === this.option.pageNum
        })
    }
    pageArray.push({
        name: '下一页',
        value: this.option.nextPage,
        isEnable: this.option.hasNextPage
    })
    html = util.renderHtml(template, {
        pageArray: pageArray,
        pageNum: this.option.pageNum,
        pages: this.option.pages
    })
    console.log(start)
    console.log(end)
    console.log(pageArray)
    return html
}

module.exports = Pagination