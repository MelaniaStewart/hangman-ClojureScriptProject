(ns hangman.core
  (
    :require [reagent.core :as reagent]
             [re-frame.core :as rf]
             [clojure.string :as str]
             [goog.string :as gstring]
             )
  )

;; RATOM DECLARATIONS USED BY COMPONENTS
(def img-file (reagent/atom "zero.jpg"))
(def status-info (reagent/atom "You have 6 tries."))
(def letters (reagent/atom ["_" "_" "_" "_" "_" "_" "_" "_" "_"]))
(def Comp-List (reagent/atom ()))
(def letter-from-text (reagent/atom ""))
(def max-number-of-failures (reagent/atom 6))
(def new-word (reagent/atom ""))

;; OTHER ATOMS - NOT RELATED TO COMPONENTS
(def size-of-word (atom 9))
(def number-of-failures (atom 0))


;; FUNCTIONS - NON COMPONENT
(defn do-letter [letter] [:label (str letter (gstring/unescapeEntities "&nbsp;"))])

(defn remove-option [combo letter]
      (remove #(= letter (:value (get % 1) combo)) combo)
      )

;; CONSTANT VARIABLES
(def Complete-List
  '(
     [:option {:value "A"} "A"]
     [:option {:value "B"} "B"]
     [:option {:value "C"} "C"]
     [:option {:value "D"} "D"]
     [:option {:value "E"} "E"]
     [:option {:value "F"} "F"]
     [:option {:value "G"} "G"]
     [:option {:value "H"} "H"]
     [:option {:value "I"} "I"]
     [:option {:value "J"} "J"]
     [:option {:value "K"} "K"]
     [:option {:value "L"} "L"]
     [:option {:value "M"} "M"]
     [:option {:value "N"} "N"]
     [:option {:value "O"} "O"]
     [:option {:value "P"} "P"]
     [:option {:value "Q"} "Q"]
     [:option {:value "R"} "R"]
     [:option {:value "S"} "S"]
     [:option {:value "T"} "T"]
     [:option {:value "U"} "U"]
     [:option {:value "V"} "V"]
     [:option {:value "W"} "W"]
     [:option {:value "X"} "X"]
     [:option {:value "Y"} "Y"]
     [:option {:value "Z"} "Z"]
     ))

(def list-of-words [
                    "ELEPHANT" "CHAIR" "PROBLEM" "TELEVISION" "ELEMENTARY"
                    "SUCCESSFUL" "EXTENDED" "SURPRISE" "COVENTRY" "COLLEAGUE"
                    "COURTESY" "INVESTIGATION" "ONLINE" "DAUGHTER" "SCHOOL"
                    "CARTRIDGE" "CATEGORY" "POLICEMAN"
                    "POLICEMAN" "YESTERDAY" "CHRISTMAS" "PARKING" "HALLOWEEN"])

(def list-of-jpegs ["hangman1.png" "hangman2.png" "hangman3.png" "hangman4.png" "hangman5.png" "hangman6.png" "hangman7.png" "eight.jpg" "nine.jpg" "ten.jpg"])


;; EVENT HANDLERS
;; PERFORM RESTART
;; (COMMENT OUT) GET WORD FROM RESTFUL API 
;; GET A RANDOM WORD FROM VECTOR
;; SET ZERO IMAGE
;; SET FAILURES TO 0
;; STORE SIZE OF WORD
;; PUT DASHES
(defn perform-restart []
      (let [a (reagent/atom "")
            b (reagent/atom "")
            tmp (atom "")]
           (comment using RESTFul API
                    (go (let [response (<! (http/get "http://localhost:3000/test"))] (reset! new-word (get (:body response) :new-word))))
                    )
           (reset! a (rand-nth list-of-words))
           (reset! img-file "zero.jpg")
           (reset! number-of-failures 0)
           (reset! size-of-word (count @a))
           (reset! letters (repeat (count @a) "_"))
           (reset! new-word @a)
           (reset! status-info "You have 6 tries.")
           )
      )

(defn perform-restart-complete []
      (perform-restart)
      (reset! Comp-List (vec Complete-List))
      )

(defn perform-restart-complete-bad []
      (perform-restart)
      (reset! status-info "*** YOU LOST - NEW GAME ****")
      (reset! img-file "hangman7.png")
      (reset! Comp-List (vec Complete-List))
      )

