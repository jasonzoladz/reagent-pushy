(ns main.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true :refer-macros [defroute]]
            [pushy.core :as pushy]))

(enable-console-print!)

;; VIEWS ---------------------------------------------------------
(def current-page (atom nil))

(defn home-page []
  [:div 
    [:p "This is home page"]
    [:a {:href "/register"} "Register Now!"]])

(defn register []
  [:div 
   [:p "This is register page"]
   [:a {:href "/welcome"} "Sign up now"]])

(defn welcome []
  [:div 
   [:p "This is welcome page"]])

(reset! current-page home-page)

(defn app-view []
	[:div [@current-page]])


;; ROUTING ----------------------------------------------------------
(defroute "/" []
  (reset! current-page home-page))

(defroute "/register" []
  (reset! current-page register))

(defroute "/welcome" []
  (reset! current-page welcome))

;; PUSHSTATE -----------------------------------------------------------
(secretary/set-config! :prefix "/")
(def history (pushy/pushy secretary/dispatch!
                          (fn [x] (when (secretary/locate-route x) x))))
;; Start event listeners
(pushy/start! history)


;; RENDER APP ---------------------------------------------------------
(reagent/render-component [app-view] (.getElementById js/document "app"))


