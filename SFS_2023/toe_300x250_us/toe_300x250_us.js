(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGB8IgCiNIghCNIhFAAIggiNIgDCNIhQAAIAOj3IBoAAIAfCGIAfiGIBpAAIAOD3g");
	this.shape.setTransform(168.3,9.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgBeQgmgiAAg8QAAg6AmgjQAmgjA6AAQA8AAAmAjQAlAjAAA6QAAA8glAiQgmAig8ABQg6gBgmgigAglgqQgPAPAAAaQAAAZAPAQQAOAQAXABQAYgBAOgQQAPgQAAgZQAAgagPgPQgOgQgYgBQgXABgOAQg");
	this.shape_1.setTransform(138,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATB8IgmhTIgLAAIAABTIhRAAIAAj3IBsAAQAtAAAaASQAeAVAAAoQAAAxgqAZIA5BegAgegTIAUAAQALAAAGgEQAJgGAAgLQAAgLgJgGQgGgFgLAAIgUAAg");
	this.shape_2.setTransform(113.1,9.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVB8IAAj3ICrAAIAABAIhaAAIAAAnIBVAAIAAA/IhVAAIAABRg");
	this.shape_3.setTransform(90.675,9.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkBeIAkg9QARAOASAGQAUAHALAAQASAAAAgKQgCgJgQgEIgjgMQgYgJgKgJQgXgSAAgiQAAgkAdgYQAagWAuAAQA1AAAjAeIgeA6QgNgLgSgGQgRgHgMAAQgTAAAAAKQAAAHAQAFIANAEIARAFQAbAJAOAMQAYATAAAiQAAAnggAZQgcAWgtAAQgzAAgtgig");
	this.shape_4.setTransform(62.825,10.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoB8IAAi4Ig6AAIAAg/IDFAAIAAA/Ig7AAIAAC4g");
	this.shape_5.setTransform(43.425,9.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoB8IAAj3IBRAAIAAD3g");
	this.shape_6.setTransform(27.675,9.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVB8IAAj3ICrAAIAABAIhaAAIAAAnIBVAAIAAA/IhVAAIAABRg");
	this.shape_7.setTransform(12.425,9.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,-8.4,186.6,40), null);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoB8IAAi4Ig6AAIAAg/IDFAAIAAA/Ig7AAIAAC4g");
	this.shape.setTransform(147.325,2.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkBeIAkg9QARAOASAGQAUAHALAAQASAAAAgKQgCgJgQgEIgjgMQgYgJgKgJQgXgSAAgiQAAgkAdgYQAagWAuAAQA1AAAjAeIgeA6QgNgLgSgGQgRgHgMAAQgTAAAAAKQAAAHAQAFIANAEIARAFQAbAJAOAMQAYATAAAiQAAAnggAZQgcAWgtAAQgzAAgtgig");
	this.shape_1.setTransform(127.325,2.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZB8IAAj3ICvAAIAABAIheAAIAAAbIBZAAIAAA/IhZAAIAAAcIBiAAIAABBg");
	this.shape_2.setTransform(107.2,2.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrB8IAAj3IBnAAQApAAAVAJQAQAHAKANQALAPAAATQAAATgLAQQgKAOgOAGQAWAFANAQQANAPgBAVQAAAmgbASQgZAQgoAAgAgaBAIAaAAQAZAAAAgUQABgKgIgFQgGgEgMAAIgaAAgAgagcIARAAQALAAAFgEQAIgFAAgJQAAgKgIgFQgEgDgMAAIgRAAg");
	this.shape_3.setTransform(85.2,2.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZB8IAAj3ICwAAIAABAIhfAAIAAAbIBZAAIAAA/IhZAAIAAAcIBiAAIAABBg");
	this.shape_4.setTransform(55.6,2.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiB8IAAhcIhDAAIAABcIhRAAIAAj3IBRAAIAABaIBDAAIAAhaIBRAAIAAD3g");
	this.shape_5.setTransform(31.525,2.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoB8IAAi4Ig6AAIAAg/IDFAAIAAA/Ig7AAIAAC4g");
	this.shape_6.setTransform(8.325,2.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-3.6,-15.6,163,40), null);


(lib.logo_en_stacked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAVIAAgfIgJAAIAAgLIAdAAIAAALIgJAAIAAAfg");
	this.shape.setTransform(275.6406,331.4444,0.6853,0.6853);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAVIgDgVIgKAVIgDAAIgKgVIgDAVIgMAAIAHgqIAMAAIAHAWIAIgWIAMAAIAHAqg");
	this.shape_1.setTransform(278.6562,331.4444,0.6853,0.6853);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnCYIAAiSIhuidIBeAAIA3BTIA4hTIBeAAIhvCdIAACSg");
	this.shape_2.setTransform(261.591,340.371,0.6853,0.6853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVCYIAAkvICrAAIAABDIhcAAIAAAzIBXAAIAABCIhXAAIAAA0IBcAAIAABDg");
	this.shape_3.setTransform(244.0632,340.371,0.6853,0.6853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoCYIhmiEIAACEIhPAAIAAkvIBPAAIAAB9IBfh9IBiAAIh5CQICECfg");
	this.shape_4.setTransform(226.0385,340.371,0.6853,0.6853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhDBzQgwgvAAhEQAAhEAwguQAvgtBAAAQAiAAAmAQIAABeQgcghgogBQgjAAgXAZQgXAXAAAjQAAAkAYAYQAWAYAjAAQAmAAAeghIAABeIgIADQgkAMgdAAQg/AAgvgtg");
	this.shape_5.setTransform(204.9641,340.3539,0.6853,0.6853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4ByQgvgtAAhFQAAhDAvgtQAwgvBIAAQBJAAAwAvQAvAtAABDQAABFgvAtQgwAuhJAAQhIAAgwgugAg7g6QgaAXAAAjQAAAkAaAYQAYAYAjAAQAjAAAZgYQAZgYAAgkQAAgjgZgXQgZgZgjAAQgjAAgYAZg");
	this.shape_6.setTransform(183.0329,340.3539,0.6853,0.6853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5CYIAAh9IhxAAIAAB9IhPAAIAAkvIBPAAIAAB1IBxAAIAAh1IBPAAIAAEvg");
	this.shape_7.setTransform(158.8058,340.371,0.6853,0.6853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcCYIhKh1IAAB1IhPAAIAAkvIB7AAQAvAAAbAcQAZAaAAAoQAABFhDAPIBgB9gAgugPIAOAAQAYAAALgKQANgKAAgRQAAgSgNgKQgLgKgYAAIgOAAg");
	this.shape_8.setTransform(129.2502,340.371,0.6853,0.6853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah4ByQgvgtAAhFQAAhDAvgtQAwgvBIAAQBJAAAwAvQAvAtAABDQAABFgvAtQgwAuhJAAQhJAAgvgugAg7g6QgZAXgBAjQABAkAZAYQAYAYAjAAQAjAAAZgYQAagYgBgkQABgjgagXQgZgZgjAAQgjAAgYAZg");
	this.shape_9.setTransform(105.6742,340.3539,0.6853,0.6853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhWCYIAAkvICtAAIAABDIheAAIAAAzIBVAAIAABCIhVAAIAAB3g");
	this.shape_10.setTransform(85.9362,340.371,0.6853,0.6853);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AirEtIAApZIFWAAIAACEIi5AAIAABlICvAAIAACDIivAAIAABpIC5AAIAACEg");
	this.shape_11.setTransform(286.0579,285.3889,0.6853,0.6853);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcEpQg7gWgvgsQhihYAAiPQAAg9AXg6QAXg5ArgtQAtgvA+gaQA8gaBBAAQBHAABJAeIAAC+QgXgfgmgSQgkgSgqABQhHgBgtAxQgtAxAABGQAABJAtAvQAtAuBKABQAmAAAlgSQAkgSAZgdIAAC+QgxAPgWAFQgjAIgiAAQg/AAg6gYg");
	this.shape_12.setTransform(247.5927,285.4575,0.6853,0.6853);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4EtIiTjnIgCAAIAADnIicAAIAApZIDqAAQBdAAA3AtQA8AvAABdQAABBgiAuQgkAvg+ALIC9D3gAhdgeIAPAAQAwAAAagNQAigSAAgtQAAgrgigTQgagNgwABIgPAAg");
	this.shape_13.setTransform(209.8986,285.3889,0.6853,0.6853);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhqEmQg6gRgjgjQgogngOg8QgJgnAAhLIAAlRICdAAIAAE8QAABNAPAiQAYA1BCgBQBDABAYg1QAPgjAAhMIAAk8ICdAAIAAFRQAABKgJAoQgOA8gpAnQgjAjg5ARQgxAPg6AAQg5AAgxgPg");
	this.shape_14.setTransform(164.0145,285.9372,0.6853,0.6853);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjtDjQhfhdAAiRQABiEBlhaQBhhWCFgBQCFABBiBWQBlBaAACEQAACRhdBdQheBdiRAAQiQAAhdhdgAh3h4QgyAvAABAQAABMAyAzQAxAzBGAAQBHAAAxgzQAyg0AAhLQAAhAgygvQgzgwhFAAQhFAAgyAwg");
	this.shape_15.setTransform(114.7208,285.4232,0.6853,0.6853);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiEEwQgzgRgagYIAAiUQAcAhA2AYQAzAXArAAQAoAAAWgOQAVgPAAgZQAAgZgXgRQgXgPg4gVQicg5AAiIQAAhSA5g2QA5g2BfAAQA1AAAsAOQAtAQAaASIAACTQgYgcgsgUQgrgWgmABQgjAAgSAOQgTAPAAAZQAAAYAUAQQATAQA1AUQBOAcAuAuQAuAwAABDQAABXg9A2Qg8A3hrAAQhBAAgxgRg");
	this.shape_16.setTransform(69.0423,285.4575,0.6853,0.6853);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAyK0QiSAAiCg3QiCg3hghoQhbhhgxh9Qgyh9AAiDQAAkdDLjLQDLjLEdAAQFYADD6DGIAAEQQiEhziNg2QiNg3ijAAQi/AAh/CLQh0CAAACoQAAClB3CCQB/CLC5AAQA5AAAnAmQAmAmAAA6QAAA3grAoQgpAkgyAAg");
	this.shape_17.setTransform(171.0736,146.1775,0.6853,0.6853);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AmrJUQiUhIh0h5IAAkXQCECOCHBKQC5BnDgAAQC/AAB+iLQB1iAAAioQAAilh3iCQiAiLi4AAQg7AAglgmQgmgmAAg6QAAg4AqgnQAogkA0AAIAMAAQCSgBCCA4QCCA4BhBoQBaBhAyB8QAxB9AACCQAAEejLDLQhgBgh8A1QiAA3iNAAQjogCjDhfg");
	this.shape_18.setTransform(177.9613,183.3405,0.6853,0.6853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_en_stacked, new cjs.Rectangle(54.7,98.8,243.10000000000002,252.5), null);


(lib.endText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAVIgDgWIgKAWIgFAAIgJgWIgDAWIgLAAIAHgpIALAAIAIAUIAJgUIALAAIAHApgAghAVIAAgfIgJAAIAAgKIAeAAIAAAKIgJAAIAAAfg");
	this.shape.setTransform(148.3153,-9.1697,0.462,0.462);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLALQgFgEAAgHQAAgGAFgEQAEgEAHAAQAIAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgIAAQgHAAgEgEg");
	this.shape_1.setTransform(147.825,-1.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBDAAIAAAZIgkAAIAAAKIAiAAIAAAYIgiAAIAAALIAmAAIAAAZg");
	this.shape_2.setTransform(141.5,-4.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAwIgBg2IgNA2IgbAAIgMg2IgBA2IggAAIAHhfIAoAAIALAzIANgzIAoAAIAFBfg");
	this.shape_3.setTransform(131.05,-4.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAwIgEgNIgbAAIgDANIghAAIAhhfIAiAAIAiBfgAAGAKIgGgYIgHAYIANAAg");
	this.shape_4.setTransform(119.875,-4.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAmQgQgOAAgYQAAgXAQgOQAOgMAVAAQARAAAMAIQAFACAGAHIgVASQgIgJgLAAQgIAAgFAGQgGAHAAAKQAAALAGAGQAFAHAIAAQAKAAACgDIABgBIAAgHIgPAAIAAgWIAuAAIAAApIgFAFIgHAEIgIAFQgLAEgOAAQgUAAgOgMg");
	this.shape_5.setTransform(109.6242,-4.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHAwIgOggIgEAAIAAAgIggAAIAAhfIAqAAQARAAAKAHQAMAIAAAPQAAATgQAKIAWAkgAgLgHIAIAAQAEAAACgBQADgDAAgEQAAgEgDgDQgCgCgEAAIgIAAg");
	this.shape_6.setTransform(97.725,-4.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAmQgLgLAAgVIAAg2IAgAAIAAA4QAAAHADADQADADAFAAQAFAAAEgDQADgDAAgHIAAg4IAgAAIAAA2QAAAVgLALQgLALgWAAQgWAAgKgLg");
	this.shape_7.setTransform(87.65,-4.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAlQgPgOAAgXQAAgWAPgNQAPgOAWAAQAXAAAOAOQAPANAAAWQAAAXgPAOQgOANgXAAQgWAAgPgNgAgPgQQgFAGAAAKQAAAKAFAGQAHAGAIAAQAJAAAGgGQAGgGgBgKQABgKgGgGQgGgGgJAAQgIAAgHAGg");
	this.shape_8.setTransform(77.1,-4.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAwIAAgmIgig5IAkAAIANAgIAOggIAjAAIghA5IAAAmg");
	this.shape_9.setTransform(67.5,-4.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAwIAAhHIgWAAIAAgYIBLAAIAAAYIgWAAIAABHg");
	this.shape_10.setTransform(56.3,-4.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAwIAAhfIAfAAIAABfg");
	this.shape_11.setTransform(50.175,-4.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAwIAAhfIBDAAIAAAZIgjAAIAAAPIAhAAIAAAXIghAAIAAAgg");
	this.shape_12.setTransform(44.25,-4.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIBEAAIAAAZIglAAIAAAKIAiAAIAAAYIgiAAIAAALIAmAAIAAAZg");
	this.shape_13.setTransform(33.6,-4.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANAwIgNg1IgMA1IggAAIgchfIAiAAIALA1IANg1IAeAAIALA1IANg1IAgAAIgbBfg");
	this.shape_14.setTransform(22.3,-4.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endText, new cjs.Rectangle(13.2,-13.2,139.3,18), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAsIAAhXIA9AAIAAAXIghAAIAAAJIAeAAIAAAWIgeAAIAAAKIAiAAIAAAXg");
	this.shape.setTransform(82.05,-2.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAHAsIgOgdIgDAAIAAAdIgcAAIAAhXIAlAAQAPAAAKAHQALAHgBAOQAAARgOAJIAUAhgAgKgGIAHAAQADAAADgBQADgDAAgEQAAgDgDgDQgDgBgDAAIgHAAg");
	this.shape_1.setTransform(74.5,-2.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AghAhQgOgMAAgVQAAgUAOgMQANgMAUAAQAVAAANAMQANAMABAUQgBAVgNAMQgNAMgVAAQgUAAgNgMgAgNgOQgEAFAAAJQAAAJAEAFQAFAGAIAAQAJAAAEgGQAFgFABgJQgBgJgFgFQgEgGgJAAQgIAAgFAGg");
	this.shape_2.setTransform(64.9,-2.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAZAsIgBgxIgMAxIgXAAIgMgxIgBAxIgcAAIAFhXIAlAAIAKAvIALgvIAlAAIAFBXg");
	this.shape_3.setTransform(54.225,-2.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAMAsIgagwIABAPIAAAhIgcAAIAAhXIAfAAIAZAwIgBgPIAAghIAcAAIAABXg");
	this.shape_4.setTransform(41.325,-2.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAGAsIgMgdIgEAAIAAAdIgdAAIAAhXIAmAAQAPAAAJAHQAMAHgBAOQAAARgOAJIAUAhgAgKgGIAHAAQAEAAACgBQADgDgBgEQABgDgDgDQgCgBgEAAIgHAAg");
	this.shape_5.setTransform(32.75,-2.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAPAsIgDgNIgYAAIgEANIgdAAIAehXIAfAAIAeBXgAAGAKIgGgXIgGAXIAMAAg");
	this.shape_6.setTransform(23.675,-2.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgeAsIAAhXIA9AAIAAAXIghAAIAAAJIAfAAIAAAWIgfAAIAAAKIAiAAIAAAXg");
	this.shape_7.setTransform(15.65,-2.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgcAsIAAhXIAcAAIAAA/IAdAAIAAAYg");
	this.shape_8.setTransform(8.8,-2.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmpB/QhAAAAAg5IAAiLQAAg5BAAAINUAAQA/AAAAA5IAACLQAAA5g/AAg");
	this.shape_9.setTransform(45.35,-3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-3.6,-15.7,98,25.4), null);


(lib.Btext22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAcQgMgJAAgTQAAgSAMgKQAMgKATAAQAUAAAMAKQAMALAAARQAAATgMAJQgMALgUAAQgTAAgMgLg");
	this.shape.setTransform(97.775,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBhQgpgjABg+QAAg9ApgjQAkgfA3AAQArAAAgATQAMAHARARIg2AtQgVgVgdgBQgWAAgOAQQgPARAAAcQAAAcAPARQAOAQAWAAQAZAAAHgHIACgCIAAgSIgmAAIAAg7IB1AAIAABrIgNANIgRALQgLAHgKAEQgcALgkAAQg1AAglgfg");
	this.shape_1.setTransform(77.95,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArB8IgKgjIhFAAIgKAjIhVAAIBXj3IBZAAIBXD3gAARAbIgShCIgSBCIAkAAg");
	this.shape_2.setTransform(52.15,3.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATB8IgmhTIgLAAIAABTIhSAAIAAj3IBsAAQAuAAAZASQAfAVAAAoQAAAxgqAZIA4BegAgfgTIAVAAQAMAAAFgEQAJgGAAgLQAAgLgJgGQgFgFgMAAIgVAAg");
	this.shape_3.setTransform(28.65,3.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah0B8IAAj3IBdAAQBAAAAiAbQAqAgAABAQAABCgqAfQgiAbhAAAgAgjA4IATAAQAYAAAMgNQAPgOAAgdQAAgfgPgNQgMgNgYAAIgTAAg");
	this.shape_4.setTransform(3.2,3.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4AfIAAg9IBxAAIAAA9g");
	this.shape_5.setTransform(-17.225,6.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZB8IAAj3ICvAAIAABAIheAAIAAAbIBZAAIAAA/IhZAAIAAAcIBiAAIAABBg");
	this.shape_6.setTransform(-34.2,3.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhgBeQgmgiAAg8QAAg6AmgjQAmgiA6gBQA8ABAmAiQAlAjAAA6QAAA8glAiQgmAjg8AAQg6AAgmgjgAgmgrQgOAQAAAaQAAAaAOAQQAPAQAXAAQAYAAAOgQQAPgQAAgaQAAgagPgQQgOgPgYAAQgXAAgPAPg");
	this.shape_7.setTransform(-59.2,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoB8IAAi4Ig6AAIAAg/IDFAAIAAA/Ig7AAIAAC4g");
	this.shape_8.setTransform(-81.675,3.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-15,199.89999999999998,40);


(lib.Btext1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgBeQgmgjAAg7QAAg6AmgjQAmgjA6ABQA7gBAmAjQAmAjAAA6QAAA7gmAjQgmAig7AAQg6AAgmgigAgmgrQgOAQAAAbQAAAZAOAPQAPARAXgBQAYABAPgRQAOgPAAgZQAAgbgOgQQgPgQgYAAQgXAAgPAQg");
	this.shape.setTransform(136.7,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoB8IAAi4Ig6AAIAAg/IDFAAIAAA/Ig7AAIAAC4g");
	this.shape_1.setTransform(114.225,-10.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah0B8IAAj3IBdAAQBAAAAiAbQAqAgAABAQAABCgqAfQgiAbhAAAgAgjA4IATAAQAYAAAMgNQAPgOAAgdQAAgfgPgNQgMgNgYAAIgTAAg");
	this.shape_2.setTransform(84.9,-10.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArB8IgKgjIhGAAIgJAjIhUAAIBWj3IBZAAIBXD3gAAQAbIgRhCIgSBCIAjAAg");
	this.shape_3.setTransform(58.65,-10.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZB8IAAj3ICwAAIAABAIhfAAIAAAbIBZAAIAAA/IhZAAIAAAcIBiAAIAABBg");
	this.shape_4.setTransform(35.8,-10.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiB8IAAhcIhDAAIAABcIhRAAIAAj3IBRAAIAABaIBDAAIAAhaIBRAAIAAD3g");
	this.shape_5.setTransform(11.725,-10.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Btext1, new cjs.Rectangle(-3.6,-28.8,156.7,40), null);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text2();
	this.instance.setTransform(-3.6,-48.6,1,1,0,0,0,90,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-81,186.6,40);


// stage content:
(lib.toe_300x250_us = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// endCta
	this.instance = new lib.CTA();
	this.instance.setTransform(164.4,234.7,1,1,0,0,0,62,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).to({alpha:1},22,cjs.Ease.cubicInOut).wait(12));

	// EndText
	this.instance_1 = new lib.endText();
	this.instance_1.setTransform(-90.95,194.5,1,1,0,0,0,84.2,10.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).to({x:149.05},20,cjs.Ease.quartOut).wait(30));

	// Logo
	this.instance_2 = new lib.logo_en_stacked();
	this.instance_2.setTransform(148.25,92.4,0.4,0.4,0,0,0,177.5,184.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({alpha:1},29,cjs.Ease.quartInOut).wait(45));

	// cta
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(84.45,228.4,1,1,0,0,0,62,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(72));

	// Btext2
	this.instance_4 = new lib.Btext22();
	this.instance_4.setTransform(-161.15,152.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({x:110.05},22,cjs.Ease.quartOut).wait(74).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(75));

	// Btext1
	this.instance_5 = new lib.Btext1();
	this.instance_5.setTransform(-132,158,1,1,0,0,0,74.8,24);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({x:94.8,y:156.8},22,cjs.Ease.quartOut).wait(75).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(78));

	// text2
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(-141.95,152.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:110.05},21,cjs.Ease.quartOut).wait(77).to({startPosition:0},0).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(81));

	// text1
	this.instance_7 = new lib.text1();
	this.instance_7.setTransform(-184.8,77.6,1,1,0,0,0,74.8,24);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({x:94.8},21,cjs.Ease.quartOut).wait(78).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},4).wait(81));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},47).wait(159));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-113.2,-50,413.2,475);
// library properties:
lib.properties = {
	id: '758E0282264D47629A39BAD509FAEF4B',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['758E0282264D47629A39BAD509FAEF4B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;