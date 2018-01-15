// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__14273_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__14273_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___14274 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___14274)){
var not_i_14275 = temp__4657__auto___14274;
if(cljs.core.fn_QMARK_.call(null,not_i_14275)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_14275);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_14275);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_14276 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14277 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14221__auto___14290 = re_frame.interop.now.call(null);
var duration__14222__auto___14291 = (end__14221__auto___14290 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14278_14292 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__14279_14293 = null;
var count__14280_14294 = (0);
var i__14281_14295 = (0);
while(true){
if((i__14281_14295 < count__14280_14294)){
var vec__14282_14296 = cljs.core._nth.call(null,chunk__14279_14293,i__14281_14295);
var k__14223__auto___14297 = cljs.core.nth.call(null,vec__14282_14296,(0),null);
var cb__14224__auto___14298 = cljs.core.nth.call(null,vec__14282_14296,(1),null);
try{cb__14224__auto___14298.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14222__auto___14291,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14285){if((e14285 instanceof java.lang.Exception)){
var e__14225__auto___14299 = e14285;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__14223__auto___14297,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14225__auto___14299);
} else {
throw e14285;

}
}
var G__14300 = seq__14278_14292;
var G__14301 = chunk__14279_14293;
var G__14302 = count__14280_14294;
var G__14303 = (i__14281_14295 + (1));
seq__14278_14292 = G__14300;
chunk__14279_14293 = G__14301;
count__14280_14294 = G__14302;
i__14281_14295 = G__14303;
continue;
} else {
var temp__4657__auto___14304 = cljs.core.seq.call(null,seq__14278_14292);
if(temp__4657__auto___14304){
var seq__14278_14305__$1 = temp__4657__auto___14304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14278_14305__$1)){
var c__8484__auto___14306 = cljs.core.chunk_first.call(null,seq__14278_14305__$1);
var G__14307 = cljs.core.chunk_rest.call(null,seq__14278_14305__$1);
var G__14308 = c__8484__auto___14306;
var G__14309 = cljs.core.count.call(null,c__8484__auto___14306);
var G__14310 = (0);
seq__14278_14292 = G__14307;
chunk__14279_14293 = G__14308;
count__14280_14294 = G__14309;
i__14281_14295 = G__14310;
continue;
} else {
var vec__14286_14311 = cljs.core.first.call(null,seq__14278_14305__$1);
var k__14223__auto___14312 = cljs.core.nth.call(null,vec__14286_14311,(0),null);
var cb__14224__auto___14313 = cljs.core.nth.call(null,vec__14286_14311,(1),null);
try{cb__14224__auto___14313.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14222__auto___14291,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e14289){if((e14289 instanceof java.lang.Exception)){
var e__14225__auto___14314 = e14289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__14223__auto___14312,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14225__auto___14314);
} else {
throw e14289;

}
}
var G__14315 = cljs.core.next.call(null,seq__14278_14305__$1);
var G__14316 = null;
var G__14317 = (0);
var G__14318 = (0);
seq__14278_14292 = G__14315;
chunk__14279_14293 = G__14316;
count__14280_14294 = G__14317;
i__14281_14295 = G__14318;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14277;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_14276;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1512758132380
