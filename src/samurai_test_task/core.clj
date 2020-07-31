(ns samurai-test-task.core
  (:require [clojure.java.jdbc :as sql]
            [compojure.core :refer :all]
            [compojure.route :as route])
  (:use [ring.adapter.jetty]
        [samurai-test-task.db.core]
        [clojure.data.json :as json]))


(defn all-patients [request]
  ;;(json/write-str (get-patients))
  (str request)
  )

(defn patient-json [{:keys [params]}]
  (json/write-str (get-patient (Integer. (:id params)))))

(defn delete-patient [{:keys [params]}]
  (remove-patient! (Integer. (:id params))))

(defn create-patient [req]
  (str req))

(defroutes my-routes
  (GET "/patients" [] all-patients)
  (GET "/patient/:id" [] patient-json)
  (DELETE "/patient/:id" [] delete-patient)
  (POST "/patient/create" [] create-patient)
  )

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str request)})

(defn -main [& args]
  (run-jetty #'my-routes {:port 3000}))










