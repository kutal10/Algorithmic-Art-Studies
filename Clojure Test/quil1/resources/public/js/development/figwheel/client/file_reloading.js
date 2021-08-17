// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26000_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26000_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26001 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26002 = null;
var count__26003 = (0);
var i__26004 = (0);
while(true){
if((i__26004 < count__26003)){
var n = cljs.core._nth.call(null,chunk__26002,i__26004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26005 = seq__26001;
var G__26006 = chunk__26002;
var G__26007 = count__26003;
var G__26008 = (i__26004 + (1));
seq__26001 = G__26005;
chunk__26002 = G__26006;
count__26003 = G__26007;
i__26004 = G__26008;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26001);
if(temp__5735__auto__){
var seq__26001__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26001__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26001__$1);
var G__26009 = cljs.core.chunk_rest.call(null,seq__26001__$1);
var G__26010 = c__4550__auto__;
var G__26011 = cljs.core.count.call(null,c__4550__auto__);
var G__26012 = (0);
seq__26001 = G__26009;
chunk__26002 = G__26010;
count__26003 = G__26011;
i__26004 = G__26012;
continue;
} else {
var n = cljs.core.first.call(null,seq__26001__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26013 = cljs.core.next.call(null,seq__26001__$1);
var G__26014 = null;
var G__26015 = (0);
var G__26016 = (0);
seq__26001 = G__26013;
chunk__26002 = G__26014;
count__26003 = G__26015;
i__26004 = G__26016;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26017){
var vec__26018 = p__26017;
var _ = cljs.core.nth.call(null,vec__26018,(0),null);
var v = cljs.core.nth.call(null,vec__26018,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26021){
var vec__26022 = p__26021;
var k = cljs.core.nth.call(null,vec__26022,(0),null);
var v = cljs.core.nth.call(null,vec__26022,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26034_26042 = cljs.core.seq.call(null,deps);
var chunk__26035_26043 = null;
var count__26036_26044 = (0);
var i__26037_26045 = (0);
while(true){
if((i__26037_26045 < count__26036_26044)){
var dep_26046 = cljs.core._nth.call(null,chunk__26035_26043,i__26037_26045);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26046;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26046));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26046,(depth + (1)),state);
} else {
}


var G__26047 = seq__26034_26042;
var G__26048 = chunk__26035_26043;
var G__26049 = count__26036_26044;
var G__26050 = (i__26037_26045 + (1));
seq__26034_26042 = G__26047;
chunk__26035_26043 = G__26048;
count__26036_26044 = G__26049;
i__26037_26045 = G__26050;
continue;
} else {
var temp__5735__auto___26051 = cljs.core.seq.call(null,seq__26034_26042);
if(temp__5735__auto___26051){
var seq__26034_26052__$1 = temp__5735__auto___26051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26034_26052__$1)){
var c__4550__auto___26053 = cljs.core.chunk_first.call(null,seq__26034_26052__$1);
var G__26054 = cljs.core.chunk_rest.call(null,seq__26034_26052__$1);
var G__26055 = c__4550__auto___26053;
var G__26056 = cljs.core.count.call(null,c__4550__auto___26053);
var G__26057 = (0);
seq__26034_26042 = G__26054;
chunk__26035_26043 = G__26055;
count__26036_26044 = G__26056;
i__26037_26045 = G__26057;
continue;
} else {
var dep_26058 = cljs.core.first.call(null,seq__26034_26052__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26058;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26058));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26058,(depth + (1)),state);
} else {
}


var G__26059 = cljs.core.next.call(null,seq__26034_26052__$1);
var G__26060 = null;
var G__26061 = (0);
var G__26062 = (0);
seq__26034_26042 = G__26059;
chunk__26035_26043 = G__26060;
count__26036_26044 = G__26061;
i__26037_26045 = G__26062;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26038){
var vec__26039 = p__26038;
var seq__26040 = cljs.core.seq.call(null,vec__26039);
var first__26041 = cljs.core.first.call(null,seq__26040);
var seq__26040__$1 = cljs.core.next.call(null,seq__26040);
var x = first__26041;
var xs = seq__26040__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26039,seq__26040,first__26041,seq__26040__$1,x,xs,get_deps__$1){
return (function (p1__26025_SHARP_){
return clojure.set.difference.call(null,p1__26025_SHARP_,x);
});})(vec__26039,seq__26040,first__26041,seq__26040__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26063 = cljs.core.seq.call(null,provides);
var chunk__26064 = null;
var count__26065 = (0);
var i__26066 = (0);
while(true){
if((i__26066 < count__26065)){
var prov = cljs.core._nth.call(null,chunk__26064,i__26066);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26075_26083 = cljs.core.seq.call(null,requires);
var chunk__26076_26084 = null;
var count__26077_26085 = (0);
var i__26078_26086 = (0);
while(true){
if((i__26078_26086 < count__26077_26085)){
var req_26087 = cljs.core._nth.call(null,chunk__26076_26084,i__26078_26086);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26087,prov);


var G__26088 = seq__26075_26083;
var G__26089 = chunk__26076_26084;
var G__26090 = count__26077_26085;
var G__26091 = (i__26078_26086 + (1));
seq__26075_26083 = G__26088;
chunk__26076_26084 = G__26089;
count__26077_26085 = G__26090;
i__26078_26086 = G__26091;
continue;
} else {
var temp__5735__auto___26092 = cljs.core.seq.call(null,seq__26075_26083);
if(temp__5735__auto___26092){
var seq__26075_26093__$1 = temp__5735__auto___26092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26075_26093__$1)){
var c__4550__auto___26094 = cljs.core.chunk_first.call(null,seq__26075_26093__$1);
var G__26095 = cljs.core.chunk_rest.call(null,seq__26075_26093__$1);
var G__26096 = c__4550__auto___26094;
var G__26097 = cljs.core.count.call(null,c__4550__auto___26094);
var G__26098 = (0);
seq__26075_26083 = G__26095;
chunk__26076_26084 = G__26096;
count__26077_26085 = G__26097;
i__26078_26086 = G__26098;
continue;
} else {
var req_26099 = cljs.core.first.call(null,seq__26075_26093__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26099,prov);


var G__26100 = cljs.core.next.call(null,seq__26075_26093__$1);
var G__26101 = null;
var G__26102 = (0);
var G__26103 = (0);
seq__26075_26083 = G__26100;
chunk__26076_26084 = G__26101;
count__26077_26085 = G__26102;
i__26078_26086 = G__26103;
continue;
}
} else {
}
}
break;
}


