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
	this.shape.graphics.f("#FFFFFF").s().p("AAUCAIgohVIgLAAIAABVIhTAAIAAj/IBvAAQAuAAAaATQAgAWAAApQAAAygqAaIA4BhgAgfgTIAVAAQAMAAAFgFQAKgGgBgLQABgMgKgGQgFgFgMAAIgVAAg");
	this.shape.setTransform(260,18.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBhQgngkAAg9QAAg8AngkQAngjA8AAQA9AAAnAjQAnAkAAA8QAAA9gnAkQgnAjg9AAQg8AAgngjgAgngsQgPAQAAAcQAAAZAPARQAPAQAYAAQAYAAAPgQQAPgRAAgZQAAgcgPgQQgPgQgYAAQgYAAgPAQg");
	this.shape_1.setTransform(232.025,18.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpCAIAAi9Ig8AAIAAhCIDLAAIAABCIg9AAIAAC9g");
	this.shape_2.setTransform(208.9,18.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpCAIAAj/IBTAAIAAD/g");
	this.shape_3.setTransform(192.675,18.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhnBhIAlg/QARAOATAHQAVAHALAAQASAAABgLQgDgJgQgEIgkgMQgYgKgLgJQgYgTAAgiQABglAdgZQAbgWAvAAQA3AAAlAfIghA7QgNgMgRgGQgSgHgMAAQgUAAAAALQAAAHAQAFIAOAEIARAFQAcAJAOAMQAYAUABAjQAAAogiAaQgcAWguAAQg0AAgvgig");
	this.shape_4.setTransform(175.95,18.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpCAIAAj/IBTAAIAAD/g");
	this.shape_5.setTransform(159.575,18.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoCAIhgj/IBZAAIAvCTIAwiTIBZAAIhgD/g");
	this.shape_6.setTransform(140.275,18.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpCAIAAhkIhYibIBcAAIAlBXIAmhXIBdAAIhaCbIAABkg");
	this.shape_7.setTransform(107.45,18.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATCAIgnhVIgLAAIAABVIhUAAIAAj/IBvAAQAvAAAbATQAfAWAAApQAAAygrAaIA6BhgAgggTIAWAAQAMAAAGgFQAIgGABgLQgBgMgIgGQgHgFgLAAIgWAAg");
	this.shape_8.setTransform(84.9,18.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbCAIAAj/IC0AAIAABCIhhAAIAAAcIBbAAIAABBIhbAAIAAAdIBkAAIAABDg");
	this.shape_9.setTransform(61.15,18.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoCAIhgj/IBZAAIAvCTIAwiTIBZAAIhgD/g");
	this.shape_10.setTransform(36.775,18.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbCAIAAj/IC0AAIAABCIhiAAIAAAcIBcAAIAABBIhcAAIAAAdIBlAAIAABDg");
	this.shape_11.setTransform(13.1,18.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,273.2,41), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgpCAIAAi9Ig8AAIAAhCIDLAAIAABCIg9AAIAAC9g");
	this.shape.setTransform(170.85,-17.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtCAIgLgkIhHAAIgKAkIhXAAIBZj/IBbAAIBZD/gAARAcIgShEIgTBEIAlAAg");
	this.shape_1.setTransform(147.55,-17.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbCAIAAj/IC0AAIAABCIhhAAIAAAcIBbAAIAABBIhbAAIAAAdIBkAAIAABDg");
	this.shape_2.setTransform(124.05,-17.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATCAIgnhVIgLAAIAABVIhUAAIAAj/IBwAAQAuAAAbATQAfAWAAApQAAAygqAaIA4BhgAgfgTIAVAAQAMAAAFgFQAKgGgBgLQABgMgKgGQgGgFgLAAIgVAAg");
	this.shape_3.setTransform(101.95,-17.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpCAIAAi9Ig8AAIAAhCIDLAAIAABCIg9AAIAAC9g");
	this.shape_4.setTransform(78.4,-17.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcCAIAAj/IC1AAIAABCIhiAAIAAAcIBcAAIAABBIhcAAIAAAdIBmAAIAABDg");
	this.shape_5.setTransform(50.65,-17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiCAIgiiQIghCQIhVAAIhIj/IBXAAIAfCOIAfiOIBTAAIAfCOIAgiOIBWAAIhID/g");
	this.shape_6.setTransform(20.775,-17.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,-36,183.2,41), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAVIgDgWIgKAWIgFAAIgJgWIgDAWIgLAAIAHgpIALAAIAIAUIAJgUIALAAIAHApgAghAVIAAgfIgJAAIAAgKIAeAAIAAAKIgJAAIAAAfg");
	this.shape.setTransform(329.425,339.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqEtIAApZIFVAAIAACEIi5AAIAABlICwAAIAACDIiwAAIAABpIC5AAIAACEg");
	this.shape_1.setTransform(337.675,272.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcEpQg7gWgwgrQhhhaAAiNQAAg+AXg6QAXg5ArgtQAtgvA+gaQA8gaBAAAQBIAABJAeIAAC+QgYgfglgSQglgSgpABQhHgBgtAxQgtAxAABGQAABJAtAvQAtAuBKABQAmAAAlgSQAkgRAZgeIAAC+QgxAPgWAFQgjAIgiAAQg/AAg6gYg");
	this.shape_2.setTransform(281.575,272.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3EtIiSjnIgCAAIAADnIicAAIAApZIDqAAQBdAAA3AtQA8AvAABdQAABBgiAuQgkAvg+ALIC9D3gAhdgeIAPAAQAwAAAagNQAigSAAgsQAAgsgigTQgagNgwAAIgPAAg");
	this.shape_3.setTransform(226.575,272.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhqEmQg5gRgjgjQgpgngNg8QgKgoAAhKIAAlRICdAAIAAE8QAABMAPAjQAYA1BCgBQBDABAYg1QAPgiAAhNIAAk8ICdAAIAAFRQAABLgJAnQgOA8goAnQgjAjg5ARQgyAPg6AAQg5AAgxgPg");
	this.shape_4.setTransform(159.575,273.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjuDjQhehcAAiRQAAiFBmhaQBhhWCFgBQCGABBhBWQBmBaAACFQAACRheBcQheBdiRAAQiQAAhehdgAh3h4QgyAvAABAQAABLAyA1QAxAyBGAAQBHAAAxgyQAyg1AAhLQAAhAgygvQgzgwhFAAQhEAAgzAwg");
	this.shape_5.setTransform(87.675,272.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiEEwQgzgRgagYIAAiUQAeAjA0AWQA1AYAqAAQAnAAAWgPQAWgPAAgZQAAgagYgPQgWgPg5gWQicg5AAiIQAAhSA5g2QA6g2BeAAQA2AAArAOQAsAPAbATIAACTQgYgdgrgTQgrgVgnAAQgjAAgSAOQgTAQAAAYQAAAXAUARQAVARAzATQBPAdAtAtQAuAwAABDQAABXg8A2Qg9A3hrAAQg/AAgzgRg");
	this.shape_6.setTransform(21.025,272.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah3ByQgugvgBhIQAAhCA0gtQAwgrBCAAQBDAAAxArQAyAtAABCQAABIguAvQgvAuhJAAQhHAAgwgugAg7g8QgZAYAAAgQAAAlAZAaQAYAaAjAAQAkAAAYgaQAZgaAAglQAAgggZgYQgZgYgjAAQgiAAgZAYg");
	this.shape_7.setTransform(220.5,352.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmCYIAAjsIhBAAIAAhDIDPAAIAABDIhAAAIAADsg");
	this.shape_8.setTransform(283.725,352.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcCYIhKh1IAAB1IhPAAIAAkvIB7AAQAYAAATAIQASAHANANQAMAMAHASQAGARAAATQAAAjgRAVQgRAVggAHIBfB9gAgugPIAPAAQAXAAALgKQANgJAAgSQAAgTgNgJQgKgKgYAAIgPAAg");
	this.shape_9.setTransform(256.675,352.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhyCYIAAkvIB8AAQA0AAAbAbQAbAbAAAwQAAAwgbAaQgbAag0AAIgtAAIAABlgAgjgLIAaAAQAqAAAAgmQAAgmgqAAIgaAAg");
	this.shape_10.setTransform(185.4,352.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcCYIhKh1IAAB1IhPAAIAAkvIB7AAQAYAAATAIQATAHAMANQAMAMAHASQAGARAAATQAAAjgRAVQgQAVghAHIBfB9gAgugPIAPAAQAXAAAMgKQAMgKAAgSQAAgRgMgKQgMgKgXAAIgPAAg");
	this.shape_11.setTransform(108.975,352.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhWCYIAAkvICtAAIAABDIheAAIAAAzIBVAAIAABCIhVAAIAAB3g");
	this.shape_12.setTransform(40.575,352.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBCXQgagHgNgNIAAhKQAPARAaAMQAaALAVAAQATABALgIQALgHAAgNQAAgMgLgIQgNgIgagKQhOgdAAhEQAAgoAcgbQAdgbAuAAQAcAAAVAHQAXAIAMAJIAABJQgLgOgWgKQgWgLgTABQgQgBgKAIQgJAHAAANQAAAMAKAIQAKAIAZAKQAnAOAXAWQAXAYAAAhQAAAsgeAaQgeAcg2AAQgfAAgZgJg");
	this.shape_13.setTransform(312.475,352.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBCXQgagHgNgNIAAhKQAOAQAbANQAbALAUAAQATABALgIQALgHAAgNQAAgMgMgIQgKgIgcgKQhOgdAAhEQAAgoAcgbQAcgbAvAAQAcAAAVAHQAXAIAMAJIAABJQgLgOgWgKQgWgLgTABQgQgBgKAIQgJAHAAANQAAAMAKAIQAKAIAZAKQAnAOAXAWQAXAYAAAhQAAAsgeAaQgfAcg1AAQgfAAgZgJg");
	this.shape_14.setTransform(155.575,352.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah2ByQgvgvAAhHQAAhDAygtQAxgrBCAAQBDAAAxArQAyAtAABDQAABHgvAvQguAuhJAAQhIAAgugugAg7g7QgZAYAAAfQAAAlAZAaQAYAZAjABQAjgBAZgZQAZgZAAgmQAAgfgZgYQgZgZgjAAQgiAAgZAZg");
	this.shape_15.setTransform(72.825,352.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxK0QiRAAiCg3QiBg3hihoQhahhgxh9Qgyh9AAiDQABkdDLjLQDLjLEcAAQFYADD6DGIAAEQQiDhyiOg3QiNg3ijAAQi/AAh/CLQh0CAgBCoQAAClB4CCQCACLC4AAQA5AAAmAmQAnAnAAA5QAAA3grAoQgoAkgzAAg");
	this.shape_16.setTransform(169.9,69.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmrJUQiUhIh0h5IAAkXQCECOCHBKQC5BnDgAAQC+AAB/iLQB1iAAAioQAAilh3iCQiAiLi5AAQg6AAgmgmQgmgmAAg6QAAg4ArgnQAogkAzAAIANAAQCSgBCCA4QCCA4BhBoQBaBgAyB9QAxB+AACBQAAEejLDLQhgBgh8A1QiBA3iMAAQjogCjDhfg");
	this.shape_17.setTransform(179.975,123.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_en_stacked, new cjs.Rectangle(0,0,354.8,368.8), null);


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
	this.shape.setTransform(167.9051,5.2257,0.66,0.66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAOQgGgFAAgJQAAgIAGgFQAFgEAJgBQAJABAGAEQAGAFAAAIQAAAJgGAFQgGAEgJABQgJgBgFgEg");
	this.shape_1.setTransform(163.225,13.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpA7IAAh1IBSAAIAAAfIgsAAIAAAMIApAAIAAAeIgpAAIAAANIAuAAIAAAfg");
	this.shape_2.setTransform(155.5,9.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA7IgChCIgQBCIggAAIgPhCIgBBCIgmAAIAHh1IAxAAIAOA/IAPg/IAxAAIAHB1g");
	this.shape_3.setTransform(142.8,9.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA7IgEgRIghAAIgEARIgoAAIAph1IApAAIApB1gAAIANIgIgfIgIAfIAQAAg");
	this.shape_4.setTransform(129.2,9.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmAuQgTgRAAgdQAAgdATgQQARgPAaAAQAUAAAPAJQAGAEAIAIIgaAVQgKgKgNAAQgKAAgHAHQgHAIAAANQAAANAHAIQAHAIAKAAQALAAAEgDIABgBIAAgJIgSAAIAAgcIA3AAIAAAzIgGAGIgIAFIgKAGQgNAEgRABQgZAAgRgPg");
	this.shape_5.setTransform(116.775,9.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJA7IgRgnIgGAAIAAAnIgmAAIAAh1IAzAAQAVAAAMAJQAPAKAAATQAAAXgUALIAaAtgAgOgIIAKAAQAFAAACgCQAEgDAAgFQAAgGgEgCQgCgDgFAAIgKAAg");
	this.shape_6.setTransform(102.25,9.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoAuQgMgNAAgZIAAhDIAmAAIAABEQAAAJAEAEQAFAEAFAAQAHAAAEgEQAEgEAAgJIAAhEIAmAAIAABDQAAAZgMANQgOAOgbAAQgaAAgOgOg");
	this.shape_7.setTransform(90,9.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtAtQgSgRAAgcQAAgbASgQQASgQAbgBQAcABASAQQASAQAAAbQAAAcgSARQgSAQgcAAQgbAAgSgQgAgRgTQgHAHAAAMQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgMgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_8.setTransform(77.225,9.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSA7IAAguIgphHIArAAIAQAoIASgoIAqAAIgpBHIAAAug");
	this.shape_9.setTransform(65.55,9.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSA7IAAhXIgcAAIAAgeIBdAAIAAAeIgcAAIAABXg");
	this.shape_10.setTransform(51.925,9.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSA7IAAh1IAlAAIAAB1g");
	this.shape_11.setTransform(44.525,9.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoA7IAAh1IBRAAIAAAfIgrAAIAAASIAoAAIAAAdIgoAAIAAAng");
	this.shape_12.setTransform(37.325,9.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqA7IAAh1IBTAAIAAAfIgsAAIAAAMIApAAIAAAeIgpAAIAAANIAuAAIAAAfg");
	this.shape_13.setTransform(24.35,9.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQA7IgQhCIgPBCIgnAAIghh1IAoAAIAOBBIAPhBIAlAAIAPBBIAOhBIAoAAIghB1g");
	this.shape_14.setTransform(10.625,9.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endText, new cjs.Rectangle(0,0,170.8,21), null);


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
	this.shape.graphics.f("#231F20").s().p("AARA+IgRhFIgQBFIgpAAIgjh7IAqAAIAQBEIAPhEIAnAAIAQBEIAPhEIAqAAIgjB7g");
	this.shape.setTransform(103.025,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwAvQgTgRAAgeQAAgcATgSQAUgRAcAAQAeAAASARQAUASgBAcQABAegUARQgSARgeAAQgcAAgUgRgAgSgUQgIAHABANQgBANAIAIQAHAHALAAQAMAAAHgHQAIgIAAgNQAAgNgIgHQgHgJgMAAQgLAAgHAJg");
	this.shape_1.setTransform(87.15,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AARA+IglhFIABAWIAAAvIgnAAIAAh7IAsAAIAjBEIgBgVIAAgvIAnAAIAAB7g");
	this.shape_2.setTransform(73.25,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgyA+IAAh7IA1AAQAWAAAMAJQAOALAAAWQAAAWgOALQgMAKgWAAIgNAAIAAAmgAgKgHIAHAAQAGAAADgCQAEgCAAgIQAAgGgEgDQgDgDgGABIgHAAg");
	this.shape_3.setTransform(57.675,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgwAvQgSgRgBgeQABgcASgSQAUgRAcAAQAeAAATARQASASAAAcQAAAegSARQgUARgdAAQgcAAgUgRgAgTgUQgGAHAAANQAAANAGAIQAIAHALAAQAMAAAIgHQAGgIAAgNQAAgNgGgHQgIgJgMAAQgLAAgIAJg");
	this.shape_4.setTransform(44.55,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AARA+IAAguIghAAIAAAuIgpAAIAAh7IApAAIAAAtIAhAAIAAgtIAoAAIAAB7g");
	this.shape_5.setTransform(30.8,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgyAvIASgeQAIAHAKADQAKADAEAAQAKAAAAgFQgCgEgHgCIgRgGQgMgFgGgEQgLgJAAgRQABgSAOgMQANgLAXAAQAaAAASAPIgQAdQgHgGgIgDQgJgDgFAAQgKAAAAAFQAAAEAIACIAGACIAJACQAOAFAGAGQANAJAAARQAAAUgRAMQgOALgVAAQgaAAgXgRg");
	this.shape_6.setTransform(18.95,14.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AobC0QhQAAAAhQIAAjHQAAhQBQAAIQ3AAQBQAAAABQIAADHQAABQhQAAg");
	this.shape_7.setTransform(62,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,-4.8,124,36), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AggAeQgMgLAAgTQAAgSAMgLQAMgKAUAAQAVAAAMAKQANALAAASQAAATgNALQgMAKgVAAQgUAAgMgKg");
	this.shape.setTransform(137.9,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABICAIgCiRIgiCRIhHAAIgiiRIgDCRIhSAAIAQj/IBrAAIAfCKIAhiKIBrAAIAOD/g");
	this.shape_1.setTransform(114.9,-5.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtCAIgLgkIhIAAIgJAkIhXAAIBZj/IBbAAIBZD/gAARAcIgShEIgTBEIAlAAg");
	this.shape_2.setTransform(85.25,-5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcCAIAAj/IC1AAIAABCIhhAAIAAAcIBbAAIAABBIhbAAIAAAdIBlAAIAABDg");
	this.shape_3.setTransform(61.75,-5.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpCAIAAi9Ig8AAIAAhCIDLAAIAABCIg9AAIAAC9g");
	this.shape_4.setTransform(40.5,-5.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbCAIAAj/IC0AAIAABCIhiAAIAAAcIBcAAIAABBIhcAAIAAAdIBlAAIAABDg");
	this.shape_5.setTransform(12.75,-5.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABICAIgCiRIgiCRIhHAAIgiiRIgCCRIhSAAIAOj/IBrAAIAgCKIAhiKIBrAAIAOD/g");
	this.shape_6.setTransform(-14.9,-5.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhjBhQgngkAAg9QAAg8AngjQAngkA8AAQA9AAAnAkQAnAjAAA8QAAA9gnAkQgnAjg9AAQg8AAgngjgAgngrQgPAPAAAbQAAAaAPAQQAPARAYAAQAYAAAPgRQAPgQAAgaQAAgbgPgPQgPgRgYAAQgYAAgPARg");
	this.shape_7.setTransform(-46.025,-5.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjCAIAAhfIhFAAIAABfIhTAAIAAj/IBTAAIAABdIBFAAIAAhdIBTAAIAAD/g");
	this.shape_8.setTransform(-74.3,-5.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-24.6,236.6,41);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhgCGIAAkMIC9AAIAABFIhmAAIAAAeIBgAAIAABEIhgAAIAAAfIBrAAIAABGg");
	this.shape.setTransform(153.65,-22.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlCGIAAhjIhJAAIAABjIhYAAIAAkMIBYAAIAABiIBJAAIAAhiIBYAAIAAEMg");
	this.shape_1.setTransform(127.525,-22.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsCGIAAjHIg/AAIAAhFIDWAAIAABFIg/AAIAADHg");
	this.shape_2.setTransform(102.4,-22.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhCGIAAkMIC/AAIAABFIhnAAIAAAeIBhAAIAABEIhhAAIAAAfIBqAAIAABGg");
	this.shape_3.setTransform(73.15,-22.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWCGIgshZIgQATIAABGIhYAAIAAkMIBYAAIAABSIA4hSIBnAAIhXBtIBdCfg");
	this.shape_4.setTransform(49.575,-22.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrCGIAAkMIBXAAIAAEMg");
	this.shape_5.setTransform(28.6,-22.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZCGIAAkMIBYAAIAADEIBbAAIAABIg");
	this.shape_6.setTransform(12.925,-22.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Btext1, new cjs.Rectangle(0,-42,166.8,43), null);


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
	this.instance.setTransform(0,-73.8,1,1,0,0,0,90,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-97.8,273.2,41);


// stage content:
(lib.home_300x600_en = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// EndText
	this.instance = new lib.endText();
	this.instance.setTransform(-90.95,369.5,1,1,0,0,0,84.2,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).to({x:149.05},20,cjs.Ease.quartOut).wait(8));

	// Logo
	this.instance_1 = new lib.logo_en_stacked();
	this.instance_1.setTransform(148.25,267.4,0.4,0.4,0,0,0,177.5,184.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).to({alpha:1},29,cjs.Ease.quartInOut).wait(23));

	// cta
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(84.45,403.4,1,1,0,0,0,62,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(50));

	// Btext2
	this.instance_3 = new lib.Btext22();
	this.instance_3.setTransform(-139.55,327.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({x:110.05},22,cjs.Ease.quartOut).wait(74).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(53));

	// Btext1
	this.instance_4 = new lib.Btext1();
	this.instance_4.setTransform(-132,333,1,1,0,0,0,74.8,24);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({x:94.8,y:331.8},22,cjs.Ease.quartOut).wait(75).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(56));

	// text2
	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(-141.95,327.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:110.05},21,cjs.Ease.quartOut).wait(77).to({startPosition:0},0).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(59));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.setTransform(-184.8,252.6,1,1,0,0,0,74.8,24);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:94.8},21,cjs.Ease.quartOut).wait(78).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},4).wait(59));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(184));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,300,409.6,300);
// library properties:
lib.properties = {
	id: '758E0282264D47629A39BAD509FAEF4B',
	width: 300,
	height: 600,
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