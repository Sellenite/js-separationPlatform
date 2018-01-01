/*
 * @Author: Sellenite 
 * @Date: 2017-12-30 16:44:44 
 * @Last Modified by: Sellenite
 * @Last Modified time: 2017-12-31 16:54:55
 */

'use strict';
var util = require('util/util.js');
var _cities = require('util/cities/index.js');
var _address = require('service/address-service.js');
var template = require('./address-modal.string');

var addressModal = {
    show: function (option) {
        // 保存配置
        this.option = option
        // 防止增加新地址时data为空而访问里面属性报错
        this.option.data = option.data || {}
        this.$modalWrap = $('.modal-wrap')
        // 渲染页面
        this.loadModal()
        // 绑定事件
        this.bindEvent()
    },
    hide: function () {
        this.$modalWrap.html('')
    },
    loadModal: function () {
        var addressModalHtml = util.renderHtml(template, this.option)
        this.$modalWrap.html(addressModalHtml)
        // 加载省份
        this.loadProvince()
    },
    loadProvince: function () {
        var provinces = _cities.getProvinces() || []
        var $provinceSelect = this.$modalWrap.find('#receiver-province')
        $provinceSelect.html(this.getSelectOption(provinces))
        if (this.option.isUpdate && this.option.data.receiverProvince) {
            $provinceSelect.val(this.option.data.receiverProvince)
            this.loadCities(this.option.data.receiverProvince)
        }
    },
    loadCities: function (provinceName) {
        var cities = _cities.getCities(provinceName)
        var $citySelect = this.$modalWrap.find('#receiver-city')
        $citySelect.html(this.getSelectOption(cities))
        if (this.option.isUpdate && this.option.data.receiverCity) {
            $citySelect.val(this.option.data.receiverCity)
        }
    },
    // 渲染option数据
    getSelectOption: function (optionArray) {
        var html = '<option value="">请选择</option>'
        for (var i = 0, length = optionArray.length; i < length; i++) {
            html += '<option value="' + optionArray[i] + '">' + optionArray[i] + '</option>'
        }
        return html
    },
    // 获取表单里收件人信息，并做验证
    getReceiverInfo: function () {
        var receiverInfo = {}
        var result = {
            status: false
        }
        if (this.option.isUpdate) {
            receiverInfo.id = this.$modalWrap.find('#receiver-id').val()
        }
        receiverInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val())
        receiverInfo.receiverProvince = this.$modalWrap.find('#receiver-province').val()
        receiverInfo.receiverCity = this.$modalWrap.find('#receiver-city').val()
        receiverInfo.receiverPhone = $.trim(this.$modalWrap.find('#receiver-phone').val())
        receiverInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val())
        receiverInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val())
        if (!receiverInfo.receiverName) {
            result.errMsg = '请输入收件人姓名'
        } else if (!receiverInfo.receiverProvince) {
            result.errMsg = '请输入收件人所在省份'
        } else if (!receiverInfo.receiverCity) {
            result.errMsg = '请输入收件人所在城市'
        } else if (!receiverInfo.receiverPhone || !this.isNumber(receiverInfo.receiverPhone) || receiverInfo.receiverPhone.length !== 11) {
            result.errMsg = '请输入收件人正确手机号'
        } else if (!receiverInfo.receiverAddress) {
            result.errMsg = '请输入收件人详细地址'
        } else if (!this.isNumber(receiverInfo.receiverZip) || receiverInfo.receiverZip.length !== 6) {
            result.errMsg = '请输入正确的邮政编码'
        } else {
            result.status = true
            result.data = receiverInfo
        }
        return result
    },
    isNumber: function (obj) {
        // +'z'会变成NaN
        obj = +obj
        return typeof obj === 'number' && !isNaN(obj)
    },
    bindEvent: function () {
        var _this = this
        // 点击叉号或蒙板区关闭弹窗
        this.$modalWrap.find('.modal-container').on('click', function (e) {
            e.stopPropagation()
        })
        this.$modalWrap.find('.close').on('click', function (e) {
            _this.hide()
        })
        // 省份选择联动
        this.$modalWrap.find('#receiver-province').change(function () {
            var selectedProvince = $(this).val()
            _this.loadCities(selectedProvince)
        })
        // 提交收货地址
        this.$modalWrap.find('.address-btn').on('click', function () {
            var receiverInfo = _this.getReceiverInfo()
            var isUpdate = _this.option.isUpdate
            // 使用新地址且验证通过
            if (!isUpdate && receiverInfo.status) {
                _address.save(receiverInfo.data, function (data, msg) {
                    util.successTips('地址添加成功')
                    _this.hide()
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(data)
                }, function (err) {
                    util.errorTips(err)
                })
            }
            // 更新收件人，并且验证通过
            else if (isUpdate && receiverInfo.status) {
                _address.update(receiverInfo.data, function (data, msg) {
                    util.successTips('地址修改成功')
                    _this.hide()
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(data)
                }, function (err) {
                    util.errorTips(err)
                })
            } else {
                util.errorTips(receiverInfo.errMsg || '信息错误')
            }
        })
    }
};

module.exports = addressModal;