var G__26104 = seq__26063;
var G__26105 = chunk__26064;
var G__26106 = count__26065;
var G__26107 = (i__26066 + (1));
seq__26063 = G__26104;
chunk__26064 = G__26105;
count__26065 = G__26106;
i__26066 = G__26107;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26063);
if(temp__5735__auto__){
var seq__26063__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26063__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26063__$1);
var G__26108 = cljs.core.chunk_rest.call(null,seq__26063__$1);
var G__26109 = c__4550__auto__;
var G__26110 = cljs.core.count.call(null,c__4550__auto__);
var G__26111 = (0);
seq__26063 = G__26108;
chunk__26064 = G__26109;
count__26065 = G__26110;
i__26066 = G__26111;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26063__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26079_26112 = cljs.core.seq.call(null,requires);
var chunk__26080_26113 = null;
var count__26081_26114 = (0);
var i__26082_26115 = (0);
while(true){
if((i__26082_26115 < count__26081_26114)){
var req_26116 = cljs.core._nth.call(null,chunk__26080_26113,i__26082_26115);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26116,prov);


var G__26117 = seq__26079_26112;
var G__26118 = chunk__26080_26113;
var G__26119 = count__26081_26114;
var G__26120 = (i__26082_26115 + (1));
seq__26079_26112 = G__26117;
chunk__26080_26113 = G__26118;
count__26081_26114 = G__26119;
i__26082_26115 = G__26120;
continue;
} else {
var temp__5735__auto___26121__$1 = cljs.core.seq.call(null,seq__26079_26112);
if(temp__5735__auto___26121__$1){
var seq__26079_26122__$1 = temp__5735__auto___26121__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26079_26122__$1)){
var c__4550__auto___26123 = cljs.core.chunk_first.call(null,seq__26079_26122__$1);
var G__26124 = cljs.core.chunk_rest.call(null,seq__26079_26122__$1);
var G__26125 = c__4550__auto___26123;
var G__26126 = cljs.core.count.call(null,c__4550__auto___26123);
var G__26127 = (0);
seq__26079_26112 = G__26124;
chunk__26080_26113 = G__26125;
count__26081_26114 = G__26126;
i__26082_26115 = G__26127;
continue;
} else {
var req_26128 = cljs.core.first.call(null,seq__26079_26122__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26128,prov);


var G__26129 = cljs.core.next.call(null,seq__26079_26122__$1);
var G__26130 = null;
var G__26131 = (0);
var G__26132 = (0);
seq__26079_26112 = G__26129;
chunk__26080_26113 = G__26130;
count__26081_26114 = G__26131;
i__26082_26115 = G__26132;
continue;
}
} else {
}
}
break;
}


