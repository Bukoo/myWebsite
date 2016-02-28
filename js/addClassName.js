function addClassName (node, cname) {
	// body...
	if (!node) return;
	if (!node.className) {
		node.className = cname;
	} else {
		var tmp = node.className + " " + cname;
		node.className = tmp;
	}
}