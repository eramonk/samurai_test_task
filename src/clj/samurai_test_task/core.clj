(ns clj.samurai-test-task.core
  (:gen-class)
  (:require [clojure.java.jdbc :as sql]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.multipart-params :as multipart-params]
            [selmer.parser :as selmer])
  (:use [ring.adapter.jetty]
        [clj.samurai-test-task.db.core]
        [clojure.data.json :as json]))


(defn all-patients [request]
  (json/write-str (get-patients))
;;  (str request)
  )

(defn patient-json [{:keys [params]}]
  (json/write-str (get-patient (Integer. (:id params)))))

(defn delete-patient [{:keys [params]}]
  (remove-patient! (Integer. (:id params))))

(defn create-patient [req]
  (add-patient! (json/read-str (slurp (:body req)) :key-fn keyword)))

(defn update-patient [req]
  (update-patient! (json/read-str (slurp (:body req)) :key-fn keyword)))

(defroutes app-routes
;;  (GET "/" [] (selmer/render-file "public/index.html" {}))
  (GET "/" [] (constantly {:body (slurp "resources/public/index.html") :status 200}))
;;  (route/resources "/")
  (GET "/patients" [] all-patients)
  (GET "/patient/:id" [] patient-json)
  (DELETE "/patient/:id" [] delete-patient)
  (POST "/patient/create" [] create-patient)
  (POST "/patient/update" [] update-patient))

(def my-routes
  (routes #'app-routes (route/resources "/")))

(defn -main [& args]
  (run-jetty my-routes {:port 3000}))

