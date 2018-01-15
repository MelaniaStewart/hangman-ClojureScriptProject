// Compiled by ClojureScript 1.9.908 {}
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
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34157){if((e34157 instanceof Error)){
var e = e34157;
return "Error: Unable to stringify";
} else {
throw e34157;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34160 = arguments.length;
switch (G__34160) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34158_SHARP_){
if(typeof p1__34158_SHARP_ === 'string'){
return p1__34158_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34158_SHARP_);
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
var args__29462__auto__ = [];
var len__29455__auto___34163 = arguments.length;
var i__29456__auto___34164 = (0);
while(true){
if((i__29456__auto___34164 < len__29455__auto___34163)){
args__29462__auto__.push((arguments[i__29456__auto___34164]));

var G__34165 = (i__29456__auto___34164 + (1));
i__29456__auto___34164 = G__34165;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34162){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34162));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___34167 = arguments.length;
var i__29456__auto___34168 = (0);
while(true){
if((i__29456__auto___34168 < len__29455__auto___34167)){
args__29462__auto__.push((arguments[i__29456__auto___34168]));

var G__34169 = (i__29456__auto___34168 + (1));
i__29456__auto___34168 = G__34169;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34166){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34166));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
if((b === true) || (b === false)){
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
if((b === true) || (b === false)){
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34170){
var map__34171 = p__34170;
var map__34171__$1 = ((((!((map__34171 == null)))?((((map__34171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34171):map__34171);
var message = cljs.core.get.call(null,map__34171__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34171__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
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
var c__30885__auto___34250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___34250,ch){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___34250,ch){
return (function (state_34222){
var state_val_34223 = (state_34222[(1)]);
if((state_val_34223 === (7))){
var inst_34218 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34224_34251 = state_34222__$1;
(statearr_34224_34251[(2)] = inst_34218);

(statearr_34224_34251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (1))){
var state_34222__$1 = state_34222;
var statearr_34225_34252 = state_34222__$1;
(statearr_34225_34252[(2)] = null);

(statearr_34225_34252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (4))){
var inst_34175 = (state_34222[(7)]);
var inst_34175__$1 = (state_34222[(2)]);
var state_34222__$1 = (function (){var statearr_34226 = state_34222;
(statearr_34226[(7)] = inst_34175__$1);

return statearr_34226;
})();
if(cljs.core.truth_(inst_34175__$1)){
var statearr_34227_34253 = state_34222__$1;
(statearr_34227_34253[(1)] = (5));

} else {
var statearr_34228_34254 = state_34222__$1;
(statearr_34228_34254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (15))){
var inst_34182 = (state_34222[(8)]);
var inst_34197 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34182);
var inst_34198 = cljs.core.first.call(null,inst_34197);
var inst_34199 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34198);
var inst_34200 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34199)].join('');
var inst_34201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34200);
var state_34222__$1 = state_34222;
var statearr_34229_34255 = state_34222__$1;
(statearr_34229_34255[(2)] = inst_34201);

(statearr_34229_34255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (13))){
var inst_34206 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34230_34256 = state_34222__$1;
(statearr_34230_34256[(2)] = inst_34206);

(statearr_34230_34256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (6))){
var state_34222__$1 = state_34222;
var statearr_34231_34257 = state_34222__$1;
(statearr_34231_34257[(2)] = null);

(statearr_34231_34257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (17))){
var inst_34204 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34232_34258 = state_34222__$1;
(statearr_34232_34258[(2)] = inst_34204);

(statearr_34232_34258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (3))){
var inst_34220 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34222__$1,inst_34220);
} else {
if((state_val_34223 === (12))){
var inst_34181 = (state_34222[(9)]);
var inst_34195 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34181,opts);
var state_34222__$1 = state_34222;
if(cljs.core.truth_(inst_34195)){
var statearr_34233_34259 = state_34222__$1;
(statearr_34233_34259[(1)] = (15));

} else {
var statearr_34234_34260 = state_34222__$1;
(statearr_34234_34260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (2))){
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34222__$1,(4),ch);
} else {
if((state_val_34223 === (11))){
var inst_34182 = (state_34222[(8)]);
var inst_34187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34188 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34182);
var inst_34189 = cljs.core.async.timeout.call(null,(1000));
var inst_34190 = [inst_34188,inst_34189];
var inst_34191 = (new cljs.core.PersistentVector(null,2,(5),inst_34187,inst_34190,null));
var state_34222__$1 = state_34222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34222__$1,(14),inst_34191);
} else {
if((state_val_34223 === (9))){
var inst_34182 = (state_34222[(8)]);
var inst_34208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34182);
var inst_34210 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34209);
var inst_34211 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34210)].join('');
var inst_34212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34211);
var state_34222__$1 = (function (){var statearr_34235 = state_34222;
(statearr_34235[(10)] = inst_34208);

return statearr_34235;
})();
var statearr_34236_34261 = state_34222__$1;
(statearr_34236_34261[(2)] = inst_34212);

(statearr_34236_34261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (5))){
var inst_34175 = (state_34222[(7)]);
var inst_34177 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34178 = (new cljs.core.PersistentArrayMap(null,2,inst_34177,null));
var inst_34179 = (new cljs.core.PersistentHashSet(null,inst_34178,null));
var inst_34180 = figwheel.client.focus_msgs.call(null,inst_34179,inst_34175);
var inst_34181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34180);
var inst_34182 = cljs.core.first.call(null,inst_34180);
var inst_34183 = figwheel.client.autoload_QMARK_.call(null);
var state_34222__$1 = (function (){var statearr_34237 = state_34222;
(statearr_34237[(8)] = inst_34182);

(statearr_34237[(9)] = inst_34181);

return statearr_34237;
})();
if(cljs.core.truth_(inst_34183)){
var statearr_34238_34262 = state_34222__$1;
(statearr_34238_34262[(1)] = (8));

} else {
var statearr_34239_34263 = state_34222__$1;
(statearr_34239_34263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (14))){
var inst_34193 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34240_34264 = state_34222__$1;
(statearr_34240_34264[(2)] = inst_34193);

(statearr_34240_34264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (16))){
var state_34222__$1 = state_34222;
var statearr_34241_34265 = state_34222__$1;
(statearr_34241_34265[(2)] = null);

(statearr_34241_34265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (10))){
var inst_34214 = (state_34222[(2)]);
var state_34222__$1 = (function (){var statearr_34242 = state_34222;
(statearr_34242[(11)] = inst_34214);

return statearr_34242;
})();
var statearr_34243_34266 = state_34222__$1;
(statearr_34243_34266[(2)] = null);

(statearr_34243_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34223 === (8))){
var inst_34181 = (state_34222[(9)]);
var inst_34185 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34181,opts);
var state_34222__$1 = state_34222;
if(cljs.core.truth_(inst_34185)){
var statearr_34244_34267 = state_34222__$1;
(statearr_34244_34267[(1)] = (11));

} else {
var statearr_34245_34268 = state_34222__$1;
(statearr_34245_34268[(1)] = (12));

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
});})(c__30885__auto___34250,ch))
;
return ((function (switch__30797__auto__,c__30885__auto___34250,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1 = (function (state_34222){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34247){if((e34247 instanceof Object)){
var ex__30801__auto__ = e34247;
var statearr_34248_34269 = state_34222;
(statearr_34248_34269[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_34222;
state_34222 = G__34270;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__ = function(state_34222){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1.call(this,state_34222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30798__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___34250,ch))
})();
var state__30887__auto__ = (function (){var statearr_34249 = f__30886__auto__.call(null);
(statearr_34249[(6)] = c__30885__auto___34250);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___34250,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34271_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34271_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
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
var base_path_34273 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34273){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34272){if((e34272 instanceof Error)){
var e = e34272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34273], null));
} else {
var e = e34272;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34273))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34274){
var map__34275 = p__34274;
var map__34275__$1 = ((((!((map__34275 == null)))?((((map__34275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34275):map__34275);
var opts = map__34275__$1;
var build_id = cljs.core.get.call(null,map__34275__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34275,map__34275__$1,opts,build_id){
return (function (p__34277){
var vec__34278 = p__34277;
var seq__34279 = cljs.core.seq.call(null,vec__34278);
var first__34280 = cljs.core.first.call(null,seq__34279);
var seq__34279__$1 = cljs.core.next.call(null,seq__34279);
var map__34281 = first__34280;
var map__34281__$1 = ((((!((map__34281 == null)))?((((map__34281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34281):map__34281);
var msg = map__34281__$1;
var msg_name = cljs.core.get.call(null,map__34281__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34279__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34278,seq__34279,first__34280,seq__34279__$1,map__34281,map__34281__$1,msg,msg_name,_,map__34275,map__34275__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34278,seq__34279,first__34280,seq__34279__$1,map__34281,map__34281__$1,msg,msg_name,_,map__34275,map__34275__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34275,map__34275__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34283){
var vec__34284 = p__34283;
var seq__34285 = cljs.core.seq.call(null,vec__34284);
var first__34286 = cljs.core.first.call(null,seq__34285);
var seq__34285__$1 = cljs.core.next.call(null,seq__34285);
var map__34287 = first__34286;
var map__34287__$1 = ((((!((map__34287 == null)))?((((map__34287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34287):map__34287);
var msg = map__34287__$1;
var msg_name = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34285__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34289){
var map__34290 = p__34289;
var map__34290__$1 = ((((!((map__34290 == null)))?((((map__34290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34290):map__34290);
var on_compile_warning = cljs.core.get.call(null,map__34290__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34290__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34290,map__34290__$1,on_compile_warning,on_compile_fail){
return (function (p__34292){
var vec__34293 = p__34292;
var seq__34294 = cljs.core.seq.call(null,vec__34293);
var first__34295 = cljs.core.first.call(null,seq__34294);
var seq__34294__$1 = cljs.core.next.call(null,seq__34294);
var map__34296 = first__34295;
var map__34296__$1 = ((((!((map__34296 == null)))?((((map__34296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34296):map__34296);
var msg = map__34296__$1;
var msg_name = cljs.core.get.call(null,map__34296__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34294__$1;
var pred__34298 = cljs.core._EQ_;
var expr__34299 = msg_name;
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34299))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34298.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34299))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34290,map__34290__$1,on_compile_warning,on_compile_fail))
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
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,msg_hist,msg_names,msg){
return (function (state_34388){
var state_val_34389 = (state_34388[(1)]);
if((state_val_34389 === (7))){
var inst_34308 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34308)){
var statearr_34390_34437 = state_34388__$1;
(statearr_34390_34437[(1)] = (8));

} else {
var statearr_34391_34438 = state_34388__$1;
(statearr_34391_34438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (20))){
var inst_34382 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34392_34439 = state_34388__$1;
(statearr_34392_34439[(2)] = inst_34382);

(statearr_34392_34439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (27))){
var inst_34378 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34393_34440 = state_34388__$1;
(statearr_34393_34440[(2)] = inst_34378);

(statearr_34393_34440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (1))){
var inst_34301 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34301)){
var statearr_34394_34441 = state_34388__$1;
(statearr_34394_34441[(1)] = (2));

} else {
var statearr_34395_34442 = state_34388__$1;
(statearr_34395_34442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (24))){
var inst_34380 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34396_34443 = state_34388__$1;
(statearr_34396_34443[(2)] = inst_34380);

(statearr_34396_34443[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (4))){
var inst_34386 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34388__$1,inst_34386);
} else {
if((state_val_34389 === (15))){
var inst_34384 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34397_34444 = state_34388__$1;
(statearr_34397_34444[(2)] = inst_34384);

(statearr_34397_34444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (21))){
var inst_34337 = (state_34388[(2)]);
var inst_34338 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34339 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34338);
var state_34388__$1 = (function (){var statearr_34398 = state_34388;
(statearr_34398[(7)] = inst_34337);

return statearr_34398;
})();
var statearr_34399_34445 = state_34388__$1;
(statearr_34399_34445[(2)] = inst_34339);

(statearr_34399_34445[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (31))){
var inst_34367 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34367)){
var statearr_34400_34446 = state_34388__$1;
(statearr_34400_34446[(1)] = (34));

} else {
var statearr_34401_34447 = state_34388__$1;
(statearr_34401_34447[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (32))){
var inst_34376 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34402_34448 = state_34388__$1;
(statearr_34402_34448[(2)] = inst_34376);

(statearr_34402_34448[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (33))){
var inst_34363 = (state_34388[(2)]);
var inst_34364 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34365 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34364);
var state_34388__$1 = (function (){var statearr_34403 = state_34388;
(statearr_34403[(8)] = inst_34363);

return statearr_34403;
})();
var statearr_34404_34449 = state_34388__$1;
(statearr_34404_34449[(2)] = inst_34365);

(statearr_34404_34449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (13))){
var inst_34322 = figwheel.client.heads_up.clear.call(null);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(16),inst_34322);
} else {
if((state_val_34389 === (22))){
var inst_34343 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34344 = figwheel.client.heads_up.append_warning_message.call(null,inst_34343);
var state_34388__$1 = state_34388;
var statearr_34405_34450 = state_34388__$1;
(statearr_34405_34450[(2)] = inst_34344);

(statearr_34405_34450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (36))){
var inst_34374 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34406_34451 = state_34388__$1;
(statearr_34406_34451[(2)] = inst_34374);

(statearr_34406_34451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (29))){
var inst_34354 = (state_34388[(2)]);
var inst_34355 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34355);
var state_34388__$1 = (function (){var statearr_34407 = state_34388;
(statearr_34407[(9)] = inst_34354);

return statearr_34407;
})();
var statearr_34408_34452 = state_34388__$1;
(statearr_34408_34452[(2)] = inst_34356);

(statearr_34408_34452[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (6))){
var inst_34303 = (state_34388[(10)]);
var state_34388__$1 = state_34388;
var statearr_34409_34453 = state_34388__$1;
(statearr_34409_34453[(2)] = inst_34303);

(statearr_34409_34453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (28))){
var inst_34350 = (state_34388[(2)]);
var inst_34351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34352 = figwheel.client.heads_up.display_warning.call(null,inst_34351);
var state_34388__$1 = (function (){var statearr_34410 = state_34388;
(statearr_34410[(11)] = inst_34350);

return statearr_34410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(29),inst_34352);
} else {
if((state_val_34389 === (25))){
var inst_34348 = figwheel.client.heads_up.clear.call(null);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(28),inst_34348);
} else {
if((state_val_34389 === (34))){
var inst_34369 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(37),inst_34369);
} else {
if((state_val_34389 === (17))){
var inst_34328 = (state_34388[(2)]);
var inst_34329 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34330 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34329);
var state_34388__$1 = (function (){var statearr_34411 = state_34388;
(statearr_34411[(12)] = inst_34328);

return statearr_34411;
})();
var statearr_34412_34454 = state_34388__$1;
(statearr_34412_34454[(2)] = inst_34330);

(statearr_34412_34454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (3))){
var inst_34320 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34320)){
var statearr_34413_34455 = state_34388__$1;
(statearr_34413_34455[(1)] = (13));

} else {
var statearr_34414_34456 = state_34388__$1;
(statearr_34414_34456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (12))){
var inst_34316 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34415_34457 = state_34388__$1;
(statearr_34415_34457[(2)] = inst_34316);

(statearr_34415_34457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (2))){
var inst_34303 = (state_34388[(10)]);
var inst_34303__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34388__$1 = (function (){var statearr_34416 = state_34388;
(statearr_34416[(10)] = inst_34303__$1);

return statearr_34416;
})();
if(cljs.core.truth_(inst_34303__$1)){
var statearr_34417_34458 = state_34388__$1;
(statearr_34417_34458[(1)] = (5));

} else {
var statearr_34418_34459 = state_34388__$1;
(statearr_34418_34459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (23))){
var inst_34346 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34346)){
var statearr_34419_34460 = state_34388__$1;
(statearr_34419_34460[(1)] = (25));

} else {
var statearr_34420_34461 = state_34388__$1;
(statearr_34420_34461[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (35))){
var state_34388__$1 = state_34388;
var statearr_34421_34462 = state_34388__$1;
(statearr_34421_34462[(2)] = null);

(statearr_34421_34462[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (19))){
var inst_34341 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34341)){
var statearr_34422_34463 = state_34388__$1;
(statearr_34422_34463[(1)] = (22));

} else {
var statearr_34423_34464 = state_34388__$1;
(statearr_34423_34464[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (11))){
var inst_34312 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34424_34465 = state_34388__$1;
(statearr_34424_34465[(2)] = inst_34312);

(statearr_34424_34465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (9))){
var inst_34314 = figwheel.client.heads_up.clear.call(null);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(12),inst_34314);
} else {
if((state_val_34389 === (5))){
var inst_34305 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34388__$1 = state_34388;
var statearr_34425_34466 = state_34388__$1;
(statearr_34425_34466[(2)] = inst_34305);

(statearr_34425_34466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (14))){
var inst_34332 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34332)){
var statearr_34426_34467 = state_34388__$1;
(statearr_34426_34467[(1)] = (18));

} else {
var statearr_34427_34468 = state_34388__$1;
(statearr_34427_34468[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (26))){
var inst_34358 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34388__$1 = state_34388;
if(cljs.core.truth_(inst_34358)){
var statearr_34428_34469 = state_34388__$1;
(statearr_34428_34469[(1)] = (30));

} else {
var statearr_34429_34470 = state_34388__$1;
(statearr_34429_34470[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (16))){
var inst_34324 = (state_34388[(2)]);
var inst_34325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34326 = figwheel.client.heads_up.display_exception.call(null,inst_34325);
var state_34388__$1 = (function (){var statearr_34430 = state_34388;
(statearr_34430[(13)] = inst_34324);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(17),inst_34326);
} else {
if((state_val_34389 === (30))){
var inst_34360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34361 = figwheel.client.heads_up.display_warning.call(null,inst_34360);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(33),inst_34361);
} else {
if((state_val_34389 === (10))){
var inst_34318 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34431_34471 = state_34388__$1;
(statearr_34431_34471[(2)] = inst_34318);

(statearr_34431_34471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (18))){
var inst_34334 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34335 = figwheel.client.heads_up.display_exception.call(null,inst_34334);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(21),inst_34335);
} else {
if((state_val_34389 === (37))){
var inst_34371 = (state_34388[(2)]);
var state_34388__$1 = state_34388;
var statearr_34432_34472 = state_34388__$1;
(statearr_34432_34472[(2)] = inst_34371);

(statearr_34432_34472[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34389 === (8))){
var inst_34310 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34388__$1 = state_34388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34388__$1,(11),inst_34310);
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
});})(c__30885__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30797__auto__,c__30885__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1 = (function (state_34388){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34434){if((e34434 instanceof Object)){
var ex__30801__auto__ = e34434;
var statearr_34435_34473 = state_34388;
(statearr_34435_34473[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34474 = state_34388;
state_34388 = G__34474;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__ = function(state_34388){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1.call(this,state_34388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,msg_hist,msg_names,msg))
})();
var state__30887__auto__ = (function (){var statearr_34436 = f__30886__auto__.call(null);
(statearr_34436[(6)] = c__30885__auto__);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,msg_hist,msg_names,msg))
);

return c__30885__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30885__auto___34503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___34503,ch){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___34503,ch){
return (function (state_34489){
var state_val_34490 = (state_34489[(1)]);
if((state_val_34490 === (1))){
var state_34489__$1 = state_34489;
var statearr_34491_34504 = state_34489__$1;
(statearr_34491_34504[(2)] = null);

(statearr_34491_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (2))){
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34489__$1,(4),ch);
} else {
if((state_val_34490 === (3))){
var inst_34487 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34489__$1,inst_34487);
} else {
if((state_val_34490 === (4))){
var inst_34477 = (state_34489[(7)]);
var inst_34477__$1 = (state_34489[(2)]);
var state_34489__$1 = (function (){var statearr_34492 = state_34489;
(statearr_34492[(7)] = inst_34477__$1);

return statearr_34492;
})();
if(cljs.core.truth_(inst_34477__$1)){
var statearr_34493_34505 = state_34489__$1;
(statearr_34493_34505[(1)] = (5));

} else {
var statearr_34494_34506 = state_34489__$1;
(statearr_34494_34506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (5))){
var inst_34477 = (state_34489[(7)]);
var inst_34479 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34477);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34489__$1,(8),inst_34479);
} else {
if((state_val_34490 === (6))){
var state_34489__$1 = state_34489;
var statearr_34495_34507 = state_34489__$1;
(statearr_34495_34507[(2)] = null);

(statearr_34495_34507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (7))){
var inst_34485 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34496_34508 = state_34489__$1;
(statearr_34496_34508[(2)] = inst_34485);

(statearr_34496_34508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (8))){
var inst_34481 = (state_34489[(2)]);
var state_34489__$1 = (function (){var statearr_34497 = state_34489;
(statearr_34497[(8)] = inst_34481);

return statearr_34497;
})();
var statearr_34498_34509 = state_34489__$1;
(statearr_34498_34509[(2)] = null);

(statearr_34498_34509[(1)] = (2));


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
});})(c__30885__auto___34503,ch))
;
return ((function (switch__30797__auto__,c__30885__auto___34503,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null,null,null];
(statearr_34499[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30798__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1 = (function (state_34489){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__30801__auto__ = e34500;
var statearr_34501_34510 = state_34489;
(statearr_34501_34510[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34511 = state_34489;
state_34489 = G__34511;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__ = function(state_34489){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1.call(this,state_34489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30798__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30798__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___34503,ch))
})();
var state__30887__auto__ = (function (){var statearr_34502 = f__30886__auto__.call(null);
(statearr_34502[(6)] = c__30885__auto___34503);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___34503,ch))
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
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_34517){
var state_val_34518 = (state_34517[(1)]);
if((state_val_34518 === (1))){
var inst_34512 = cljs.core.async.timeout.call(null,(3000));
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34517__$1,(2),inst_34512);
} else {
if((state_val_34518 === (2))){
var inst_34514 = (state_34517[(2)]);
var inst_34515 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34517__$1 = (function (){var statearr_34519 = state_34517;
(statearr_34519[(7)] = inst_34514);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34517__$1,inst_34515);
} else {
return null;
}
}
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_34520 = [null,null,null,null,null,null,null,null];
(statearr_34520[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__);

(statearr_34520[(1)] = (1));

return statearr_34520;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1 = (function (state_34517){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34521){if((e34521 instanceof Object)){
var ex__30801__auto__ = e34521;
var statearr_34522_34524 = state_34517;
(statearr_34522_34524[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34525 = state_34517;
state_34517 = G__34525;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__ = function(state_34517){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1.call(this,state_34517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30798__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_34523 = f__30886__auto__.call(null);
(statearr_34523[(6)] = c__30885__auto__);

return statearr_34523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function (state_34532){
var state_val_34533 = (state_34532[(1)]);
if((state_val_34533 === (1))){
var inst_34526 = cljs.core.async.timeout.call(null,(2000));
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(2),inst_34526);
} else {
if((state_val_34533 === (2))){
var inst_34528 = (state_34532[(2)]);
var inst_34529 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34530 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34529);
var state_34532__$1 = (function (){var statearr_34534 = state_34532;
(statearr_34534[(7)] = inst_34528);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34532__$1,inst_34530);
} else {
return null;
}
}
});})(c__30885__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0 = (function (){
var statearr_34535 = [null,null,null,null,null,null,null,null];
(statearr_34535[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__);

(statearr_34535[(1)] = (1));

return statearr_34535;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1 = (function (state_34532){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_34532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e34536){if((e34536 instanceof Object)){
var ex__30801__auto__ = e34536;
var statearr_34537_34539 = state_34532;
(statearr_34537_34539[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34540 = state_34532;
state_34532 = G__34540;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__ = function(state_34532){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1.call(this,state_34532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30887__auto__ = (function (){var statearr_34538 = f__30886__auto__.call(null);
(statearr_34538[(6)] = c__30885__auto__);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,figwheel_version,temp__4657__auto__))
);

return c__30885__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34541){
var map__34542 = p__34541;
var map__34542__$1 = ((((!((map__34542 == null)))?((((map__34542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34542):map__34542);
var file = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34542__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34544 = "";
var G__34544__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34544),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34544);
var G__34544__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34544__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34544__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34544__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34544__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34545){
var map__34546 = p__34545;
var map__34546__$1 = ((((!((map__34546 == null)))?((((map__34546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34546):map__34546);
var ed = map__34546__$1;
var formatted_exception = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34548_34552 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34549_34553 = null;
var count__34550_34554 = (0);
var i__34551_34555 = (0);
while(true){
if((i__34551_34555 < count__34550_34554)){
var msg_34556 = cljs.core._nth.call(null,chunk__34549_34553,i__34551_34555);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34556);

var G__34557 = seq__34548_34552;
var G__34558 = chunk__34549_34553;
var G__34559 = count__34550_34554;
var G__34560 = (i__34551_34555 + (1));
seq__34548_34552 = G__34557;
chunk__34549_34553 = G__34558;
count__34550_34554 = G__34559;
i__34551_34555 = G__34560;
continue;
} else {
var temp__4657__auto___34561 = cljs.core.seq.call(null,seq__34548_34552);
if(temp__4657__auto___34561){
var seq__34548_34562__$1 = temp__4657__auto___34561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34548_34562__$1)){
var c__29125__auto___34563 = cljs.core.chunk_first.call(null,seq__34548_34562__$1);
var G__34564 = cljs.core.chunk_rest.call(null,seq__34548_34562__$1);
var G__34565 = c__29125__auto___34563;
var G__34566 = cljs.core.count.call(null,c__29125__auto___34563);
var G__34567 = (0);
seq__34548_34552 = G__34564;
chunk__34549_34553 = G__34565;
count__34550_34554 = G__34566;
i__34551_34555 = G__34567;
continue;
} else {
var msg_34568 = cljs.core.first.call(null,seq__34548_34562__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34568);

var G__34569 = cljs.core.next.call(null,seq__34548_34562__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__34548_34552 = G__34569;
chunk__34549_34553 = G__34570;
count__34550_34554 = G__34571;
i__34551_34555 = G__34572;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34573){
var map__34574 = p__34573;
var map__34574__$1 = ((((!((map__34574 == null)))?((((map__34574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34574):map__34574);
var w = map__34574__$1;
var message = cljs.core.get.call(null,map__34574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
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
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34576 = cljs.core.seq.call(null,plugins);
var chunk__34577 = null;
var count__34578 = (0);
var i__34579 = (0);
while(true){
if((i__34579 < count__34578)){
var vec__34580 = cljs.core._nth.call(null,chunk__34577,i__34579);
var k = cljs.core.nth.call(null,vec__34580,(0),null);
var plugin = cljs.core.nth.call(null,vec__34580,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34586 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34576,chunk__34577,count__34578,i__34579,pl_34586,vec__34580,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34586.call(null,msg_hist);
});})(seq__34576,chunk__34577,count__34578,i__34579,pl_34586,vec__34580,k,plugin))
);
} else {
}

var G__34587 = seq__34576;
var G__34588 = chunk__34577;
var G__34589 = count__34578;
var G__34590 = (i__34579 + (1));
seq__34576 = G__34587;
chunk__34577 = G__34588;
count__34578 = G__34589;
i__34579 = G__34590;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34576);
if(temp__4657__auto__){
var seq__34576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34576__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__34576__$1);
var G__34591 = cljs.core.chunk_rest.call(null,seq__34576__$1);
var G__34592 = c__29125__auto__;
var G__34593 = cljs.core.count.call(null,c__29125__auto__);
var G__34594 = (0);
seq__34576 = G__34591;
chunk__34577 = G__34592;
count__34578 = G__34593;
i__34579 = G__34594;
continue;
} else {
var vec__34583 = cljs.core.first.call(null,seq__34576__$1);
var k = cljs.core.nth.call(null,vec__34583,(0),null);
var plugin = cljs.core.nth.call(null,vec__34583,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34576,chunk__34577,count__34578,i__34579,pl_34595,vec__34583,k,plugin,seq__34576__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34595.call(null,msg_hist);
});})(seq__34576,chunk__34577,count__34578,i__34579,pl_34595,vec__34583,k,plugin,seq__34576__$1,temp__4657__auto__))
);
} else {
}

var G__34596 = cljs.core.next.call(null,seq__34576__$1);
var G__34597 = null;
var G__34598 = (0);
var G__34599 = (0);
seq__34576 = G__34596;
chunk__34577 = G__34597;
count__34578 = G__34598;
i__34579 = G__34599;
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
var G__34601 = arguments.length;
switch (G__34601) {
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
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
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

var seq__34602_34607 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34603_34608 = null;
var count__34604_34609 = (0);
var i__34605_34610 = (0);
while(true){
if((i__34605_34610 < count__34604_34609)){
var msg_34611 = cljs.core._nth.call(null,chunk__34603_34608,i__34605_34610);
figwheel.client.socket.handle_incoming_message.call(null,msg_34611);

var G__34612 = seq__34602_34607;
var G__34613 = chunk__34603_34608;
var G__34614 = count__34604_34609;
var G__34615 = (i__34605_34610 + (1));
seq__34602_34607 = G__34612;
chunk__34603_34608 = G__34613;
count__34604_34609 = G__34614;
i__34605_34610 = G__34615;
continue;
} else {
var temp__4657__auto___34616 = cljs.core.seq.call(null,seq__34602_34607);
if(temp__4657__auto___34616){
var seq__34602_34617__$1 = temp__4657__auto___34616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34602_34617__$1)){
var c__29125__auto___34618 = cljs.core.chunk_first.call(null,seq__34602_34617__$1);
var G__34619 = cljs.core.chunk_rest.call(null,seq__34602_34617__$1);
var G__34620 = c__29125__auto___34618;
var G__34621 = cljs.core.count.call(null,c__29125__auto___34618);
var G__34622 = (0);
seq__34602_34607 = G__34619;
chunk__34603_34608 = G__34620;
count__34604_34609 = G__34621;
i__34605_34610 = G__34622;
continue;
} else {
var msg_34623 = cljs.core.first.call(null,seq__34602_34617__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34623);

var G__34624 = cljs.core.next.call(null,seq__34602_34617__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__34602_34607 = G__34624;
chunk__34603_34608 = G__34625;
count__34604_34609 = G__34626;
i__34605_34610 = G__34627;
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
var args__29462__auto__ = [];
var len__29455__auto___34632 = arguments.length;
var i__29456__auto___34633 = (0);
while(true){
if((i__29456__auto___34633 < len__29455__auto___34632)){
args__29462__auto__.push((arguments[i__29456__auto___34633]));

var G__34634 = (i__29456__auto___34633 + (1));
i__29456__auto___34633 = G__34634;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34629){
var map__34630 = p__34629;
var map__34630__$1 = ((((!((map__34630 == null)))?((((map__34630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34630):map__34630);
var opts = map__34630__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34628){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34628));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34635){if((e34635 instanceof Error)){
var e = e34635;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34635;

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
return (function (p__34636){
var map__34637 = p__34636;
var map__34637__$1 = ((((!((map__34637 == null)))?((((map__34637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34637):map__34637);
var msg_name = cljs.core.get.call(null,map__34637__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515786732432
