// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32953_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32953_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32954 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32955 = null;
var count__32956 = (0);
var i__32957 = (0);
while(true){
if((i__32957 < count__32956)){
var n = cljs.core._nth.call(null,chunk__32955,i__32957);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32958 = seq__32954;
var G__32959 = chunk__32955;
var G__32960 = count__32956;
var G__32961 = (i__32957 + (1));
seq__32954 = G__32958;
chunk__32955 = G__32959;
count__32956 = G__32960;
i__32957 = G__32961;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32954);
if(temp__4657__auto__){
var seq__32954__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32954__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__32954__$1);
var G__32962 = cljs.core.chunk_rest.call(null,seq__32954__$1);
var G__32963 = c__29125__auto__;
var G__32964 = cljs.core.count.call(null,c__29125__auto__);
var G__32965 = (0);
seq__32954 = G__32962;
chunk__32955 = G__32963;
count__32956 = G__32964;
i__32957 = G__32965;
continue;
} else {
var n = cljs.core.first.call(null,seq__32954__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32966 = cljs.core.next.call(null,seq__32954__$1);
var G__32967 = null;
var G__32968 = (0);
var G__32969 = (0);
seq__32954 = G__32966;
chunk__32955 = G__32967;
count__32956 = G__32968;
i__32957 = G__32969;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32979_32987 = cljs.core.seq.call(null,deps);
var chunk__32980_32988 = null;
var count__32981_32989 = (0);
var i__32982_32990 = (0);
while(true){
if((i__32982_32990 < count__32981_32989)){
var dep_32991 = cljs.core._nth.call(null,chunk__32980_32988,i__32982_32990);
topo_sort_helper_STAR_.call(null,dep_32991,(depth + (1)),state);

var G__32992 = seq__32979_32987;
var G__32993 = chunk__32980_32988;
var G__32994 = count__32981_32989;
var G__32995 = (i__32982_32990 + (1));
seq__32979_32987 = G__32992;
chunk__32980_32988 = G__32993;
count__32981_32989 = G__32994;
i__32982_32990 = G__32995;
continue;
} else {
var temp__4657__auto___32996 = cljs.core.seq.call(null,seq__32979_32987);
if(temp__4657__auto___32996){
var seq__32979_32997__$1 = temp__4657__auto___32996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32979_32997__$1)){
var c__29125__auto___32998 = cljs.core.chunk_first.call(null,seq__32979_32997__$1);
var G__32999 = cljs.core.chunk_rest.call(null,seq__32979_32997__$1);
var G__33000 = c__29125__auto___32998;
var G__33001 = cljs.core.count.call(null,c__29125__auto___32998);
var G__33002 = (0);
seq__32979_32987 = G__32999;
chunk__32980_32988 = G__33000;
count__32981_32989 = G__33001;
i__32982_32990 = G__33002;
continue;
} else {
var dep_33003 = cljs.core.first.call(null,seq__32979_32997__$1);
topo_sort_helper_STAR_.call(null,dep_33003,(depth + (1)),state);

var G__33004 = cljs.core.next.call(null,seq__32979_32997__$1);
var G__33005 = null;
var G__33006 = (0);
var G__33007 = (0);
seq__32979_32987 = G__33004;
chunk__32980_32988 = G__33005;
count__32981_32989 = G__33006;
i__32982_32990 = G__33007;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32983){
var vec__32984 = p__32983;
var seq__32985 = cljs.core.seq.call(null,vec__32984);
var first__32986 = cljs.core.first.call(null,seq__32985);
var seq__32985__$1 = cljs.core.next.call(null,seq__32985);
var x = first__32986;
var xs = seq__32985__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32984,seq__32985,first__32986,seq__32985__$1,x,xs,get_deps__$1){
return (function (p1__32970_SHARP_){
return clojure.set.difference.call(null,p1__32970_SHARP_,x);
});})(vec__32984,seq__32985,first__32986,seq__32985__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33008 = cljs.core.seq.call(null,provides);
var chunk__33009 = null;
var count__33010 = (0);
var i__33011 = (0);
while(true){
if((i__33011 < count__33010)){
var prov = cljs.core._nth.call(null,chunk__33009,i__33011);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33012_33020 = cljs.core.seq.call(null,requires);
var chunk__33013_33021 = null;
var count__33014_33022 = (0);
var i__33015_33023 = (0);
while(true){
if((i__33015_33023 < count__33014_33022)){
var req_33024 = cljs.core._nth.call(null,chunk__33013_33021,i__33015_33023);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33024,prov);

var G__33025 = seq__33012_33020;
var G__33026 = chunk__33013_33021;
var G__33027 = count__33014_33022;
var G__33028 = (i__33015_33023 + (1));
seq__33012_33020 = G__33025;
chunk__33013_33021 = G__33026;
count__33014_33022 = G__33027;
i__33015_33023 = G__33028;
continue;
} else {
var temp__4657__auto___33029 = cljs.core.seq.call(null,seq__33012_33020);
if(temp__4657__auto___33029){
var seq__33012_33030__$1 = temp__4657__auto___33029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33012_33030__$1)){
var c__29125__auto___33031 = cljs.core.chunk_first.call(null,seq__33012_33030__$1);
var G__33032 = cljs.core.chunk_rest.call(null,seq__33012_33030__$1);
var G__33033 = c__29125__auto___33031;
var G__33034 = cljs.core.count.call(null,c__29125__auto___33031);
var G__33035 = (0);
seq__33012_33020 = G__33032;
chunk__33013_33021 = G__33033;
count__33014_33022 = G__33034;
i__33015_33023 = G__33035;
continue;
} else {
var req_33036 = cljs.core.first.call(null,seq__33012_33030__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33036,prov);

var G__33037 = cljs.core.next.call(null,seq__33012_33030__$1);
var G__33038 = null;
var G__33039 = (0);
var G__33040 = (0);
seq__33012_33020 = G__33037;
chunk__33013_33021 = G__33038;
count__33014_33022 = G__33039;
i__33015_33023 = G__33040;
continue;
}
} else {
}
}
break;
}

var G__33041 = seq__33008;
var G__33042 = chunk__33009;
var G__33043 = count__33010;
var G__33044 = (i__33011 + (1));
seq__33008 = G__33041;
chunk__33009 = G__33042;
count__33010 = G__33043;
i__33011 = G__33044;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33008);
if(temp__4657__auto__){
var seq__33008__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33008__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__33008__$1);
var G__33045 = cljs.core.chunk_rest.call(null,seq__33008__$1);
var G__33046 = c__29125__auto__;
var G__33047 = cljs.core.count.call(null,c__29125__auto__);
var G__33048 = (0);
seq__33008 = G__33045;
chunk__33009 = G__33046;
count__33010 = G__33047;
i__33011 = G__33048;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33008__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33016_33049 = cljs.core.seq.call(null,requires);
var chunk__33017_33050 = null;
var count__33018_33051 = (0);
var i__33019_33052 = (0);
while(true){
if((i__33019_33052 < count__33018_33051)){
var req_33053 = cljs.core._nth.call(null,chunk__33017_33050,i__33019_33052);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33053,prov);

var G__33054 = seq__33016_33049;
var G__33055 = chunk__33017_33050;
var G__33056 = count__33018_33051;
var G__33057 = (i__33019_33052 + (1));
seq__33016_33049 = G__33054;
chunk__33017_33050 = G__33055;
count__33018_33051 = G__33056;
i__33019_33052 = G__33057;
continue;
} else {
var temp__4657__auto___33058__$1 = cljs.core.seq.call(null,seq__33016_33049);
if(temp__4657__auto___33058__$1){
var seq__33016_33059__$1 = temp__4657__auto___33058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33016_33059__$1)){
var c__29125__auto___33060 = cljs.core.chunk_first.call(null,seq__33016_33059__$1);
var G__33061 = cljs.core.chunk_rest.call(null,seq__33016_33059__$1);
var G__33062 = c__29125__auto___33060;
var G__33063 = cljs.core.count.call(null,c__29125__auto___33060);
var G__33064 = (0);
seq__33016_33049 = G__33061;
chunk__33017_33050 = G__33062;
count__33018_33051 = G__33063;
i__33019_33052 = G__33064;
continue;
} else {
var req_33065 = cljs.core.first.call(null,seq__33016_33059__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33065,prov);

var G__33066 = cljs.core.next.call(null,seq__33016_33059__$1);
var G__33067 = null;
var G__33068 = (0);
var G__33069 = (0);
seq__33016_33049 = G__33066;
chunk__33017_33050 = G__33067;
count__33018_33051 = G__33068;
i__33019_33052 = G__33069;
continue;
}
} else {
}
}
break;
}

