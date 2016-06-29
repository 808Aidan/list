var colors = [
"red"
"orange"
"yellow"
"green"
"blue"
"indigo"
"violent"
];

var count = 0;

var cycle = function[array] {
	console.log(array[count]);
	if (count == array. length-1) {
		count = 0;
	} else {
		count++;
	};
};

var display = function(){
	document.body.style.color = colors[count];
	cycle(colors);

}

var listall = function(array) {
	for (var i = 0;  i < array.length; i++) {
		console.log(i)
		document.getElementById('colorspace').innerhtml += "<li>" + array[i] + "</li";
	}
}

listall(colors)