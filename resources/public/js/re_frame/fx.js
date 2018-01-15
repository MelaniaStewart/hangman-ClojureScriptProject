// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__14393 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14394 = null;
var count__14395 = (0);
var i__14396 = (0);
while(true){
if((i__14396 < count__14395)){
var vec__14397 = cljs.core._nth.call(null,chunk__14394,i__14396);
var effect_key = cljs.core.nth.call(null,vec__14397,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14397,(1),null);
var temp__4655__auto___14403 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14403)){
var effect_fn_14404 = temp__4655__auto___14403;
effect_fn_14404.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__14405 = seq__14393;
var G__14406 = chunk__14394;
var G__14407 = count__14395;
var G__14408 = (i__14396 + (1));
seq__14393 = G__14405;
chunk__14394 = G__14406;
count__14395 = G__14407;
i__14396 = G__14408;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14393);
if(temp__4657__auto__){
var seq__14393__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14393__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__14393__$1);
var G__14409 = cljs.core.chunk_rest.call(null,seq__14393__$1);
var G__14410 = c__8484__auto__;
var G__14411 = cljs.core.count.call(null,c__8484__auto__);
var G__14412 = (0);
seq__14393 = G__14409;
chunk__14394 = G__14410;
count__14395 = G__14411;
i__14396 = G__14412;
continue;
} else {
var vec__14400 = cljs.core.first.call(null,seq__14393__$1);
var effect_key = cljs.core.nth.call(null,vec__14400,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14400,(1),null);
var temp__4655__auto___14413 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___14413)){
var effect_fn_14414 = temp__4655__auto___14413;
effect_fn_14414.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__14415 = cljs.core.next.call(null,seq__14393__$1);
var G__14416 = null;
var G__14417 = (0);
var G__14418 = (0);
seq__14393 = G__14415;
chunk__14394 = G__14416;
count__14395 = G__14417;
i__14396 = G__14418;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__14419 = cljs.core.seq.call(null,value);
var chunk__14420 = null;
var count__14421 = (0);
var i__14422 = (0);
while(true){
if((i__14422 < count__14421)){
var map__14423 = cljs.core._nth.call(null,chunk__14420,i__14422);
var map__14423__$1 = ((((!((map__14423 == null)))?((((map__14423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14423):map__14423);
var effect = map__14423__$1;
var ms = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14423__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14419,chunk__14420,count__14421,i__14422,map__14423,map__14423__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14419,chunk__14420,count__14421,i__14422,map__14423,map__14423__$1,effect,ms,dispatch))
,ms);
}

var G__14427 = seq__14419;
var G__14428 = chunk__14420;
var G__14429 = count__14421;
var G__14430 = (i__14422 + (1));
seq__14419 = G__14427;
chunk__14420 = G__14428;
count__14421 = G__14429;
i__14422 = G__14430;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14419);
if(temp__4657__auto__){
var seq__14419__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14419__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__14419__$1);
var G__14431 = cljs.core.chunk_rest.call(null,seq__14419__$1);
var G__14432 = c__8484__auto__;
var G__14433 = cljs.core.count.call(null,c__8484__auto__);
var G__14434 = (0);
seq__14419 = G__14431;
chunk__14420 = G__14432;
count__14421 = G__14433;
i__14422 = G__14434;
continue;
} else {
var map__14425 = cljs.core.first.call(null,seq__14419__$1);
var map__14425__$1 = ((((!((map__14425 == null)))?((((map__14425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14425):map__14425);
var effect = map__14425__$1;
var ms = cljs.core.get.call(null,map__14425__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14425__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14419,chunk__14420,count__14421,i__14422,map__14425,map__14425__$1,effect,ms,dispatch,seq__14419__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14419,chunk__14420,count__14421,i__14422,map__14425,map__14425__$1,effect,ms,dispatch,seq__14419__$1,temp__4657__auto__))
,ms);
}

var G__14435 = cljs.core.next.call(null,seq__14419__$1);
var G__14436 = null;
var G__14437 = (0);
var G__14438 = (0);
seq__14419 = G__14435;
chunk__14420 = G__14436;
count__14421 = G__14437;
i__14422 = G__14438;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__14439 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14440 = null;
var count__14441 = (0);
var i__14442 = (0);
while(true){
if((i__14442 < count__14441)){
var event = cljs.core._nth.call(null,chunk__14440,i__14442);
re_frame.router.dispatch.call(null,event);

var G__14443 = seq__14439;
var G__14444 = chunk__14440;
var G__14445 = count__14441;
var G__14446 = (i__14442 + (1));
seq__14439 = G__14443;
chunk__14440 = G__14444;
count__14441 = G__14445;
i__14442 = G__14446;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14439);
if(temp__4657__auto__){
var seq__14439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14439__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__14439__$1);
var G__14447 = cljs.core.chunk_rest.call(null,seq__14439__$1);
var G__14448 = c__8484__auto__;
var G__14449 = cljs.core.count.call(null,c__8484__auto__);
var G__14450 = (0);
seq__14439 = G__14447;
chunk__14440 = G__14448;
count__14441 = G__14449;
i__14442 = G__14450;
continue;
} else {
var event = cljs.core.first.call(null,seq__14439__$1);
re_frame.router.dispatch.call(null,event);

var G__14451 = cljs.core.next.call(null,seq__14439__$1);
var G__14452 = null;
var G__14453 = (0);
var G__14454 = (0);
seq__14439 = G__14451;
chunk__14440 = G__14452;
count__14441 = G__14453;
i__14442 = G__14454;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14455 = cljs.core.seq.call(null,value);
var chunk__14456 = null;
var count__14457 = (0);
var i__14458 = (0);
while(true){
if((i__14458 < count__14457)){
var event = cljs.core._nth.call(null,chunk__14456,i__14458);
clear_event.call(null,event);

var G__14459 = seq__14455;
var G__14460 = chunk__14456;
var G__14461 = count__14457;
var G__14462 = (i__14458 + (1));
seq__14455 = G__14459;
chunk__14456 = G__14460;
count__14457 = G__14461;
i__14458 = G__14462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14455);
if(temp__4657__auto__){
var seq__14455__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14455__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__14455__$1);
var G__14463 = cljs.core.chunk_rest.call(null,seq__14455__$1);
var G__14464 = c__8484__auto__;
var G__14465 = cljs.core.count.call(null,c__8484__auto__);
var G__14466 = (0);
seq__14455 = G__14463;
chunk__14456 = G__14464;
count__14457 = G__14465;
i__14458 = G__14466;
continue;
} else {
var event = cljs.core.first.call(null,seq__14455__$1);
clear_event.call(null,event);

var G__14467 = cljs.core.next.call(null,seq__14455__$1);
var G__14468 = null;
var G__14469 = (0);
var G__14470 = (0);
seq__14455 = G__14467;
chunk__14456 = G__14468;
count__14457 = G__14469;
i__14458 = G__14470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1512758132734
