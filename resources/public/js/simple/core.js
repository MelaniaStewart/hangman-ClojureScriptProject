// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('goog.string');
simple.core.img_file = reagent.core.atom.call(null,"zero.jpg");
simple.core.status_info = reagent.core.atom.call(null,"You have 6 tries.");
simple.core.letters = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_","_","_","_","_","_","_","_"], null));
simple.core.Comp_List = reagent.core.atom.call(null,cljs.core.List.EMPTY);
simple.core.letter_from_text = reagent.core.atom.call(null,"");
simple.core.max_number_of_failures = reagent.core.atom.call(null,(6));
simple.core.new_word = reagent.core.atom.call(null,"");
simple.core.size_of_word = cljs.core.atom.call(null,(9));
simple.core.number_of_failures = cljs.core.atom.call(null,(0));
simple.core.do_letter = (function simple$core$do_letter(letter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.unescapeEntities("&nbsp;"))].join('')], null);
});
simple.core.remove_option = (function simple$core$remove_option(combo,letter){
return cljs.core.remove.call(null,(function (p1__9846_SHARP_){
return cljs.core._EQ_.call(null,letter,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.get.call(null,p1__9846_SHARP_,(1)),combo));
}),combo);
});
simple.core.Complete_List = cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"A"], null),"A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"B"], null),"B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"C"], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"D"], null),"D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"E"], null),"E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"F"], null),"F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"G"], null),"G"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"H"], null),"H"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"I"], null),"I"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"J"], null),"J"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"K"], null),"K"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"L"], null),"L"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"M"], null),"M"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"N"], null),"N"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"O"], null),"O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"P"], null),"P"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Q"], null),"Q"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"R"], null),"R"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"S"], null),"S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"T"], null),"T"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"U"], null),"U"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"V"], null),"V"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"W"], null),"W"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"X"], null),"X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Y"], null),"Y"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Z"], null),"Z"], null));
simple.core.list_of_words = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ELEPHANT","CHAIR","PROBLEM","TELEVISION","ELEMENTARY","SUCCESSFUL","EXTENDED","SURPRISE","COVENTRY","COLLEAGUE","COURTESY","INVESTIGATION","ONLINE","DAUGHTER","SCHOOL","CARTRIDGE","CATEGORY","POLICEMAN","POLICEMAN","YESTERDAY","CHRISTMAS","PARKING","HALLOWEEN"], null);
simple.core.list_of_jpegs = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hangman1.png","hangman2.png","hangman3.png","hangman4.png","hangman5.png","hangman6.png","hangman7.png","eight.jpg","nine.jpg","ten.jpg"], null);
simple.core.perform_restart = (function simple$core$perform_restart(){
var a = reagent.core.atom.call(null,"");
var b = reagent.core.atom.call(null,"");
var tmp = cljs.core.atom.call(null,"");

cljs.core.reset_BANG_.call(null,a,cljs.core.rand_nth.call(null,simple.core.list_of_words));

cljs.core.reset_BANG_.call(null,simple.core.img_file,"zero.jpg");

cljs.core.reset_BANG_.call(null,simple.core.number_of_failures,(0));

cljs.core.reset_BANG_.call(null,simple.core.size_of_word,cljs.core.count.call(null,cljs.core.deref.call(null,a)));

cljs.core.reset_BANG_.call(null,simple.core.letters,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,a)),"_"));

cljs.core.reset_BANG_.call(null,simple.core.new_word,cljs.core.deref.call(null,a));

