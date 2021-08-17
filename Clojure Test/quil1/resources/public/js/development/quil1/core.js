// Compiled by ClojureScript 1.10.520 {}
goog.provide('quil1.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quil1.core.body = document.body;
quil1.core.w = quil1.core.body.clientWidth;
quil1.core.h = quil1.core.body.clientHeight;
/**
 * Noise zoom level.
 */
quil1.core.noise_zoom = 0.009;
quil1.core.position = (function quil1$core$position(current,delta,max){

return cljs.core.mod.call(null,(current + delta),max);
});
quil1.core.direction = (function quil1$core$direction(x,y,z){

return (((2) * Math.PI) * (quil.core.noise.call(null,(x * quil1.core.noise_zoom),(y * quil1.core.noise_zoom)) + (0.4 * quil.core.noise.call(null,(x * quil1.core.noise_zoom),(y * quil1.core.noise_zoom),(z * quil1.core.noise_zoom)))));
});
quil1.core.velocity = (function quil1$core$velocity(current,delta){

return ((current + delta) / (2));
});
quil1.core.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Blue wave",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(179),(179),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(77),(77),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(102)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(204)], null)], null)], null);
/**
 * Creates a particle map.
 */
quil1.core.particle = (function quil1$core$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.rand_nth.call(null,cljs.core.seq.call(null,cljs.core.range.call(null,(1),(4),0.1))),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,quil1.core.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,quil1.core.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(quil1.core.palette))], null);
});
quil1.core.setup = (function quil1$core$setup(){
return cljs.core.map.call(null,quil1.core.particle,cljs.core.range.call(null,(0),(2000)));
});
/**
 * Receives the current state. Returns the next state to render.
 */
quil1.core.update_state = (function quil1$core$update_state(particles){
return cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),quil1.core.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),quil1.core.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil1.core.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),quil1.core.h),new cljs.core.Keyword(null,"direction","direction",-633359395),quil1.core.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),quil1.core.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),quil1.core.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))));
}),particles);
});
quil1.core.draw_state = (function quil1$core$draw_state(particles){
quil.core.no_stroke.call(null);

var seq__21978 = cljs.core.seq.call(null,particles);
var chunk__21979 = null;
var count__21980 = (0);
var i__21981 = (0);
while(true){
if((i__21981 < count__21980)){
var p = cljs.core._nth.call(null,chunk__21979,i__21981);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(2)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__21982 = seq__21978;
var G__21983 = chunk__21979;
var G__21984 = count__21980;
var G__21985 = (i__21981 + (1));
seq__21978 = G__21982;
chunk__21979 = G__21983;
count__21980 = G__21984;
i__21981 = G__21985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__21978);
if(temp__5735__auto__){
var seq__21978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21978__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21978__$1);
var G__21986 = cljs.core.chunk_rest.call(null,seq__21978__$1);
var G__21987 = c__4550__auto__;
var G__21988 = cljs.core.count.call(null,c__4550__auto__);
var G__21989 = (0);
seq__21978 = G__21986;
chunk__21979 = G__21987;
count__21980 = G__21988;
i__21981 = G__21989;
continue;
} else {
var p = cljs.core.first.call(null,seq__21978__$1);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(2)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__21990 = cljs.core.next.call(null,seq__21978__$1);
var G__21991 = null;
var G__21992 = (0);
var G__21993 = (0);
seq__21978 = G__21990;
chunk__21979 = G__21991;
count__21980 = G__21992;
i__21981 = G__21993;
continue;
}
} else {
return null;
}
}
break;
}
});
quil1.core.run_sketch = (function quil1$core$run_sketch(){
quil1.core.quil1 = (function quil1$core$run_sketch_$_quil1(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil1",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil1.core.update_state))?(function() { 
var G__21994__delegate = function (args){
return cljs.core.apply.call(null,quil1.core.update_state,args);
};
var G__21994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21995__i = 0, G__21995__a = new Array(arguments.length -  0);
while (G__21995__i < G__21995__a.length) {G__21995__a[G__21995__i] = arguments[G__21995__i + 0]; ++G__21995__i;}
  args = new cljs.core.IndexedSeq(G__21995__a,0,null);
} 
return G__21994__delegate.call(this,args);};
G__21994.cljs$lang$maxFixedArity = 0;
G__21994.cljs$lang$applyTo = (function (arglist__21996){
var args = cljs.core.seq(arglist__21996);
return G__21994__delegate(args);
});
G__21994.cljs$core$IFn$_invoke$arity$variadic = G__21994__delegate;
return G__21994;
})()
:quil1.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil1.core.w,quil1.core.h], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil1.core.setup))?(function() { 
var G__21997__delegate = function (args){
return cljs.core.apply.call(null,quil1.core.setup,args);
};
var G__21997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21998__i = 0, G__21998__a = new Array(arguments.length -  0);
while (G__21998__i < G__21998__a.length) {G__21998__a[G__21998__i] = arguments[G__21998__i + 0]; ++G__21998__i;}
  args = new cljs.core.IndexedSeq(G__21998__a,0,null);
} 
return G__21997__delegate.call(this,args);};
G__21997.cljs$lang$maxFixedArity = 0;
G__21997.cljs$lang$applyTo = (function (arglist__21999){
var args = cljs.core.seq(arglist__21999);
return G__21997__delegate(args);
});
G__21997.cljs$core$IFn$_invoke$arity$variadic = G__21997__delegate;
return G__21997;
})()
:quil1.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil1.core.draw_state))?(function() { 
var G__22000__delegate = function (args){
return cljs.core.apply.call(null,quil1.core.draw_state,args);
};
var G__22000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22001__i = 0, G__22001__a = new Array(arguments.length -  0);
while (G__22001__i < G__22001__a.length) {G__22001__a[G__22001__i] = arguments[G__22001__i + 0]; ++G__22001__i;}
  args = new cljs.core.IndexedSeq(G__22001__a,0,null);
} 
return G__22000__delegate.call(this,args);};
G__22000.cljs$lang$maxFixedArity = 0;
G__22000.cljs$lang$applyTo = (function (arglist__22002){
var args = cljs.core.seq(arglist__22002);
return G__22000__delegate(args);
});
G__22000.cljs$core$IFn$_invoke$arity$variadic = G__22000__delegate;
return G__22000;
})()
:quil1.core.draw_state));
});
goog.exportSymbol('quil1.core.quil1', quil1.core.quil1);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20846__20847__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20846__20847__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quil1.core.quil1,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quil1"], null));
}
});
goog.exportSymbol('quil1.core.run_sketch', quil1.core.run_sketch);
quil1.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1628621417917
