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
var action__4497__auto___5583 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5581 = params__4498__auto__;var map__5581__$1 = ((cljs.core.seq_QMARK_.call(null,map__5581))?cljs.core.apply.call(null,cljs.core.hash_map,map__5581):map__5581);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.home_page);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5582 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.home_page);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4497__auto___5583);
var action__4497__auto___5586 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5584 = params__4498__auto__;var map__5584__$1 = ((cljs.core.seq_QMARK_.call(null,map__5584))?cljs.core.apply.call(null,cljs.core.hash_map,map__5584):map__5584);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.register);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5585 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.register);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/register",action__4497__auto___5586);
var action__4497__auto___5589 = (function (params__4498__auto__){if(cljs.core.map_QMARK_.call(null,params__4498__auto__))
{var map__5587 = params__4498__auto__;var map__5587__$1 = ((cljs.core.seq_QMARK_.call(null,map__5587))?cljs.core.apply.call(null,cljs.core.hash_map,map__5587):map__5587);return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.welcome);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4498__auto__))
{var vec__5588 = params__4498__auto__;return cljs.core.reset_BANG_.call(null,main.core.current_page,main.core.welcome);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/welcome",action__4497__auto___5589);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
main.core.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (x){if(cljs.core.truth_(secretary.core.locate_route.call(null,x)))
{return x;
} else
{return null;
}
}));
pushy.core.start_BANG_.call(null,main.core.history);
cljs.core.print.call(null,main.core.pushy);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app_view], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map