// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30931 = arguments.length;
switch (G__30931) {
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
if(typeof cljs.core.async.t_cljs$core$async30932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30932 = (function (f,blockable,meta30933){
this.f = f;
this.blockable = blockable;
this.meta30933 = meta30933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30934,meta30933__$1){
var self__ = this;
var _30934__$1 = this;
return (new cljs.core.async.t_cljs$core$async30932(self__.f,self__.blockable,meta30933__$1));
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30934){
var self__ = this;
var _30934__$1 = this;
return self__.meta30933;
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30933","meta30933",1941518587,null)], null);
});

cljs.core.async.t_cljs$core$async30932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30932";

cljs.core.async.t_cljs$core$async30932.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async30932");
});

cljs.core.async.__GT_t_cljs$core$async30932 = (function cljs$core$async$__GT_t_cljs$core$async30932(f__$1,blockable__$1,meta30933){
return (new cljs.core.async.t_cljs$core$async30932(f__$1,blockable__$1,meta30933));
});

}

return (new cljs.core.async.t_cljs$core$async30932(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__30938 = arguments.length;
switch (G__30938) {
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
var G__30941 = arguments.length;
switch (G__30941) {
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
var G__30944 = arguments.length;
switch (G__30944) {
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
var val_30946 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30946);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30946,ret){
return (function (){
return fn1.call(null,val_30946);
});})(val_30946,ret))
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
var G__30948 = arguments.length;
switch (G__30948) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__29231__auto___30950 = n;
var x_30951 = (0);
while(true){
if((x_30951 < n__29231__auto___30950)){
(a[x_30951] = (0));

var G__30952 = (x_30951 + (1));
x_30951 = G__30952;
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

var G__30953 = (i + (1));
i = G__30953;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30954 = (function (flag,meta30955){
this.flag = flag;
this.meta30955 = meta30955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30956,meta30955__$1){
var self__ = this;
var _30956__$1 = this;
return (new cljs.core.async.t_cljs$core$async30954(self__.flag,meta30955__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30956){
var self__ = this;
var _30956__$1 = this;
return self__.meta30955;
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30955","meta30955",-1955846874,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30954";

cljs.core.async.t_cljs$core$async30954.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async30954");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30954 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30954(flag__$1,meta30955){
return (new cljs.core.async.t_cljs$core$async30954(flag__$1,meta30955));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30954(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30957 = (function (flag,cb,meta30958){
this.flag = flag;
this.cb = cb;
this.meta30958 = meta30958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30959,meta30958__$1){
var self__ = this;
var _30959__$1 = this;
return (new cljs.core.async.t_cljs$core$async30957(self__.flag,self__.cb,meta30958__$1));
});

cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30959){
var self__ = this;
var _30959__$1 = this;
return self__.meta30958;
});

cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30958","meta30958",851413125,null)], null);
});

cljs.core.async.t_cljs$core$async30957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30957";

cljs.core.async.t_cljs$core$async30957.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async30957");
});

cljs.core.async.__GT_t_cljs$core$async30957 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30957(flag__$1,cb__$1,meta30958){
return (new cljs.core.async.t_cljs$core$async30957(flag__$1,cb__$1,meta30958));
});

}

