// Compiled by ClojureScript 0.0-2280
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,(0));
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_5271 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5271;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5275__delegate = function (x,p__5272){var map__5274 = p__5272;var map__5274__$1 = ((cljs.core.seq_QMARK_.call(null,map__5274))?cljs.core.apply.call(null,cljs.core.hash_map,map__5274):map__5274);var validator = cljs.core.get.call(null,map__5274__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));var meta = cljs.core.get.call(null,map__5274__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5275 = function (x,var_args){
var p__5272 = null;if (arguments.length > 1) {
  p__5272 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5275__delegate.call(this,x,p__5272);};
G__5275.cljs$lang$maxFixedArity = 1;
G__5275.cljs$lang$applyTo = (function (arglist__5276){
var x = cljs.core.first(arglist__5276);
var p__5272 = cljs.core.rest(arglist__5276);
return G__5275__delegate(x,p__5272);
});
G__5275.cljs$core$IFn$_invoke$arity$variadic = G__5275__delegate;
return G__5275;
})()
;
atom = function(x,var_args){
var p__5272 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj5278 = {};return obj5278;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5280 = {};return obj5280;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (reagent.ratom.run[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (reagent.ratom.run["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj5282 = {};return obj5282;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3532__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3532__auto__ = k;if(and__3532__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3532__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4171__auto__ = (((k == null))?null:k);return (function (){var or__3544__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3532__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3532__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3532__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3544__auto__ = self__.auto_run;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__5283_5295 = cljs.core.seq.call(null,derefed);var chunk__5284_5296 = null;var count__5285_5297 = (0);var i__5286_5298 = (0);while(true){
if((i__5286_5298 < count__5285_5297))
{var w_5299 = cljs.core._nth.call(null,chunk__5284_5296,i__5286_5298);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5299))
{} else
{cljs.core.add_watch.call(null,w_5299,this$__$1,reagent.ratom._handle_change);
}
{
var G__5300 = seq__5283_5295;
var G__5301 = chunk__5284_5296;
var G__5302 = count__5285_5297;
var G__5303 = (i__5286_5298 + (1));
seq__5283_5295 = G__5300;
chunk__5284_5296 = G__5301;
count__5285_5297 = G__5302;
i__5286_5298 = G__5303;
continue;
}
} else
{var temp__4126__auto___5304 = cljs.core.seq.call(null,seq__5283_5295);if(temp__4126__auto___5304)
{var seq__5283_5305__$1 = temp__4126__auto___5304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5283_5305__$1))
{var c__4300__auto___5306 = cljs.core.chunk_first.call(null,seq__5283_5305__$1);{
var G__5307 = cljs.core.chunk_rest.call(null,seq__5283_5305__$1);
var G__5308 = c__4300__auto___5306;
var G__5309 = cljs.core.count.call(null,c__4300__auto___5306);
var G__5310 = (0);
seq__5283_5295 = G__5307;
chunk__5284_5296 = G__5308;
count__5285_5297 = G__5309;
i__5286_5298 = G__5310;
continue;
}
} else
{var w_5311 = cljs.core.first.call(null,seq__5283_5305__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5311))
{} else
{cljs.core.add_watch.call(null,w_5311,this$__$1,reagent.ratom._handle_change);
}
{
var G__5312 = cljs.core.next.call(null,seq__5283_5305__$1);
var G__5313 = null;
var G__5314 = (0);
var G__5315 = (0);
seq__5283_5295 = G__5312;
chunk__5284_5296 = G__5313;
count__5285_5297 = G__5314;
i__5286_5298 = G__5315;
continue;
}
}
} else
{}
}
break;
}
var seq__5287_5316 = cljs.core.seq.call(null,self__.watching);var chunk__5288_5317 = null;var count__5289_5318 = (0);var i__5290_5319 = (0);while(true){
if((i__5290_5319 < count__5289_5318))
{var w_5320 = cljs.core._nth.call(null,chunk__5288_5317,i__5290_5319);if(cljs.core.contains_QMARK_.call(null,derefed,w_5320))
{} else
{cljs.core.remove_watch.call(null,w_5320,this$__$1);
}
{
var G__5321 = seq__5287_5316;
var G__5322 = chunk__5288_5317;
var G__5323 = count__5289_5318;
var G__5324 = (i__5290_5319 + (1));
seq__5287_5316 = G__5321;
chunk__5288_5317 = G__5322;
count__5289_5318 = G__5323;
i__5290_5319 = G__5324;
continue;
}
} else
{var temp__4126__auto___5325 = cljs.core.seq.call(null,seq__5287_5316);if(temp__4126__auto___5325)
{var seq__5287_5326__$1 = temp__4126__auto___5325;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5287_5326__$1))
{var c__4300__auto___5327 = cljs.core.chunk_first.call(null,seq__5287_5326__$1);{
var G__5328 = cljs.core.chunk_rest.call(null,seq__5287_5326__$1);
var G__5329 = c__4300__auto___5327;
var G__5330 = cljs.core.count.call(null,c__4300__auto___5327);
var G__5331 = (0);
seq__5287_5316 = G__5328;
chunk__5288_5317 = G__5329;
count__5289_5318 = G__5330;
i__5290_5319 = G__5331;
continue;
}
} else
{var w_5332 = cljs.core.first.call(null,seq__5287_5326__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_5332))
{} else
{cljs.core.remove_watch.call(null,w_5332,this$__$1);
}
{
var G__5333 = cljs.core.next.call(null,seq__5287_5326__$1);
var G__5334 = null;
var G__5335 = (0);
var G__5336 = (0);
seq__5287_5316 = G__5333;
chunk__5288_5317 = G__5334;
count__5289_5318 = G__5335;
i__5290_5319 = G__5336;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,this$__$1))+": "));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__5291_5337 = cljs.core.seq.call(null,self__.watching);var chunk__5292_5338 = null;var count__5293_5339 = (0);var i__5294_5340 = (0);while(true){
if((i__5294_5340 < count__5293_5339))
{var w_5341 = cljs.core._nth.call(null,chunk__5292_5338,i__5294_5340);cljs.core.remove_watch.call(null,w_5341,this$__$1);
{
var G__5342 = seq__5291_5337;
var G__5343 = chunk__5292_5338;
var G__5344 = count__5293_5339;
var G__5345 = (i__5294_5340 + (1));
seq__5291_5337 = G__5342;
chunk__5292_5338 = G__5343;
count__5293_5339 = G__5344;
i__5294_5340 = G__5345;
continue;
}
} else
{var temp__4126__auto___5346 = cljs.core.seq.call(null,seq__5291_5337);if(temp__4126__auto___5346)
{var seq__5291_5347__$1 = temp__4126__auto___5346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5291_5347__$1))
{var c__4300__auto___5348 = cljs.core.chunk_first.call(null,seq__5291_5347__$1);{
var G__5349 = cljs.core.chunk_rest.call(null,seq__5291_5347__$1);
var G__5350 = c__4300__auto___5348;
var G__5351 = cljs.core.count.call(null,c__4300__auto___5348);
var G__5352 = (0);
seq__5291_5337 = G__5349;
chunk__5292_5338 = G__5350;
count__5293_5339 = G__5351;
i__5294_5340 = G__5352;
continue;
}
} else
{var w_5353 = cljs.core.first.call(null,seq__5291_5347__$1);cljs.core.remove_watch.call(null,w_5353,this$__$1);
{
var G__5354 = cljs.core.next.call(null,seq__5291_5347__$1);
var G__5355 = null;
var G__5356 = (0);
var G__5357 = (0);
seq__5291_5337 = G__5354;
chunk__5292_5338 = G__5355;
count__5293_5339 = G__5356;
i__5294_5340 = G__5357;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3544__auto__ = self__.auto_run;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__5019__auto___5358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+177+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__5019__auto___5358))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3544__auto__ = self__.auto_run;if(cljs.core.truth_(or__3544__auto__))
{return or__3544__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null)))))));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5359){var map__5361 = p__5359;var map__5361__$1 = ((cljs.core.seq_QMARK_.call(null,map__5361))?cljs.core.apply.call(null,cljs.core.hash_map,map__5361):map__5361);var derefed = cljs.core.get.call(null,map__5361__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));var on_dispose = cljs.core.get.call(null,map__5361__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));var on_set = cljs.core.get.call(null,map__5361__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));var auto_run = cljs.core.get.call(null,map__5361__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__5359 = null;if (arguments.length > 1) {
  p__5359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__5359);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5362){
var f = cljs.core.first(arglist__5362);
var p__5359 = cljs.core.rest(arglist__5362);
return make_reaction__delegate(f,p__5359);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map