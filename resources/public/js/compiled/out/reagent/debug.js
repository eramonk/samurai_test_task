// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__39190__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39191__i = 0, G__39191__a = new Array(arguments.length -  0);
while (G__39191__i < G__39191__a.length) {G__39191__a[G__39191__i] = arguments[G__39191__i + 0]; ++G__39191__i;}
  args = new cljs.core.IndexedSeq(G__39191__a,0,null);
} 
return G__39190__delegate.call(this,args);};
G__39190.cljs$lang$maxFixedArity = 0;
G__39190.cljs$lang$applyTo = (function (arglist__39192){
var args = cljs.core.seq(arglist__39192);
return G__39190__delegate(args);
});
G__39190.cljs$core$IFn$_invoke$arity$variadic = G__39190__delegate;
return G__39190;
})()
);

(o.error = (function() { 
var G__39193__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39194__i = 0, G__39194__a = new Array(arguments.length -  0);
while (G__39194__i < G__39194__a.length) {G__39194__a[G__39194__i] = arguments[G__39194__i + 0]; ++G__39194__i;}
  args = new cljs.core.IndexedSeq(G__39194__a,0,null);
} 
return G__39193__delegate.call(this,args);};
G__39193.cljs$lang$maxFixedArity = 0;
G__39193.cljs$lang$applyTo = (function (arglist__39195){
var args = cljs.core.seq(arglist__39195);
return G__39193__delegate(args);
});
G__39193.cljs$core$IFn$_invoke$arity$variadic = G__39193__delegate;
return G__39193;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
