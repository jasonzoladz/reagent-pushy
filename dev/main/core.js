// Compiled by ClojureScript 0.0-2280
goog.provide('main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pushy.core');
goog.require('pushy.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
main.core.current_page = reagent.core.atom.call(null,null);
main.core.home_page = (function home_page(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is home page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/register"], null),"Register Now!"], null)], null);
});
main.core.register = (function register(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is register page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/welcome"], null),"Sign up now"], null)], null);
});
main.core.welcome = (function welcome(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is welcome page"], null)], null);
});
cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.home_page);
main.core.app_view = (function app_view(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,main.core.current_page)], null)], null);
});
var action__4497__auto___5565 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5563 = params__4498__auto__;var map__5563__$1 = ((cljs.core.seq_QMARK_.call(null,map__5563))?cljs.core.apply.call(null,cljs.core.hash_map,map__5563):map__5563);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.home_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5564 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.home_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4497__auto___5565);
var action__4497__auto___5568 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5566 = params__4498__auto__;var map__5566__$1 = ((cljs.core.seq_QMARK_.call(null,map__5566))?cljs.core.apply.call(null,cljs.core.hash_map,map__5566):map__5566);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.register);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5567 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.register);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/register",action__4497__auto___5568);
var action__4497__auto___5571 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5569 = params__4498__auto__;var map__5569__$1 = ((cljs.core.seq_QMARK_.call(null,map__5569))?cljs.core.apply.call(null,cljs.core.hash_map,map__5569):map__5569);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.welcome);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5570 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.welcome);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/welcome",action__4497__auto___5571);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
main.core.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (x){if(cljs.core.truth_(secretary.core.locate_route.call(null,x)))
{return x;
} else
{return null;
}
}));
pushy.core.start_BANG_.call(null,main.core.history);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map