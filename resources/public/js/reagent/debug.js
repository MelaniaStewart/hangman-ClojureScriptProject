// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9356__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9357__i = 0, G__9357__a = new Array(arguments.length -  0);
while (G__9357__i < G__9357__a.length) {G__9357__a[G__9357__i] = arguments[G__9357__i + 0]; ++G__9357__i;}
  args = new cljs.core.IndexedSeq(G__9357__a,0,null);
} 
return G__9356__delegate.call(this,args);};
G__9356.cljs$lang$maxFixedArity = 0;
G__9356.cljs$lang$applyTo = (function (arglist__9358){
var args = cljs.core.seq(arglist__9358);
return G__9356__delegate(args);
});
G__9356.cljs$core$IFn$_invoke$arity$variadic = G__9356__delegate;
return G__9356;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9359__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9360__i = 0, G__9360__a = new Array(arguments.length -  0);
while (G__9360__i < G__9360__a.length) {G__9360__a[G__9360__i] = arguments[G__9360__i + 0]; ++G__9360__i;}
  args = new cljs.core.IndexedSeq(G__9360__a,0,null);
} 
return G__9359__delegate.call(this,args);};
G__9359.cljs$lang$maxFixedArity = 0;
G__9359.cljs$lang$applyTo = (function (arglist__9361){
var args = cljs.core.seq(arglist__9361);
return G__9359__delegate(args);
});
G__9359.cljs$core$IFn$_invoke$arity$variadic = G__9359__delegate;
return G__9359;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512758122231
