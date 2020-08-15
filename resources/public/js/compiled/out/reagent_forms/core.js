// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__6715 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6715,(0),null);
var offset_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6715,(1),null);
return (list_elem.scrollTop = (offset_top - ((2) * item_height)));
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
if(cljs.core.sequential_QMARK_(id)){
return id;
} else {
var segments = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(1)),/\./);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize((function (doc,id){
return reagent.core.cursor(doc,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id)));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6719_SHARP_,p2__6718_SHARP_){
var or__4126__auto__ = (p2__6718_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p2__6718_SHARP_.cljs$core$IFn$_invoke$arity$4(id,path,value,p1__6719_SHARP_) : p2__6718_SHARP_.call(null,id,path,value,p1__6719_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return p1__6719_SHARP_;
}
}),doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),(function (current_value){
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(current_value,value) : update_fn.call(null,current_value,value));
}));
if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,id) : reagent_forms.core.cursor_for_id.call(null,doc,id)),value);

if(cljs.core.empty_QMARK_(events)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.run_events,id,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
var G__6720 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__6720) : wrapper.call(null,G__6720));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__6721 = id;
var G__6722 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6721,G__6722) : save_BANG_.call(null,G__6721,G__6722));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
var G__6723 = id;
var G__6724 = update_fn;
var G__6725 = (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(value) : wrapper.call(null,value));
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__6723,G__6724,G__6725) : update_BANG_.call(null,G__6723,G__6724,G__6725));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__6726,node){
var map__6727 = p__6726;
var map__6727__$1 = (((((!((map__6727 == null))))?(((((map__6727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6727):map__6727);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6727__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6727__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6727__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6727__$1,cljs.core.cst$kw$update_BANG_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (){var temp__5733__auto__ = cljs.core.cst$kw$in_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var in_fn = temp__5733__auto__;
return reagent_forms.core.wrap_get_fn(get,in_fn);
} else {
return get;
}
})(),cljs.core.cst$kw$save_BANG_,(function (){var temp__5733__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_save_fn(save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),cljs.core.cst$kw$update_BANG_,(function (){var temp__5733__auto__ = cljs.core.cst$kw$out_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__5733__auto__)){
var out_fn = temp__5733__auto__;
return reagent_forms.core.wrap_update_fn(update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.set_disabled = (function reagent_forms$core$set_disabled(attrs,update_disabled_QMARK_){
if(cljs.core.truth_((function (){var and__4115__auto__ = update_disabled_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(attrs) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$disabled,(function (p1__6729_SHARP_){
if(cljs.core.fn_QMARK_(p1__6729_SHARP_)){
return (p1__6729_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__6729_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__6729_SHARP_.call(null));
} else {
return p1__6729_SHARP_;
}
}));
} else {
return attrs;
}
});
reagent_forms.core.call_attr = (function reagent_forms$core$call_attr(doc,attr){
var doc__$1 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
if(cljs.core.fn_QMARK_(attr)){
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(doc__$1) : attr.call(null,doc__$1));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc__$1,(reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(attr) : reagent_forms.core.id__GT_path.call(null,attr)));
}
});
reagent_forms.core.update_class = (function reagent_forms$core$update_class(attrs,classes){
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$class,(function (p1__6730_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(((typeof p1__6730_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6730_SHARP_], null):p1__6730_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__6731,doc){
var map__6732 = p__6731;
var map__6732__$1 = (((((!((map__6732 == null))))?(((((map__6732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6732):map__6732);
var attrs = map__6732__$1;
var set_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6732__$1,cljs.core.cst$kw$set_DASH_attributes);
var or__4126__auto__ = (cljs.core.truth_(set_attributes)?(function (){var G__6736 = ((cljs.core.fn_QMARK_(doc))?(doc.cljs$core$IFn$_invoke$arity$0 ? doc.cljs$core$IFn$_invoke$arity$0() : doc.call(null)):cljs.core.deref(doc));
var G__6737 = attrs;
return (set_attributes.cljs$core$IFn$_invoke$arity$2 ? set_attributes.cljs$core$IFn$_invoke$arity$2(G__6736,G__6737) : set_attributes.call(null,G__6736,G__6737));
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attrs;
}
});
reagent_forms.core.set_validation_class = (function reagent_forms$core$set_validation_class(attrs,doc){
var temp__5733__auto__ = cljs.core.cst$kw$validator.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var valid = temp__5733__auto__;
return reagent_forms.core.update_class(attrs,reagent_forms.core.call_attr(doc,valid));
} else {
return attrs;
}
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$event,cljs.core.cst$kw$field,cljs.core.cst$kw$in_DASH_fn,cljs.core.cst$kw$out_DASH_fn,cljs.core.cst$kw$inline,cljs.core.cst$kw$save_DASH_fn,cljs.core.cst$kw$preamble,cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$postamble,cljs.core.cst$kw$validator,cljs.core.cst$kw$date_DASH_format,cljs.core.cst$kw$auto_DASH_close_QMARK_,cljs.core.cst$kw$set_DASH_attributes], 0));
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.format_type !== 'undefined')){
} else {
reagent_forms.core.format_type = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6738 = cljs.core.get_global_hierarchy;
return (fexpr__6738.cljs$core$IFn$_invoke$arity$0 ? fexpr__6738.cljs$core$IFn$_invoke$arity$0() : fexpr__6738.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),(function (field_type,_){
if(cljs.core.truth_((function (){var fexpr__6739 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$range,null], null), null);
return (fexpr__6739.cljs$core$IFn$_invoke$arity$1 ? fexpr__6739.cljs$core$IFn$_invoke$arity$1(field_type) : fexpr__6739.call(null,field_type));
})())){
return cljs.core.cst$kw$numeric;
} else {
return field_type;
}
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_(((cljs.core.not(isNaN(parseFloat(value))))?fmt:false))){
return goog.string.format(fmt,value);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,value){
return value;
}));
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind !== 'undefined')){
} else {
reagent_forms.core.bind = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6740 = cljs.core.get_global_hierarchy;
return (fexpr__6740.cljs$core$IFn$_invoke$arity$0 ? fexpr__6740.cljs$core$IFn$_invoke$arity$0() : fexpr__6740.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),(function (p__6741,_){
var map__6742 = p__6741;
var map__6742__$1 = (((((!((map__6742 == null))))?(((((map__6742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6742):map__6742);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6742__$1,cljs.core.cst$kw$field);
if(cljs.core.truth_((function (){var fexpr__6744 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$numeric,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__6744.cljs$core$IFn$_invoke$arity$1 ? fexpr__6744.cljs$core$IFn$_invoke$arity$1(field) : fexpr__6744.call(null,field));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field;
}
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__6746,p__6747){
var map__6748 = p__6746;
var map__6748__$1 = (((((!((map__6748 == null))))?(((((map__6748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6748):map__6748);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,cljs.core.cst$kw$fmt);
var map__6749 = p__6747;
var map__6749__$1 = (((((!((map__6749 == null))))?(((((map__6749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6749):map__6749);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6749__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6749__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(function (){var value = (function (){var or__4126__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__6745_SHARP_){
var G__6752 = id;
var G__6753 = (function (){var G__6754 = field;
var G__6755 = reagent_forms.core.value_of(p1__6745_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__6754,G__6755) : reagent_forms.core.format_type.call(null,G__6754,G__6755));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6752,G__6753) : save_BANG_.call(null,G__6752,G__6753));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__6756,p__6757){
var map__6758 = p__6756;
var map__6758__$1 = (((((!((map__6758 == null))))?(((((map__6758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6758):map__6758);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,cljs.core.cst$kw$id);
var map__6759 = p__6757;
var map__6759__$1 = (((((!((map__6759 == null))))?(((((map__6759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6759):map__6759);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6759__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6759__$1,cljs.core.cst$kw$save_BANG_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$checked,cljs.core.boolean$((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id))),cljs.core.cst$kw$on_DASH_change,(function (){
var G__6762 = id;
var G__6763 = cljs.core.not((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6762,G__6763) : save_BANG_.call(null,G__6762,G__6763));
})], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6775 = arguments.length;
var i__4737__auto___6776 = (0);
while(true){
if((i__4737__auto___6776 < len__4736__auto___6775)){
args__4742__auto__.push((arguments[i__4737__auto___6776]));

var G__6777 = (i__4737__auto___6776 + (1));
i__4737__auto___6776 = G__6777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__6767,opts,p__6768){
var vec__6769 = p__6767;
var seq__6770 = cljs.core.seq(vec__6769);
var first__6771 = cljs.core.first(seq__6770);
var seq__6770__$1 = cljs.core.next(seq__6770);
var type = first__6771;
var first__6771__$1 = cljs.core.first(seq__6770__$1);
var seq__6770__$2 = cljs.core.next(seq__6770__$1);
var attrs = first__6771__$1;
var body = seq__6770__$2;
var vec__6772 = p__6768;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6772,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_attrs,(reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(attrs,opts) : reagent_forms.core.bind.call(null,attrs,opts)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0))], 0))], null),body);
}));

(reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq6764){
var G__6765 = cljs.core.first(seq6764);
var seq6764__$1 = cljs.core.next(seq6764);
var G__6766 = cljs.core.first(seq6764__$1);
var seq6764__$2 = cljs.core.next(seq6764__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6765,G__6766,seq6764__$2);
}));

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6778 = cljs.core.get_global_hierarchy;
return (fexpr__6778.cljs$core$IFn$_invoke$arity$0 ? fexpr__6778.cljs$core$IFn$_invoke$arity$0() : fexpr__6778.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),(function (p__6779,_){
var vec__6780 = p__6779;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(0),null);
var map__6783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(1),null);
var map__6783__$1 = (((((!((map__6783 == null))))?(((((map__6783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6783):map__6783);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6783__$1,cljs.core.cst$kw$field);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_((function (){var fexpr__6785 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$email,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$tel,null,cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$range,null,cljs.core.cst$kw$text,null], null), null);
return (fexpr__6785.cljs$core$IFn$_invoke$arity$1 ? fexpr__6785.cljs$core$IFn$_invoke$arity$1(field__$1) : fexpr__6785.call(null,field__$1));
})())){
return cljs.core.cst$kw$input_DASH_field;
} else {
return field__$1;
}
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$container,(function (p__6786,p__6787){
var vec__6788 = p__6786;
var seq__6789 = cljs.core.seq(vec__6788);
var first__6790 = cljs.core.first(seq__6789);
var seq__6789__$1 = cljs.core.next(seq__6789);
var type = first__6790;
var first__6790__$1 = cljs.core.first(seq__6789__$1);
var seq__6789__$2 = cljs.core.next(seq__6789__$1);
var attrs = first__6790__$1;
var body = seq__6789__$2;
var map__6791 = p__6787;
var map__6791__$1 = (((((!((map__6791 == null))))?(((((map__6791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6791):map__6791);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6791__$1,cljs.core.cst$kw$doc);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$input_DASH_field,(function (p__6793,p__6794){
var vec__6795 = p__6793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795,(0),null);
var map__6798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795,(1),null);
var map__6798__$1 = (((((!((map__6798 == null))))?(((((map__6798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6798):map__6798);
var attrs = map__6798__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6798__$1,cljs.core.cst$kw$field);
var component = vec__6795;
var map__6799 = p__6794;
var map__6799__$1 = (((((!((map__6799 == null))))?(((((map__6799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6799):map__6799);
var opts = map__6799__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6799__$1,cljs.core.cst$kw$doc);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$numeric,(function (p__6804,p__6805){
var vec__6806 = p__6804;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(0),null);
var map__6809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(1),null);
var map__6809__$1 = (((((!((map__6809 == null))))?(((((map__6809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6809):map__6809);
var attrs = map__6809__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,cljs.core.cst$kw$id);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,cljs.core.cst$kw$fmt);
var map__6810 = p__6805;
var map__6810__$1 = (((((!((map__6810 == null))))?(((((map__6810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6810):map__6810);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6810__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6810__$1,cljs.core.cst$kw$save_BANG_);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6810__$1,cljs.core.cst$kw$doc);
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$value,(function (){var or__4126__auto__ = cljs.core.deref(input_value);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (get.cljs$core$IFn$_invoke$arity$2 ? get.cljs$core$IFn$_invoke$arity$2(id,"") : get.call(null,id,""));
}
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__6802_SHARP_){
return cljs.core.reset_BANG_(input_value,reagent_forms.core.value_of(p1__6802_SHARP_));
}),cljs.core.cst$kw$on_DASH_blur,(function (p1__6803_SHARP_){
cljs.core.reset_BANG_(input_value,null);

var G__6813 = id;
var G__6814 = (function (){var G__6815 = cljs.core.cst$kw$numeric;
var G__6816 = reagent_forms.core.format_value(fmt,reagent_forms.core.value_of(p1__6803_SHARP_));
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__6815,G__6816) : reagent_forms.core.format_type.call(null,G__6815,G__6816));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6813,G__6814) : save_BANG_.call(null,G__6813,G__6814));
})], null),attrs], 0))], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$datepicker,(function (p__6820,p__6821){
var vec__6822 = p__6820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822,(0),null);
var map__6825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822,(1),null);
var map__6825__$1 = (((((!((map__6825 == null))))?(((((map__6825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6825):map__6825);
var attrs = map__6825__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$id);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$date_DASH_format);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$inline);
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$auto_DASH_close_QMARK_);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$disabled);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6825__$1,cljs.core.cst$kw$lang,cljs.core.cst$kw$en_DASH_US);
var save_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6825__$1,cljs.core.cst$kw$save_DASH_fn);
var map__6826 = p__6821;
var map__6826__$1 = (((((!((map__6826 == null))))?(((((map__6826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6826):map__6826);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6826__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6826__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6826__$1,cljs.core.cst$kw$save_BANG_);
var update_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6826__$1,cljs.core.cst$kw$update_BANG_);
var fmt = ((cljs.core.fn_QMARK_(date_format))?date_format:(function (p1__6817_SHARP_){
return reagent_forms.datepicker.format_date(p1__6817_SHARP_,reagent_forms.datepicker.parse_format(date_format));
}));
var selected_date = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
var selected_month = (((cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__4126__auto__ = cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__4126__auto__ = selected_month;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__4126__auto__ = cljs.core.cst$kw$day.cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var save_value = (cljs.core.truth_(save_fn)?(function (p1__6818_SHARP_){
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(id,save_fn,p1__6818_SHARP_) : update_BANG_.call(null,id,save_fn,p1__6818_SHARP_));
}):(function (p1__6819_SHARP_){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,p1__6819_SHARP_) : save_BANG_.call(null,id,p1__6819_SHARP_));
}));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$).firstChild.firstChild);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
return cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$).firstChild.firstChild);
}),cljs.core.cst$kw$render,(function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$datepicker_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$input_DASH_group$date,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$read_DASH_only,true,cljs.core.cst$kw$on_DASH_blur,(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_(expanded_QMARK_,false);
}
}),cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}
}),cljs.core.cst$kw$value,(function (){var temp__5733__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(temp__5733__auto__)){
var date = temp__5733__auto__;
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(date) : fmt.call(null,date));
} else {
return "";
}
})()], null),attrs], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$input_DASH_group_DASH_addon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);

return cljs.core.deref(dom_node).focus();
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$glyphicon$glyphicon_DASH_calendar], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,(function (){
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
}),save_value,inline,lang], null)], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
})], null));
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$checkbox,(function (p__6829,p__6830){
var vec__6831 = p__6829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6831,(0),null);
var map__6834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6831,(1),null);
var map__6834__$1 = (((((!((map__6834 == null))))?(((((map__6834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6834):map__6834);
var attrs = map__6834__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,cljs.core.cst$kw$id);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,cljs.core.cst$kw$field);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,cljs.core.cst$kw$default_DASH_checked);
var component = vec__6831;
var map__6835 = p__6830;
var map__6835__$1 = (((((!((map__6835 == null))))?(((((map__6835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6835):map__6835);
var opts = map__6835__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4126__auto__ = checked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,true) : save_BANG_.call(null,id,true));
} else {
}

return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,field], null)], 0)));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)));
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$label,(function (p__6838,p__6839){
var vec__6840 = p__6838;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6840,(0),null);
var map__6843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6840,(1),null);
var map__6843__$1 = (((((!((map__6843 == null))))?(((((map__6843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6843):map__6843);
var attrs = map__6843__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6843__$1,cljs.core.cst$kw$id);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6843__$1,cljs.core.cst$kw$preamble);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6843__$1,cljs.core.cst$kw$postamble);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6843__$1,cljs.core.cst$kw$placeholder);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6843__$1,cljs.core.cst$kw$fmt);
var map__6844 = p__6839;
var map__6844__$1 = (((((!((map__6844 == null))))?(((((map__6844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6844):map__6844);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6844__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6844__$1,cljs.core.cst$kw$get);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(value) : fmt.call(null,value));
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$alert,(function (p__6847,p__6848){
var vec__6849 = p__6847;
var seq__6850 = cljs.core.seq(vec__6849);
var first__6851 = cljs.core.first(seq__6850);
var seq__6850__$1 = cljs.core.next(seq__6850);
var type = first__6851;
var first__6851__$1 = cljs.core.first(seq__6850__$1);
var seq__6850__$2 = cljs.core.next(seq__6850__$1);
var map__6852 = first__6851__$1;
var map__6852__$1 = (((((!((map__6852 == null))))?(((((map__6852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6852):map__6852);
var attrs = map__6852__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852__$1,cljs.core.cst$kw$id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852__$1,cljs.core.cst$kw$event);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852__$1,cljs.core.cst$kw$touch_DASH_event);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6852__$1,cljs.core.cst$kw$closeable_QMARK_,true);
var body = seq__6850__$2;
var map__6853 = p__6848;
var map__6853__$1 = (((((!((map__6853 == null))))?(((((map__6853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6853):map__6853);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853__$1,cljs.core.cst$kw$save_BANG_);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),(cljs.core.truth_(event)?(cljs.core.truth_((function (){var G__6856 = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__6856) : event.call(null,G__6856));
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body):null):(function (){var temp__5733__auto__ = cljs.core.not_empty((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)));
if(cljs.core.truth_(temp__5733__auto__)){
var message = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$type,"button",cljs.core.cst$kw$aria_DASH_hidden,true,(function (){var or__4126__auto__ = touch_event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
})]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$radio,(function (p__6857,p__6858){
var vec__6859 = p__6857;
var seq__6860 = cljs.core.seq(vec__6859);
var first__6861 = cljs.core.first(seq__6860);
var seq__6860__$1 = cljs.core.next(seq__6860);
var type = first__6861;
var first__6861__$1 = cljs.core.first(seq__6860__$1);
var seq__6860__$2 = cljs.core.next(seq__6860__$1);
var map__6862 = first__6861__$1;
var map__6862__$1 = (((((!((map__6862 == null))))?(((((map__6862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6862):map__6862);
var attrs = map__6862__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6862__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6862__$1,cljs.core.cst$kw$value);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6862__$1,cljs.core.cst$kw$checked);
var default_checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6862__$1,cljs.core.cst$kw$default_DASH_checked);
var body = seq__6860__$2;
var map__6863 = p__6858;
var map__6863__$1 = (((((!((map__6863 == null))))?(((((map__6863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6863):map__6863);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6863__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6863__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6863__$1,cljs.core.cst$kw$save_BANG_);
if(cljs.core.truth_((function (){var or__4126__auto__ = checked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_checked;
}
})())){
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
} else {
}

return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default_DASH_checked], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$radio,cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(name) : get.call(null,name))),cljs.core.cst$kw$on_DASH_change,(function (){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(name,value) : save_BANG_.call(null,name,value));
})], null)], 0))], null),body));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$typeahead,(function (p__6870,p__6871){
var vec__6872 = p__6870;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6872,(0),null);
var map__6875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6872,(1),null);
var map__6875__$1 = (((((!((map__6875 == null))))?(((((map__6875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6875):map__6875);
var attrs = map__6875__$1;
var result_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6875__$1,cljs.core.cst$kw$result_DASH_fn,cljs.core.identity);
var item_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$item_DASH_class);
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$input_DASH_placeholder);
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$selections);
var highlight_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$highlight_DASH_class);
var list_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$list_DASH_class);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$data_DASH_source);
var input_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$input_DASH_class);
var clear_on_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6875__$1,cljs.core.cst$kw$clear_DASH_on_DASH_focus_QMARK_,true);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$id);
var choice_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6875__$1,cljs.core.cst$kw$choice_DASH_fn,cljs.core.identity);
var get_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6875__$1,cljs.core.cst$kw$get_DASH_index);
var map__6876 = p__6871;
var map__6876__$1 = (((((!((map__6876 == null))))?(((((map__6876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6876):map__6876);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6876__$1,cljs.core.cst$kw$save_BANG_);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var selected_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var selections__$1 = (function (){var or__4126__auto__ = selections;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__4126__auto__ = get_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.constantly((-1));
}
})();
var choose_selected = (function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.not_empty(cljs.core.deref(selections__$1));
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.deref(selected_index) > (-1));
} else {
return and__4115__auto__;
}
})())){
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections__$1),cljs.core.deref(selected_index));
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,choice) : save_BANG_.call(null,id,choice));

(choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(choice) : choice_fn.call(null,choice));

return cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);
} else {
return null;
}
});
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$placeholder,cljs.core.cst$kw$disabled,cljs.core.cst$kw$on_DASH_focus,cljs.core.cst$kw$value,cljs.core.cst$kw$on_DASH_blur,cljs.core.cst$kw$type,cljs.core.cst$kw$class,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$on_DASH_key_DASH_down],[input_placeholder,cljs.core.cst$kw$disabled.cljs$core$IFn$_invoke$arity$1(attrs),(function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,null) : save_BANG_.call(null,id,null));
} else {
return null;
}
}),(function (){var v = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if((!(cljs.core.iterable_QMARK_(v)))){
return v;
} else {
return cljs.core.first(v);
}
})(),(function (){
if(cljs.core.truth_(cljs.core.deref(mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));
}
}),cljs.core.cst$kw$text,input_class,(function (p1__6866_SHARP_){
var temp__5735__auto__ = clojure.string.trim(reagent_forms.core.value_of(p1__6866_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var value = temp__5735__auto__;
cljs.core.reset_BANG_(selections__$1,(function (){var G__6879 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__6879) : data_source.call(null,G__6879));
})());

var G__6880_6888 = id;
var G__6881_6889 = reagent_forms.core.value_of(p1__6866_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6880_6888,G__6881_6889) : save_BANG_.call(null,G__6880_6888,G__6881_6889));

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_(selected_index,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(selections__$1))))?(0):(-1)));
} else {
return null;
}
}),(function (p1__6867_SHARP_){
var G__6882 = p1__6867_SHARP_.which;
switch (G__6882) {
case (38):
p1__6867_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (cljs.core.deref(selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to(p1__6867_SHARP_,cljs.core.deref(selected_index));
}

break;
case (40):
p1__6867_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref(typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_(selections__$1,(function (){var G__6883 = cljs.core.cst$kw$all;
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__6883) : data_source.call(null,G__6883));
})());

cljs.core.reset_BANG_(selected_index,(function (){var G__6884 = clojure.string.trim(reagent_forms.core.value_of(p1__6867_SHARP_));
var G__6885 = cljs.core.deref(selections__$1);
return (get_index__$1.cljs$core$IFn$_invoke$arity$2 ? get_index__$1.cljs$core$IFn$_invoke$arity$2(G__6884,G__6885) : get_index__$1.call(null,G__6884,G__6885));
})());

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to(p1__6867_SHARP_,cljs.core.deref(selected_index));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),(cljs.core.count(cljs.core.deref(selections__$1)) - (1)))){
return null;
} else {
var G__6886_6891 = id;
var G__6887_6892 = reagent_forms.core.value_of(p1__6867_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6886_6891,G__6887_6892) : save_BANG_.call(null,G__6886_6891,G__6887_6892));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to(p1__6867_SHARP_,cljs.core.deref(selected_index));
}
}

break;
case (9):
return choose_selected();

break;
case (13):
p1__6867_SHARP_.preventDefault();

return choose_selected();

break;
case (27):
cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_(selected_index,(-1));

break;
default:
return "default";

}
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(selections__$1));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.deref(typeahead_hidden_QMARK_);
}
})())?cljs.core.cst$kw$none:cljs.core.cst$kw$block)], null),cljs.core.cst$kw$class,list_class,cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,true);
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (){
return cljs.core.reset_BANG_(mouse_on_list_QMARK_,false);
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tab_DASH_index,index,cljs.core.cst$kw$key,index,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_index),index))?highlight_class:item_class),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (p1__6868_SHARP_){
return cljs.core.reset_BANG_(selected_index,parseInt(p1__6868_SHARP_.target.getAttribute("tabIndex")));
}),cljs.core.cst$kw$on_DASH_click,(function (p1__6869_SHARP_){
p1__6869_SHARP_.preventDefault();

cljs.core.reset_BANG_(typeahead_hidden_QMARK_,true);

(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(id,result) : save_BANG_.call(null,id,result));

return (choice_fn.cljs$core$IFn$_invoke$arity$1 ? choice_fn.cljs$core$IFn$_invoke$arity$1(result) : choice_fn.call(null,result));
})], null),(result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(result) : result_fn.call(null,result))], null);
}),cljs.core.deref(selections__$1)))], null)], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$file,(function (p__6894,p__6895){
var vec__6896 = p__6894;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,(0),null);
var map__6899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,(1),null);
var map__6899__$1 = (((((!((map__6899 == null))))?(((((map__6899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6899):map__6899);
var attrs = map__6899__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6899__$1,cljs.core.cst$kw$id);
var map__6900 = p__6895;
var map__6900__$1 = (((((!((map__6900 == null))))?(((((map__6900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6900):map__6900);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6900__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6900__$1,cljs.core.cst$kw$save_BANG_);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$on_DASH_change,(function (p1__6893_SHARP_){
var G__6903 = id;
var G__6904 = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(p1__6893_SHARP_.target.files));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6903,G__6904) : save_BANG_.call(null,G__6903,G__6904));
})], null),attrs], 0))], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$files,(function (p__6906,p__6907){
var vec__6908 = p__6906;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(0),null);
var map__6911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(1),null);
var map__6911__$1 = (((((!((map__6911 == null))))?(((((map__6911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6911):map__6911);
var attrs = map__6911__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6911__$1,cljs.core.cst$kw$id);
var map__6912 = p__6907;
var map__6912__$1 = (((((!((map__6912 == null))))?(((((map__6912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6912):map__6912);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6912__$1,cljs.core.cst$kw$doc);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6912__$1,cljs.core.cst$kw$save_BANG_);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$file,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$on_DASH_change,(function (p1__6905_SHARP_){
var G__6915 = id;
var G__6916 = p1__6905_SHARP_.target.files;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6915,G__6916) : save_BANG_.call(null,G__6915,G__6916));
})], null),attrs], 0))], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__6917,p__6918,selections,field,id){
var vec__6919 = p__6917;
var seq__6920 = cljs.core.seq(vec__6919);
var first__6921 = cljs.core.first(seq__6920);
var seq__6920__$1 = cljs.core.next(seq__6920);
var type = first__6921;
var first__6921__$1 = cljs.core.first(seq__6920__$1);
var seq__6920__$2 = cljs.core.next(seq__6920__$1);
var map__6922 = first__6921__$1;
var map__6922__$1 = (((((!((map__6922 == null))))?(((((map__6922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6922):map__6922);
var attrs = map__6922__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6922__$1,cljs.core.cst$kw$key);
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6922__$1,cljs.core.cst$kw$touch_DASH_event);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6922__$1,cljs.core.cst$kw$disabled);
var body = seq__6920__$2;
var map__6923 = p__6918;
var map__6923__$1 = (((((!((map__6923 == null))))?(((((map__6923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6923):map__6923);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,cljs.core.cst$kw$save_BANG_);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,cljs.core.cst$kw$multi_DASH_select);
var handle_click_BANG_ = (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__6930 = id;
var G__6931 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.deref(selections)));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6930,G__6931) : save_BANG_.call(null,G__6930,G__6931));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
cljs.core.reset_BANG_(selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not(value)]));

var G__6932 = id;
var G__6933 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6932,G__6933) : save_BANG_.call(null,G__6932,G__6933));
}
});
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_(disabled))?(disabled.cljs$core$IFn$_invoke$arity$0 ? disabled.cljs$core$IFn$_invoke$arity$0() : disabled.call(null)):disabled);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(type),(0),(5));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"butto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"input")));
})();
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__4115__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (!(button_or_input_QMARK_));
} else {
return and__4115__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$class,class$,(function (){var or__4126__auto__ = touch_event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$on_DASH_click;
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs(attrs),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$disabled,disabled_QMARK_], null)], 0)),((button_or_input_QMARK_)?null:cljs.core.cst$kw$disabled)),body], null);
});
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__6934){
var map__6935 = p__6934;
var map__6935__$1 = (((((!((map__6935 == null))))?(((((map__6935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6935):map__6935);
var ks = map__6935__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6935__$1,cljs.core.cst$kw$get);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6935__$1,cljs.core.cst$kw$multi_DASH_select);
var value = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__6937){
var vec__6938 = p__6937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6938,(0),null);
var map__6941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6938,(1),null);
var map__6941__$1 = (((((!((map__6941 == null))))?(((((map__6941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6941):map__6941);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6941__$1,cljs.core.cst$kw$key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
}),cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__6945,p__6946){
var vec__6947 = p__6945;
var seq__6948 = cljs.core.seq(vec__6947);
var first__6949 = cljs.core.first(seq__6948);
var seq__6948__$1 = cljs.core.next(seq__6948);
var type = first__6949;
var first__6949__$1 = cljs.core.first(seq__6948__$1);
var seq__6948__$2 = cljs.core.next(seq__6948__$1);
var map__6950 = first__6949__$1;
var map__6950__$1 = (((((!((map__6950 == null))))?(((((map__6950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6950):map__6950);
var attrs = map__6950__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6950__$1,cljs.core.cst$kw$field);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6950__$1,cljs.core.cst$kw$id);
var selection_items = seq__6948__$2;
var map__6951 = p__6946;
var map__6951__$1 = (((((!((map__6951 == null))))?(((((map__6951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6951):map__6951);
var opts = map__6951__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6951__$1,cljs.core.cst$kw$get);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6951__$1,cljs.core.cst$kw$doc);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
}),selection_items__$1);
return (function (){
if(cljs.core.truth_((get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id)))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,(function (p1__6943_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6954){
var vec__6955 = p__6954;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6955,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),p1__6943_SHARP_));
}));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs(attrs)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$selector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6944_SHARP_){
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__6944_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var visible_QMARK_ = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible_QMARK_);
} else {
return true;
}
}),selectors)));
});
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$single_DASH_select,(function (p__6958,p__6959){
var vec__6960 = p__6958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6960,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6960,(1),null);
var field = vec__6960;
var map__6963 = p__6959;
var map__6963__$1 = (((((!((map__6963 == null))))?(((((map__6963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6963):map__6963);
var opts = map__6963__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6963__$1,cljs.core.cst$kw$doc);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$multi_DASH_select,(function (p__6965,p__6966){
var vec__6967 = p__6965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6967,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6967,(1),null);
var field = vec__6967;
var map__6970 = p__6966;
var map__6970__$1 = (((((!((map__6970 == null))))?(((((map__6970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6970):map__6970);
var opts = map__6970__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6970__$1,cljs.core.cst$kw$doc);
return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$multi_DASH_select,true)], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reagent_forms$core$map_options_$_iter__6972(s__6973){
return (new cljs.core.LazySeq(null,(function (){
var s__6973__$1 = s__6973;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6973__$1);
if(temp__5735__auto__){
var s__6973__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6973__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__6973__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__6975 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__6974 = (0);
while(true){
if((i__6974 < size__4528__auto__)){
var vec__6976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__6974);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6976,(0),null);
var map__6979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6976,(1),null);
var map__6979__$1 = (((((!((map__6979 == null))))?(((((map__6979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6979):map__6979);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6979__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6976,(2),null);
cljs.core.chunk_append(b__6975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null));

var G__6986 = (i__6974 + (1));
i__6974 = G__6986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6975),reagent_forms$core$map_options_$_iter__6972(cljs.core.chunk_rest(s__6973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6975),null);
}
} else {
var vec__6981 = cljs.core.first(s__6973__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6981,(0),null);
var map__6984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6981,(1),null);
var map__6984__$1 = (((((!((map__6984 == null))))?(((((map__6984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6984):map__6984);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6984__$1,cljs.core.cst$kw$key);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6981,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),key], null),reagent_forms$core$map_options_$_iter__6972(cljs.core.rest(s__6973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6987_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__6987_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__6990,p__6991){
var vec__6992 = p__6990;
var seq__6993 = cljs.core.seq(vec__6992);
var first__6994 = cljs.core.first(seq__6993);
var seq__6993__$1 = cljs.core.next(seq__6993);
var type = first__6994;
var first__6994__$1 = cljs.core.first(seq__6993__$1);
var seq__6993__$2 = cljs.core.next(seq__6993__$1);
var map__6995 = first__6994__$1;
var map__6995__$1 = (((((!((map__6995 == null))))?(((((map__6995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6995):map__6995);
var attrs = map__6995__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6995__$1,cljs.core.cst$kw$id);
var options = seq__6993__$2;
var map__6996 = p__6991;
var map__6996__$1 = (((((!((map__6996 == null))))?(((((map__6996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6996):map__6996);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6996__$1,cljs.core.cst$kw$doc);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6996__$1,cljs.core.cst$kw$get);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6996__$1,cljs.core.cst$kw$save_BANG_);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(id) : get.call(null,id));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$key], null));
}
})());
var G__6999_7003 = id;
var G__7000_7004 = cljs.core.deref(selection);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__6999_7003,G__7000_7004) : save_BANG_.call(null,G__6999_7003,G__7000_7004));

return (function (){
var update_disabled_QMARK___6704__auto__ = cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$multi_DASH_select,cljs.core.cst$kw$single_DASH_select], null)));
var body__6705__auto__ = clojure.walk.postwalk((function (c__6706__auto__){
if(cljs.core.map_QMARK_(c__6706__auto__)){
return reagent_forms.core.clean_attrs(reagent_forms.core.set_disabled(reagent_forms.core.update_attrs(reagent_forms.core.set_validation_class(c__6706__auto__,doc),doc),update_disabled_QMARK___6704__auto__));
} else {
return c__6706__auto__;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default_DASH_value,reagent_forms.core.default_selection(options__$1,cljs.core.deref(selection)),cljs.core.cst$kw$on_DASH_change,(function (p1__6988_SHARP_){
var G__7001 = id;
var G__7002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__6988_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__7001,G__7002) : save_BANG_.call(null,G__7001,G__7002));
})], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6989_SHARP_){
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__6989_SHARP_));
if(cljs.core.truth_(temp__5733__auto__)){
var visible = temp__5733__auto__;
return reagent_forms.core.call_attr(doc,visible);
} else {
return true;
}
}),options__$1))], null));
var temp__5733__auto__ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5733__auto__)){
var visible__6707__auto__ = temp__5733__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr(doc,visible__6707__auto__))){
return body__6705__auto__;
} else {
return null;
}
} else {
return body__6705__auto__;
}
});
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.cst$kw$field)));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts){
return clojure.walk.postwalk((function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(node,opts__$1) : reagent_forms.core.init_field.call(null,node,opts__$1));
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind_fields !== 'undefined')){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 *         the supplied functions (when `doc` is a map) on events triggered by fields.
 *         form - the form template with the fields
 *         doc - the document that the fields will be bound to
 *         events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7005 = cljs.core.get_global_hierarchy;
return (fexpr__7005.cljs$core$IFn$_invoke$arity$0 ? fexpr__7005.cljs$core$IFn$_invoke$arity$0() : fexpr__7005.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind-fields"),(function() { 
var G__7006__delegate = function (_,doc,___$1){
return cljs.core.type(doc);
};
var G__7006 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7007__i = 0, G__7007__a = new Array(arguments.length -  2);
while (G__7007__i < G__7007__a.length) {G__7007__a[G__7007__i] = arguments[G__7007__i + 2]; ++G__7007__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7007__a,0,null);
} 
return G__7006__delegate.call(this,_,doc,___$1);};
G__7006.cljs$lang$maxFixedArity = 2;
G__7006.cljs$lang$applyTo = (function (arglist__7008){
var _ = cljs.core.first(arglist__7008);
arglist__7008 = cljs.core.next(arglist__7008);
var doc = cljs.core.first(arglist__7008);
var ___$1 = cljs.core.rest(arglist__7008);
return G__7006__delegate(_,doc,___$1);
});
G__7006.cljs$core$IFn$_invoke$arity$variadic = G__7006__delegate;
return G__7006;
})()
,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form(form,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$get,(function (get){
return (function (id){
var G__7009 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__7009) : get.call(null,G__7009));
});
})),cljs.core.cst$kw$save_BANG_,(function (save_BANG_){
return (function (id,value){
var G__7010 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__7011 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__7010,G__7011) : save_BANG_.call(null,G__7010,G__7011));
});
})),cljs.core.cst$kw$update_BANG_,(function (update_BANG_){
return (function (id,save_fn,value){
var G__7012 = (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(id) : reagent_forms.core.id__GT_path.call(null,id));
var G__7013 = save_fn;
var G__7014 = value;
return (update_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_BANG_.cljs$core$IFn$_invoke$arity$3(G__7012,G__7013,G__7014) : update_BANG_.call(null,G__7012,G__7013,G__7014));
});
})));
return (function (){
return form__$1;
});
}));
reagent_forms.core.bind_fields.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__7016__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$get,(function (p1__7015_SHARP_){
return cljs.core.deref((reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.cursor_for_id.cljs$core$IFn$_invoke$arity$2(doc,p1__7015_SHARP_) : reagent_forms.core.cursor_for_id.call(null,doc,p1__7015_SHARP_)));
}),cljs.core.cst$kw$save_BANG_,reagent_forms.core.mk_save_fn(doc,events),cljs.core.cst$kw$update_BANG_,reagent_forms.core.mk_update_fn(doc,events)], null);
var form__$1 = reagent_forms.core.make_form(form,opts);
return (function (){
return form__$1;
});
};
var G__7016 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__7017__i = 0, G__7017__a = new Array(arguments.length -  2);
while (G__7017__i < G__7017__a.length) {G__7017__a[G__7017__i] = arguments[G__7017__i + 2]; ++G__7017__i;}
  events = new cljs.core.IndexedSeq(G__7017__a,0,null);
} 
return G__7016__delegate.call(this,form,doc,events);};
G__7016.cljs$lang$maxFixedArity = 2;
G__7016.cljs$lang$applyTo = (function (arglist__7018){
var form = cljs.core.first(arglist__7018);
arglist__7018 = cljs.core.next(arglist__7018);
var doc = cljs.core.first(arglist__7018);
var events = cljs.core.rest(arglist__7018);
return G__7016__delegate(form,doc,events);
});
G__7016.cljs$core$IFn$_invoke$arity$variadic = G__7016__delegate;
return G__7016;
})()
);