return cljs.core.reset_BANG_.call(null,simple.core.status_info,"You have 6 tries.");
});
simple.core.perform_restart_complete = (function simple$core$perform_restart_complete(){
simple.core.perform_restart.call(null);

return cljs.core.reset_BANG_.call(null,simple.core.Comp_List,cljs.core.vec.call(null,simple.core.Complete_List));
});
simple.core.perform_restart_complete_bad = (function simple$core$perform_restart_complete_bad(){
simple.core.perform_restart.call(null);

cljs.core.reset_BANG_.call(null,simple.core.status_info,"*** YOU LOST - NEW GAME ****");

cljs.core.reset_BANG_.call(null,simple.core.img_file,"hangman7.png");

return cljs.core.reset_BANG_.call(null,simple.core.Comp_List,cljs.core.vec.call(null,simple.core.Complete_List));
});
simple.core.guess_was_bad = (function simple$core$guess_was_bad(){
cljs.core.swap_BANG_.call(null,simple.core.number_of_failures,cljs.core.inc);

cljs.core.reset_BANG_.call(null,simple.core.img_file,cljs.core.get.call(null,simple.core.list_of_jpegs,cljs.core.deref.call(null,simple.core.number_of_failures)));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,simple.core.number_of_failures),cljs.core.deref.call(null,simple.core.max_number_of_failures))){
return simple.core.perform_restart_complete_bad.call(null);
} else {
return cljs.core.reset_BANG_.call(null,simple.core.status_info,["Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,simple.core.max_number_of_failures) - cljs.core.deref.call(null,simple.core.number_of_failures)))," tries."].join(''));
}
});
simple.core.perform_guess = (function simple$core$perform_guess(){
var e = document.getElementById("GuessHangman");
var value_cb = reagent.core.atom.call(null,"");
var test_value = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,value_cb,cljs.core.name.call(null,(e.options[e.selectedIndex]).text));

cljs.core.swap_BANG_.call(null,simple.core.Comp_List,simple.core.remove_option,cljs.core.deref.call(null,value_cb));

if(clojure.string.includes_QMARK_.call(null,cljs.core.deref.call(null,simple.core.new_word),cljs.core.deref.call(null,value_cb))){
var x_9847 = (0);
while(true){
if((x_9847 < cljs.core.deref.call(null,simple.core.size_of_word))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,simple.core.new_word),x_9847),cljs.core.deref.call(null,value_cb))){
cljs.core.reset_BANG_.call(null,simple.core.letters,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,simple.core.letters)),x_9847,cljs.core.deref.call(null,value_cb)));
} else {
}

if(clojure.string.starts_with_QMARK_.call(null,cljs.core.deref.call(null,simple.core.status_info),"*** YOU LOST")){
cljs.core.reset_BANG_.call(null,simple.core.status_info,["Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.call(null,simple.core.max_number_of_failures) - cljs.core.deref.call(null,simple.core.number_of_failures)))," tries."].join(''));
} else {
}

var G__9848 = (x_9847 + (1));
x_9847 = G__9848;
continue;
} else {
}
break;
}
} else {
simple.core.guess_was_bad.call(null);
}

if(clojure.string.starts_with_QMARK_.call(null,cljs.core.deref.call(null,simple.core.status_info),"*** YOU WON")){
cljs.core.reset_BANG_.call(null,simple.core.status_info,"NEW GAME");
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,simple.core.letters)),cljs.core.deref.call(null,simple.core.new_word))){
return cljs.core.reset_BANG_.call(null,simple.core.status_info,["*** YOU WON ***"].join(''));
} else {
return null;
}
});
simple.core.limit_to_one_letter = (function simple$core$limit_to_one_letter(){
var entry_9849 = cljs.core.apply.call(null,cljs.core.str,cljs.core.re_seq.call(null,/[a-zA-Z]/,(document.getElementById("Hangman-By-Text")["value"])));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,entry_9849),(1))){
cljs.core.reset_BANG_.call(null,simple.core.letter_from_text,entry_9849);
} else {
cljs.core.reset_BANG_.call(null,simple.core.letter_from_text,"");
}

if(clojure.string.includes_QMARK_.call(null,cljs.core.deref.call(null,simple.core.new_word),cljs.core.deref.call(null,simple.core.letter_from_text))){
var x_9850 = (0);
while(true){
if((x_9850 < cljs.core.deref.call(null,simple.core.size_of_word))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,simple.core.new_word),x_9850),cljs.core.deref.call(null,simple.core.letter_from_text))){
cljs.core.reset_BANG_.call(null,simple.core.letters,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,simple.core.letters)),x_9850,cljs.core.deref.call(null,simple.core.letter_from_text)));
} else {
}

var G__9851 = (x_9850 + (1));
x_9850 = G__9851;
continue;
} else {
}
break;
}
} else {
simple.core.guess_was_bad.call(null);
}

