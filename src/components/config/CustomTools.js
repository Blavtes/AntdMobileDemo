import moment from 'moment';
import JsonUtils from './JsonUtils'
import config from "../../router/config";
import Config from "./Config";

var CryptoJS = require('../../utils/aes.js')

var key = CryptoJS.enc.Utf8.parse("69324D76887D5795");
var iv = CryptoJS.enc.Utf8.parse("ujhfwe9ihv0as89w");
// var key = CryptoJS.enc.Utf8.parse("gjfax123");

export default {

    /**
     *
     * 身份证验证 提示错误
     *
     * */
    isCardID(sId) {
        var iSum = 0;
        if (!/^\d{17}(\d|x)$/i.test(sId)) return false;
        sId = sId.replace(/x$/i, "a");

        var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return false;
        //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
        return true;
    },

    /**
     *
     * 身份证验证 提示错误
     *
     * */
    isCardIDTipsMsg(sId) {
        var aCity = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        }
        var iSum = 0;
        var info = "";
        if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
        var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
        for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        if (iSum % 11 != 1) return "你输入的身份证号非法";
        //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
        return true;
    },

    /**
     * 验证密码是否合格 长度不小于6位数的数字和字母组合
     * @param {*} password
     */
    checkPassWord(password) {
        let str = password;
        if (str == null || str.length < 6) {
            return false;
        }
        let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
        if (reg.test(str))
            return true;
    }
    ,
    /**
     * 验证是否为手机号
     * @param {*} str
     */
    isPoneAvailable(str) {
        let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (str.length == 0 || str == null) {
            return false;
        } else if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    ,
    /**
     * 格式化银行卡  银行卡 4 4 4 4 4 最长19 最短16
     * */
    formatBankCard(text) {
        var v = text;
        v = v.replace(/\s/g, '');

        if (/\S{5}/.test(v)) {
            v = v.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
        }
        return v;
    }
    ,

    /**
     * 格式化身份证号 身份证 6 4 4 4 ->18 位 规则
     * */
    formatIdCard(idCard) {
        var v = idCard.replace(/\s/g, '');
        // this.warn('-- v ' + v.length);
        v = v.replace(/\s*/g, "");
        // var reg = new RegExp("x","g");//g,表示全部替换。

        v = v.replace("x", "X");

        var result = [];
        for (var i = 0; i < v.length; i++) {

            if (i == 6 || i == 10 || i == 14) {
                result.push(" " + v.charAt(i));
            } else {
                result.push(v.charAt(i));
            }

        }
        v = result.join("");
        this.warn('########aaa ' + v);
        return v;
    }
    ,

    /**
     * 格式化手机号 手机号 3 4 4
     * */
    formatPhoneNumber(number) {
        var v = number.replace(/\s/g, '');

        v = v.replace(/\s*/g, "");
        var result = [];
        for (var i = 0; i < v.length; i++) {
            if (i == 3 || i == 7) {
                result.push(" " + v.charAt(i));
            } else {
                result.push(v.charAt(i));
            }

        }
        v = result.join("");
        return v;
    }
    ,

    /**
     * 格式化去掉 空格
     * */
    formatSpaceData(str) {
        if (str.length > 0) {
	        var end = str;
	        end = end.replace(/\s/g, "");
	        return end;
        }
        return str;
    }
    ,

    /**
     * 判断身份信息是否小于18岁
     * @{*} true 是
     * */
    judgeAgeLessthan18(idCardStr) {
        if (idCardStr.length === 18) {
            var input = idCardStr.substr(6, 8);
            var year = parseInt(input.substr(0, 4));
            var month = parseInt(input.substr(4, 2));
            var day = parseInt(input.substr(6, 2));
            let date = new Date();
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let d = date.getDate();
            this.warn('input '+ input + ' y ' + year + ' month ' + month + ' dy ' + day + ' ny ' + y + ' nm ' + m + ' md ' + d);
            if (y - year > 18) {
                return false;
            } else if (y - year === 18) {
                if (m >  month) {
                    return false;
                } else if (m < month ) {
                    return true;
                } else {
                    if (d < day) {
                        return true;
                    }
                }
            }

        } else {
            return true;
        }
    },

    /**
     * 获取当前年月日
     * */
    formatDateTime() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },

    /**
     * 过滤只保留中文
     *
     * */
    formatChinese(str) {
        var value = str;
        return value.replace(/(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/, "");
    },

    /**
     *格式化金额，s 字符串，n，小数位数
     *
     * */
    formatMoney(s, n) {
        // console.warn(s);
        if (s === '' || s === '--' || s === '--.--')
            return '--.--';
        if (typeof s === "undefined") {
            return '--.--';
        }
        n = n >= 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        var t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        if (n > 0) {
            return t.split("").reverse().join("") + "." + r;
        }
        return t.split("").reverse().join("");
    }
    ,

    /**
     *格式化float金额，s 字符串，n，小数位数
     *
     * */
    formatFloatMoney(s, n) {
        if (s === '')
            return;
        n = n >= 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        var t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "" : "");
        }
        if (n > 0) {
            return t.split("").reverse().join("") + "." + r;
        }
        return t.split("").reverse().join("");
    }
    ,

    /**
     * 详情页时间格式化
     */
    formatDayTime(a) {
        // YYYY-MM-DD HH:mm:ss
        let day = moment().format('YYYY');
        // console.warn('day',a);
        let s = a;
        if (s.length > 6 && s.substring(0, 4) === day) {
            return s.substr(5, 5);
        }
        return s.substr(2, 8);
    }
    ,

    /**
     * 格式化月日
     * */
    formatChineseTime(a) {
        if (a.length === 10) {
            return a.substr(5, 2) + '月' + a.substr(8, 2) + '日';
        }
        return a;
    }
    ,


    /**
     * json 格式化
     * */
    jsonify(obj) {
        var seen = [];
        var json = JSON.stringify(obj, function (key, value) {
            if (typeof value === 'object') {
                if (!seen.indexOf(value)) {
                    return '__cycle__' + (typeof value) + '[' + key + ']';
                }
                seen.push(value);
            }
            return value;
        }, 4);
        return json;
    }
    ,

    /**
     * 每期收款
     *
     */
    calculateTerminallReceipt(detaileData, amount) {
        let interestRate = typeof (detaileData["interestRate"]) === "undefined" ? '0' : detaileData["interestRate"];
        let expectMonthEarningsRateFloat = interestRate * 0.01 / 12.0;

        let periods = typeof (detaileData["periods"]) === "undefined" ? '0' : detaileData["periods"];

        let repayMountInt = periods > 0 ? periods : detaileData["investTerms"] / 30;
        let collectionPerTerAmount = (amount * expectMonthEarningsRateFloat * Math.pow(1 + expectMonthEarningsRateFloat, repayMountInt)) / (Math.pow(1 + expectMonthEarningsRateFloat, repayMountInt) - 1);

        return this.formatFloatMoney(collectionPerTerAmount, 2);
    }
    ,

    /**
     * 预期收益
     *
     */
    calculateInterestAll(detaileData, amount, recipt) {
        let interestRate = typeof (detaileData["interestRate"]) === "undefined" ? '0' : detaileData["interestRate"];
        let investTermsInt = typeof (detaileData["limitTime"]) === "undefined" ? '0' : detaileData["limitTime"];
        let interestType = typeof (detaileData["interestType"]) === "undefined" ? '0' : detaileData["interestType"];
        if (interestType === '5') {


            let periods = typeof (detaileData["periods"]) === "undefined" ? '0' : detaileData["periods"];

            let repayMountInt = periods > 0 ? periods : detaileData["investTerms"] / 30.0;
            console.log('type ' + interestType + ' repayMountInt-> ' + repayMountInt + ' periods-> ' + periods + ' recipt->' + recipt);
            return recipt * repayMountInt - amount;
        } else {
            return interestRate * amount * 0.01 * investTermsInt / 360.0;
        }
    }
    ,

    /**
     * 每月应收款
     * */
    everyMonthTermAmount(detailData, amount) {
        let interestRate = typeof (detailData["interestRate"]) === "undefined" ? '0' : detailData["interestRate"];
        let expectMonthEarningsRateFloat = interestRate * 0.01 / 12.0;
        let repayMonthInt = 0;
        if (typeof (detailData['periods']) !== 'undefined') {
            repayMonthInt = parseFloat(detailData['periods']);
        } else if (typeof (detailData['limitTime']) !== 'undefined') {
            repayMonthInt = parseFloat(detailData['limitTime']) / 30;
        }

        let collectionPerTerAmount = (amount * expectMonthEarningsRateFloat * Math.pow(1 + expectMonthEarningsRateFloat, repayMonthInt)) / (Math.pow(1 + expectMonthEarningsRateFloat, repayMonthInt) - 1);
        return collectionPerTerAmount;
    }
    ,

    /**
     * 应收利息合计
     *
     */
    interestReceivableTotal(detailData, amount) {
        //每期收款 * 期数 - 输入值
        let calculateTerminallReceipt = this.calculateTerminallReceipt(detailData, amount);
        let repayMonthInt = 0;
        if (typeof (detailData['periods']) !== 'undefined') {
            repayMonthInt = parseFloat(detailData['periods']);
        } else if (typeof (detailData['limitTime']) !== 'undefined') {
            repayMonthInt = parseFloat(detailData['limitTime']) / 30;
        }
        //this.warn('calu  ' + calculateTerminallReceipt + ' repay ' + repayMonthInt)
        let result = calculateTerminallReceipt * repayMonthInt - amount;
        return result;
    }
    ,

    /**
     * warn
     * */
    warn(msg) {
        console.warn(msg);
    }
    ,

    /**
     * log
     * */
    log(msg) {
        console.log(msg);
    },

    /**
     * Encrypted
     * */
    cryptoEncrypted (data) {
	    // var data = "{\"list\":[{\"finishTime\":\"2018-11-21 17:59:07.007\",\"lastPageId\":\"com.xxx.app.ui.fragments.RecommendFragment\",\"pageId\":\"com.xxx.app.ui.activities.MainActivity\",\"sessionId\":\"f61131fc903246f88af9a441eac0eea8\",\"startTime\":\"2018-11-21 17:59:07.007\",\"userId\":\"113730\"},{\"finishTime\":\"2018-11-21 17:59:07.007\",\"lastPageId\":\"com.xxx.app.ui.activities.MainActivity\",\"pageId\":\"com.xxx.app.ui.fragments.RecommendFragment\",\"sessionId\":\"f61131fc903246f88af9a441eac0eea8\",\"startTime\":\"2018-11-21 17:59:07.007\",\"userId\":\"113730\"}],\"total\":2,\"type\":0}";
    this.log('cryptoEncrypted -> ' + JsonUtils.objToJson(data));
	    var encrypted = CryptoJS.AES.encrypt(JsonUtils.objToJson(data), key,
		    {
			    iv: iv,
			    mode: CryptoJS.mode.CBC,
			    padding: CryptoJS.pad.Pkcs7,
			    asBpytes: true
		    });
	    this.log(encrypted.toString());
	    return encrypted.toString();

    },

    /**
     * Decrypted
     * */
    cryptoDecrypted(data) {

	    // var encryptedBase64Str = "Ur81iOKPtqYw/iroz9XRBnf7awGh38yJtmrl64LVG7sfRCnm4bsBPzXG0oHDIvYTD5wpgs9lAfKm2nVPo0ruX1RTIeDLWLG+4FjmPoCNd7Kr2/CPLerOV+paNsFK4h3+oznW+rhbdNpqLoyAaLsogfsxu6iUSeRH25ubCf19obOf6G/sNwTdfjyQBuEQVuPiuee6/KhscXjBXmUIWdrngenpymcj/i0xpmgpP7wrAqciuauxyPdq5pt8cdXKgsvId/HzRJ9N0RhfssuT4lHxalXHwK0A4Xp9reOvhNzTBRLUGWZm8AHd6wILYTlbOodAilibmZgLIxI+eMxNbLg6V9fEoQ2/YYEmhZAZPuai4/VFcALrKPvnfy4etzBU0eAwMO09QKmbfLA7RGnqNC/MzrpSnmByD/5p48vPKM3aBUCiZ35BdAX7jSaJaOmyqUu5OLz1f08xvMMT4CnutCGJt1fbbfEC+HeMRNbL+yKNemjpk/Ni6jIFDTo00wIZbPNDoG1er4hzFdNneRSMPZ0cCGH3OCD/++OtsenfLWxv1twlbsDjb4EalqupTJFSC0T/14PSC5fk1zl0+Et5V9Akk8WbhPGNAyWlS0ZS/CJ2qoLKv4tigjAPI3DfAn1+4MPOUVRcfQvlTNE4LYPn+1xvNZO8JvG08p4dqYmJpsnm+JkmfX4f/c/Y4T8XwI0ls02ej1+60iPyuMOHMlpM55ZeAw==";
	    // data = 'KbfD3qbsK/M+6OzOmIfKgK/mSpjmtJkNGOIIU+vsRsU81Z5532lDFtHE6wfPohFkr1TLRcSncev4BFQTWrVdqS2LGc7VoYiTc7v3Or8MBDhyA5uhUAQaJopogHuO7WAGk47qQgjsewnjNJ70ppkgM103CmaQe3mt3VenokhAyfdlIFIg5seaR9b/y+1T88XRSDUl8P+i7Xd2sYd0C9lbdwdssHKTqk0oVkIZZ0dZMjjcv5A8GORzkvIuYec+hWtn5cwCtzhqBnIZMT5KtrcxgM/whc7nMJpvgRQNDpDBahdH+Gsrg4AE0fIzG0ShhwIYpZKOI++/lCwtflkzKbv1Hxx5DjiW7ZbAWtLrDSfv3svbwfqstKg8XSpaY3WgaUN0G3GHlq/GwpdnmBT57ihAeCz0nRIJ9mOx8j8QCpT4mw6HVGCEPwY6GmF2Z5rPLLbZKRLkkk4TvOaABVpFr/Bpems3nzu91cAArSKHj71HtHhnhxQ+BqcgJ4LgbQk5YJEHIrpStsySCAsxjum6i4GIqjnhHfuKU2/Gl8xLwdFC7ibzrfuDCtAN4MCGUqLk/fWRqcuHJyFglDzjULS/qcct3HfXEB6qaMV9XBgixhrqo6PkKssNniKwdfA0wFyEHMMhzQaJHLjYLa64D+nj8wM5FG9mp9ai7M6RpjIQBPJp7N4cmNpVUWzAwWSLXeMk59a7r5WClkhQsALi3NhOcddxMlhL1AQv4uIAsZW1kFvTTDgyXPeFDicKLc6ZvCYfnNcT8e/grgWJ/wfzuyu50rkhh/XOzDMP+7SQRM1z+vP63ff5AIoRhP6C3Tw+XLcLbIKEWdH6Tyy508WvJIA4xt4hA5Bl0aj4afTmoaVaLQHl0Z0yYBILkRBwoJLmM/oWASLhwS4evrS/DW/K1ldiVsy+NUxIc+sjhY3mTPXUG8LUb7QIbw2JYZaZ9Be+j/KeGv1kUwLW9DvK3qOetM0Nh6Yu9GM/eBmU0uudSh+YYWCiDvHZNtXJcH9q8a8TFiI3lJeyzJhTFI2k/gteE8sSXpg8rxv306VKt29+eU7AnstH2NqfgjDJU1b+ZGZruV9FfXRBdlDOAK9smtOQUvhUzo9xuYo1pJ1nEznQHUCkO9vlNk6pMsJPOwxOhwikEqgrmsEQmqZppVZE7DeTseiDH+6O3H9ORsgAtaJlx0x/LRaH7NSzRq66r8MJrC7z9NLXOECYl68qGEllsZuCv/MAGUoEX0RvTcBut34KdbE1AjMVTNQBsZ5INgV/qO25d6F7XmVjnuJdlxdUglLwqlt/ugzj2I3g7+7DFf7Zooui6Kd/M9DGEkrZrS0ygh4YRsWQ7zzuBjjupCzkEbTLXsc6eBKQCdGkuLaAuhkOjv0dr3MC5frgYEJiuoDLjXv1m2ALuuuzCZOLLtP1aulFfWLuRbReKbqMd7Rk1JEqhObZD/eiHhFx57eifPC3bXEQcBID7Z2FkDB2d4QPuoVrQ5A4tNdjGTPtDjrFRuBTOLQIwrgjk7maQauMgFnmuHcguTJVh3mhdsQMME4SRNxe0eLrrdssCUg5p6mEVOfJn5G5GhrM1cg6lv3cx5yWTFtay3G4hLSjqqs8X58JCLq9Urgt6DUl56aXzvmxWswng+W/C7PfNrJi+U7M6ICjEasp7hZtAM823cWj/T0E9mc5owO005jSK2mjTF8IfKFVoYq6QyCkGd5+gh8dOV5wRqDbqZ7BQ9vtIWKDoT1wmAw+cp5UsK4VdAjaPYbN0Ox48UBAAcQxGHmij8QFyaWNrn1l42gP81UX'
	    var decrypted = CryptoJS.AES.decrypt(data, key, {
		    iv: iv,
		    mode: CryptoJS.mode.CBC,
		    padding: CryptoJS.pad.Pkcs7,
		    asBpytes: true
	    });
	    this.log(CryptoJS.enc.Utf8.stringify(decrypted).toString());
	    return CryptoJS.enc.Utf8.stringify(decrypted).toString();
    },

    md5(data) {
      var md5 = CryptoJS.MD5(data);
      this.log('md5 -> '+ md5);
      return md5;
    },
    /**
     *  @param dicParams    标准json格式参数字典
     *  @param securityCode 安全码
     *
     *  @return mutableDic
     *
     * */
    dicParamsSetting(dicParams,securityDic,reqId) {


        var retDict = {};
        var originDic = {};
        originDic['platform']= "5";
        originDic['channel']= "950";
        originDic['appVersion']= "3.27.0";
        originDic['apiVersion']= "1.3";
        originDic['uuid']= Config.UUID;
        originDic['timestamp'] = this.timeString();
        originDic['phoneType'] = 'iPhone 7P';
        originDic['reqId'] = reqId;
        originDic['sysVersion'] = 'iOS 12.0.1';

        retDict['origin'] = originDic;
	    this.log('### dicParamsSetting1 ' + JsonUtils.objToJson(retDict));

	    if (dicParams) {
		    var param = this.cryptoEncrypted(dicParams);
            this.cryptoDecrypted(param);
		    retDict['param'] = param;
	    }
	    retDict['security'] = {'secType':'0','secCode':'0'};
	    this.log('### dicParamsSetting 2' +JsonUtils.objToJson(retDict));
	    return retDict;
    },

    /**
     * 时间戳
     * */
    timeString() {
        var date = new Date();
	    return Date.parse(date);
    }

}