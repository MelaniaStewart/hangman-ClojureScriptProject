(ns figwheel.connect.build-client (:require [figwheel.client] [figwheel.client.utils] [simple.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/simple.core.run (apply js/simple.core.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'simple.core/run' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

