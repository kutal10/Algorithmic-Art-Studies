// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27887){if((e27887 instanceof Error)){
var e = e27887;
return "Error: Unable to stringify";
} else {
throw e27887;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27890 = arguments.length;
switch (G__27890) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27888_SHARP_){
if(typeof p1__27888_SHARP_ === 'string'){
return p1__27888_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27888_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27893 = arguments.length;
var i__4731__auto___27894 = (0);
while(true){
if((i__4731__auto___27894 < len__4730__auto___27893)){
args__4736__auto__.push((arguments[i__4731__auto___27894]));

var G__27895 = (i__4731__auto___27894 + (1));
i__4731__auto___27894 = G__27895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27892){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27892));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27897 = arguments.length;
var i__4731__auto___27898 = (0);
while(true){
if((i__4731__auto___27898 < len__4730__auto___27897)){
args__4736__auto__.push((arguments[i__4731__auto___27898]));

var G__27899 = (i__4731__auto___27898 + (1));
i__4731__auto___27898 = G__27899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27896){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27896));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27900){
var map__27901 = p__27900;
var map__27901__$1 = (((((!((map__27901 == null))))?(((((map__27901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27901):map__27901);
var message = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27901__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22559__auto___27980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___27980,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___27980,ch){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (7))){
var inst_27948 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27954_27981 = state_27952__$1;
(statearr_27954_27981[(2)] = inst_27948);

(statearr_27954_27981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (1))){
var state_27952__$1 = state_27952;
var statearr_27955_27982 = state_27952__$1;
(statearr_27955_27982[(2)] = null);

(statearr_27955_27982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (4))){
var inst_27905 = (state_27952[(7)]);
var inst_27905__$1 = (state_27952[(2)]);
var state_27952__$1 = (function (){var statearr_27956 = state_27952;
(statearr_27956[(7)] = inst_27905__$1);

return statearr_27956;
})();
if(cljs.core.truth_(inst_27905__$1)){
var statearr_27957_27983 = state_27952__$1;
(statearr_27957_27983[(1)] = (5));

} else {
var statearr_27958_27984 = state_27952__$1;
(statearr_27958_27984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (15))){
var inst_27912 = (state_27952[(8)]);
var inst_27927 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27912);
var inst_27928 = cljs.core.first.call(null,inst_27927);
var inst_27929 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27928);
var inst_27930 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27929)].join('');
var inst_27931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27930);
var state_27952__$1 = state_27952;
var statearr_27959_27985 = state_27952__$1;
(statearr_27959_27985[(2)] = inst_27931);

(statearr_27959_27985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (13))){
var inst_27936 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27960_27986 = state_27952__$1;
(statearr_27960_27986[(2)] = inst_27936);

(statearr_27960_27986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (6))){
var state_27952__$1 = state_27952;
var statearr_27961_27987 = state_27952__$1;
(statearr_27961_27987[(2)] = null);

(statearr_27961_27987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (17))){
var inst_27934 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27962_27988 = state_27952__$1;
(statearr_27962_27988[(2)] = inst_27934);

(statearr_27962_27988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (3))){
var inst_27950 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
if((state_val_27953 === (12))){
var inst_27911 = (state_27952[(9)]);
var inst_27925 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27911,opts);
var state_27952__$1 = state_27952;
if(inst_27925){
var statearr_27963_27989 = state_27952__$1;
(statearr_27963_27989[(1)] = (15));

} else {
var statearr_27964_27990 = state_27952__$1;
(statearr_27964_27990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (2))){
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(4),ch);
} else {
if((state_val_27953 === (11))){
var inst_27912 = (state_27952[(8)]);
var inst_27917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27918 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27912);
var inst_27919 = cljs.core.async.timeout.call(null,(1000));
var inst_27920 = [inst_27918,inst_27919];
var inst_27921 = (new cljs.core.PersistentVector(null,2,(5),inst_27917,inst_27920,null));
var state_27952__$1 = state_27952;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27952__$1,(14),inst_27921);
} else {
if((state_val_27953 === (9))){
var inst_27912 = (state_27952[(8)]);
var inst_27938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27939 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27912);
var inst_27940 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27939);
var inst_27941 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27940)].join('');
var inst_27942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27941);
var state_27952__$1 = (function (){var statearr_27965 = state_27952;
(statearr_27965[(10)] = inst_27938);

return statearr_27965;
})();
var statearr_27966_27991 = state_27952__$1;
(statearr_27966_27991[(2)] = inst_27942);

