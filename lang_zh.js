document.title = "舰队Collection 开发工具"
var dict = { "KanColle Development Tools": "舰队Collection 开发工具",
"Development Simulator & Recipe Generator": "开发模拟器 & 复合公式生成器",
"Development Simulator": "开发模拟器",
"Recipe Generator": "复合公式生成器",
"Fuel": "油",
"Ammunition": "弹",
"Steel": "钢",
"Bauxite": "铝",
"Secretary": "秘书舰",
"HQ Level": "提督等级",
"Torpedo Family": "水雷系",
"Gunboat Family": "炮舰系",
"Carrier Family": "航母系",
"Name": "名称",
"Percentage": "概率",
"Failed": "失败",
"Project Homepage": "项目页面",
"Feedback": "反馈",
"Data Source(Chinese)": "数据来源" }

var itemtypenames = [ "小口径主炮",
"中口径主炮",
"大口径主炮",
"副炮",
"机枪",
"对空强化弹",
"穿甲弹",
"鱼雷 & 微型潜艇",
"舰载战斗机",
"舰载鱼雷机",
"舰载轰炸机",
"舰载侦查机",
"水上机",
"电探",
"对潜装备",
"引擎",
"增设装甲板",
"路基攻击机",
"简易运输桶" ]

$(function(){
	var $cs = $(".i18n")
	for (var i = 0; i < $cs.length; ++i) {
		var t = dict[$cs[i].textContent]
		if (t != null) $cs[i].textContent = t
	}
})