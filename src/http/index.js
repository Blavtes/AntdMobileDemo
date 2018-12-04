'use strict';

import Config from "../components/config/Config";
import CustomTools from "../components/config/CustomTools";
import JsonUtils from "../components/config/JsonUtils";
// var baseUrl = Config.Host_Name;
var baseUrl = '/api';
let source;
// "target": "http://218.17.205.130:18285/APP_SERVER/",

// http://10.100.153.27:8041/APP_SERVER/


function checkStatus(response) {
	console.log('response ' + JsonUtils.objToJson(response) + ' response.status ' + response.status)
	if (response.status >= 200 && response.status <= 300 ) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}
function parseJSON(response) {
	console.log('parseJSON '  + response)
	return response.json();
}


function cookieMd5Str(data) {
	var keyArray = ["origin", "param", "security"]
	var isSetFirstone = false;
	var enumStr = '';
	for (var index = 0; index < keyArray.length; index++) {
		var keyStr = keyArray[index];
		var objValue = data[keyStr];
		if (objValue) {
			if (!isSetFirstone) {
				CustomTools.log('cookieMd5Str ' + typeof objValue);
				if (typeof objValue === 'object') {
					enumStr = enumStr + keyStr + '=' + JsonUtils.objToJson(objValue);
				}  else {
					enumStr = enumStr + keyStr + '=' + objValue;
				}
				isSetFirstone = true;
			} else {
				if (typeof objValue === 'object') {
					enumStr = enumStr + '&' + keyStr + '=' + JsonUtils.objToJson(objValue);

				} else {
					enumStr = enumStr + '&' + keyStr + '=' + objValue;
				}

			}
		}
		CustomTools.log('cookieMd5Str ' + typeof objValue);
	}
	enumStr =  enumStr +'&key=gjfax123';

	CustomTools.log('enumStr ' + enumStr)

	return enumStr;

}

/**
 * 普通请求
 * @param {*url,*method,*data} options
 */
function request(url, data, success,error,fail) {

	// const Authorization = localStorage.getItem('x-access-token')
	var options = {}
	// options = {...options}
	// options.mode = 'cors'
	options.method = 'POST'
	// options.credentials =  'include'

	CustomTools.log('##### request ' + url);

	// delete options.url
	var postData = {};
	if(data){
		// delete options.data
		 postData = CustomTools.dicParamsSetting(data, null, "12312312312");
		options.body = JSON.stringify(postData)
	} else {
		 postData = CustomTools.dicParamsSetting(null, null, "12312312312");
		options.body = JSON.stringify(postData)
	}
	console.log('--- str ' + JsonUtils.jsonToString(postData));
	cookieMd5Str(postData);
	var sign = '' + CustomTools.md5(cookieMd5Str(postData));
	CustomTools.log('sing type ' + typeof sign);
	var signStr = sign.toUpperCase();

	console.log('md5 '+signStr);

	options.headers={
		// 'x-access-token':Authorization,
		'Content-Type':'application/json;charset=UTF-8',
		'Accept': 'application/json',
		'sign':signStr
	}
	options.cookie={
		'sign':CustomTools.md5(cookieMd5Str(postData))
	}
	console.log('option  ' + JSON.stringify(options));
		//,{credentials: 'include'}
	fetch(baseUrl + url,options)
		.then(checkStatus)
		.then(parseJSON)

		.then( (data) => {
			console.log('json ' + JsonUtils.objToJson(data));
			if (data.retInfo.status === 'success' || data.retInfo.status === 'SUCCESS') {
				if (success) {
					var reseult = CustomTools.cryptoDecrypted(data.result);
					console.log('result2 ' + reseult);
					success(reseult);
				}
			} else {
				if (error) {
					var errorCode = data.retInfo.errorCode;
					var note = data.retInfo.note;
					error({'errorCode':errorCode,'note':note});
				}
			}
		})
		// .then(data => {console.log('data ' + data)})
		.catch((fail) =>  {
			console.log('fail ' + fail.toString());
			if (fail) {
				fail(fail.toString())
			}
		});
}



function getHomeLists(success,error,fail)  {
	// return request(Config.GJS_GJF_FinancialProductList);

	// {
		request(Config.GJS_GJF_FinancialProductList,null,success,error,fail);
}

function login(phone,pwd,success,error,fail) {
	request('remote/login/login',{'userName':phone,'password':pwd,'deviceNo':Config.UUID},success,error,fail);
}

export let axiosRequest = request;
// 暴露给外面使用
export let cancelRequst = () => {
	if (source) source();
};

export default {

	getHomeLists,
	login,
}