// JavaScript Document

var outerElement = document.getElementsByTagName("body");
var dom = "";
var that = this;
jsonCreator(outerElement[0]);

function jsonCreator(wrapper) {

	for ( var i = 0; i < wrapper.childNodes.length; i++) {
		if (wrapper.childNodes[i].nodeType != 3) { // to not include #text node
													// in the JSON cause they
													// mean nothing in DOM
			dom = dom + "{ tag:\"" + wrapper.childNodes[i].nodeName
					+ "\", content:\"" + wrapper.childNodes[i].nodeValue + "\"";
			if (wrapper.childNodes[i].childNodes[0]) { // contains children
														// then only we loop
				dom = dom + ", children:[";
				jsonCreator(wrapper.childNodes[i]);
				dom = dom + "]";
				if (wrapper.childNodes[i].nextSibling) { //if sibling then comma else not
					dom = dom + "},";
				} else {
					dom = dom + "}";
				}
			} else {
				dom = dom + "}";
			}
		}
	}

}
console.log(dom); //dom contains the required o/p in string format which can be parsed to json
