// Compiled by ClojureScript 1.9.908 {}
goog.provide('hangman.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('goog.string');
hangman.core.img_file = reagent.core.atom.call(null,"zero.jpg");
hangman.core.status_info = reagent.core.atom.call(null,"You have 6 tries.");
hangman.core.letters = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_","_","_","_","_","_","_","_"], null));
hangman.core.Comp_List = reagent.core.atom.call(null,cljs.core.List.EMPTY);
hangman.core.letter_from_text = reagent.core.atom.call(null,"");
hangman.core.max_number_of_failures = reagent.core.atom.call(null,(6));
hangman.core.new_word = reagent.core.atom.call(null,"");
hangman.core.size_of_word = cljs.core.atom.call(null,(9));
hangman.core.number_of_failures = cljs.core.atom.call(null,(0));
hangman.core.do_letter = (function hangman$core$do_letter(letter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.unescapeEntities("&nbsp;"))].join('')], null);
});
hangman.core.remove_option = (function hangman$core$remove_option(combo,letter){
return cljs.core.remove.call(null,(function (p1__10041_SHARP_){
return cljs.core._EQ_.call(null,letter,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.get.call(null,p1__10041_SHARP_,(1)),combo));
}),combo);
});
hangman.core.Complete_List = cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"A"], null),"A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"B"], null),"B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"C"], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"D"], null),"D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"E"], null),"E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"F"], null),"F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"G"], null),"G"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"H"], null),"H"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"I"], null),"I"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"J"], null),"J"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"K"], null),"K"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"L"], null),"L"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"M"], null),"M"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"N"], null),"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"O"], null),"O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"P"], null),"P"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Q"], null),"Q"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"R"], null),"R"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"S"], null),"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"T"], null),"T"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"U"], null),"U"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"V"], null),"V"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"W"], null),"W"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"X"], null),"X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Y"], null),"Y"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Z"], null),"Z"], null));
hangman.core.list_of_words = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ELEPHANT","CHAIR","PROBLEM","TELEVISION","ELEMENTARY","SUCCESSFUL","EXTENDED","SURPRISE","COVENTRY","COLLEAGUE","COURTESY","INVESTIGATION","ONLINE","DAUGHTER","SCHOOL","CARTRIDGE","CATEGORY","POLICEMAN","POLICEMAN","YESTERDAY","CHRISTMAS","PARKING","HALLOWEEN"], null);
hangman.core.list_of_jpegs = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hangman1.png","hangman2.png","hangman3.png","hangman4.png","hangman5.png","hangman6.png","hangman7.png","eight.jpg","nine.jpg","ten.jpg"], null);
hangman.core.perform_restart = (function hangman$core$perform_restart(){
var a = reagent.core.atom.call(null,"");
var b = reagent.core.atom.call(null,"");
var tmp = cljs.core.atom.call(null,"");

cljs.core.reset_BANG_.call(null,a,cljs.core.rand_nth.call(null,hangman.core.list_of_words));

cljs.core.reset_BANG_.call(null,hangman.core.img_file,"zero.jpg");

cljs.core.reset_BANG_.call(null,hangman.core.number_of_failures,(0));

cljs.core.reset_BANG_.call(null,hangman.core.size_of_word,cljs.core.count.call(null,cljs.core.deref.call(null,a)));

cljs.core.reset_BANG_.call(null,hangman.core.letters,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,a)),"_"));

cljs.core.reset_BANG_.call(null,hangman.core.new_word,cljs.core.deref.call(null,a));

return cljs.core.reset_BANG_.call(null,hangman.core.status_info,"You have 6 tries.");
});
hangman.core.perform_restart_complete = (function hangman$core$perform_restart_complete(){
hangman.core.perform_restart.call(null);

return cljs.core.reset_BANG_.call(null,hangman.core.Comp_List,cljs.core.vec.call(null,hangman.core.Complete_List));
});
hangman.core.perform_restart_complete_bad = (function hangman$core$perform_restart_complete_bad(){
hangman.core.perform_restart.call(null);

cljs.core.reset_BANG_.call(null,hangman.core.status_info,"*** YOU LOST - NEW GAME ****");

cljs.core.reset_BANG_.call(null,hangman.core.img_file,"hangman7.png");

return cljs.core.reset_BANG_.call(null,hangman.core.Comp_List,cljs.core.vec.call(null,hangman.core.Complete_List));
});
hangman.core.guess_was_bad = (function hangman$core$guess_was_bad(){
cljs.core.swap_BANG_.call(null,hangman.core.number_of_failures,cljs.core.inc);

cljs.core.reset_BANG_.call(null,hangman.core.img_file,cljs.core.get.call(null,hangman.core.list_of_jpegs,cljs.core.deref.call(null,hangman.core.number_of_failures)));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,hangman.core.number_of_failures),cljs.core.deref.call(null,hangman.core.max_number_of_failures))){
return hangman.core.perform_restart_complete_bad.call(null);
} else {
return cljs.core.reset_BANG_.call(null,hangman.core.status_info,["Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,hangman.core.max_number_of_failures) - cljs.core.deref.call(null,hangman.core.number_of_failures)))," tries."].join(''));
}
});
hangman.core.perform_guess = (function hangman$core$perform_guess(){
var e = document.getElementById("GuessHangman");
var value_cb = reagent.core.atom.call(null,"");
var test_value = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,value_cb,cljs.core.name.call(null,(e.options[e.selectedIndex]).text));

cljs.core.swap_BANG_.call(null,hangman.core.Comp_List,hangman.core.remove_option,cljs.core.deref.call(null,value_cb));

if(clojure.string.includes_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.new_word),cljs.core.deref.call(null,value_cb))){
var x_10042 = (0);
while(true){
if((x_10042 < cljs.core.deref.call(null,hangman.core.size_of_word))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,hangman.core.new_word),x_10042),cljs.core.deref.call(null,value_cb))){
cljs.core.reset_BANG_.call(null,hangman.core.letters,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,hangman.core.letters)),x_10042,cljs.core.deref.call(null,value_cb)));
} else {
}

