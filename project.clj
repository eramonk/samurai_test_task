(defproject samurai_test_task "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.764"]
                 [migratus "1.2.8"]
                 [org.postgresql/postgresql "42.2.2"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [compojure "1.6.1"]
                 [org.clojure/data.json "1.0.0"]
                 [selmer "1.12.28"]
                 [reagent "1.0.0-alpha2"]
                 [cljs-ajax "0.8.0"]
                 [reagent-forms "0.5.44"]]
  :plugins [[migratus-lein "0.7.3"]
            [lein-ring "0.12.5"]
            [lein-cljsbuild "1.1.8"]]
  ;; :resource-paths ["resources" "target/cljsbuild"]
  :resource-paths ["resources" "target/cljsbuild" "resources/public/js/compiled"]
  :target-path "target/%s/"

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "test/js"]
  :cljsbuild
  {:builds [{:id "prod"
             :source-paths ["src/cljs"]
             :compiler {:output-to "resources/public/js/app.js"
                        :optimizations :advanced
                        :pretty-print false}}
            {:id "dev"
             :source-paths ["src/cljs"]
             :compiler {:output-to "resources/public/js/compiled/app.js"
                        :output-dir "resources/public/js/compiled/out"
                        :main samurai-test-task.core
                        :asset-path "/js/out"
                        :optimizations :advanced}}]}

  ;; :clean-targets ^{:protect false} [:target-path
  ;;                                   [:cljsbuild :builds :app :compiler :output-dir]
  ;;                                   [:cljsbuild :builds :app :compiler :output-to]]

  :ring {:handler ring.core/handler}
  :migratus {:store :database
             :migration-dir "resources/migrations"
             :db {:classname "com.mysql.jdbc.Driver"
                  :subprotocol "postgresql"
                  :subname "//localhost/postgresdb"
                  :user "admin"
                  :password "admin"}}
  :repl-options {:init-ns clj.samurai-test-task.core}
  :main clj.samurai-test-task.core)


