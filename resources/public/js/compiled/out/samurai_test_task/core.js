// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('samurai_test_task.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('ajax.core');
goog.require('reagent_forms.core');
samurai_test_task.core.clj__GT_json = (function samurai_test_task$core$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
samurai_test_task.core.patients_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$first_name,"Ramon",cljs.core.cst$kw$last_name,"Akh",cljs.core.cst$kw$father_name,"Rinatovich",cljs.core.cst$kw$born_date,"17/06/1983",cljs.core.cst$kw$sex,"M",cljs.core.cst$kw$address,"Ozero Lenevoe 66",cljs.core.cst$kw$policy_number,(1)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$first_name,"Ramon",cljs.core.cst$kw$last_name,"Akh",cljs.core.cst$kw$father_name,"Rinatovich",cljs.core.cst$kw$born_date,"17/06/1983",cljs.core.cst$kw$sex,"M",cljs.core.cst$kw$address,"Ozero Lenevoe 66",cljs.core.cst$kw$policy_number,(2)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$first_name,"Ramon",cljs.core.cst$kw$last_name,"Akh",cljs.core.cst$kw$father_name,"Rinatovich",cljs.core.cst$kw$born_date,"17/06/1983",cljs.core.cst$kw$sex,"M",cljs.core.cst$kw$address,"Ozero Lenevoe 66",cljs.core.cst$kw$policy_number,(3)], null)], null));
samurai_test_task.core.pat_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
samurai_test_task.core.get_patient_list = (function samurai_test_task$core$get_patient_list(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/patients",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handler,(function (patients){
return cljs.core.reset_BANG_(samurai_test_task.core.pat_list,patients);
}),cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true], null)], 0));
});
samurai_test_task.core.get_patient_list();
samurai_test_task.core.lister = (function samurai_test_task$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,"Patients",(function (){var iter__4529__auto__ = (function samurai_test_task$core$lister_$_iter__7021(s__7022){
return (new cljs.core.LazySeq(null,(function (){
var s__7022__$1 = s__7022;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7022__$1);
if(temp__5735__auto__){
var s__7022__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7022__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7022__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7024 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7023 = (0);
while(true){
if((i__7023 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__7023);
cljs.core.chunk_append(b__7024,cljs.core.with_meta(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__7023,item,c__4527__auto__,size__4528__auto__,b__7024,s__7022__$2,temp__5735__auto__){
return (function (){
return ajax.core.DELETE(["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$policy_number.cljs$core$IFn$_invoke$arity$1(item))].join(''));
});})(i__7023,item,c__4527__auto__,size__4528__auto__,b__7024,s__7022__$2,temp__5735__auto__))
], null),"delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__7023,item,c__4527__auto__,size__4528__auto__,b__7024,s__7022__$2,temp__5735__auto__){
return (function (){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.update_form,item], null),document.getElementById("app"));
});})(i__7023,item,c__4527__auto__,size__4528__auto__,b__7024,s__7022__$2,temp__5735__auto__))
], null),"update"], null),"  Name - ",cljs.core.cst$kw$first_name.cljs$core$IFn$_invoke$arity$1(item),", Surname - ",cljs.core.cst$kw$last_name.cljs$core$IFn$_invoke$arity$1(item),", Father name - ",cljs.core.cst$kw$father_name.cljs$core$IFn$_invoke$arity$1(item),", Born date - ",cljs.core.cst$kw$born_date.cljs$core$IFn$_invoke$arity$1(item),", Sex - ",cljs.core.cst$kw$sex.cljs$core$IFn$_invoke$arity$1(item),", Address - ",cljs.core.cst$kw$address.cljs$core$IFn$_invoke$arity$1(item),", Policy number ",cljs.core.cst$kw$policy_number.cljs$core$IFn$_invoke$arity$1(item),"  "], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$policy_number,item], null)));

