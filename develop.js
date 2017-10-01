Array.prototype.deepCopy = function() {
	var temp = []
	for (var i = 0; i < this.length; ++i) {
		if (this[i] == undefined) temp[i] = this[i]
		else if (this[i] instanceof Array) temp[i] = this[i].deepCopy()
		else if (typeof(this[i]) == "object") temp[i] = this[i].clone()
		else temp[i] = this[i]
	}
	return temp
}

var developList = [
	[
		[[0, 6], [1, 10], [2, 6], [3, 6], [4, 2], [5, 2], [6, 4], [11, 6], [12, 2], [13, 4], [14, 4], [15, 2], [16, 4], [18, 4], [21, 2], [22, 4], [23, 2], [25, 2], [26, 2], [31, 2], [35, 2], [41, 2], [45, 4], [46, 2], [47, 2], [51, 2], [55, 4], [56, 2], [60, 4]],
		[[0, 2], [1, 4], [2, 4], [3, 4], [4, 4], [5, 2], [6, 4], [7, 2], [10, 4], [11, 4], [12, 2], [14, 2], [15, 2], [16, 4], [17, 2], [18, 2], [19, 2], [21, 2], [22, 4], [23, 2], [24, 2], [31, 4], [32, 2], [35, 4], [36, 2], [45, 2], [46, 2], [47, 2], [51, 12], [52, 2], [55, 4], [56, 4]],
		[[0, 6], [1, 10], [2, 6], [3, 6], [4, 2], [5, 2], [6, 4], [11, 6], [12, 2], [13, 4], [14, 4], [15, 2], [16, 4], [18, 4], [21, 2], [22, 4], [23, 2], [25, 2], [26, 2], [31, 2], [35, 2], [41, 2], [45, 4], [46, 2], [47, 2], [51, 2], [55, 4], [56, 2], [60, 4]],
		[[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [7, 2], [10, 4], [15, 2], [16, 2], [17, 2], [19, 2], [24, 2], [25, 4], [26, 4], [27, 2], [30, 2], [31, 6], [32, 2], [35, 4], [36, 4], [41, 10], [42, 4], [45, 2], [46, 2], [47, 2], [51, 10], [52, 2], [53, 8], [54, 2], [55, 2], [56, 2]]
	],	[
		[[0, 4], [1, 2], [2, 2], [3, 6], [4, 4], [5, 6], [10, 2], [11, 8], [12, 4], [14, 8], [15, 6], [16, 4], [17, 2], [18, 2], [19, 4], [20, 4], [21, 4], [22, 4], [41, 2], [45, 2], [47, 2], [48, 2], [49, 2], [50, 2], [55, 4], [56, 2], [57, 4], [58, 2]],
		[[3, 2], [4, 4], [5, 6], [7, 10], [8, 8], [9, 4], [10, 6], [11, 8], [12, 4], [14, 2], [15, 2], [16, 4], [17, 2], [18, 2], [19, 4], [20, 2], [21, 4], [22, 4], [24, 2], [31, 2], [32, 2], [35, 2], [36, 2], [46, 2], [47, 2], [55, 4], [56, 4]],
		[[0, 4], [1, 2], [2, 2], [3, 6], [4, 4], [5, 6], [10, 2], [11, 8], [12, 4], [14, 8], [15, 6], [16, 4], [17, 2], [18, 2], [19, 4], [20, 4], [21, 4], [22, 4], [41, 2], [45, 2], [47, 2], [48, 2], [49, 2], [50, 2], [55, 4], [56, 2], [57, 4], [58, 2]],
		[[3, 2], [4, 2], [5, 2], [7, 10], [8, 8], [9, 4], [10, 8], [16, 2], [17, 2], [18, 2], [19, 2], [20, 2], [24, 2], [25, 4], [26, 6], [27, 4], [28, 2], [31, 4], [32, 4], [33, 2], [35, 6], [36, 2], [41, 6], [42, 4], [46, 2], [47, 2], [55, 2], [56, 2]]
	],	[
		[[0, 2], [1, 2], [2, 8], [10, 10], [14, 4], [15, 6], [17, 2], [18, 4], [24, 6], [25, 4], [26, 6], [27, 4], [30, 2], [41, 12], [42, 4], [43, 2], [45, 2], [46, 2], [47, 2], [48, 2], [49, 2], [50, 2], [55, 6], [56, 4]],
		[[0, 2], [1, 2], [2, 8], [10, 2], [14, 4], [15, 6], [17, 2], [18, 2], [19, 6], [24, 2], [26, 2], [27, 2], [31, 6], [32, 10], [33, 4], [34, 2], [35, 8], [36, 6], [37, 2], [38, 2], [41, 12], [42, 8]],
		[[0, 2], [1, 2], [2, 8], [10, 10], [14, 4], [15, 6], [17, 2], [18, 4], [24, 6], [25, 4], [26, 6], [27, 4], [30, 2], [41, 12], [42, 4], [43, 2], [45, 2], [46, 2], [47, 2], [48, 2], [49, 2], [50, 2], [55, 6], [56, 4]],
		[[19, 6], [25, 4], [26, 10], [27, 8], [28, 2], [29, 2], [30, 2], [31, 6], [32, 10], [33, 4], [34, 2], [35, 10], [36, 6], [37, 2], [38, 2], [39, 4], [40, 2], [41, 8], [42, 6], [45, 2], [48, 2]]
	]
]

var head = document.createElement("tr")
var failtr = document.createElement("tr")
var collapse = document.createElement("a")
;(function(){
	var tnode = document.createElement("th")
	tnode.className = "i18n"
	tnode.appendChild(document.createTextNode(getString("Name")))
	tnode.style.width = "250px"
	head.appendChild(tnode)
	tnode = document.createElement("th")
	tnode.className = "i18n"
	tnode.appendChild(document.createTextNode(getString("Percentage")))
	tnode.style.width = "50px"
	head.appendChild(tnode)
	failtr.className = "failtr"
	tnode = document.createElement("td")
	var tnode2 = document.createElement("span")
	tnode2.innerHTML = "Failed"
	tnode2.className = "i18n"
	tnode.appendChild(tnode2)
	tnode.appendChild(document.createTextNode(" "))
	collapse.href = "javascript:void(0);"
	collapse.onclick = function() {
		if (this.innerHTML == "[+]") {
			$(this.parentNode.parentNode.parentNode).find(".fail").css("display", "table-row")
			this.innerHTML = "[-]"
		} else {
			$(this.parentNode.parentNode.parentNode).find(".fail").css("display", "")
			this.innerHTML = "[+]"
		}
	}
	collapse.innerHTML = "[+]"
	tnode.appendChild(collapse)
	failtr.appendChild(tnode)
	tnode = document.createElement("td")
	failtr.appendChild(tnode)
	$(function(){ $("#result")[0].appendChild(head) })
}())

function develop(fuel, ammo, steel, baux, secretary, isitaly, hqlevel) {
	var layer = 0, max = fuel
	if (steel > max) {
		layer = 2
		max = steel
	}
	if (ammo > max) {
		layer = 1
		max = ammo
	}
	if (baux > max) {
		layer = 3
		max = baux
	}
	var list = developList[secretary][layer].deepCopy()
	if ((secretary == 2) && (layer == 1 || layer == 3) && (fuel >= 240) && (ammo >= 260) && (baux >= 250)) {
		for (var i = 0; i < list.length; ++i) {
			if (items[list[i][0]][0] == 21) list[i][1] -= 2
			if (items[list[i][0]][0] == 23) list[i][1] -= 2
			if (items[list[i][0]][0] == 24) list[i][1] -= 2
			if (items[list[i][0]][0] == 25) list[i][1] -= 2
			if (list[i][1] <= 0) {
				list.splice(i, 1)
				--i
			}
		}
		list.push([59, 8])
		list.sort(listSort)
	}
	var succ = [], fail = []
	var failprob = 100
	for (var i = 0; i < list.length; ++i) {
		var result = new developResult(list[i][0], list[i][1], [fuel, ammo, steel, baux], hqlevel)
		if (result.successful) {
			succ.push(result)
			failprob -= result.percentage
		} else fail.push(result)
	}
	/*
	var text = "<tr><td class=\"i18n\">" + getString("Name") + "</td><td class=\"i18n\">" + getString("Percentage") + "</td></tr>"
	for (var i = 0; i < succ.length; ++i) text += succ[i].toTRHTML()
	text += "<tr class=\"fail\"><td><span class=\"i18n\">Failure</span> <a class=\"i18n\" href=\"javascript:void(0);\">[+]</a></td><td></td></tr>"
	for (var i = 0; i < fail.length; ++i) text += fail[i].toTRHTML()
	$("#result")[0].innerHTML = text
	*/
	var table = $("#result")[0]
	while (table.children[1] != undefined) table.removeChild(table.children[1])
	for (var i = 0; i < succ.length; ++i) table.appendChild(succ[i].toTRNode())
	failtr.children[1].innerHTML = failprob + "%"
	table.appendChild(failtr)
	for (var i = 0; i < fail.length; ++i) table.appendChild(fail[i].toTRNode())
}

function listSort(i1, i2) {
	return i1[0] - i2[0]
}

function resultSort(r1, r2) {
	return (r1.successful ? 0: 1) - (r2.successful ? 0 : 1)
}