(ns todo.controllers.main
  (:require [framework.one :as fw1]))

(defn default "/main/default handler" [rc]
  rc)

(defn json-test [rc]
  (fw1/render-json rc {:msg "Hello World!" :id 1}))

(defn text-test [rc]
  (fw1/render-text rc "Hello World!"))

(defn xml-test [rc]
  (fw1/render-xml rc [:msg {:text "Hello World!"} [:id 1]]))
