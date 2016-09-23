var province = document.querySelector('#province');

var city = document.querySelector('#city');

var area = document.querySelector('#area');

var provinceArr = [
    { id: "0", name: "--请选择省份--" },
    { id: "1", name: "北京市" },
    { id: "2", name: "天津市" },
    { id: "3", name: "河北省" },
    { id: "4", name: "陕西省" },
    { id: "5", name: "山西省" },
    { id: "6", name: "辽宁省" },
    { id: "7", name: "黑龙江省" },
    { id: "8", name: "上海市" },
    { id: "9", name: "河南省" },
    { id: "10", name: "内蒙古自治区" },
    { id: "11", name: "山东省" }
];

var cityArr = [{ id: "1-1", name: "市辖区" ,fid:"1"}, { id: "1-2", name: "市辖县" ,fid:"1"}, { id: "2-1", name: "市辖区" ,fid:"2"}, { id: "2-2", name: "市辖县",fid:"2" }, { id: "3-1", name: "石家庄市" ,fid:"3"}, { id: "3-2", name: "唐山市",fid:"3" }, { id: "3-3", name: "秦皇岛市" ,fid:"3"}, { id: "4-1", name: "西安市",fid:"4" }, { id: "4-2", name: "铜川市",fid:"4" }, { id: "4-3", name: "宝鸡市",fid:"4" }, { id: "4-4", name: "延安市",fid:"4" }, { id: "5-1", name: "太原市" ,fid:"5"}, { id: "5-2", name: "长治市",fid:"5" }, { id: "5-3", name: "晋城市",fid:"5" }, { id: "6-1", name: "沈阳市",fid:"6" }, { id: "6-2", name: "大连市",fid:"6" }, { id: "7-1", name: "哈尔滨市",fid:"7" }, { id: "7-2", name: "鸡西市",fid:"7" }, { id: "8-1", name: "市辖区",fid:"8" }, { id: "8-2", name: "市辖县",fid:"8" }, { id: "9-1", name: "郑州市",fid:"9" }, { id: "9-2", name: "安阳市",fid:"9" }, { id: "10-1", name: "呼和浩特市" ,fid:"10"}, { id: "11-1", name: "济南市" ,fid:"11"}, { id: "11-2", name: "青岛市",fid:"11" }];

var areaArr = [{ id: "1-1-1", name: "东城区" ,fid:"1-1"}, { id: "1-2-1", name: "密云县" ,fid:"1-2"}, { id: "2-1-1", name: "和平区",fid:"2-1" }, { id: "2-2-1", name: "宁河县",fid:"2-2" }, { id: "3-1-1", name: "长安区",fid:"3-1" }, { id: "3-2-1", name: "路南区",fid:"3-2" }, { id: "3-3-1", name: "海港区" ,fid:"3-3"}, { id: "4-1-1", name: "新城区" ,fid:"4-1"}, { id: "4-2-1", name: "王益区",fid:"4-2" }, { id: "4-3-1", name: "金台区" ,fid:"4-3"}, { id: "4-4-1", name: "宝塔区",fid:"4-4" }, { id: "5-1-1", name: "小店区",fid:"5-1" }, { id: "5-2-1", name: "壶关县",fid:"5-2" }, { id: "5-3-1", name: "阳城县" ,fid:"5-3"}, { id: "6-1-1", name: "和平区" ,fid:"6-1"}, { id: "6-2-1", name: "中山区",fid:"6-1" }, { id: "7-1-1", name: "道里区",fid:"7-1" }, { id: "7-2-1", name: "鸡冠区",fid:"7-2" }, { id: "8-1-1", name: "黄浦区",fid:"8-1" }, { id: "8-2-1", name: "崇明县",fid:"8-2" }, { id: "9-1-1", name: "二七区",fid:"9-1" }, { id: "9-2-1", name: "林州市" ,fid:"9-2"}, { id: "10-1-1", name: "回民区" ,fid:"10-1"}, { id: "11-1-1", name: "市中区",fid:"11-1" }, { id: "11-2-1", name: "黄岛区",fid:"11-2" }];


initCtrlPro();
function initCtrlPro() {
    var strHtml = '';
    provinceArr.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';
    })
    province.innerHTML = strHtml;
}
// console.log(cityArr);


function changePro() {

    var result = cityArr.filter(function (item) {
       
       
        if (item.fid == province.value) {
            console.log(item);
            return item;
        }
    })
    initCtrlCity(result);
   changeCity();
}

function initCtrlCity(data) {
    var strHtml = '';
    if (data.length == 0) {
        data.push({ id: '0', name: '--请选择城市--' });
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';

    })
    city.innerHTML = strHtml;
    

}  
function changeCity(data){

    var result = areaArr.filter(function (item) {
        
       
        if (item.fid == city.value) {
            console.log(item);
            return item;
        }
    })
    initArea(result);
}



function initArea(data) {

    var strHtml = '';
    if (data.length == 0) {
        data.push({ id: '0', name: '--请选择地区--' });
    }
    data.forEach(function (item) {
        strHtml += '<option value="' + item.id + '">' + item.name + '</option>';

    })
    area.innerHTML = strHtml;

}
