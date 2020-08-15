// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('samurai_test_task.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
samurai_test_task.core.home = (function samurai_test_task$core$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Hello, Reagent!"], null);
});
var G__39707_39709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.home], null);
var G__39708_39710 = document.getElementsById("content");
(reagent.core.render.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render.cljs$core$IFn$_invoke$arity$2(G__39707_39709,G__39708_39710) : reagent.core.render.call(null,G__39707_39709,G__39708_39710));
