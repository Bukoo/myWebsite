function getElementsByClassName(node,classname) {
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	} else {
		var eles = node.getElementsByTagName('*');
		var results = new Array();
		for (var i = 0; i < eles.length; i++) {
			if (eles[i].className.indexOf(classname) != -1) {
				results[results.length] = eles[i];
			}
		}
		return results;
	}
}