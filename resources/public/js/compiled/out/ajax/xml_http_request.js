// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__5707 = e.target.readyState;
var fexpr__5706 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__5706.cljs$core$IFn$_invoke$arity$1 ? fexpr__5706.cljs$core$IFn$_invoke$arity$1(G__5707) : fexpr__5706.call(null,G__5707));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5709,handler){
var map__5710 = p__5709;
var map__5710__$1 = (((((!((map__5710 == null))))?(((((map__5710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5710):map__5710);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5710__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5710__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5710__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5710__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5710__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5710__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5710__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__5708_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__5708_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___5728 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___5728)){
var response_type_5729 = temp__5735__auto___5728;
(this$__$1.responseType = cljs.core.name(response_type_5729));
} else {
}

var seq__5712_5730 = cljs.core.seq(headers);
var chunk__5713_5731 = null;
var count__5714_5732 = (0);
var i__5715_5733 = (0);
while(true){
if((i__5715_5733 < count__5714_5732)){
var vec__5722_5734 = chunk__5713_5731.cljs$core$IIndexed$_nth$arity$2(null,i__5715_5733);
var k_5735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722_5734,(0),null);
var v_5736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722_5734,(1),null);
this$__$1.setRequestHeader(k_5735,v_5736);


var G__5737 = seq__5712_5730;
var G__5738 = chunk__5713_5731;
var G__5739 = count__5714_5732;
var G__5740 = (i__5715_5733 + (1));
seq__5712_5730 = G__5737;
chunk__5713_5731 = G__5738;
count__5714_5732 = G__5739;
i__5715_5733 = G__5740;
continue;
} else {
var temp__5735__auto___5741 = cljs.core.seq(seq__5712_5730);
if(temp__5735__auto___5741){
var seq__5712_5742__$1 = temp__5735__auto___5741;
if(cljs.core.chunked_seq_QMARK_(seq__5712_5742__$1)){
var c__4556__auto___5743 = cljs.core.chunk_first(seq__5712_5742__$1);
var G__5744 = cljs.core.chunk_rest(seq__5712_5742__$1);
var G__5745 = c__4556__auto___5743;
var G__5746 = cljs.core.count(c__4556__auto___5743);
var G__5747 = (0);
seq__5712_5730 = G__5744;
chunk__5713_5731 = G__5745;
count__5714_5732 = G__5746;
i__5715_5733 = G__5747;
continue;
} else {
var vec__5725_5748 = cljs.core.first(seq__5712_5742__$1);
var k_5749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725_5748,(0),null);
var v_5750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725_5748,(1),null);
this$__$1.setRequestHeader(k_5749,v_5750);


var G__5751 = cljs.core.next(seq__5712_5742__$1);
var G__5752 = null;
var G__5753 = (0);
var G__5754 = (0);
seq__5712_5730 = G__5751;
chunk__5713_5731 = G__5752;
count__5714_5732 = G__5753;
i__5715_5733 = G__5754;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
