// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22619 = arguments.length;
switch (G__22619) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22620 = (function (f,blockable,meta22621){
this.f = f;
this.blockable = blockable;
this.meta22621 = meta22621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22622,meta22621__$1){
var self__ = this;
var _22622__$1 = this;
return (new cljs.core.async.t_cljs$core$async22620(self__.f,self__.blockable,meta22621__$1));
});

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22622){
var self__ = this;
var _22622__$1 = this;
return self__.meta22621;
});

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22621","meta22621",1770019718,null)], null);
});

cljs.core.async.t_cljs$core$async22620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22620";

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22620");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22620.
 */
cljs.core.async.__GT_t_cljs$core$async22620 = (function cljs$core$async$__GT_t_cljs$core$async22620(f__$1,blockable__$1,meta22621){
return (new cljs.core.async.t_cljs$core$async22620(f__$1,blockable__$1,meta22621));
});

}

return (new cljs.core.async.t_cljs$core$async22620(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22626 = arguments.length;
switch (G__22626) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22629 = arguments.length;
switch (G__22629) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22632 = arguments.length;
switch (G__22632) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22634 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22634);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22634,ret){
return (function (){
return fn1.call(null,val_22634);
});})(val_22634,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22636 = arguments.length;
switch (G__22636) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___22638 = n;
var x_22639 = (0);
while(true){
if((x_22639 < n__4607__auto___22638)){
(a[x_22639] = (0));

var G__22640 = (x_22639 + (1));
x_22639 = G__22640;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22641 = (i + (1));
i = G__22641;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22642 = (function (flag,meta22643){
this.flag = flag;
this.meta22643 = meta22643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22644,meta22643__$1){
var self__ = this;
var _22644__$1 = this;
return (new cljs.core.async.t_cljs$core$async22642(self__.flag,meta22643__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22644){
var self__ = this;
var _22644__$1 = this;
return self__.meta22643;
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22643","meta22643",1582062864,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22642";

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22642");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22642.
 */
cljs.core.async.__GT_t_cljs$core$async22642 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22642(flag__$1,meta22643){
return (new cljs.core.async.t_cljs$core$async22642(flag__$1,meta22643));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22642(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22645 = (function (flag,cb,meta22646){
this.flag = flag;
this.cb = cb;
this.meta22646 = meta22646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22647,meta22646__$1){
var self__ = this;
var _22647__$1 = this;
return (new cljs.core.async.t_cljs$core$async22645(self__.flag,self__.cb,meta22646__$1));
});

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22647){
var self__ = this;
var _22647__$1 = this;
return self__.meta22646;
});

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22646","meta22646",-1652975686,null)], null);
});

cljs.core.async.t_cljs$core$async22645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22645";

cljs.core.async.t_cljs$core$async22645.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22645.
 */
cljs.core.async.__GT_t_cljs$core$async22645 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22645(flag__$1,cb__$1,meta22646){
return (new cljs.core.async.t_cljs$core$async22645(flag__$1,cb__$1,meta22646));
});

}

return (new cljs.core.async.t_cljs$core$async22645(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22648_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22648_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22649_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22649_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22650 = (i + (1));
i = G__22650;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22656 = arguments.length;
var i__4731__auto___22657 = (0);
while(true){
if((i__4731__auto___22657 < len__4730__auto___22656)){
args__4736__auto__.push((arguments[i__4731__auto___22657]));

var G__22658 = (i__4731__auto___22657 + (1));
i__4731__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22653){
var map__22654 = p__22653;
var map__22654__$1 = (((((!((map__22654 == null))))?(((((map__22654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22654):map__22654);
var opts = map__22654__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22651){
var G__22652 = cljs.core.first.call(null,seq22651);
var seq22651__$1 = cljs.core.next.call(null,seq22651);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22652,seq22651__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22660 = arguments.length;
switch (G__22660) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22559__auto___22706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___22706){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___22706){
return (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22680 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22686_22707 = state_22684__$1;
(statearr_22686_22707[(2)] = inst_22680);

(statearr_22686_22707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var state_22684__$1 = state_22684;
var statearr_22687_22708 = state_22684__$1;
(statearr_22687_22708[(2)] = null);

(statearr_22687_22708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22663 = (state_22684[(7)]);
var inst_22663__$1 = (state_22684[(2)]);
var inst_22664 = (inst_22663__$1 == null);
var state_22684__$1 = (function (){var statearr_22688 = state_22684;
(statearr_22688[(7)] = inst_22663__$1);

return statearr_22688;
})();
if(cljs.core.truth_(inst_22664)){
var statearr_22689_22709 = state_22684__$1;
(statearr_22689_22709[(1)] = (5));

} else {
var statearr_22690_22710 = state_22684__$1;
(statearr_22690_22710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (13))){
var state_22684__$1 = state_22684;
var statearr_22691_22711 = state_22684__$1;
(statearr_22691_22711[(2)] = null);

(statearr_22691_22711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var inst_22663 = (state_22684[(7)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(11),to,inst_22663);
} else {
if((state_val_22685 === (3))){
var inst_22682 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (12))){
var state_22684__$1 = state_22684;
var statearr_22692_22712 = state_22684__$1;
(statearr_22692_22712[(2)] = null);

(statearr_22692_22712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (2))){
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22684__$1,(4),from);
} else {
if((state_val_22685 === (11))){
var inst_22673 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22673)){
var statearr_22693_22713 = state_22684__$1;
(statearr_22693_22713[(1)] = (12));

} else {
var statearr_22694_22714 = state_22684__$1;
(statearr_22694_22714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (9))){
var state_22684__$1 = state_22684;
var statearr_22695_22715 = state_22684__$1;
(statearr_22695_22715[(2)] = null);

(statearr_22695_22715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (5))){
var state_22684__$1 = state_22684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22696_22716 = state_22684__$1;
(statearr_22696_22716[(1)] = (8));

} else {
var statearr_22697_22717 = state_22684__$1;
(statearr_22697_22717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (14))){
var inst_22678 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22698_22718 = state_22684__$1;
(statearr_22698_22718[(2)] = inst_22678);

(statearr_22698_22718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (10))){
var inst_22670 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22699_22719 = state_22684__$1;
(statearr_22699_22719[(2)] = inst_22670);

(statearr_22699_22719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22667 = cljs.core.async.close_BANG_.call(null,to);
var state_22684__$1 = state_22684;
var statearr_22700_22720 = state_22684__$1;
(statearr_22700_22720[(2)] = inst_22667);

(statearr_22700_22720[(1)] = (10));


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
});})(c__22559__auto___22706))
;
return ((function (switch__22464__auto__,c__22559__auto___22706){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_22701 = [null,null,null,null,null,null,null,null];
(statearr_22701[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_22701[(1)] = (1));

return statearr_22701;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_22684){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22702){if((e22702 instanceof Object)){
var ex__22468__auto__ = e22702;
var statearr_22703_22721 = state_22684;
(statearr_22703_22721[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22722 = state_22684;
state_22684 = G__22722;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___22706))
})();
var state__22561__auto__ = (function (){var statearr_22704 = f__22560__auto__.call(null);
(statearr_22704[(6)] = c__22559__auto___22706);

return statearr_22704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___22706))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22723){
var vec__22724 = p__22723;
var v = cljs.core.nth.call(null,vec__22724,(0),null);
var p = cljs.core.nth.call(null,vec__22724,(1),null);
var job = vec__22724;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22559__auto___22895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results){
return (function (state_22731){
var state_val_22732 = (state_22731[(1)]);
if((state_val_22732 === (1))){
var state_22731__$1 = state_22731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22731__$1,(2),res,v);
} else {
if((state_val_22732 === (2))){
var inst_22728 = (state_22731[(2)]);
var inst_22729 = cljs.core.async.close_BANG_.call(null,res);
var state_22731__$1 = (function (){var statearr_22733 = state_22731;
(statearr_22733[(7)] = inst_22728);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22731__$1,inst_22729);
} else {
return null;
}
}
});})(c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results))
;
return ((function (switch__22464__auto__,c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_22734 = [null,null,null,null,null,null,null,null];
(statearr_22734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__);

(statearr_22734[(1)] = (1));

return statearr_22734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1 = (function (state_22731){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22735){if((e22735 instanceof Object)){
var ex__22468__auto__ = e22735;
var statearr_22736_22896 = state_22731;
(statearr_22736_22896[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22897 = state_22731;
state_22731 = G__22897;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = function(state_22731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1.call(this,state_22731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results))
})();
var state__22561__auto__ = (function (){var statearr_22737 = f__22560__auto__.call(null);
(statearr_22737[(6)] = c__22559__auto___22895);

return statearr_22737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___22895,res,vec__22724,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22738){
var vec__22739 = p__22738;
var v = cljs.core.nth.call(null,vec__22739,(0),null);
var p = cljs.core.nth.call(null,vec__22739,(1),null);
var job = vec__22739;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___22898 = n;
var __22899 = (0);
while(true){
if((__22899 < n__4607__auto___22898)){
var G__22742_22900 = type;
var G__22742_22901__$1 = (((G__22742_22900 instanceof cljs.core.Keyword))?G__22742_22900.fqn:null);
switch (G__22742_22901__$1) {
case "compute":
var c__22559__auto___22903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22899,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (__22899,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function (state_22755){
var state_val_22756 = (state_22755[(1)]);
if((state_val_22756 === (1))){
var state_22755__$1 = state_22755;
var statearr_22757_22904 = state_22755__$1;
(statearr_22757_22904[(2)] = null);

(statearr_22757_22904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (2))){
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22755__$1,(4),jobs);
} else {
if((state_val_22756 === (3))){
var inst_22753 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22755__$1,inst_22753);
} else {
if((state_val_22756 === (4))){
var inst_22745 = (state_22755[(2)]);
var inst_22746 = process.call(null,inst_22745);
var state_22755__$1 = state_22755;
if(cljs.core.truth_(inst_22746)){
var statearr_22758_22905 = state_22755__$1;
(statearr_22758_22905[(1)] = (5));

} else {
var statearr_22759_22906 = state_22755__$1;
(statearr_22759_22906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (5))){
var state_22755__$1 = state_22755;
var statearr_22760_22907 = state_22755__$1;
(statearr_22760_22907[(2)] = null);

(statearr_22760_22907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (6))){
var state_22755__$1 = state_22755;
var statearr_22761_22908 = state_22755__$1;
(statearr_22761_22908[(2)] = null);

(statearr_22761_22908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (7))){
var inst_22751 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22762_22909 = state_22755__$1;
(statearr_22762_22909[(2)] = inst_22751);

(statearr_22762_22909[(1)] = (3));


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
});})(__22899,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
;
return ((function (__22899,switch__22464__auto__,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_22763 = [null,null,null,null,null,null,null];
(statearr_22763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__);

(statearr_22763[(1)] = (1));

return statearr_22763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1 = (function (state_22755){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22764){if((e22764 instanceof Object)){
var ex__22468__auto__ = e22764;
var statearr_22765_22910 = state_22755;
(statearr_22765_22910[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22911 = state_22755;
state_22755 = G__22911;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = function(state_22755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1.call(this,state_22755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__;
})()
;})(__22899,switch__22464__auto__,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
})();
var state__22561__auto__ = (function (){var statearr_22766 = f__22560__auto__.call(null);
(statearr_22766[(6)] = c__22559__auto___22903);

return statearr_22766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(__22899,c__22559__auto___22903,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
);


break;
case "async":
var c__22559__auto___22912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22899,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (__22899,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function (state_22779){
var state_val_22780 = (state_22779[(1)]);
if((state_val_22780 === (1))){
var state_22779__$1 = state_22779;
var statearr_22781_22913 = state_22779__$1;
(statearr_22781_22913[(2)] = null);

(statearr_22781_22913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (2))){
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22779__$1,(4),jobs);
} else {
if((state_val_22780 === (3))){
var inst_22777 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22779__$1,inst_22777);
} else {
if((state_val_22780 === (4))){
var inst_22769 = (state_22779[(2)]);
var inst_22770 = async.call(null,inst_22769);
var state_22779__$1 = state_22779;
if(cljs.core.truth_(inst_22770)){
var statearr_22782_22914 = state_22779__$1;
(statearr_22782_22914[(1)] = (5));

} else {
var statearr_22783_22915 = state_22779__$1;
(statearr_22783_22915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (5))){
var state_22779__$1 = state_22779;
var statearr_22784_22916 = state_22779__$1;
(statearr_22784_22916[(2)] = null);

(statearr_22784_22916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (6))){
var state_22779__$1 = state_22779;
var statearr_22785_22917 = state_22779__$1;
(statearr_22785_22917[(2)] = null);

(statearr_22785_22917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (7))){
var inst_22775 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
var statearr_22786_22918 = state_22779__$1;
(statearr_22786_22918[(2)] = inst_22775);

(statearr_22786_22918[(1)] = (3));


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
});})(__22899,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
;
return ((function (__22899,switch__22464__auto__,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_22787 = [null,null,null,null,null,null,null];
(statearr_22787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__);

(statearr_22787[(1)] = (1));

return statearr_22787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1 = (function (state_22779){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22788){if((e22788 instanceof Object)){
var ex__22468__auto__ = e22788;
var statearr_22789_22919 = state_22779;
(statearr_22789_22919[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22920 = state_22779;
state_22779 = G__22920;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = function(state_22779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1.call(this,state_22779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__;
})()
;})(__22899,switch__22464__auto__,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
})();
var state__22561__auto__ = (function (){var statearr_22790 = f__22560__auto__.call(null);
(statearr_22790[(6)] = c__22559__auto___22912);

return statearr_22790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(__22899,c__22559__auto___22912,G__22742_22900,G__22742_22901__$1,n__4607__auto___22898,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22742_22901__$1)].join('')));

}

var G__22921 = (__22899 + (1));
__22899 = G__22921;
continue;
} else {
}
break;
}

var c__22559__auto___22922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___22922,jobs,results,process,async){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___22922,jobs,results,process,async){
return (function (state_22812){
var state_val_22813 = (state_22812[(1)]);
if((state_val_22813 === (7))){
var inst_22808 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
var statearr_22814_22923 = state_22812__$1;
(statearr_22814_22923[(2)] = inst_22808);

(statearr_22814_22923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (1))){
var state_22812__$1 = state_22812;
var statearr_22815_22924 = state_22812__$1;
(statearr_22815_22924[(2)] = null);

(statearr_22815_22924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (4))){
var inst_22793 = (state_22812[(7)]);
var inst_22793__$1 = (state_22812[(2)]);
var inst_22794 = (inst_22793__$1 == null);
var state_22812__$1 = (function (){var statearr_22816 = state_22812;
(statearr_22816[(7)] = inst_22793__$1);

return statearr_22816;
})();
if(cljs.core.truth_(inst_22794)){
var statearr_22817_22925 = state_22812__$1;
(statearr_22817_22925[(1)] = (5));

} else {
var statearr_22818_22926 = state_22812__$1;
(statearr_22818_22926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (6))){
var inst_22798 = (state_22812[(8)]);
var inst_22793 = (state_22812[(7)]);
var inst_22798__$1 = cljs.core.async.chan.call(null,(1));
var inst_22799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22800 = [inst_22793,inst_22798__$1];
var inst_22801 = (new cljs.core.PersistentVector(null,2,(5),inst_22799,inst_22800,null));
var state_22812__$1 = (function (){var statearr_22819 = state_22812;
(statearr_22819[(8)] = inst_22798__$1);

return statearr_22819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22812__$1,(8),jobs,inst_22801);
} else {
if((state_val_22813 === (3))){
var inst_22810 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22812__$1,inst_22810);
} else {
if((state_val_22813 === (2))){
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22812__$1,(4),from);
} else {
if((state_val_22813 === (9))){
var inst_22805 = (state_22812[(2)]);
var state_22812__$1 = (function (){var statearr_22820 = state_22812;
(statearr_22820[(9)] = inst_22805);

return statearr_22820;
})();
var statearr_22821_22927 = state_22812__$1;
(statearr_22821_22927[(2)] = null);

(statearr_22821_22927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (5))){
var inst_22796 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22812__$1 = state_22812;
var statearr_22822_22928 = state_22812__$1;
(statearr_22822_22928[(2)] = inst_22796);

(statearr_22822_22928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (8))){
var inst_22798 = (state_22812[(8)]);
var inst_22803 = (state_22812[(2)]);
var state_22812__$1 = (function (){var statearr_22823 = state_22812;
(statearr_22823[(10)] = inst_22803);

return statearr_22823;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22812__$1,(9),results,inst_22798);
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
});})(c__22559__auto___22922,jobs,results,process,async))
;
return ((function (switch__22464__auto__,c__22559__auto___22922,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1 = (function (state_22812){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__22468__auto__ = e22825;
var statearr_22826_22929 = state_22812;
(statearr_22826_22929[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22930 = state_22812;
state_22812 = G__22930;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = function(state_22812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1.call(this,state_22812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___22922,jobs,results,process,async))
})();
var state__22561__auto__ = (function (){var statearr_22827 = f__22560__auto__.call(null);
(statearr_22827[(6)] = c__22559__auto___22922);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___22922,jobs,results,process,async))
);


var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,jobs,results,process,async){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,jobs,results,process,async){
return (function (state_22865){
var state_val_22866 = (state_22865[(1)]);
if((state_val_22866 === (7))){
var inst_22861 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22867_22931 = state_22865__$1;
(statearr_22867_22931[(2)] = inst_22861);

(statearr_22867_22931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (20))){
var state_22865__$1 = state_22865;
var statearr_22868_22932 = state_22865__$1;
(statearr_22868_22932[(2)] = null);

(statearr_22868_22932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (1))){
var state_22865__$1 = state_22865;
var statearr_22869_22933 = state_22865__$1;
(statearr_22869_22933[(2)] = null);

(statearr_22869_22933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (4))){
var inst_22830 = (state_22865[(7)]);
var inst_22830__$1 = (state_22865[(2)]);
var inst_22831 = (inst_22830__$1 == null);
var state_22865__$1 = (function (){var statearr_22870 = state_22865;
(statearr_22870[(7)] = inst_22830__$1);

return statearr_22870;
})();
if(cljs.core.truth_(inst_22831)){
var statearr_22871_22934 = state_22865__$1;
(statearr_22871_22934[(1)] = (5));

} else {
var statearr_22872_22935 = state_22865__$1;
(statearr_22872_22935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (15))){
var inst_22843 = (state_22865[(8)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22865__$1,(18),to,inst_22843);
} else {
if((state_val_22866 === (21))){
var inst_22856 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22873_22936 = state_22865__$1;
(statearr_22873_22936[(2)] = inst_22856);

(statearr_22873_22936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (13))){
var inst_22858 = (state_22865[(2)]);
var state_22865__$1 = (function (){var statearr_22874 = state_22865;
(statearr_22874[(9)] = inst_22858);

return statearr_22874;
})();
var statearr_22875_22937 = state_22865__$1;
(statearr_22875_22937[(2)] = null);

(statearr_22875_22937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (6))){
var inst_22830 = (state_22865[(7)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(11),inst_22830);
} else {
if((state_val_22866 === (17))){
var inst_22851 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
if(cljs.core.truth_(inst_22851)){
var statearr_22876_22938 = state_22865__$1;
(statearr_22876_22938[(1)] = (19));

} else {
var statearr_22877_22939 = state_22865__$1;
(statearr_22877_22939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (3))){
var inst_22863 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22865__$1,inst_22863);
} else {
if((state_val_22866 === (12))){
var inst_22840 = (state_22865[(10)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(14),inst_22840);
} else {
if((state_val_22866 === (2))){
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(4),results);
} else {
if((state_val_22866 === (19))){
var state_22865__$1 = state_22865;
var statearr_22878_22940 = state_22865__$1;
(statearr_22878_22940[(2)] = null);

(statearr_22878_22940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (11))){
var inst_22840 = (state_22865[(2)]);
var state_22865__$1 = (function (){var statearr_22879 = state_22865;
(statearr_22879[(10)] = inst_22840);

return statearr_22879;
})();
var statearr_22880_22941 = state_22865__$1;
(statearr_22880_22941[(2)] = null);

(statearr_22880_22941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (9))){
var state_22865__$1 = state_22865;
var statearr_22881_22942 = state_22865__$1;
(statearr_22881_22942[(2)] = null);

(statearr_22881_22942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (5))){
var state_22865__$1 = state_22865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22882_22943 = state_22865__$1;
(statearr_22882_22943[(1)] = (8));

} else {
var statearr_22883_22944 = state_22865__$1;
(statearr_22883_22944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (14))){
var inst_22843 = (state_22865[(8)]);
var inst_22845 = (state_22865[(11)]);
var inst_22843__$1 = (state_22865[(2)]);
var inst_22844 = (inst_22843__$1 == null);
var inst_22845__$1 = cljs.core.not.call(null,inst_22844);
var state_22865__$1 = (function (){var statearr_22884 = state_22865;
(statearr_22884[(8)] = inst_22843__$1);

(statearr_22884[(11)] = inst_22845__$1);

return statearr_22884;
})();
if(inst_22845__$1){
var statearr_22885_22945 = state_22865__$1;
(statearr_22885_22945[(1)] = (15));

} else {
var statearr_22886_22946 = state_22865__$1;
(statearr_22886_22946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (16))){
var inst_22845 = (state_22865[(11)]);
var state_22865__$1 = state_22865;
var statearr_22887_22947 = state_22865__$1;
(statearr_22887_22947[(2)] = inst_22845);

(statearr_22887_22947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (10))){
var inst_22837 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22888_22948 = state_22865__$1;
(statearr_22888_22948[(2)] = inst_22837);

(statearr_22888_22948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (18))){
var inst_22848 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22889_22949 = state_22865__$1;
(statearr_22889_22949[(2)] = inst_22848);

(statearr_22889_22949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (8))){
var inst_22834 = cljs.core.async.close_BANG_.call(null,to);
var state_22865__$1 = state_22865;
var statearr_22890_22950 = state_22865__$1;
(statearr_22890_22950[(2)] = inst_22834);

(statearr_22890_22950[(1)] = (10));


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
});})(c__22559__auto__,jobs,results,process,async))
;
return ((function (switch__22464__auto__,c__22559__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_22891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__);

(statearr_22891[(1)] = (1));

return statearr_22891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1 = (function (state_22865){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e22892){if((e22892 instanceof Object)){
var ex__22468__auto__ = e22892;
var statearr_22893_22951 = state_22865;
(statearr_22893_22951[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22952 = state_22865;
state_22865 = G__22952;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__ = function(state_22865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1.call(this,state_22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,jobs,results,process,async))
})();
var state__22561__auto__ = (function (){var statearr_22894 = f__22560__auto__.call(null);
(statearr_22894[(6)] = c__22559__auto__);

return statearr_22894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,jobs,results,process,async))
);

return c__22559__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22954 = arguments.length;
switch (G__22954) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__22957 = arguments.length;
switch (G__22957) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__22960 = arguments.length;
switch (G__22960) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22559__auto___23009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23009,tc,fc){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23009,tc,fc){
return (function (state_22986){
var state_val_22987 = (state_22986[(1)]);
if((state_val_22987 === (7))){
var inst_22982 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_22988_23010 = state_22986__$1;
(statearr_22988_23010[(2)] = inst_22982);

(statearr_22988_23010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (1))){
var state_22986__$1 = state_22986;
var statearr_22989_23011 = state_22986__$1;
(statearr_22989_23011[(2)] = null);

(statearr_22989_23011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (4))){
var inst_22963 = (state_22986[(7)]);
var inst_22963__$1 = (state_22986[(2)]);
var inst_22964 = (inst_22963__$1 == null);
var state_22986__$1 = (function (){var statearr_22990 = state_22986;
(statearr_22990[(7)] = inst_22963__$1);

return statearr_22990;
})();
if(cljs.core.truth_(inst_22964)){
var statearr_22991_23012 = state_22986__$1;
(statearr_22991_23012[(1)] = (5));

} else {
var statearr_22992_23013 = state_22986__$1;
(statearr_22992_23013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (13))){
var state_22986__$1 = state_22986;
var statearr_22993_23014 = state_22986__$1;
(statearr_22993_23014[(2)] = null);

(statearr_22993_23014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (6))){
var inst_22963 = (state_22986[(7)]);
var inst_22969 = p.call(null,inst_22963);
var state_22986__$1 = state_22986;
if(cljs.core.truth_(inst_22969)){
var statearr_22994_23015 = state_22986__$1;
(statearr_22994_23015[(1)] = (9));

} else {
var statearr_22995_23016 = state_22986__$1;
(statearr_22995_23016[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (3))){
var inst_22984 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22986__$1,inst_22984);
} else {
if((state_val_22987 === (12))){
var state_22986__$1 = state_22986;
var statearr_22996_23017 = state_22986__$1;
(statearr_22996_23017[(2)] = null);

(statearr_22996_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (2))){
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22986__$1,(4),ch);
} else {
if((state_val_22987 === (11))){
var inst_22963 = (state_22986[(7)]);
var inst_22973 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22986__$1,(8),inst_22973,inst_22963);
} else {
if((state_val_22987 === (9))){
var state_22986__$1 = state_22986;
var statearr_22997_23018 = state_22986__$1;
(statearr_22997_23018[(2)] = tc);

(statearr_22997_23018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (5))){
var inst_22966 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22967 = cljs.core.async.close_BANG_.call(null,fc);
var state_22986__$1 = (function (){var statearr_22998 = state_22986;
(statearr_22998[(8)] = inst_22966);

return statearr_22998;
})();
var statearr_22999_23019 = state_22986__$1;
(statearr_22999_23019[(2)] = inst_22967);

(statearr_22999_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (14))){
var inst_22980 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
var statearr_23000_23020 = state_22986__$1;
(statearr_23000_23020[(2)] = inst_22980);

(statearr_23000_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (10))){
var state_22986__$1 = state_22986;
var statearr_23001_23021 = state_22986__$1;
(statearr_23001_23021[(2)] = fc);

(statearr_23001_23021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22987 === (8))){
var inst_22975 = (state_22986[(2)]);
var state_22986__$1 = state_22986;
if(cljs.core.truth_(inst_22975)){
var statearr_23002_23022 = state_22986__$1;
(statearr_23002_23022[(1)] = (12));

} else {
var statearr_23003_23023 = state_22986__$1;
(statearr_23003_23023[(1)] = (13));

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
});})(c__22559__auto___23009,tc,fc))
;
return ((function (switch__22464__auto__,c__22559__auto___23009,tc,fc){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_23004 = [null,null,null,null,null,null,null,null,null];
(statearr_23004[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_23004[(1)] = (1));

return statearr_23004;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_22986){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_22986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23005){if((e23005 instanceof Object)){
var ex__22468__auto__ = e23005;
var statearr_23006_23024 = state_22986;
(statearr_23006_23024[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23025 = state_22986;
state_22986 = G__23025;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_22986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_22986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23009,tc,fc))
})();
var state__22561__auto__ = (function (){var statearr_23007 = f__22560__auto__.call(null);
(statearr_23007[(6)] = c__22559__auto___23009);

return statearr_23007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23009,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_23046){
var state_val_23047 = (state_23046[(1)]);
if((state_val_23047 === (7))){
var inst_23042 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23048_23066 = state_23046__$1;
(statearr_23048_23066[(2)] = inst_23042);

(statearr_23048_23066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (1))){
var inst_23026 = init;
var state_23046__$1 = (function (){var statearr_23049 = state_23046;
(statearr_23049[(7)] = inst_23026);

return statearr_23049;
})();
var statearr_23050_23067 = state_23046__$1;
(statearr_23050_23067[(2)] = null);

(statearr_23050_23067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (4))){
var inst_23029 = (state_23046[(8)]);
var inst_23029__$1 = (state_23046[(2)]);
var inst_23030 = (inst_23029__$1 == null);
var state_23046__$1 = (function (){var statearr_23051 = state_23046;
(statearr_23051[(8)] = inst_23029__$1);

return statearr_23051;
})();
if(cljs.core.truth_(inst_23030)){
var statearr_23052_23068 = state_23046__$1;
(statearr_23052_23068[(1)] = (5));

} else {
var statearr_23053_23069 = state_23046__$1;
(statearr_23053_23069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (6))){
var inst_23029 = (state_23046[(8)]);
var inst_23033 = (state_23046[(9)]);
var inst_23026 = (state_23046[(7)]);
var inst_23033__$1 = f.call(null,inst_23026,inst_23029);
var inst_23034 = cljs.core.reduced_QMARK_.call(null,inst_23033__$1);
var state_23046__$1 = (function (){var statearr_23054 = state_23046;
(statearr_23054[(9)] = inst_23033__$1);

return statearr_23054;
})();
if(inst_23034){
var statearr_23055_23070 = state_23046__$1;
(statearr_23055_23070[(1)] = (8));

} else {
var statearr_23056_23071 = state_23046__$1;
(statearr_23056_23071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (3))){
var inst_23044 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23046__$1,inst_23044);
} else {
if((state_val_23047 === (2))){
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23046__$1,(4),ch);
} else {
if((state_val_23047 === (9))){
var inst_23033 = (state_23046[(9)]);
var inst_23026 = inst_23033;
var state_23046__$1 = (function (){var statearr_23057 = state_23046;
(statearr_23057[(7)] = inst_23026);

return statearr_23057;
})();
var statearr_23058_23072 = state_23046__$1;
(statearr_23058_23072[(2)] = null);

(statearr_23058_23072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (5))){
var inst_23026 = (state_23046[(7)]);
var state_23046__$1 = state_23046;
var statearr_23059_23073 = state_23046__$1;
(statearr_23059_23073[(2)] = inst_23026);

(statearr_23059_23073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (10))){
var inst_23040 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23060_23074 = state_23046__$1;
(statearr_23060_23074[(2)] = inst_23040);

(statearr_23060_23074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (8))){
var inst_23033 = (state_23046[(9)]);
var inst_23036 = cljs.core.deref.call(null,inst_23033);
var state_23046__$1 = state_23046;
var statearr_23061_23075 = state_23046__$1;
(statearr_23061_23075[(2)] = inst_23036);

(statearr_23061_23075[(1)] = (10));


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
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22465__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22465__auto____0 = (function (){
var statearr_23062 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23062[(0)] = cljs$core$async$reduce_$_state_machine__22465__auto__);

(statearr_23062[(1)] = (1));

return statearr_23062;
});
var cljs$core$async$reduce_$_state_machine__22465__auto____1 = (function (state_23046){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23063){if((e23063 instanceof Object)){
var ex__22468__auto__ = e23063;
var statearr_23064_23076 = state_23046;
(statearr_23064_23076[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23077 = state_23046;
state_23046 = G__23077;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22465__auto__ = function(state_23046){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22465__auto____1.call(this,state_23046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22465__auto____0;
cljs$core$async$reduce_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22465__auto____1;
return cljs$core$async$reduce_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_23065 = f__22560__auto__.call(null);
(statearr_23065[(6)] = c__22559__auto__);

return statearr_23065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,f__$1){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,f__$1){
return (function (state_23083){
var state_val_23084 = (state_23083[(1)]);
if((state_val_23084 === (1))){
var inst_23078 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23083__$1,(2),inst_23078);
} else {
if((state_val_23084 === (2))){
var inst_23080 = (state_23083[(2)]);
var inst_23081 = f__$1.call(null,inst_23080);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23083__$1,inst_23081);
} else {
return null;
}
}
});})(c__22559__auto__,f__$1))
;
return ((function (switch__22464__auto__,c__22559__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22465__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22465__auto____0 = (function (){
var statearr_23085 = [null,null,null,null,null,null,null];
(statearr_23085[(0)] = cljs$core$async$transduce_$_state_machine__22465__auto__);

(statearr_23085[(1)] = (1));

return statearr_23085;
});
var cljs$core$async$transduce_$_state_machine__22465__auto____1 = (function (state_23083){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23086){if((e23086 instanceof Object)){
var ex__22468__auto__ = e23086;
var statearr_23087_23089 = state_23083;
(statearr_23087_23089[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23090 = state_23083;
state_23083 = G__23090;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22465__auto__ = function(state_23083){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22465__auto____1.call(this,state_23083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22465__auto____0;
cljs$core$async$transduce_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22465__auto____1;
return cljs$core$async$transduce_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,f__$1))
})();
var state__22561__auto__ = (function (){var statearr_23088 = f__22560__auto__.call(null);
(statearr_23088[(6)] = c__22559__auto__);

return statearr_23088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,f__$1))
);

return c__22559__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23092 = arguments.length;
switch (G__23092) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_23117){
var state_val_23118 = (state_23117[(1)]);
if((state_val_23118 === (7))){
var inst_23099 = (state_23117[(2)]);
var state_23117__$1 = state_23117;
var statearr_23119_23140 = state_23117__$1;
(statearr_23119_23140[(2)] = inst_23099);

(statearr_23119_23140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (1))){
var inst_23093 = cljs.core.seq.call(null,coll);
var inst_23094 = inst_23093;
var state_23117__$1 = (function (){var statearr_23120 = state_23117;
(statearr_23120[(7)] = inst_23094);

return statearr_23120;
})();
var statearr_23121_23141 = state_23117__$1;
(statearr_23121_23141[(2)] = null);

(statearr_23121_23141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (4))){
var inst_23094 = (state_23117[(7)]);
var inst_23097 = cljs.core.first.call(null,inst_23094);
var state_23117__$1 = state_23117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23117__$1,(7),ch,inst_23097);
} else {
if((state_val_23118 === (13))){
var inst_23111 = (state_23117[(2)]);
var state_23117__$1 = state_23117;
var statearr_23122_23142 = state_23117__$1;
(statearr_23122_23142[(2)] = inst_23111);

(statearr_23122_23142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (6))){
var inst_23102 = (state_23117[(2)]);
var state_23117__$1 = state_23117;
if(cljs.core.truth_(inst_23102)){
var statearr_23123_23143 = state_23117__$1;
(statearr_23123_23143[(1)] = (8));

} else {
var statearr_23124_23144 = state_23117__$1;
(statearr_23124_23144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (3))){
var inst_23115 = (state_23117[(2)]);
var state_23117__$1 = state_23117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23117__$1,inst_23115);
} else {
if((state_val_23118 === (12))){
var state_23117__$1 = state_23117;
var statearr_23125_23145 = state_23117__$1;
(statearr_23125_23145[(2)] = null);

(statearr_23125_23145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (2))){
var inst_23094 = (state_23117[(7)]);
var state_23117__$1 = state_23117;
if(cljs.core.truth_(inst_23094)){
var statearr_23126_23146 = state_23117__$1;
(statearr_23126_23146[(1)] = (4));

} else {
var statearr_23127_23147 = state_23117__$1;
(statearr_23127_23147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (11))){
var inst_23108 = cljs.core.async.close_BANG_.call(null,ch);
var state_23117__$1 = state_23117;
var statearr_23128_23148 = state_23117__$1;
(statearr_23128_23148[(2)] = inst_23108);

(statearr_23128_23148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (9))){
var state_23117__$1 = state_23117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23129_23149 = state_23117__$1;
(statearr_23129_23149[(1)] = (11));

} else {
var statearr_23130_23150 = state_23117__$1;
(statearr_23130_23150[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (5))){
var inst_23094 = (state_23117[(7)]);
var state_23117__$1 = state_23117;
var statearr_23131_23151 = state_23117__$1;
(statearr_23131_23151[(2)] = inst_23094);

(statearr_23131_23151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (10))){
var inst_23113 = (state_23117[(2)]);
var state_23117__$1 = state_23117;
var statearr_23132_23152 = state_23117__$1;
(statearr_23132_23152[(2)] = inst_23113);

(statearr_23132_23152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23118 === (8))){
var inst_23094 = (state_23117[(7)]);
var inst_23104 = cljs.core.next.call(null,inst_23094);
var inst_23094__$1 = inst_23104;
var state_23117__$1 = (function (){var statearr_23133 = state_23117;
(statearr_23133[(7)] = inst_23094__$1);

return statearr_23133;
})();
var statearr_23134_23153 = state_23117__$1;
(statearr_23134_23153[(2)] = null);

(statearr_23134_23153[(1)] = (2));


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
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_23135 = [null,null,null,null,null,null,null,null];
(statearr_23135[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_23135[(1)] = (1));

return statearr_23135;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_23117){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23136){if((e23136 instanceof Object)){
var ex__22468__auto__ = e23136;
var statearr_23137_23154 = state_23117;
(statearr_23137_23154[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23155 = state_23117;
state_23117 = G__23155;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_23117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_23117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_23138 = f__22560__auto__.call(null);
(statearr_23138[(6)] = c__22559__auto__);

return statearr_23138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23156 = (function (ch,cs,meta23157){
this.ch = ch;
this.cs = cs;
this.meta23157 = meta23157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23158,meta23157__$1){
var self__ = this;
var _23158__$1 = this;
return (new cljs.core.async.t_cljs$core$async23156(self__.ch,self__.cs,meta23157__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23158){
var self__ = this;
var _23158__$1 = this;
return self__.meta23157;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23157","meta23157",-1513885677,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23156";

cljs.core.async.t_cljs$core$async23156.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23156");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23156.
 */
cljs.core.async.__GT_t_cljs$core$async23156 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23156(ch__$1,cs__$1,meta23157){
return (new cljs.core.async.t_cljs$core$async23156(ch__$1,cs__$1,meta23157));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23156(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22559__auto___23378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23378,cs,m,dchan,dctr,done){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23378,cs,m,dchan,dctr,done){
return (function (state_23293){
var state_val_23294 = (state_23293[(1)]);
if((state_val_23294 === (7))){
var inst_23289 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23295_23379 = state_23293__$1;
(statearr_23295_23379[(2)] = inst_23289);

(statearr_23295_23379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (20))){
var inst_23192 = (state_23293[(7)]);
var inst_23204 = cljs.core.first.call(null,inst_23192);
var inst_23205 = cljs.core.nth.call(null,inst_23204,(0),null);
var inst_23206 = cljs.core.nth.call(null,inst_23204,(1),null);
var state_23293__$1 = (function (){var statearr_23296 = state_23293;
(statearr_23296[(8)] = inst_23205);

return statearr_23296;
})();
if(cljs.core.truth_(inst_23206)){
var statearr_23297_23380 = state_23293__$1;
(statearr_23297_23380[(1)] = (22));

} else {
var statearr_23298_23381 = state_23293__$1;
(statearr_23298_23381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (27))){
var inst_23161 = (state_23293[(9)]);
var inst_23234 = (state_23293[(10)]);
var inst_23236 = (state_23293[(11)]);
var inst_23241 = (state_23293[(12)]);
var inst_23241__$1 = cljs.core._nth.call(null,inst_23234,inst_23236);
var inst_23242 = cljs.core.async.put_BANG_.call(null,inst_23241__$1,inst_23161,done);
var state_23293__$1 = (function (){var statearr_23299 = state_23293;
(statearr_23299[(12)] = inst_23241__$1);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23242)){
var statearr_23300_23382 = state_23293__$1;
(statearr_23300_23382[(1)] = (30));

} else {
var statearr_23301_23383 = state_23293__$1;
(statearr_23301_23383[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (1))){
var state_23293__$1 = state_23293;
var statearr_23302_23384 = state_23293__$1;
(statearr_23302_23384[(2)] = null);

(statearr_23302_23384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (24))){
var inst_23192 = (state_23293[(7)]);
var inst_23211 = (state_23293[(2)]);
var inst_23212 = cljs.core.next.call(null,inst_23192);
var inst_23170 = inst_23212;
var inst_23171 = null;
var inst_23172 = (0);
var inst_23173 = (0);
var state_23293__$1 = (function (){var statearr_23303 = state_23293;
(statearr_23303[(13)] = inst_23171);

(statearr_23303[(14)] = inst_23172);

(statearr_23303[(15)] = inst_23173);

(statearr_23303[(16)] = inst_23170);

(statearr_23303[(17)] = inst_23211);

return statearr_23303;
})();
var statearr_23304_23385 = state_23293__$1;
(statearr_23304_23385[(2)] = null);

(statearr_23304_23385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (39))){
var state_23293__$1 = state_23293;
var statearr_23308_23386 = state_23293__$1;
(statearr_23308_23386[(2)] = null);

(statearr_23308_23386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (4))){
var inst_23161 = (state_23293[(9)]);
var inst_23161__$1 = (state_23293[(2)]);
var inst_23162 = (inst_23161__$1 == null);
var state_23293__$1 = (function (){var statearr_23309 = state_23293;
(statearr_23309[(9)] = inst_23161__$1);

return statearr_23309;
})();
if(cljs.core.truth_(inst_23162)){
var statearr_23310_23387 = state_23293__$1;
(statearr_23310_23387[(1)] = (5));

} else {
var statearr_23311_23388 = state_23293__$1;
(statearr_23311_23388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (15))){
var inst_23171 = (state_23293[(13)]);
var inst_23172 = (state_23293[(14)]);
var inst_23173 = (state_23293[(15)]);
var inst_23170 = (state_23293[(16)]);
var inst_23188 = (state_23293[(2)]);
var inst_23189 = (inst_23173 + (1));
var tmp23305 = inst_23171;
var tmp23306 = inst_23172;
var tmp23307 = inst_23170;
var inst_23170__$1 = tmp23307;
var inst_23171__$1 = tmp23305;
var inst_23172__$1 = tmp23306;
var inst_23173__$1 = inst_23189;
var state_23293__$1 = (function (){var statearr_23312 = state_23293;
(statearr_23312[(13)] = inst_23171__$1);

(statearr_23312[(14)] = inst_23172__$1);

(statearr_23312[(15)] = inst_23173__$1);

(statearr_23312[(16)] = inst_23170__$1);

(statearr_23312[(18)] = inst_23188);

return statearr_23312;
})();
var statearr_23313_23389 = state_23293__$1;
(statearr_23313_23389[(2)] = null);

(statearr_23313_23389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (21))){
var inst_23215 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23317_23390 = state_23293__$1;
(statearr_23317_23390[(2)] = inst_23215);

(statearr_23317_23390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (31))){
var inst_23241 = (state_23293[(12)]);
var inst_23245 = done.call(null,null);
var inst_23246 = cljs.core.async.untap_STAR_.call(null,m,inst_23241);
var state_23293__$1 = (function (){var statearr_23318 = state_23293;
(statearr_23318[(19)] = inst_23245);

return statearr_23318;
})();
var statearr_23319_23391 = state_23293__$1;
(statearr_23319_23391[(2)] = inst_23246);

(statearr_23319_23391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (32))){
var inst_23235 = (state_23293[(20)]);
var inst_23234 = (state_23293[(10)]);
var inst_23236 = (state_23293[(11)]);
var inst_23233 = (state_23293[(21)]);
var inst_23248 = (state_23293[(2)]);
var inst_23249 = (inst_23236 + (1));
var tmp23314 = inst_23235;
var tmp23315 = inst_23234;
var tmp23316 = inst_23233;
var inst_23233__$1 = tmp23316;
var inst_23234__$1 = tmp23315;
var inst_23235__$1 = tmp23314;
var inst_23236__$1 = inst_23249;
var state_23293__$1 = (function (){var statearr_23320 = state_23293;
(statearr_23320[(20)] = inst_23235__$1);

(statearr_23320[(10)] = inst_23234__$1);

(statearr_23320[(11)] = inst_23236__$1);

(statearr_23320[(22)] = inst_23248);

(statearr_23320[(21)] = inst_23233__$1);

return statearr_23320;
})();
var statearr_23321_23392 = state_23293__$1;
(statearr_23321_23392[(2)] = null);

(statearr_23321_23392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (40))){
var inst_23261 = (state_23293[(23)]);
var inst_23265 = done.call(null,null);
var inst_23266 = cljs.core.async.untap_STAR_.call(null,m,inst_23261);
var state_23293__$1 = (function (){var statearr_23322 = state_23293;
(statearr_23322[(24)] = inst_23265);

return statearr_23322;
})();
var statearr_23323_23393 = state_23293__$1;
(statearr_23323_23393[(2)] = inst_23266);

(statearr_23323_23393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (33))){
var inst_23252 = (state_23293[(25)]);
var inst_23254 = cljs.core.chunked_seq_QMARK_.call(null,inst_23252);
var state_23293__$1 = state_23293;
if(inst_23254){
var statearr_23324_23394 = state_23293__$1;
(statearr_23324_23394[(1)] = (36));

} else {
var statearr_23325_23395 = state_23293__$1;
(statearr_23325_23395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (13))){
var inst_23182 = (state_23293[(26)]);
var inst_23185 = cljs.core.async.close_BANG_.call(null,inst_23182);
var state_23293__$1 = state_23293;
var statearr_23326_23396 = state_23293__$1;
(statearr_23326_23396[(2)] = inst_23185);

(statearr_23326_23396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (22))){
var inst_23205 = (state_23293[(8)]);
var inst_23208 = cljs.core.async.close_BANG_.call(null,inst_23205);
var state_23293__$1 = state_23293;
var statearr_23327_23397 = state_23293__$1;
(statearr_23327_23397[(2)] = inst_23208);

(statearr_23327_23397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (36))){
var inst_23252 = (state_23293[(25)]);
var inst_23256 = cljs.core.chunk_first.call(null,inst_23252);
var inst_23257 = cljs.core.chunk_rest.call(null,inst_23252);
var inst_23258 = cljs.core.count.call(null,inst_23256);
var inst_23233 = inst_23257;
var inst_23234 = inst_23256;
var inst_23235 = inst_23258;
var inst_23236 = (0);
var state_23293__$1 = (function (){var statearr_23328 = state_23293;
(statearr_23328[(20)] = inst_23235);

(statearr_23328[(10)] = inst_23234);

(statearr_23328[(11)] = inst_23236);

(statearr_23328[(21)] = inst_23233);

return statearr_23328;
})();
var statearr_23329_23398 = state_23293__$1;
(statearr_23329_23398[(2)] = null);

(statearr_23329_23398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (41))){
var inst_23252 = (state_23293[(25)]);
var inst_23268 = (state_23293[(2)]);
var inst_23269 = cljs.core.next.call(null,inst_23252);
var inst_23233 = inst_23269;
var inst_23234 = null;
var inst_23235 = (0);
var inst_23236 = (0);
var state_23293__$1 = (function (){var statearr_23330 = state_23293;
(statearr_23330[(27)] = inst_23268);

(statearr_23330[(20)] = inst_23235);

(statearr_23330[(10)] = inst_23234);

(statearr_23330[(11)] = inst_23236);

(statearr_23330[(21)] = inst_23233);

return statearr_23330;
})();
var statearr_23331_23399 = state_23293__$1;
(statearr_23331_23399[(2)] = null);

(statearr_23331_23399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (43))){
var state_23293__$1 = state_23293;
var statearr_23332_23400 = state_23293__$1;
(statearr_23332_23400[(2)] = null);

(statearr_23332_23400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (29))){
var inst_23277 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23333_23401 = state_23293__$1;
(statearr_23333_23401[(2)] = inst_23277);

(statearr_23333_23401[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (44))){
var inst_23286 = (state_23293[(2)]);
var state_23293__$1 = (function (){var statearr_23334 = state_23293;
(statearr_23334[(28)] = inst_23286);

return statearr_23334;
})();
var statearr_23335_23402 = state_23293__$1;
(statearr_23335_23402[(2)] = null);

(statearr_23335_23402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (6))){
var inst_23225 = (state_23293[(29)]);
var inst_23224 = cljs.core.deref.call(null,cs);
var inst_23225__$1 = cljs.core.keys.call(null,inst_23224);
var inst_23226 = cljs.core.count.call(null,inst_23225__$1);
var inst_23227 = cljs.core.reset_BANG_.call(null,dctr,inst_23226);
var inst_23232 = cljs.core.seq.call(null,inst_23225__$1);
var inst_23233 = inst_23232;
var inst_23234 = null;
var inst_23235 = (0);
var inst_23236 = (0);
var state_23293__$1 = (function (){var statearr_23336 = state_23293;
(statearr_23336[(30)] = inst_23227);

(statearr_23336[(29)] = inst_23225__$1);

(statearr_23336[(20)] = inst_23235);

(statearr_23336[(10)] = inst_23234);

(statearr_23336[(11)] = inst_23236);

(statearr_23336[(21)] = inst_23233);

return statearr_23336;
})();
var statearr_23337_23403 = state_23293__$1;
(statearr_23337_23403[(2)] = null);

(statearr_23337_23403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (28))){
var inst_23252 = (state_23293[(25)]);
var inst_23233 = (state_23293[(21)]);
var inst_23252__$1 = cljs.core.seq.call(null,inst_23233);
var state_23293__$1 = (function (){var statearr_23338 = state_23293;
(statearr_23338[(25)] = inst_23252__$1);

return statearr_23338;
})();
if(inst_23252__$1){
var statearr_23339_23404 = state_23293__$1;
(statearr_23339_23404[(1)] = (33));

} else {
var statearr_23340_23405 = state_23293__$1;
(statearr_23340_23405[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (25))){
var inst_23235 = (state_23293[(20)]);
var inst_23236 = (state_23293[(11)]);
var inst_23238 = (inst_23236 < inst_23235);
var inst_23239 = inst_23238;
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23239)){
var statearr_23341_23406 = state_23293__$1;
(statearr_23341_23406[(1)] = (27));

} else {
var statearr_23342_23407 = state_23293__$1;
(statearr_23342_23407[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (34))){
var state_23293__$1 = state_23293;
var statearr_23343_23408 = state_23293__$1;
(statearr_23343_23408[(2)] = null);

(statearr_23343_23408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (17))){
var state_23293__$1 = state_23293;
var statearr_23344_23409 = state_23293__$1;
(statearr_23344_23409[(2)] = null);

(statearr_23344_23409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (3))){
var inst_23291 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23293__$1,inst_23291);
} else {
if((state_val_23294 === (12))){
var inst_23220 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23345_23410 = state_23293__$1;
(statearr_23345_23410[(2)] = inst_23220);

(statearr_23345_23410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (2))){
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23293__$1,(4),ch);
} else {
if((state_val_23294 === (23))){
var state_23293__$1 = state_23293;
var statearr_23346_23411 = state_23293__$1;
(statearr_23346_23411[(2)] = null);

(statearr_23346_23411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (35))){
var inst_23275 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23347_23412 = state_23293__$1;
(statearr_23347_23412[(2)] = inst_23275);

(statearr_23347_23412[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (19))){
var inst_23192 = (state_23293[(7)]);
var inst_23196 = cljs.core.chunk_first.call(null,inst_23192);
var inst_23197 = cljs.core.chunk_rest.call(null,inst_23192);
var inst_23198 = cljs.core.count.call(null,inst_23196);
var inst_23170 = inst_23197;
var inst_23171 = inst_23196;
var inst_23172 = inst_23198;
var inst_23173 = (0);
var state_23293__$1 = (function (){var statearr_23348 = state_23293;
(statearr_23348[(13)] = inst_23171);

(statearr_23348[(14)] = inst_23172);

(statearr_23348[(15)] = inst_23173);

(statearr_23348[(16)] = inst_23170);

return statearr_23348;
})();
var statearr_23349_23413 = state_23293__$1;
(statearr_23349_23413[(2)] = null);

(statearr_23349_23413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (11))){
var inst_23192 = (state_23293[(7)]);
var inst_23170 = (state_23293[(16)]);
var inst_23192__$1 = cljs.core.seq.call(null,inst_23170);
var state_23293__$1 = (function (){var statearr_23350 = state_23293;
(statearr_23350[(7)] = inst_23192__$1);

return statearr_23350;
})();
if(inst_23192__$1){
var statearr_23351_23414 = state_23293__$1;
(statearr_23351_23414[(1)] = (16));

} else {
var statearr_23352_23415 = state_23293__$1;
(statearr_23352_23415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (9))){
var inst_23222 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23353_23416 = state_23293__$1;
(statearr_23353_23416[(2)] = inst_23222);

(statearr_23353_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (5))){
var inst_23168 = cljs.core.deref.call(null,cs);
var inst_23169 = cljs.core.seq.call(null,inst_23168);
var inst_23170 = inst_23169;
var inst_23171 = null;
var inst_23172 = (0);
var inst_23173 = (0);
var state_23293__$1 = (function (){var statearr_23354 = state_23293;
(statearr_23354[(13)] = inst_23171);

(statearr_23354[(14)] = inst_23172);

(statearr_23354[(15)] = inst_23173);

(statearr_23354[(16)] = inst_23170);

return statearr_23354;
})();
var statearr_23355_23417 = state_23293__$1;
(statearr_23355_23417[(2)] = null);

(statearr_23355_23417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (14))){
var state_23293__$1 = state_23293;
var statearr_23356_23418 = state_23293__$1;
(statearr_23356_23418[(2)] = null);

(statearr_23356_23418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (45))){
var inst_23283 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23357_23419 = state_23293__$1;
(statearr_23357_23419[(2)] = inst_23283);

(statearr_23357_23419[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (26))){
var inst_23225 = (state_23293[(29)]);
var inst_23279 = (state_23293[(2)]);
var inst_23280 = cljs.core.seq.call(null,inst_23225);
var state_23293__$1 = (function (){var statearr_23358 = state_23293;
(statearr_23358[(31)] = inst_23279);

return statearr_23358;
})();
if(inst_23280){
var statearr_23359_23420 = state_23293__$1;
(statearr_23359_23420[(1)] = (42));

} else {
var statearr_23360_23421 = state_23293__$1;
(statearr_23360_23421[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (16))){
var inst_23192 = (state_23293[(7)]);
var inst_23194 = cljs.core.chunked_seq_QMARK_.call(null,inst_23192);
var state_23293__$1 = state_23293;
if(inst_23194){
var statearr_23361_23422 = state_23293__$1;
(statearr_23361_23422[(1)] = (19));

} else {
var statearr_23362_23423 = state_23293__$1;
(statearr_23362_23423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (38))){
var inst_23272 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23363_23424 = state_23293__$1;
(statearr_23363_23424[(2)] = inst_23272);

(statearr_23363_23424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (30))){
var state_23293__$1 = state_23293;
var statearr_23364_23425 = state_23293__$1;
(statearr_23364_23425[(2)] = null);

(statearr_23364_23425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (10))){
var inst_23171 = (state_23293[(13)]);
var inst_23173 = (state_23293[(15)]);
var inst_23181 = cljs.core._nth.call(null,inst_23171,inst_23173);
var inst_23182 = cljs.core.nth.call(null,inst_23181,(0),null);
var inst_23183 = cljs.core.nth.call(null,inst_23181,(1),null);
var state_23293__$1 = (function (){var statearr_23365 = state_23293;
(statearr_23365[(26)] = inst_23182);

return statearr_23365;
})();
if(cljs.core.truth_(inst_23183)){
var statearr_23366_23426 = state_23293__$1;
(statearr_23366_23426[(1)] = (13));

} else {
var statearr_23367_23427 = state_23293__$1;
(statearr_23367_23427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (18))){
var inst_23218 = (state_23293[(2)]);
var state_23293__$1 = state_23293;
var statearr_23368_23428 = state_23293__$1;
(statearr_23368_23428[(2)] = inst_23218);

(statearr_23368_23428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (42))){
var state_23293__$1 = state_23293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23293__$1,(45),dchan);
} else {
if((state_val_23294 === (37))){
var inst_23161 = (state_23293[(9)]);
var inst_23252 = (state_23293[(25)]);
var inst_23261 = (state_23293[(23)]);
var inst_23261__$1 = cljs.core.first.call(null,inst_23252);
var inst_23262 = cljs.core.async.put_BANG_.call(null,inst_23261__$1,inst_23161,done);
var state_23293__$1 = (function (){var statearr_23369 = state_23293;
(statearr_23369[(23)] = inst_23261__$1);

return statearr_23369;
})();
if(cljs.core.truth_(inst_23262)){
var statearr_23370_23429 = state_23293__$1;
(statearr_23370_23429[(1)] = (39));

} else {
var statearr_23371_23430 = state_23293__$1;
(statearr_23371_23430[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23294 === (8))){
var inst_23172 = (state_23293[(14)]);
var inst_23173 = (state_23293[(15)]);
var inst_23175 = (inst_23173 < inst_23172);
var inst_23176 = inst_23175;
var state_23293__$1 = state_23293;
if(cljs.core.truth_(inst_23176)){
var statearr_23372_23431 = state_23293__$1;
(statearr_23372_23431[(1)] = (10));

} else {
var statearr_23373_23432 = state_23293__$1;
(statearr_23373_23432[(1)] = (11));

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
});})(c__22559__auto___23378,cs,m,dchan,dctr,done))
;
return ((function (switch__22464__auto__,c__22559__auto___23378,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22465__auto__ = null;
var cljs$core$async$mult_$_state_machine__22465__auto____0 = (function (){
var statearr_23374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23374[(0)] = cljs$core$async$mult_$_state_machine__22465__auto__);

(statearr_23374[(1)] = (1));

return statearr_23374;
});
var cljs$core$async$mult_$_state_machine__22465__auto____1 = (function (state_23293){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23375){if((e23375 instanceof Object)){
var ex__22468__auto__ = e23375;
var statearr_23376_23433 = state_23293;
(statearr_23376_23433[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23434 = state_23293;
state_23293 = G__23434;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22465__auto__ = function(state_23293){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22465__auto____1.call(this,state_23293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22465__auto____0;
cljs$core$async$mult_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22465__auto____1;
return cljs$core$async$mult_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23378,cs,m,dchan,dctr,done))
})();
var state__22561__auto__ = (function (){var statearr_23377 = f__22560__auto__.call(null);
(statearr_23377[(6)] = c__22559__auto___23378);

return statearr_23377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23378,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23436 = arguments.length;
switch (G__23436) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23448 = arguments.length;
var i__4731__auto___23449 = (0);
while(true){
if((i__4731__auto___23449 < len__4730__auto___23448)){
args__4736__auto__.push((arguments[i__4731__auto___23449]));

var G__23450 = (i__4731__auto___23449 + (1));
i__4731__auto___23449 = G__23450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23442){
var map__23443 = p__23442;
var map__23443__$1 = (((((!((map__23443 == null))))?(((((map__23443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23443):map__23443);
var opts = map__23443__$1;
var statearr_23445_23451 = state;
(statearr_23445_23451[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__23443,map__23443__$1,opts){
return (function (val){
var statearr_23446_23452 = state;
(statearr_23446_23452[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23443,map__23443__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23447_23453 = state;
(statearr_23447_23453[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23438){
var G__23439 = cljs.core.first.call(null,seq23438);
var seq23438__$1 = cljs.core.next.call(null,seq23438);
var G__23440 = cljs.core.first.call(null,seq23438__$1);
var seq23438__$2 = cljs.core.next.call(null,seq23438__$1);
var G__23441 = cljs.core.first.call(null,seq23438__$2);
var seq23438__$3 = cljs.core.next.call(null,seq23438__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23439,G__23440,G__23441,seq23438__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23454 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23455){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23455 = meta23455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23456,meta23455__$1){
var self__ = this;
var _23456__$1 = this;
return (new cljs.core.async.t_cljs$core$async23454(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23455__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23456){
var self__ = this;
var _23456__$1 = this;
return self__.meta23455;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23455","meta23455",338000142,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23454";

cljs.core.async.t_cljs$core$async23454.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23454");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23454.
 */
cljs.core.async.__GT_t_cljs$core$async23454 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23455){
return (new cljs.core.async.t_cljs$core$async23454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23455));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23454(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22559__auto___23618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23558){
var state_val_23559 = (state_23558[(1)]);
if((state_val_23559 === (7))){
var inst_23473 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23560_23619 = state_23558__$1;
(statearr_23560_23619[(2)] = inst_23473);

(statearr_23560_23619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (20))){
var inst_23485 = (state_23558[(7)]);
var state_23558__$1 = state_23558;
var statearr_23561_23620 = state_23558__$1;
(statearr_23561_23620[(2)] = inst_23485);

(statearr_23561_23620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (27))){
var state_23558__$1 = state_23558;
var statearr_23562_23621 = state_23558__$1;
(statearr_23562_23621[(2)] = null);

(statearr_23562_23621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (1))){
var inst_23460 = (state_23558[(8)]);
var inst_23460__$1 = calc_state.call(null);
var inst_23462 = (inst_23460__$1 == null);
var inst_23463 = cljs.core.not.call(null,inst_23462);
var state_23558__$1 = (function (){var statearr_23563 = state_23558;
(statearr_23563[(8)] = inst_23460__$1);

return statearr_23563;
})();
if(inst_23463){
var statearr_23564_23622 = state_23558__$1;
(statearr_23564_23622[(1)] = (2));

} else {
var statearr_23565_23623 = state_23558__$1;
(statearr_23565_23623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (24))){
var inst_23509 = (state_23558[(9)]);
var inst_23518 = (state_23558[(10)]);
var inst_23532 = (state_23558[(11)]);
var inst_23532__$1 = inst_23509.call(null,inst_23518);
var state_23558__$1 = (function (){var statearr_23566 = state_23558;
(statearr_23566[(11)] = inst_23532__$1);

return statearr_23566;
})();
if(cljs.core.truth_(inst_23532__$1)){
var statearr_23567_23624 = state_23558__$1;
(statearr_23567_23624[(1)] = (29));

} else {
var statearr_23568_23625 = state_23558__$1;
(statearr_23568_23625[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (4))){
var inst_23476 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23476)){
var statearr_23569_23626 = state_23558__$1;
(statearr_23569_23626[(1)] = (8));

} else {
var statearr_23570_23627 = state_23558__$1;
(statearr_23570_23627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (15))){
var inst_23503 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23503)){
var statearr_23571_23628 = state_23558__$1;
(statearr_23571_23628[(1)] = (19));

} else {
var statearr_23572_23629 = state_23558__$1;
(statearr_23572_23629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (21))){
var inst_23508 = (state_23558[(12)]);
var inst_23508__$1 = (state_23558[(2)]);
var inst_23509 = cljs.core.get.call(null,inst_23508__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23510 = cljs.core.get.call(null,inst_23508__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23511 = cljs.core.get.call(null,inst_23508__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23558__$1 = (function (){var statearr_23573 = state_23558;
(statearr_23573[(9)] = inst_23509);

(statearr_23573[(13)] = inst_23510);

(statearr_23573[(12)] = inst_23508__$1);

return statearr_23573;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23558__$1,(22),inst_23511);
} else {
if((state_val_23559 === (31))){
var inst_23540 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23540)){
var statearr_23574_23630 = state_23558__$1;
(statearr_23574_23630[(1)] = (32));

} else {
var statearr_23575_23631 = state_23558__$1;
(statearr_23575_23631[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (32))){
var inst_23517 = (state_23558[(14)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23558__$1,(35),out,inst_23517);
} else {
if((state_val_23559 === (33))){
var inst_23508 = (state_23558[(12)]);
var inst_23485 = inst_23508;
var state_23558__$1 = (function (){var statearr_23576 = state_23558;
(statearr_23576[(7)] = inst_23485);

return statearr_23576;
})();
var statearr_23577_23632 = state_23558__$1;
(statearr_23577_23632[(2)] = null);

(statearr_23577_23632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (13))){
var inst_23485 = (state_23558[(7)]);
var inst_23492 = inst_23485.cljs$lang$protocol_mask$partition0$;
var inst_23493 = (inst_23492 & (64));
var inst_23494 = inst_23485.cljs$core$ISeq$;
var inst_23495 = (cljs.core.PROTOCOL_SENTINEL === inst_23494);
var inst_23496 = ((inst_23493) || (inst_23495));
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23496)){
var statearr_23578_23633 = state_23558__$1;
(statearr_23578_23633[(1)] = (16));

} else {
var statearr_23579_23634 = state_23558__$1;
(statearr_23579_23634[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (22))){
var inst_23518 = (state_23558[(10)]);
var inst_23517 = (state_23558[(14)]);
var inst_23516 = (state_23558[(2)]);
var inst_23517__$1 = cljs.core.nth.call(null,inst_23516,(0),null);
var inst_23518__$1 = cljs.core.nth.call(null,inst_23516,(1),null);
var inst_23519 = (inst_23517__$1 == null);
var inst_23520 = cljs.core._EQ_.call(null,inst_23518__$1,change);
var inst_23521 = ((inst_23519) || (inst_23520));
var state_23558__$1 = (function (){var statearr_23580 = state_23558;
(statearr_23580[(10)] = inst_23518__$1);

(statearr_23580[(14)] = inst_23517__$1);

return statearr_23580;
})();
if(cljs.core.truth_(inst_23521)){
var statearr_23581_23635 = state_23558__$1;
(statearr_23581_23635[(1)] = (23));

} else {
var statearr_23582_23636 = state_23558__$1;
(statearr_23582_23636[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (36))){
var inst_23508 = (state_23558[(12)]);
var inst_23485 = inst_23508;
var state_23558__$1 = (function (){var statearr_23583 = state_23558;
(statearr_23583[(7)] = inst_23485);

return statearr_23583;
})();
var statearr_23584_23637 = state_23558__$1;
(statearr_23584_23637[(2)] = null);

(statearr_23584_23637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (29))){
var inst_23532 = (state_23558[(11)]);
var state_23558__$1 = state_23558;
var statearr_23585_23638 = state_23558__$1;
(statearr_23585_23638[(2)] = inst_23532);

(statearr_23585_23638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (6))){
var state_23558__$1 = state_23558;
var statearr_23586_23639 = state_23558__$1;
(statearr_23586_23639[(2)] = false);

(statearr_23586_23639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (28))){
var inst_23528 = (state_23558[(2)]);
var inst_23529 = calc_state.call(null);
var inst_23485 = inst_23529;
var state_23558__$1 = (function (){var statearr_23587 = state_23558;
(statearr_23587[(7)] = inst_23485);

(statearr_23587[(15)] = inst_23528);

return statearr_23587;
})();
var statearr_23588_23640 = state_23558__$1;
(statearr_23588_23640[(2)] = null);

(statearr_23588_23640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (25))){
var inst_23554 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23589_23641 = state_23558__$1;
(statearr_23589_23641[(2)] = inst_23554);

(statearr_23589_23641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (34))){
var inst_23552 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23590_23642 = state_23558__$1;
(statearr_23590_23642[(2)] = inst_23552);

(statearr_23590_23642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (17))){
var state_23558__$1 = state_23558;
var statearr_23591_23643 = state_23558__$1;
(statearr_23591_23643[(2)] = false);

(statearr_23591_23643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (3))){
var state_23558__$1 = state_23558;
var statearr_23592_23644 = state_23558__$1;
(statearr_23592_23644[(2)] = false);

(statearr_23592_23644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (12))){
var inst_23556 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23558__$1,inst_23556);
} else {
if((state_val_23559 === (2))){
var inst_23460 = (state_23558[(8)]);
var inst_23465 = inst_23460.cljs$lang$protocol_mask$partition0$;
var inst_23466 = (inst_23465 & (64));
var inst_23467 = inst_23460.cljs$core$ISeq$;
var inst_23468 = (cljs.core.PROTOCOL_SENTINEL === inst_23467);
var inst_23469 = ((inst_23466) || (inst_23468));
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23469)){
var statearr_23593_23645 = state_23558__$1;
(statearr_23593_23645[(1)] = (5));

} else {
var statearr_23594_23646 = state_23558__$1;
(statearr_23594_23646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (23))){
var inst_23517 = (state_23558[(14)]);
var inst_23523 = (inst_23517 == null);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23523)){
var statearr_23595_23647 = state_23558__$1;
(statearr_23595_23647[(1)] = (26));

} else {
var statearr_23596_23648 = state_23558__$1;
(statearr_23596_23648[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (35))){
var inst_23543 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23543)){
var statearr_23597_23649 = state_23558__$1;
(statearr_23597_23649[(1)] = (36));

} else {
var statearr_23598_23650 = state_23558__$1;
(statearr_23598_23650[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (19))){
var inst_23485 = (state_23558[(7)]);
var inst_23505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23485);
var state_23558__$1 = state_23558;
var statearr_23599_23651 = state_23558__$1;
(statearr_23599_23651[(2)] = inst_23505);

(statearr_23599_23651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (11))){
var inst_23485 = (state_23558[(7)]);
var inst_23489 = (inst_23485 == null);
var inst_23490 = cljs.core.not.call(null,inst_23489);
var state_23558__$1 = state_23558;
if(inst_23490){
var statearr_23600_23652 = state_23558__$1;
(statearr_23600_23652[(1)] = (13));

} else {
var statearr_23601_23653 = state_23558__$1;
(statearr_23601_23653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (9))){
var inst_23460 = (state_23558[(8)]);
var state_23558__$1 = state_23558;
var statearr_23602_23654 = state_23558__$1;
(statearr_23602_23654[(2)] = inst_23460);

(statearr_23602_23654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (5))){
var state_23558__$1 = state_23558;
var statearr_23603_23655 = state_23558__$1;
(statearr_23603_23655[(2)] = true);

(statearr_23603_23655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (14))){
var state_23558__$1 = state_23558;
var statearr_23604_23656 = state_23558__$1;
(statearr_23604_23656[(2)] = false);

(statearr_23604_23656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (26))){
var inst_23518 = (state_23558[(10)]);
var inst_23525 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23518);
var state_23558__$1 = state_23558;
var statearr_23605_23657 = state_23558__$1;
(statearr_23605_23657[(2)] = inst_23525);

(statearr_23605_23657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (16))){
var state_23558__$1 = state_23558;
var statearr_23606_23658 = state_23558__$1;
(statearr_23606_23658[(2)] = true);

(statearr_23606_23658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (38))){
var inst_23548 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23607_23659 = state_23558__$1;
(statearr_23607_23659[(2)] = inst_23548);

(statearr_23607_23659[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (30))){
var inst_23509 = (state_23558[(9)]);
var inst_23518 = (state_23558[(10)]);
var inst_23510 = (state_23558[(13)]);
var inst_23535 = cljs.core.empty_QMARK_.call(null,inst_23509);
var inst_23536 = inst_23510.call(null,inst_23518);
var inst_23537 = cljs.core.not.call(null,inst_23536);
var inst_23538 = ((inst_23535) && (inst_23537));
var state_23558__$1 = state_23558;
var statearr_23608_23660 = state_23558__$1;
(statearr_23608_23660[(2)] = inst_23538);

(statearr_23608_23660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (10))){
var inst_23460 = (state_23558[(8)]);
var inst_23481 = (state_23558[(2)]);
var inst_23482 = cljs.core.get.call(null,inst_23481,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23483 = cljs.core.get.call(null,inst_23481,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23484 = cljs.core.get.call(null,inst_23481,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23485 = inst_23460;
var state_23558__$1 = (function (){var statearr_23609 = state_23558;
(statearr_23609[(16)] = inst_23482);

(statearr_23609[(17)] = inst_23483);

(statearr_23609[(7)] = inst_23485);

(statearr_23609[(18)] = inst_23484);

return statearr_23609;
})();
var statearr_23610_23661 = state_23558__$1;
(statearr_23610_23661[(2)] = null);

(statearr_23610_23661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (18))){
var inst_23500 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23611_23662 = state_23558__$1;
(statearr_23611_23662[(2)] = inst_23500);

(statearr_23611_23662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (37))){
var state_23558__$1 = state_23558;
var statearr_23612_23663 = state_23558__$1;
(statearr_23612_23663[(2)] = null);

(statearr_23612_23663[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (8))){
var inst_23460 = (state_23558[(8)]);
var inst_23478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23460);
var state_23558__$1 = state_23558;
var statearr_23613_23664 = state_23558__$1;
(statearr_23613_23664[(2)] = inst_23478);

(statearr_23613_23664[(1)] = (10));


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
});})(c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22464__auto__,c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22465__auto__ = null;
var cljs$core$async$mix_$_state_machine__22465__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = cljs$core$async$mix_$_state_machine__22465__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var cljs$core$async$mix_$_state_machine__22465__auto____1 = (function (state_23558){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__22468__auto__ = e23615;
var statearr_23616_23665 = state_23558;
(statearr_23616_23665[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23666 = state_23558;
state_23558 = G__23666;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22465__auto__ = function(state_23558){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22465__auto____1.call(this,state_23558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22465__auto____0;
cljs$core$async$mix_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22465__auto____1;
return cljs$core$async$mix_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22561__auto__ = (function (){var statearr_23617 = f__22560__auto__.call(null);
(statearr_23617[(6)] = c__22559__auto___23618);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23668 = arguments.length;
switch (G__23668) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23672 = arguments.length;
switch (G__23672) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__23670_SHARP_){
if(cljs.core.truth_(p1__23670_SHARP_.call(null,topic))){
return p1__23670_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23670_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23673 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23674){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23674 = meta23674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23675,meta23674__$1){
var self__ = this;
var _23675__$1 = this;
return (new cljs.core.async.t_cljs$core$async23673(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23674__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23675){
var self__ = this;
var _23675__$1 = this;
return self__.meta23674;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23674","meta23674",-893251397,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23673";

cljs.core.async.t_cljs$core$async23673.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23673");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23673.
 */
cljs.core.async.__GT_t_cljs$core$async23673 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23673(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23674){
return (new cljs.core.async.t_cljs$core$async23673(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23674));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23673(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22559__auto___23793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23793,mults,ensure_mult,p){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23793,mults,ensure_mult,p){
return (function (state_23747){
var state_val_23748 = (state_23747[(1)]);
if((state_val_23748 === (7))){
var inst_23743 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23749_23794 = state_23747__$1;
(statearr_23749_23794[(2)] = inst_23743);

(statearr_23749_23794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (20))){
var state_23747__$1 = state_23747;
var statearr_23750_23795 = state_23747__$1;
(statearr_23750_23795[(2)] = null);

(statearr_23750_23795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (1))){
var state_23747__$1 = state_23747;
var statearr_23751_23796 = state_23747__$1;
(statearr_23751_23796[(2)] = null);

(statearr_23751_23796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (24))){
var inst_23726 = (state_23747[(7)]);
var inst_23735 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23726);
var state_23747__$1 = state_23747;
var statearr_23752_23797 = state_23747__$1;
(statearr_23752_23797[(2)] = inst_23735);

(statearr_23752_23797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (4))){
var inst_23678 = (state_23747[(8)]);
var inst_23678__$1 = (state_23747[(2)]);
var inst_23679 = (inst_23678__$1 == null);
var state_23747__$1 = (function (){var statearr_23753 = state_23747;
(statearr_23753[(8)] = inst_23678__$1);

return statearr_23753;
})();
if(cljs.core.truth_(inst_23679)){
var statearr_23754_23798 = state_23747__$1;
(statearr_23754_23798[(1)] = (5));

} else {
var statearr_23755_23799 = state_23747__$1;
(statearr_23755_23799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (15))){
var inst_23720 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23756_23800 = state_23747__$1;
(statearr_23756_23800[(2)] = inst_23720);

(statearr_23756_23800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (21))){
var inst_23740 = (state_23747[(2)]);
var state_23747__$1 = (function (){var statearr_23757 = state_23747;
(statearr_23757[(9)] = inst_23740);

return statearr_23757;
})();
var statearr_23758_23801 = state_23747__$1;
(statearr_23758_23801[(2)] = null);

(statearr_23758_23801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (13))){
var inst_23702 = (state_23747[(10)]);
var inst_23704 = cljs.core.chunked_seq_QMARK_.call(null,inst_23702);
var state_23747__$1 = state_23747;
if(inst_23704){
var statearr_23759_23802 = state_23747__$1;
(statearr_23759_23802[(1)] = (16));

} else {
var statearr_23760_23803 = state_23747__$1;
(statearr_23760_23803[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (22))){
var inst_23732 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
if(cljs.core.truth_(inst_23732)){
var statearr_23761_23804 = state_23747__$1;
(statearr_23761_23804[(1)] = (23));

} else {
var statearr_23762_23805 = state_23747__$1;
(statearr_23762_23805[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (6))){
var inst_23726 = (state_23747[(7)]);
var inst_23678 = (state_23747[(8)]);
var inst_23728 = (state_23747[(11)]);
var inst_23726__$1 = topic_fn.call(null,inst_23678);
var inst_23727 = cljs.core.deref.call(null,mults);
var inst_23728__$1 = cljs.core.get.call(null,inst_23727,inst_23726__$1);
var state_23747__$1 = (function (){var statearr_23763 = state_23747;
(statearr_23763[(7)] = inst_23726__$1);

(statearr_23763[(11)] = inst_23728__$1);

return statearr_23763;
})();
if(cljs.core.truth_(inst_23728__$1)){
var statearr_23764_23806 = state_23747__$1;
(statearr_23764_23806[(1)] = (19));

} else {
var statearr_23765_23807 = state_23747__$1;
(statearr_23765_23807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (25))){
var inst_23737 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23766_23808 = state_23747__$1;
(statearr_23766_23808[(2)] = inst_23737);

(statearr_23766_23808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (17))){
var inst_23702 = (state_23747[(10)]);
var inst_23711 = cljs.core.first.call(null,inst_23702);
var inst_23712 = cljs.core.async.muxch_STAR_.call(null,inst_23711);
var inst_23713 = cljs.core.async.close_BANG_.call(null,inst_23712);
var inst_23714 = cljs.core.next.call(null,inst_23702);
var inst_23688 = inst_23714;
var inst_23689 = null;
var inst_23690 = (0);
var inst_23691 = (0);
var state_23747__$1 = (function (){var statearr_23767 = state_23747;
(statearr_23767[(12)] = inst_23691);

(statearr_23767[(13)] = inst_23688);

(statearr_23767[(14)] = inst_23690);

(statearr_23767[(15)] = inst_23689);

(statearr_23767[(16)] = inst_23713);

return statearr_23767;
})();
var statearr_23768_23809 = state_23747__$1;
(statearr_23768_23809[(2)] = null);

(statearr_23768_23809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (3))){
var inst_23745 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23747__$1,inst_23745);
} else {
if((state_val_23748 === (12))){
var inst_23722 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23769_23810 = state_23747__$1;
(statearr_23769_23810[(2)] = inst_23722);

(statearr_23769_23810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (2))){
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23747__$1,(4),ch);
} else {
if((state_val_23748 === (23))){
var state_23747__$1 = state_23747;
var statearr_23770_23811 = state_23747__$1;
(statearr_23770_23811[(2)] = null);

(statearr_23770_23811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (19))){
var inst_23678 = (state_23747[(8)]);
var inst_23728 = (state_23747[(11)]);
var inst_23730 = cljs.core.async.muxch_STAR_.call(null,inst_23728);
var state_23747__$1 = state_23747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23747__$1,(22),inst_23730,inst_23678);
} else {
if((state_val_23748 === (11))){
var inst_23688 = (state_23747[(13)]);
var inst_23702 = (state_23747[(10)]);
var inst_23702__$1 = cljs.core.seq.call(null,inst_23688);
var state_23747__$1 = (function (){var statearr_23771 = state_23747;
(statearr_23771[(10)] = inst_23702__$1);

return statearr_23771;
})();
if(inst_23702__$1){
var statearr_23772_23812 = state_23747__$1;
(statearr_23772_23812[(1)] = (13));

} else {
var statearr_23773_23813 = state_23747__$1;
(statearr_23773_23813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (9))){
var inst_23724 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23774_23814 = state_23747__$1;
(statearr_23774_23814[(2)] = inst_23724);

(statearr_23774_23814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (5))){
var inst_23685 = cljs.core.deref.call(null,mults);
var inst_23686 = cljs.core.vals.call(null,inst_23685);
var inst_23687 = cljs.core.seq.call(null,inst_23686);
var inst_23688 = inst_23687;
var inst_23689 = null;
var inst_23690 = (0);
var inst_23691 = (0);
var state_23747__$1 = (function (){var statearr_23775 = state_23747;
(statearr_23775[(12)] = inst_23691);

(statearr_23775[(13)] = inst_23688);

(statearr_23775[(14)] = inst_23690);

(statearr_23775[(15)] = inst_23689);

return statearr_23775;
})();
var statearr_23776_23815 = state_23747__$1;
(statearr_23776_23815[(2)] = null);

(statearr_23776_23815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (14))){
var state_23747__$1 = state_23747;
var statearr_23780_23816 = state_23747__$1;
(statearr_23780_23816[(2)] = null);

(statearr_23780_23816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (16))){
var inst_23702 = (state_23747[(10)]);
var inst_23706 = cljs.core.chunk_first.call(null,inst_23702);
var inst_23707 = cljs.core.chunk_rest.call(null,inst_23702);
var inst_23708 = cljs.core.count.call(null,inst_23706);
var inst_23688 = inst_23707;
var inst_23689 = inst_23706;
var inst_23690 = inst_23708;
var inst_23691 = (0);
var state_23747__$1 = (function (){var statearr_23781 = state_23747;
(statearr_23781[(12)] = inst_23691);

(statearr_23781[(13)] = inst_23688);

(statearr_23781[(14)] = inst_23690);

(statearr_23781[(15)] = inst_23689);

return statearr_23781;
})();
var statearr_23782_23817 = state_23747__$1;
(statearr_23782_23817[(2)] = null);

(statearr_23782_23817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (10))){
var inst_23691 = (state_23747[(12)]);
var inst_23688 = (state_23747[(13)]);
var inst_23690 = (state_23747[(14)]);
var inst_23689 = (state_23747[(15)]);
var inst_23696 = cljs.core._nth.call(null,inst_23689,inst_23691);
var inst_23697 = cljs.core.async.muxch_STAR_.call(null,inst_23696);
var inst_23698 = cljs.core.async.close_BANG_.call(null,inst_23697);
var inst_23699 = (inst_23691 + (1));
var tmp23777 = inst_23688;
var tmp23778 = inst_23690;
var tmp23779 = inst_23689;
var inst_23688__$1 = tmp23777;
var inst_23689__$1 = tmp23779;
var inst_23690__$1 = tmp23778;
var inst_23691__$1 = inst_23699;
var state_23747__$1 = (function (){var statearr_23783 = state_23747;
(statearr_23783[(12)] = inst_23691__$1);

(statearr_23783[(13)] = inst_23688__$1);

(statearr_23783[(14)] = inst_23690__$1);

(statearr_23783[(17)] = inst_23698);

(statearr_23783[(15)] = inst_23689__$1);

return statearr_23783;
})();
var statearr_23784_23818 = state_23747__$1;
(statearr_23784_23818[(2)] = null);

(statearr_23784_23818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (18))){
var inst_23717 = (state_23747[(2)]);
var state_23747__$1 = state_23747;
var statearr_23785_23819 = state_23747__$1;
(statearr_23785_23819[(2)] = inst_23717);

(statearr_23785_23819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23748 === (8))){
var inst_23691 = (state_23747[(12)]);
var inst_23690 = (state_23747[(14)]);
var inst_23693 = (inst_23691 < inst_23690);
var inst_23694 = inst_23693;
var state_23747__$1 = state_23747;
if(cljs.core.truth_(inst_23694)){
var statearr_23786_23820 = state_23747__$1;
(statearr_23786_23820[(1)] = (10));

} else {
var statearr_23787_23821 = state_23747__$1;
(statearr_23787_23821[(1)] = (11));

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
});})(c__22559__auto___23793,mults,ensure_mult,p))
;
return ((function (switch__22464__auto__,c__22559__auto___23793,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_23747){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__22468__auto__ = e23789;
var statearr_23790_23822 = state_23747;
(statearr_23790_23822[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23823 = state_23747;
state_23747 = G__23823;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_23747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_23747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23793,mults,ensure_mult,p))
})();
var state__22561__auto__ = (function (){var statearr_23791 = f__22560__auto__.call(null);
(statearr_23791[(6)] = c__22559__auto___23793);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23793,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__23825 = arguments.length;
switch (G__23825) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__23828 = arguments.length;
switch (G__23828) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__23831 = arguments.length;
switch (G__23831) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22559__auto___23898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23870){
var state_val_23871 = (state_23870[(1)]);
if((state_val_23871 === (7))){
var state_23870__$1 = state_23870;
var statearr_23872_23899 = state_23870__$1;
(statearr_23872_23899[(2)] = null);

(statearr_23872_23899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (1))){
var state_23870__$1 = state_23870;
var statearr_23873_23900 = state_23870__$1;
(statearr_23873_23900[(2)] = null);

(statearr_23873_23900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (4))){
var inst_23834 = (state_23870[(7)]);
var inst_23836 = (inst_23834 < cnt);
var state_23870__$1 = state_23870;
if(cljs.core.truth_(inst_23836)){
var statearr_23874_23901 = state_23870__$1;
(statearr_23874_23901[(1)] = (6));

} else {
var statearr_23875_23902 = state_23870__$1;
(statearr_23875_23902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (15))){
var inst_23866 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23876_23903 = state_23870__$1;
(statearr_23876_23903[(2)] = inst_23866);

(statearr_23876_23903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (13))){
var inst_23859 = cljs.core.async.close_BANG_.call(null,out);
var state_23870__$1 = state_23870;
var statearr_23877_23904 = state_23870__$1;
(statearr_23877_23904[(2)] = inst_23859);

(statearr_23877_23904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (6))){
var state_23870__$1 = state_23870;
var statearr_23878_23905 = state_23870__$1;
(statearr_23878_23905[(2)] = null);

(statearr_23878_23905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (3))){
var inst_23868 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23870__$1,inst_23868);
} else {
if((state_val_23871 === (12))){
var inst_23856 = (state_23870[(8)]);
var inst_23856__$1 = (state_23870[(2)]);
var inst_23857 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23856__$1);
var state_23870__$1 = (function (){var statearr_23879 = state_23870;
(statearr_23879[(8)] = inst_23856__$1);

return statearr_23879;
})();
if(cljs.core.truth_(inst_23857)){
var statearr_23880_23906 = state_23870__$1;
(statearr_23880_23906[(1)] = (13));

} else {
var statearr_23881_23907 = state_23870__$1;
(statearr_23881_23907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (2))){
var inst_23833 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23834 = (0);
var state_23870__$1 = (function (){var statearr_23882 = state_23870;
(statearr_23882[(9)] = inst_23833);

(statearr_23882[(7)] = inst_23834);

return statearr_23882;
})();
var statearr_23883_23908 = state_23870__$1;
(statearr_23883_23908[(2)] = null);

(statearr_23883_23908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (11))){
var inst_23834 = (state_23870[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23870,(10),Object,null,(9));
var inst_23843 = chs__$1.call(null,inst_23834);
var inst_23844 = done.call(null,inst_23834);
var inst_23845 = cljs.core.async.take_BANG_.call(null,inst_23843,inst_23844);
var state_23870__$1 = state_23870;
var statearr_23884_23909 = state_23870__$1;
(statearr_23884_23909[(2)] = inst_23845);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (9))){
var inst_23834 = (state_23870[(7)]);
var inst_23847 = (state_23870[(2)]);
var inst_23848 = (inst_23834 + (1));
var inst_23834__$1 = inst_23848;
var state_23870__$1 = (function (){var statearr_23885 = state_23870;
(statearr_23885[(7)] = inst_23834__$1);

(statearr_23885[(10)] = inst_23847);

return statearr_23885;
})();
var statearr_23886_23910 = state_23870__$1;
(statearr_23886_23910[(2)] = null);

(statearr_23886_23910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (5))){
var inst_23854 = (state_23870[(2)]);
var state_23870__$1 = (function (){var statearr_23887 = state_23870;
(statearr_23887[(11)] = inst_23854);

return statearr_23887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23870__$1,(12),dchan);
} else {
if((state_val_23871 === (14))){
var inst_23856 = (state_23870[(8)]);
var inst_23861 = cljs.core.apply.call(null,f,inst_23856);
var state_23870__$1 = state_23870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23870__$1,(16),out,inst_23861);
} else {
if((state_val_23871 === (16))){
var inst_23863 = (state_23870[(2)]);
var state_23870__$1 = (function (){var statearr_23888 = state_23870;
(statearr_23888[(12)] = inst_23863);

return statearr_23888;
})();
var statearr_23889_23911 = state_23870__$1;
(statearr_23889_23911[(2)] = null);

(statearr_23889_23911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (10))){
var inst_23838 = (state_23870[(2)]);
var inst_23839 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23870__$1 = (function (){var statearr_23890 = state_23870;
(statearr_23890[(13)] = inst_23838);

return statearr_23890;
})();
var statearr_23891_23912 = state_23870__$1;
(statearr_23891_23912[(2)] = inst_23839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23871 === (8))){
var inst_23852 = (state_23870[(2)]);
var state_23870__$1 = state_23870;
var statearr_23892_23913 = state_23870__$1;
(statearr_23892_23913[(2)] = inst_23852);

(statearr_23892_23913[(1)] = (5));


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
});})(c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22464__auto__,c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_23893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23893[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_23893[(1)] = (1));

return statearr_23893;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_23870){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23894){if((e23894 instanceof Object)){
var ex__22468__auto__ = e23894;
var statearr_23895_23914 = state_23870;
(statearr_23895_23914[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23915 = state_23870;
state_23870 = G__23915;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_23870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_23870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22561__auto__ = (function (){var statearr_23896 = f__22560__auto__.call(null);
(statearr_23896[(6)] = c__22559__auto___23898);

return statearr_23896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23898,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__23918 = arguments.length;
switch (G__23918) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___23972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___23972,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___23972,out){
return (function (state_23950){
var state_val_23951 = (state_23950[(1)]);
if((state_val_23951 === (7))){
var inst_23930 = (state_23950[(7)]);
var inst_23929 = (state_23950[(8)]);
var inst_23929__$1 = (state_23950[(2)]);
var inst_23930__$1 = cljs.core.nth.call(null,inst_23929__$1,(0),null);
var inst_23931 = cljs.core.nth.call(null,inst_23929__$1,(1),null);
var inst_23932 = (inst_23930__$1 == null);
var state_23950__$1 = (function (){var statearr_23952 = state_23950;
(statearr_23952[(7)] = inst_23930__$1);

(statearr_23952[(9)] = inst_23931);

(statearr_23952[(8)] = inst_23929__$1);

return statearr_23952;
})();
if(cljs.core.truth_(inst_23932)){
var statearr_23953_23973 = state_23950__$1;
(statearr_23953_23973[(1)] = (8));

} else {
var statearr_23954_23974 = state_23950__$1;
(statearr_23954_23974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (1))){
var inst_23919 = cljs.core.vec.call(null,chs);
var inst_23920 = inst_23919;
var state_23950__$1 = (function (){var statearr_23955 = state_23950;
(statearr_23955[(10)] = inst_23920);

return statearr_23955;
})();
var statearr_23956_23975 = state_23950__$1;
(statearr_23956_23975[(2)] = null);

(statearr_23956_23975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (4))){
var inst_23920 = (state_23950[(10)]);
var state_23950__$1 = state_23950;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23950__$1,(7),inst_23920);
} else {
if((state_val_23951 === (6))){
var inst_23946 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
var statearr_23957_23976 = state_23950__$1;
(statearr_23957_23976[(2)] = inst_23946);

(statearr_23957_23976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (3))){
var inst_23948 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23950__$1,inst_23948);
} else {
if((state_val_23951 === (2))){
var inst_23920 = (state_23950[(10)]);
var inst_23922 = cljs.core.count.call(null,inst_23920);
var inst_23923 = (inst_23922 > (0));
var state_23950__$1 = state_23950;
if(cljs.core.truth_(inst_23923)){
var statearr_23959_23977 = state_23950__$1;
(statearr_23959_23977[(1)] = (4));

} else {
var statearr_23960_23978 = state_23950__$1;
(statearr_23960_23978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (11))){
var inst_23920 = (state_23950[(10)]);
var inst_23939 = (state_23950[(2)]);
var tmp23958 = inst_23920;
var inst_23920__$1 = tmp23958;
var state_23950__$1 = (function (){var statearr_23961 = state_23950;
(statearr_23961[(11)] = inst_23939);

(statearr_23961[(10)] = inst_23920__$1);

return statearr_23961;
})();
var statearr_23962_23979 = state_23950__$1;
(statearr_23962_23979[(2)] = null);

(statearr_23962_23979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (9))){
var inst_23930 = (state_23950[(7)]);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23950__$1,(11),out,inst_23930);
} else {
if((state_val_23951 === (5))){
var inst_23944 = cljs.core.async.close_BANG_.call(null,out);
var state_23950__$1 = state_23950;
var statearr_23963_23980 = state_23950__$1;
(statearr_23963_23980[(2)] = inst_23944);

(statearr_23963_23980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (10))){
var inst_23942 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
var statearr_23964_23981 = state_23950__$1;
(statearr_23964_23981[(2)] = inst_23942);

(statearr_23964_23981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (8))){
var inst_23930 = (state_23950[(7)]);
var inst_23931 = (state_23950[(9)]);
var inst_23929 = (state_23950[(8)]);
var inst_23920 = (state_23950[(10)]);
var inst_23934 = (function (){var cs = inst_23920;
var vec__23925 = inst_23929;
var v = inst_23930;
var c = inst_23931;
return ((function (cs,vec__23925,v,c,inst_23930,inst_23931,inst_23929,inst_23920,state_val_23951,c__22559__auto___23972,out){
return (function (p1__23916_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23916_SHARP_);
});
;})(cs,vec__23925,v,c,inst_23930,inst_23931,inst_23929,inst_23920,state_val_23951,c__22559__auto___23972,out))
})();
var inst_23935 = cljs.core.filterv.call(null,inst_23934,inst_23920);
var inst_23920__$1 = inst_23935;
var state_23950__$1 = (function (){var statearr_23965 = state_23950;
(statearr_23965[(10)] = inst_23920__$1);

return statearr_23965;
})();
var statearr_23966_23982 = state_23950__$1;
(statearr_23966_23982[(2)] = null);

(statearr_23966_23982[(1)] = (2));


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
});})(c__22559__auto___23972,out))
;
return ((function (switch__22464__auto__,c__22559__auto___23972,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_23950){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_23950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__22468__auto__ = e23968;
var statearr_23969_23983 = state_23950;
(statearr_23969_23983[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23984 = state_23950;
state_23950 = G__23984;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_23950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_23950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___23972,out))
})();
var state__22561__auto__ = (function (){var statearr_23970 = f__22560__auto__.call(null);
(statearr_23970[(6)] = c__22559__auto___23972);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___23972,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23986 = arguments.length;
switch (G__23986) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___24031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___24031,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___24031,out){
return (function (state_24010){
var state_val_24011 = (state_24010[(1)]);
if((state_val_24011 === (7))){
var inst_23992 = (state_24010[(7)]);
var inst_23992__$1 = (state_24010[(2)]);
var inst_23993 = (inst_23992__$1 == null);
var inst_23994 = cljs.core.not.call(null,inst_23993);
var state_24010__$1 = (function (){var statearr_24012 = state_24010;
(statearr_24012[(7)] = inst_23992__$1);

return statearr_24012;
})();
if(inst_23994){
var statearr_24013_24032 = state_24010__$1;
(statearr_24013_24032[(1)] = (8));

} else {
var statearr_24014_24033 = state_24010__$1;
(statearr_24014_24033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (1))){
var inst_23987 = (0);
var state_24010__$1 = (function (){var statearr_24015 = state_24010;
(statearr_24015[(8)] = inst_23987);

return statearr_24015;
})();
var statearr_24016_24034 = state_24010__$1;
(statearr_24016_24034[(2)] = null);

(statearr_24016_24034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (4))){
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24010__$1,(7),ch);
} else {
if((state_val_24011 === (6))){
var inst_24005 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24017_24035 = state_24010__$1;
(statearr_24017_24035[(2)] = inst_24005);

(statearr_24017_24035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (3))){
var inst_24007 = (state_24010[(2)]);
var inst_24008 = cljs.core.async.close_BANG_.call(null,out);
var state_24010__$1 = (function (){var statearr_24018 = state_24010;
(statearr_24018[(9)] = inst_24007);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24010__$1,inst_24008);
} else {
if((state_val_24011 === (2))){
var inst_23987 = (state_24010[(8)]);
var inst_23989 = (inst_23987 < n);
var state_24010__$1 = state_24010;
if(cljs.core.truth_(inst_23989)){
var statearr_24019_24036 = state_24010__$1;
(statearr_24019_24036[(1)] = (4));

} else {
var statearr_24020_24037 = state_24010__$1;
(statearr_24020_24037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (11))){
var inst_23987 = (state_24010[(8)]);
var inst_23997 = (state_24010[(2)]);
var inst_23998 = (inst_23987 + (1));
var inst_23987__$1 = inst_23998;
var state_24010__$1 = (function (){var statearr_24021 = state_24010;
(statearr_24021[(8)] = inst_23987__$1);

(statearr_24021[(10)] = inst_23997);

return statearr_24021;
})();
var statearr_24022_24038 = state_24010__$1;
(statearr_24022_24038[(2)] = null);

(statearr_24022_24038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (9))){
var state_24010__$1 = state_24010;
var statearr_24023_24039 = state_24010__$1;
(statearr_24023_24039[(2)] = null);

(statearr_24023_24039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (5))){
var state_24010__$1 = state_24010;
var statearr_24024_24040 = state_24010__$1;
(statearr_24024_24040[(2)] = null);

(statearr_24024_24040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (10))){
var inst_24002 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24025_24041 = state_24010__$1;
(statearr_24025_24041[(2)] = inst_24002);

(statearr_24025_24041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (8))){
var inst_23992 = (state_24010[(7)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24010__$1,(11),out,inst_23992);
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
});})(c__22559__auto___24031,out))
;
return ((function (switch__22464__auto__,c__22559__auto___24031,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_24026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24026[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_24026[(1)] = (1));

return statearr_24026;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_24010){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24027){if((e24027 instanceof Object)){
var ex__22468__auto__ = e24027;
var statearr_24028_24042 = state_24010;
(statearr_24028_24042[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24043 = state_24010;
state_24010 = G__24043;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___24031,out))
})();
var state__22561__auto__ = (function (){var statearr_24029 = f__22560__auto__.call(null);
(statearr_24029[(6)] = c__22559__auto___24031);

return statearr_24029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___24031,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24045 = (function (f,ch,meta24046){
this.f = f;
this.ch = ch;
this.meta24046 = meta24046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24047,meta24046__$1){
var self__ = this;
var _24047__$1 = this;
return (new cljs.core.async.t_cljs$core$async24045(self__.f,self__.ch,meta24046__$1));
});

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24047){
var self__ = this;
var _24047__$1 = this;
return self__.meta24046;
});

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24048 = (function (f,ch,meta24046,_,fn1,meta24049){
this.f = f;
this.ch = ch;
this.meta24046 = meta24046;
this._ = _;
this.fn1 = fn1;
this.meta24049 = meta24049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24050,meta24049__$1){
var self__ = this;
var _24050__$1 = this;
return (new cljs.core.async.t_cljs$core$async24048(self__.f,self__.ch,self__.meta24046,self__._,self__.fn1,meta24049__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24050){
var self__ = this;
var _24050__$1 = this;
return self__.meta24049;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24044_SHARP_){
return f1.call(null,(((p1__24044_SHARP_ == null))?null:self__.f.call(null,p1__24044_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24046","meta24046",-1748618001,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24045","cljs.core.async/t_cljs$core$async24045",-1502132613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24049","meta24049",-1374913781,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24048";

cljs.core.async.t_cljs$core$async24048.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24048");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24048.
 */
cljs.core.async.__GT_t_cljs$core$async24048 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24048(f__$1,ch__$1,meta24046__$1,___$2,fn1__$1,meta24049){
return (new cljs.core.async.t_cljs$core$async24048(f__$1,ch__$1,meta24046__$1,___$2,fn1__$1,meta24049));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24048(self__.f,self__.ch,self__.meta24046,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24046","meta24046",-1748618001,null)], null);
});

cljs.core.async.t_cljs$core$async24045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24045";

cljs.core.async.t_cljs$core$async24045.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24045");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24045.
 */
cljs.core.async.__GT_t_cljs$core$async24045 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24045(f__$1,ch__$1,meta24046){
return (new cljs.core.async.t_cljs$core$async24045(f__$1,ch__$1,meta24046));
});

}

return (new cljs.core.async.t_cljs$core$async24045(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24051 = (function (f,ch,meta24052){
this.f = f;
this.ch = ch;
this.meta24052 = meta24052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24053,meta24052__$1){
var self__ = this;
var _24053__$1 = this;
return (new cljs.core.async.t_cljs$core$async24051(self__.f,self__.ch,meta24052__$1));
});

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24053){
var self__ = this;
var _24053__$1 = this;
return self__.meta24052;
});

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24052","meta24052",878447799,null)], null);
});

cljs.core.async.t_cljs$core$async24051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24051";

cljs.core.async.t_cljs$core$async24051.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24051");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24051.
 */
cljs.core.async.__GT_t_cljs$core$async24051 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24051(f__$1,ch__$1,meta24052){
return (new cljs.core.async.t_cljs$core$async24051(f__$1,ch__$1,meta24052));
});

}

return (new cljs.core.async.t_cljs$core$async24051(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24054 = (function (p,ch,meta24055){
this.p = p;
this.ch = ch;
this.meta24055 = meta24055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24056,meta24055__$1){
var self__ = this;
var _24056__$1 = this;
return (new cljs.core.async.t_cljs$core$async24054(self__.p,self__.ch,meta24055__$1));
});

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24056){
var self__ = this;
var _24056__$1 = this;
return self__.meta24055;
});

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24055","meta24055",1626731935,null)], null);
});

cljs.core.async.t_cljs$core$async24054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24054";

cljs.core.async.t_cljs$core$async24054.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24054");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24054.
 */
cljs.core.async.__GT_t_cljs$core$async24054 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24054(p__$1,ch__$1,meta24055){
return (new cljs.core.async.t_cljs$core$async24054(p__$1,ch__$1,meta24055));
});

}

return (new cljs.core.async.t_cljs$core$async24054(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24058 = arguments.length;
switch (G__24058) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___24098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___24098,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___24098,out){
return (function (state_24079){
var state_val_24080 = (state_24079[(1)]);
if((state_val_24080 === (7))){
var inst_24075 = (state_24079[(2)]);
var state_24079__$1 = state_24079;
var statearr_24081_24099 = state_24079__$1;
(statearr_24081_24099[(2)] = inst_24075);

(statearr_24081_24099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (1))){
var state_24079__$1 = state_24079;
var statearr_24082_24100 = state_24079__$1;
(statearr_24082_24100[(2)] = null);

(statearr_24082_24100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (4))){
var inst_24061 = (state_24079[(7)]);
var inst_24061__$1 = (state_24079[(2)]);
var inst_24062 = (inst_24061__$1 == null);
var state_24079__$1 = (function (){var statearr_24083 = state_24079;
(statearr_24083[(7)] = inst_24061__$1);

return statearr_24083;
})();
if(cljs.core.truth_(inst_24062)){
var statearr_24084_24101 = state_24079__$1;
(statearr_24084_24101[(1)] = (5));

} else {
var statearr_24085_24102 = state_24079__$1;
(statearr_24085_24102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (6))){
var inst_24061 = (state_24079[(7)]);
var inst_24066 = p.call(null,inst_24061);
var state_24079__$1 = state_24079;
if(cljs.core.truth_(inst_24066)){
var statearr_24086_24103 = state_24079__$1;
(statearr_24086_24103[(1)] = (8));

} else {
var statearr_24087_24104 = state_24079__$1;
(statearr_24087_24104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (3))){
var inst_24077 = (state_24079[(2)]);
var state_24079__$1 = state_24079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24079__$1,inst_24077);
} else {
if((state_val_24080 === (2))){
var state_24079__$1 = state_24079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24079__$1,(4),ch);
} else {
if((state_val_24080 === (11))){
var inst_24069 = (state_24079[(2)]);
var state_24079__$1 = state_24079;
var statearr_24088_24105 = state_24079__$1;
(statearr_24088_24105[(2)] = inst_24069);

(statearr_24088_24105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (9))){
var state_24079__$1 = state_24079;
var statearr_24089_24106 = state_24079__$1;
(statearr_24089_24106[(2)] = null);

(statearr_24089_24106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (5))){
var inst_24064 = cljs.core.async.close_BANG_.call(null,out);
var state_24079__$1 = state_24079;
var statearr_24090_24107 = state_24079__$1;
(statearr_24090_24107[(2)] = inst_24064);

(statearr_24090_24107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (10))){
var inst_24072 = (state_24079[(2)]);
var state_24079__$1 = (function (){var statearr_24091 = state_24079;
(statearr_24091[(8)] = inst_24072);

return statearr_24091;
})();
var statearr_24092_24108 = state_24079__$1;
(statearr_24092_24108[(2)] = null);

(statearr_24092_24108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24080 === (8))){
var inst_24061 = (state_24079[(7)]);
var state_24079__$1 = state_24079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24079__$1,(11),out,inst_24061);
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
});})(c__22559__auto___24098,out))
;
return ((function (switch__22464__auto__,c__22559__auto___24098,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_24093 = [null,null,null,null,null,null,null,null,null];
(statearr_24093[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_24093[(1)] = (1));

return statearr_24093;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_24079){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24094){if((e24094 instanceof Object)){
var ex__22468__auto__ = e24094;
var statearr_24095_24109 = state_24079;
(statearr_24095_24109[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24110 = state_24079;
state_24079 = G__24110;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_24079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_24079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___24098,out))
})();
var state__22561__auto__ = (function (){var statearr_24096 = f__22560__auto__.call(null);
(statearr_24096[(6)] = c__22559__auto___24098);

return statearr_24096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___24098,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24112 = arguments.length;
switch (G__24112) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24215 = state_24175__$1;
(statearr_24177_24215[(2)] = inst_24171);

(statearr_24177_24215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (20))){
var inst_24141 = (state_24175[(7)]);
var inst_24152 = (state_24175[(2)]);
var inst_24153 = cljs.core.next.call(null,inst_24141);
var inst_24127 = inst_24153;
var inst_24128 = null;
var inst_24129 = (0);
var inst_24130 = (0);
var state_24175__$1 = (function (){var statearr_24178 = state_24175;
(statearr_24178[(8)] = inst_24152);

(statearr_24178[(9)] = inst_24127);

(statearr_24178[(10)] = inst_24128);

(statearr_24178[(11)] = inst_24129);

(statearr_24178[(12)] = inst_24130);

return statearr_24178;
})();
var statearr_24179_24216 = state_24175__$1;
(statearr_24179_24216[(2)] = null);

(statearr_24179_24216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24180_24217 = state_24175__$1;
(statearr_24180_24217[(2)] = null);

(statearr_24180_24217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (4))){
var inst_24116 = (state_24175[(13)]);
var inst_24116__$1 = (state_24175[(2)]);
var inst_24117 = (inst_24116__$1 == null);
var state_24175__$1 = (function (){var statearr_24181 = state_24175;
(statearr_24181[(13)] = inst_24116__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24117)){
var statearr_24182_24218 = state_24175__$1;
(statearr_24182_24218[(1)] = (5));

} else {
var statearr_24183_24219 = state_24175__$1;
(statearr_24183_24219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (15))){
var state_24175__$1 = state_24175;
var statearr_24187_24220 = state_24175__$1;
(statearr_24187_24220[(2)] = null);

(statearr_24187_24220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (21))){
var state_24175__$1 = state_24175;
var statearr_24188_24221 = state_24175__$1;
(statearr_24188_24221[(2)] = null);

(statearr_24188_24221[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (13))){
var inst_24127 = (state_24175[(9)]);
var inst_24128 = (state_24175[(10)]);
var inst_24129 = (state_24175[(11)]);
var inst_24130 = (state_24175[(12)]);
var inst_24137 = (state_24175[(2)]);
var inst_24138 = (inst_24130 + (1));
var tmp24184 = inst_24127;
var tmp24185 = inst_24128;
var tmp24186 = inst_24129;
var inst_24127__$1 = tmp24184;
var inst_24128__$1 = tmp24185;
var inst_24129__$1 = tmp24186;
var inst_24130__$1 = inst_24138;
var state_24175__$1 = (function (){var statearr_24189 = state_24175;
(statearr_24189[(14)] = inst_24137);

(statearr_24189[(9)] = inst_24127__$1);

(statearr_24189[(10)] = inst_24128__$1);

(statearr_24189[(11)] = inst_24129__$1);

(statearr_24189[(12)] = inst_24130__$1);

return statearr_24189;
})();
var statearr_24190_24222 = state_24175__$1;
(statearr_24190_24222[(2)] = null);

(statearr_24190_24222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (22))){
var state_24175__$1 = state_24175;
var statearr_24191_24223 = state_24175__$1;
(statearr_24191_24223[(2)] = null);

(statearr_24191_24223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (6))){
var inst_24116 = (state_24175[(13)]);
var inst_24125 = f.call(null,inst_24116);
var inst_24126 = cljs.core.seq.call(null,inst_24125);
var inst_24127 = inst_24126;
var inst_24128 = null;
var inst_24129 = (0);
var inst_24130 = (0);
var state_24175__$1 = (function (){var statearr_24192 = state_24175;
(statearr_24192[(9)] = inst_24127);

(statearr_24192[(10)] = inst_24128);

(statearr_24192[(11)] = inst_24129);

(statearr_24192[(12)] = inst_24130);

return statearr_24192;
})();
var statearr_24193_24224 = state_24175__$1;
(statearr_24193_24224[(2)] = null);

(statearr_24193_24224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (17))){
var inst_24141 = (state_24175[(7)]);
var inst_24145 = cljs.core.chunk_first.call(null,inst_24141);
var inst_24146 = cljs.core.chunk_rest.call(null,inst_24141);
var inst_24147 = cljs.core.count.call(null,inst_24145);
var inst_24127 = inst_24146;
var inst_24128 = inst_24145;
var inst_24129 = inst_24147;
var inst_24130 = (0);
var state_24175__$1 = (function (){var statearr_24194 = state_24175;
(statearr_24194[(9)] = inst_24127);

(statearr_24194[(10)] = inst_24128);

(statearr_24194[(11)] = inst_24129);

(statearr_24194[(12)] = inst_24130);

return statearr_24194;
})();
var statearr_24195_24225 = state_24175__$1;
(statearr_24195_24225[(2)] = null);

(statearr_24195_24225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (12))){
var inst_24161 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24196_24226 = state_24175__$1;
(statearr_24196_24226[(2)] = inst_24161);

(statearr_24196_24226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(4),in$);
} else {
if((state_val_24176 === (23))){
var inst_24169 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24197_24227 = state_24175__$1;
(statearr_24197_24227[(2)] = inst_24169);

(statearr_24197_24227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (19))){
var inst_24156 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24198_24228 = state_24175__$1;
(statearr_24198_24228[(2)] = inst_24156);

(statearr_24198_24228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (11))){
var inst_24127 = (state_24175[(9)]);
var inst_24141 = (state_24175[(7)]);
var inst_24141__$1 = cljs.core.seq.call(null,inst_24127);
var state_24175__$1 = (function (){var statearr_24199 = state_24175;
(statearr_24199[(7)] = inst_24141__$1);

return statearr_24199;
})();
if(inst_24141__$1){
var statearr_24200_24229 = state_24175__$1;
(statearr_24200_24229[(1)] = (14));

} else {
var statearr_24201_24230 = state_24175__$1;
(statearr_24201_24230[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (9))){
var inst_24163 = (state_24175[(2)]);
var inst_24164 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24175__$1 = (function (){var statearr_24202 = state_24175;
(statearr_24202[(15)] = inst_24163);

return statearr_24202;
})();
if(cljs.core.truth_(inst_24164)){
var statearr_24203_24231 = state_24175__$1;
(statearr_24203_24231[(1)] = (21));

} else {
var statearr_24204_24232 = state_24175__$1;
(statearr_24204_24232[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (5))){
var inst_24119 = cljs.core.async.close_BANG_.call(null,out);
var state_24175__$1 = state_24175;
var statearr_24205_24233 = state_24175__$1;
(statearr_24205_24233[(2)] = inst_24119);

(statearr_24205_24233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (14))){
var inst_24141 = (state_24175[(7)]);
var inst_24143 = cljs.core.chunked_seq_QMARK_.call(null,inst_24141);
var state_24175__$1 = state_24175;
if(inst_24143){
var statearr_24206_24234 = state_24175__$1;
(statearr_24206_24234[(1)] = (17));

} else {
var statearr_24207_24235 = state_24175__$1;
(statearr_24207_24235[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (16))){
var inst_24159 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24208_24236 = state_24175__$1;
(statearr_24208_24236[(2)] = inst_24159);

(statearr_24208_24236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (10))){
var inst_24128 = (state_24175[(10)]);
var inst_24130 = (state_24175[(12)]);
var inst_24135 = cljs.core._nth.call(null,inst_24128,inst_24130);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24175__$1,(13),out,inst_24135);
} else {
if((state_val_24176 === (18))){
var inst_24141 = (state_24175[(7)]);
var inst_24150 = cljs.core.first.call(null,inst_24141);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24175__$1,(20),out,inst_24150);
} else {
if((state_val_24176 === (8))){
var inst_24129 = (state_24175[(11)]);
var inst_24130 = (state_24175[(12)]);
var inst_24132 = (inst_24130 < inst_24129);
var inst_24133 = inst_24132;
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24133)){
var statearr_24209_24237 = state_24175__$1;
(statearr_24209_24237[(1)] = (10));

} else {
var statearr_24210_24238 = state_24175__$1;
(statearr_24210_24238[(1)] = (11));

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
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____1 = (function (state_24175){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__22468__auto__ = e24212;
var statearr_24213_24239 = state_24175;
(statearr_24213_24239[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24240 = state_24175;
state_24175 = G__24240;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22465__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_24214 = f__22560__auto__.call(null);
(statearr_24214[(6)] = c__22559__auto__);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24242 = arguments.length;
switch (G__24242) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24245 = arguments.length;
switch (G__24245) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24248 = arguments.length;
switch (G__24248) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___24295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___24295,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___24295,out){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (7))){
var inst_24267 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24274_24296 = state_24272__$1;
(statearr_24274_24296[(2)] = inst_24267);

(statearr_24274_24296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (1))){
var inst_24249 = null;
var state_24272__$1 = (function (){var statearr_24275 = state_24272;
(statearr_24275[(7)] = inst_24249);

return statearr_24275;
})();
var statearr_24276_24297 = state_24272__$1;
(statearr_24276_24297[(2)] = null);

(statearr_24276_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (4))){
var inst_24252 = (state_24272[(8)]);
var inst_24252__$1 = (state_24272[(2)]);
var inst_24253 = (inst_24252__$1 == null);
var inst_24254 = cljs.core.not.call(null,inst_24253);
var state_24272__$1 = (function (){var statearr_24277 = state_24272;
(statearr_24277[(8)] = inst_24252__$1);

return statearr_24277;
})();
if(inst_24254){
var statearr_24278_24298 = state_24272__$1;
(statearr_24278_24298[(1)] = (5));

} else {
var statearr_24279_24299 = state_24272__$1;
(statearr_24279_24299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (6))){
var state_24272__$1 = state_24272;
var statearr_24280_24300 = state_24272__$1;
(statearr_24280_24300[(2)] = null);

(statearr_24280_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (3))){
var inst_24269 = (state_24272[(2)]);
var inst_24270 = cljs.core.async.close_BANG_.call(null,out);
var state_24272__$1 = (function (){var statearr_24281 = state_24272;
(statearr_24281[(9)] = inst_24269);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
if((state_val_24273 === (2))){
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(4),ch);
} else {
if((state_val_24273 === (11))){
var inst_24252 = (state_24272[(8)]);
var inst_24261 = (state_24272[(2)]);
var inst_24249 = inst_24252;
var state_24272__$1 = (function (){var statearr_24282 = state_24272;
(statearr_24282[(10)] = inst_24261);

(statearr_24282[(7)] = inst_24249);

return statearr_24282;
})();
var statearr_24283_24301 = state_24272__$1;
(statearr_24283_24301[(2)] = null);

(statearr_24283_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (9))){
var inst_24252 = (state_24272[(8)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24272__$1,(11),out,inst_24252);
} else {
if((state_val_24273 === (5))){
var inst_24252 = (state_24272[(8)]);
var inst_24249 = (state_24272[(7)]);
var inst_24256 = cljs.core._EQ_.call(null,inst_24252,inst_24249);
var state_24272__$1 = state_24272;
if(inst_24256){
var statearr_24285_24302 = state_24272__$1;
(statearr_24285_24302[(1)] = (8));

} else {
var statearr_24286_24303 = state_24272__$1;
(statearr_24286_24303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (10))){
var inst_24264 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
var statearr_24287_24304 = state_24272__$1;
(statearr_24287_24304[(2)] = inst_24264);

(statearr_24287_24304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24273 === (8))){
var inst_24249 = (state_24272[(7)]);
var tmp24284 = inst_24249;
var inst_24249__$1 = tmp24284;
var state_24272__$1 = (function (){var statearr_24288 = state_24272;
(statearr_24288[(7)] = inst_24249__$1);

return statearr_24288;
})();
var statearr_24289_24305 = state_24272__$1;
(statearr_24289_24305[(2)] = null);

(statearr_24289_24305[(1)] = (2));


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
});})(c__22559__auto___24295,out))
;
return ((function (switch__22464__auto__,c__22559__auto___24295,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_24290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24290[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_24290[(1)] = (1));

return statearr_24290;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_24272){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24291){if((e24291 instanceof Object)){
var ex__22468__auto__ = e24291;
var statearr_24292_24306 = state_24272;
(statearr_24292_24306[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24272;
state_24272 = G__24307;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___24295,out))
})();
var state__22561__auto__ = (function (){var statearr_24293 = f__22560__auto__.call(null);
(statearr_24293[(6)] = c__22559__auto___24295);

return statearr_24293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___24295,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24309 = arguments.length;
switch (G__24309) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___24375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___24375,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___24375,out){
return (function (state_24347){
var state_val_24348 = (state_24347[(1)]);
if((state_val_24348 === (7))){
var inst_24343 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24349_24376 = state_24347__$1;
(statearr_24349_24376[(2)] = inst_24343);

(statearr_24349_24376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (1))){
var inst_24310 = (new Array(n));
var inst_24311 = inst_24310;
var inst_24312 = (0);
var state_24347__$1 = (function (){var statearr_24350 = state_24347;
(statearr_24350[(7)] = inst_24311);

(statearr_24350[(8)] = inst_24312);

return statearr_24350;
})();
var statearr_24351_24377 = state_24347__$1;
(statearr_24351_24377[(2)] = null);

(statearr_24351_24377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (4))){
var inst_24315 = (state_24347[(9)]);
var inst_24315__$1 = (state_24347[(2)]);
var inst_24316 = (inst_24315__$1 == null);
var inst_24317 = cljs.core.not.call(null,inst_24316);
var state_24347__$1 = (function (){var statearr_24352 = state_24347;
(statearr_24352[(9)] = inst_24315__$1);

return statearr_24352;
})();
if(inst_24317){
var statearr_24353_24378 = state_24347__$1;
(statearr_24353_24378[(1)] = (5));

} else {
var statearr_24354_24379 = state_24347__$1;
(statearr_24354_24379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (15))){
var inst_24337 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24355_24380 = state_24347__$1;
(statearr_24355_24380[(2)] = inst_24337);

(statearr_24355_24380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (13))){
var state_24347__$1 = state_24347;
var statearr_24356_24381 = state_24347__$1;
(statearr_24356_24381[(2)] = null);

(statearr_24356_24381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (6))){
var inst_24312 = (state_24347[(8)]);
var inst_24333 = (inst_24312 > (0));
var state_24347__$1 = state_24347;
if(cljs.core.truth_(inst_24333)){
var statearr_24357_24382 = state_24347__$1;
(statearr_24357_24382[(1)] = (12));

} else {
var statearr_24358_24383 = state_24347__$1;
(statearr_24358_24383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (3))){
var inst_24345 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24347__$1,inst_24345);
} else {
if((state_val_24348 === (12))){
var inst_24311 = (state_24347[(7)]);
var inst_24335 = cljs.core.vec.call(null,inst_24311);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24347__$1,(15),out,inst_24335);
} else {
if((state_val_24348 === (2))){
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24347__$1,(4),ch);
} else {
if((state_val_24348 === (11))){
var inst_24327 = (state_24347[(2)]);
var inst_24328 = (new Array(n));
var inst_24311 = inst_24328;
var inst_24312 = (0);
var state_24347__$1 = (function (){var statearr_24359 = state_24347;
(statearr_24359[(10)] = inst_24327);

(statearr_24359[(7)] = inst_24311);

(statearr_24359[(8)] = inst_24312);

return statearr_24359;
})();
var statearr_24360_24384 = state_24347__$1;
(statearr_24360_24384[(2)] = null);

(statearr_24360_24384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (9))){
var inst_24311 = (state_24347[(7)]);
var inst_24325 = cljs.core.vec.call(null,inst_24311);
var state_24347__$1 = state_24347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24347__$1,(11),out,inst_24325);
} else {
if((state_val_24348 === (5))){
var inst_24320 = (state_24347[(11)]);
var inst_24311 = (state_24347[(7)]);
var inst_24312 = (state_24347[(8)]);
var inst_24315 = (state_24347[(9)]);
var inst_24319 = (inst_24311[inst_24312] = inst_24315);
var inst_24320__$1 = (inst_24312 + (1));
var inst_24321 = (inst_24320__$1 < n);
var state_24347__$1 = (function (){var statearr_24361 = state_24347;
(statearr_24361[(11)] = inst_24320__$1);

(statearr_24361[(12)] = inst_24319);

return statearr_24361;
})();
if(cljs.core.truth_(inst_24321)){
var statearr_24362_24385 = state_24347__$1;
(statearr_24362_24385[(1)] = (8));

} else {
var statearr_24363_24386 = state_24347__$1;
(statearr_24363_24386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (14))){
var inst_24340 = (state_24347[(2)]);
var inst_24341 = cljs.core.async.close_BANG_.call(null,out);
var state_24347__$1 = (function (){var statearr_24365 = state_24347;
(statearr_24365[(13)] = inst_24340);

return statearr_24365;
})();
var statearr_24366_24387 = state_24347__$1;
(statearr_24366_24387[(2)] = inst_24341);

(statearr_24366_24387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (10))){
var inst_24331 = (state_24347[(2)]);
var state_24347__$1 = state_24347;
var statearr_24367_24388 = state_24347__$1;
(statearr_24367_24388[(2)] = inst_24331);

(statearr_24367_24388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24348 === (8))){
var inst_24320 = (state_24347[(11)]);
var inst_24311 = (state_24347[(7)]);
var tmp24364 = inst_24311;
var inst_24311__$1 = tmp24364;
var inst_24312 = inst_24320;
var state_24347__$1 = (function (){var statearr_24368 = state_24347;
(statearr_24368[(7)] = inst_24311__$1);

(statearr_24368[(8)] = inst_24312);

return statearr_24368;
})();
var statearr_24369_24389 = state_24347__$1;
(statearr_24369_24389[(2)] = null);

(statearr_24369_24389[(1)] = (2));


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
});})(c__22559__auto___24375,out))
;
return ((function (switch__22464__auto__,c__22559__auto___24375,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_24370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24370[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_24370[(1)] = (1));

return statearr_24370;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_24347){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24371){if((e24371 instanceof Object)){
var ex__22468__auto__ = e24371;
var statearr_24372_24390 = state_24347;
(statearr_24372_24390[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24391 = state_24347;
state_24347 = G__24391;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_24347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_24347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___24375,out))
})();
var state__22561__auto__ = (function (){var statearr_24373 = f__22560__auto__.call(null);
(statearr_24373[(6)] = c__22559__auto___24375);

return statearr_24373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___24375,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24393 = arguments.length;
switch (G__24393) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22559__auto___24463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___24463,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___24463,out){
return (function (state_24435){
var state_val_24436 = (state_24435[(1)]);
if((state_val_24436 === (7))){
var inst_24431 = (state_24435[(2)]);
var state_24435__$1 = state_24435;
var statearr_24437_24464 = state_24435__$1;
(statearr_24437_24464[(2)] = inst_24431);

(statearr_24437_24464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (1))){
var inst_24394 = [];
var inst_24395 = inst_24394;
var inst_24396 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24435__$1 = (function (){var statearr_24438 = state_24435;
(statearr_24438[(7)] = inst_24396);

(statearr_24438[(8)] = inst_24395);

return statearr_24438;
})();
var statearr_24439_24465 = state_24435__$1;
(statearr_24439_24465[(2)] = null);

(statearr_24439_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (4))){
var inst_24399 = (state_24435[(9)]);
var inst_24399__$1 = (state_24435[(2)]);
var inst_24400 = (inst_24399__$1 == null);
var inst_24401 = cljs.core.not.call(null,inst_24400);
var state_24435__$1 = (function (){var statearr_24440 = state_24435;
(statearr_24440[(9)] = inst_24399__$1);

return statearr_24440;
})();
if(inst_24401){
var statearr_24441_24466 = state_24435__$1;
(statearr_24441_24466[(1)] = (5));

} else {
var statearr_24442_24467 = state_24435__$1;
(statearr_24442_24467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (15))){
var inst_24425 = (state_24435[(2)]);
var state_24435__$1 = state_24435;
var statearr_24443_24468 = state_24435__$1;
(statearr_24443_24468[(2)] = inst_24425);

(statearr_24443_24468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (13))){
var state_24435__$1 = state_24435;
var statearr_24444_24469 = state_24435__$1;
(statearr_24444_24469[(2)] = null);

(statearr_24444_24469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (6))){
var inst_24395 = (state_24435[(8)]);
var inst_24420 = inst_24395.length;
var inst_24421 = (inst_24420 > (0));
var state_24435__$1 = state_24435;
if(cljs.core.truth_(inst_24421)){
var statearr_24445_24470 = state_24435__$1;
(statearr_24445_24470[(1)] = (12));

} else {
var statearr_24446_24471 = state_24435__$1;
(statearr_24446_24471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (3))){
var inst_24433 = (state_24435[(2)]);
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24435__$1,inst_24433);
} else {
if((state_val_24436 === (12))){
var inst_24395 = (state_24435[(8)]);
var inst_24423 = cljs.core.vec.call(null,inst_24395);
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24435__$1,(15),out,inst_24423);
} else {
if((state_val_24436 === (2))){
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24435__$1,(4),ch);
} else {
if((state_val_24436 === (11))){
var inst_24403 = (state_24435[(10)]);
var inst_24399 = (state_24435[(9)]);
var inst_24413 = (state_24435[(2)]);
var inst_24414 = [];
var inst_24415 = inst_24414.push(inst_24399);
var inst_24395 = inst_24414;
var inst_24396 = inst_24403;
var state_24435__$1 = (function (){var statearr_24447 = state_24435;
(statearr_24447[(7)] = inst_24396);

(statearr_24447[(11)] = inst_24415);

(statearr_24447[(12)] = inst_24413);

(statearr_24447[(8)] = inst_24395);

return statearr_24447;
})();
var statearr_24448_24472 = state_24435__$1;
(statearr_24448_24472[(2)] = null);

(statearr_24448_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (9))){
var inst_24395 = (state_24435[(8)]);
var inst_24411 = cljs.core.vec.call(null,inst_24395);
var state_24435__$1 = state_24435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24435__$1,(11),out,inst_24411);
} else {
if((state_val_24436 === (5))){
var inst_24396 = (state_24435[(7)]);
var inst_24403 = (state_24435[(10)]);
var inst_24399 = (state_24435[(9)]);
var inst_24403__$1 = f.call(null,inst_24399);
var inst_24404 = cljs.core._EQ_.call(null,inst_24403__$1,inst_24396);
var inst_24405 = cljs.core.keyword_identical_QMARK_.call(null,inst_24396,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24406 = ((inst_24404) || (inst_24405));
var state_24435__$1 = (function (){var statearr_24449 = state_24435;
(statearr_24449[(10)] = inst_24403__$1);

return statearr_24449;
})();
if(cljs.core.truth_(inst_24406)){
var statearr_24450_24473 = state_24435__$1;
(statearr_24450_24473[(1)] = (8));

} else {
var statearr_24451_24474 = state_24435__$1;
(statearr_24451_24474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (14))){
var inst_24428 = (state_24435[(2)]);
var inst_24429 = cljs.core.async.close_BANG_.call(null,out);
var state_24435__$1 = (function (){var statearr_24453 = state_24435;
(statearr_24453[(13)] = inst_24428);

return statearr_24453;
})();
var statearr_24454_24475 = state_24435__$1;
(statearr_24454_24475[(2)] = inst_24429);

(statearr_24454_24475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (10))){
var inst_24418 = (state_24435[(2)]);
var state_24435__$1 = state_24435;
var statearr_24455_24476 = state_24435__$1;
(statearr_24455_24476[(2)] = inst_24418);

(statearr_24455_24476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24436 === (8))){
var inst_24403 = (state_24435[(10)]);
var inst_24399 = (state_24435[(9)]);
var inst_24395 = (state_24435[(8)]);
var inst_24408 = inst_24395.push(inst_24399);
var tmp24452 = inst_24395;
var inst_24395__$1 = tmp24452;
var inst_24396 = inst_24403;
var state_24435__$1 = (function (){var statearr_24456 = state_24435;
(statearr_24456[(7)] = inst_24396);

(statearr_24456[(14)] = inst_24408);

(statearr_24456[(8)] = inst_24395__$1);

return statearr_24456;
})();
var statearr_24457_24477 = state_24435__$1;
(statearr_24457_24477[(2)] = null);

(statearr_24457_24477[(1)] = (2));


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
});})(c__22559__auto___24463,out))
;
return ((function (switch__22464__auto__,c__22559__auto___24463,out){
return (function() {
var cljs$core$async$state_machine__22465__auto__ = null;
var cljs$core$async$state_machine__22465__auto____0 = (function (){
var statearr_24458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24458[(0)] = cljs$core$async$state_machine__22465__auto__);

(statearr_24458[(1)] = (1));

return statearr_24458;
});
var cljs$core$async$state_machine__22465__auto____1 = (function (state_24435){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_24435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object)){
var ex__22468__auto__ = e24459;
var statearr_24460_24478 = state_24435;
(statearr_24460_24478[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24479 = state_24435;
state_24435 = G__24479;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
cljs$core$async$state_machine__22465__auto__ = function(state_24435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22465__auto____1.call(this,state_24435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22465__auto____0;
cljs$core$async$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22465__auto____1;
return cljs$core$async$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___24463,out))
})();
var state__22561__auto__ = (function (){var statearr_24461 = f__22560__auto__.call(null);
(statearr_24461[(6)] = c__22559__auto___24463);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___24463,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1628369215991
