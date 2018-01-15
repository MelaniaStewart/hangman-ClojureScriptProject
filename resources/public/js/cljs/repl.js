// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35478){
var map__35479 = p__35478;
var map__35479__$1 = ((((!((map__35479 == null)))?((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var m = map__35479__$1;
var n = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35481_35503 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35482_35504 = null;
var count__35483_35505 = (0);
var i__35484_35506 = (0);
while(true){
if((i__35484_35506 < count__35483_35505)){
var f_35507 = cljs.core._nth.call(null,chunk__35482_35504,i__35484_35506);
cljs.core.println.call(null,"  ",f_35507);

var G__35508 = seq__35481_35503;
var G__35509 = chunk__35482_35504;
var G__35510 = count__35483_35505;
var G__35511 = (i__35484_35506 + (1));
seq__35481_35503 = G__35508;
chunk__35482_35504 = G__35509;
count__35483_35505 = G__35510;
i__35484_35506 = G__35511;
continue;
} else {
var temp__4657__auto___35512 = cljs.core.seq.call(null,seq__35481_35503);
if(temp__4657__auto___35512){
var seq__35481_35513__$1 = temp__4657__auto___35512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35481_35513__$1)){
var c__29125__auto___35514 = cljs.core.chunk_first.call(null,seq__35481_35513__$1);
var G__35515 = cljs.core.chunk_rest.call(null,seq__35481_35513__$1);
var G__35516 = c__29125__auto___35514;
var G__35517 = cljs.core.count.call(null,c__29125__auto___35514);
var G__35518 = (0);
seq__35481_35503 = G__35515;
chunk__35482_35504 = G__35516;
count__35483_35505 = G__35517;
i__35484_35506 = G__35518;
continue;
} else {
var f_35519 = cljs.core.first.call(null,seq__35481_35513__$1);
cljs.core.println.call(null,"  ",f_35519);

var G__35520 = cljs.core.next.call(null,seq__35481_35513__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__35481_35503 = G__35520;
chunk__35482_35504 = G__35521;
count__35483_35505 = G__35522;
i__35484_35506 = G__35523;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35524 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35524);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35524)))?cljs.core.second.call(null,arglists_35524):arglists_35524));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35485_35525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35486_35526 = null;
var count__35487_35527 = (0);
var i__35488_35528 = (0);
while(true){
if((i__35488_35528 < count__35487_35527)){
var vec__35489_35529 = cljs.core._nth.call(null,chunk__35486_35526,i__35488_35528);
var name_35530 = cljs.core.nth.call(null,vec__35489_35529,(0),null);
var map__35492_35531 = cljs.core.nth.call(null,vec__35489_35529,(1),null);
var map__35492_35532__$1 = ((((!((map__35492_35531 == null)))?((((map__35492_35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492_35531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492_35531):map__35492_35531);
var doc_35533 = cljs.core.get.call(null,map__35492_35532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35534 = cljs.core.get.call(null,map__35492_35532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35530);

cljs.core.println.call(null," ",arglists_35534);

if(cljs.core.truth_(doc_35533)){
cljs.core.println.call(null," ",doc_35533);
} else {
}

var G__35535 = seq__35485_35525;
var G__35536 = chunk__35486_35526;
var G__35537 = count__35487_35527;
var G__35538 = (i__35488_35528 + (1));
seq__35485_35525 = G__35535;
chunk__35486_35526 = G__35536;
count__35487_35527 = G__35537;
i__35488_35528 = G__35538;
continue;
} else {
var temp__4657__auto___35539 = cljs.core.seq.call(null,seq__35485_35525);
if(temp__4657__auto___35539){
var seq__35485_35540__$1 = temp__4657__auto___35539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35485_35540__$1)){
var c__29125__auto___35541 = cljs.core.chunk_first.call(null,seq__35485_35540__$1);
var G__35542 = cljs.core.chunk_rest.call(null,seq__35485_35540__$1);
var G__35543 = c__29125__auto___35541;
var G__35544 = cljs.core.count.call(null,c__29125__auto___35541);
var G__35545 = (0);
seq__35485_35525 = G__35542;
chunk__35486_35526 = G__35543;
count__35487_35527 = G__35544;
i__35488_35528 = G__35545;
continue;
} else {
var vec__35494_35546 = cljs.core.first.call(null,seq__35485_35540__$1);
var name_35547 = cljs.core.nth.call(null,vec__35494_35546,(0),null);
var map__35497_35548 = cljs.core.nth.call(null,vec__35494_35546,(1),null);
var map__35497_35549__$1 = ((((!((map__35497_35548 == null)))?((((map__35497_35548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35497_35548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35497_35548):map__35497_35548);
var doc_35550 = cljs.core.get.call(null,map__35497_35549__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35551 = cljs.core.get.call(null,map__35497_35549__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35547);

cljs.core.println.call(null," ",arglists_35551);

if(cljs.core.truth_(doc_35550)){
cljs.core.println.call(null," ",doc_35550);
} else {
}

var G__35552 = cljs.core.next.call(null,seq__35485_35540__$1);
var G__35553 = null;
var G__35554 = (0);
var G__35555 = (0);
seq__35485_35525 = G__35552;
chunk__35486_35526 = G__35553;
count__35487_35527 = G__35554;
i__35488_35528 = G__35555;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35499 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35500 = null;
var count__35501 = (0);
var i__35502 = (0);
while(true){
if((i__35502 < count__35501)){
var role = cljs.core._nth.call(null,chunk__35500,i__35502);
var temp__4657__auto___35556__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35556__$1)){
var spec_35557 = temp__4657__auto___35556__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35557));
} else {
}

var G__35558 = seq__35499;
var G__35559 = chunk__35500;
var G__35560 = count__35501;
var G__35561 = (i__35502 + (1));
seq__35499 = G__35558;
chunk__35500 = G__35559;
count__35501 = G__35560;
i__35502 = G__35561;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35499);
if(temp__4657__auto____$1){
var seq__35499__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35499__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35499__$1);
var G__35562 = cljs.core.chunk_rest.call(null,seq__35499__$1);
var G__35563 = c__29125__auto__;
var G__35564 = cljs.core.count.call(null,c__29125__auto__);
var G__35565 = (0);
seq__35499 = G__35562;
chunk__35500 = G__35563;
count__35501 = G__35564;
i__35502 = G__35565;
continue;
} else {
var role = cljs.core.first.call(null,seq__35499__$1);
var temp__4657__auto___35566__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35566__$2)){
var spec_35567 = temp__4657__auto___35566__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35567));
} else {
}

var G__35568 = cljs.core.next.call(null,seq__35499__$1);
var G__35569 = null;
var G__35570 = (0);
var G__35571 = (0);
seq__35499 = G__35568;
chunk__35500 = G__35569;
count__35501 = G__35570;
i__35502 = G__35571;
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

//# sourceMappingURL=repl.js.map?rel=1513010307920
