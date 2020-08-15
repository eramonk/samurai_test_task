(ns samurai-test-task.core
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [ajax.core :as ajx]
            [reagent-forms.core :refer [bind-fields]]))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

;; (defn lister-user []
;;   [:div
;;    (ajx/GET "/patients"
;;        {:handler (fn [patients]
;;                    (.warn js/console (str patients))
;;                    (.warn js/console (str @state))
;;                    (swap! state into patients)
;;                    (.warn js/console (str @state))
;;                    )
;;                    :error-handler (fn [details] (.warn js/console (str "Failed to refresh phones from server: " details)))
;;                    :response-format :json, :keywords? true})
;;    "Here is a list:"

;;    ;;[lister]
;;    ])


;; (defn jsx->clj
;;   [x]
;;   (into {} (for [k (.keys js/Object x)] [k (aget x k)])))


(def patients-list (r/atom [{:first_name "Ramon"
                             :last_name "Akh"
                             :father_name "Rinatovich"
                             :born_date "17/06/1983"
                             :sex "M"
                             :address "Ozero Lenevoe 66"
                             :policy_number 1}
                            {:first_name "Ramon"
                             :last_name "Akh"
                             :father_name "Rinatovich"
                             :born_date "17/06/1983"
                             :sex "M"
                             :address "Ozero Lenevoe 66"
                             :policy_number 2}
                            {:first_name "Ramon"
                             :last_name "Akh"
                             :father_name "Rinatovich"
                             :born_date "17/06/1983"
                             :sex "M"
                             :address "Ozero Lenevoe 66"
                             :policy_number 3}]))

(def pat-list (r/atom #{}))

(defn get-patient-list []
  (ajx/GET "/patients" {:handler (fn [patients]
                                   (reset! pat-list patients))
                        :response-format :json, :keywords? true}))

(get-patient-list)

;;(def doc (r/atom {}))

(defn lister [items]
  [:div
   [:ul "Patients"
    (for [item items]
      ^{:policy_number item} [:li
                              [:button.btn.btn-default
                               {:on-click
                                #(ajx/DELETE (str "/patient/" (:policy_number item)))}
                               "delete"]
                              [:button.btn.btn-default
                               {:on-click
                                #(rd/render [update-form item] (.getElementById js/document "app"))}
                               "update"]
                              "  Name - " (:first_name item)
                              ", Surname - " (:last_name item)
                              ", Father name - " (:father_name item)
                              ", Born date - " (:born_date item)
                              ", Sex - " (:sex item)
                              ", Address - " (:address item)
                              ", Policy number " (:policy_number item) "  "])]])

(defn row [label input]
  [:div.row
   [:div.col-md-2 [:label label]]
   [:div.col-md-5 input]])

(def form-template
  [:div
   (row "first name"
        [:input.form-control {:field :text :id :first_name}])
   (row "last name"
        [:input.form-control {:field :text :id :last_name}])
   (row "father name"
        [:input.form-control {:field :text :id :father_name}])
   (row "sex"
        [:select.form-control {:field :list :id :sex}
         [:option {:key "m"} "m"]
         [:option {:key "f"} "f"]])
   (row "address"
        [:input.form-control {:field :text :id :address}])
   (row "policy number"
        [:input.form-control {:field :numeric :id :policy_number}])
   (row "date of birth"
        [:input.form-control {:field :datepicker :id :born_date
                              :date-format (fn [{:keys [year month day]}] (str year "/" month "/" day))}])])

(defn create-form []
  (let [doc (r/atom {:first_name "John"
                     :last_name "Doe"
                     :sex "m" :address "bomz"
                     :policy_number (rand-int 1000)
                     :born_date "2015/04/01"
                     :father_name "Rinatovich"})]
    (fn []
      [:div
       [:div.page-header [:h1 "Patient create"]]
       [bind-fields form-template doc]
       [:button.btn.btn-default
        {:on-click
         #(do
            (if (empty? (:first_name @doc))
              (swap! doc assoc-in [:errors :first_name]
                     "first name is empty")
              (ajx/POST "/patient/create" {:body (clj->json (str @doc))}))
            (get-patient-list)
            (rd/render [lister-user] (.getElementById js/document "app")))}
        "save"]])))

(defn update-form [patient]
  (let [doc (r/atom patient)]
    (fn []
      [:div
       [:div.page-header [:h1 "Patient create"]]
       [bind-fields form-template doc]
       [:button.btn.btn-default
        {:on-click
         #(do
            (ajx/POST "/patient/update" {:body (clj->json (str @doc))})
            (get-patient-list)
            (rd/render [lister-user] (.getElementById js/document "app")))}

        "save"]
       ;;[:label (str @doc)]
       ])))

(defn lister-user []
  (get-patient-list)
  [:div
   [:button.btn.btn-default
    {:on-click
     #(rd/render [create-form] (.getElementById js/document "app"))}
    "Create patient"]
   [lister @pat-list]])


(defn ^:export main []
  (rd/render [lister-user]
                  (.getElementById js/document "app")))


;;(rd/render [lister-user] (.getElementById js/document "app"))



