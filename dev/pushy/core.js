// Compiled by ClojureScript 0.0-2280
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.Html5History');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.events');
pushy.core.on_click = (function on_click(funk){return goog.events.listen(document,"click",funk);
});
/**
* Traverses up the DOM tree and returns the first node that contains a href attr
*/
pushy.core.recur_href = (function recur_href(target){if(cljs.core.truth_(target.href))
{return target;
} else
{if(cljs.core.truth_(target.parentNode))
{return recur_href.call(null,target.parentNode);
} else
{return null;
}
}
});
pushy.core.update_history_BANG_ = (function update_history_BANG_(h){var G__6609 = h;G__6609.setUseFragment(false);
G__6609.setPathPrefix("");
G__6609.setEnabled(true);
return G__6609;
});
pushy.core.set_retrieve_token_BANG_ = (function set_retrieve_token_BANG_(t){t.retrieveToken = (function (path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search));
});
return t;
});
pushy.core.set_create_url_BANG_ = (function set_create_url_BANG_(t){t.createUrl = (function (token,path_prefix,location){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token));
});
return t;
});
pushy.core.new_history = (function() {
var new_history = null;
var new_history__0 = (function (){return new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});
var new_history__1 = (function (transformer){return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});
new_history = function(transformer){
switch(arguments.length){
case 0:
return new_history__0.call(this);
case 1:
return new_history__1.call(this,transformer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_history.cljs$core$IFn$_invoke$arity$0 = new_history__0;
new_history.cljs$core$IFn$_invoke$arity$1 = new_history__1;
return new_history;
})()
;
pushy.core.IHistory = (function (){var obj6611 = {};return obj6611;
})();
pushy.core.set_token_BANG_ = (function() {
var set_token_BANG_ = null;
var set_token_BANG___2 = (function (this$,token){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$set_token_BANG_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.set_token_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
})().call(null,this$,token);
}
});
var set_token_BANG___3 = (function (this$,token,title){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$set_token_BANG_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.set_token_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
})().call(null,this$,token,title);
}
});
set_token_BANG_ = function(this$,token,title){
switch(arguments.length){
case 2:
return set_token_BANG___2.call(this,this$,token);
case 3:
return set_token_BANG___3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = set_token_BANG___2;
set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = set_token_BANG___3;
return set_token_BANG_;
})()
;
pushy.core.replace_token_BANG_ = (function() {
var replace_token_BANG_ = null;
var replace_token_BANG___2 = (function (this$,token){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$replace_token_BANG_$arity$2;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.replace_token_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
})().call(null,this$,token);
}
});
var replace_token_BANG___3 = (function (this$,token,title){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$replace_token_BANG_$arity$3;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.replace_token_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
})().call(null,this$,token,title);
}
});
replace_token_BANG_ = function(this$,token,title){
switch(arguments.length){
case 2:
return replace_token_BANG___2.call(this,this$,token);
case 3:
return replace_token_BANG___3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = replace_token_BANG___2;
replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = replace_token_BANG___3;
return replace_token_BANG_;
})()
;
pushy.core.get_token = (function get_token(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$get_token$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.get_token[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.get_token["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
})().call(null,this$);
}
});
pushy.core.start_BANG_ = (function start_BANG_(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$start_BANG_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.start_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
})().call(null,this$);
}
});
pushy.core.stop_BANG_ = (function stop_BANG_(this$){if((function (){var and__3532__auto__ = this$;if(and__3532__auto__)
{return this$.pushy$core$IHistory$stop_BANG_$arity$1;
} else
{return and__3532__auto__;
}
})())
{return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else
{var x__4171__auto__ = (((this$ == null))?null:this$);return (function (){var or__3544__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4171__auto__)]);if(or__3544__auto__)
{return or__3544__auto__;
} else
{var or__3544__auto____$1 = (pushy.core.stop_BANG_["_"]);if(or__3544__auto____$1)
{return or__3544__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
})().call(null,this$);
}
});
/**
* Takes in three functions:
* * dispatch-fn: the function that dispatches when a match is found
* * match-fn: the function used to check if a particular route exists
* * identity-fn: (optional) extract the route from value returned by match-fn
*/
pushy.core.pushy = (function() {
var pushy__$1 = null;
var pushy__$1__2 = (function (dispatch_fn,match_fn){return pushy__$1.call(null,dispatch_fn,match_fn,cljs.core.identity);
});
var pushy__$1__3 = (function (dispatch_fn,match_fn,identity_fn){var history = pushy.core.new_history.call(null);var event_keys = cljs.core.atom.call(null,null);if(typeof pushy.core.t6619 !== 'undefined')
{} else
{
/**
* @constructor
*/
pushy.core.t6619 = (function (event_keys,history,identity_fn,match_fn,dispatch_fn,pushy,meta6620){
this.event_keys = event_keys;
this.history = history;
this.identity_fn = identity_fn;
this.match_fn = match_fn;
this.dispatch_fn = dispatch_fn;
this.pushy = pushy;
this.meta6620 = meta6620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pushy.core.t6619.cljs$lang$type = true;
pushy.core.t6619.cljs$lang$ctorStr = "pushy.core/t6619";
pushy.core.t6619.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"pushy.core/t6619");
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$ = true;
pushy.core.t6619.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){var self__ = this;
var ___$1 = this;return self__.history.setToken(token);
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){var self__ = this;
var ___$1 = this;return self__.history.setToken(token,title);
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){var self__ = this;
var ___$1 = this;return self__.history.setToken(token);
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){var self__ = this;
var ___$1 = this;return self__.history.setToken(token,title);
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){var self__ = this;
var ___$1 = this;return self__.history.getToken();
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){var self__ = this;
var this$__$1 = this;pushy.core.stop_BANG_.call(null,this$__$1);
cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){var temp__4124__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));if(cljs.core.truth_(temp__4124__auto__))
{var match = temp__4124__auto__;return self__.dispatch_fn.call(null,match);
} else
{return null;
}
});})(this$__$1,history,event_keys))
));
var temp__4126__auto___6626 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));if(cljs.core.truth_(temp__4126__auto___6626))
{var match_6627 = temp__4126__auto___6626;self__.dispatch_fn.call(null,match_6627);
} else
{}
cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){var temp__4126__auto__ = pushy.core.recur_href.call(null,e.target);if(cljs.core.truth_(temp__4126__auto__))
{var el = temp__4126__auto__;var href = el.href;var path = goog.Uri.parse(href).getPath();if(cljs.core.truth_((function (){var and__3532__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,path));if(cljs.core.truth_(and__3532__auto__))
{return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else
{return and__3532__auto__;
}
})()))
{var temp__4124__auto___6628 = el.title;if(cljs.core.truth_(temp__4124__auto___6628))
{var title_6629 = temp__4124__auto___6628;pushy.core.set_token_BANG_.call(null,this$__$1,path,title_6629);
} else
{pushy.core.set_token_BANG_.call(null,this$__$1,path);
}
return e.preventDefault();
} else
{return null;
}
} else
{return null;
}
});})(this$__$1,history,event_keys))
));
return null;
});})(history,event_keys))
;
pushy.core.t6619.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__6622_6630 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));var chunk__6623_6631 = null;var count__6624_6632 = (0);var i__6625_6633 = (0);while(true){
if((i__6625_6633 < count__6624_6632))
{var key_6634 = cljs.core._nth.call(null,chunk__6623_6631,i__6625_6633);goog.events.unlistenByKey(key_6634);
{
var G__6635 = seq__6622_6630;
var G__6636 = chunk__6623_6631;
var G__6637 = count__6624_6632;
var G__6638 = (i__6625_6633 + (1));
seq__6622_6630 = G__6635;
chunk__6623_6631 = G__6636;
count__6624_6632 = G__6637;
i__6625_6633 = G__6638;
continue;
}
} else
{var temp__4126__auto___6639 = cljs.core.seq.call(null,seq__6622_6630);if(temp__4126__auto___6639)
{var seq__6622_6640__$1 = temp__4126__auto___6639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6622_6640__$1))
{var c__4300__auto___6641 = cljs.core.chunk_first.call(null,seq__6622_6640__$1);{
var G__6642 = cljs.core.chunk_rest.call(null,seq__6622_6640__$1);
var G__6643 = c__4300__auto___6641;
var G__6644 = cljs.core.count.call(null,c__4300__auto___6641);
var G__6645 = (0);
seq__6622_6630 = G__6642;
chunk__6623_6631 = G__6643;
count__6624_6632 = G__6644;
i__6625_6633 = G__6645;
continue;
}
} else
{var key_6646 = cljs.core.first.call(null,seq__6622_6640__$1);goog.events.unlistenByKey(key_6646);
{
var G__6647 = cljs.core.next.call(null,seq__6622_6640__$1);
var G__6648 = null;
var G__6649 = (0);
var G__6650 = (0);
seq__6622_6630 = G__6647;
chunk__6623_6631 = G__6648;
count__6624_6632 = G__6649;
i__6625_6633 = G__6650;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys))
;
pushy.core.t6619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_6621){var self__ = this;
var _6621__$1 = this;return self__.meta6620;
});})(history,event_keys))
;
pushy.core.t6619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_6621,meta6620__$1){var self__ = this;
var _6621__$1 = this;return (new pushy.core.t6619(self__.event_keys,self__.history,self__.identity_fn,self__.match_fn,self__.dispatch_fn,self__.pushy,meta6620__$1));
});})(history,event_keys))
;
pushy.core.__GT_t6619 = ((function (history,event_keys){
return (function __GT_t6619(event_keys__$1,history__$1,identity_fn__$1,match_fn__$1,dispatch_fn__$1,pushy__$2,meta6620){return (new pushy.core.t6619(event_keys__$1,history__$1,identity_fn__$1,match_fn__$1,dispatch_fn__$1,pushy__$2,meta6620));
});})(history,event_keys))
;
}
return (new pushy.core.t6619(event_keys,history,identity_fn,match_fn,dispatch_fn,pushy__$1,null));
});
pushy__$1 = function(dispatch_fn,match_fn,identity_fn){
switch(arguments.length){
case 2:
return pushy__$1__2.call(this,dispatch_fn,match_fn);
case 3:
return pushy__$1__3.call(this,dispatch_fn,match_fn,identity_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy__$1.cljs$core$IFn$_invoke$arity$2 = pushy__$1__2;
pushy__$1.cljs$core$IFn$_invoke$arity$3 = pushy__$1__3;
return pushy__$1;
})()
;
/**
* Returns whether Html5History is supported
*/
pushy.core.supported_QMARK_ = (function() {
var supported_QMARK_ = null;
var supported_QMARK___0 = (function (){return supported_QMARK_.call(null,window);
});
var supported_QMARK___1 = (function (window){return goog.history.Html5History.isSupported(window);
});
supported_QMARK_ = function(window){
switch(arguments.length){
case 0:
return supported_QMARK___0.call(this);
case 1:
return supported_QMARK___1.call(this,window);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = supported_QMARK___0;
supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = supported_QMARK___1;
return supported_QMARK_;
})()
;

//# sourceMappingURL=core.js.map