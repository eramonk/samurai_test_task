(ns samurai-test-task.core
  (:require [reagent.core :as reagent :refer [atom]]))

;; (-> (.getElementsById js/document "context")
;;     (.-innerHTML)
;;     (set! "hello, world!"))

(defn home []
  [:h2 "Hello, Reagent!"])

(reagent/render
 [home]
 (.getElementsById js/document "content"))