return (new cljs.core.async.t_cljs$core$async30957(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30960_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30960_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30961_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30961_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30962 = (i + (1));
i = G__30962;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__29462__auto__ = [];
var len__29455__auto___30968 = arguments.length;
var i__29456__auto___30969 = (0);
while(true){
if((i__29456__auto___30969 < len__29455__auto___30968)){
args__29462__auto__.push((arguments[i__29456__auto___30969]));

var G__30970 = (i__29456__auto___30969 + (1));
i__29456__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30965){
var map__30966 = p__30965;
var map__30966__$1 = ((((!((map__30966 == null)))?((((map__30966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30966):map__30966);
var opts = map__30966__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30963){
var G__30964 = cljs.core.first.call(null,seq30963);
var seq30963__$1 = cljs.core.next.call(null,seq30963);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30964,seq30963__$1);
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
var G__30972 = arguments.length;
switch (G__30972) {
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
var c__30885__auto___31018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31018){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31018){
return (function (state_30996){
var state_val_30997 = (state_30996[(1)]);
if((state_val_30997 === (7))){
var inst_30992 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_30998_31019 = state_30996__$1;
(statearr_30998_31019[(2)] = inst_30992);

(statearr_30998_31019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (1))){
var state_30996__$1 = state_30996;
var statearr_30999_31020 = state_30996__$1;
(statearr_30999_31020[(2)] = null);

(statearr_30999_31020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (4))){
var inst_30975 = (state_30996[(7)]);
var inst_30975__$1 = (state_30996[(2)]);
var inst_30976 = (inst_30975__$1 == null);
var state_30996__$1 = (function (){var statearr_31000 = state_30996;
(statearr_31000[(7)] = inst_30975__$1);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30976)){
var statearr_31001_31021 = state_30996__$1;
(statearr_31001_31021[(1)] = (5));

} else {
var statearr_31002_31022 = state_30996__$1;
(statearr_31002_31022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (13))){
var state_30996__$1 = state_30996;
var statearr_31003_31023 = state_30996__$1;
(statearr_31003_31023[(2)] = null);

(statearr_31003_31023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (6))){
var inst_30975 = (state_30996[(7)]);
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30996__$1,(11),to,inst_30975);
} else {
if((state_val_30997 === (3))){
var inst_30994 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30996__$1,inst_30994);
} else {
if((state_val_30997 === (12))){
var state_30996__$1 = state_30996;
var statearr_31004_31024 = state_30996__$1;
(statearr_31004_31024[(2)] = null);

(statearr_31004_31024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (2))){
var state_30996__$1 = state_30996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30996__$1,(4),from);
} else {
if((state_val_30997 === (11))){
var inst_30985 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
if(cljs.core.truth_(inst_30985)){
var statearr_31005_31025 = state_30996__$1;
(statearr_31005_31025[(1)] = (12));

} else {
var statearr_31006_31026 = state_30996__$1;
(statearr_31006_31026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (9))){
var state_30996__$1 = state_30996;
var statearr_31007_31027 = state_30996__$1;
(statearr_31007_31027[(2)] = null);

(statearr_31007_31027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (5))){
var state_30996__$1 = state_30996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31008_31028 = state_30996__$1;
(statearr_31008_31028[(1)] = (8));

} else {
var statearr_31009_31029 = state_30996__$1;
(statearr_31009_31029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (14))){
var inst_30990 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31010_31030 = state_30996__$1;
(statearr_31010_31030[(2)] = inst_30990);

(statearr_31010_31030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (10))){
var inst_30982 = (state_30996[(2)]);
var state_30996__$1 = state_30996;
var statearr_31011_31031 = state_30996__$1;
(statearr_31011_31031[(2)] = inst_30982);

(statearr_31011_31031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30997 === (8))){
var inst_30979 = cljs.core.async.close_BANG_.call(null,to);
var state_30996__$1 = state_30996;
var statearr_31012_31032 = state_30996__$1;
(statearr_31012_31032[(2)] = inst_30979);

(statearr_31012_31032[(1)] = (10));


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
});})(c__30885__auto___31018))
;
return ((function (switch__30797__auto__,c__30885__auto___31018){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_31013 = [null,null,null,null,null,null,null,null];
(statearr_31013[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_31013[(1)] = (1));

return statearr_31013;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_30996){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_30996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31014){if((e31014 instanceof Object)){
var ex__30801__auto__ = e31014;
var statearr_31015_31033 = state_30996;
(statearr_31015_31033[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_30996;
state_30996 = G__31034;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_30996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_30996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31018))
})();
var state__30887__auto__ = (function (){var statearr_31016 = f__30886__auto__.call(null);
(statearr_31016[(6)] = c__30885__auto___31018);

return statearr_31016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31018))
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
return (function (p__31035){
var vec__31036 = p__31035;
var v = cljs.core.nth.call(null,vec__31036,(0),null);
var p = cljs.core.nth.call(null,vec__31036,(1),null);
var job = vec__31036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30885__auto___31207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results){
return (function (state_31043){
var state_val_31044 = (state_31043[(1)]);
if((state_val_31044 === (1))){
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31043__$1,(2),res,v);
} else {
if((state_val_31044 === (2))){
var inst_31040 = (state_31043[(2)]);
var inst_31041 = cljs.core.async.close_BANG_.call(null,res);
var state_31043__$1 = (function (){var statearr_31045 = state_31043;
(statearr_31045[(7)] = inst_31040);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31043__$1,inst_31041);
} else {
return null;
}
}
});})(c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results))
;
return ((function (switch__30797__auto__,c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_31046 = [null,null,null,null,null,null,null,null];
(statearr_31046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__);

(statearr_31046[(1)] = (1));

return statearr_31046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1 = (function (state_31043){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31047){if((e31047 instanceof Object)){
var ex__30801__auto__ = e31047;
var statearr_31048_31208 = state_31043;
(statearr_31048_31208[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31209 = state_31043;
state_31043 = G__31209;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = function(state_31043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1.call(this,state_31043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results))
})();
var state__30887__auto__ = (function (){var statearr_31049 = f__30886__auto__.call(null);
(statearr_31049[(6)] = c__30885__auto___31207);

return statearr_31049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31207,res,vec__31036,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31050){
var vec__31051 = p__31050;
var v = cljs.core.nth.call(null,vec__31051,(0),null);
var p = cljs.core.nth.call(null,vec__31051,(1),null);
var job = vec__31051;
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
var n__29231__auto___31210 = n;
var __31211 = (0);
while(true){
if((__31211 < n__29231__auto___31210)){
var G__31054_31212 = type;
var G__31054_31213__$1 = (((G__31054_31212 instanceof cljs.core.Keyword))?G__31054_31212.fqn:null);
switch (G__31054_31213__$1) {
case "compute":
var c__30885__auto___31215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31211,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (__31211,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function (state_31067){
var state_val_31068 = (state_31067[(1)]);
if((state_val_31068 === (1))){
var state_31067__$1 = state_31067;
var statearr_31069_31216 = state_31067__$1;
(statearr_31069_31216[(2)] = null);

(statearr_31069_31216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31068 === (2))){
var state_31067__$1 = state_31067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31067__$1,(4),jobs);
} else {
if((state_val_31068 === (3))){
var inst_31065 = (state_31067[(2)]);
var state_31067__$1 = state_31067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31067__$1,inst_31065);
} else {
if((state_val_31068 === (4))){
var inst_31057 = (state_31067[(2)]);
var inst_31058 = process.call(null,inst_31057);
var state_31067__$1 = state_31067;
if(cljs.core.truth_(inst_31058)){
var statearr_31070_31217 = state_31067__$1;
(statearr_31070_31217[(1)] = (5));

} else {
var statearr_31071_31218 = state_31067__$1;
(statearr_31071_31218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31068 === (5))){
var state_31067__$1 = state_31067;
var statearr_31072_31219 = state_31067__$1;
(statearr_31072_31219[(2)] = null);

(statearr_31072_31219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31068 === (6))){
var state_31067__$1 = state_31067;
var statearr_31073_31220 = state_31067__$1;
(statearr_31073_31220[(2)] = null);

(statearr_31073_31220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31068 === (7))){
var inst_31063 = (state_31067[(2)]);
var state_31067__$1 = state_31067;
var statearr_31074_31221 = state_31067__$1;
(statearr_31074_31221[(2)] = inst_31063);

(statearr_31074_31221[(1)] = (3));


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
});})(__31211,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
;
return ((function (__31211,switch__30797__auto__,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_31075 = [null,null,null,null,null,null,null];
(statearr_31075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__);

(statearr_31075[(1)] = (1));

return statearr_31075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1 = (function (state_31067){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31076){if((e31076 instanceof Object)){
var ex__30801__auto__ = e31076;
var statearr_31077_31222 = state_31067;
(statearr_31077_31222[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31223 = state_31067;
state_31067 = G__31223;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = function(state_31067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1.call(this,state_31067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__;
})()
;})(__31211,switch__30797__auto__,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
})();
var state__30887__auto__ = (function (){var statearr_31078 = f__30886__auto__.call(null);
(statearr_31078[(6)] = c__30885__auto___31215);

return statearr_31078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(__31211,c__30885__auto___31215,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
);


break;
case "async":
var c__30885__auto___31224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31211,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (__31211,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function (state_31091){
var state_val_31092 = (state_31091[(1)]);
if((state_val_31092 === (1))){
var state_31091__$1 = state_31091;
var statearr_31093_31225 = state_31091__$1;
(statearr_31093_31225[(2)] = null);

(statearr_31093_31225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (2))){
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31091__$1,(4),jobs);
} else {
if((state_val_31092 === (3))){
var inst_31089 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31091__$1,inst_31089);
} else {
if((state_val_31092 === (4))){
var inst_31081 = (state_31091[(2)]);
var inst_31082 = async.call(null,inst_31081);
var state_31091__$1 = state_31091;
if(cljs.core.truth_(inst_31082)){
var statearr_31094_31226 = state_31091__$1;
(statearr_31094_31226[(1)] = (5));

} else {
var statearr_31095_31227 = state_31091__$1;
(statearr_31095_31227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (5))){
var state_31091__$1 = state_31091;
var statearr_31096_31228 = state_31091__$1;
(statearr_31096_31228[(2)] = null);

(statearr_31096_31228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (6))){
var state_31091__$1 = state_31091;
var statearr_31097_31229 = state_31091__$1;
(statearr_31097_31229[(2)] = null);

(statearr_31097_31229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (7))){
var inst_31087 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
var statearr_31098_31230 = state_31091__$1;
(statearr_31098_31230[(2)] = inst_31087);

(statearr_31098_31230[(1)] = (3));


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
});})(__31211,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
;
return ((function (__31211,switch__30797__auto__,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1 = (function (state_31091){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__30801__auto__ = e31100;
var statearr_31101_31231 = state_31091;
(statearr_31101_31231[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31232 = state_31091;
state_31091 = G__31232;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = function(state_31091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1.call(this,state_31091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__;
})()
;})(__31211,switch__30797__auto__,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
})();
var state__30887__auto__ = (function (){var statearr_31102 = f__30886__auto__.call(null);
(statearr_31102[(6)] = c__30885__auto___31224);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(__31211,c__30885__auto___31224,G__31054_31212,G__31054_31213__$1,n__29231__auto___31210,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31054_31213__$1)].join('')));

}

var G__31233 = (__31211 + (1));
__31211 = G__31233;
continue;
} else {
}
break;
}

var c__30885__auto___31234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31234,jobs,results,process,async){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31234,jobs,results,process,async){
return (function (state_31124){
var state_val_31125 = (state_31124[(1)]);
if((state_val_31125 === (1))){
var state_31124__$1 = state_31124;
var statearr_31126_31235 = state_31124__$1;
(statearr_31126_31235[(2)] = null);

(statearr_31126_31235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (2))){
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31124__$1,(4),from);
} else {
if((state_val_31125 === (3))){
var inst_31122 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31124__$1,inst_31122);
} else {
if((state_val_31125 === (4))){
var inst_31105 = (state_31124[(7)]);
var inst_31105__$1 = (state_31124[(2)]);
var inst_31106 = (inst_31105__$1 == null);
var state_31124__$1 = (function (){var statearr_31127 = state_31124;
(statearr_31127[(7)] = inst_31105__$1);

return statearr_31127;
})();
if(cljs.core.truth_(inst_31106)){
var statearr_31128_31236 = state_31124__$1;
(statearr_31128_31236[(1)] = (5));

} else {
var statearr_31129_31237 = state_31124__$1;
(statearr_31129_31237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (5))){
var inst_31108 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31124__$1 = state_31124;
var statearr_31130_31238 = state_31124__$1;
(statearr_31130_31238[(2)] = inst_31108);

(statearr_31130_31238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (6))){
var inst_31105 = (state_31124[(7)]);
var inst_31110 = (state_31124[(8)]);
var inst_31110__$1 = cljs.core.async.chan.call(null,(1));
var inst_31111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31112 = [inst_31105,inst_31110__$1];
var inst_31113 = (new cljs.core.PersistentVector(null,2,(5),inst_31111,inst_31112,null));
var state_31124__$1 = (function (){var statearr_31131 = state_31124;
(statearr_31131[(8)] = inst_31110__$1);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31124__$1,(8),jobs,inst_31113);
} else {
if((state_val_31125 === (7))){
var inst_31120 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31132_31239 = state_31124__$1;
(statearr_31132_31239[(2)] = inst_31120);

(statearr_31132_31239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (8))){
var inst_31110 = (state_31124[(8)]);
var inst_31115 = (state_31124[(2)]);
var state_31124__$1 = (function (){var statearr_31133 = state_31124;
(statearr_31133[(9)] = inst_31115);

return statearr_31133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31124__$1,(9),results,inst_31110);
} else {
if((state_val_31125 === (9))){
var inst_31117 = (state_31124[(2)]);
var state_31124__$1 = (function (){var statearr_31134 = state_31124;
(statearr_31134[(10)] = inst_31117);

return statearr_31134;
})();
var statearr_31135_31240 = state_31124__$1;
(statearr_31135_31240[(2)] = null);

(statearr_31135_31240[(1)] = (2));


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
});})(c__30885__auto___31234,jobs,results,process,async))
;
return ((function (switch__30797__auto__,c__30885__auto___31234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_31136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__);

(statearr_31136[(1)] = (1));

return statearr_31136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1 = (function (state_31124){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31137){if((e31137 instanceof Object)){
var ex__30801__auto__ = e31137;
var statearr_31138_31241 = state_31124;
(statearr_31138_31241[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31242 = state_31124;
state_31124 = G__31242;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31234,jobs,results,process,async))
})();
var state__30887__auto__ = (function (){var statearr_31139 = f__30886__auto__.call(null);
(statearr_31139[(6)] = c__30885__auto___31234);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31234,jobs,results,process,async))
);


var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,jobs,results,process,async){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,jobs,results,process,async){
return (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (7))){
var inst_31173 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31179_31243 = state_31177__$1;
(statearr_31179_31243[(2)] = inst_31173);

(statearr_31179_31243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (20))){
var state_31177__$1 = state_31177;
var statearr_31180_31244 = state_31177__$1;
(statearr_31180_31244[(2)] = null);

(statearr_31180_31244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (1))){
var state_31177__$1 = state_31177;
var statearr_31181_31245 = state_31177__$1;
(statearr_31181_31245[(2)] = null);

(statearr_31181_31245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (4))){
var inst_31142 = (state_31177[(7)]);
var inst_31142__$1 = (state_31177[(2)]);
var inst_31143 = (inst_31142__$1 == null);
var state_31177__$1 = (function (){var statearr_31182 = state_31177;
(statearr_31182[(7)] = inst_31142__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31183_31246 = state_31177__$1;
(statearr_31183_31246[(1)] = (5));

} else {
var statearr_31184_31247 = state_31177__$1;
(statearr_31184_31247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (15))){
var inst_31155 = (state_31177[(8)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31177__$1,(18),to,inst_31155);
} else {
if((state_val_31178 === (21))){
var inst_31168 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31185_31248 = state_31177__$1;
(statearr_31185_31248[(2)] = inst_31168);

(statearr_31185_31248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (13))){
var inst_31170 = (state_31177[(2)]);
var state_31177__$1 = (function (){var statearr_31186 = state_31177;
(statearr_31186[(9)] = inst_31170);

return statearr_31186;
})();
var statearr_31187_31249 = state_31177__$1;
(statearr_31187_31249[(2)] = null);

(statearr_31187_31249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (6))){
var inst_31142 = (state_31177[(7)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(11),inst_31142);
} else {
if((state_val_31178 === (17))){
var inst_31163 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
if(cljs.core.truth_(inst_31163)){
var statearr_31188_31250 = state_31177__$1;
(statearr_31188_31250[(1)] = (19));

} else {
var statearr_31189_31251 = state_31177__$1;
(statearr_31189_31251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (3))){
var inst_31175 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31177__$1,inst_31175);
} else {
if((state_val_31178 === (12))){
var inst_31152 = (state_31177[(10)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(14),inst_31152);
} else {
if((state_val_31178 === (2))){
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(4),results);
} else {
if((state_val_31178 === (19))){
var state_31177__$1 = state_31177;
var statearr_31190_31252 = state_31177__$1;
(statearr_31190_31252[(2)] = null);

(statearr_31190_31252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (11))){
var inst_31152 = (state_31177[(2)]);
var state_31177__$1 = (function (){var statearr_31191 = state_31177;
(statearr_31191[(10)] = inst_31152);

return statearr_31191;
})();
var statearr_31192_31253 = state_31177__$1;
(statearr_31192_31253[(2)] = null);

(statearr_31192_31253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (9))){
var state_31177__$1 = state_31177;
var statearr_31193_31254 = state_31177__$1;
(statearr_31193_31254[(2)] = null);

(statearr_31193_31254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (5))){
var state_31177__$1 = state_31177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31194_31255 = state_31177__$1;
(statearr_31194_31255[(1)] = (8));

} else {
var statearr_31195_31256 = state_31177__$1;
(statearr_31195_31256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (14))){
var inst_31157 = (state_31177[(11)]);
var inst_31155 = (state_31177[(8)]);
var inst_31155__$1 = (state_31177[(2)]);
var inst_31156 = (inst_31155__$1 == null);
var inst_31157__$1 = cljs.core.not.call(null,inst_31156);
var state_31177__$1 = (function (){var statearr_31196 = state_31177;
(statearr_31196[(11)] = inst_31157__$1);

(statearr_31196[(8)] = inst_31155__$1);

return statearr_31196;
})();
if(inst_31157__$1){
var statearr_31197_31257 = state_31177__$1;
(statearr_31197_31257[(1)] = (15));

} else {
var statearr_31198_31258 = state_31177__$1;
(statearr_31198_31258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (16))){
var inst_31157 = (state_31177[(11)]);
var state_31177__$1 = state_31177;
var statearr_31199_31259 = state_31177__$1;
(statearr_31199_31259[(2)] = inst_31157);

(statearr_31199_31259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (10))){
var inst_31149 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31200_31260 = state_31177__$1;
(statearr_31200_31260[(2)] = inst_31149);

(statearr_31200_31260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (18))){
var inst_31160 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31201_31261 = state_31177__$1;
(statearr_31201_31261[(2)] = inst_31160);

(statearr_31201_31261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (8))){
var inst_31146 = cljs.core.async.close_BANG_.call(null,to);
var state_31177__$1 = state_31177;
var statearr_31202_31262 = state_31177__$1;
(statearr_31202_31262[(2)] = inst_31146);

(statearr_31202_31262[(1)] = (10));


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
});})(c__30885__auto__,jobs,results,process,async))
;
return ((function (switch__30797__auto__,c__30885__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1 = (function (state_31177){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31204){if((e31204 instanceof Object)){
var ex__30801__auto__ = e31204;
var statearr_31205_31263 = state_31177;
(statearr_31205_31263[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31264 = state_31177;
state_31177 = G__31264;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,jobs,results,process,async))
})();
var state__30887__auto__ = (function (){var statearr_31206 = f__30886__auto__.call(null);
(statearr_31206[(6)] = c__30885__auto__);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,jobs,results,process,async))
);

return c__30885__auto__;
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
var G__31266 = arguments.length;
switch (G__31266) {
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
var G__31269 = arguments.length;
switch (G__31269) {
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
var G__31272 = arguments.length;
switch (G__31272) {
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
var c__30885__auto___31321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31321,tc,fc){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31321,tc,fc){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31300_31322 = state_31298__$1;
(statearr_31300_31322[(2)] = inst_31294);

(statearr_31300_31322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31301_31323 = state_31298__$1;
(statearr_31301_31323[(2)] = null);

(statearr_31301_31323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (4))){
var inst_31275 = (state_31298[(7)]);
var inst_31275__$1 = (state_31298[(2)]);
var inst_31276 = (inst_31275__$1 == null);
var state_31298__$1 = (function (){var statearr_31302 = state_31298;
(statearr_31302[(7)] = inst_31275__$1);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31276)){
var statearr_31303_31324 = state_31298__$1;
(statearr_31303_31324[(1)] = (5));

} else {
var statearr_31304_31325 = state_31298__$1;
(statearr_31304_31325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (13))){
var state_31298__$1 = state_31298;
var statearr_31305_31326 = state_31298__$1;
(statearr_31305_31326[(2)] = null);

(statearr_31305_31326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var inst_31275 = (state_31298[(7)]);
var inst_31281 = p.call(null,inst_31275);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31281)){
var statearr_31306_31327 = state_31298__$1;
(statearr_31306_31327[(1)] = (9));

} else {
var statearr_31307_31328 = state_31298__$1;
(statearr_31307_31328[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (12))){
var state_31298__$1 = state_31298;
var statearr_31308_31329 = state_31298__$1;
(statearr_31308_31329[(2)] = null);

(statearr_31308_31329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,(4),ch);
} else {
if((state_val_31299 === (11))){
var inst_31275 = (state_31298[(7)]);
var inst_31285 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31298__$1,(8),inst_31285,inst_31275);
} else {
if((state_val_31299 === (9))){
var state_31298__$1 = state_31298;
var statearr_31309_31330 = state_31298__$1;
(statearr_31309_31330[(2)] = tc);

(statearr_31309_31330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (5))){
var inst_31278 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31279 = cljs.core.async.close_BANG_.call(null,fc);
var state_31298__$1 = (function (){var statearr_31310 = state_31298;
(statearr_31310[(8)] = inst_31278);

return statearr_31310;
})();
var statearr_31311_31331 = state_31298__$1;
(statearr_31311_31331[(2)] = inst_31279);

(statearr_31311_31331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (14))){
var inst_31292 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31312_31332 = state_31298__$1;
(statearr_31312_31332[(2)] = inst_31292);

(statearr_31312_31332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (10))){
var state_31298__$1 = state_31298;
var statearr_31313_31333 = state_31298__$1;
(statearr_31313_31333[(2)] = fc);

(statearr_31313_31333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (8))){
var inst_31287 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31287)){
var statearr_31314_31334 = state_31298__$1;
(statearr_31314_31334[(1)] = (12));

} else {
var statearr_31315_31335 = state_31298__$1;
(statearr_31315_31335[(1)] = (13));

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
});})(c__30885__auto___31321,tc,fc))
;
return ((function (switch__30797__auto__,c__30885__auto___31321,tc,fc){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_31316 = [null,null,null,null,null,null,null,null,null];
(statearr_31316[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_31316[(1)] = (1));

return statearr_31316;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_31298){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31317){if((e31317 instanceof Object)){
var ex__30801__auto__ = e31317;
var statearr_31318_31336 = state_31298;
(statearr_31318_31336[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31337 = state_31298;
state_31298 = G__31337;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31321,tc,fc))
})();
var state__30887__auto__ = (function (){var statearr_31319 = f__30886__auto__.call(null);
(statearr_31319[(6)] = c__30885__auto___31321);

return statearr_31319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31321,tc,fc))
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
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_31358){
var state_val_31359 = (state_31358[(1)]);
if((state_val_31359 === (7))){
var inst_31354 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31360_31378 = state_31358__$1;
(statearr_31360_31378[(2)] = inst_31354);

(statearr_31360_31378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (1))){
var inst_31338 = init;
var state_31358__$1 = (function (){var statearr_31361 = state_31358;
(statearr_31361[(7)] = inst_31338);

return statearr_31361;
})();
var statearr_31362_31379 = state_31358__$1;
(statearr_31362_31379[(2)] = null);

(statearr_31362_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (4))){
var inst_31341 = (state_31358[(8)]);
var inst_31341__$1 = (state_31358[(2)]);
var inst_31342 = (inst_31341__$1 == null);
var state_31358__$1 = (function (){var statearr_31363 = state_31358;
(statearr_31363[(8)] = inst_31341__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31342)){
var statearr_31364_31380 = state_31358__$1;
(statearr_31364_31380[(1)] = (5));

} else {
var statearr_31365_31381 = state_31358__$1;
(statearr_31365_31381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (6))){
var inst_31338 = (state_31358[(7)]);
var inst_31345 = (state_31358[(9)]);
var inst_31341 = (state_31358[(8)]);
var inst_31345__$1 = f.call(null,inst_31338,inst_31341);
var inst_31346 = cljs.core.reduced_QMARK_.call(null,inst_31345__$1);
var state_31358__$1 = (function (){var statearr_31366 = state_31358;
(statearr_31366[(9)] = inst_31345__$1);

return statearr_31366;
})();
if(inst_31346){
var statearr_31367_31382 = state_31358__$1;
(statearr_31367_31382[(1)] = (8));

} else {
var statearr_31368_31383 = state_31358__$1;
(statearr_31368_31383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (3))){
var inst_31356 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31358__$1,inst_31356);
} else {
if((state_val_31359 === (2))){
var state_31358__$1 = state_31358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31358__$1,(4),ch);
} else {
if((state_val_31359 === (9))){
var inst_31345 = (state_31358[(9)]);
var inst_31338 = inst_31345;
var state_31358__$1 = (function (){var statearr_31369 = state_31358;
(statearr_31369[(7)] = inst_31338);

return statearr_31369;
})();
var statearr_31370_31384 = state_31358__$1;
(statearr_31370_31384[(2)] = null);

(statearr_31370_31384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (5))){
var inst_31338 = (state_31358[(7)]);
var state_31358__$1 = state_31358;
var statearr_31371_31385 = state_31358__$1;
(statearr_31371_31385[(2)] = inst_31338);

(statearr_31371_31385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (10))){
var inst_31352 = (state_31358[(2)]);
var state_31358__$1 = state_31358;
var statearr_31372_31386 = state_31358__$1;
(statearr_31372_31386[(2)] = inst_31352);

(statearr_31372_31386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31359 === (8))){
var inst_31345 = (state_31358[(9)]);
var inst_31348 = cljs.core.deref.call(null,inst_31345);
var state_31358__$1 = state_31358;
var statearr_31373_31387 = state_31358__$1;
(statearr_31373_31387[(2)] = inst_31348);

(statearr_31373_31387[(1)] = (10));


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
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30798__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30798__auto____0 = (function (){
var statearr_31374 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31374[(0)] = cljs$core$async$reduce_$_state_machine__30798__auto__);

(statearr_31374[(1)] = (1));

return statearr_31374;
});
var cljs$core$async$reduce_$_state_machine__30798__auto____1 = (function (state_31358){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31375){if((e31375 instanceof Object)){
var ex__30801__auto__ = e31375;
var statearr_31376_31388 = state_31358;
(statearr_31376_31388[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31389 = state_31358;
state_31358 = G__31389;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30798__auto__ = function(state_31358){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30798__auto____1.call(this,state_31358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30798__auto____0;
cljs$core$async$reduce_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30798__auto____1;
return cljs$core$async$reduce_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_31377 = f__30886__auto__.call(null);
(statearr_31377[(6)] = c__30885__auto__);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,f__$1){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,f__$1){
return (function (state_31395){
var state_val_31396 = (state_31395[(1)]);
if((state_val_31396 === (1))){
var inst_31390 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31395__$1,(2),inst_31390);
} else {
if((state_val_31396 === (2))){
var inst_31392 = (state_31395[(2)]);
var inst_31393 = f__$1.call(null,inst_31392);
var state_31395__$1 = state_31395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31395__$1,inst_31393);
} else {
return null;
}
}
});})(c__30885__auto__,f__$1))
;
return ((function (switch__30797__auto__,c__30885__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30798__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30798__auto____0 = (function (){
var statearr_31397 = [null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$transduce_$_state_machine__30798__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$transduce_$_state_machine__30798__auto____1 = (function (state_31395){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31398){if((e31398 instanceof Object)){
var ex__30801__auto__ = e31398;
var statearr_31399_31401 = state_31395;
(statearr_31399_31401[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31402 = state_31395;
state_31395 = G__31402;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30798__auto__ = function(state_31395){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30798__auto____1.call(this,state_31395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30798__auto____0;
cljs$core$async$transduce_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30798__auto____1;
return cljs$core$async$transduce_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,f__$1))
})();
var state__30887__auto__ = (function (){var statearr_31400 = f__30886__auto__.call(null);
(statearr_31400[(6)] = c__30885__auto__);

return statearr_31400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,f__$1))
);

return c__30885__auto__;
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
var G__31404 = arguments.length;
switch (G__31404) {
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
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (7))){
var inst_31411 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31431_31452 = state_31429__$1;
(statearr_31431_31452[(2)] = inst_31411);

(statearr_31431_31452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (1))){
var inst_31405 = cljs.core.seq.call(null,coll);
var inst_31406 = inst_31405;
var state_31429__$1 = (function (){var statearr_31432 = state_31429;
(statearr_31432[(7)] = inst_31406);

return statearr_31432;
})();
var statearr_31433_31453 = state_31429__$1;
(statearr_31433_31453[(2)] = null);

(statearr_31433_31453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (4))){
var inst_31406 = (state_31429[(7)]);
var inst_31409 = cljs.core.first.call(null,inst_31406);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31429__$1,(7),ch,inst_31409);
} else {
if((state_val_31430 === (13))){
var inst_31423 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31434_31454 = state_31429__$1;
(statearr_31434_31454[(2)] = inst_31423);

(statearr_31434_31454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (6))){
var inst_31414 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31414)){
var statearr_31435_31455 = state_31429__$1;
(statearr_31435_31455[(1)] = (8));

} else {
var statearr_31436_31456 = state_31429__$1;
(statearr_31436_31456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (3))){
var inst_31427 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (12))){
var state_31429__$1 = state_31429;
var statearr_31437_31457 = state_31429__$1;
(statearr_31437_31457[(2)] = null);

(statearr_31437_31457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (2))){
var inst_31406 = (state_31429[(7)]);
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31406)){
var statearr_31438_31458 = state_31429__$1;
(statearr_31438_31458[(1)] = (4));

} else {
var statearr_31439_31459 = state_31429__$1;
(statearr_31439_31459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (11))){
var inst_31420 = cljs.core.async.close_BANG_.call(null,ch);
var state_31429__$1 = state_31429;
var statearr_31440_31460 = state_31429__$1;
(statearr_31440_31460[(2)] = inst_31420);

(statearr_31440_31460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (9))){
var state_31429__$1 = state_31429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31441_31461 = state_31429__$1;
(statearr_31441_31461[(1)] = (11));

} else {
var statearr_31442_31462 = state_31429__$1;
(statearr_31442_31462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (5))){
var inst_31406 = (state_31429[(7)]);
var state_31429__$1 = state_31429;
var statearr_31443_31463 = state_31429__$1;
(statearr_31443_31463[(2)] = inst_31406);

(statearr_31443_31463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (10))){
var inst_31425 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31444_31464 = state_31429__$1;
(statearr_31444_31464[(2)] = inst_31425);

(statearr_31444_31464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (8))){
var inst_31406 = (state_31429[(7)]);
var inst_31416 = cljs.core.next.call(null,inst_31406);
var inst_31406__$1 = inst_31416;
var state_31429__$1 = (function (){var statearr_31445 = state_31429;
(statearr_31445[(7)] = inst_31406__$1);

return statearr_31445;
})();
var statearr_31446_31465 = state_31429__$1;
(statearr_31446_31465[(2)] = null);

(statearr_31446_31465[(1)] = (2));


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
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_31447 = [null,null,null,null,null,null,null,null];
(statearr_31447[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_31447[(1)] = (1));

return statearr_31447;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_31429){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31448){if((e31448 instanceof Object)){
var ex__30801__auto__ = e31448;
var statearr_31449_31466 = state_31429;
(statearr_31449_31466[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31467 = state_31429;
state_31429 = G__31467;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_31450 = f__30886__auto__.call(null);
(statearr_31450[(6)] = c__30885__auto__);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28969__auto__ = (((_ == null))?null:_);
var m__28970__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,_);
} else {
var m__28970__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31468 = (function (ch,cs,meta31469){
this.ch = ch;
this.cs = cs;
this.meta31469 = meta31469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31470,meta31469__$1){
var self__ = this;
var _31470__$1 = this;
return (new cljs.core.async.t_cljs$core$async31468(self__.ch,self__.cs,meta31469__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31470){
var self__ = this;
var _31470__$1 = this;
return self__.meta31469;
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31469","meta31469",866886113,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31468";

cljs.core.async.t_cljs$core$async31468.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async31468");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31468 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31468(ch__$1,cs__$1,meta31469){
return (new cljs.core.async.t_cljs$core$async31468(ch__$1,cs__$1,meta31469));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31468(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30885__auto___31690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31690,cs,m,dchan,dctr,done){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31690,cs,m,dchan,dctr,done){
return (function (state_31605){
var state_val_31606 = (state_31605[(1)]);
if((state_val_31606 === (7))){
var inst_31601 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31607_31691 = state_31605__$1;
(statearr_31607_31691[(2)] = inst_31601);

(statearr_31607_31691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (20))){
var inst_31504 = (state_31605[(7)]);
var inst_31516 = cljs.core.first.call(null,inst_31504);
var inst_31517 = cljs.core.nth.call(null,inst_31516,(0),null);
var inst_31518 = cljs.core.nth.call(null,inst_31516,(1),null);
var state_31605__$1 = (function (){var statearr_31608 = state_31605;
(statearr_31608[(8)] = inst_31517);

return statearr_31608;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31609_31692 = state_31605__$1;
(statearr_31609_31692[(1)] = (22));

} else {
var statearr_31610_31693 = state_31605__$1;
(statearr_31610_31693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (27))){
var inst_31553 = (state_31605[(9)]);
var inst_31546 = (state_31605[(10)]);
var inst_31548 = (state_31605[(11)]);
var inst_31473 = (state_31605[(12)]);
var inst_31553__$1 = cljs.core._nth.call(null,inst_31546,inst_31548);
var inst_31554 = cljs.core.async.put_BANG_.call(null,inst_31553__$1,inst_31473,done);
var state_31605__$1 = (function (){var statearr_31611 = state_31605;
(statearr_31611[(9)] = inst_31553__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31612_31694 = state_31605__$1;
(statearr_31612_31694[(1)] = (30));

} else {
var statearr_31613_31695 = state_31605__$1;
(statearr_31613_31695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (1))){
var state_31605__$1 = state_31605;
var statearr_31614_31696 = state_31605__$1;
(statearr_31614_31696[(2)] = null);

(statearr_31614_31696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (24))){
var inst_31504 = (state_31605[(7)]);
var inst_31523 = (state_31605[(2)]);
var inst_31524 = cljs.core.next.call(null,inst_31504);
var inst_31482 = inst_31524;
var inst_31483 = null;
var inst_31484 = (0);
var inst_31485 = (0);
var state_31605__$1 = (function (){var statearr_31615 = state_31605;
(statearr_31615[(13)] = inst_31485);

(statearr_31615[(14)] = inst_31523);

(statearr_31615[(15)] = inst_31484);

(statearr_31615[(16)] = inst_31483);

(statearr_31615[(17)] = inst_31482);

return statearr_31615;
})();
var statearr_31616_31697 = state_31605__$1;
(statearr_31616_31697[(2)] = null);

(statearr_31616_31697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (39))){
var state_31605__$1 = state_31605;
var statearr_31620_31698 = state_31605__$1;
(statearr_31620_31698[(2)] = null);

(statearr_31620_31698[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (4))){
var inst_31473 = (state_31605[(12)]);
var inst_31473__$1 = (state_31605[(2)]);
var inst_31474 = (inst_31473__$1 == null);
var state_31605__$1 = (function (){var statearr_31621 = state_31605;
(statearr_31621[(12)] = inst_31473__$1);

return statearr_31621;
})();
if(cljs.core.truth_(inst_31474)){
var statearr_31622_31699 = state_31605__$1;
(statearr_31622_31699[(1)] = (5));

} else {
var statearr_31623_31700 = state_31605__$1;
(statearr_31623_31700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (15))){
var inst_31485 = (state_31605[(13)]);
var inst_31484 = (state_31605[(15)]);
var inst_31483 = (state_31605[(16)]);
var inst_31482 = (state_31605[(17)]);
var inst_31500 = (state_31605[(2)]);
var inst_31501 = (inst_31485 + (1));
var tmp31617 = inst_31484;
var tmp31618 = inst_31483;
var tmp31619 = inst_31482;
var inst_31482__$1 = tmp31619;
var inst_31483__$1 = tmp31618;
var inst_31484__$1 = tmp31617;
var inst_31485__$1 = inst_31501;
var state_31605__$1 = (function (){var statearr_31624 = state_31605;
(statearr_31624[(18)] = inst_31500);

(statearr_31624[(13)] = inst_31485__$1);

(statearr_31624[(15)] = inst_31484__$1);

(statearr_31624[(16)] = inst_31483__$1);

(statearr_31624[(17)] = inst_31482__$1);

return statearr_31624;
})();
var statearr_31625_31701 = state_31605__$1;
(statearr_31625_31701[(2)] = null);

(statearr_31625_31701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (21))){
var inst_31527 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31629_31702 = state_31605__$1;
(statearr_31629_31702[(2)] = inst_31527);

(statearr_31629_31702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (31))){
var inst_31553 = (state_31605[(9)]);
var inst_31557 = done.call(null,null);
var inst_31558 = cljs.core.async.untap_STAR_.call(null,m,inst_31553);
var state_31605__$1 = (function (){var statearr_31630 = state_31605;
(statearr_31630[(19)] = inst_31557);

return statearr_31630;
})();
var statearr_31631_31703 = state_31605__$1;
(statearr_31631_31703[(2)] = inst_31558);

(statearr_31631_31703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (32))){
var inst_31545 = (state_31605[(20)]);
var inst_31546 = (state_31605[(10)]);
var inst_31547 = (state_31605[(21)]);
var inst_31548 = (state_31605[(11)]);
var inst_31560 = (state_31605[(2)]);
var inst_31561 = (inst_31548 + (1));
var tmp31626 = inst_31545;
var tmp31627 = inst_31546;
var tmp31628 = inst_31547;
var inst_31545__$1 = tmp31626;
var inst_31546__$1 = tmp31627;
var inst_31547__$1 = tmp31628;
var inst_31548__$1 = inst_31561;
var state_31605__$1 = (function (){var statearr_31632 = state_31605;
(statearr_31632[(20)] = inst_31545__$1);

(statearr_31632[(10)] = inst_31546__$1);

(statearr_31632[(21)] = inst_31547__$1);

(statearr_31632[(11)] = inst_31548__$1);

(statearr_31632[(22)] = inst_31560);

return statearr_31632;
})();
var statearr_31633_31704 = state_31605__$1;
(statearr_31633_31704[(2)] = null);

(statearr_31633_31704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (40))){
var inst_31573 = (state_31605[(23)]);
var inst_31577 = done.call(null,null);
var inst_31578 = cljs.core.async.untap_STAR_.call(null,m,inst_31573);
var state_31605__$1 = (function (){var statearr_31634 = state_31605;
(statearr_31634[(24)] = inst_31577);

return statearr_31634;
})();
var statearr_31635_31705 = state_31605__$1;
(statearr_31635_31705[(2)] = inst_31578);

(statearr_31635_31705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (33))){
var inst_31564 = (state_31605[(25)]);
var inst_31566 = cljs.core.chunked_seq_QMARK_.call(null,inst_31564);
var state_31605__$1 = state_31605;
if(inst_31566){
var statearr_31636_31706 = state_31605__$1;
(statearr_31636_31706[(1)] = (36));

} else {
var statearr_31637_31707 = state_31605__$1;
(statearr_31637_31707[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (13))){
var inst_31494 = (state_31605[(26)]);
var inst_31497 = cljs.core.async.close_BANG_.call(null,inst_31494);
var state_31605__$1 = state_31605;
var statearr_31638_31708 = state_31605__$1;
(statearr_31638_31708[(2)] = inst_31497);

(statearr_31638_31708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (22))){
var inst_31517 = (state_31605[(8)]);
var inst_31520 = cljs.core.async.close_BANG_.call(null,inst_31517);
var state_31605__$1 = state_31605;
var statearr_31639_31709 = state_31605__$1;
(statearr_31639_31709[(2)] = inst_31520);

(statearr_31639_31709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (36))){
var inst_31564 = (state_31605[(25)]);
var inst_31568 = cljs.core.chunk_first.call(null,inst_31564);
var inst_31569 = cljs.core.chunk_rest.call(null,inst_31564);
var inst_31570 = cljs.core.count.call(null,inst_31568);
var inst_31545 = inst_31569;
var inst_31546 = inst_31568;
var inst_31547 = inst_31570;
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31640 = state_31605;
(statearr_31640[(20)] = inst_31545);

(statearr_31640[(10)] = inst_31546);

(statearr_31640[(21)] = inst_31547);

(statearr_31640[(11)] = inst_31548);

return statearr_31640;
})();
var statearr_31641_31710 = state_31605__$1;
(statearr_31641_31710[(2)] = null);

(statearr_31641_31710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (41))){
var inst_31564 = (state_31605[(25)]);
var inst_31580 = (state_31605[(2)]);
var inst_31581 = cljs.core.next.call(null,inst_31564);
var inst_31545 = inst_31581;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31642 = state_31605;
(statearr_31642[(20)] = inst_31545);

(statearr_31642[(10)] = inst_31546);

(statearr_31642[(21)] = inst_31547);

(statearr_31642[(11)] = inst_31548);

(statearr_31642[(27)] = inst_31580);

return statearr_31642;
})();
var statearr_31643_31711 = state_31605__$1;
(statearr_31643_31711[(2)] = null);

(statearr_31643_31711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (43))){
var state_31605__$1 = state_31605;
var statearr_31644_31712 = state_31605__$1;
(statearr_31644_31712[(2)] = null);

(statearr_31644_31712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (29))){
var inst_31589 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31645_31713 = state_31605__$1;
(statearr_31645_31713[(2)] = inst_31589);

(statearr_31645_31713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (44))){
var inst_31598 = (state_31605[(2)]);
var state_31605__$1 = (function (){var statearr_31646 = state_31605;
(statearr_31646[(28)] = inst_31598);

return statearr_31646;
})();
var statearr_31647_31714 = state_31605__$1;
(statearr_31647_31714[(2)] = null);

(statearr_31647_31714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (6))){
var inst_31537 = (state_31605[(29)]);
var inst_31536 = cljs.core.deref.call(null,cs);
var inst_31537__$1 = cljs.core.keys.call(null,inst_31536);
var inst_31538 = cljs.core.count.call(null,inst_31537__$1);
var inst_31539 = cljs.core.reset_BANG_.call(null,dctr,inst_31538);
var inst_31544 = cljs.core.seq.call(null,inst_31537__$1);
var inst_31545 = inst_31544;
var inst_31546 = null;
var inst_31547 = (0);
var inst_31548 = (0);
var state_31605__$1 = (function (){var statearr_31648 = state_31605;
(statearr_31648[(20)] = inst_31545);

(statearr_31648[(10)] = inst_31546);

(statearr_31648[(21)] = inst_31547);

(statearr_31648[(11)] = inst_31548);

(statearr_31648[(30)] = inst_31539);

(statearr_31648[(29)] = inst_31537__$1);

return statearr_31648;
})();
var statearr_31649_31715 = state_31605__$1;
(statearr_31649_31715[(2)] = null);

(statearr_31649_31715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (28))){
var inst_31545 = (state_31605[(20)]);
var inst_31564 = (state_31605[(25)]);
var inst_31564__$1 = cljs.core.seq.call(null,inst_31545);
var state_31605__$1 = (function (){var statearr_31650 = state_31605;
(statearr_31650[(25)] = inst_31564__$1);

return statearr_31650;
})();
if(inst_31564__$1){
var statearr_31651_31716 = state_31605__$1;
(statearr_31651_31716[(1)] = (33));

} else {
var statearr_31652_31717 = state_31605__$1;
(statearr_31652_31717[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (25))){
var inst_31547 = (state_31605[(21)]);
var inst_31548 = (state_31605[(11)]);
var inst_31550 = (inst_31548 < inst_31547);
var inst_31551 = inst_31550;
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31551)){
var statearr_31653_31718 = state_31605__$1;
(statearr_31653_31718[(1)] = (27));

} else {
var statearr_31654_31719 = state_31605__$1;
(statearr_31654_31719[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (34))){
var state_31605__$1 = state_31605;
var statearr_31655_31720 = state_31605__$1;
(statearr_31655_31720[(2)] = null);

(statearr_31655_31720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (17))){
var state_31605__$1 = state_31605;
var statearr_31656_31721 = state_31605__$1;
(statearr_31656_31721[(2)] = null);

(statearr_31656_31721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (3))){
var inst_31603 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31605__$1,inst_31603);
} else {
if((state_val_31606 === (12))){
var inst_31532 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31657_31722 = state_31605__$1;
(statearr_31657_31722[(2)] = inst_31532);

(statearr_31657_31722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (2))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31605__$1,(4),ch);
} else {
if((state_val_31606 === (23))){
var state_31605__$1 = state_31605;
var statearr_31658_31723 = state_31605__$1;
(statearr_31658_31723[(2)] = null);

(statearr_31658_31723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (35))){
var inst_31587 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31659_31724 = state_31605__$1;
(statearr_31659_31724[(2)] = inst_31587);

(statearr_31659_31724[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (19))){
var inst_31504 = (state_31605[(7)]);
var inst_31508 = cljs.core.chunk_first.call(null,inst_31504);
var inst_31509 = cljs.core.chunk_rest.call(null,inst_31504);
var inst_31510 = cljs.core.count.call(null,inst_31508);
var inst_31482 = inst_31509;
var inst_31483 = inst_31508;
var inst_31484 = inst_31510;
var inst_31485 = (0);
var state_31605__$1 = (function (){var statearr_31660 = state_31605;
(statearr_31660[(13)] = inst_31485);

(statearr_31660[(15)] = inst_31484);

(statearr_31660[(16)] = inst_31483);

(statearr_31660[(17)] = inst_31482);

return statearr_31660;
})();
var statearr_31661_31725 = state_31605__$1;
(statearr_31661_31725[(2)] = null);

(statearr_31661_31725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (11))){
var inst_31504 = (state_31605[(7)]);
var inst_31482 = (state_31605[(17)]);
var inst_31504__$1 = cljs.core.seq.call(null,inst_31482);
var state_31605__$1 = (function (){var statearr_31662 = state_31605;
(statearr_31662[(7)] = inst_31504__$1);

return statearr_31662;
})();
if(inst_31504__$1){
var statearr_31663_31726 = state_31605__$1;
(statearr_31663_31726[(1)] = (16));

} else {
var statearr_31664_31727 = state_31605__$1;
(statearr_31664_31727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (9))){
var inst_31534 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31665_31728 = state_31605__$1;
(statearr_31665_31728[(2)] = inst_31534);

(statearr_31665_31728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (5))){
var inst_31480 = cljs.core.deref.call(null,cs);
var inst_31481 = cljs.core.seq.call(null,inst_31480);
var inst_31482 = inst_31481;
var inst_31483 = null;
var inst_31484 = (0);
var inst_31485 = (0);
var state_31605__$1 = (function (){var statearr_31666 = state_31605;
(statearr_31666[(13)] = inst_31485);

(statearr_31666[(15)] = inst_31484);

(statearr_31666[(16)] = inst_31483);

(statearr_31666[(17)] = inst_31482);

return statearr_31666;
})();
var statearr_31667_31729 = state_31605__$1;
(statearr_31667_31729[(2)] = null);

(statearr_31667_31729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (14))){
var state_31605__$1 = state_31605;
var statearr_31668_31730 = state_31605__$1;
(statearr_31668_31730[(2)] = null);

(statearr_31668_31730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (45))){
var inst_31595 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31669_31731 = state_31605__$1;
(statearr_31669_31731[(2)] = inst_31595);

(statearr_31669_31731[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (26))){
var inst_31537 = (state_31605[(29)]);
var inst_31591 = (state_31605[(2)]);
var inst_31592 = cljs.core.seq.call(null,inst_31537);
var state_31605__$1 = (function (){var statearr_31670 = state_31605;
(statearr_31670[(31)] = inst_31591);

return statearr_31670;
})();
if(inst_31592){
var statearr_31671_31732 = state_31605__$1;
(statearr_31671_31732[(1)] = (42));

} else {
var statearr_31672_31733 = state_31605__$1;
(statearr_31672_31733[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (16))){
var inst_31504 = (state_31605[(7)]);
var inst_31506 = cljs.core.chunked_seq_QMARK_.call(null,inst_31504);
var state_31605__$1 = state_31605;
if(inst_31506){
var statearr_31673_31734 = state_31605__$1;
(statearr_31673_31734[(1)] = (19));

} else {
var statearr_31674_31735 = state_31605__$1;
(statearr_31674_31735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (38))){
var inst_31584 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31675_31736 = state_31605__$1;
(statearr_31675_31736[(2)] = inst_31584);

(statearr_31675_31736[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (30))){
var state_31605__$1 = state_31605;
var statearr_31676_31737 = state_31605__$1;
(statearr_31676_31737[(2)] = null);

(statearr_31676_31737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (10))){
var inst_31485 = (state_31605[(13)]);
var inst_31483 = (state_31605[(16)]);
var inst_31493 = cljs.core._nth.call(null,inst_31483,inst_31485);
var inst_31494 = cljs.core.nth.call(null,inst_31493,(0),null);
var inst_31495 = cljs.core.nth.call(null,inst_31493,(1),null);
var state_31605__$1 = (function (){var statearr_31677 = state_31605;
(statearr_31677[(26)] = inst_31494);

return statearr_31677;
})();
if(cljs.core.truth_(inst_31495)){
var statearr_31678_31738 = state_31605__$1;
(statearr_31678_31738[(1)] = (13));

} else {
var statearr_31679_31739 = state_31605__$1;
(statearr_31679_31739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (18))){
var inst_31530 = (state_31605[(2)]);
var state_31605__$1 = state_31605;
var statearr_31680_31740 = state_31605__$1;
(statearr_31680_31740[(2)] = inst_31530);

(statearr_31680_31740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (42))){
var state_31605__$1 = state_31605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31605__$1,(45),dchan);
} else {
if((state_val_31606 === (37))){
var inst_31473 = (state_31605[(12)]);
var inst_31573 = (state_31605[(23)]);
var inst_31564 = (state_31605[(25)]);
var inst_31573__$1 = cljs.core.first.call(null,inst_31564);
var inst_31574 = cljs.core.async.put_BANG_.call(null,inst_31573__$1,inst_31473,done);
var state_31605__$1 = (function (){var statearr_31681 = state_31605;
(statearr_31681[(23)] = inst_31573__$1);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31682_31741 = state_31605__$1;
(statearr_31682_31741[(1)] = (39));

} else {
var statearr_31683_31742 = state_31605__$1;
(statearr_31683_31742[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31606 === (8))){
var inst_31485 = (state_31605[(13)]);
var inst_31484 = (state_31605[(15)]);
var inst_31487 = (inst_31485 < inst_31484);
var inst_31488 = inst_31487;
var state_31605__$1 = state_31605;
if(cljs.core.truth_(inst_31488)){
var statearr_31684_31743 = state_31605__$1;
(statearr_31684_31743[(1)] = (10));

} else {
var statearr_31685_31744 = state_31605__$1;
(statearr_31685_31744[(1)] = (11));

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
});})(c__30885__auto___31690,cs,m,dchan,dctr,done))
;
return ((function (switch__30797__auto__,c__30885__auto___31690,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30798__auto__ = null;
var cljs$core$async$mult_$_state_machine__30798__auto____0 = (function (){
var statearr_31686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31686[(0)] = cljs$core$async$mult_$_state_machine__30798__auto__);

(statearr_31686[(1)] = (1));

return statearr_31686;
});
var cljs$core$async$mult_$_state_machine__30798__auto____1 = (function (state_31605){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31687){if((e31687 instanceof Object)){
var ex__30801__auto__ = e31687;
var statearr_31688_31745 = state_31605;
(statearr_31688_31745[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31746 = state_31605;
state_31605 = G__31746;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30798__auto__ = function(state_31605){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30798__auto____1.call(this,state_31605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30798__auto____0;
cljs$core$async$mult_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30798__auto____1;
return cljs$core$async$mult_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31690,cs,m,dchan,dctr,done))
})();
var state__30887__auto__ = (function (){var statearr_31689 = f__30886__auto__.call(null);
(statearr_31689[(6)] = c__30885__auto___31690);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31690,cs,m,dchan,dctr,done))
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
var G__31748 = arguments.length;
switch (G__31748) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,state_map);
} else {
var m__28970__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,mode);
} else {
var m__28970__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___31760 = arguments.length;
var i__29456__auto___31761 = (0);
while(true){
if((i__29456__auto___31761 < len__29455__auto___31760)){
args__29462__auto__.push((arguments[i__29456__auto___31761]));

var G__31762 = (i__29456__auto___31761 + (1));
i__29456__auto___31761 = G__31762;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31754){
var map__31755 = p__31754;
var map__31755__$1 = ((((!((map__31755 == null)))?((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31755):map__31755);
var opts = map__31755__$1;
var statearr_31757_31763 = state;
(statearr_31757_31763[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31755,map__31755__$1,opts){
return (function (val){
var statearr_31758_31764 = state;
(statearr_31758_31764[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31755,map__31755__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31759_31765 = state;
(statearr_31759_31765[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31750){
var G__31751 = cljs.core.first.call(null,seq31750);
var seq31750__$1 = cljs.core.next.call(null,seq31750);
var G__31752 = cljs.core.first.call(null,seq31750__$1);
var seq31750__$2 = cljs.core.next.call(null,seq31750__$1);
var G__31753 = cljs.core.first.call(null,seq31750__$2);
var seq31750__$3 = cljs.core.next.call(null,seq31750__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31751,G__31752,G__31753,seq31750__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31766 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31767){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31767 = meta31767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31768,meta31767__$1){
var self__ = this;
var _31768__$1 = this;
return (new cljs.core.async.t_cljs$core$async31766(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31767__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31768){
var self__ = this;
var _31768__$1 = this;
return self__.meta31767;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31767","meta31767",1171133532,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31766";

cljs.core.async.t_cljs$core$async31766.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async31766");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31766 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31766(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31767){
return (new cljs.core.async.t_cljs$core$async31766(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31767));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31766(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30885__auto___31930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (7))){
var inst_31785 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31872_31931 = state_31870__$1;
(statearr_31872_31931[(2)] = inst_31785);

(statearr_31872_31931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (20))){
var inst_31797 = (state_31870[(7)]);
var state_31870__$1 = state_31870;
var statearr_31873_31932 = state_31870__$1;
(statearr_31873_31932[(2)] = inst_31797);

(statearr_31873_31932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (27))){
var state_31870__$1 = state_31870;
var statearr_31874_31933 = state_31870__$1;
(statearr_31874_31933[(2)] = null);

(statearr_31874_31933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (1))){
var inst_31772 = (state_31870[(8)]);
var inst_31772__$1 = calc_state.call(null);
var inst_31774 = (inst_31772__$1 == null);
var inst_31775 = cljs.core.not.call(null,inst_31774);
var state_31870__$1 = (function (){var statearr_31875 = state_31870;
(statearr_31875[(8)] = inst_31772__$1);

return statearr_31875;
})();
if(inst_31775){
var statearr_31876_31934 = state_31870__$1;
(statearr_31876_31934[(1)] = (2));

} else {
var statearr_31877_31935 = state_31870__$1;
(statearr_31877_31935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (24))){
var inst_31844 = (state_31870[(9)]);
var inst_31821 = (state_31870[(10)]);
var inst_31830 = (state_31870[(11)]);
var inst_31844__$1 = inst_31821.call(null,inst_31830);
var state_31870__$1 = (function (){var statearr_31878 = state_31870;
(statearr_31878[(9)] = inst_31844__$1);

return statearr_31878;
})();
if(cljs.core.truth_(inst_31844__$1)){
var statearr_31879_31936 = state_31870__$1;
(statearr_31879_31936[(1)] = (29));

} else {
var statearr_31880_31937 = state_31870__$1;
(statearr_31880_31937[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (4))){
var inst_31788 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31788)){
var statearr_31881_31938 = state_31870__$1;
(statearr_31881_31938[(1)] = (8));

} else {
var statearr_31882_31939 = state_31870__$1;
(statearr_31882_31939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (15))){
var inst_31815 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31815)){
var statearr_31883_31940 = state_31870__$1;
(statearr_31883_31940[(1)] = (19));

} else {
var statearr_31884_31941 = state_31870__$1;
(statearr_31884_31941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (21))){
var inst_31820 = (state_31870[(12)]);
var inst_31820__$1 = (state_31870[(2)]);
var inst_31821 = cljs.core.get.call(null,inst_31820__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31822 = cljs.core.get.call(null,inst_31820__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31823 = cljs.core.get.call(null,inst_31820__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31870__$1 = (function (){var statearr_31885 = state_31870;
(statearr_31885[(13)] = inst_31822);

(statearr_31885[(12)] = inst_31820__$1);

(statearr_31885[(10)] = inst_31821);

return statearr_31885;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31870__$1,(22),inst_31823);
} else {
if((state_val_31871 === (31))){
var inst_31852 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31852)){
var statearr_31886_31942 = state_31870__$1;
(statearr_31886_31942[(1)] = (32));

} else {
var statearr_31887_31943 = state_31870__$1;
(statearr_31887_31943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (32))){
var inst_31829 = (state_31870[(14)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31870__$1,(35),out,inst_31829);
} else {
if((state_val_31871 === (33))){
var inst_31820 = (state_31870[(12)]);
var inst_31797 = inst_31820;
var state_31870__$1 = (function (){var statearr_31888 = state_31870;
(statearr_31888[(7)] = inst_31797);

return statearr_31888;
})();
var statearr_31889_31944 = state_31870__$1;
(statearr_31889_31944[(2)] = null);

(statearr_31889_31944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (13))){
var inst_31797 = (state_31870[(7)]);
var inst_31804 = inst_31797.cljs$lang$protocol_mask$partition0$;
var inst_31805 = (inst_31804 & (64));
var inst_31806 = inst_31797.cljs$core$ISeq$;
var inst_31807 = (cljs.core.PROTOCOL_SENTINEL === inst_31806);
var inst_31808 = (inst_31805) || (inst_31807);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31808)){
var statearr_31890_31945 = state_31870__$1;
(statearr_31890_31945[(1)] = (16));

} else {
var statearr_31891_31946 = state_31870__$1;
(statearr_31891_31946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (22))){
var inst_31829 = (state_31870[(14)]);
var inst_31830 = (state_31870[(11)]);
var inst_31828 = (state_31870[(2)]);
var inst_31829__$1 = cljs.core.nth.call(null,inst_31828,(0),null);
var inst_31830__$1 = cljs.core.nth.call(null,inst_31828,(1),null);
var inst_31831 = (inst_31829__$1 == null);
var inst_31832 = cljs.core._EQ_.call(null,inst_31830__$1,change);
var inst_31833 = (inst_31831) || (inst_31832);
var state_31870__$1 = (function (){var statearr_31892 = state_31870;
(statearr_31892[(14)] = inst_31829__$1);

(statearr_31892[(11)] = inst_31830__$1);

return statearr_31892;
})();
if(cljs.core.truth_(inst_31833)){
var statearr_31893_31947 = state_31870__$1;
(statearr_31893_31947[(1)] = (23));

} else {
var statearr_31894_31948 = state_31870__$1;
(statearr_31894_31948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (36))){
var inst_31820 = (state_31870[(12)]);
var inst_31797 = inst_31820;
var state_31870__$1 = (function (){var statearr_31895 = state_31870;
(statearr_31895[(7)] = inst_31797);

return statearr_31895;
})();
var statearr_31896_31949 = state_31870__$1;
(statearr_31896_31949[(2)] = null);

(statearr_31896_31949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (29))){
var inst_31844 = (state_31870[(9)]);
var state_31870__$1 = state_31870;
var statearr_31897_31950 = state_31870__$1;
(statearr_31897_31950[(2)] = inst_31844);

(statearr_31897_31950[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var state_31870__$1 = state_31870;
var statearr_31898_31951 = state_31870__$1;
(statearr_31898_31951[(2)] = false);

(statearr_31898_31951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (28))){
var inst_31840 = (state_31870[(2)]);
var inst_31841 = calc_state.call(null);
var inst_31797 = inst_31841;
var state_31870__$1 = (function (){var statearr_31899 = state_31870;
(statearr_31899[(7)] = inst_31797);

(statearr_31899[(15)] = inst_31840);

return statearr_31899;
})();
var statearr_31900_31952 = state_31870__$1;
(statearr_31900_31952[(2)] = null);

(statearr_31900_31952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (25))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31901_31953 = state_31870__$1;
(statearr_31901_31953[(2)] = inst_31866);

(statearr_31901_31953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (34))){
var inst_31864 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31902_31954 = state_31870__$1;
(statearr_31902_31954[(2)] = inst_31864);

(statearr_31902_31954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (17))){
var state_31870__$1 = state_31870;
var statearr_31903_31955 = state_31870__$1;
(statearr_31903_31955[(2)] = false);

(statearr_31903_31955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (3))){
var state_31870__$1 = state_31870;
var statearr_31904_31956 = state_31870__$1;
(statearr_31904_31956[(2)] = false);

(statearr_31904_31956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (12))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (2))){
var inst_31772 = (state_31870[(8)]);
var inst_31777 = inst_31772.cljs$lang$protocol_mask$partition0$;
var inst_31778 = (inst_31777 & (64));
var inst_31779 = inst_31772.cljs$core$ISeq$;
var inst_31780 = (cljs.core.PROTOCOL_SENTINEL === inst_31779);
var inst_31781 = (inst_31778) || (inst_31780);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31781)){
var statearr_31905_31957 = state_31870__$1;
(statearr_31905_31957[(1)] = (5));

} else {
var statearr_31906_31958 = state_31870__$1;
(statearr_31906_31958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (23))){
var inst_31829 = (state_31870[(14)]);
var inst_31835 = (inst_31829 == null);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31835)){
var statearr_31907_31959 = state_31870__$1;
(statearr_31907_31959[(1)] = (26));

} else {
var statearr_31908_31960 = state_31870__$1;
(statearr_31908_31960[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (35))){
var inst_31855 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31855)){
var statearr_31909_31961 = state_31870__$1;
(statearr_31909_31961[(1)] = (36));

} else {
var statearr_31910_31962 = state_31870__$1;
(statearr_31910_31962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (19))){
var inst_31797 = (state_31870[(7)]);
var inst_31817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31797);
var state_31870__$1 = state_31870;
var statearr_31911_31963 = state_31870__$1;
(statearr_31911_31963[(2)] = inst_31817);

(statearr_31911_31963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (11))){
var inst_31797 = (state_31870[(7)]);
var inst_31801 = (inst_31797 == null);
var inst_31802 = cljs.core.not.call(null,inst_31801);
var state_31870__$1 = state_31870;
if(inst_31802){
var statearr_31912_31964 = state_31870__$1;
(statearr_31912_31964[(1)] = (13));

} else {
var statearr_31913_31965 = state_31870__$1;
(statearr_31913_31965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (9))){
var inst_31772 = (state_31870[(8)]);
var state_31870__$1 = state_31870;
var statearr_31914_31966 = state_31870__$1;
(statearr_31914_31966[(2)] = inst_31772);

(statearr_31914_31966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var state_31870__$1 = state_31870;
var statearr_31915_31967 = state_31870__$1;
(statearr_31915_31967[(2)] = true);

(statearr_31915_31967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (14))){
var state_31870__$1 = state_31870;
var statearr_31916_31968 = state_31870__$1;
(statearr_31916_31968[(2)] = false);

(statearr_31916_31968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (26))){
var inst_31830 = (state_31870[(11)]);
var inst_31837 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31830);
var state_31870__$1 = state_31870;
var statearr_31917_31969 = state_31870__$1;
(statearr_31917_31969[(2)] = inst_31837);

(statearr_31917_31969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (16))){
var state_31870__$1 = state_31870;
var statearr_31918_31970 = state_31870__$1;
(statearr_31918_31970[(2)] = true);

(statearr_31918_31970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (38))){
var inst_31860 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31919_31971 = state_31870__$1;
(statearr_31919_31971[(2)] = inst_31860);

(statearr_31919_31971[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (30))){
var inst_31822 = (state_31870[(13)]);
var inst_31821 = (state_31870[(10)]);
var inst_31830 = (state_31870[(11)]);
var inst_31847 = cljs.core.empty_QMARK_.call(null,inst_31821);
var inst_31848 = inst_31822.call(null,inst_31830);
var inst_31849 = cljs.core.not.call(null,inst_31848);
var inst_31850 = (inst_31847) && (inst_31849);
var state_31870__$1 = state_31870;
var statearr_31920_31972 = state_31870__$1;
(statearr_31920_31972[(2)] = inst_31850);

(statearr_31920_31972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (10))){
var inst_31772 = (state_31870[(8)]);
var inst_31793 = (state_31870[(2)]);
var inst_31794 = cljs.core.get.call(null,inst_31793,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31795 = cljs.core.get.call(null,inst_31793,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31796 = cljs.core.get.call(null,inst_31793,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31797 = inst_31772;
var state_31870__$1 = (function (){var statearr_31921 = state_31870;
(statearr_31921[(7)] = inst_31797);

(statearr_31921[(16)] = inst_31794);

(statearr_31921[(17)] = inst_31795);

(statearr_31921[(18)] = inst_31796);

return statearr_31921;
})();
var statearr_31922_31973 = state_31870__$1;
(statearr_31922_31973[(2)] = null);

(statearr_31922_31973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (18))){
var inst_31812 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31923_31974 = state_31870__$1;
(statearr_31923_31974[(2)] = inst_31812);

(statearr_31923_31974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (37))){
var state_31870__$1 = state_31870;
var statearr_31924_31975 = state_31870__$1;
(statearr_31924_31975[(2)] = null);

(statearr_31924_31975[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (8))){
var inst_31772 = (state_31870[(8)]);
var inst_31790 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31772);
var state_31870__$1 = state_31870;
var statearr_31925_31976 = state_31870__$1;
(statearr_31925_31976[(2)] = inst_31790);

(statearr_31925_31976[(1)] = (10));


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
});})(c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30797__auto__,c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30798__auto__ = null;
var cljs$core$async$mix_$_state_machine__30798__auto____0 = (function (){
var statearr_31926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31926[(0)] = cljs$core$async$mix_$_state_machine__30798__auto__);

(statearr_31926[(1)] = (1));

return statearr_31926;
});
var cljs$core$async$mix_$_state_machine__30798__auto____1 = (function (state_31870){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e31927){if((e31927 instanceof Object)){
var ex__30801__auto__ = e31927;
var statearr_31928_31977 = state_31870;
(statearr_31928_31977[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31978 = state_31870;
state_31870 = G__31978;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30798__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30798__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30798__auto____0;
cljs$core$async$mix_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30798__auto____1;
return cljs$core$async$mix_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30887__auto__ = (function (){var statearr_31929 = f__30886__auto__.call(null);
(statearr_31929[(6)] = c__30885__auto___31930);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___31930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v);
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
var G__31984 = arguments.length;
switch (G__31984) {
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
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__31982_SHARP_){
if(cljs.core.truth_(p1__31982_SHARP_.call(null,topic))){
return p1__31982_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31986 = meta31986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31987,meta31986__$1){
var self__ = this;
var _31987__$1 = this;
return (new cljs.core.async.t_cljs$core$async31985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31987){
var self__ = this;
var _31987__$1 = this;
return self__.meta31986;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31986","meta31986",-1543893569,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31985";

cljs.core.async.t_cljs$core$async31985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async31985");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31985 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31986){
return (new cljs.core.async.t_cljs$core$async31985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30885__auto___32105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32105,mults,ensure_mult,p){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32105,mults,ensure_mult,p){
return (function (state_32059){
var state_val_32060 = (state_32059[(1)]);
if((state_val_32060 === (7))){
var inst_32055 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32061_32106 = state_32059__$1;
(statearr_32061_32106[(2)] = inst_32055);

(statearr_32061_32106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (20))){
var state_32059__$1 = state_32059;
var statearr_32062_32107 = state_32059__$1;
(statearr_32062_32107[(2)] = null);

(statearr_32062_32107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (1))){
var state_32059__$1 = state_32059;
var statearr_32063_32108 = state_32059__$1;
(statearr_32063_32108[(2)] = null);

(statearr_32063_32108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (24))){
var inst_32038 = (state_32059[(7)]);
var inst_32047 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32038);
var state_32059__$1 = state_32059;
var statearr_32064_32109 = state_32059__$1;
(statearr_32064_32109[(2)] = inst_32047);

(statearr_32064_32109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (4))){
var inst_31990 = (state_32059[(8)]);
var inst_31990__$1 = (state_32059[(2)]);
var inst_31991 = (inst_31990__$1 == null);
var state_32059__$1 = (function (){var statearr_32065 = state_32059;
(statearr_32065[(8)] = inst_31990__$1);

return statearr_32065;
})();
if(cljs.core.truth_(inst_31991)){
var statearr_32066_32110 = state_32059__$1;
(statearr_32066_32110[(1)] = (5));

} else {
var statearr_32067_32111 = state_32059__$1;
(statearr_32067_32111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (15))){
var inst_32032 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32068_32112 = state_32059__$1;
(statearr_32068_32112[(2)] = inst_32032);

(statearr_32068_32112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (21))){
var inst_32052 = (state_32059[(2)]);
var state_32059__$1 = (function (){var statearr_32069 = state_32059;
(statearr_32069[(9)] = inst_32052);

return statearr_32069;
})();
var statearr_32070_32113 = state_32059__$1;
(statearr_32070_32113[(2)] = null);

(statearr_32070_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (13))){
var inst_32014 = (state_32059[(10)]);
var inst_32016 = cljs.core.chunked_seq_QMARK_.call(null,inst_32014);
var state_32059__$1 = state_32059;
if(inst_32016){
var statearr_32071_32114 = state_32059__$1;
(statearr_32071_32114[(1)] = (16));

} else {
var statearr_32072_32115 = state_32059__$1;
(statearr_32072_32115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (22))){
var inst_32044 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
if(cljs.core.truth_(inst_32044)){
var statearr_32073_32116 = state_32059__$1;
(statearr_32073_32116[(1)] = (23));

} else {
var statearr_32074_32117 = state_32059__$1;
(statearr_32074_32117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (6))){
var inst_32038 = (state_32059[(7)]);
var inst_32040 = (state_32059[(11)]);
var inst_31990 = (state_32059[(8)]);
var inst_32038__$1 = topic_fn.call(null,inst_31990);
var inst_32039 = cljs.core.deref.call(null,mults);
var inst_32040__$1 = cljs.core.get.call(null,inst_32039,inst_32038__$1);
var state_32059__$1 = (function (){var statearr_32075 = state_32059;
(statearr_32075[(7)] = inst_32038__$1);

(statearr_32075[(11)] = inst_32040__$1);

return statearr_32075;
})();
if(cljs.core.truth_(inst_32040__$1)){
var statearr_32076_32118 = state_32059__$1;
(statearr_32076_32118[(1)] = (19));

} else {
var statearr_32077_32119 = state_32059__$1;
(statearr_32077_32119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (25))){
var inst_32049 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32078_32120 = state_32059__$1;
(statearr_32078_32120[(2)] = inst_32049);

(statearr_32078_32120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (17))){
var inst_32014 = (state_32059[(10)]);
var inst_32023 = cljs.core.first.call(null,inst_32014);
var inst_32024 = cljs.core.async.muxch_STAR_.call(null,inst_32023);
var inst_32025 = cljs.core.async.close_BANG_.call(null,inst_32024);
var inst_32026 = cljs.core.next.call(null,inst_32014);
var inst_32000 = inst_32026;
var inst_32001 = null;
var inst_32002 = (0);
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32079 = state_32059;
(statearr_32079[(12)] = inst_32000);

(statearr_32079[(13)] = inst_32003);

(statearr_32079[(14)] = inst_32001);

(statearr_32079[(15)] = inst_32002);

(statearr_32079[(16)] = inst_32025);

return statearr_32079;
})();
var statearr_32080_32121 = state_32059__$1;
(statearr_32080_32121[(2)] = null);

(statearr_32080_32121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (3))){
var inst_32057 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32059__$1,inst_32057);
} else {
if((state_val_32060 === (12))){
var inst_32034 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32081_32122 = state_32059__$1;
(statearr_32081_32122[(2)] = inst_32034);

(statearr_32081_32122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (2))){
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32059__$1,(4),ch);
} else {
if((state_val_32060 === (23))){
var state_32059__$1 = state_32059;
var statearr_32082_32123 = state_32059__$1;
(statearr_32082_32123[(2)] = null);

(statearr_32082_32123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (19))){
var inst_32040 = (state_32059[(11)]);
var inst_31990 = (state_32059[(8)]);
var inst_32042 = cljs.core.async.muxch_STAR_.call(null,inst_32040);
var state_32059__$1 = state_32059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32059__$1,(22),inst_32042,inst_31990);
} else {
if((state_val_32060 === (11))){
var inst_32000 = (state_32059[(12)]);
var inst_32014 = (state_32059[(10)]);
var inst_32014__$1 = cljs.core.seq.call(null,inst_32000);
var state_32059__$1 = (function (){var statearr_32083 = state_32059;
(statearr_32083[(10)] = inst_32014__$1);

return statearr_32083;
})();
if(inst_32014__$1){
var statearr_32084_32124 = state_32059__$1;
(statearr_32084_32124[(1)] = (13));

} else {
var statearr_32085_32125 = state_32059__$1;
(statearr_32085_32125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (9))){
var inst_32036 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32086_32126 = state_32059__$1;
(statearr_32086_32126[(2)] = inst_32036);

(statearr_32086_32126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (5))){
var inst_31997 = cljs.core.deref.call(null,mults);
var inst_31998 = cljs.core.vals.call(null,inst_31997);
var inst_31999 = cljs.core.seq.call(null,inst_31998);
var inst_32000 = inst_31999;
var inst_32001 = null;
var inst_32002 = (0);
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32087 = state_32059;
(statearr_32087[(12)] = inst_32000);

(statearr_32087[(13)] = inst_32003);

(statearr_32087[(14)] = inst_32001);

(statearr_32087[(15)] = inst_32002);

return statearr_32087;
})();
var statearr_32088_32127 = state_32059__$1;
(statearr_32088_32127[(2)] = null);

(statearr_32088_32127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (14))){
var state_32059__$1 = state_32059;
var statearr_32092_32128 = state_32059__$1;
(statearr_32092_32128[(2)] = null);

(statearr_32092_32128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (16))){
var inst_32014 = (state_32059[(10)]);
var inst_32018 = cljs.core.chunk_first.call(null,inst_32014);
var inst_32019 = cljs.core.chunk_rest.call(null,inst_32014);
var inst_32020 = cljs.core.count.call(null,inst_32018);
var inst_32000 = inst_32019;
var inst_32001 = inst_32018;
var inst_32002 = inst_32020;
var inst_32003 = (0);
var state_32059__$1 = (function (){var statearr_32093 = state_32059;
(statearr_32093[(12)] = inst_32000);

(statearr_32093[(13)] = inst_32003);

(statearr_32093[(14)] = inst_32001);

(statearr_32093[(15)] = inst_32002);

return statearr_32093;
})();
var statearr_32094_32129 = state_32059__$1;
(statearr_32094_32129[(2)] = null);

(statearr_32094_32129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (10))){
var inst_32000 = (state_32059[(12)]);
var inst_32003 = (state_32059[(13)]);
var inst_32001 = (state_32059[(14)]);
var inst_32002 = (state_32059[(15)]);
var inst_32008 = cljs.core._nth.call(null,inst_32001,inst_32003);
var inst_32009 = cljs.core.async.muxch_STAR_.call(null,inst_32008);
var inst_32010 = cljs.core.async.close_BANG_.call(null,inst_32009);
var inst_32011 = (inst_32003 + (1));
var tmp32089 = inst_32000;
var tmp32090 = inst_32001;
var tmp32091 = inst_32002;
var inst_32000__$1 = tmp32089;
var inst_32001__$1 = tmp32090;
var inst_32002__$1 = tmp32091;
var inst_32003__$1 = inst_32011;
var state_32059__$1 = (function (){var statearr_32095 = state_32059;
(statearr_32095[(12)] = inst_32000__$1);

(statearr_32095[(13)] = inst_32003__$1);

(statearr_32095[(14)] = inst_32001__$1);

(statearr_32095[(15)] = inst_32002__$1);

(statearr_32095[(17)] = inst_32010);

return statearr_32095;
})();
var statearr_32096_32130 = state_32059__$1;
(statearr_32096_32130[(2)] = null);

(statearr_32096_32130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (18))){
var inst_32029 = (state_32059[(2)]);
var state_32059__$1 = state_32059;
var statearr_32097_32131 = state_32059__$1;
(statearr_32097_32131[(2)] = inst_32029);

(statearr_32097_32131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32060 === (8))){
var inst_32003 = (state_32059[(13)]);
var inst_32002 = (state_32059[(15)]);
var inst_32005 = (inst_32003 < inst_32002);
var inst_32006 = inst_32005;
var state_32059__$1 = state_32059;
if(cljs.core.truth_(inst_32006)){
var statearr_32098_32132 = state_32059__$1;
(statearr_32098_32132[(1)] = (10));

} else {
var statearr_32099_32133 = state_32059__$1;
(statearr_32099_32133[(1)] = (11));

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
});})(c__30885__auto___32105,mults,ensure_mult,p))
;
return ((function (switch__30797__auto__,c__30885__auto___32105,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32100[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32100[(1)] = (1));

return statearr_32100;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32059){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32101){if((e32101 instanceof Object)){
var ex__30801__auto__ = e32101;
var statearr_32102_32134 = state_32059;
(statearr_32102_32134[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_32059;
state_32059 = G__32135;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32105,mults,ensure_mult,p))
})();
var state__30887__auto__ = (function (){var statearr_32103 = f__30886__auto__.call(null);
(statearr_32103[(6)] = c__30885__auto___32105);

return statearr_32103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32105,mults,ensure_mult,p))
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
var G__32137 = arguments.length;
switch (G__32137) {
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
var G__32140 = arguments.length;
switch (G__32140) {
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
var G__32143 = arguments.length;
switch (G__32143) {
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
var c__30885__auto___32210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var state_32182__$1 = state_32182;
var statearr_32184_32211 = state_32182__$1;
(statearr_32184_32211[(2)] = null);

(statearr_32184_32211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var state_32182__$1 = state_32182;
var statearr_32185_32212 = state_32182__$1;
(statearr_32185_32212[(2)] = null);

(statearr_32185_32212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var inst_32146 = (state_32182[(7)]);
var inst_32148 = (inst_32146 < cnt);
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32148)){
var statearr_32186_32213 = state_32182__$1;
(statearr_32186_32213[(1)] = (6));

} else {
var statearr_32187_32214 = state_32182__$1;
(statearr_32187_32214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (15))){
var inst_32178 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32188_32215 = state_32182__$1;
(statearr_32188_32215[(2)] = inst_32178);

(statearr_32188_32215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (13))){
var inst_32171 = cljs.core.async.close_BANG_.call(null,out);
var state_32182__$1 = state_32182;
var statearr_32189_32216 = state_32182__$1;
(statearr_32189_32216[(2)] = inst_32171);

(statearr_32189_32216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (6))){
var state_32182__$1 = state_32182;
var statearr_32190_32217 = state_32182__$1;
(statearr_32190_32217[(2)] = null);

(statearr_32190_32217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32180 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (12))){
var inst_32168 = (state_32182[(8)]);
var inst_32168__$1 = (state_32182[(2)]);
var inst_32169 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32168__$1);
var state_32182__$1 = (function (){var statearr_32191 = state_32182;
(statearr_32191[(8)] = inst_32168__$1);

return statearr_32191;
})();
if(cljs.core.truth_(inst_32169)){
var statearr_32192_32218 = state_32182__$1;
(statearr_32192_32218[(1)] = (13));

} else {
var statearr_32193_32219 = state_32182__$1;
(statearr_32193_32219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (2))){
var inst_32145 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32146 = (0);
var state_32182__$1 = (function (){var statearr_32194 = state_32182;
(statearr_32194[(7)] = inst_32146);

(statearr_32194[(9)] = inst_32145);

return statearr_32194;
})();
var statearr_32195_32220 = state_32182__$1;
(statearr_32195_32220[(2)] = null);

(statearr_32195_32220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32146 = (state_32182[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32182,(10),Object,null,(9));
var inst_32155 = chs__$1.call(null,inst_32146);
var inst_32156 = done.call(null,inst_32146);
var inst_32157 = cljs.core.async.take_BANG_.call(null,inst_32155,inst_32156);
var state_32182__$1 = state_32182;
var statearr_32196_32221 = state_32182__$1;
(statearr_32196_32221[(2)] = inst_32157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var inst_32146 = (state_32182[(7)]);
var inst_32159 = (state_32182[(2)]);
var inst_32160 = (inst_32146 + (1));
var inst_32146__$1 = inst_32160;
var state_32182__$1 = (function (){var statearr_32197 = state_32182;
(statearr_32197[(7)] = inst_32146__$1);

(statearr_32197[(10)] = inst_32159);

return statearr_32197;
})();
var statearr_32198_32222 = state_32182__$1;
(statearr_32198_32222[(2)] = null);

(statearr_32198_32222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var inst_32166 = (state_32182[(2)]);
var state_32182__$1 = (function (){var statearr_32199 = state_32182;
(statearr_32199[(11)] = inst_32166);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32182__$1,(12),dchan);
} else {
if((state_val_32183 === (14))){
var inst_32168 = (state_32182[(8)]);
var inst_32173 = cljs.core.apply.call(null,f,inst_32168);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32182__$1,(16),out,inst_32173);
} else {
if((state_val_32183 === (16))){
var inst_32175 = (state_32182[(2)]);
var state_32182__$1 = (function (){var statearr_32200 = state_32182;
(statearr_32200[(12)] = inst_32175);

return statearr_32200;
})();
var statearr_32201_32223 = state_32182__$1;
(statearr_32201_32223[(2)] = null);

(statearr_32201_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32150 = (state_32182[(2)]);
var inst_32151 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32182__$1 = (function (){var statearr_32202 = state_32182;
(statearr_32202[(13)] = inst_32150);

return statearr_32202;
})();
var statearr_32203_32224 = state_32182__$1;
(statearr_32203_32224[(2)] = inst_32151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (8))){
var inst_32164 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32204_32225 = state_32182__$1;
(statearr_32204_32225[(2)] = inst_32164);

(statearr_32204_32225[(1)] = (5));


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
});})(c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30797__auto__,c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32205[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32205[(1)] = (1));

return statearr_32205;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32182){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32206){if((e32206 instanceof Object)){
var ex__30801__auto__ = e32206;
var statearr_32207_32226 = state_32182;
(statearr_32207_32226[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32227 = state_32182;
state_32182 = G__32227;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30887__auto__ = (function (){var statearr_32208 = f__30886__auto__.call(null);
(statearr_32208[(6)] = c__30885__auto___32210);

return statearr_32208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32210,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32230 = arguments.length;
switch (G__32230) {
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
var c__30885__auto___32284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32284,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32284,out){
return (function (state_32262){
var state_val_32263 = (state_32262[(1)]);
if((state_val_32263 === (7))){
var inst_32242 = (state_32262[(7)]);
var inst_32241 = (state_32262[(8)]);
var inst_32241__$1 = (state_32262[(2)]);
var inst_32242__$1 = cljs.core.nth.call(null,inst_32241__$1,(0),null);
var inst_32243 = cljs.core.nth.call(null,inst_32241__$1,(1),null);
var inst_32244 = (inst_32242__$1 == null);
var state_32262__$1 = (function (){var statearr_32264 = state_32262;
(statearr_32264[(7)] = inst_32242__$1);

(statearr_32264[(9)] = inst_32243);

(statearr_32264[(8)] = inst_32241__$1);

return statearr_32264;
})();
if(cljs.core.truth_(inst_32244)){
var statearr_32265_32285 = state_32262__$1;
(statearr_32265_32285[(1)] = (8));

} else {
var statearr_32266_32286 = state_32262__$1;
(statearr_32266_32286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (1))){
var inst_32231 = cljs.core.vec.call(null,chs);
var inst_32232 = inst_32231;
var state_32262__$1 = (function (){var statearr_32267 = state_32262;
(statearr_32267[(10)] = inst_32232);

return statearr_32267;
})();
var statearr_32268_32287 = state_32262__$1;
(statearr_32268_32287[(2)] = null);

(statearr_32268_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (4))){
var inst_32232 = (state_32262[(10)]);
var state_32262__$1 = state_32262;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32262__$1,(7),inst_32232);
} else {
if((state_val_32263 === (6))){
var inst_32258 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
var statearr_32269_32288 = state_32262__$1;
(statearr_32269_32288[(2)] = inst_32258);

(statearr_32269_32288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (3))){
var inst_32260 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32262__$1,inst_32260);
} else {
if((state_val_32263 === (2))){
var inst_32232 = (state_32262[(10)]);
var inst_32234 = cljs.core.count.call(null,inst_32232);
var inst_32235 = (inst_32234 > (0));
var state_32262__$1 = state_32262;
if(cljs.core.truth_(inst_32235)){
var statearr_32271_32289 = state_32262__$1;
(statearr_32271_32289[(1)] = (4));

} else {
var statearr_32272_32290 = state_32262__$1;
(statearr_32272_32290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (11))){
var inst_32232 = (state_32262[(10)]);
var inst_32251 = (state_32262[(2)]);
var tmp32270 = inst_32232;
var inst_32232__$1 = tmp32270;
var state_32262__$1 = (function (){var statearr_32273 = state_32262;
(statearr_32273[(10)] = inst_32232__$1);

(statearr_32273[(11)] = inst_32251);

return statearr_32273;
})();
var statearr_32274_32291 = state_32262__$1;
(statearr_32274_32291[(2)] = null);

(statearr_32274_32291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (9))){
var inst_32242 = (state_32262[(7)]);
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32262__$1,(11),out,inst_32242);
} else {
if((state_val_32263 === (5))){
var inst_32256 = cljs.core.async.close_BANG_.call(null,out);
var state_32262__$1 = state_32262;
var statearr_32275_32292 = state_32262__$1;
(statearr_32275_32292[(2)] = inst_32256);

(statearr_32275_32292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (10))){
var inst_32254 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
var statearr_32276_32293 = state_32262__$1;
(statearr_32276_32293[(2)] = inst_32254);

(statearr_32276_32293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32263 === (8))){
var inst_32242 = (state_32262[(7)]);
var inst_32232 = (state_32262[(10)]);
var inst_32243 = (state_32262[(9)]);
var inst_32241 = (state_32262[(8)]);
var inst_32246 = (function (){var cs = inst_32232;
var vec__32237 = inst_32241;
var v = inst_32242;
var c = inst_32243;
return ((function (cs,vec__32237,v,c,inst_32242,inst_32232,inst_32243,inst_32241,state_val_32263,c__30885__auto___32284,out){
return (function (p1__32228_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32228_SHARP_);
});
;})(cs,vec__32237,v,c,inst_32242,inst_32232,inst_32243,inst_32241,state_val_32263,c__30885__auto___32284,out))
})();
var inst_32247 = cljs.core.filterv.call(null,inst_32246,inst_32232);
var inst_32232__$1 = inst_32247;
var state_32262__$1 = (function (){var statearr_32277 = state_32262;
(statearr_32277[(10)] = inst_32232__$1);

return statearr_32277;
})();
var statearr_32278_32294 = state_32262__$1;
(statearr_32278_32294[(2)] = null);

(statearr_32278_32294[(1)] = (2));


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
});})(c__30885__auto___32284,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32284,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32279[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32279[(1)] = (1));

return statearr_32279;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32262){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object)){
var ex__30801__auto__ = e32280;
var statearr_32281_32295 = state_32262;
(statearr_32281_32295[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32296 = state_32262;
state_32262 = G__32296;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32284,out))
})();
var state__30887__auto__ = (function (){var statearr_32282 = f__30886__auto__.call(null);
(statearr_32282[(6)] = c__30885__auto___32284);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32284,out))
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
var G__32298 = arguments.length;
switch (G__32298) {
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
var c__30885__auto___32343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32343,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32343,out){
return (function (state_32322){
var state_val_32323 = (state_32322[(1)]);
if((state_val_32323 === (7))){
var inst_32304 = (state_32322[(7)]);
var inst_32304__$1 = (state_32322[(2)]);
var inst_32305 = (inst_32304__$1 == null);
var inst_32306 = cljs.core.not.call(null,inst_32305);
var state_32322__$1 = (function (){var statearr_32324 = state_32322;
(statearr_32324[(7)] = inst_32304__$1);

return statearr_32324;
})();
if(inst_32306){
var statearr_32325_32344 = state_32322__$1;
(statearr_32325_32344[(1)] = (8));

} else {
var statearr_32326_32345 = state_32322__$1;
(statearr_32326_32345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (1))){
var inst_32299 = (0);
var state_32322__$1 = (function (){var statearr_32327 = state_32322;
(statearr_32327[(8)] = inst_32299);

return statearr_32327;
})();
var statearr_32328_32346 = state_32322__$1;
(statearr_32328_32346[(2)] = null);

(statearr_32328_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (4))){
var state_32322__$1 = state_32322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32322__$1,(7),ch);
} else {
if((state_val_32323 === (6))){
var inst_32317 = (state_32322[(2)]);
var state_32322__$1 = state_32322;
var statearr_32329_32347 = state_32322__$1;
(statearr_32329_32347[(2)] = inst_32317);

(statearr_32329_32347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (3))){
var inst_32319 = (state_32322[(2)]);
var inst_32320 = cljs.core.async.close_BANG_.call(null,out);
var state_32322__$1 = (function (){var statearr_32330 = state_32322;
(statearr_32330[(9)] = inst_32319);

return statearr_32330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32322__$1,inst_32320);
} else {
if((state_val_32323 === (2))){
var inst_32299 = (state_32322[(8)]);
var inst_32301 = (inst_32299 < n);
var state_32322__$1 = state_32322;
if(cljs.core.truth_(inst_32301)){
var statearr_32331_32348 = state_32322__$1;
(statearr_32331_32348[(1)] = (4));

} else {
var statearr_32332_32349 = state_32322__$1;
(statearr_32332_32349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (11))){
var inst_32299 = (state_32322[(8)]);
var inst_32309 = (state_32322[(2)]);
var inst_32310 = (inst_32299 + (1));
var inst_32299__$1 = inst_32310;
var state_32322__$1 = (function (){var statearr_32333 = state_32322;
(statearr_32333[(10)] = inst_32309);

(statearr_32333[(8)] = inst_32299__$1);

return statearr_32333;
})();
var statearr_32334_32350 = state_32322__$1;
(statearr_32334_32350[(2)] = null);

(statearr_32334_32350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (9))){
var state_32322__$1 = state_32322;
var statearr_32335_32351 = state_32322__$1;
(statearr_32335_32351[(2)] = null);

(statearr_32335_32351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (5))){
var state_32322__$1 = state_32322;
var statearr_32336_32352 = state_32322__$1;
(statearr_32336_32352[(2)] = null);

(statearr_32336_32352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (10))){
var inst_32314 = (state_32322[(2)]);
var state_32322__$1 = state_32322;
var statearr_32337_32353 = state_32322__$1;
(statearr_32337_32353[(2)] = inst_32314);

(statearr_32337_32353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32323 === (8))){
var inst_32304 = (state_32322[(7)]);
var state_32322__$1 = state_32322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32322__$1,(11),out,inst_32304);
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
});})(c__30885__auto___32343,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32343,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32322){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32339){if((e32339 instanceof Object)){
var ex__30801__auto__ = e32339;
var statearr_32340_32354 = state_32322;
(statearr_32340_32354[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32355 = state_32322;
state_32322 = G__32355;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32343,out))
})();
var state__30887__auto__ = (function (){var statearr_32341 = f__30886__auto__.call(null);
(statearr_32341[(6)] = c__30885__auto___32343);

return statearr_32341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32343,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32357 = (function (f,ch,meta32358){
this.f = f;
this.ch = ch;
this.meta32358 = meta32358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32359,meta32358__$1){
var self__ = this;
var _32359__$1 = this;
return (new cljs.core.async.t_cljs$core$async32357(self__.f,self__.ch,meta32358__$1));
});

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32359){
var self__ = this;
var _32359__$1 = this;
return self__.meta32358;
});

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32360 = (function (f,ch,meta32358,_,fn1,meta32361){
this.f = f;
this.ch = ch;
this.meta32358 = meta32358;
this._ = _;
this.fn1 = fn1;
this.meta32361 = meta32361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32362,meta32361__$1){
var self__ = this;
var _32362__$1 = this;
return (new cljs.core.async.t_cljs$core$async32360(self__.f,self__.ch,self__.meta32358,self__._,self__.fn1,meta32361__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32362){
var self__ = this;
var _32362__$1 = this;
return self__.meta32361;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32356_SHARP_){
return f1.call(null,(((p1__32356_SHARP_ == null))?null:self__.f.call(null,p1__32356_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32358","meta32358",782902004,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32357","cljs.core.async/t_cljs$core$async32357",-808747699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32361","meta32361",-39758409,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32360";

cljs.core.async.t_cljs$core$async32360.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32360");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32360 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32360(f__$1,ch__$1,meta32358__$1,___$2,fn1__$1,meta32361){
return (new cljs.core.async.t_cljs$core$async32360(f__$1,ch__$1,meta32358__$1,___$2,fn1__$1,meta32361));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32360(self__.f,self__.ch,self__.meta32358,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32358","meta32358",782902004,null)], null);
});

cljs.core.async.t_cljs$core$async32357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32357";

cljs.core.async.t_cljs$core$async32357.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32357");
});

cljs.core.async.__GT_t_cljs$core$async32357 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32357(f__$1,ch__$1,meta32358){
return (new cljs.core.async.t_cljs$core$async32357(f__$1,ch__$1,meta32358));
});

}

return (new cljs.core.async.t_cljs$core$async32357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32363 = (function (f,ch,meta32364){
this.f = f;
this.ch = ch;
this.meta32364 = meta32364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32365,meta32364__$1){
var self__ = this;
var _32365__$1 = this;
return (new cljs.core.async.t_cljs$core$async32363(self__.f,self__.ch,meta32364__$1));
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32365){
var self__ = this;
var _32365__$1 = this;
return self__.meta32364;
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32364","meta32364",174061861,null)], null);
});

cljs.core.async.t_cljs$core$async32363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32363";

cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32363");
});

cljs.core.async.__GT_t_cljs$core$async32363 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32363(f__$1,ch__$1,meta32364){
return (new cljs.core.async.t_cljs$core$async32363(f__$1,ch__$1,meta32364));
});

}

return (new cljs.core.async.t_cljs$core$async32363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32366 = (function (p,ch,meta32367){
this.p = p;
this.ch = ch;
this.meta32367 = meta32367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32368,meta32367__$1){
var self__ = this;
var _32368__$1 = this;
return (new cljs.core.async.t_cljs$core$async32366(self__.p,self__.ch,meta32367__$1));
});

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32368){
var self__ = this;
var _32368__$1 = this;
return self__.meta32367;
});

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32367","meta32367",-1067923416,null)], null);
});

cljs.core.async.t_cljs$core$async32366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32366";

cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async32366");
});

cljs.core.async.__GT_t_cljs$core$async32366 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32366(p__$1,ch__$1,meta32367){
return (new cljs.core.async.t_cljs$core$async32366(p__$1,ch__$1,meta32367));
});

}

return (new cljs.core.async.t_cljs$core$async32366(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32370 = arguments.length;
switch (G__32370) {
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
var c__30885__auto___32410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32410,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32410,out){
return (function (state_32391){
var state_val_32392 = (state_32391[(1)]);
if((state_val_32392 === (7))){
var inst_32387 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32393_32411 = state_32391__$1;
(statearr_32393_32411[(2)] = inst_32387);

(statearr_32393_32411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (1))){
var state_32391__$1 = state_32391;
var statearr_32394_32412 = state_32391__$1;
(statearr_32394_32412[(2)] = null);

(statearr_32394_32412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (4))){
var inst_32373 = (state_32391[(7)]);
var inst_32373__$1 = (state_32391[(2)]);
var inst_32374 = (inst_32373__$1 == null);
var state_32391__$1 = (function (){var statearr_32395 = state_32391;
(statearr_32395[(7)] = inst_32373__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32374)){
var statearr_32396_32413 = state_32391__$1;
(statearr_32396_32413[(1)] = (5));

} else {
var statearr_32397_32414 = state_32391__$1;
(statearr_32397_32414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (6))){
var inst_32373 = (state_32391[(7)]);
var inst_32378 = p.call(null,inst_32373);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32378)){
var statearr_32398_32415 = state_32391__$1;
(statearr_32398_32415[(1)] = (8));

} else {
var statearr_32399_32416 = state_32391__$1;
(statearr_32399_32416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (3))){
var inst_32389 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32391__$1,inst_32389);
} else {
if((state_val_32392 === (2))){
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32391__$1,(4),ch);
} else {
if((state_val_32392 === (11))){
var inst_32381 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32400_32417 = state_32391__$1;
(statearr_32400_32417[(2)] = inst_32381);

(statearr_32400_32417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (9))){
var state_32391__$1 = state_32391;
var statearr_32401_32418 = state_32391__$1;
(statearr_32401_32418[(2)] = null);

(statearr_32401_32418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (5))){
var inst_32376 = cljs.core.async.close_BANG_.call(null,out);
var state_32391__$1 = state_32391;
var statearr_32402_32419 = state_32391__$1;
(statearr_32402_32419[(2)] = inst_32376);

(statearr_32402_32419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (10))){
var inst_32384 = (state_32391[(2)]);
var state_32391__$1 = (function (){var statearr_32403 = state_32391;
(statearr_32403[(8)] = inst_32384);

return statearr_32403;
})();
var statearr_32404_32420 = state_32391__$1;
(statearr_32404_32420[(2)] = null);

(statearr_32404_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (8))){
var inst_32373 = (state_32391[(7)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32391__$1,(11),out,inst_32373);
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
});})(c__30885__auto___32410,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32410,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32391){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__30801__auto__ = e32406;
var statearr_32407_32421 = state_32391;
(statearr_32407_32421[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32422 = state_32391;
state_32391 = G__32422;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32410,out))
})();
var state__30887__auto__ = (function (){var statearr_32408 = f__30886__auto__.call(null);
(statearr_32408[(6)] = c__30885__auto___32410);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32410,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32424 = arguments.length;
switch (G__32424) {
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
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_32487){
var state_val_32488 = (state_32487[(1)]);
if((state_val_32488 === (7))){
var inst_32483 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32489_32527 = state_32487__$1;
(statearr_32489_32527[(2)] = inst_32483);

(statearr_32489_32527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (20))){
var inst_32453 = (state_32487[(7)]);
var inst_32464 = (state_32487[(2)]);
var inst_32465 = cljs.core.next.call(null,inst_32453);
var inst_32439 = inst_32465;
var inst_32440 = null;
var inst_32441 = (0);
var inst_32442 = (0);
var state_32487__$1 = (function (){var statearr_32490 = state_32487;
(statearr_32490[(8)] = inst_32442);

(statearr_32490[(9)] = inst_32441);

(statearr_32490[(10)] = inst_32464);

(statearr_32490[(11)] = inst_32440);

(statearr_32490[(12)] = inst_32439);

return statearr_32490;
})();
var statearr_32491_32528 = state_32487__$1;
(statearr_32491_32528[(2)] = null);

(statearr_32491_32528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (1))){
var state_32487__$1 = state_32487;
var statearr_32492_32529 = state_32487__$1;
(statearr_32492_32529[(2)] = null);

(statearr_32492_32529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (4))){
var inst_32428 = (state_32487[(13)]);
var inst_32428__$1 = (state_32487[(2)]);
var inst_32429 = (inst_32428__$1 == null);
var state_32487__$1 = (function (){var statearr_32493 = state_32487;
(statearr_32493[(13)] = inst_32428__$1);

return statearr_32493;
})();
if(cljs.core.truth_(inst_32429)){
var statearr_32494_32530 = state_32487__$1;
(statearr_32494_32530[(1)] = (5));

} else {
var statearr_32495_32531 = state_32487__$1;
(statearr_32495_32531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (15))){
var state_32487__$1 = state_32487;
var statearr_32499_32532 = state_32487__$1;
(statearr_32499_32532[(2)] = null);

(statearr_32499_32532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (21))){
var state_32487__$1 = state_32487;
var statearr_32500_32533 = state_32487__$1;
(statearr_32500_32533[(2)] = null);

(statearr_32500_32533[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (13))){
var inst_32442 = (state_32487[(8)]);
var inst_32441 = (state_32487[(9)]);
var inst_32440 = (state_32487[(11)]);
var inst_32439 = (state_32487[(12)]);
var inst_32449 = (state_32487[(2)]);
var inst_32450 = (inst_32442 + (1));
var tmp32496 = inst_32441;
var tmp32497 = inst_32440;
var tmp32498 = inst_32439;
var inst_32439__$1 = tmp32498;
var inst_32440__$1 = tmp32497;
var inst_32441__$1 = tmp32496;
var inst_32442__$1 = inst_32450;
var state_32487__$1 = (function (){var statearr_32501 = state_32487;
(statearr_32501[(8)] = inst_32442__$1);

(statearr_32501[(9)] = inst_32441__$1);

(statearr_32501[(14)] = inst_32449);

(statearr_32501[(11)] = inst_32440__$1);

(statearr_32501[(12)] = inst_32439__$1);

return statearr_32501;
})();
var statearr_32502_32534 = state_32487__$1;
(statearr_32502_32534[(2)] = null);

(statearr_32502_32534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (22))){
var state_32487__$1 = state_32487;
var statearr_32503_32535 = state_32487__$1;
(statearr_32503_32535[(2)] = null);

(statearr_32503_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (6))){
var inst_32428 = (state_32487[(13)]);
var inst_32437 = f.call(null,inst_32428);
var inst_32438 = cljs.core.seq.call(null,inst_32437);
var inst_32439 = inst_32438;
var inst_32440 = null;
var inst_32441 = (0);
var inst_32442 = (0);
var state_32487__$1 = (function (){var statearr_32504 = state_32487;
(statearr_32504[(8)] = inst_32442);

(statearr_32504[(9)] = inst_32441);

(statearr_32504[(11)] = inst_32440);

(statearr_32504[(12)] = inst_32439);

return statearr_32504;
})();
var statearr_32505_32536 = state_32487__$1;
(statearr_32505_32536[(2)] = null);

(statearr_32505_32536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (17))){
var inst_32453 = (state_32487[(7)]);
var inst_32457 = cljs.core.chunk_first.call(null,inst_32453);
var inst_32458 = cljs.core.chunk_rest.call(null,inst_32453);
var inst_32459 = cljs.core.count.call(null,inst_32457);
var inst_32439 = inst_32458;
var inst_32440 = inst_32457;
var inst_32441 = inst_32459;
var inst_32442 = (0);
var state_32487__$1 = (function (){var statearr_32506 = state_32487;
(statearr_32506[(8)] = inst_32442);

(statearr_32506[(9)] = inst_32441);

(statearr_32506[(11)] = inst_32440);

(statearr_32506[(12)] = inst_32439);

return statearr_32506;
})();
var statearr_32507_32537 = state_32487__$1;
(statearr_32507_32537[(2)] = null);

(statearr_32507_32537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (3))){
var inst_32485 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32487__$1,inst_32485);
} else {
if((state_val_32488 === (12))){
var inst_32473 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32508_32538 = state_32487__$1;
(statearr_32508_32538[(2)] = inst_32473);

(statearr_32508_32538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (2))){
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32487__$1,(4),in$);
} else {
if((state_val_32488 === (23))){
var inst_32481 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32509_32539 = state_32487__$1;
(statearr_32509_32539[(2)] = inst_32481);

(statearr_32509_32539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (19))){
var inst_32468 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32510_32540 = state_32487__$1;
(statearr_32510_32540[(2)] = inst_32468);

(statearr_32510_32540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (11))){
var inst_32453 = (state_32487[(7)]);
var inst_32439 = (state_32487[(12)]);
var inst_32453__$1 = cljs.core.seq.call(null,inst_32439);
var state_32487__$1 = (function (){var statearr_32511 = state_32487;
(statearr_32511[(7)] = inst_32453__$1);

return statearr_32511;
})();
if(inst_32453__$1){
var statearr_32512_32541 = state_32487__$1;
(statearr_32512_32541[(1)] = (14));

} else {
var statearr_32513_32542 = state_32487__$1;
(statearr_32513_32542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (9))){
var inst_32475 = (state_32487[(2)]);
var inst_32476 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32487__$1 = (function (){var statearr_32514 = state_32487;
(statearr_32514[(15)] = inst_32475);

return statearr_32514;
})();
if(cljs.core.truth_(inst_32476)){
var statearr_32515_32543 = state_32487__$1;
(statearr_32515_32543[(1)] = (21));

} else {
var statearr_32516_32544 = state_32487__$1;
(statearr_32516_32544[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (5))){
var inst_32431 = cljs.core.async.close_BANG_.call(null,out);
var state_32487__$1 = state_32487;
var statearr_32517_32545 = state_32487__$1;
(statearr_32517_32545[(2)] = inst_32431);

(statearr_32517_32545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (14))){
var inst_32453 = (state_32487[(7)]);
var inst_32455 = cljs.core.chunked_seq_QMARK_.call(null,inst_32453);
var state_32487__$1 = state_32487;
if(inst_32455){
var statearr_32518_32546 = state_32487__$1;
(statearr_32518_32546[(1)] = (17));

} else {
var statearr_32519_32547 = state_32487__$1;
(statearr_32519_32547[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (16))){
var inst_32471 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32520_32548 = state_32487__$1;
(statearr_32520_32548[(2)] = inst_32471);

(statearr_32520_32548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (10))){
var inst_32442 = (state_32487[(8)]);
var inst_32440 = (state_32487[(11)]);
var inst_32447 = cljs.core._nth.call(null,inst_32440,inst_32442);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,(13),out,inst_32447);
} else {
if((state_val_32488 === (18))){
var inst_32453 = (state_32487[(7)]);
var inst_32462 = cljs.core.first.call(null,inst_32453);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,(20),out,inst_32462);
} else {
if((state_val_32488 === (8))){
var inst_32442 = (state_32487[(8)]);
var inst_32441 = (state_32487[(9)]);
var inst_32444 = (inst_32442 < inst_32441);
var inst_32445 = inst_32444;
var state_32487__$1 = state_32487;
if(cljs.core.truth_(inst_32445)){
var statearr_32521_32549 = state_32487__$1;
(statearr_32521_32549[(1)] = (10));

} else {
var statearr_32522_32550 = state_32487__$1;
(statearr_32522_32550[(1)] = (11));

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
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____0 = (function (){
var statearr_32523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32523[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__);

(statearr_32523[(1)] = (1));

return statearr_32523;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____1 = (function (state_32487){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32524){if((e32524 instanceof Object)){
var ex__30801__auto__ = e32524;
var statearr_32525_32551 = state_32487;
(statearr_32525_32551[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32552 = state_32487;
state_32487 = G__32552;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__ = function(state_32487){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____1.call(this,state_32487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30798__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_32526 = f__30886__auto__.call(null);
(statearr_32526[(6)] = c__30885__auto__);

return statearr_32526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32554 = arguments.length;
switch (G__32554) {
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
var G__32557 = arguments.length;
switch (G__32557) {
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
var G__32560 = arguments.length;
switch (G__32560) {
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
var c__30885__auto___32607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32607,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32607,out){
return (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (7))){
var inst_32579 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32586_32608 = state_32584__$1;
(statearr_32586_32608[(2)] = inst_32579);

(statearr_32586_32608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (1))){
var inst_32561 = null;
var state_32584__$1 = (function (){var statearr_32587 = state_32584;
(statearr_32587[(7)] = inst_32561);

return statearr_32587;
})();
var statearr_32588_32609 = state_32584__$1;
(statearr_32588_32609[(2)] = null);

(statearr_32588_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (4))){
var inst_32564 = (state_32584[(8)]);
var inst_32564__$1 = (state_32584[(2)]);
var inst_32565 = (inst_32564__$1 == null);
var inst_32566 = cljs.core.not.call(null,inst_32565);
var state_32584__$1 = (function (){var statearr_32589 = state_32584;
(statearr_32589[(8)] = inst_32564__$1);

return statearr_32589;
})();
if(inst_32566){
var statearr_32590_32610 = state_32584__$1;
(statearr_32590_32610[(1)] = (5));

} else {
var statearr_32591_32611 = state_32584__$1;
(statearr_32591_32611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (6))){
var state_32584__$1 = state_32584;
var statearr_32592_32612 = state_32584__$1;
(statearr_32592_32612[(2)] = null);

(statearr_32592_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (3))){
var inst_32581 = (state_32584[(2)]);
var inst_32582 = cljs.core.async.close_BANG_.call(null,out);
var state_32584__$1 = (function (){var statearr_32593 = state_32584;
(statearr_32593[(9)] = inst_32581);

return statearr_32593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32584__$1,inst_32582);
} else {
if((state_val_32585 === (2))){
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(4),ch);
} else {
if((state_val_32585 === (11))){
var inst_32564 = (state_32584[(8)]);
var inst_32573 = (state_32584[(2)]);
var inst_32561 = inst_32564;
var state_32584__$1 = (function (){var statearr_32594 = state_32584;
(statearr_32594[(10)] = inst_32573);

(statearr_32594[(7)] = inst_32561);

return statearr_32594;
})();
var statearr_32595_32613 = state_32584__$1;
(statearr_32595_32613[(2)] = null);

(statearr_32595_32613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (9))){
var inst_32564 = (state_32584[(8)]);
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32584__$1,(11),out,inst_32564);
} else {
if((state_val_32585 === (5))){
var inst_32564 = (state_32584[(8)]);
var inst_32561 = (state_32584[(7)]);
var inst_32568 = cljs.core._EQ_.call(null,inst_32564,inst_32561);
var state_32584__$1 = state_32584;
if(inst_32568){
var statearr_32597_32614 = state_32584__$1;
(statearr_32597_32614[(1)] = (8));

} else {
var statearr_32598_32615 = state_32584__$1;
(statearr_32598_32615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (10))){
var inst_32576 = (state_32584[(2)]);
var state_32584__$1 = state_32584;
var statearr_32599_32616 = state_32584__$1;
(statearr_32599_32616[(2)] = inst_32576);

(statearr_32599_32616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32585 === (8))){
var inst_32561 = (state_32584[(7)]);
var tmp32596 = inst_32561;
var inst_32561__$1 = tmp32596;
var state_32584__$1 = (function (){var statearr_32600 = state_32584;
(statearr_32600[(7)] = inst_32561__$1);

return statearr_32600;
})();
var statearr_32601_32617 = state_32584__$1;
(statearr_32601_32617[(2)] = null);

(statearr_32601_32617[(1)] = (2));


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
});})(c__30885__auto___32607,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32607,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32602[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32602[(1)] = (1));

return statearr_32602;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32584){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32603){if((e32603 instanceof Object)){
var ex__30801__auto__ = e32603;
var statearr_32604_32618 = state_32584;
(statearr_32604_32618[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32619 = state_32584;
state_32584 = G__32619;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32607,out))
})();
var state__30887__auto__ = (function (){var statearr_32605 = f__30886__auto__.call(null);
(statearr_32605[(6)] = c__30885__auto___32607);

return statearr_32605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32607,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32621 = arguments.length;
switch (G__32621) {
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
var c__30885__auto___32687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32687,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32687,out){
return (function (state_32659){
var state_val_32660 = (state_32659[(1)]);
if((state_val_32660 === (7))){
var inst_32655 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
var statearr_32661_32688 = state_32659__$1;
(statearr_32661_32688[(2)] = inst_32655);

(statearr_32661_32688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (1))){
var inst_32622 = (new Array(n));
var inst_32623 = inst_32622;
var inst_32624 = (0);
var state_32659__$1 = (function (){var statearr_32662 = state_32659;
(statearr_32662[(7)] = inst_32624);

(statearr_32662[(8)] = inst_32623);

return statearr_32662;
})();
var statearr_32663_32689 = state_32659__$1;
(statearr_32663_32689[(2)] = null);

(statearr_32663_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (4))){
var inst_32627 = (state_32659[(9)]);
var inst_32627__$1 = (state_32659[(2)]);
var inst_32628 = (inst_32627__$1 == null);
var inst_32629 = cljs.core.not.call(null,inst_32628);
var state_32659__$1 = (function (){var statearr_32664 = state_32659;
(statearr_32664[(9)] = inst_32627__$1);

return statearr_32664;
})();
if(inst_32629){
var statearr_32665_32690 = state_32659__$1;
(statearr_32665_32690[(1)] = (5));

} else {
var statearr_32666_32691 = state_32659__$1;
(statearr_32666_32691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (15))){
var inst_32649 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
var statearr_32667_32692 = state_32659__$1;
(statearr_32667_32692[(2)] = inst_32649);

(statearr_32667_32692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (13))){
var state_32659__$1 = state_32659;
var statearr_32668_32693 = state_32659__$1;
(statearr_32668_32693[(2)] = null);

(statearr_32668_32693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (6))){
var inst_32624 = (state_32659[(7)]);
var inst_32645 = (inst_32624 > (0));
var state_32659__$1 = state_32659;
if(cljs.core.truth_(inst_32645)){
var statearr_32669_32694 = state_32659__$1;
(statearr_32669_32694[(1)] = (12));

} else {
var statearr_32670_32695 = state_32659__$1;
(statearr_32670_32695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (3))){
var inst_32657 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32659__$1,inst_32657);
} else {
if((state_val_32660 === (12))){
var inst_32623 = (state_32659[(8)]);
var inst_32647 = cljs.core.vec.call(null,inst_32623);
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32659__$1,(15),out,inst_32647);
} else {
if((state_val_32660 === (2))){
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32659__$1,(4),ch);
} else {
if((state_val_32660 === (11))){
var inst_32639 = (state_32659[(2)]);
var inst_32640 = (new Array(n));
var inst_32623 = inst_32640;
var inst_32624 = (0);
var state_32659__$1 = (function (){var statearr_32671 = state_32659;
(statearr_32671[(10)] = inst_32639);

(statearr_32671[(7)] = inst_32624);

(statearr_32671[(8)] = inst_32623);

return statearr_32671;
})();
var statearr_32672_32696 = state_32659__$1;
(statearr_32672_32696[(2)] = null);

(statearr_32672_32696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (9))){
var inst_32623 = (state_32659[(8)]);
var inst_32637 = cljs.core.vec.call(null,inst_32623);
var state_32659__$1 = state_32659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32659__$1,(11),out,inst_32637);
} else {
if((state_val_32660 === (5))){
var inst_32627 = (state_32659[(9)]);
var inst_32624 = (state_32659[(7)]);
var inst_32632 = (state_32659[(11)]);
var inst_32623 = (state_32659[(8)]);
var inst_32631 = (inst_32623[inst_32624] = inst_32627);
var inst_32632__$1 = (inst_32624 + (1));
var inst_32633 = (inst_32632__$1 < n);
var state_32659__$1 = (function (){var statearr_32673 = state_32659;
(statearr_32673[(12)] = inst_32631);

(statearr_32673[(11)] = inst_32632__$1);

return statearr_32673;
})();
if(cljs.core.truth_(inst_32633)){
var statearr_32674_32697 = state_32659__$1;
(statearr_32674_32697[(1)] = (8));

} else {
var statearr_32675_32698 = state_32659__$1;
(statearr_32675_32698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (14))){
var inst_32652 = (state_32659[(2)]);
var inst_32653 = cljs.core.async.close_BANG_.call(null,out);
var state_32659__$1 = (function (){var statearr_32677 = state_32659;
(statearr_32677[(13)] = inst_32652);

return statearr_32677;
})();
var statearr_32678_32699 = state_32659__$1;
(statearr_32678_32699[(2)] = inst_32653);

(statearr_32678_32699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (10))){
var inst_32643 = (state_32659[(2)]);
var state_32659__$1 = state_32659;
var statearr_32679_32700 = state_32659__$1;
(statearr_32679_32700[(2)] = inst_32643);

(statearr_32679_32700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32660 === (8))){
var inst_32632 = (state_32659[(11)]);
var inst_32623 = (state_32659[(8)]);
var tmp32676 = inst_32623;
var inst_32623__$1 = tmp32676;
var inst_32624 = inst_32632;
var state_32659__$1 = (function (){var statearr_32680 = state_32659;
(statearr_32680[(7)] = inst_32624);

(statearr_32680[(8)] = inst_32623__$1);

return statearr_32680;
})();
var statearr_32681_32701 = state_32659__$1;
(statearr_32681_32701[(2)] = null);

(statearr_32681_32701[(1)] = (2));


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
});})(c__30885__auto___32687,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32687,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32682[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32682[(1)] = (1));

return statearr_32682;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32659){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32683){if((e32683 instanceof Object)){
var ex__30801__auto__ = e32683;
var statearr_32684_32702 = state_32659;
(statearr_32684_32702[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32703 = state_32659;
state_32659 = G__32703;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32687,out))
})();
var state__30887__auto__ = (function (){var statearr_32685 = f__30886__auto__.call(null);
(statearr_32685[(6)] = c__30885__auto___32687);

return statearr_32685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32687,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32705 = arguments.length;
switch (G__32705) {
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
var c__30885__auto___32775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___32775,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___32775,out){
return (function (state_32747){
var state_val_32748 = (state_32747[(1)]);
if((state_val_32748 === (7))){
var inst_32743 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
var statearr_32749_32776 = state_32747__$1;
(statearr_32749_32776[(2)] = inst_32743);

(statearr_32749_32776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (1))){
var inst_32706 = [];
var inst_32707 = inst_32706;
var inst_32708 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32747__$1 = (function (){var statearr_32750 = state_32747;
(statearr_32750[(7)] = inst_32708);

(statearr_32750[(8)] = inst_32707);

return statearr_32750;
})();
var statearr_32751_32777 = state_32747__$1;
(statearr_32751_32777[(2)] = null);

(statearr_32751_32777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (4))){
var inst_32711 = (state_32747[(9)]);
var inst_32711__$1 = (state_32747[(2)]);
var inst_32712 = (inst_32711__$1 == null);
var inst_32713 = cljs.core.not.call(null,inst_32712);
var state_32747__$1 = (function (){var statearr_32752 = state_32747;
(statearr_32752[(9)] = inst_32711__$1);

return statearr_32752;
})();
if(inst_32713){
var statearr_32753_32778 = state_32747__$1;
(statearr_32753_32778[(1)] = (5));

} else {
var statearr_32754_32779 = state_32747__$1;
(statearr_32754_32779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (15))){
var inst_32737 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
var statearr_32755_32780 = state_32747__$1;
(statearr_32755_32780[(2)] = inst_32737);

(statearr_32755_32780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (13))){
var state_32747__$1 = state_32747;
var statearr_32756_32781 = state_32747__$1;
(statearr_32756_32781[(2)] = null);

(statearr_32756_32781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (6))){
var inst_32707 = (state_32747[(8)]);
var inst_32732 = inst_32707.length;
var inst_32733 = (inst_32732 > (0));
var state_32747__$1 = state_32747;
if(cljs.core.truth_(inst_32733)){
var statearr_32757_32782 = state_32747__$1;
(statearr_32757_32782[(1)] = (12));

} else {
var statearr_32758_32783 = state_32747__$1;
(statearr_32758_32783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (3))){
var inst_32745 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32747__$1,inst_32745);
} else {
if((state_val_32748 === (12))){
var inst_32707 = (state_32747[(8)]);
var inst_32735 = cljs.core.vec.call(null,inst_32707);
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32747__$1,(15),out,inst_32735);
} else {
if((state_val_32748 === (2))){
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32747__$1,(4),ch);
} else {
if((state_val_32748 === (11))){
var inst_32715 = (state_32747[(10)]);
var inst_32711 = (state_32747[(9)]);
var inst_32725 = (state_32747[(2)]);
var inst_32726 = [];
var inst_32727 = inst_32726.push(inst_32711);
var inst_32707 = inst_32726;
var inst_32708 = inst_32715;
var state_32747__$1 = (function (){var statearr_32759 = state_32747;
(statearr_32759[(7)] = inst_32708);

(statearr_32759[(8)] = inst_32707);

(statearr_32759[(11)] = inst_32725);

(statearr_32759[(12)] = inst_32727);

return statearr_32759;
})();
var statearr_32760_32784 = state_32747__$1;
(statearr_32760_32784[(2)] = null);

(statearr_32760_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (9))){
var inst_32707 = (state_32747[(8)]);
var inst_32723 = cljs.core.vec.call(null,inst_32707);
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32747__$1,(11),out,inst_32723);
} else {
if((state_val_32748 === (5))){
var inst_32708 = (state_32747[(7)]);
var inst_32715 = (state_32747[(10)]);
var inst_32711 = (state_32747[(9)]);
var inst_32715__$1 = f.call(null,inst_32711);
var inst_32716 = cljs.core._EQ_.call(null,inst_32715__$1,inst_32708);
var inst_32717 = cljs.core.keyword_identical_QMARK_.call(null,inst_32708,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32718 = (inst_32716) || (inst_32717);
var state_32747__$1 = (function (){var statearr_32761 = state_32747;
(statearr_32761[(10)] = inst_32715__$1);

return statearr_32761;
})();
if(cljs.core.truth_(inst_32718)){
var statearr_32762_32785 = state_32747__$1;
(statearr_32762_32785[(1)] = (8));

} else {
var statearr_32763_32786 = state_32747__$1;
(statearr_32763_32786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (14))){
var inst_32740 = (state_32747[(2)]);
var inst_32741 = cljs.core.async.close_BANG_.call(null,out);
var state_32747__$1 = (function (){var statearr_32765 = state_32747;
(statearr_32765[(13)] = inst_32740);

return statearr_32765;
})();
var statearr_32766_32787 = state_32747__$1;
(statearr_32766_32787[(2)] = inst_32741);

(statearr_32766_32787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (10))){
var inst_32730 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
var statearr_32767_32788 = state_32747__$1;
(statearr_32767_32788[(2)] = inst_32730);

(statearr_32767_32788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (8))){
var inst_32707 = (state_32747[(8)]);
var inst_32715 = (state_32747[(10)]);
var inst_32711 = (state_32747[(9)]);
var inst_32720 = inst_32707.push(inst_32711);
var tmp32764 = inst_32707;
var inst_32707__$1 = tmp32764;
var inst_32708 = inst_32715;
var state_32747__$1 = (function (){var statearr_32768 = state_32747;
(statearr_32768[(7)] = inst_32708);

(statearr_32768[(8)] = inst_32707__$1);

(statearr_32768[(14)] = inst_32720);

return statearr_32768;
})();
var statearr_32769_32789 = state_32747__$1;
(statearr_32769_32789[(2)] = null);

(statearr_32769_32789[(1)] = (2));


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
});})(c__30885__auto___32775,out))
;
return ((function (switch__30797__auto__,c__30885__auto___32775,out){
return (function() {
var cljs$core$async$state_machine__30798__auto__ = null;
var cljs$core$async$state_machine__30798__auto____0 = (function (){
var statearr_32770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32770[(0)] = cljs$core$async$state_machine__30798__auto__);

(statearr_32770[(1)] = (1));

return statearr_32770;
});
var cljs$core$async$state_machine__30798__auto____1 = (function (state_32747){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_32747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e32771){if((e32771 instanceof Object)){
var ex__30801__auto__ = e32771;
var statearr_32772_32790 = state_32747;
(statearr_32772_32790[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32791 = state_32747;
state_32747 = G__32791;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
cljs$core$async$state_machine__30798__auto__ = function(state_32747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30798__auto____1.call(this,state_32747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30798__auto____0;
cljs$core$async$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30798__auto____1;
return cljs$core$async$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___32775,out))
})();
var state__30887__auto__ = (function (){var statearr_32773 = f__30886__auto__.call(null);
(statearr_32773[(6)] = c__30885__auto___32775);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___32775,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515786729157
