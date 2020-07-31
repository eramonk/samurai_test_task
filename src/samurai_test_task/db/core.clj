(ns samurai-test-task.db.core
  (:require [clojure.java.jdbc :as sql]
                       ))
(def db {:subprotocol "postgresql"
         :subname "//localhost/patient"
         :user "admin"
         :password "admin"
         })

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
          :policy_number 123456
          })

(def pat2 {:first_name "Ramon"
          :last_name "Akh"
          :father_name "Rinatovich"
          :born_date "17/06/1983"
          :sex "M"
          :address "Ozero Lenevoe 66"
          :policy_number 123456
           })

(def pat3 {:first_name "Ramon"
          :last_name "Akh"
          :father_name "Rinatovich"
          :born_date "17/06/1987"
          :address "Ozero Lenevoe 84"
           :sex nil
          :policy_number 123
          })


(defn add-patient! [patient]
  (sql/insert! db :patients patient))

(defn add-patients! [& patients]
  (sql/insert-multi! db :patients patients))

(defn remove-patient! [pol_num]
  (sql/delete! db :patients ["policy_number=?" pol_num]))

(defn update-patient! [{:keys [first_name :first_name
                              last_name :last_name
                              father_name :father_name
                              sex :sex
                              born_date :born_date
                              address :address
                              policy_number :policy_number]}]
  (sql/update! db :patients
               (into {} (filter (fn [[k v]] (some? v)) {:sex sex :born_date born_date :address address}))
               ["first_name=? and last_name=? and father_name=? and policy_number=?"
                first_name last_name father_name policy_number]))

;;(add-patient! pat)
;;(add-patient! pat2)
;;(add-patient! pat3)
;; (get-patients)
;; (get-patient)










