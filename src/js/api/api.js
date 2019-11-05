window.api = (function(){
    var baseUrl = 'http://api.tuoxingwang.com/api';
    return {
        //天气信息API接口 type:get 此url后面直接跟 地区全拼，目前可用有：xian,duhuang,chakayanhu,qingtongxia
        weather:baseUrl+'/weather',
        //青铜峡大数据API接口 type:get
        qtxdaya:"http://qlx.dugujiujian.net/api"
    }
})();