var G__33070 = cljs.core.next.call(null,seq__33008__$1);
var G__33071 = null;
var G__33072 = (0);
var G__33073 = (0);
seq__33008 = G__33070;
chunk__33009 = G__33071;
count__33010 = G__33072;
i__33011 = G__33073;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33074_33078 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33075_33079 = null;
var count__33076_33080 = (0);
var i__33077_33081 = (0);
while(true){
if((i__33077_33081 < count__33076_33080)){
var ns_33082 = cljs.core._nth.call(null,chunk__33075_33079,i__33077_33081);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33082);

var G__33083 = seq__33074_33078;
var G__33084 = chunk__33075_33079;
var G__33085 = count__33076_33080;
var G__33086 = (i__33077_33081 + (1));
seq__33074_33078 = G__33083;
chunk__33075_33079 = G__33084;
count__33076_33080 = G__33085;
i__33077_33081 = G__33086;
continue;
} else {
var temp__4657__auto___33087 = cljs.core.seq.call(null,seq__33074_33078);
if(temp__4657__auto___33087){
var seq__33074_33088__$1 = temp__4657__auto___33087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33074_33088__$1)){
var c__29125__auto___33089 = cljs.core.chunk_first.call(null,seq__33074_33088__$1);
var G__33090 = cljs.core.chunk_rest.call(null,seq__33074_33088__$1);
var G__33091 = c__29125__auto___33089;
var G__33092 = cljs.core.count.call(null,c__29125__auto___33089);
var G__33093 = (0);
seq__33074_33078 = G__33090;
chunk__33075_33079 = G__33091;
count__33076_33080 = G__33092;
i__33077_33081 = G__33093;
continue;
} else {
var ns_33094 = cljs.core.first.call(null,seq__33074_33088__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33094);

var G__33095 = cljs.core.next.call(null,seq__33074_33088__$1);
var G__33096 = null;
var G__33097 = (0);
var G__33098 = (0);
seq__33074_33078 = G__33095;
chunk__33075_33079 = G__33096;
count__33076_33080 = G__33097;
i__33077_33081 = G__33098;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33099__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33100__i = 0, G__33100__a = new Array(arguments.length -  0);
while (G__33100__i < G__33100__a.length) {G__33100__a[G__33100__i] = arguments[G__33100__i + 0]; ++G__33100__i;}
  args = new cljs.core.IndexedSeq(G__33100__a,0,null);
} 
return G__33099__delegate.call(this,args);};
G__33099.cljs$lang$maxFixedArity = 0;
G__33099.cljs$lang$applyTo = (function (arglist__33101){
var args = cljs.core.seq(arglist__33101);
return G__33099__delegate(args);
});
G__33099.cljs$core$IFn$_invoke$arity$variadic = G__33099__delegate;
return G__33099;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33102_SHARP_,p2__33103_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33102_SHARP_)].join('')),p2__33103_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33104_SHARP_,p2__33105_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33104_SHARP_)].join(''),p2__33105_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33106 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33106.addCallback(((function (G__33106){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33106))
);

G__33106.addErrback(((function (G__33106){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33106))
);

return G__33106;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33107 = cljs.core._EQ_;
var expr__33108 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33107.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33108))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33107,expr__33108){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33107,expr__33108))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33107,expr__33108){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33110){if((e33110 instanceof Error)){
var e = e33110;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33110;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33107,expr__33108))
} else {
if(cljs.core.truth_(pred__33107.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33108))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33107.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33108))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33107.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33108))){
return ((function (pred__33107,expr__33108){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33111){if((e33111 instanceof Error)){
var e = e33111;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33111;

}
}})());
});
;})(pred__33107,expr__33108))
} else {
return ((function (pred__33107,expr__33108){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33107,expr__33108))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33112,callback){
var map__33113 = p__33112;
var map__33113__$1 = ((((!((map__33113 == null)))?((((map__33113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33113):map__33113);
var file_msg = map__33113__$1;
var request_url = cljs.core.get.call(null,map__33113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33113,map__33113__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33113,map__33113__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__){
return (function (state_33137){
var state_val_33138 = (state_33137[(1)]);
if((state_val_33138 === (7))){
var inst_33133 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33139_33156 = state_33137__$1;
(statearr_33139_33156[(2)] = inst_33133);

(statearr_33139_33156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (1))){
var state_33137__$1 = state_33137;
var statearr_33140_33157 = state_33137__$1;
(statearr_33140_33157[(2)] = null);

(statearr_33140_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (4))){
var inst_33117 = (state_33137[(7)]);
var inst_33117__$1 = (state_33137[(2)]);
var state_33137__$1 = (function (){var statearr_33141 = state_33137;
(statearr_33141[(7)] = inst_33117__$1);

return statearr_33141;
})();
if(cljs.core.truth_(inst_33117__$1)){
var statearr_33142_33158 = state_33137__$1;
(statearr_33142_33158[(1)] = (5));

} else {
var statearr_33143_33159 = state_33137__$1;
(statearr_33143_33159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (6))){
var state_33137__$1 = state_33137;
var statearr_33144_33160 = state_33137__$1;
(statearr_33144_33160[(2)] = null);

(statearr_33144_33160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (3))){
var inst_33135 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33137__$1,inst_33135);
} else {
if((state_val_33138 === (2))){
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33137__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33138 === (11))){
var inst_33129 = (state_33137[(2)]);
var state_33137__$1 = (function (){var statearr_33145 = state_33137;
(statearr_33145[(8)] = inst_33129);

return statearr_33145;
})();
var statearr_33146_33161 = state_33137__$1;
(statearr_33146_33161[(2)] = null);

(statearr_33146_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (9))){
var inst_33123 = (state_33137[(9)]);
var inst_33121 = (state_33137[(10)]);
var inst_33125 = inst_33123.call(null,inst_33121);
var state_33137__$1 = state_33137;
var statearr_33147_33162 = state_33137__$1;
(statearr_33147_33162[(2)] = inst_33125);

(statearr_33147_33162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (5))){
var inst_33117 = (state_33137[(7)]);
var inst_33119 = figwheel.client.file_reloading.blocking_load.call(null,inst_33117);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33137__$1,(8),inst_33119);
} else {
if((state_val_33138 === (10))){
var inst_33121 = (state_33137[(10)]);
var inst_33127 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33121);
var state_33137__$1 = state_33137;
var statearr_33148_33163 = state_33137__$1;
(statearr_33148_33163[(2)] = inst_33127);

(statearr_33148_33163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (8))){
var inst_33117 = (state_33137[(7)]);
var inst_33123 = (state_33137[(9)]);
var inst_33121 = (state_33137[(2)]);
var inst_33122 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33123__$1 = cljs.core.get.call(null,inst_33122,inst_33117);
var state_33137__$1 = (function (){var statearr_33149 = state_33137;
(statearr_33149[(9)] = inst_33123__$1);

(statearr_33149[(10)] = inst_33121);

return statearr_33149;
})();
if(cljs.core.truth_(inst_33123__$1)){
var statearr_33150_33164 = state_33137__$1;
(statearr_33150_33164[(1)] = (9));

} else {
var statearr_33151_33165 = state_33137__$1;
(statearr_33151_33165[(1)] = (10));

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
});})(c__30885__auto__))
;
return ((function (switch__30797__auto__,c__30885__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$state_machine__30798__auto____0 = (function (){
var statearr_33152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33152[(0)] = figwheel$client$file_reloading$state_machine__30798__auto__);

(statearr_33152[(1)] = (1));

return statearr_33152;
});
var figwheel$client$file_reloading$state_machine__30798__auto____1 = (function (state_33137){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_33137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e33153){if((e33153 instanceof Object)){
var ex__30801__auto__ = e33153;
var statearr_33154_33166 = state_33137;
(statearr_33154_33166[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_33137;
state_33137 = G__33167;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30798__auto__ = function(state_33137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30798__auto____1.call(this,state_33137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30798__auto____0;
figwheel$client$file_reloading$state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30798__auto____1;
return figwheel$client$file_reloading$state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__))
})();
var state__30887__auto__ = (function (){var statearr_33155 = f__30886__auto__.call(null);
(statearr_33155[(6)] = c__30885__auto__);

return statearr_33155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__))
);

return c__30885__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33168,callback){
var map__33169 = p__33168;
var map__33169__$1 = ((((!((map__33169 == null)))?((((map__33169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169):map__33169);
var file_msg = map__33169__$1;
var namespace = cljs.core.get.call(null,map__33169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33169,map__33169__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33169,map__33169__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33171){
var map__33172 = p__33171;
var map__33172__$1 = ((((!((map__33172 == null)))?((((map__33172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33172):map__33172);
var file_msg = map__33172__$1;
var namespace = cljs.core.get.call(null,map__33172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33174){
var map__33175 = p__33174;
var map__33175__$1 = ((((!((map__33175 == null)))?((((map__33175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33175):map__33175);
var file_msg = map__33175__$1;
var namespace = cljs.core.get.call(null,map__33175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33177,callback){
var map__33178 = p__33177;
var map__33178__$1 = ((((!((map__33178 == null)))?((((map__33178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33178):map__33178);
var file_msg = map__33178__$1;
var request_url = cljs.core.get.call(null,map__33178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30885__auto___33228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto___33228,out){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto___33228,out){
return (function (state_33213){
var state_val_33214 = (state_33213[(1)]);
if((state_val_33214 === (1))){
var inst_33187 = cljs.core.seq.call(null,files);
var inst_33188 = cljs.core.first.call(null,inst_33187);
var inst_33189 = cljs.core.next.call(null,inst_33187);
var inst_33190 = files;
var state_33213__$1 = (function (){var statearr_33215 = state_33213;
(statearr_33215[(7)] = inst_33189);

(statearr_33215[(8)] = inst_33188);

(statearr_33215[(9)] = inst_33190);

return statearr_33215;
})();
var statearr_33216_33229 = state_33213__$1;
(statearr_33216_33229[(2)] = null);

(statearr_33216_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (2))){
var inst_33196 = (state_33213[(10)]);
var inst_33190 = (state_33213[(9)]);
var inst_33195 = cljs.core.seq.call(null,inst_33190);
var inst_33196__$1 = cljs.core.first.call(null,inst_33195);
var inst_33197 = cljs.core.next.call(null,inst_33195);
var inst_33198 = (inst_33196__$1 == null);
var inst_33199 = cljs.core.not.call(null,inst_33198);
var state_33213__$1 = (function (){var statearr_33217 = state_33213;
(statearr_33217[(11)] = inst_33197);

(statearr_33217[(10)] = inst_33196__$1);

return statearr_33217;
})();
if(inst_33199){
var statearr_33218_33230 = state_33213__$1;
(statearr_33218_33230[(1)] = (4));

} else {
var statearr_33219_33231 = state_33213__$1;
(statearr_33219_33231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (3))){
var inst_33211 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33213__$1,inst_33211);
} else {
if((state_val_33214 === (4))){
var inst_33196 = (state_33213[(10)]);
var inst_33201 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33196);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33213__$1,(7),inst_33201);
} else {
if((state_val_33214 === (5))){
var inst_33207 = cljs.core.async.close_BANG_.call(null,out);
var state_33213__$1 = state_33213;
var statearr_33220_33232 = state_33213__$1;
(statearr_33220_33232[(2)] = inst_33207);

(statearr_33220_33232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (6))){
var inst_33209 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33221_33233 = state_33213__$1;
(statearr_33221_33233[(2)] = inst_33209);

(statearr_33221_33233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (7))){
var inst_33197 = (state_33213[(11)]);
var inst_33203 = (state_33213[(2)]);
var inst_33204 = cljs.core.async.put_BANG_.call(null,out,inst_33203);
var inst_33190 = inst_33197;
var state_33213__$1 = (function (){var statearr_33222 = state_33213;
(statearr_33222[(12)] = inst_33204);

(statearr_33222[(9)] = inst_33190);

return statearr_33222;
})();
var statearr_33223_33234 = state_33213__$1;
(statearr_33223_33234[(2)] = null);

(statearr_33223_33234[(1)] = (2));


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
});})(c__30885__auto___33228,out))
;
return ((function (switch__30797__auto__,c__30885__auto___33228,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1 = (function (state_33213){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_33213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e33225){if((e33225 instanceof Object)){
var ex__30801__auto__ = e33225;
var statearr_33226_33235 = state_33213;
(statearr_33226_33235[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_33213;
state_33213 = G__33236;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto___33228,out))
})();
var state__30887__auto__ = (function (){var statearr_33227 = f__30886__auto__.call(null);
(statearr_33227[(6)] = c__30885__auto___33228);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto___33228,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33237,opts){
var map__33238 = p__33237;
var map__33238__$1 = ((((!((map__33238 == null)))?((((map__33238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);
var eval_body = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33240){var e = e33240;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33241_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33241_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33242){
var vec__33243 = p__33242;
var k = cljs.core.nth.call(null,vec__33243,(0),null);
var v = cljs.core.nth.call(null,vec__33243,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33246){
var vec__33247 = p__33246;
var k = cljs.core.nth.call(null,vec__33247,(0),null);
var v = cljs.core.nth.call(null,vec__33247,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33253,p__33254){
var map__33255 = p__33253;
var map__33255__$1 = ((((!((map__33255 == null)))?((((map__33255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33255):map__33255);
var opts = map__33255__$1;
var before_jsload = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33256 = p__33254;
var map__33256__$1 = ((((!((map__33256 == null)))?((((map__33256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33256):map__33256);
var msg = map__33256__$1;
var files = cljs.core.get.call(null,map__33256__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33256__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33256__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30886__auto__ = (function (){var switch__30797__auto__ = ((function (c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33410){
var state_val_33411 = (state_33410[(1)]);
if((state_val_33411 === (7))){
var inst_33273 = (state_33410[(7)]);
var inst_33270 = (state_33410[(8)]);
var inst_33271 = (state_33410[(9)]);
var inst_33272 = (state_33410[(10)]);
var inst_33278 = cljs.core._nth.call(null,inst_33271,inst_33273);
var inst_33279 = figwheel.client.file_reloading.eval_body.call(null,inst_33278,opts);
var inst_33280 = (inst_33273 + (1));
var tmp33412 = inst_33270;
var tmp33413 = inst_33271;
var tmp33414 = inst_33272;
var inst_33270__$1 = tmp33412;
var inst_33271__$1 = tmp33413;
var inst_33272__$1 = tmp33414;
var inst_33273__$1 = inst_33280;
var state_33410__$1 = (function (){var statearr_33415 = state_33410;
(statearr_33415[(7)] = inst_33273__$1);

(statearr_33415[(8)] = inst_33270__$1);

(statearr_33415[(9)] = inst_33271__$1);

(statearr_33415[(10)] = inst_33272__$1);

(statearr_33415[(11)] = inst_33279);

return statearr_33415;
})();
var statearr_33416_33499 = state_33410__$1;
(statearr_33416_33499[(2)] = null);

(statearr_33416_33499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (20))){
var inst_33313 = (state_33410[(12)]);
var inst_33321 = figwheel.client.file_reloading.sort_files.call(null,inst_33313);
var state_33410__$1 = state_33410;
var statearr_33417_33500 = state_33410__$1;
(statearr_33417_33500[(2)] = inst_33321);

(statearr_33417_33500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (27))){
var state_33410__$1 = state_33410;
var statearr_33418_33501 = state_33410__$1;
(statearr_33418_33501[(2)] = null);

(statearr_33418_33501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (1))){
var inst_33262 = (state_33410[(13)]);
var inst_33259 = before_jsload.call(null,files);
var inst_33260 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33261 = (function (){return ((function (inst_33262,inst_33259,inst_33260,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33250_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33250_SHARP_);
});
;})(inst_33262,inst_33259,inst_33260,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33262__$1 = cljs.core.filter.call(null,inst_33261,files);
var inst_33263 = cljs.core.not_empty.call(null,inst_33262__$1);
var state_33410__$1 = (function (){var statearr_33419 = state_33410;
(statearr_33419[(14)] = inst_33259);

(statearr_33419[(15)] = inst_33260);

(statearr_33419[(13)] = inst_33262__$1);

return statearr_33419;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33420_33502 = state_33410__$1;
(statearr_33420_33502[(1)] = (2));

} else {
var statearr_33421_33503 = state_33410__$1;
(statearr_33421_33503[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (24))){
var state_33410__$1 = state_33410;
var statearr_33422_33504 = state_33410__$1;
(statearr_33422_33504[(2)] = null);

(statearr_33422_33504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (39))){
var inst_33363 = (state_33410[(16)]);
var state_33410__$1 = state_33410;
var statearr_33423_33505 = state_33410__$1;
(statearr_33423_33505[(2)] = inst_33363);

(statearr_33423_33505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (46))){
var inst_33405 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33424_33506 = state_33410__$1;
(statearr_33424_33506[(2)] = inst_33405);

(statearr_33424_33506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (4))){
var inst_33307 = (state_33410[(2)]);
var inst_33308 = cljs.core.List.EMPTY;
var inst_33309 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33308);
var inst_33310 = (function (){return ((function (inst_33307,inst_33308,inst_33309,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33251_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33251_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33251_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33251_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_33307,inst_33308,inst_33309,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33311 = cljs.core.filter.call(null,inst_33310,files);
var inst_33312 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33313 = cljs.core.concat.call(null,inst_33311,inst_33312);
var state_33410__$1 = (function (){var statearr_33425 = state_33410;
(statearr_33425[(12)] = inst_33313);

(statearr_33425[(17)] = inst_33309);

(statearr_33425[(18)] = inst_33307);

return statearr_33425;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33426_33507 = state_33410__$1;
(statearr_33426_33507[(1)] = (16));

} else {
var statearr_33427_33508 = state_33410__$1;
(statearr_33427_33508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (15))){
var inst_33297 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33428_33509 = state_33410__$1;
(statearr_33428_33509[(2)] = inst_33297);

(statearr_33428_33509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (21))){
var inst_33323 = (state_33410[(19)]);
var inst_33323__$1 = (state_33410[(2)]);
var inst_33324 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33323__$1);
var state_33410__$1 = (function (){var statearr_33429 = state_33410;
(statearr_33429[(19)] = inst_33323__$1);

return statearr_33429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33410__$1,(22),inst_33324);
} else {
if((state_val_33411 === (31))){
var inst_33408 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33410__$1,inst_33408);
} else {
if((state_val_33411 === (32))){
var inst_33363 = (state_33410[(16)]);
var inst_33368 = inst_33363.cljs$lang$protocol_mask$partition0$;
var inst_33369 = (inst_33368 & (64));
var inst_33370 = inst_33363.cljs$core$ISeq$;
var inst_33371 = (cljs.core.PROTOCOL_SENTINEL === inst_33370);
var inst_33372 = (inst_33369) || (inst_33371);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33372)){
var statearr_33430_33510 = state_33410__$1;
(statearr_33430_33510[(1)] = (35));

} else {
var statearr_33431_33511 = state_33410__$1;
(statearr_33431_33511[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (40))){
var inst_33385 = (state_33410[(20)]);
var inst_33384 = (state_33410[(2)]);
var inst_33385__$1 = cljs.core.get.call(null,inst_33384,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33386 = cljs.core.get.call(null,inst_33384,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33387 = cljs.core.not_empty.call(null,inst_33385__$1);
var state_33410__$1 = (function (){var statearr_33432 = state_33410;
(statearr_33432[(21)] = inst_33386);

(statearr_33432[(20)] = inst_33385__$1);

return statearr_33432;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33433_33512 = state_33410__$1;
(statearr_33433_33512[(1)] = (41));

} else {
var statearr_33434_33513 = state_33410__$1;
(statearr_33434_33513[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (33))){
var state_33410__$1 = state_33410;
var statearr_33435_33514 = state_33410__$1;
(statearr_33435_33514[(2)] = false);

(statearr_33435_33514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (13))){
var inst_33283 = (state_33410[(22)]);
var inst_33287 = cljs.core.chunk_first.call(null,inst_33283);
var inst_33288 = cljs.core.chunk_rest.call(null,inst_33283);
var inst_33289 = cljs.core.count.call(null,inst_33287);
var inst_33270 = inst_33288;
var inst_33271 = inst_33287;
var inst_33272 = inst_33289;
var inst_33273 = (0);
var state_33410__$1 = (function (){var statearr_33436 = state_33410;
(statearr_33436[(7)] = inst_33273);

(statearr_33436[(8)] = inst_33270);

(statearr_33436[(9)] = inst_33271);

(statearr_33436[(10)] = inst_33272);

return statearr_33436;
})();
var statearr_33437_33515 = state_33410__$1;
(statearr_33437_33515[(2)] = null);

(statearr_33437_33515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (22))){
var inst_33327 = (state_33410[(23)]);
var inst_33323 = (state_33410[(19)]);
var inst_33331 = (state_33410[(24)]);
var inst_33326 = (state_33410[(25)]);
var inst_33326__$1 = (state_33410[(2)]);
var inst_33327__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33326__$1);
var inst_33328 = (function (){var all_files = inst_33323;
var res_SINGLEQUOTE_ = inst_33326__$1;
var res = inst_33327__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33327,inst_33323,inst_33331,inst_33326,inst_33326__$1,inst_33327__$1,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33252_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33252_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33327,inst_33323,inst_33331,inst_33326,inst_33326__$1,inst_33327__$1,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33329 = cljs.core.filter.call(null,inst_33328,inst_33326__$1);
var inst_33330 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33331__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33330);
var inst_33332 = cljs.core.not_empty.call(null,inst_33331__$1);
var state_33410__$1 = (function (){var statearr_33438 = state_33410;
(statearr_33438[(23)] = inst_33327__$1);

(statearr_33438[(24)] = inst_33331__$1);

(statearr_33438[(25)] = inst_33326__$1);

(statearr_33438[(26)] = inst_33329);

return statearr_33438;
})();
if(cljs.core.truth_(inst_33332)){
var statearr_33439_33516 = state_33410__$1;
(statearr_33439_33516[(1)] = (23));

} else {
var statearr_33440_33517 = state_33410__$1;
(statearr_33440_33517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (36))){
var state_33410__$1 = state_33410;
var statearr_33441_33518 = state_33410__$1;
(statearr_33441_33518[(2)] = false);

(statearr_33441_33518[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (41))){
var inst_33385 = (state_33410[(20)]);
var inst_33389 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33390 = cljs.core.map.call(null,inst_33389,inst_33385);
var inst_33391 = cljs.core.pr_str.call(null,inst_33390);
var inst_33392 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33391)].join('');
var inst_33393 = figwheel.client.utils.log.call(null,inst_33392);
var state_33410__$1 = state_33410;
var statearr_33442_33519 = state_33410__$1;
(statearr_33442_33519[(2)] = inst_33393);

(statearr_33442_33519[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (43))){
var inst_33386 = (state_33410[(21)]);
var inst_33396 = (state_33410[(2)]);
var inst_33397 = cljs.core.not_empty.call(null,inst_33386);
var state_33410__$1 = (function (){var statearr_33443 = state_33410;
(statearr_33443[(27)] = inst_33396);

return statearr_33443;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33444_33520 = state_33410__$1;
(statearr_33444_33520[(1)] = (44));

} else {
var statearr_33445_33521 = state_33410__$1;
(statearr_33445_33521[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (29))){
var inst_33327 = (state_33410[(23)]);
var inst_33323 = (state_33410[(19)]);
var inst_33363 = (state_33410[(16)]);
var inst_33331 = (state_33410[(24)]);
var inst_33326 = (state_33410[(25)]);
var inst_33329 = (state_33410[(26)]);
var inst_33359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33362 = (function (){var all_files = inst_33323;
var res_SINGLEQUOTE_ = inst_33326;
var res = inst_33327;
var files_not_loaded = inst_33329;
var dependencies_that_loaded = inst_33331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33363,inst_33331,inst_33326,inst_33329,inst_33359,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33361){
var map__33446 = p__33361;
var map__33446__$1 = ((((!((map__33446 == null)))?((((map__33446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33446):map__33446);
var namespace = cljs.core.get.call(null,map__33446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33363,inst_33331,inst_33326,inst_33329,inst_33359,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33363__$1 = cljs.core.group_by.call(null,inst_33362,inst_33329);
var inst_33365 = (inst_33363__$1 == null);
var inst_33366 = cljs.core.not.call(null,inst_33365);
var state_33410__$1 = (function (){var statearr_33448 = state_33410;
(statearr_33448[(28)] = inst_33359);

(statearr_33448[(16)] = inst_33363__$1);

return statearr_33448;
})();
if(inst_33366){
var statearr_33449_33522 = state_33410__$1;
(statearr_33449_33522[(1)] = (32));

} else {
var statearr_33450_33523 = state_33410__$1;
(statearr_33450_33523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (44))){
var inst_33386 = (state_33410[(21)]);
var inst_33399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33386);
var inst_33400 = cljs.core.pr_str.call(null,inst_33399);
var inst_33401 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33400)].join('');
var inst_33402 = figwheel.client.utils.log.call(null,inst_33401);
var state_33410__$1 = state_33410;
var statearr_33451_33524 = state_33410__$1;
(statearr_33451_33524[(2)] = inst_33402);

(statearr_33451_33524[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (6))){
var inst_33304 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33452_33525 = state_33410__$1;
(statearr_33452_33525[(2)] = inst_33304);

(statearr_33452_33525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (28))){
var inst_33329 = (state_33410[(26)]);
var inst_33356 = (state_33410[(2)]);
var inst_33357 = cljs.core.not_empty.call(null,inst_33329);
var state_33410__$1 = (function (){var statearr_33453 = state_33410;
(statearr_33453[(29)] = inst_33356);

return statearr_33453;
})();
if(cljs.core.truth_(inst_33357)){
var statearr_33454_33526 = state_33410__$1;
(statearr_33454_33526[(1)] = (29));

} else {
var statearr_33455_33527 = state_33410__$1;
(statearr_33455_33527[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (25))){
var inst_33327 = (state_33410[(23)]);
var inst_33343 = (state_33410[(2)]);
var inst_33344 = cljs.core.not_empty.call(null,inst_33327);
var state_33410__$1 = (function (){var statearr_33456 = state_33410;
(statearr_33456[(30)] = inst_33343);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33344)){
var statearr_33457_33528 = state_33410__$1;
(statearr_33457_33528[(1)] = (26));

} else {
var statearr_33458_33529 = state_33410__$1;
(statearr_33458_33529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (34))){
var inst_33379 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33379)){
var statearr_33459_33530 = state_33410__$1;
(statearr_33459_33530[(1)] = (38));

} else {
var statearr_33460_33531 = state_33410__$1;
(statearr_33460_33531[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (17))){
var state_33410__$1 = state_33410;
var statearr_33461_33532 = state_33410__$1;
(statearr_33461_33532[(2)] = recompile_dependents);

(statearr_33461_33532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (3))){
var state_33410__$1 = state_33410;
var statearr_33462_33533 = state_33410__$1;
(statearr_33462_33533[(2)] = null);

(statearr_33462_33533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (12))){
var inst_33300 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33463_33534 = state_33410__$1;
(statearr_33463_33534[(2)] = inst_33300);

(statearr_33463_33534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (2))){
var inst_33262 = (state_33410[(13)]);
var inst_33269 = cljs.core.seq.call(null,inst_33262);
var inst_33270 = inst_33269;
var inst_33271 = null;
var inst_33272 = (0);
var inst_33273 = (0);
var state_33410__$1 = (function (){var statearr_33464 = state_33410;
(statearr_33464[(7)] = inst_33273);

(statearr_33464[(8)] = inst_33270);

(statearr_33464[(9)] = inst_33271);

(statearr_33464[(10)] = inst_33272);

return statearr_33464;
})();
var statearr_33465_33535 = state_33410__$1;
(statearr_33465_33535[(2)] = null);

(statearr_33465_33535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (23))){
var inst_33327 = (state_33410[(23)]);
var inst_33323 = (state_33410[(19)]);
var inst_33331 = (state_33410[(24)]);
var inst_33326 = (state_33410[(25)]);
var inst_33329 = (state_33410[(26)]);
var inst_33334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33336 = (function (){var all_files = inst_33323;
var res_SINGLEQUOTE_ = inst_33326;
var res = inst_33327;
var files_not_loaded = inst_33329;
var dependencies_that_loaded = inst_33331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33334,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33335){
var map__33466 = p__33335;
var map__33466__$1 = ((((!((map__33466 == null)))?((((map__33466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33466):map__33466);
var request_url = cljs.core.get.call(null,map__33466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33334,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33337 = cljs.core.reverse.call(null,inst_33331);
var inst_33338 = cljs.core.map.call(null,inst_33336,inst_33337);
var inst_33339 = cljs.core.pr_str.call(null,inst_33338);
var inst_33340 = figwheel.client.utils.log.call(null,inst_33339);
var state_33410__$1 = (function (){var statearr_33468 = state_33410;
(statearr_33468[(31)] = inst_33334);

return statearr_33468;
})();
var statearr_33469_33536 = state_33410__$1;
(statearr_33469_33536[(2)] = inst_33340);

(statearr_33469_33536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (35))){
var state_33410__$1 = state_33410;
var statearr_33470_33537 = state_33410__$1;
(statearr_33470_33537[(2)] = true);

(statearr_33470_33537[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (19))){
var inst_33313 = (state_33410[(12)]);
var inst_33319 = figwheel.client.file_reloading.expand_files.call(null,inst_33313);
var state_33410__$1 = state_33410;
var statearr_33471_33538 = state_33410__$1;
(statearr_33471_33538[(2)] = inst_33319);

(statearr_33471_33538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (11))){
var state_33410__$1 = state_33410;
var statearr_33472_33539 = state_33410__$1;
(statearr_33472_33539[(2)] = null);

(statearr_33472_33539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (9))){
var inst_33302 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33473_33540 = state_33410__$1;
(statearr_33473_33540[(2)] = inst_33302);

(statearr_33473_33540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (5))){
var inst_33273 = (state_33410[(7)]);
var inst_33272 = (state_33410[(10)]);
var inst_33275 = (inst_33273 < inst_33272);
var inst_33276 = inst_33275;
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33276)){
var statearr_33474_33541 = state_33410__$1;
(statearr_33474_33541[(1)] = (7));

} else {
var statearr_33475_33542 = state_33410__$1;
(statearr_33475_33542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (14))){
var inst_33283 = (state_33410[(22)]);
var inst_33292 = cljs.core.first.call(null,inst_33283);
var inst_33293 = figwheel.client.file_reloading.eval_body.call(null,inst_33292,opts);
var inst_33294 = cljs.core.next.call(null,inst_33283);
var inst_33270 = inst_33294;
var inst_33271 = null;
var inst_33272 = (0);
var inst_33273 = (0);
var state_33410__$1 = (function (){var statearr_33476 = state_33410;
(statearr_33476[(7)] = inst_33273);

(statearr_33476[(8)] = inst_33270);

(statearr_33476[(9)] = inst_33271);

(statearr_33476[(10)] = inst_33272);

(statearr_33476[(32)] = inst_33293);

return statearr_33476;
})();
var statearr_33477_33543 = state_33410__$1;
(statearr_33477_33543[(2)] = null);

(statearr_33477_33543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (45))){
var state_33410__$1 = state_33410;
var statearr_33478_33544 = state_33410__$1;
(statearr_33478_33544[(2)] = null);

(statearr_33478_33544[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (26))){
var inst_33327 = (state_33410[(23)]);
var inst_33323 = (state_33410[(19)]);
var inst_33331 = (state_33410[(24)]);
var inst_33326 = (state_33410[(25)]);
var inst_33329 = (state_33410[(26)]);
var inst_33346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33348 = (function (){var all_files = inst_33323;
var res_SINGLEQUOTE_ = inst_33326;
var res = inst_33327;
var files_not_loaded = inst_33329;
var dependencies_that_loaded = inst_33331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33346,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33347){
var map__33479 = p__33347;
var map__33479__$1 = ((((!((map__33479 == null)))?((((map__33479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33479):map__33479);
var namespace = cljs.core.get.call(null,map__33479__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33346,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33349 = cljs.core.map.call(null,inst_33348,inst_33327);
var inst_33350 = cljs.core.pr_str.call(null,inst_33349);
var inst_33351 = figwheel.client.utils.log.call(null,inst_33350);
var inst_33352 = (function (){var all_files = inst_33323;
var res_SINGLEQUOTE_ = inst_33326;
var res = inst_33327;
var files_not_loaded = inst_33329;
var dependencies_that_loaded = inst_33331;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33346,inst_33348,inst_33349,inst_33350,inst_33351,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33327,inst_33323,inst_33331,inst_33326,inst_33329,inst_33346,inst_33348,inst_33349,inst_33350,inst_33351,state_val_33411,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33353 = setTimeout(inst_33352,(10));
var state_33410__$1 = (function (){var statearr_33481 = state_33410;
(statearr_33481[(33)] = inst_33346);

(statearr_33481[(34)] = inst_33351);

return statearr_33481;
})();
var statearr_33482_33545 = state_33410__$1;
(statearr_33482_33545[(2)] = inst_33353);

(statearr_33482_33545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (16))){
var state_33410__$1 = state_33410;
var statearr_33483_33546 = state_33410__$1;
(statearr_33483_33546[(2)] = reload_dependents);

(statearr_33483_33546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (38))){
var inst_33363 = (state_33410[(16)]);
var inst_33381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33363);
var state_33410__$1 = state_33410;
var statearr_33484_33547 = state_33410__$1;
(statearr_33484_33547[(2)] = inst_33381);

(statearr_33484_33547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (30))){
var state_33410__$1 = state_33410;
var statearr_33485_33548 = state_33410__$1;
(statearr_33485_33548[(2)] = null);

(statearr_33485_33548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (10))){
var inst_33283 = (state_33410[(22)]);
var inst_33285 = cljs.core.chunked_seq_QMARK_.call(null,inst_33283);
var state_33410__$1 = state_33410;
if(inst_33285){
var statearr_33486_33549 = state_33410__$1;
(statearr_33486_33549[(1)] = (13));

} else {
var statearr_33487_33550 = state_33410__$1;
(statearr_33487_33550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (18))){
var inst_33317 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33317)){
var statearr_33488_33551 = state_33410__$1;
(statearr_33488_33551[(1)] = (19));

} else {
var statearr_33489_33552 = state_33410__$1;
(statearr_33489_33552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (42))){
var state_33410__$1 = state_33410;
var statearr_33490_33553 = state_33410__$1;
(statearr_33490_33553[(2)] = null);

(statearr_33490_33553[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (37))){
var inst_33376 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33491_33554 = state_33410__$1;
(statearr_33491_33554[(2)] = inst_33376);

(statearr_33491_33554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (8))){
var inst_33270 = (state_33410[(8)]);
var inst_33283 = (state_33410[(22)]);
var inst_33283__$1 = cljs.core.seq.call(null,inst_33270);
var state_33410__$1 = (function (){var statearr_33492 = state_33410;
(statearr_33492[(22)] = inst_33283__$1);

return statearr_33492;
})();
if(inst_33283__$1){
var statearr_33493_33555 = state_33410__$1;
(statearr_33493_33555[(1)] = (10));

} else {
var statearr_33494_33556 = state_33410__$1;
(statearr_33494_33556[(1)] = (11));

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
}
});})(c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30797__auto__,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0 = (function (){
var statearr_33495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33495[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__);

(statearr_33495[(1)] = (1));

return statearr_33495;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1 = (function (state_33410){
while(true){
var ret_value__30799__auto__ = (function (){try{while(true){
var result__30800__auto__ = switch__30797__auto__.call(null,state_33410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30800__auto__;
}
break;
}
}catch (e33496){if((e33496 instanceof Object)){
var ex__30801__auto__ = e33496;
var statearr_33497_33557 = state_33410;
(statearr_33497_33557[(5)] = ex__30801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_33410;
state_33410 = G__33558;
continue;
} else {
return ret_value__30799__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__ = function(state_33410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1.call(this,state_33410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30798__auto__;
})()
;})(switch__30797__auto__,c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30887__auto__ = (function (){var statearr_33498 = f__30886__auto__.call(null);
(statearr_33498[(6)] = c__30885__auto__);

return statearr_33498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30887__auto__);
});})(c__30885__auto__,map__33255,map__33255__$1,opts,before_jsload,on_jsload,reload_dependents,map__33256,map__33256__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30885__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33561,link){
var map__33562 = p__33561;
var map__33562__$1 = ((((!((map__33562 == null)))?((((map__33562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33562):map__33562);
var file = cljs.core.get.call(null,map__33562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33562,map__33562__$1,file){
return (function (p1__33559_SHARP_,p2__33560_SHARP_){
if(cljs.core._EQ_.call(null,p1__33559_SHARP_,p2__33560_SHARP_)){
return p1__33559_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33562,map__33562__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33565){
var map__33566 = p__33565;
var map__33566__$1 = ((((!((map__33566 == null)))?((((map__33566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33566):map__33566);
var match_length = cljs.core.get.call(null,map__33566__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33566__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33564_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33564_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33568_SHARP_,p2__33569_SHARP_){
return cljs.core.assoc.call(null,p1__33568_SHARP_,cljs.core.get.call(null,p2__33569_SHARP_,key),p2__33569_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33570 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33570);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33570);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33571,p__33572){
var map__33573 = p__33571;
var map__33573__$1 = ((((!((map__33573 == null)))?((((map__33573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33573):map__33573);
var on_cssload = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33574 = p__33572;
var map__33574__$1 = ((((!((map__33574 == null)))?((((map__33574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33574):map__33574);
var files_msg = map__33574__$1;
var files = cljs.core.get.call(null,map__33574__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1515786730393