if(clojure.string.starts_with_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.status_info),"*** YOU LOST")){
cljs.core.reset_BANG_.call(null,hangman.core.status_info,["Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,hangman.core.max_number_of_failures) - cljs.core.deref.call(null,hangman.core.number_of_failures)))," tries."].join(''));
} else {
}

var G__10043 = (x_10042 + (1));
x_10042 = G__10043;
continue;
} else {
}
break;
}
} else {
hangman.core.guess_was_bad.call(null);
}

if(clojure.string.starts_with_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.status_info),"*** YOU WON")){
cljs.core.reset_BANG_.call(null,hangman.core.status_info,"NEW GAME");
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,hangman.core.letters)),cljs.core.deref.call(null,hangman.core.new_word))){
return cljs.core.reset_BANG_.call(null,hangman.core.status_info,["*** YOU WON ***"].join(''));
} else {
return null;
}
});
hangman.core.limit_to_one_letter = (function hangman$core$limit_to_one_letter(){
var entry_10044 = cljs.core.apply.call(null,cljs.core.str,cljs.core.re_seq.call(null,/[a-zA-Z]/,(document.getElementById("Hangman-By-Text")["value"])));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,entry_10044),(1))){
cljs.core.reset_BANG_.call(null,hangman.core.letter_from_text,entry_10044);
} else {
cljs.core.reset_BANG_.call(null,hangman.core.letter_from_text,"");
}

if(clojure.string.includes_QMARK_.call(null,cljs.core.deref.call(null,hangman.core.new_word),cljs.core.deref.call(null,hangman.core.letter_from_text))){
var x_10045 = (0);
while(true){
if((x_10045 < cljs.core.deref.call(null,hangman.core.size_of_word))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,hangman.core.new_word),x_10045),cljs.core.deref.call(null,hangman.core.letter_from_text))){
cljs.core.reset_BANG_.call(null,hangman.core.letters,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,hangman.core.letters)),x_10045,cljs.core.deref.call(null,hangman.core.letter_from_text)));
} else {
}

var G__10046 = (x_10045 + (1));
x_10045 = G__10046;
continue;
} else {
}
break;
}
} else {
hangman.core.guess_was_bad.call(null);
}

if(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,hangman.core.letters)),cljs.core.deref.call(null,hangman.core.new_word))){
cljs.core.reset_BANG_.call(null,hangman.core.status_info,["SUCCESS"].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,hangman.core.letter_from_text,"");
});
hangman.core.hangman_div = (function hangman$core$hangman_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"ImgHangman",new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,hangman.core.img_file),new cljs.core.Keyword(null,"alt","alt",-3214426),"zero.jpg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),(104),new cljs.core.Keyword(null,"height","height",1025178622),(142)], null)], null)], null);
});
hangman.core.word_div = (function hangman$core$word_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"word-block",new cljs.core.Keyword(null,"class","class",-2030961996),"guess-word"], null),(function (){var iter__8453__auto__ = (function hangman$core$word_div_$_iter__10047(s__10048){
return (new cljs.core.LazySeq(null,(function (){
var s__10048__$1 = s__10048;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10048__$1);
if(temp__4657__auto__){
var s__10048__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10048__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__10048__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__10050 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__10049 = (0);
while(true){
if((i__10049 < size__8452__auto__)){
var letter = cljs.core._nth.call(null,c__8451__auto__,i__10049);
cljs.core.chunk_append.call(null,b__10050,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.do_letter,letter], null));

var G__10051 = (i__10049 + (1));
i__10049 = G__10051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10050),hangman$core$word_div_$_iter__10047.call(null,cljs.core.chunk_rest.call(null,s__10048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10050),null);
}
} else {
var letter = cljs.core.first.call(null,s__10048__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.do_letter,letter], null),hangman$core$word_div_$_iter__10047.call(null,cljs.core.rest.call(null,s__10048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__.call(null,cljs.core.deref.call(null,hangman.core.letters));
})()], null);
});
hangman.core.guess_div = (function hangman$core$guess_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"GuessDiv"], null),"",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"GuessHangman"], null)], null),cljs.core.deref.call(null,hangman.core.Comp_List))], null);
});
hangman.core.button_div = (function hangman$core$button_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"MyGuess",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hangman.core.perform_guess.call(null);
})], null),"My guess!!"], null)], null);
});
hangman.core.status_div = (function hangman$core$status_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"Status"], null),"Status:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"Status",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hangman.core.status_info)], null)], null)], null);
});
hangman.core.hangman_show_new_word_div = (function hangman$core$hangman_show_new_word_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"CurrentWord"], null),"Current Word:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"CurrentWord",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hangman.core.new_word)], null)], null)], null);
});
hangman.core.re_start_div = (function hangman$core$re_start_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Re-Start",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hangman.core.perform_restart_complete.call(null);
})], null),"Re-Start!"], null)], null);
});
hangman.core.ui = (function hangman$core$ui(){
hangman.core.perform_restart.call(null);

return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hangman"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.hangman_show_new_word_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.hangman_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.word_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.guess_div], null)," ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.button_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.re_start_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.status_div], null)], null);
});
hangman.core.run = (function hangman$core$run(){
cljs.core.reset_BANG_.call(null,hangman.core.Comp_List,cljs.core.vec.call(null,hangman.core.Complete_List));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hangman.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('hangman.core.run', hangman.core.run);

//# sourceMappingURL=core.js.map?rel=1515983246600
