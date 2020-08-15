// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__6640 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6641 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6641);

try{var G__6642 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__6643 = container;
var G__6644 = (function (){
var _STAR_always_update_STAR__orig_val__6645 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__6646 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__6646);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6645);
}});
return reagent.dom.global$module$react_dom.render(G__6642,G__6643,G__6644);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__6640);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__6648 = arguments.length;
switch (G__6648) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__6649 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__6653_6669 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__6654_6670 = null;
var count__6655_6671 = (0);
var i__6656_6672 = (0);
while(true){
if((i__6656_6672 < count__6655_6671)){
var vec__6663_6673 = chunk__6654_6670.cljs$core$IIndexed$_nth$arity$2(null,i__6656_6672);
var container_6674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663_6673,(0),null);
var comp_6675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6663_6673,(1),null);
reagent.dom.re_render_component(comp_6675,container_6674);


var G__6676 = seq__6653_6669;
var G__6677 = chunk__6654_6670;
var G__6678 = count__6655_6671;
var G__6679 = (i__6656_6672 + (1));
seq__6653_6669 = G__6676;
chunk__6654_6670 = G__6677;
count__6655_6671 = G__6678;
i__6656_6672 = G__6679;
continue;
} else {
var temp__5735__auto___6680 = cljs.core.seq(seq__6653_6669);
if(temp__5735__auto___6680){
var seq__6653_6681__$1 = temp__5735__auto___6680;
if(cljs.core.chunked_seq_QMARK_(seq__6653_6681__$1)){
var c__4556__auto___6682 = cljs.core.chunk_first(seq__6653_6681__$1);
var G__6683 = cljs.core.chunk_rest(seq__6653_6681__$1);
var G__6684 = c__4556__auto___6682;
var G__6685 = cljs.core.count(c__4556__auto___6682);
var G__6686 = (0);
seq__6653_6669 = G__6683;
chunk__6654_6670 = G__6684;
count__6655_6671 = G__6685;
i__6656_6672 = G__6686;
continue;
} else {
var vec__6666_6687 = cljs.core.first(seq__6653_6681__$1);
var container_6688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6666_6687,(0),null);
var comp_6689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6666_6687,(1),null);
reagent.dom.re_render_component(comp_6689,container_6688);


var G__6690 = cljs.core.next(seq__6653_6681__$1);
var G__6691 = null;
var G__6692 = (0);
var G__6693 = (0);
seq__6653_6669 = G__6690;
chunk__6654_6670 = G__6691;
count__6655_6671 = G__6692;
i__6656_6672 = G__6693;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