if(cljs.core._EQ_.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,simple.core.letters)),cljs.core.deref.call(null,simple.core.new_word))){
cljs.core.reset_BANG_.call(null,simple.core.status_info,["SUCCESS"].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,simple.core.letter_from_text,"");
});
simple.core.hangman_div = (function simple$core$hangman_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"ImgHangman",new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,simple.core.img_file),new cljs.core.Keyword(null,"alt","alt",-3214426),"zero.jpg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1px",new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),(104),new cljs.core.Keyword(null,"height","height",1025178622),(142)], null)], null)], null);
});
simple.core.word_div = (function simple$core$word_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"word-block",new cljs.core.Keyword(null,"class","class",-2030961996),"guess-word"], null),(function (){var iter__8453__auto__ = (function simple$core$word_div_$_iter__9852(s__9853){
return (new cljs.core.LazySeq(null,(function (){
var s__9853__$1 = s__9853;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9853__$1);
if(temp__4657__auto__){
var s__9853__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9853__$2)){
var c__8451__auto__ = cljs.core.chunk_first.call(null,s__9853__$2);
var size__8452__auto__ = cljs.core.count.call(null,c__8451__auto__);
var b__9855 = cljs.core.chunk_buffer.call(null,size__8452__auto__);
if((function (){var i__9854 = (0);
while(true){
if((i__9854 < size__8452__auto__)){
var letter = cljs.core._nth.call(null,c__8451__auto__,i__9854);
cljs.core.chunk_append.call(null,b__9855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.do_letter,letter], null));

var G__9856 = (i__9854 + (1));
i__9854 = G__9856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9855),simple$core$word_div_$_iter__9852.call(null,cljs.core.chunk_rest.call(null,s__9853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9855),null);
}
} else {
var letter = cljs.core.first.call(null,s__9853__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.do_letter,letter], null),simple$core$word_div_$_iter__9852.call(null,cljs.core.rest.call(null,s__9853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8453__auto__.call(null,cljs.core.deref.call(null,simple.core.letters));
})()], null);
});
simple.core.guess_div = (function simple$core$guess_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"GuessDiv"], null),"",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"GuessHangman"], null)], null),cljs.core.deref.call(null,simple.core.Comp_List))], null);
});
simple.core.button_div = (function simple$core$button_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"MyGuess",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return simple.core.perform_guess.call(null);
})], null),"My guess!!"], null)], null);
});
simple.core.status_div = (function simple$core$status_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"Status"], null),"Status:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"Status",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,simple.core.status_info)], null)], null)], null);
});
simple.core.hangman_show_new_word_div = (function simple$core$hangman_show_new_word_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"CurrentWord"], null),"Current Word:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"CurrentWord",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,simple.core.new_word)], null)], null)], null);
});
simple.core.re_start_div = (function simple$core$re_start_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"Re-Start",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return simple.core.perform_restart_complete.call(null);
})], null),"Re-Start!"], null)], null);
});
simple.core.hangman_tries_div = (function simple$core$hangman_tries_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"Hangman-Tries"], null),"Number of Tries:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"Hangman-Tries",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxsize","maxsize",-1027142241),"2",new cljs.core.Keyword(null,"size","size",1098693007),"2",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,simple.core.max_number_of_failures)], null)], null)], null);
});
simple.core.guess_by_text_div = (function simple$core$guess_by_text_div(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"Hangman-By-Text"], null),"Type a letter:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"Hangman-By-Text",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"maxsize","maxsize",-1027142241),"1",new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return simple.core.limit_to_one_letter.call(null);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,simple.core.letter_from_text)], null)], null)], null);
});
simple.core.ui = (function simple$core$ui(){
simple.core.perform_restart.call(null);

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hangman"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.hangman_show_new_word_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.hangman_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.word_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.guess_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.button_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.re_start_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.status_div], null)], null);
});
simple.core.run = (function simple$core$run(){
cljs.core.reset_BANG_.call(null,simple.core.Comp_List,cljs.core.vec.call(null,simple.core.Complete_List));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('simple.core.run', simple.core.run);

//# sourceMappingURL=core.js.map?rel=1515980253850
