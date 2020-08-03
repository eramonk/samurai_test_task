(defproject samurai_test_task "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [migratus "1.2.8"]
                 [org.postgresql/postgresql "42.2.2"]            
                 [org.clojure/java.jdbc "0.7.11"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [compojure "1.6.1"]
                 [org.clojure/data.json "1.0.0"]
                 [reagent "1.0.0-alpha2"]]
  :plugins [[migratus-lein "0.7.3"]
            [lein-ring "0.12.5"]]
  :ring {:handler ring.core/handler}
  :migratus {:store :database
           :migration-dir "resources/migrations"
           :db {:classname "com.mysql.jdbc.Driver"
                :subprotocol "postgresql"
                :subname "//localhost/patient"
                :user "admin"
                :password "admin"}}
  :repl-options {:init-ns samurai-test-task.core}
  :main samurai-test-task.core)


