(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true :refer-macros [defroute]]
            [pushy.core :as pushy]))

(enable-console-print!)

(defn app-view []
	[:div.sample "hello wxxoxxxxxrld"])

(reagent/render-component [app-view] (.getElementById js/document "app"))