var G__26133 = cljs.core.next.call(null,seq__26063__$1);
var G__26134 = null;
var G__26135 = (0);
var G__26136 = (0);
seq__26063 = G__26133;
chunk__26064 = G__26134;
count__26065 = G__26135;
i__26066 = G__26136;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26137_26141 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26138_26142 = null;
var count__26139_26143 = (0);
var i__26140_26144 = (0);
while(true){
if((i__26140_26144 < count__26139_26143)){
var ns_26145 = cljs.core._nth.call(null,chunk__26138_26142,i__26140_26144);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26145);


var G__26146 = seq__26137_26141;
var G__26147 = chunk__26138_26142;
var G__26148 = count__26139_26143;
var G__26149 = (i__26140_26144 + (1));
seq__26137_26141 = G__26146;
chunk__26138_26142 = G__26147;
count__26139_26143 = G__26148;
i__26140_26144 = G__26149;
continue;
} else {
var temp__5735__auto___26150 = cljs.core.seq.call(null,seq__26137_26141);
if(temp__5735__auto___26150){
var seq__26137_26151__$1 = temp__5735__auto___26150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26137_26151__$1)){
var c__4550__auto___26152 = cljs.core.chunk_first.call(null,seq__26137_26151__$1);
var G__26153 = cljs.core.chunk_rest.call(null,seq__26137_26151__$1);
var G__26154 = c__4550__auto___26152;
var G__26155 = cljs.core.count.call(null,c__4550__auto___26152);
var G__26156 = (0);
seq__26137_26141 = G__26153;
chunk__26138_26142 = G__26154;
count__26139_26143 = G__26155;
i__26140_26144 = G__26156;
continue;
} else {
var ns_26157 = cljs.core.first.call(null,seq__26137_26151__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26157);


var G__26158 = cljs.core.next.call(null,seq__26137_26151__$1);
var G__26159 = null;
var G__26160 = (0);
var G__26161 = (0);
seq__26137_26141 = G__26158;
chunk__26138_26142 = G__26159;
count__26139_26143 = G__26160;
i__26140_26144 = G__26161;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26162__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26163__i = 0, G__26163__a = new Array(arguments.length -  0);
while (G__26163__i < G__26163__a.length) {G__26163__a[G__26163__i] = arguments[G__26163__i + 0]; ++G__26163__i;}
  args = new cljs.core.IndexedSeq(G__26163__a,0,null);
} 
return G__26162__delegate.call(this,args);};
G__26162.cljs$lang$maxFixedArity = 0;
G__26162.cljs$lang$applyTo = (function (arglist__26164){
var args = cljs.core.seq(arglist__26164);
return G__26162__delegate(args);
});
G__26162.cljs$core$IFn$_invoke$arity$variadic = G__26162__delegate;
return G__26162;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26165_SHARP_,p2__26166_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26165_SHARP_)),p2__26166_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26167_SHARP_,p2__26168_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26167_SHARP_),p2__26168_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26169 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26169.addCallback(((function (G__26169){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26169))
);

G__26169.addErrback(((function (G__26169){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26169))
);

return G__26169;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26170){if((e26170 instanceof Error)){
var e = e26170;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26170;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26171){if((e26171 instanceof Error)){
var e = e26171;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26171;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26172 = cljs.core._EQ_;
var expr__26173 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26173))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26173))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26173))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26172,expr__26173){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26172,expr__26173))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26175,callback){
var map__26176 = p__26175;
var map__26176__$1 = (((((!((map__26176 == null))))?(((((map__26176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26176):map__26176);
var file_msg = map__26176__$1;
var request_url = cljs.core.get.call(null,map__26176__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26176,map__26176__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26176,map__26176__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_26214){
var state_val_26215 = (state_26214[(1)]);
if((state_val_26215 === (7))){
var inst_26210 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26216_26242 = state_26214__$1;
(statearr_26216_26242[(2)] = inst_26210);

(statearr_26216_26242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (1))){
var state_26214__$1 = state_26214;
var statearr_26217_26243 = state_26214__$1;
(statearr_26217_26243[(2)] = null);

(statearr_26217_26243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (4))){
var inst_26180 = (state_26214[(7)]);
var inst_26180__$1 = (state_26214[(2)]);
var state_26214__$1 = (function (){var statearr_26218 = state_26214;
(statearr_26218[(7)] = inst_26180__$1);

return statearr_26218;
})();
if(cljs.core.truth_(inst_26180__$1)){
var statearr_26219_26244 = state_26214__$1;
(statearr_26219_26244[(1)] = (5));

} else {
var statearr_26220_26245 = state_26214__$1;
(statearr_26220_26245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (15))){
var inst_26195 = (state_26214[(8)]);
var inst_26193 = (state_26214[(9)]);
var inst_26197 = inst_26195.call(null,inst_26193);
var state_26214__$1 = state_26214;
var statearr_26221_26246 = state_26214__$1;
(statearr_26221_26246[(2)] = inst_26197);

(statearr_26221_26246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (13))){
var inst_26204 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26222_26247 = state_26214__$1;
(statearr_26222_26247[(2)] = inst_26204);

(statearr_26222_26247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (6))){
var state_26214__$1 = state_26214;
var statearr_26223_26248 = state_26214__$1;
(statearr_26223_26248[(2)] = null);

(statearr_26223_26248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (17))){
var inst_26201 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
var statearr_26224_26249 = state_26214__$1;
(statearr_26224_26249[(2)] = inst_26201);

(statearr_26224_26249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (3))){
var inst_26212 = (state_26214[(2)]);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26214__$1,inst_26212);
} else {
if((state_val_26215 === (12))){
var state_26214__$1 = state_26214;
var statearr_26225_26250 = state_26214__$1;
(statearr_26225_26250[(2)] = null);

(statearr_26225_26250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (2))){
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26215 === (11))){
var inst_26185 = (state_26214[(10)]);
var inst_26191 = figwheel.client.file_reloading.blocking_load.call(null,inst_26185);
var state_26214__$1 = state_26214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26214__$1,(14),inst_26191);
} else {
if((state_val_26215 === (9))){
var inst_26185 = (state_26214[(10)]);
var state_26214__$1 = state_26214;
if(cljs.core.truth_(inst_26185)){
var statearr_26226_26251 = state_26214__$1;
(statearr_26226_26251[(1)] = (11));

} else {
var statearr_26227_26252 = state_26214__$1;
(statearr_26227_26252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (5))){
var inst_26180 = (state_26214[(7)]);
var inst_26186 = (state_26214[(11)]);
var inst_26185 = cljs.core.nth.call(null,inst_26180,(0),null);
var inst_26186__$1 = cljs.core.nth.call(null,inst_26180,(1),null);
var state_26214__$1 = (function (){var statearr_26228 = state_26214;
(statearr_26228[(10)] = inst_26185);

(statearr_26228[(11)] = inst_26186__$1);

return statearr_26228;
})();
if(cljs.core.truth_(inst_26186__$1)){
var statearr_26229_26253 = state_26214__$1;
(statearr_26229_26253[(1)] = (8));

} else {
var statearr_26230_26254 = state_26214__$1;
(statearr_26230_26254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (14))){
var inst_26185 = (state_26214[(10)]);
var inst_26195 = (state_26214[(8)]);
var inst_26193 = (state_26214[(2)]);
var inst_26194 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26195__$1 = cljs.core.get.call(null,inst_26194,inst_26185);
var state_26214__$1 = (function (){var statearr_26231 = state_26214;
(statearr_26231[(8)] = inst_26195__$1);

(statearr_26231[(9)] = inst_26193);

return statearr_26231;
})();
if(cljs.core.truth_(inst_26195__$1)){
var statearr_26232_26255 = state_26214__$1;
(statearr_26232_26255[(1)] = (15));

} else {
var statearr_26233_26256 = state_26214__$1;
(statearr_26233_26256[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (16))){
var inst_26193 = (state_26214[(9)]);
var inst_26199 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26193);
var state_26214__$1 = state_26214;
var statearr_26234_26257 = state_26214__$1;
(statearr_26234_26257[(2)] = inst_26199);

(statearr_26234_26257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (10))){
var inst_26206 = (state_26214[(2)]);
var state_26214__$1 = (function (){var statearr_26235 = state_26214;
(statearr_26235[(12)] = inst_26206);

return statearr_26235;
})();
var statearr_26236_26258 = state_26214__$1;
(statearr_26236_26258[(2)] = null);

(statearr_26236_26258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26215 === (8))){
var inst_26186 = (state_26214[(11)]);
var inst_26188 = eval(inst_26186);
var state_26214__$1 = state_26214;
var statearr_26237_26259 = state_26214__$1;
(statearr_26237_26259[(2)] = inst_26188);

(statearr_26237_26259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$state_machine__22465__auto____0 = (function (){
var statearr_26238 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26238[(0)] = figwheel$client$file_reloading$state_machine__22465__auto__);

(statearr_26238[(1)] = (1));

return statearr_26238;
});
var figwheel$client$file_reloading$state_machine__22465__auto____1 = (function (state_26214){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26239){if((e26239 instanceof Object)){
var ex__22468__auto__ = e26239;
var statearr_26240_26260 = state_26214;
(statearr_26240_26260[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26261 = state_26214;
state_26214 = G__26261;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22465__auto__ = function(state_26214){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22465__auto____1.call(this,state_26214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22465__auto____0;
figwheel$client$file_reloading$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22465__auto____1;
return figwheel$client$file_reloading$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_26241 = f__22560__auto__.call(null);
(statearr_26241[(6)] = c__22559__auto__);

return statearr_26241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26263 = arguments.length;
switch (G__26263) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26265,callback){
var map__26266 = p__26265;
var map__26266__$1 = (((((!((map__26266 == null))))?(((((map__26266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26266):map__26266);
var file_msg = map__26266__$1;
var namespace = cljs.core.get.call(null,map__26266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26266,map__26266__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26266,map__26266__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26268){
var map__26269 = p__26268;
var map__26269__$1 = (((((!((map__26269 == null))))?(((((map__26269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26269):map__26269);
var file_msg = map__26269__$1;
var namespace = cljs.core.get.call(null,map__26269__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26271){
var map__26272 = p__26271;
var map__26272__$1 = (((((!((map__26272 == null))))?(((((map__26272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26272):map__26272);
var file_msg = map__26272__$1;
var namespace = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26274,callback){
var map__26275 = p__26274;
var map__26275__$1 = (((((!((map__26275 == null))))?(((((map__26275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26275):map__26275);
var file_msg = map__26275__$1;
var request_url = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22559__auto___26325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___26325,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___26325,out){
return (function (state_26310){
var state_val_26311 = (state_26310[(1)]);
if((state_val_26311 === (1))){
var inst_26284 = cljs.core.seq.call(null,files);
var inst_26285 = cljs.core.first.call(null,inst_26284);
var inst_26286 = cljs.core.next.call(null,inst_26284);
var inst_26287 = files;
var state_26310__$1 = (function (){var statearr_26312 = state_26310;
(statearr_26312[(7)] = inst_26286);

(statearr_26312[(8)] = inst_26287);

(statearr_26312[(9)] = inst_26285);

return statearr_26312;
})();
var statearr_26313_26326 = state_26310__$1;
(statearr_26313_26326[(2)] = null);

(statearr_26313_26326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (2))){
var inst_26287 = (state_26310[(8)]);
var inst_26293 = (state_26310[(10)]);
var inst_26292 = cljs.core.seq.call(null,inst_26287);
var inst_26293__$1 = cljs.core.first.call(null,inst_26292);
var inst_26294 = cljs.core.next.call(null,inst_26292);
var inst_26295 = (inst_26293__$1 == null);
var inst_26296 = cljs.core.not.call(null,inst_26295);
var state_26310__$1 = (function (){var statearr_26314 = state_26310;
(statearr_26314[(10)] = inst_26293__$1);

(statearr_26314[(11)] = inst_26294);

return statearr_26314;
})();
if(inst_26296){
var statearr_26315_26327 = state_26310__$1;
(statearr_26315_26327[(1)] = (4));

} else {
var statearr_26316_26328 = state_26310__$1;
(statearr_26316_26328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (3))){
var inst_26308 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26310__$1,inst_26308);
} else {
if((state_val_26311 === (4))){
var inst_26293 = (state_26310[(10)]);
var inst_26298 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26293);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(7),inst_26298);
} else {
if((state_val_26311 === (5))){
var inst_26304 = cljs.core.async.close_BANG_.call(null,out);
var state_26310__$1 = state_26310;
var statearr_26317_26329 = state_26310__$1;
(statearr_26317_26329[(2)] = inst_26304);

(statearr_26317_26329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (6))){
var inst_26306 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26318_26330 = state_26310__$1;
(statearr_26318_26330[(2)] = inst_26306);

(statearr_26318_26330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (7))){
var inst_26294 = (state_26310[(11)]);
var inst_26300 = (state_26310[(2)]);
var inst_26301 = cljs.core.async.put_BANG_.call(null,out,inst_26300);
var inst_26287 = inst_26294;
var state_26310__$1 = (function (){var statearr_26319 = state_26310;
(statearr_26319[(12)] = inst_26301);

(statearr_26319[(8)] = inst_26287);

return statearr_26319;
})();
var statearr_26320_26331 = state_26310__$1;
(statearr_26320_26331[(2)] = null);

(statearr_26320_26331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22559__auto___26325,out))
;
return ((function (switch__22464__auto__,c__22559__auto___26325,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0 = (function (){
var statearr_26321 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26321[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__);

(statearr_26321[(1)] = (1));

return statearr_26321;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1 = (function (state_26310){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26322){if((e26322 instanceof Object)){
var ex__22468__auto__ = e26322;
var statearr_26323_26332 = state_26310;
(statearr_26323_26332[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26333 = state_26310;
state_26310 = G__26333;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__ = function(state_26310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1.call(this,state_26310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___26325,out))
})();
var state__22561__auto__ = (function (){var statearr_26324 = f__22560__auto__.call(null);
(statearr_26324[(6)] = c__22559__auto___26325);

return statearr_26324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___26325,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26334,opts){
var map__26335 = p__26334;
var map__26335__$1 = (((((!((map__26335 == null))))?(((((map__26335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26335):map__26335);
var eval_body = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26337){var e = e26337;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26338_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26338_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26339){
var vec__26340 = p__26339;
var k = cljs.core.nth.call(null,vec__26340,(0),null);
var v = cljs.core.nth.call(null,vec__26340,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26343){
var vec__26344 = p__26343;
var k = cljs.core.nth.call(null,vec__26344,(0),null);
var v = cljs.core.nth.call(null,vec__26344,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26350,p__26351){
var map__26352 = p__26350;
var map__26352__$1 = (((((!((map__26352 == null))))?(((((map__26352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26352):map__26352);
var opts = map__26352__$1;
var before_jsload = cljs.core.get.call(null,map__26352__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26352__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26352__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26353 = p__26351;
var map__26353__$1 = (((((!((map__26353 == null))))?(((((map__26353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26353):map__26353);
var msg = map__26353__$1;
var files = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26353__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26507){
var state_val_26508 = (state_26507[(1)]);
if((state_val_26508 === (7))){
var inst_26367 = (state_26507[(7)]);
var inst_26368 = (state_26507[(8)]);
var inst_26370 = (state_26507[(9)]);
var inst_26369 = (state_26507[(10)]);
var inst_26375 = cljs.core._nth.call(null,inst_26368,inst_26370);
var inst_26376 = figwheel.client.file_reloading.eval_body.call(null,inst_26375,opts);
var inst_26377 = (inst_26370 + (1));
var tmp26509 = inst_26367;
var tmp26510 = inst_26368;
var tmp26511 = inst_26369;
var inst_26367__$1 = tmp26509;
var inst_26368__$1 = tmp26510;
var inst_26369__$1 = tmp26511;
var inst_26370__$1 = inst_26377;
var state_26507__$1 = (function (){var statearr_26512 = state_26507;
(statearr_26512[(7)] = inst_26367__$1);

(statearr_26512[(8)] = inst_26368__$1);

(statearr_26512[(9)] = inst_26370__$1);

(statearr_26512[(10)] = inst_26369__$1);

(statearr_26512[(11)] = inst_26376);

return statearr_26512;
})();
var statearr_26513_26596 = state_26507__$1;
(statearr_26513_26596[(2)] = null);

(statearr_26513_26596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (20))){
var inst_26410 = (state_26507[(12)]);
var inst_26418 = figwheel.client.file_reloading.sort_files.call(null,inst_26410);
var state_26507__$1 = state_26507;
var statearr_26514_26597 = state_26507__$1;
(statearr_26514_26597[(2)] = inst_26418);

(statearr_26514_26597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (27))){
var state_26507__$1 = state_26507;
var statearr_26515_26598 = state_26507__$1;
(statearr_26515_26598[(2)] = null);

(statearr_26515_26598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (1))){
var inst_26359 = (state_26507[(13)]);
var inst_26356 = before_jsload.call(null,files);
var inst_26357 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26358 = (function (){return ((function (inst_26359,inst_26356,inst_26357,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26347_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26347_SHARP_);
});
;})(inst_26359,inst_26356,inst_26357,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26359__$1 = cljs.core.filter.call(null,inst_26358,files);
var inst_26360 = cljs.core.not_empty.call(null,inst_26359__$1);
var state_26507__$1 = (function (){var statearr_26516 = state_26507;
(statearr_26516[(14)] = inst_26357);

(statearr_26516[(15)] = inst_26356);

(statearr_26516[(13)] = inst_26359__$1);

return statearr_26516;
})();
if(cljs.core.truth_(inst_26360)){
var statearr_26517_26599 = state_26507__$1;
(statearr_26517_26599[(1)] = (2));

} else {
var statearr_26518_26600 = state_26507__$1;
(statearr_26518_26600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (24))){
var state_26507__$1 = state_26507;
var statearr_26519_26601 = state_26507__$1;
(statearr_26519_26601[(2)] = null);

(statearr_26519_26601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (39))){
var inst_26460 = (state_26507[(16)]);
var state_26507__$1 = state_26507;
var statearr_26520_26602 = state_26507__$1;
(statearr_26520_26602[(2)] = inst_26460);

(statearr_26520_26602[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (46))){
var inst_26502 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26521_26603 = state_26507__$1;
(statearr_26521_26603[(2)] = inst_26502);

(statearr_26521_26603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (4))){
var inst_26404 = (state_26507[(2)]);
var inst_26405 = cljs.core.List.EMPTY;
var inst_26406 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26405);
var inst_26407 = (function (){return ((function (inst_26404,inst_26405,inst_26406,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26348_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26348_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26348_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26348_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_26404,inst_26405,inst_26406,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26408 = cljs.core.filter.call(null,inst_26407,files);
var inst_26409 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26410 = cljs.core.concat.call(null,inst_26408,inst_26409);
var state_26507__$1 = (function (){var statearr_26522 = state_26507;
(statearr_26522[(17)] = inst_26406);

(statearr_26522[(18)] = inst_26404);

(statearr_26522[(12)] = inst_26410);

return statearr_26522;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26523_26604 = state_26507__$1;
(statearr_26523_26604[(1)] = (16));

} else {
var statearr_26524_26605 = state_26507__$1;
(statearr_26524_26605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (15))){
var inst_26394 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26525_26606 = state_26507__$1;
(statearr_26525_26606[(2)] = inst_26394);

(statearr_26525_26606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (21))){
var inst_26420 = (state_26507[(19)]);
var inst_26420__$1 = (state_26507[(2)]);
var inst_26421 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26420__$1);
var state_26507__$1 = (function (){var statearr_26526 = state_26507;
(statearr_26526[(19)] = inst_26420__$1);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26507__$1,(22),inst_26421);
} else {
if((state_val_26508 === (31))){
var inst_26505 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26507__$1,inst_26505);
} else {
if((state_val_26508 === (32))){
var inst_26460 = (state_26507[(16)]);
var inst_26465 = inst_26460.cljs$lang$protocol_mask$partition0$;
var inst_26466 = (inst_26465 & (64));
var inst_26467 = inst_26460.cljs$core$ISeq$;
var inst_26468 = (cljs.core.PROTOCOL_SENTINEL === inst_26467);
var inst_26469 = ((inst_26466) || (inst_26468));
var state_26507__$1 = state_26507;
if(cljs.core.truth_(inst_26469)){
var statearr_26527_26607 = state_26507__$1;
(statearr_26527_26607[(1)] = (35));

} else {
var statearr_26528_26608 = state_26507__$1;
(statearr_26528_26608[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (40))){
var inst_26482 = (state_26507[(20)]);
var inst_26481 = (state_26507[(2)]);
var inst_26482__$1 = cljs.core.get.call(null,inst_26481,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26483 = cljs.core.get.call(null,inst_26481,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26484 = cljs.core.not_empty.call(null,inst_26482__$1);
var state_26507__$1 = (function (){var statearr_26529 = state_26507;
(statearr_26529[(21)] = inst_26483);

(statearr_26529[(20)] = inst_26482__$1);

return statearr_26529;
})();
if(cljs.core.truth_(inst_26484)){
var statearr_26530_26609 = state_26507__$1;
(statearr_26530_26609[(1)] = (41));

} else {
var statearr_26531_26610 = state_26507__$1;
(statearr_26531_26610[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (33))){
var state_26507__$1 = state_26507;
var statearr_26532_26611 = state_26507__$1;
(statearr_26532_26611[(2)] = false);

(statearr_26532_26611[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (13))){
var inst_26380 = (state_26507[(22)]);
var inst_26384 = cljs.core.chunk_first.call(null,inst_26380);
var inst_26385 = cljs.core.chunk_rest.call(null,inst_26380);
var inst_26386 = cljs.core.count.call(null,inst_26384);
var inst_26367 = inst_26385;
var inst_26368 = inst_26384;
var inst_26369 = inst_26386;
var inst_26370 = (0);
var state_26507__$1 = (function (){var statearr_26533 = state_26507;
(statearr_26533[(7)] = inst_26367);

(statearr_26533[(8)] = inst_26368);

(statearr_26533[(9)] = inst_26370);

(statearr_26533[(10)] = inst_26369);

return statearr_26533;
})();
var statearr_26534_26612 = state_26507__$1;
(statearr_26534_26612[(2)] = null);

(statearr_26534_26612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (22))){
var inst_26423 = (state_26507[(23)]);
var inst_26424 = (state_26507[(24)]);
var inst_26420 = (state_26507[(19)]);
var inst_26428 = (state_26507[(25)]);
var inst_26423__$1 = (state_26507[(2)]);
var inst_26424__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26423__$1);
var inst_26425 = (function (){var all_files = inst_26420;
var res_SINGLEQUOTE_ = inst_26423__$1;
var res = inst_26424__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26423,inst_26424,inst_26420,inst_26428,inst_26423__$1,inst_26424__$1,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26349_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26349_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26423,inst_26424,inst_26420,inst_26428,inst_26423__$1,inst_26424__$1,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26426 = cljs.core.filter.call(null,inst_26425,inst_26423__$1);
var inst_26427 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26428__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26427);
var inst_26429 = cljs.core.not_empty.call(null,inst_26428__$1);
var state_26507__$1 = (function (){var statearr_26535 = state_26507;
(statearr_26535[(23)] = inst_26423__$1);

(statearr_26535[(26)] = inst_26426);

(statearr_26535[(24)] = inst_26424__$1);

(statearr_26535[(25)] = inst_26428__$1);

return statearr_26535;
})();
if(cljs.core.truth_(inst_26429)){
var statearr_26536_26613 = state_26507__$1;
(statearr_26536_26613[(1)] = (23));

} else {
var statearr_26537_26614 = state_26507__$1;
(statearr_26537_26614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (36))){
var state_26507__$1 = state_26507;
var statearr_26538_26615 = state_26507__$1;
(statearr_26538_26615[(2)] = false);

(statearr_26538_26615[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (41))){
var inst_26482 = (state_26507[(20)]);
var inst_26486 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26487 = cljs.core.map.call(null,inst_26486,inst_26482);
var inst_26488 = cljs.core.pr_str.call(null,inst_26487);
var inst_26489 = ["figwheel-no-load meta-data: ",inst_26488].join('');
var inst_26490 = figwheel.client.utils.log.call(null,inst_26489);
var state_26507__$1 = state_26507;
var statearr_26539_26616 = state_26507__$1;
(statearr_26539_26616[(2)] = inst_26490);

(statearr_26539_26616[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (43))){
var inst_26483 = (state_26507[(21)]);
var inst_26493 = (state_26507[(2)]);
var inst_26494 = cljs.core.not_empty.call(null,inst_26483);
var state_26507__$1 = (function (){var statearr_26540 = state_26507;
(statearr_26540[(27)] = inst_26493);

return statearr_26540;
})();
if(cljs.core.truth_(inst_26494)){
var statearr_26541_26617 = state_26507__$1;
(statearr_26541_26617[(1)] = (44));

} else {
var statearr_26542_26618 = state_26507__$1;
(statearr_26542_26618[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (29))){
var inst_26460 = (state_26507[(16)]);
var inst_26423 = (state_26507[(23)]);
var inst_26426 = (state_26507[(26)]);
var inst_26424 = (state_26507[(24)]);
var inst_26420 = (state_26507[(19)]);
var inst_26428 = (state_26507[(25)]);
var inst_26456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26459 = (function (){var all_files = inst_26420;
var res_SINGLEQUOTE_ = inst_26423;
var res = inst_26424;
var files_not_loaded = inst_26426;
var dependencies_that_loaded = inst_26428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26460,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26456,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26458){
var map__26543 = p__26458;
var map__26543__$1 = (((((!((map__26543 == null))))?(((((map__26543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26543):map__26543);
var namespace = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26460,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26456,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26460__$1 = cljs.core.group_by.call(null,inst_26459,inst_26426);
var inst_26462 = (inst_26460__$1 == null);
var inst_26463 = cljs.core.not.call(null,inst_26462);
var state_26507__$1 = (function (){var statearr_26545 = state_26507;
(statearr_26545[(16)] = inst_26460__$1);

(statearr_26545[(28)] = inst_26456);

return statearr_26545;
})();
if(inst_26463){
var statearr_26546_26619 = state_26507__$1;
(statearr_26546_26619[(1)] = (32));

} else {
var statearr_26547_26620 = state_26507__$1;
(statearr_26547_26620[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (44))){
var inst_26483 = (state_26507[(21)]);
var inst_26496 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26483);
var inst_26497 = cljs.core.pr_str.call(null,inst_26496);
var inst_26498 = ["not required: ",inst_26497].join('');
var inst_26499 = figwheel.client.utils.log.call(null,inst_26498);
var state_26507__$1 = state_26507;
var statearr_26548_26621 = state_26507__$1;
(statearr_26548_26621[(2)] = inst_26499);

(statearr_26548_26621[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (6))){
var inst_26401 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26549_26622 = state_26507__$1;
(statearr_26549_26622[(2)] = inst_26401);

(statearr_26549_26622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (28))){
var inst_26426 = (state_26507[(26)]);
var inst_26453 = (state_26507[(2)]);
var inst_26454 = cljs.core.not_empty.call(null,inst_26426);
var state_26507__$1 = (function (){var statearr_26550 = state_26507;
(statearr_26550[(29)] = inst_26453);

return statearr_26550;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26551_26623 = state_26507__$1;
(statearr_26551_26623[(1)] = (29));

} else {
var statearr_26552_26624 = state_26507__$1;
(statearr_26552_26624[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (25))){
var inst_26424 = (state_26507[(24)]);
var inst_26440 = (state_26507[(2)]);
var inst_26441 = cljs.core.not_empty.call(null,inst_26424);
var state_26507__$1 = (function (){var statearr_26553 = state_26507;
(statearr_26553[(30)] = inst_26440);

return statearr_26553;
})();
if(cljs.core.truth_(inst_26441)){
var statearr_26554_26625 = state_26507__$1;
(statearr_26554_26625[(1)] = (26));

} else {
var statearr_26555_26626 = state_26507__$1;
(statearr_26555_26626[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (34))){
var inst_26476 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
if(cljs.core.truth_(inst_26476)){
var statearr_26556_26627 = state_26507__$1;
(statearr_26556_26627[(1)] = (38));

} else {
var statearr_26557_26628 = state_26507__$1;
(statearr_26557_26628[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (17))){
var state_26507__$1 = state_26507;
var statearr_26558_26629 = state_26507__$1;
(statearr_26558_26629[(2)] = recompile_dependents);

(statearr_26558_26629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (3))){
var state_26507__$1 = state_26507;
var statearr_26559_26630 = state_26507__$1;
(statearr_26559_26630[(2)] = null);

(statearr_26559_26630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (12))){
var inst_26397 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26560_26631 = state_26507__$1;
(statearr_26560_26631[(2)] = inst_26397);

(statearr_26560_26631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (2))){
var inst_26359 = (state_26507[(13)]);
var inst_26366 = cljs.core.seq.call(null,inst_26359);
var inst_26367 = inst_26366;
var inst_26368 = null;
var inst_26369 = (0);
var inst_26370 = (0);
var state_26507__$1 = (function (){var statearr_26561 = state_26507;
(statearr_26561[(7)] = inst_26367);

(statearr_26561[(8)] = inst_26368);

(statearr_26561[(9)] = inst_26370);

(statearr_26561[(10)] = inst_26369);

return statearr_26561;
})();
var statearr_26562_26632 = state_26507__$1;
(statearr_26562_26632[(2)] = null);

(statearr_26562_26632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (23))){
var inst_26423 = (state_26507[(23)]);
var inst_26426 = (state_26507[(26)]);
var inst_26424 = (state_26507[(24)]);
var inst_26420 = (state_26507[(19)]);
var inst_26428 = (state_26507[(25)]);
var inst_26431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26433 = (function (){var all_files = inst_26420;
var res_SINGLEQUOTE_ = inst_26423;
var res = inst_26424;
var files_not_loaded = inst_26426;
var dependencies_that_loaded = inst_26428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26431,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26432){
var map__26563 = p__26432;
var map__26563__$1 = (((((!((map__26563 == null))))?(((((map__26563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
var request_url = cljs.core.get.call(null,map__26563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26431,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26434 = cljs.core.reverse.call(null,inst_26428);
var inst_26435 = cljs.core.map.call(null,inst_26433,inst_26434);
var inst_26436 = cljs.core.pr_str.call(null,inst_26435);
var inst_26437 = figwheel.client.utils.log.call(null,inst_26436);
var state_26507__$1 = (function (){var statearr_26565 = state_26507;
(statearr_26565[(31)] = inst_26431);

return statearr_26565;
})();
var statearr_26566_26633 = state_26507__$1;
(statearr_26566_26633[(2)] = inst_26437);

(statearr_26566_26633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (35))){
var state_26507__$1 = state_26507;
var statearr_26567_26634 = state_26507__$1;
(statearr_26567_26634[(2)] = true);

(statearr_26567_26634[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (19))){
var inst_26410 = (state_26507[(12)]);
var inst_26416 = figwheel.client.file_reloading.expand_files.call(null,inst_26410);
var state_26507__$1 = state_26507;
var statearr_26568_26635 = state_26507__$1;
(statearr_26568_26635[(2)] = inst_26416);

(statearr_26568_26635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (11))){
var state_26507__$1 = state_26507;
var statearr_26569_26636 = state_26507__$1;
(statearr_26569_26636[(2)] = null);

(statearr_26569_26636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (9))){
var inst_26399 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26570_26637 = state_26507__$1;
(statearr_26570_26637[(2)] = inst_26399);

(statearr_26570_26637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (5))){
var inst_26370 = (state_26507[(9)]);
var inst_26369 = (state_26507[(10)]);
var inst_26372 = (inst_26370 < inst_26369);
var inst_26373 = inst_26372;
var state_26507__$1 = state_26507;
if(cljs.core.truth_(inst_26373)){
var statearr_26571_26638 = state_26507__$1;
(statearr_26571_26638[(1)] = (7));

} else {
var statearr_26572_26639 = state_26507__$1;
(statearr_26572_26639[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (14))){
var inst_26380 = (state_26507[(22)]);
var inst_26389 = cljs.core.first.call(null,inst_26380);
var inst_26390 = figwheel.client.file_reloading.eval_body.call(null,inst_26389,opts);
var inst_26391 = cljs.core.next.call(null,inst_26380);
var inst_26367 = inst_26391;
var inst_26368 = null;
var inst_26369 = (0);
var inst_26370 = (0);
var state_26507__$1 = (function (){var statearr_26573 = state_26507;
(statearr_26573[(32)] = inst_26390);

(statearr_26573[(7)] = inst_26367);

(statearr_26573[(8)] = inst_26368);

(statearr_26573[(9)] = inst_26370);

(statearr_26573[(10)] = inst_26369);

return statearr_26573;
})();
var statearr_26574_26640 = state_26507__$1;
(statearr_26574_26640[(2)] = null);

(statearr_26574_26640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (45))){
var state_26507__$1 = state_26507;
var statearr_26575_26641 = state_26507__$1;
(statearr_26575_26641[(2)] = null);

(statearr_26575_26641[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (26))){
var inst_26423 = (state_26507[(23)]);
var inst_26426 = (state_26507[(26)]);
var inst_26424 = (state_26507[(24)]);
var inst_26420 = (state_26507[(19)]);
var inst_26428 = (state_26507[(25)]);
var inst_26443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26445 = (function (){var all_files = inst_26420;
var res_SINGLEQUOTE_ = inst_26423;
var res = inst_26424;
var files_not_loaded = inst_26426;
var dependencies_that_loaded = inst_26428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26443,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26444){
var map__26576 = p__26444;
var map__26576__$1 = (((((!((map__26576 == null))))?(((((map__26576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26576):map__26576);
var namespace = cljs.core.get.call(null,map__26576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26443,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26446 = cljs.core.map.call(null,inst_26445,inst_26424);
var inst_26447 = cljs.core.pr_str.call(null,inst_26446);
var inst_26448 = figwheel.client.utils.log.call(null,inst_26447);
var inst_26449 = (function (){var all_files = inst_26420;
var res_SINGLEQUOTE_ = inst_26423;
var res = inst_26424;
var files_not_loaded = inst_26426;
var dependencies_that_loaded = inst_26428;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26443,inst_26445,inst_26446,inst_26447,inst_26448,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26423,inst_26426,inst_26424,inst_26420,inst_26428,inst_26443,inst_26445,inst_26446,inst_26447,inst_26448,state_val_26508,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26450 = setTimeout(inst_26449,(10));
var state_26507__$1 = (function (){var statearr_26578 = state_26507;
(statearr_26578[(33)] = inst_26443);

(statearr_26578[(34)] = inst_26448);

return statearr_26578;
})();
var statearr_26579_26642 = state_26507__$1;
(statearr_26579_26642[(2)] = inst_26450);

(statearr_26579_26642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (16))){
var state_26507__$1 = state_26507;
var statearr_26580_26643 = state_26507__$1;
(statearr_26580_26643[(2)] = reload_dependents);

(statearr_26580_26643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (38))){
var inst_26460 = (state_26507[(16)]);
var inst_26478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26460);
var state_26507__$1 = state_26507;
var statearr_26581_26644 = state_26507__$1;
(statearr_26581_26644[(2)] = inst_26478);

(statearr_26581_26644[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (30))){
var state_26507__$1 = state_26507;
var statearr_26582_26645 = state_26507__$1;
(statearr_26582_26645[(2)] = null);

(statearr_26582_26645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (10))){
var inst_26380 = (state_26507[(22)]);
var inst_26382 = cljs.core.chunked_seq_QMARK_.call(null,inst_26380);
var state_26507__$1 = state_26507;
if(inst_26382){
var statearr_26583_26646 = state_26507__$1;
(statearr_26583_26646[(1)] = (13));

} else {
var statearr_26584_26647 = state_26507__$1;
(statearr_26584_26647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (18))){
var inst_26414 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
if(cljs.core.truth_(inst_26414)){
var statearr_26585_26648 = state_26507__$1;
(statearr_26585_26648[(1)] = (19));

} else {
var statearr_26586_26649 = state_26507__$1;
(statearr_26586_26649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (42))){
var state_26507__$1 = state_26507;
var statearr_26587_26650 = state_26507__$1;
(statearr_26587_26650[(2)] = null);

(statearr_26587_26650[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (37))){
var inst_26473 = (state_26507[(2)]);
var state_26507__$1 = state_26507;
var statearr_26588_26651 = state_26507__$1;
(statearr_26588_26651[(2)] = inst_26473);

(statearr_26588_26651[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26508 === (8))){
var inst_26367 = (state_26507[(7)]);
var inst_26380 = (state_26507[(22)]);
var inst_26380__$1 = cljs.core.seq.call(null,inst_26367);
var state_26507__$1 = (function (){var statearr_26589 = state_26507;
(statearr_26589[(22)] = inst_26380__$1);

return statearr_26589;
})();
if(inst_26380__$1){
var statearr_26590_26652 = state_26507__$1;
(statearr_26590_26652[(1)] = (10));

} else {
var statearr_26591_26653 = state_26507__$1;
(statearr_26591_26653[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22464__auto__,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0 = (function (){
var statearr_26592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26592[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__);

(statearr_26592[(1)] = (1));

return statearr_26592;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1 = (function (state_26507){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26593){if((e26593 instanceof Object)){
var ex__22468__auto__ = e26593;
var statearr_26594_26654 = state_26507;
(statearr_26594_26654[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26655 = state_26507;
state_26507 = G__26655;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__ = function(state_26507){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1.call(this,state_26507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22561__auto__ = (function (){var statearr_26595 = f__22560__auto__.call(null);
(statearr_26595[(6)] = c__22559__auto__);

return statearr_26595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,map__26352,map__26352__$1,opts,before_jsload,on_jsload,reload_dependents,map__26353,map__26353__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22559__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26658,link){
var map__26659 = p__26658;
var map__26659__$1 = (((((!((map__26659 == null))))?(((((map__26659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26659):map__26659);
var file = cljs.core.get.call(null,map__26659__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__26659,map__26659__$1,file){
return (function (p1__26656_SHARP_,p2__26657_SHARP_){
if(cljs.core._EQ_.call(null,p1__26656_SHARP_,p2__26657_SHARP_)){
return p1__26656_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__26659,map__26659__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26662){
var map__26663 = p__26662;
var map__26663__$1 = (((((!((map__26663 == null))))?(((((map__26663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26663):map__26663);
var match_length = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26663__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26661_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26661_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26665_SHARP_,p2__26666_SHARP_){
return cljs.core.assoc.call(null,p1__26665_SHARP_,cljs.core.get.call(null,p2__26666_SHARP_,key),p2__26666_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26667 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26667);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26667);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26668,p__26669){
var map__26670 = p__26668;
var map__26670__$1 = (((((!((map__26670 == null))))?(((((map__26670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670):map__26670);
var on_cssload = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26671 = p__26669;
var map__26671__$1 = (((((!((map__26671 == null))))?(((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var files_msg = map__26671__$1;
var files = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1628369217220
