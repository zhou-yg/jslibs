/**
 * Created by zyg on 15/7/3.
 */
(function($){
    //初始化设置
    var defaultOptions = {
        months: [
            "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dayOfWeek: [
            "日", "一", "二", "三", "四", "五", "六"
        ]
    };
    //view
    var ViewModule = function(){
        var ViewTemplate = '<header><asideclass="arrow-left"></aside><asideclass="arrow-right"></aside><divclass="title"><divclass="date"><spanclass="fullYear">2015</span>年<spanclass="month">7</span>月</div></div></header><table><thead><tr></tr></thead><tbody><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr></tbody></table>'

        return {
            render:function(data){
                var currentYear = data.currentYear,
                    currentMonth = data.currentMonth,
                    currentDates = data.currentDates;
            }
        }
    }();

    //model数据


})($);