(ns todo.main
  (:require [framework.one :as fw1]
            [ring.adapter.jetty :refer [run-jetty]]))

(defn -main[]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))] 
    (run-jetty
     (fw1/start :application-key "todo"
                :template :selmer
                :selmer-tags {:tag-open \<
                              :tag-close \>})
      {:port port})))