var G__7025 = (i__7023 + (1));
i__7023 = G__7025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7024),samurai_test_task$core$lister_$_iter__7021(cljs.core.chunk_rest(s__7022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7024),null);
}
} else {
var item = cljs.core.first(s__7022__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item,s__7022__$2,temp__5735__auto__){
return (function (){
return ajax.core.DELETE(["/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$policy_number.cljs$core$IFn$_invoke$arity$1(item))].join(''));
});})(item,s__7022__$2,temp__5735__auto__))
], null),"delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item,s__7022__$2,temp__5735__auto__){
return (function (){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.update_form,item], null),document.getElementById("app"));
});})(item,s__7022__$2,temp__5735__auto__))
], null),"update"], null),"  Name - ",cljs.core.cst$kw$first_name.cljs$core$IFn$_invoke$arity$1(item),", Surname - ",cljs.core.cst$kw$last_name.cljs$core$IFn$_invoke$arity$1(item),", Father name - ",cljs.core.cst$kw$father_name.cljs$core$IFn$_invoke$arity$1(item),", Born date - ",cljs.core.cst$kw$born_date.cljs$core$IFn$_invoke$arity$1(item),", Sex - ",cljs.core.cst$kw$sex.cljs$core$IFn$_invoke$arity$1(item),", Address - ",cljs.core.cst$kw$address.cljs$core$IFn$_invoke$arity$1(item),", Policy number ",cljs.core.cst$kw$policy_number.cljs$core$IFn$_invoke$arity$1(item),"  "], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$policy_number,item], null)),samurai_test_task$core$lister_$_iter__7021(cljs.core.rest(s__7022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null)], null);
});
samurai_test_task.core.row = (function samurai_test_task$core$row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_5,input], null)], null);
});
samurai_test_task.core.form_template = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,samurai_test_task.core.row("first name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$first_name], null)], null)),samurai_test_task.core.row("last name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$last_name], null)], null)),samurai_test_task.core.row("father name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$father_name], null)], null)),samurai_test_task.core.row("sex",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$list,cljs.core.cst$kw$id,cljs.core.cst$kw$sex], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"m"], null),"m"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"f"], null),"f"], null)], null)),samurai_test_task.core.row("address",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$address], null)], null)),samurai_test_task.core.row("policy number",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$numeric,cljs.core.cst$kw$id,cljs.core.cst$kw$policy_number], null)], null)),samurai_test_task.core.row("date of birth",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$field,cljs.core.cst$kw$datepicker,cljs.core.cst$kw$id,cljs.core.cst$kw$born_date,cljs.core.cst$kw$date_DASH_format,(function (p__7026){
var map__7027 = p__7026;
var map__7027__$1 = (((((!((map__7027 == null))))?(((((map__7027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7027):map__7027);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7027__$1,cljs.core.cst$kw$year);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7027__$1,cljs.core.cst$kw$month);
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7027__$1,cljs.core.cst$kw$day);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
})], null)], null))], null);
samurai_test_task.core.create_form = (function samurai_test_task$core$create_form(){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$first_name,"John",cljs.core.cst$kw$last_name,"Doe",cljs.core.cst$kw$sex,"m",cljs.core.cst$kw$address,"bomz",cljs.core.cst$kw$policy_number,cljs.core.rand_int((1000)),cljs.core.cst$kw$born_date,"2015/04/01",cljs.core.cst$kw$father_name,"Rinatovich"], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Patient create"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,samurai_test_task.core.form_template,doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$first_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(doc)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(doc,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.cst$kw$first_name], null),"first name is empty");
} else {
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/patient/create",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,samurai_test_task.core.clj__GT_json(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(doc)))], null)], 0));
}

samurai_test_task.core.get_patient_list();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.lister_user], null),document.getElementById("app"));
})], null),"save"], null)], null);
});
});
samurai_test_task.core.update_form = (function samurai_test_task$core$update_form(patient){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(patient);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page_DASH_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Patient create"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,samurai_test_task.core.form_template,doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/patient/update",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,samurai_test_task.core.clj__GT_json(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(doc)))], null)], 0));

samurai_test_task.core.get_patient_list();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.lister_user], null),document.getElementById("app"));
})], null),"save"], null)], null);
});
});
samurai_test_task.core.lister_user = (function samurai_test_task$core$lister_user(){
samurai_test_task.core.get_patient_list();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.create_form], null),document.getElementById("app"));
})], null),"Create patient"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.lister,cljs.core.deref(samurai_test_task.core.pat_list)], null)], null);
});
samurai_test_task.core.main = (function samurai_test_task$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [samurai_test_task.core.lister_user], null),document.getElementById("app"));
});
goog.exportSymbol('samurai_test_task.core.main', samurai_test_task.core.main);
