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
	this.shape.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICEAAIAAAwIhHAAIAAAUIBDAAIAAAvIhDAAIAAAWIBJAAIAAAwg");
	this.shape.setTransform(217.3,14.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBdIAAhFIgxAAIAABFIg9AAIAAi5IA9AAIAABDIAxAAIAAhDIA9AAIAAC5g");
	this.shape_1.setTransform(199.25,14.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBdIAAiKIgsAAIAAgvICTAAIAAAvIgrAAIAACKg");
	this.shape_2.setTransform(181.825,14.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICDAAIAAAwIhHAAIAAAUIBDAAIAAAvIhDAAIAAAWIBKAAIAAAwg");
	this.shape_3.setTransform(161.6,14.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBdIgeg+IgLAOIAAAwIg9AAIAAi5IA9AAIAAA5IAmg5IBIAAIg9BLIBBBug");
	this.shape_4.setTransform(145.275,14.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBdIAAi5IA8AAIAAC5g");
	this.shape_5.setTransform(130.75,14.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BdIAAi5IA9AAIAACHIA+AAIAAAyg");
	this.shape_6.setTransform(119.9,14.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBdIgcg+IgIAAIAAA+Ig9AAIAAi5IBRAAQAiAAATANQAXAQAAAeQAAAlgfASIApBHgAgXgOIAQAAQAIAAAEgDQAHgFAAgIQAAgIgHgFQgEgDgIAAIgQAAg");
	this.shape_7.setTransform(99.075,14.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIBGQgcgaAAgsQAAgsAcgZQAcgaAsAAQAsAAAdAaQAcAZAAAsQAAAsgcAaQgdAagsAAQgsAAgcgagAgcgfQgLALAAATQAAAUALAMQALALARAAQASAAALgLQALgMAAgUQAAgTgLgLQgLgNgSAAQgRAAgLANg");
	this.shape_8.setTransform(78.675,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBdIAAiKIgsAAIAAgvICTAAIAAAvIgrAAIAACKg");
	this.shape_9.setTransform(61.775,14.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeBdIAAi5IA9AAIAAC5g");
	this.shape_10.setTransform(49.95,14.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKBHIAbguQAMAKAOAFQAOAFAIAAQAOAAAAgIQgBgGgNgEIgagIQgRgHgIgHQgRgOAAgZQAAgbAWgSQATgQAiAAQAoAAAaAXIgWArQgKgJgNgEQgNgFgJAAQgOAAAAAHQAAAGAMADIAKADIAMAEQAVAHAKAIQARAPAAAZQAAAdgXAUQgWAQggAAQgnAAghgZg");
	this.shape_11.setTransform(37.75,14.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBdIAAi5IA8AAIAAC5g");
	this.shape_12.setTransform(25.8,14.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdBdIhGi5IBBAAIAiBrIAjhrIBBAAIhGC5g");
	this.shape_13.setTransform(11.725,14.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,227.1,31), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgeBdIAAhJIhAhwIBDAAIAbA/IAcg/IBDAAIhBBwIAABJg");
	this.shape.setTransform(208.175,-27.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOBdIgcg+IgIAAIAAA+Ig9AAIAAi5IBRAAQAiAAATANQAXAQAAAeQAAAlgfASIApBHgAgXgOIAQAAQAIAAAEgDQAHgFAAgIQAAgIgHgFQgEgDgIAAIgQAAg");
	this.shape_1.setTransform(191.725,-27.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICDAAIAAAwIhHAAIAAAUIBCAAIAAAvIhCAAIAAAWIBKAAIAAAwg");
	this.shape_2.setTransform(174.4,-27.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBdIhGi5IBBAAIAiBrIAjhrIBBAAIhGC5g");
	this.shape_3.setTransform(156.625,-27.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICEAAIAAAwIhHAAIAAAUIBDAAIAAAvIhDAAIAAAWIBJAAIAAAwg");
	this.shape_4.setTransform(139.35,-27.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBdIAAiKIgsAAIAAgvICTAAIAAAvIgrAAIAACKg");
	this.shape_5.setTransform(118.575,-27.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBdIgHgaIg0AAIgHAaIg/AAIBAi5IBCAAIBCC5gAAMAUIgMgxIgPAxIAbAAg");
	this.shape_6.setTransform(104.6,-27.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICDAAIAAAwIhHAAIAAAUIBDAAIAAAvIhDAAIAAAWIBKAAIAAAwg");
	this.shape_7.setTransform(87.45,-27.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOBdIgcg+IgIAAIAAA+Ig9AAIAAi5IBRAAQAiAAATANQAXAQAAAeQAAAlgfASIApBHgAgXgOIAQAAQAIAAAEgDQAHgFAAgIQAAgIgHgFQgEgDgIAAIgQAAg");
	this.shape_8.setTransform(71.325,-27.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBdIAAiKIgsAAIAAgvICTAAIAAAvIgrAAIAACKg");
	this.shape_9.setTransform(54.125,-27.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICDAAIAAAwIhHAAIAAAUIBDAAIAAAvIhDAAIAAAWIBKAAIAAAwg");
	this.shape_10.setTransform(33.9,-27.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBdIgZhoIgYBoIg+AAIg1i5IBAAAIAWBnIAYhnIA7AAIAYBnIAWhnIA/AAIg0C5g");
	this.shape_11.setTransform(12.1,-27.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-3.6,-42,223,31), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAWIAAggIgJAAIAAgKIAdAAIAAAKIgJAAIAAAgg");
	this.shape.setTransform(176.6003,102.4415,0.6463,0.6463);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAWIgDgXIgJAXIgFAAIgJgXIgDAXIgMAAIAHgqIAMAAIAHAUIAJgUIALAAIAHAqg");
	this.shape_1.setTransform(179.4281,102.4415,0.6463,0.6463);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkCRIAAiLIhqiWIBaAAIA1BQIA1hQIBaAAIhrCWIAACLg");
	this.shape_2.setTransform(163.7703,110.4078,0.6463,0.6463);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRCRIAAkhICkAAIAABAIhZAAIAAAxIBTAAIAAA+IhTAAIAAAyIBZAAIAABAg");
	this.shape_3.setTransform(147.9995,110.4078,0.6463,0.6463);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmCRIhhh+IAAB+IhLAAIAAkhIBLAAIAAB4IBah4IBeAAIhzCKIB+CXg");
	this.shape_4.setTransform(131.7761,110.4078,0.6463,0.6463);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABuQguguAAhAQAAhBAugsQAtgrA9AAQAhAAAkAPIAABaQgagggnAAQghAAgWAXQgWAWAAAiQAAAiAWAXQAWAXAhAAQAkAAAdgfIAABZIgIADQgiAMgcAAQg8AAgtgrg");
	this.shape_5.setTransform(112.7897,110.4239,0.6463,0.6463);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyBtQgtgsAAhBQAAhAAtgsQAtgsBFAAQBGAAAtAsQAtAsAABAQAABBgtAsQgtAshGAAQhFAAgtgsgAg4g4QgZAXAAAhQAAAiAZAYQAXAWAhAAQAhAAAYgWQAZgYAAgiQAAghgZgXQgYgXghAAQghAAgXAXg");
	this.shape_6.setTransform(93.0438,110.4239,0.6463,0.6463);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2CRIAAh3IhsAAIAAB3IhKAAIAAkhIBKAAIAABwIBsAAIAAhwIBMAAIAAEhg");
	this.shape_7.setTransform(71.2457,110.4078,0.6463,0.6463);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaCRIhGhvIAABvIhMAAIAAkhIB2AAQAtAAAaAbQAXAYABAnQgBBCg+AOIBbB3gAgsgOIAOAAQAWAAALgKQAMgJAAgRQAAgRgMgJQgLgKgWAAIgOAAg");
	this.shape_8.setTransform(44.6162,110.4078,0.6463,0.6463);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhyBtQgtgsAAhBQAAhAAtgsQAtgsBFAAQBGAAAtAsQAtAsAABAQAABBgtAsQgtAshGAAQhFAAgtgsgAg4g4QgYAXAAAhQAAAiAYAYQAXAWAhAAQAiAAAXgWQAZgYAAgiQAAghgZgXQgXgXgiAAQghAAgXAXg");
	this.shape_9.setTransform(23.3999,110.4239,0.6463,0.6463);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhSCRIAAkhIClAAIAABAIhaAAIAAAxIBSAAIAAA+IhSAAIAAByg");
	this.shape_10.setTransform(5.6254,110.4078,0.6463,0.6463);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AigEbIAAo1IFBAAIAAB9IiuAAIAABeIClAAIAAB8IilAAIAABhICuAAIAAB9g");
	this.shape_11.setTransform(183.2415,61.6409,0.6463,0.6463);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbEYQg3gWgtgoQhchTABiGQgBg6AWg2QAWg3ApgqQAqgrA6gZQA4gZA9AAQBBAABIAdIAACzQgXgfgkgQQghgRgoAAQhDABgqAtQgqAuAABDQAABEArArQAqAsBFAAQAkAAAigQQAjgQAYgdIAACzQgxAPgTAEQghAIgfAAQg8AAg3gWg");
	this.shape_12.setTransform(149.1306,61.6894,0.6463,0.6463);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA0EbIiKjaIgBAAIAADaIiTAAIAAo1IDcAAQBXAAA0AqQA4AtAABXQAAA9ggArQghAtg7AKICyDogAhXgcIAOAAQAtAAAYgMQAggRAAgqQAAgpgggRQgYgNgtAAIgOAAg");
	this.shape_13.setTransform(115.6983,61.6409,0.6463,0.6463);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhkEVQg1gRgiggQglglgOg4QgIgmAAhFIAAk+ICTAAIAAEqQAABIAOAgQAXAxA+AAQA/AAAWgxQAPggAAhIIAAkqICTAAIAAE+QAABFgJAmQgNA4glAlQgiAgg1ARQgvAOg2AAQg2AAgugOg");
	this.shape_14.setTransform(74.9945,62.1256,0.6463,0.6463);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjgDWQhYhXAAiIQAAh+BghUQBbhRB9AAQB+AABbBRQBgBUAAB+QAACIhZBXQhYBYiIAAQiIAAhYhYgAhwhxQgvAuAAA6QAABIAvAwQAuAwBCAAQBDAAAugwQAvgwAAhIQAAg6gvguQgwgthBAAQhAAAgwAtg");
	this.shape_15.setTransform(31.2853,61.657,0.6463,0.6463);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah8EeQgwgPgYgYIAAiLQAbAgAyAXQAxAVAnAAQAnABAUgOQATgOAAgYQAAgYgVgPQgWgOg1gVQiTg1AAiAQAAhNA2gzQA2gzBZAAQAyAAApAOQApANAaATIAACJQgWgZgpgUQgpgUgkAAQghAAgRAOQgRAOgBAXQAAAYAUAOQARAPAyATQBJAaArAsQArAuABA+QgBBRg4AzQg4A0hmAAQg6AAgxgQg");
	this.shape_16.setTransform(-9.2245,61.6894,0.6463,0.6463);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAvKLQiJAAh6g0Qh6g0hbhhQhVhbgvh2Qguh1AAh8QAAkMC/i/QC/i/EMAAQFCADDrC6IAAEAQh7hsiFgzQiEg0iaAAQizAAh3CDQhuB5AACdQAACcBwB6QB4CDCtAAQA2AAAkAkQAkAkAAA2QAAA0goAlQgnAigvAAg");
	this.shape_17.setTransform(-101.8945,64.7434,0.6463,0.6463);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AmRIxQiMhEhthyIAAkGQB9CFB+BGQCvBhDSAAQCzAAB3iDQBuh4AAifQAAibhwh6Qh4iDiuABQg2AAgkgkQgkgjAAg3QAAg2ApgkQAlgiAwAAIAMAAQCJAAB7A0QB6A0BbBjQBVBaAvB2QAuB2AAB5QAAEOi/C+Qi+C/kOAAQjagCi3hYg");
	this.shape_18.setTransform(-95.7865,97.6909,0.6463,0.6463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_en_stacked, new cjs.Rectangle(-141,22.7,334.6,117.10000000000001), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoLCFIAAkJIQXAAIAAEJg");
	mask.setTransform(52.375,13.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfAVIgDgWIgKAWIgFAAIgJgWIgDAWIgLAAIAHgpIALAAIAIAUIAJgUIALAAIAHApgAghAVIAAgfIgJAAIAAgKIAeAAIAAAKIgJAAIAAAfg");
	this.shape.setTransform(102.6688,15.6603,0.3742,0.3742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEASQgMgBgDgKQgEgMAJgIQAGgFAJABQALAAAFAHQACADACAHIAAAAQAAATgVAAg");
	this.shape_1.setTransform(102.626,24.7977);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA7IgBhyQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIAhAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIgBByg");
	this.shape_2.setTransform(42.225,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA7IAAgEIAAhQQAAAAAAgBQgBAAAAgBQAAAAgBAAQgBAAAAAAIgWAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAQABgMgBgNQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIBYAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAZQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIgBBTg");
	this.shape_3.setTransform(49.675,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPA7QgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBgBAAIABgmQAAgEgCgFIglhAIgCgDIAoAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIAQAlIACgDIAPgiIABgCIAqAAIgoBFIgBADIAAApQABAEgEAAIgfAAg");
	this.shape_4.setTransform(6,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA7IAAhyQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBMAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAZQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgkAAIgDAAIAAAEIAAAKQAAABAAABQAAAAABABQAAAAAAAAQAAABABAAIAiAAQAEAAgBADIAAAXQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgiAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAABIAAAjg");
	this.shape_5.setTransform(35.375,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpA7IgBgFIAAhsQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAQAnABAlgBQABAAABAAQAAAAABABQAAAAABABQAAABAAABIAAAYQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAIglAAQgEAAABADQAAAHABABQABABAFAAIAiAAIAAAeIgmAAQgEAAAAADIAAAKIAvAAIAAAcQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_6.setTransform(22.7214,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA7IgEAAIgBgFIABhwIBSAAIAAAfIgpAAQAAAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAHABABQACABAFAAIAfAAIADABIAAAZQAAADgEAAIgjAAQgDAAAAAEIAAAFIABAEIADAAIAnAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABIAAAZQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_7.setTransform(95.175,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYA7QgEAAgBgEQAAgFgDgFQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgdAAIgDACIgCALQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIglAAIgBgBIAph0IAmAAQADAAABADIAoBygAgJANIARAAIgIgcIgBAAg");
	this.shape_8.setTransform(69,20.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbA3QgVgJgEgYIgBgVIAAg5IABgDIAiAAQAEAAAAAEIAAA8QAAAGABAGQADAKAKgBQAMgBACgKIABgHIAAhDIAnAAIAABAIgCATQgFAZgYAHQgMAEgLAAQgOAAgNgFg");
	this.shape_9.setTransform(30.375,20.6581);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA2QgbgNgEghQgCgOAFgOQAIgYAWgJQAegOAeAPIAQALQABABAAAAQABABAAAAQAAABgBAAQAAABgBAAIgYAUIgFgEQgNgJgMAEQgMADgEAPQgCAIADAMQACAHAGAFQAHAFAHAAIAMgCQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBQABgDgBgCIgCgBIgPAAIAAgaQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAzABIACAAIAAAuQAAAFgEADQgPANgUADIgOABQgRAAgOgGg");
	this.shape_10.setTransform(56.8563,20.5551);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA7QgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAhyIAuAAQARABAIACQAPAEAHAMQAHALgCAQQgCAOgPALIgCABIAaAtIgoAAQgFAAgBgFIgPggQgBgEgDACQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAAAhQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAgOgaIAAASIAOgCQAIgBgBgJQgBgHgHgBIgLAAg");
	this.shape_11.setTransform(42.325,20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA0QgZgPgDgdQgBgRAGgQQAMgaAfgHIAPgCQAbABARAOQAVATgBAgQgCAUgKANQgOAQgXAEIgPACQgTAAgQgJgAgHgaQgRAGAAAUIAAAEQABAOAMAGQALAGAMgHQAQgIgEgVQgCgLgJgGQgGgEgHAAIgHABg");
	this.shape_12.setTransform(17.5159,20.5714);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhA3QAAgggCgaIgOA8IgCACIgcAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBAAAAIgMgyQgBgFgCgEIgBA7QAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIggAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAHhyIAuAAQADAAABADIANA6IAAAAIAOg7QAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAqAAIAEABIABAEIAGBwIgiAAQgEAAAAgEg");
	this.shape_13.setTransform(82.8464,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATA7QgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgOg9IgBAEIgOA6QAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgiAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIghhxIAkgBQAFAAAAAEIAMA4IABACIABAAIAOg7QAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAhAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIALA0IADAHIABAAIAMg7QABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAmAAIAAACIggBuQAAAEgEAAg");
	this.shape_14.setTransform(8.95,5.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,104.8,26.7), null);


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
	this.shape.graphics.f("#231F20").s().p("AAKAoIgKgsIgJAsIgbAAIgXhPIAbAAIAKAsIAKgsIAZAAIAJAsIAKgsIAbAAIgWBPg");
	this.shape.setTransform(61.5,-0.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgeAeQgMgLAAgTQAAgSAMgLQAMgLASAAQATAAAMALQAMALAAASQAAATgMALQgMALgTAAQgSAAgMgLgAgLgNQgFAFAAAIQAAAIAFAFQAEAFAHAAQAHAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_1.setTransform(51.35,-0.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AALAoIgXgsIAAAOIAAAeIgZAAIAAhPIAcAAIAWAsIAAgOIAAgeIAZAAIAABPg");
	this.shape_2.setTransform(42.425,-0.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AggAoIAAhPIAiAAQAOAAAIAHQAJAHAAAOQAAANgJAHQgIAGgOAAIgIAAIAAAZgAgGgEIAFAAIAFgBQACgCABgEQgBgFgCgCQgCgBgDAAIgFAAg");
	this.shape_3.setTransform(32.45,-0.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgeAeQgMgLAAgTQAAgSAMgLQAMgLASAAQATAAAMALQAMALAAASQAAATgMALQgMALgTAAQgSAAgMgLgAgMgNQgEAFAAAIQAAAIAEAFQAGAFAGAAQAIAAAEgFQAFgFAAgIQAAgIgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_4.setTransform(24.05,-0.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AALAoIAAgeIgUAAIAAAeIgbAAIAAhPIAbAAIAAAdIAUAAIAAgdIAaAAIAABPg");
	this.shape_5.setTransform(15.25,-0.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgfAeIALgUQAGAFAGACQAGADACgBQAGABAAgEQAAgDgFgBIgLgEIgLgGQgHgFAAgLQAAgLAJgIQAIgHAOAAQASAAALAKIgKASQgEgDgGgDQgFgBgEAAQgFgBAAAEQAAACAEACIAEABIAGACQAIADAFADQAHAGAAALQAAAMgKAIQgJAHgOAAQgQAAgOgLg");
	this.shape_6.setTransform(7.675,-0.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlYBzQg0AAAAgzIAAh/QAAgzA0AAIKxAAQA0AAAAAzIAAB/QAAAzg0AAg");
	this.shape_7.setTransform(35.6,-1.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-4.1,-12.7,79.39999999999999,23.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgXAWQgJgIAAgOQAAgNAJgIQAJgHAOAAQAPAAAJAIQAJAHAAANQAAAOgJAIQgJAHgPAAQgOAAgJgHg");
	this.shape.setTransform(163.2,-51.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BdIgChpIgZBpIgzAAIgZhpIgCBpIg8AAIALi5IBOAAIAXBkIAYhkIBOAAIALC5g");
	this.shape_1.setTransform(146.425,-57.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBdIgIgaIg0AAIgHAaIhAAAIBBi5IBDAAIBAC5gAAMAUIgMgxIgPAxIAbAAg");
	this.shape_2.setTransform(124.8,-57.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBdIAAi5ICEAAIAAAwIhHAAIAAAUIBCAAIAAAvIhCAAIAAAWIBJAAIAAAwg");
	this.shape_3.setTransform(107.65,-57.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBdIAAiKIgsAAIAAgvICTAAIAAAvIgrAAIAACKg");
	this.shape_4.setTransform(92.125,-57.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBdIAAi5ICDAAIAAAwIhHAAIAAAUIBCAAIAAAvIhCAAIAAAWIBKAAIAAAwg");
	this.shape_5.setTransform(71.9,-57.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA1BdIgChpIgZBpIgzAAIgZhpIgCBpIg8AAIALi5IBOAAIAXBkIAYhkIBOAAIALC5g");
	this.shape_6.setTransform(51.725,-57.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIBGQgcgaAAgsQAAgsAcgaQAcgaAsAAQAsAAAdAaQAcAaAAAsQAAAsgcAaQgdAbgsAAQgsAAgcgbgAgcgfQgLALAAATQAAATALANQALALARAAQASAAALgLQALgNAAgTQAAgTgLgLQgLgMgSgBQgRABgLAMg");
	this.shape_7.setTransform(29.025,-57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBdIAAhFIgyAAIAABFIg9AAIAAi5IA9AAIAABDIAyAAIAAhDIA9AAIAAC5g");
	this.shape_8.setTransform(8.4,-57.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Btext1, new cjs.Rectangle(-3.6,-72.2,173.79999999999998,31), null);


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
	this.instance.setTransform(-3.6,-91.8,1,1,0,0,0,90,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-115.8,227.1,31);


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

	// FlashAICB
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(175.05,-132.55,1.161,1.161,0,0,0,52.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endText, new cjs.Rectangle(114.1,-147.9,121.6,31), null);


// stage content:
(lib.home_320x100_us = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(294.05,194.5,1,1,0,0,0,84.2,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).to({x:149.05},20,cjs.Ease.quartOut).wait(8));

	// Logo
	this.instance_1 = new lib.logo_en_stacked();
	this.instance_1.setTransform(148.25,92.4,0.4,0.4,0,0,0,177.5,184.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).to({alpha:1},29,cjs.Ease.quartInOut).wait(23));

	// cta
	this.instance_2 = new lib.CTA();
	this.instance_2.setTransform(84.45,228.4,1,1,0,0,0,62,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(50));

	// Btext1
	this.instance_3 = new lib.Btext1();
	this.instance_3.setTransform(-132,158,1,1,0,0,0,74.8,24);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({x:94.8,y:156.8},22,cjs.Ease.quartOut).wait(75).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(56));

	// text2
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(-141.95,152.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:110.05},21,cjs.Ease.quartOut).wait(77).to({startPosition:0},0).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},1).wait(59));

	// text1
	this.instance_5 = new lib.text1();
	this.instance_5.setTransform(-184.8,77.6,1,1,0,0,0,74.8,24);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:94.8},21,cjs.Ease.quartOut).wait(78).to({alpha:0},17,cjs.Ease.quartInOut).to({_off:true},4).wait(59));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("A4/H0IAAvnMAx/AAAIAAPng");
	this.shape.setTransform(160,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(184));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,50,548.8000000000001,170.8);
// library properties:
lib.properties = {
	id: '758E0282264D47629A39BAD509FAEF4B',
	width: 320,
	height: 100,
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