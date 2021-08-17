// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27540){
var map__27541 = p__27540;
var map__27541__$1 = (((((!((map__27541 == null))))?(((((map__27541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27541):map__27541);
var m = map__27541__$1;
var n = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27543_27575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27544_27576 = null;
var count__27545_27577 = (0);
var i__27546_27578 = (0);
while(true){
if((i__27546_27578 < count__27545_27577)){
var f_27579 = cljs.core._nth.call(null,chunk__27544_27576,i__27546_27578);
cljs.core.println.call(null,"  ",f_27579);


var G__27580 = seq__27543_27575;
var G__27581 = chunk__27544_27576;
var G__27582 = count__27545_27577;
var G__27583 = (i__27546_27578 + (1));
seq__27543_27575 = G__27580;
chunk__27544_27576 = G__27581;
count__27545_27577 = G__27582;
i__27546_27578 = G__27583;
continue;
} else {
var temp__5735__auto___27584 = cljs.core.seq.call(null,seq__27543_27575);
if(temp__5735__auto___27584){
var seq__27543_27585__$1 = temp__5735__auto___27584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27543_27585__$1)){
var c__4550__auto___27586 = cljs.core.chunk_first.call(null,seq__27543_27585__$1);
var G__27587 = cljs.core.chunk_rest.call(null,seq__27543_27585__$1);
var G__27588 = c__4550__auto___27586;
var G__27589 = cljs.core.count.call(null,c__4550__auto___27586);
var G__27590 = (0);
seq__27543_27575 = G__27587;
chunk__27544_27576 = G__27588;
count__27545_27577 = G__27589;
i__27546_27578 = G__27590;
continue;
} else {
var f_27591 = cljs.core.first.call(null,seq__27543_27585__$1);
cljs.core.println.call(null,"  ",f_27591);


var G__27592 = cljs.core.next.call(null,seq__27543_27585__$1);
var G__27593 = null;
var G__27594 = (0);
var G__27595 = (0);
seq__27543_27575 = G__27592;
chunk__27544_27576 = G__27593;
count__27545_27577 = G__27594;
i__27546_27578 = G__27595;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27596 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27596);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27596)))?cljs.core.second.call(null,arglists_27596):arglists_27596));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27547_27597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27548_27598 = null;
var count__27549_27599 = (0);
var i__27550_27600 = (0);
while(true){
if((i__27550_27600 < count__27549_27599)){
var vec__27561_27601 = cljs.core._nth.call(null,chunk__27548_27598,i__27550_27600);
var name_27602 = cljs.core.nth.call(null,vec__27561_27601,(0),null);
var map__27564_27603 = cljs.core.nth.call(null,vec__27561_27601,(1),null);
var map__27564_27604__$1 = (((((!((map__27564_27603 == null))))?(((((map__27564_27603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27564_27603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564_27603):map__27564_27603);
var doc_27605 = cljs.core.get.call(null,map__27564_27604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27606 = cljs.core.get.call(null,map__27564_27604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27602);

cljs.core.println.call(null," ",arglists_27606);

if(cljs.core.truth_(doc_27605)){
cljs.core.println.call(null," ",doc_27605);
} else {
}


var G__27607 = seq__27547_27597;
var G__27608 = chunk__27548_27598;
var G__27609 = count__27549_27599;
var G__27610 = (i__27550_27600 + (1));
seq__27547_27597 = G__27607;
chunk__27548_27598 = G__27608;
count__27549_27599 = G__27609;
i__27550_27600 = G__27610;
continue;
} else {
var temp__5735__auto___27611 = cljs.core.seq.call(null,seq__27547_27597);
if(temp__5735__auto___27611){
var seq__27547_27612__$1 = temp__5735__auto___27611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27547_27612__$1)){
var c__4550__auto___27613 = cljs.core.chunk_first.call(null,seq__27547_27612__$1);
var G__27614 = cljs.core.chunk_rest.call(null,seq__27547_27612__$1);
var G__27615 = c__4550__auto___27613;
var G__27616 = cljs.core.count.call(null,c__4550__auto___27613);
var G__27617 = (0);
seq__27547_27597 = G__27614;
chunk__27548_27598 = G__27615;
count__27549_27599 = G__27616;
i__27550_27600 = G__27617;
continue;
} else {
var vec__27566_27618 = cljs.core.first.call(null,seq__27547_27612__$1);
var name_27619 = cljs.core.nth.call(null,vec__27566_27618,(0),null);
var map__27569_27620 = cljs.core.nth.call(null,vec__27566_27618,(1),null);
var map__27569_27621__$1 = (((((!((map__27569_27620 == null))))?(((((map__27569_27620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27569_27620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27569_27620):map__27569_27620);
var doc_27622 = cljs.core.get.call(null,map__27569_27621__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27623 = cljs.core.get.call(null,map__27569_27621__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27619);

cljs.core.println.call(null," ",arglists_27623);

if(cljs.core.truth_(doc_27622)){
cljs.core.println.call(null," ",doc_27622);
} else {
}


var G__27624 = cljs.core.next.call(null,seq__27547_27612__$1);
var G__27625 = null;
var G__27626 = (0);
var G__27627 = (0);
seq__27547_27597 = G__27624;
chunk__27548_27598 = G__27625;
count__27549_27599 = G__27626;
i__27550_27600 = G__27627;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__27571 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27572 = null;
var count__27573 = (0);
var i__27574 = (0);
while(true){
if((i__27574 < count__27573)){
var role = cljs.core._nth.call(null,chunk__27572,i__27574);
var temp__5735__auto___27628__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27628__$1)){
var spec_27629 = temp__5735__auto___27628__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27629));
} else {
}


var G__27630 = seq__27571;
var G__27631 = chunk__27572;
var G__27632 = count__27573;
var G__27633 = (i__27574 + (1));
seq__27571 = G__27630;
chunk__27572 = G__27631;
count__27573 = G__27632;
i__27574 = G__27633;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__27571);
if(temp__5735__auto____$1){
var seq__27571__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27571__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27571__$1);
var G__27634 = cljs.core.chunk_rest.call(null,seq__27571__$1);
var G__27635 = c__4550__auto__;
var G__27636 = cljs.core.count.call(null,c__4550__auto__);
var G__27637 = (0);
seq__27571 = G__27634;
chunk__27572 = G__27635;
count__27573 = G__27636;
i__27574 = G__27637;
continue;
} else {
var role = cljs.core.first.call(null,seq__27571__$1);
var temp__5735__auto___27638__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27638__$2)){
var spec_27639 = temp__5735__auto___27638__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27639));
} else {
}


var G__27640 = cljs.core.next.call(null,seq__27571__$1);
var G__27641 = null;
var G__27642 = (0);
var G__27643 = (0);
seq__27571 = G__27640;
chunk__27572 = G__27641;
count__27573 = G__27642;
i__27574 = G__27643;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27644 = cljs.core.conj.call(null,via,t);
var G__27645 = cljs.core.ex_cause.call(null,t);
via = G__27644;
t = G__27645;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27648 = datafied_throwable;
var map__27648__$1 = (((((!((map__27648 == null))))?(((((map__27648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27648):map__27648);
var via = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27648__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27649 = cljs.core.last.call(null,via);
var map__27649__$1 = (((((!((map__27649 == null))))?(((((map__27649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27649):map__27649);
var type = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27649__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27650 = data;
var map__27650__$1 = (((((!((map__27650 == null))))?(((((map__27650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27650):map__27650);
var problems = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27650__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27651 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27651__$1 = (((((!((map__27651 == null))))?(((((map__27651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27651):map__27651);
var top_data = map__27651__$1;
var source = cljs.core.get.call(null,map__27651__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27656 = phase;
var G__27656__$1 = (((G__27656 instanceof cljs.core.Keyword))?G__27656.fqn:null);
switch (G__27656__$1) {
case "read-source":
var map__27657 = data;
var map__27657__$1 = (((((!((map__27657 == null))))?(((((map__27657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27657):map__27657);
var line = cljs.core.get.call(null,map__27657__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27657__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27659 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27659__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27659,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27659);
var G__27659__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27659__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27659__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27659__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27659__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27660 = top_data;
var G__27660__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27660,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27660);
var G__27660__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27660__$1);
var G__27660__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27660__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27660__$2);
var G__27660__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27660__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27660__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27660__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27660__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27661 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27661,(0),null);
var method = cljs.core.nth.call(null,vec__27661,(1),null);
var file = cljs.core.nth.call(null,vec__27661,(2),null);
var line = cljs.core.nth.call(null,vec__27661,(3),null);
var G__27664 = top_data;
var G__27664__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27664,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27664);
var G__27664__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27664__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27664__$1);
var G__27664__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27664__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27664__$2);
var G__27664__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27664__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27664__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27664__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27664__$4;
}

break;
case "execution":
var vec__27665 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27665,(0),null);
var method = cljs.core.nth.call(null,vec__27665,(1),null);
var file = cljs.core.nth.call(null,vec__27665,(2),null);
var line = cljs.core.nth.call(null,vec__27665,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27665,source__$1,method,file,line,G__27656,G__27656__$1,map__27648,map__27648__$1,via,trace,phase,map__27649,map__27649__$1,type,message,data,map__27650,map__27650__$1,problems,fn,caller,map__27651,map__27651__$1,top_data,source){
return (function (p1__27647_SHARP_){
var or__4131__auto__ = (p1__27647_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27647_SHARP_);
}
});})(vec__27665,source__$1,method,file,line,G__27656,G__27656__$1,map__27648,map__27648__$1,via,trace,phase,map__27649,map__27649__$1,type,message,data,map__27650,map__27650__$1,problems,fn,caller,map__27651,map__27651__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27668 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27668__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27668,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27668);
var G__27668__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27668__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27668__$1);
var G__27668__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27668__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27668__$2);
var G__27668__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27668__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27668__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27668__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27668__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27656__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27672){
var map__27673 = p__27672;
var map__27673__$1 = (((((!((map__27673 == null))))?(((((map__27673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27673):map__27673);
var triage_data = map__27673__$1;
var phase = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27673__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27675 = phase;
var G__27675__$1 = (((G__27675 instanceof cljs.core.Keyword))?G__27675.fqn:null);
switch (G__27675__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27676_27685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27677_27686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27678_27687 = true;
var _STAR_print_fn_STAR__temp_val__27679_27688 = ((function (_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27678_27687;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27679_27688;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,_STAR_print_fn_STAR__temp_val__27679_27688,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,_STAR_print_fn_STAR__temp_val__27679_27688,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27670_SHARP_){
return cljs.core.dissoc.call(null,p1__27670_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,_STAR_print_fn_STAR__temp_val__27679_27688,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27676_27685,_STAR_print_fn_STAR__orig_val__27677_27686,_STAR_print_newline_STAR__temp_val__27678_27687,_STAR_print_fn_STAR__temp_val__27679_27688,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27677_27686;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27676_27685;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27680_27689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27681_27690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27682_27691 = true;
var _STAR_print_fn_STAR__temp_val__27683_27692 = ((function (_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27682_27691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27683_27692;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,_STAR_print_fn_STAR__temp_val__27683_27692,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,_STAR_print_fn_STAR__temp_val__27683_27692,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27671_SHARP_){
return cljs.core.dissoc.call(null,p1__27671_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,_STAR_print_fn_STAR__temp_val__27683_27692,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27680_27689,_STAR_print_fn_STAR__orig_val__27681_27690,_STAR_print_newline_STAR__temp_val__27682_27691,_STAR_print_fn_STAR__temp_val__27683_27692,sb__4661__auto__,G__27675,G__27675__$1,loc,class_name,simple_class,cause_type,format,map__27673,map__27673__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27681_27690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27680_27689;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27675__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1628369217962
