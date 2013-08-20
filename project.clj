(defproject todo-angular "0.1.0"
  :description "Todo list."
  
  :min-lein-version "2.0.0"
  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-cljsbuild "0.2.10"]]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [framework-one "0.2.4-SNAPSHOT"]]
  :main todo.main

  :cljsbuild {:builds
              [{:source-path "src/cljs"
                :compiler {:output-to "src/clj/todo/assets/js/todo.js"
                           :pretty-print false
                           ;;Can't use advanced compilation with angular.js yet
                           :optimizations :whitespace}}]})
