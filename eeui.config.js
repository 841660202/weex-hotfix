/**
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-06 11:52:15
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-06 21:56:21
 * @Descripttion: 
 */
/**
 * 配置文件
 * 参数详细说明：https://eeui.app/guide/config.html
 */
module.exports = {
	"serviceUrl": "",
	"homePage": "login.js",
	"homePageParams": {
		// "statusBarAlpha": 255,
		"statusBarAlpha": 0,
		"statusBarType": 'immersion',
	},
	// "appKey": "L30ToT6JUhIru140hIHyESAq8gJWzGzY",
	"appKey": "JCZgPB97KsaEjoDxGC2DriO2GklqUxbe",
	"wxpay": {
		"appid": ""
	},
	"rongim": {
		"ios": {
			"enabled": false,
			"appKey": "vnroth0kv8o7o",
			"appSecret": "5mILjdXtXid7iM"
		},
		"android": {
			"enabled": false,
			"appKey": "vnroth0kv8o7o",
			"appSecret": "5mILjdXtXid7iM"
		}
	},
	"umeng": {
		"ios": {
			"enabled": false,
			"appKey": "5cfa398c3fc1959f7b000e9b",
			"channel": "eeuidemo"
		},
		"android": {
			"enabled": false,
			"appKey": "5cfa3958570df3a0e8001015",
			"messageSecret": "49d0bac141dc8dc6df35d210a9c79289",
			"channel": "eeuidemo"
		}
	}
};