;; GUESS WAS BAD
;;    - INCREASE NUMBER OF FAILURES
;;    - GET NEXT IMAGE
;;    - IF MAX NUMBER WAS REACHED - PERFORM RESTART
(defn guess-was-bad []
      (swap! number-of-failures inc)
      (reset! img-file (get list-of-jpegs @number-of-failures))
      (if (= @number-of-failures @max-number-of-failures)
        (perform-restart-complete-bad)
        (reset! status-info (str "Got " (- @max-number-of-failures @number-of-failures) " tries."))
        )
      )

;; PERFORM GUESS
;; GET SELECTION FROM THE COMBO BOX
;; REMOVE SELECTION
;; IF THE VALUE IS NOT IN THE WORD TO BE GUESSED - PROCESS GUESS WS BAD
;;    If it was a good guess - PLACE THE GUESS ON THE WORD GUESSED
;;
(defn perform-guess []
      (let [e (js/document.getElementById "GuessHangman")
            value-cb (reagent/atom "")
            test-value (reagent/atom [])]

           (reset! value-cb (name (.-text (aget (.-options e) (.-selectedIndex e)))))

           (swap! Comp-List remove-option @value-cb)

           (if (str/includes? @new-word @value-cb)

             (loop [x 0] (when (< x @size-of-word)
                               (if (= (get @new-word x) @value-cb)
                                 (reset! letters (assoc (vec @letters) x @value-cb))
                                 )
                               (if (str/starts-with? @status-info "*** YOU LOST")
                                 (reset! status-info (str "Got " (- @max-number-of-failures @number-of-failures) " tries."))

                                 )
                               (recur (+ x 1))))
             (guess-was-bad)
             )

           ;; if the first 3 characters are string clear status-info
           (if (str/starts-with? @status-info "*** YOU WON")
             (reset! status-info "NEW GAME")
             )

           (if (= (apply str @letters) @new-word)
             (reset! status-info (str "*** YOU WON ***")))
           )
      )

(defn limit-to-one-letter
      []
      (let [entry (apply str (re-seq #"[a-zA-Z]" (aget (js/document.getElementById "Hangman-By-Text") "value")))]
           (if (= (count entry) 1)
             (reset! letter-from-text entry)
             (reset! letter-from-text "")
             )

           (if (str/includes? @new-word @letter-from-text)

             (loop [x 0] (when (< x @size-of-word)
                               (if (= (get @new-word x) @letter-from-text)
                                 (reset! letters (assoc (vec @letters) x @letter-from-text))
                                 )
                               (recur (+ x 1))))
             (guess-was-bad)
             )
           (if (= (apply str @letters) @new-word)
             (reset! status-info (str "SUCCESS")))
           )
      (reset! letter-from-text "")
      )

;; COMPONENTS
(defn hangman-div
      []
      [:div
       ""
       [:img {:id     "ImgHangman"
              :src    @img-file
              :alt    "zero.jpg"
              :style  {:padding "1px"
                       :border  "thin solid black"}
              :width  104
              :height 142}]])

(defn word-div
      []
      [:div {:id "word-block" :class "guess-word"}
       (for [letter @letters] [do-letter letter])
       ]
      )

(defn guess-div
      []
       [:div {:id "GuessDiv"}
       ""
       (into [:select {:id "GuessHangman"}]
             @Comp-List)])

(defn button-div
      []
      [:div
       ""
       [:button {:id       "MyGuess"
                 :type     "button"
                 :on-click #(perform-guess)
                 }
        "My guess!!"]])

(defn status-div
      []
      [:div
       ""
       [:label {:for "Status"} "Status:"]
       [:input {:id    "Status"
                :type  "text"
                :size  50
                :value @status-info}]]
      )


(defn hangman-show-new-word-div
      []
      [:div
       ""
       [:label {:for "CurrentWord"} "Current Word:"]
       [:input {:id    "CurrentWord"
                :type  "text"
                :value @new-word}]]
      )

(defn re-start-div
      []
      [:div
       ""
       [:button {:id       "Re-Start"
                 :type     "button"
                 :on-click #(perform-restart-complete)
                 }
        "Re-Start!"]])


(defn ui
      []
      (perform-restart)
      [:div
       [:h1 "Hangman"]
       [hangman-show-new-word-div]
       [hangman-div]
       [word-div]
       [guess-div]
\       [button-div]
       [re-start-div]
       [status-div]
        ])

;; ENTRY POINT
(defn ^:export run
      []
      (reset! Comp-List (vec Complete-List))

      ;; (rf/dispatch-sync [:initialize])     ;; puts a value into application state
      (reagent/render [ui]                                  ;; mount the application's ui into '<div id="app" />'
                      (js/document.getElementById "app")))
