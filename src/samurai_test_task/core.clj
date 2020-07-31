(ns samurai-test-task.core
  (:require [clojure.java.jdbc :as sql]
            [compojure.core :refer :all]
            [compojure.route :as route])
  (:use [ring.adapter.jetty]
        [samurai-test-task.db.core]))

(defn all-patients [request] (get-patients))
(defroutes my-routes
  (GET "/all" [] all-patients)
  (GET "/bar" [] "Hello Bar"))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str request)})

(defn -main [& args]
  (run-jetty #'my-routes {:port 3000}))










