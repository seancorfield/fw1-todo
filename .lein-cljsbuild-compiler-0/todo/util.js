goog.provide('todo.util');
goog.require('cljs.core');
goog.require('goog.object');
todo.util.p = (function p(x){
console.log(x);
return x;
});
todo.util.pp = (function pp(x){
console.log((cljs.core.truth_(goog.isArray(x))?x:(("\uFDD0'else")?cljs.core.pr_str.call(null,x):null)));
return x;
});
/**
* Transient associate allowing multiple k/v pairs.
* @param {...*} var_args
*/
todo.util.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,k,v){
return cljs.core._assoc_BANG_.call(null,tcoll,k,v);
});
var assoc_BANG___4 = (function() { 
var G__2885__delegate = function (tcoll,k,v,kvs){
while(true){
var ret = assoc_BANG_.call(null,tcoll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__2886 = ret;
var G__2887 = cljs.core.first.call(null,kvs);
var G__2888 = cljs.core.second.call(null,kvs);
var G__2889 = cljs.core.nnext.call(null,kvs);
tcoll = G__2886;
k = G__2887;
v = G__2888;
kvs = G__2889;
continue;
}
} else
{return ret;
}
break;
}
};
var G__2885 = function (tcoll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2885__delegate.call(this, tcoll, k, v, kvs);
};
G__2885.cljs$lang$maxFixedArity = 3;
G__2885.cljs$lang$applyTo = (function (arglist__2890){
var tcoll = cljs.core.first(arglist__2890);
var k = cljs.core.first(cljs.core.next(arglist__2890));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2890)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2890)));
return G__2885__delegate(tcoll, k, v, kvs);
});
G__2885.cljs$lang$arity$variadic = G__2885__delegate;
return G__2885;
})()
;
assoc_BANG_ = function(tcoll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,k,v);
default:
return assoc_BANG___4.cljs$lang$arity$variadic(tcoll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$lang$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$lang$arity$variadic = assoc_BANG___4.cljs$lang$arity$variadic;
return assoc_BANG_;
})()
;
/**
* @param {...*} var_args
*/
todo.util.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (m,p__2891,f,args){
var vec__2893 = p__2891;
var k = cljs.core.nth.call(null,vec__2893,0,null);
var ks = cljs.core.nthnext.call(null,vec__2893,1);
if(cljs.core.truth_(ks))
{return todo.util.assoc_BANG_.call(null,m,k,cljs.core.apply.call(null,update_in_BANG_,cljs.core._lookup.call(null,m,k,null),ks,f,args));
} else
{return todo.util.assoc_BANG_.call(null,m,k,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k,null),args));
}
};
var update_in_BANG_ = function (m,p__2891,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_BANG___delegate.call(this, m, p__2891, f, args);
};
update_in_BANG_.cljs$lang$maxFixedArity = 3;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__2894){
var m = cljs.core.first(arglist__2894);
var p__2891 = cljs.core.first(cljs.core.next(arglist__2894));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2894)));
return update_in_BANG___delegate(m, p__2891, f, args);
});
update_in_BANG_.cljs$lang$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;
todo.util.seqtype = (function seqtype(x){
if(cljs.core.truth_(goog.isArray(x)))
{return "\uFDD0'js-arr";
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return "\uFDD0'seq";
} else
{if(cljs.core.truth_(goog.isObject(x)))
{return "\uFDD0'js-obj";
} else
{return null;
}
}
}
});
todo.util.filter = (function (){var method_table__2633__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2634__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2635__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2636__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2637__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("filter",(function (pred,coll){
return todo.util.seqtype.call(null,coll);
}),"\uFDD0'default",hierarchy__2637__auto__,method_table__2633__auto__,prefer_table__2634__auto__,method_cache__2635__auto__,cached_hierarchy__2636__auto__));
})();
cljs.core._add_method.call(null,todo.util.filter,"\uFDD0'js-arr",(function (pred,a){
return a.filter((function (p1__2895_SHARP_){
return pred.call(null,p1__2895_SHARP_);
}));
}));
cljs.core._add_method.call(null,todo.util.filter,"\uFDD0'seq",(function (pred,coll){
return cljs.core.filter.call(null,pred,coll);
}));
todo.util.remove = (function (){var method_table__2633__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2634__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2635__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2636__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2637__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("remove",(function (pred,coll){
return todo.util.seqtype.call(null,coll);
}),"\uFDD0'default",hierarchy__2637__auto__,method_table__2633__auto__,prefer_table__2634__auto__,method_cache__2635__auto__,cached_hierarchy__2636__auto__));
})();
cljs.core._add_method.call(null,todo.util.remove,"\uFDD0'js-arr",(function (pred,a){
return a.filter((function (p1__2896_SHARP_){
return cljs.core.not.call(null,pred.call(null,p1__2896_SHARP_));
}));
}));
cljs.core._add_method.call(null,todo.util.remove,"\uFDD0'seq",(function (pred,coll){
return cljs.core.remove.call(null,pred,coll);
}));
todo.util.map = (function (){var method_table__2633__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2634__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2635__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2636__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2637__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("map",(function (pred,coll){
return todo.util.seqtype.call(null,coll);
}),"\uFDD0'default",hierarchy__2637__auto__,method_table__2633__auto__,prefer_table__2634__auto__,method_cache__2635__auto__,cached_hierarchy__2636__auto__));
})();
cljs.core._add_method.call(null,todo.util.map,"\uFDD0'js-arr",(function (f,a){
return a.map(f);
}));
cljs.core._add_method.call(null,todo.util.map,"\uFDD0'seq",(function (f,coll){
return cljs.core.map.call(null,f,coll);
}));
todo.util.strkey = (function strkey(x){
if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{return x;
}
});
(cljs.core.ITransientMap["object"] = true);
(cljs.core._dissoc_BANG_["object"] = (function (o,key){
goog.object.remove(o,key);
return o;
}));
(cljs.core.ITransientAssociative["object"] = true);
(cljs.core._assoc_BANG_["object"] = (function (o,k,v){
(o[todo.util.strkey.call(null,k)] = v);
return o;
}));
(cljs.core.ITransientCollection["object"] = true);
(cljs.core._conj_BANG_["object"] = (function (o,p__2897){
var vec__2898 = p__2897;
var k = cljs.core.nth.call(null,vec__2898,0,null);
var v = cljs.core.nth.call(null,vec__2898,1,null);
return todo.util.assoc_BANG_.call(null,o,k,v);
}));
(cljs.core._persistent_BANG_["object"] = (function (_){
throw (new Error("JavaScript object isn't a real transient, don't try to make it persistent."));
}));
(cljs.core.IEmptyableCollection["object"] = true);
(cljs.core._empty["object"] = (function (_){
return {};
}));
(cljs.core.ILookup["object"] = true);
(cljs.core._lookup["object"] = (function() {
var G__2899 = null;
var G__2899__2 = (function (o,k){
return (o[todo.util.strkey.call(null,k)]);
});
var G__2899__3 = (function (o,k,not_found){
var s = todo.util.strkey.call(null,k);
if(cljs.core.truth_(goog.object.containsKey(o,s)))
{return (o[s]);
} else
{return not_found;
}
});
G__2899 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__2899__2.call(this,o,k);
case 3:
return G__2899__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__2899;
})()
);
(cljs.core.ITransientAssociative["array"] = true);
(cljs.core._assoc_BANG_["array"] = (function (a,k,v){
(a[todo.util.strkey.call(null,k)] = v);
return a;
}));
(cljs.core.ITransientCollection["array"] = true);
(cljs.core._conj_BANG_["array"] = (function (a,x){
a.push(x);
return a;
}));
(cljs.core._persistent_BANG_["array"] = (function (_){
throw (new Error("JavaScript array isn't a real transient, don't try to make it persistent."));
}));
(cljs.core.IEmptyableCollection["array"] = true);
(cljs.core._empty["array"] = (function (a){
return [];
}));