(statearr_27966_27991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (5))){
var inst_27905 = (state_27952[(7)]);
var inst_27907 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27908 = (new cljs.core.PersistentArrayMap(null,2,inst_27907,null));
var inst_27909 = (new cljs.core.PersistentHashSet(null,inst_27908,null));
var inst_27910 = figwheel.client.focus_msgs.call(null,inst_27909,inst_27905);
var inst_27911 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27910);
var inst_27912 = cljs.core.first.call(null,inst_27910);
var inst_27913 = figwheel.client.autoload_QMARK_.call(null);
var state_27952__$1 = (function (){var statearr_27967 = state_27952;
(statearr_27967[(9)] = inst_27911);

(statearr_27967[(8)] = inst_27912);

return statearr_27967;
})();
if(cljs.core.truth_(inst_27913)){
var statearr_27968_27992 = state_27952__$1;
(statearr_27968_27992[(1)] = (8));

} else {
var statearr_27969_27993 = state_27952__$1;
(statearr_27969_27993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (14))){
var inst_27923 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27970_27994 = state_27952__$1;
(statearr_27970_27994[(2)] = inst_27923);

(statearr_27970_27994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (16))){
var state_27952__$1 = state_27952;
var statearr_27971_27995 = state_27952__$1;
(statearr_27971_27995[(2)] = null);

(statearr_27971_27995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (10))){
var inst_27944 = (state_27952[(2)]);
var state_27952__$1 = (function (){var statearr_27972 = state_27952;
(statearr_27972[(11)] = inst_27944);

return statearr_27972;
})();
var statearr_27973_27996 = state_27952__$1;
(statearr_27973_27996[(2)] = null);

(statearr_27973_27996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (8))){
var inst_27911 = (state_27952[(9)]);
var inst_27915 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27911,opts);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27915)){
var statearr_27974_27997 = state_27952__$1;
(statearr_27974_27997[(1)] = (11));

} else {
var statearr_27975_27998 = state_27952__$1;
(statearr_27975_27998[(1)] = (12));

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
});})(c__22559__auto___27980,ch))
;
return ((function (switch__22464__auto__,c__22559__auto___27980,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_27976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27976[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__);

(statearr_27976[(1)] = (1));

return statearr_27976;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1 = (function (state_27952){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e27977){if((e27977 instanceof Object)){
var ex__22468__auto__ = e27977;
var statearr_27978_27999 = state_27952;
(statearr_27978_27999[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28000 = state_27952;
state_27952 = G__28000;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___27980,ch))
})();
var state__22561__auto__ = (function (){var statearr_27979 = f__22560__auto__.call(null);
(statearr_27979[(6)] = c__22559__auto___27980);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___27980,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28001_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28001_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28007 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28007){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28003 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28004 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28005 = true;
var _STAR_print_fn_STAR__temp_val__28006 = ((function (_STAR_print_newline_STAR__orig_val__28003,_STAR_print_fn_STAR__orig_val__28004,_STAR_print_newline_STAR__temp_val__28005,sb,base_path_28007){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28003,_STAR_print_fn_STAR__orig_val__28004,_STAR_print_newline_STAR__temp_val__28005,sb,base_path_28007))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28005;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28006;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28004;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28003;
}}catch (e28002){if((e28002 instanceof Error)){
var e = e28002;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28007], null));
} else {
var e = e28002;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28007))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28008){
var map__28009 = p__28008;
var map__28009__$1 = (((((!((map__28009 == null))))?(((((map__28009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28009):map__28009);
var opts = map__28009__$1;
var build_id = cljs.core.get.call(null,map__28009__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28009,map__28009__$1,opts,build_id){
return (function (p__28011){
var vec__28012 = p__28011;
var seq__28013 = cljs.core.seq.call(null,vec__28012);
var first__28014 = cljs.core.first.call(null,seq__28013);
var seq__28013__$1 = cljs.core.next.call(null,seq__28013);
var map__28015 = first__28014;
var map__28015__$1 = (((((!((map__28015 == null))))?(((((map__28015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28015):map__28015);
var msg = map__28015__$1;
var msg_name = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28013__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28012,seq__28013,first__28014,seq__28013__$1,map__28015,map__28015__$1,msg,msg_name,_,map__28009,map__28009__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28012,seq__28013,first__28014,seq__28013__$1,map__28015,map__28015__$1,msg,msg_name,_,map__28009,map__28009__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28009,map__28009__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28017){
var vec__28018 = p__28017;
var seq__28019 = cljs.core.seq.call(null,vec__28018);
var first__28020 = cljs.core.first.call(null,seq__28019);
var seq__28019__$1 = cljs.core.next.call(null,seq__28019);
var map__28021 = first__28020;
var map__28021__$1 = (((((!((map__28021 == null))))?(((((map__28021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);
var msg = map__28021__$1;
var msg_name = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28019__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28023){
var map__28024 = p__28023;
var map__28024__$1 = (((((!((map__28024 == null))))?(((((map__28024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);
var on_compile_warning = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28024,map__28024__$1,on_compile_warning,on_compile_fail){
return (function (p__28026){
var vec__28027 = p__28026;
var seq__28028 = cljs.core.seq.call(null,vec__28027);
var first__28029 = cljs.core.first.call(null,seq__28028);
var seq__28028__$1 = cljs.core.next.call(null,seq__28028);
var map__28030 = first__28029;
var map__28030__$1 = (((((!((map__28030 == null))))?(((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var msg = map__28030__$1;
var msg_name = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28028__$1;
var pred__28032 = cljs.core._EQ_;
var expr__28033 = msg_name;
if(cljs.core.truth_(pred__28032.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28033))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28032.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28033))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28024,map__28024__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28042 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28042)){
var statearr_28124_28171 = state_28122__$1;
(statearr_28124_28171[(1)] = (8));

} else {
var statearr_28125_28172 = state_28122__$1;
(statearr_28125_28172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (20))){
var inst_28116 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28126_28173 = state_28122__$1;
(statearr_28126_28173[(2)] = inst_28116);

(statearr_28126_28173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (27))){
var inst_28112 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28127_28174 = state_28122__$1;
(statearr_28127_28174[(2)] = inst_28112);

(statearr_28127_28174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var inst_28035 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28035)){
var statearr_28128_28175 = state_28122__$1;
(statearr_28128_28175[(1)] = (2));

} else {
var statearr_28129_28176 = state_28122__$1;
(statearr_28129_28176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (24))){
var inst_28114 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28130_28177 = state_28122__$1;
(statearr_28130_28177[(2)] = inst_28114);

(statearr_28130_28177[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var inst_28120 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (15))){
var inst_28118 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28131_28178 = state_28122__$1;
(statearr_28131_28178[(2)] = inst_28118);

(statearr_28131_28178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (21))){
var inst_28071 = (state_28122[(2)]);
var inst_28072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28073 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28072);
var state_28122__$1 = (function (){var statearr_28132 = state_28122;
(statearr_28132[(7)] = inst_28071);

return statearr_28132;
})();
var statearr_28133_28179 = state_28122__$1;
(statearr_28133_28179[(2)] = inst_28073);

(statearr_28133_28179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (31))){
var inst_28101 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28101){
var statearr_28134_28180 = state_28122__$1;
(statearr_28134_28180[(1)] = (34));

} else {
var statearr_28135_28181 = state_28122__$1;
(statearr_28135_28181[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (32))){
var inst_28110 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28136_28182 = state_28122__$1;
(statearr_28136_28182[(2)] = inst_28110);

(statearr_28136_28182[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (33))){
var inst_28097 = (state_28122[(2)]);
var inst_28098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28099 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28098);
var state_28122__$1 = (function (){var statearr_28137 = state_28122;
(statearr_28137[(8)] = inst_28097);

return statearr_28137;
})();
var statearr_28138_28183 = state_28122__$1;
(statearr_28138_28183[(2)] = inst_28099);

(statearr_28138_28183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (13))){
var inst_28056 = figwheel.client.heads_up.clear.call(null);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(16),inst_28056);
} else {
if((state_val_28123 === (22))){
var inst_28077 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28078 = figwheel.client.heads_up.append_warning_message.call(null,inst_28077);
var state_28122__$1 = state_28122;
var statearr_28139_28184 = state_28122__$1;
(statearr_28139_28184[(2)] = inst_28078);

(statearr_28139_28184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (36))){
var inst_28108 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28140_28185 = state_28122__$1;
(statearr_28140_28185[(2)] = inst_28108);

(statearr_28140_28185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (29))){
var inst_28088 = (state_28122[(2)]);
var inst_28089 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28090 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28089);
var state_28122__$1 = (function (){var statearr_28141 = state_28122;
(statearr_28141[(9)] = inst_28088);

return statearr_28141;
})();
var statearr_28142_28186 = state_28122__$1;
(statearr_28142_28186[(2)] = inst_28090);

(statearr_28142_28186[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var inst_28037 = (state_28122[(10)]);
var state_28122__$1 = state_28122;
var statearr_28143_28187 = state_28122__$1;
(statearr_28143_28187[(2)] = inst_28037);

(statearr_28143_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (28))){
var inst_28084 = (state_28122[(2)]);
var inst_28085 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28086 = figwheel.client.heads_up.display_warning.call(null,inst_28085);
var state_28122__$1 = (function (){var statearr_28144 = state_28122;
(statearr_28144[(11)] = inst_28084);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(29),inst_28086);
} else {
if((state_val_28123 === (25))){
var inst_28082 = figwheel.client.heads_up.clear.call(null);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(28),inst_28082);
} else {
if((state_val_28123 === (34))){
var inst_28103 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(37),inst_28103);
} else {
if((state_val_28123 === (17))){
var inst_28062 = (state_28122[(2)]);
var inst_28063 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28064 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28063);
var state_28122__$1 = (function (){var statearr_28145 = state_28122;
(statearr_28145[(12)] = inst_28062);

return statearr_28145;
})();
var statearr_28146_28188 = state_28122__$1;
(statearr_28146_28188[(2)] = inst_28064);

(statearr_28146_28188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28054 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28054){
var statearr_28147_28189 = state_28122__$1;
(statearr_28147_28189[(1)] = (13));

} else {
var statearr_28148_28190 = state_28122__$1;
(statearr_28148_28190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (12))){
var inst_28050 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28149_28191 = state_28122__$1;
(statearr_28149_28191[(2)] = inst_28050);

(statearr_28149_28191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (2))){
var inst_28037 = (state_28122[(10)]);
var inst_28037__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28122__$1 = (function (){var statearr_28150 = state_28122;
(statearr_28150[(10)] = inst_28037__$1);

return statearr_28150;
})();
if(cljs.core.truth_(inst_28037__$1)){
var statearr_28151_28192 = state_28122__$1;
(statearr_28151_28192[(1)] = (5));

} else {
var statearr_28152_28193 = state_28122__$1;
(statearr_28152_28193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (23))){
var inst_28080 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28080){
var statearr_28153_28194 = state_28122__$1;
(statearr_28153_28194[(1)] = (25));

} else {
var statearr_28154_28195 = state_28122__$1;
(statearr_28154_28195[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (35))){
var state_28122__$1 = state_28122;
var statearr_28155_28196 = state_28122__$1;
(statearr_28155_28196[(2)] = null);

(statearr_28155_28196[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (19))){
var inst_28075 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28075){
var statearr_28156_28197 = state_28122__$1;
(statearr_28156_28197[(1)] = (22));

} else {
var statearr_28157_28198 = state_28122__$1;
(statearr_28157_28198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (11))){
var inst_28046 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28158_28199 = state_28122__$1;
(statearr_28158_28199[(2)] = inst_28046);

(statearr_28158_28199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (9))){
var inst_28048 = figwheel.client.heads_up.clear.call(null);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(12),inst_28048);
} else {
if((state_val_28123 === (5))){
var inst_28039 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28122__$1 = state_28122;
var statearr_28159_28200 = state_28122__$1;
(statearr_28159_28200[(2)] = inst_28039);

(statearr_28159_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (14))){
var inst_28066 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28066){
var statearr_28160_28201 = state_28122__$1;
(statearr_28160_28201[(1)] = (18));

} else {
var statearr_28161_28202 = state_28122__$1;
(statearr_28161_28202[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (26))){
var inst_28092 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28122__$1 = state_28122;
if(inst_28092){
var statearr_28162_28203 = state_28122__$1;
(statearr_28162_28203[(1)] = (30));

} else {
var statearr_28163_28204 = state_28122__$1;
(statearr_28163_28204[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (16))){
var inst_28058 = (state_28122[(2)]);
var inst_28059 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28060 = figwheel.client.heads_up.display_exception.call(null,inst_28059);
var state_28122__$1 = (function (){var statearr_28164 = state_28122;
(statearr_28164[(13)] = inst_28058);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(17),inst_28060);
} else {
if((state_val_28123 === (30))){
var inst_28094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28095 = figwheel.client.heads_up.display_warning.call(null,inst_28094);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(33),inst_28095);
} else {
if((state_val_28123 === (10))){
var inst_28052 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28165_28205 = state_28122__$1;
(statearr_28165_28205[(2)] = inst_28052);

(statearr_28165_28205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (18))){
var inst_28068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28069 = figwheel.client.heads_up.display_exception.call(null,inst_28068);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(21),inst_28069);
} else {
if((state_val_28123 === (37))){
var inst_28105 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28166_28206 = state_28122__$1;
(statearr_28166_28206[(2)] = inst_28105);

(statearr_28166_28206[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28044 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(11),inst_28044);
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
});})(c__22559__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22464__auto__,c__22559__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0 = (function (){
var statearr_28167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28167[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__);

(statearr_28167[(1)] = (1));

return statearr_28167;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1 = (function (state_28122){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28168){if((e28168 instanceof Object)){
var ex__22468__auto__ = e28168;
var statearr_28169_28207 = state_28122;
(statearr_28169_28207[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_28122;
state_28122 = G__28208;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,msg_hist,msg_names,msg))
})();
var state__22561__auto__ = (function (){var statearr_28170 = f__22560__auto__.call(null);
(statearr_28170[(6)] = c__22559__auto__);

return statearr_28170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,msg_hist,msg_names,msg))
);

return c__22559__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22559__auto___28237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___28237,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___28237,ch){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (1))){
var state_28223__$1 = state_28223;
var statearr_28225_28238 = state_28223__$1;
(statearr_28225_28238[(2)] = null);

(statearr_28225_28238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(4),ch);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (4))){
var inst_28211 = (state_28223[(7)]);
var inst_28211__$1 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28226 = state_28223;
(statearr_28226[(7)] = inst_28211__$1);

return statearr_28226;
})();
if(cljs.core.truth_(inst_28211__$1)){
var statearr_28227_28239 = state_28223__$1;
(statearr_28227_28239[(1)] = (5));

} else {
var statearr_28228_28240 = state_28223__$1;
(statearr_28228_28240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (5))){
var inst_28211 = (state_28223[(7)]);
var inst_28213 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28211);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(8),inst_28213);
} else {
if((state_val_28224 === (6))){
var state_28223__$1 = state_28223;
var statearr_28229_28241 = state_28223__$1;
(statearr_28229_28241[(2)] = null);

(statearr_28229_28241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (7))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28230_28242 = state_28223__$1;
(statearr_28230_28242[(2)] = inst_28219);

(statearr_28230_28242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (8))){
var inst_28215 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28231 = state_28223;
(statearr_28231[(8)] = inst_28215);

return statearr_28231;
})();
var statearr_28232_28243 = state_28223__$1;
(statearr_28232_28243[(2)] = null);

(statearr_28232_28243[(1)] = (2));


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
});})(c__22559__auto___28237,ch))
;
return ((function (switch__22464__auto__,c__22559__auto___28237,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28233 = [null,null,null,null,null,null,null,null,null];
(statearr_28233[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22465__auto__);

(statearr_28233[(1)] = (1));

return statearr_28233;
});
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1 = (function (state_28223){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28234){if((e28234 instanceof Object)){
var ex__22468__auto__ = e28234;
var statearr_28235_28244 = state_28223;
(statearr_28235_28244[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28245 = state_28223;
state_28223 = G__28245;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___28237,ch))
})();
var state__22561__auto__ = (function (){var statearr_28236 = f__22560__auto__.call(null);
(statearr_28236[(6)] = c__22559__auto___28237);

return statearr_28236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___28237,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_28251){
var state_val_28252 = (state_28251[(1)]);
if((state_val_28252 === (1))){
var inst_28246 = cljs.core.async.timeout.call(null,(3000));
var state_28251__$1 = state_28251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28251__$1,(2),inst_28246);
} else {
if((state_val_28252 === (2))){
var inst_28248 = (state_28251[(2)]);
var inst_28249 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28251__$1 = (function (){var statearr_28253 = state_28251;
(statearr_28253[(7)] = inst_28248);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28251__$1,inst_28249);
} else {
return null;
}
}
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28254 = [null,null,null,null,null,null,null,null];
(statearr_28254[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__);

(statearr_28254[(1)] = (1));

return statearr_28254;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1 = (function (state_28251){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28255){if((e28255 instanceof Object)){
var ex__22468__auto__ = e28255;
var statearr_28256_28258 = state_28251;
(statearr_28256_28258[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28259 = state_28251;
state_28251 = G__28259;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__ = function(state_28251){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1.call(this,state_28251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_28257 = f__22560__auto__.call(null);
(statearr_28257[(6)] = c__22559__auto__);

return statearr_28257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (1))){
var inst_28260 = cljs.core.async.timeout.call(null,(2000));
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28266__$1,(2),inst_28260);
} else {
if((state_val_28267 === (2))){
var inst_28262 = (state_28266[(2)]);
var inst_28263 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28264 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28263);
var state_28266__$1 = (function (){var statearr_28268 = state_28266;
(statearr_28268[(7)] = inst_28262);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
return null;
}
}
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28269 = [null,null,null,null,null,null,null,null];
(statearr_28269[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__);

(statearr_28269[(1)] = (1));

return statearr_28269;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1 = (function (state_28266){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28270){if((e28270 instanceof Object)){
var ex__22468__auto__ = e28270;
var statearr_28271_28273 = state_28266;
(statearr_28271_28273[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28274 = state_28266;
state_28266 = G__28274;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__))
})();
var state__22561__auto__ = (function (){var statearr_28272 = f__22560__auto__.call(null);
(statearr_28272[(6)] = c__22559__auto__);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
);

return c__22559__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28275){
var map__28276 = p__28275;
var map__28276__$1 = (((((!((map__28276 == null))))?(((((map__28276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28276):map__28276);
var file = cljs.core.get.call(null,map__28276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28276__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28278 = "";
var G__28278__$1 = (cljs.core.truth_(file)?[G__28278,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28278);
var G__28278__$2 = (cljs.core.truth_(line)?[G__28278__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28278__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28278__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28278__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28279){
var map__28280 = p__28279;
var map__28280__$1 = (((((!((map__28280 == null))))?(((((map__28280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28280):map__28280);
var ed = map__28280__$1;
var exception_data = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28283 = (function (){var G__28282 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28282)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28282;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28283);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28284){
var map__28285 = p__28284;
var map__28285__$1 = (((((!((map__28285 == null))))?(((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28285):map__28285);
var w = map__28285__$1;
var message = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\development\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\development\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28287 = cljs.core.seq.call(null,plugins);
var chunk__28288 = null;
var count__28289 = (0);
var i__28290 = (0);
while(true){
if((i__28290 < count__28289)){
var vec__28297 = cljs.core._nth.call(null,chunk__28288,i__28290);
var k = cljs.core.nth.call(null,vec__28297,(0),null);
var plugin = cljs.core.nth.call(null,vec__28297,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28303 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28287,chunk__28288,count__28289,i__28290,pl_28303,vec__28297,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28303.call(null,msg_hist);
});})(seq__28287,chunk__28288,count__28289,i__28290,pl_28303,vec__28297,k,plugin))
);
} else {
}


var G__28304 = seq__28287;
var G__28305 = chunk__28288;
var G__28306 = count__28289;
var G__28307 = (i__28290 + (1));
seq__28287 = G__28304;
chunk__28288 = G__28305;
count__28289 = G__28306;
i__28290 = G__28307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28287);
if(temp__5735__auto__){
var seq__28287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28287__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28287__$1);
var G__28308 = cljs.core.chunk_rest.call(null,seq__28287__$1);
var G__28309 = c__4550__auto__;
var G__28310 = cljs.core.count.call(null,c__4550__auto__);
var G__28311 = (0);
seq__28287 = G__28308;
chunk__28288 = G__28309;
count__28289 = G__28310;
i__28290 = G__28311;
continue;
} else {
var vec__28300 = cljs.core.first.call(null,seq__28287__$1);
var k = cljs.core.nth.call(null,vec__28300,(0),null);
var plugin = cljs.core.nth.call(null,vec__28300,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28312 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28287,chunk__28288,count__28289,i__28290,pl_28312,vec__28300,k,plugin,seq__28287__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28312.call(null,msg_hist);
});})(seq__28287,chunk__28288,count__28289,i__28290,pl_28312,vec__28300,k,plugin,seq__28287__$1,temp__5735__auto__))
);
} else {
}


var G__28313 = cljs.core.next.call(null,seq__28287__$1);
var G__28314 = null;
var G__28315 = (0);
var G__28316 = (0);
seq__28287 = G__28313;
chunk__28288 = G__28314;
count__28289 = G__28315;
i__28290 = G__28316;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28318 = arguments.length;
switch (G__28318) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28319_28324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28320_28325 = null;
var count__28321_28326 = (0);
var i__28322_28327 = (0);
while(true){
if((i__28322_28327 < count__28321_28326)){
var msg_28328 = cljs.core._nth.call(null,chunk__28320_28325,i__28322_28327);
figwheel.client.socket.handle_incoming_message.call(null,msg_28328);


var G__28329 = seq__28319_28324;
var G__28330 = chunk__28320_28325;
var G__28331 = count__28321_28326;
var G__28332 = (i__28322_28327 + (1));
seq__28319_28324 = G__28329;
chunk__28320_28325 = G__28330;
count__28321_28326 = G__28331;
i__28322_28327 = G__28332;
continue;
} else {
var temp__5735__auto___28333 = cljs.core.seq.call(null,seq__28319_28324);
if(temp__5735__auto___28333){
var seq__28319_28334__$1 = temp__5735__auto___28333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28319_28334__$1)){
var c__4550__auto___28335 = cljs.core.chunk_first.call(null,seq__28319_28334__$1);
var G__28336 = cljs.core.chunk_rest.call(null,seq__28319_28334__$1);
var G__28337 = c__4550__auto___28335;
var G__28338 = cljs.core.count.call(null,c__4550__auto___28335);
var G__28339 = (0);
seq__28319_28324 = G__28336;
chunk__28320_28325 = G__28337;
count__28321_28326 = G__28338;
i__28322_28327 = G__28339;
continue;
} else {
var msg_28340 = cljs.core.first.call(null,seq__28319_28334__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28340);


var G__28341 = cljs.core.next.call(null,seq__28319_28334__$1);
var G__28342 = null;
var G__28343 = (0);
var G__28344 = (0);
seq__28319_28324 = G__28341;
chunk__28320_28325 = G__28342;
count__28321_28326 = G__28343;
i__28322_28327 = G__28344;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28349 = arguments.length;
var i__4731__auto___28350 = (0);
while(true){
if((i__4731__auto___28350 < len__4730__auto___28349)){
args__4736__auto__.push((arguments[i__4731__auto___28350]));

var G__28351 = (i__4731__auto___28350 + (1));
i__4731__auto___28350 = G__28351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28346){
var map__28347 = p__28346;
var map__28347__$1 = (((((!((map__28347 == null))))?(((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var opts = map__28347__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28345){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28345));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28352){if((e28352 instanceof Error)){
var e = e28352;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28352;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28353){
var map__28354 = p__28353;
var map__28354__$1 = (((((!((map__28354 == null))))?(((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);
var msg_name = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1628369218222
