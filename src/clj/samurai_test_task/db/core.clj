(ns clj.samurai-test-task.db.core
  (:require [clojure.java.jdbc :as sql]))

(def db {:subprotocol "postgresql"
         :subname "//localhost/postgresdb"
         :user "admin"
         :password "admin"})

(defn get-patient [pol_num]
  (first (sql/query db ["select * from patients where policy_number = ?" pol_num])))

(defn get-patients []
  (sql/query db ["select * from patients"]))

(def pat {:first_name "Ramon"
          :last_name "Akh"
          :father_name "Rinatovich"
          :born_date "17/06/1983"
          :sex "M"
          :address "Ozero Lenevoe 66"
          :policy_number 123456})

(def pat2 {:first_name "Ramon"
           :last_name "Akh"
           :father_name "Rinatovich"
           :born_date "17/06/1983"
           :sex "M"
           :address "Ozero Lenevoe 66"
           :policy_number 123456})

(def pat3 {:first_name "Ramon"
           :last_name "Akh"
           :father_name "Rinatovich"
           :born_date "17/06/1987"
           :address "Ozero Lenevoe 555"
           :sex nil
           :policy_number 123})

(defn normalize-date [{:keys [year month day]}] (str year "/" month "/" day))

(defn add-patient! [patient]
  (let [pat (clojure.edn/read-string patient)
        pat-date (assoc pat :born_date (normalize-date (:born_date pat)))]
    (sql/insert! db :patients pat-date)))

(defn add-patients! [& patients]
  (sql/insert-multi! db :patients patients))

(defn remove-patient! [pol_num]
  (sql/delete! db :patients ["policy_number=?" pol_num]))


(defn update-patient! [patient]
  (let [pat (clojure.edn/read-string patient)
        pat-date (assoc pat :born_date (normalize-date (:born_date pat)))]
    (sql/update! db :patients pat-date
                 ["policy_number=?" (:policy_number pat-date)])))

;;(add-patient! pat)

;;(add-patient! pat2)

;;(add-patient! pat3)

;; (get-patients)
;; (get-patient)

;;(update-patient! pat3)











