/*
 * @Author: Sellenite 
 * @Date: 2017-11-27 18:47:29 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-11-27 22:20:17
 */

/**
 * 使用方法：
 * var pagination = new Pagination() / var pagination = $.pagination()
 * paginaiton.init({
       container: $element,
       pageNum: 1,
       pages: 10,
       pageRange: 3,
       hasPreviousPage: true,
       hasNextPage: true,
       onSelectChange: function
 * })
 */

(function () {
    function Pagination() {
        var _this = this
        this.defaultOption = {
            container: null,
            pageNum: 1,
            pages: 10,
            pageRange: 3,
            hasPreviousPage: true,
            hasNextPage: true,
            onSelectChange: null
        }
        $(document).on('click', '.page-item', function () {
            var $this = $(this)
            if ($this.hasClass('disabled')) {
                return
            }
            if ($this.hasClass('active')) {
                return
            }
            typeof _this.option.onSelectChange === 'function' ?
                _this.option.onSelectChange($this.data('page'), _this.option.pages) : ''
        })
    }

    Pagination.prototype.init = function (option) {
        this.option = $.extend({}, this.defaultOption, option)
        this.option.pageNum === 1 ?
            this.option.hasPreviousPage = false :
            this.option.pageNum === this.option.pages ?
            this.option.hasNextPage = false : ''
        var pageArray = this.setArray()
        var html = this.render(pageArray)
        this.option.container.html(html)
    }

    Pagination.prototype.setArray = function () {
        var pageArray = []
        var start = this.option.pageNum - this.option.pageRange
        start > 1 ? '' : start = 1
        var end = this.option.pageNum + this.option.pageRange
        end > this.option.pages ? end = this.option.pages : ''
        pageArray.push({
            name: '上一页',
            value: this.option.pageNum - 1,
            isEnable: this.option.hasPreviousPage
        })
        if (start !== 1) {
            pageArray.push({
                name: '...',
                value: start - 1,
                isEnable: true
            })
        }
        for (var i = start; i <= end; i++) {
            pageArray.push({
                name: i,
                value: i,
                isEnable: true,
                isActive: i === this.option.pageNum
            })
        }
        if (end !== this.option.pages) {
            pageArray.push({
                name: '...',
                value: end + 1,
                isEnable: true
            })
        }
        pageArray.push({
            name: '下一页',
            value: this.option.pageNum + 1,
            isEnable: this.option.hasNextPage
        })
        return pageArray
    }

    Pagination.prototype.render = function (pageArray) {
        var html = ''
        html += '<ul>'
        if (this.option.hasPreviousPage) {
            html += '<li class="page-item" data-page="1">首页</li>'
        } else {
            html += '<li class="page-item notshow" data-page="1">首页</li>'
        }
        for (var i = 0, length = pageArray.length; i < pageArray.length; i++) {
            var item = pageArray[i]
            if (item.isEnable === false) {
                html += '<li class="page-item disabled" data-page="' + item.value + '">' + item.name + '</li>'
            } else {
                if (item.isActive === true) {
                    html += '<li class="page-item active" data-page="' + item.value + '">' + item.name + '</li>'
                } else {
                    html += '<li class="page-item" data-page="' + item.value + '">' + item.name + '</li>'
                }
            }
        }
        if (this.option.hasNextPage) {
            html += '<li class="page-item" data-page="' + this.option.pages + '">末页</li>'
        } else {
            html += '<li class="page-item notshow" data-page="' + this.option.pages + '">末页</li>'
        }
        html += '</ul>'
        return html
    }

    // window or nodejs
    _globals = (function () {
        return this || (0, eval)("this");
    }())

    // 输出构造函数，分别为commonJS，amd, browser
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Pagination
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return Pagination
        })
    } else {
        _globals.Pagination = Pagination
    }

    // jquery插件方式
    $.extend({
        pagination: function () {
            return new Pagination()
        }
    })

    // 输出方法参考doT.js
}())