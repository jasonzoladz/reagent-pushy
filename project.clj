(defproject CHANGE-ME-ME "0.1.0-SNAPSHOT"
  :description "CHANGE-ME"
  :url "https://CHANGE-ME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [reagent "0.4.2"]
                 [secretary "1.2.1"]
                 [kibu/pushy "0.3.0"]
                 [cljs-ajax "0.2.6"]]

  :plugins [[lein-environ "0.5.0"]
            [lein-cljsbuild "1.0.3"]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:optimizations :none
                                   :output-to "dev/app.js"
                                   :output-dir "dev/"
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:optimizations :advanced
                                   ;;:externs ["externs.js"]
                                   :output-to "js/app.js"
                                   :pretty-print false}}
                       ]}

  :min-lein-version "2.0.0")
