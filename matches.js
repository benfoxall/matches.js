
(function(){

	var matches = function(query, array){

		// the element that will be populated
		var maxEl, maxScore = -1;

		var tokens = query.split(' ');
		var tokenCount = tokens.length;

		for (var i = array.length - 1; i >= 0; i--) {
			var el = array[i];
			var score = 0;

			var elToks = el.split(' ');

			for (var t = tokens.length - 1; t >= 0; t--) {
				if(elToks.indexOf(tokens[t]) != -1){
					score += 1/tokenCount;
				}
			}

			if(score > maxScore){
				maxScore = score;
				maxEl = el;
			}
		}

		return maxEl;
	};


	// "export"
	this.matches = matches;

}).call(this);