(ns quil1.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def body (.-body js/document))
(def w (.-clientWidth body))
(def h (.-clientHeight body))

(def noise-zoom
  "Noise zoom level."
  0.009)

(defn position [current delta max]
  "Calculates the next position based on the current, the speed and a max."
  (mod (+ current delta) max))

(defn direction [x y z]
  "Calculates the next direction between [0,2π] based on the perlin noise at the position (x,y)."
    (* 2
     Math/PI
     (+ (q/noise (* x noise-zoom) (* y noise-zoom))
        (* 0.4 (q/noise (* x noise-zoom) (* y noise-zoom) (* z noise-zoom))))))

(defn velocity [current delta]
  "Calculates the next velocity by averaging the current velocity and the added delta."
  (/ (+ current delta) 2))

(def palette
  {:name       "Blue wave"
   :background [10 10 10]
   :colors     [
                [179 179 255]
                [77 77 255]
                [0 0 26]
                [0 0 102]
                [0 0 255]
                [0 0 204]]})

(defn particle
  "Creates a particle map."
  [id]
  {:id         id
   :vx         1
   :vy         1
   :size       (rand-nth (seq (range 1 4 0.1)))
   :direction  0
   :x          (q/random w)
   :y          (q/random h)
   :color      (rand-nth (:colors palette))})

(defn setup []
    (map particle (range 0 2000)))

(defn update-state "Receives the current state. Returns the next state to render."
  [particles]
  (map (fn [p]
         (assoc p
                :x         (position (:x p) (:vx p) w)
                :y         (position (:y p) (:vy p) h)
                :direction (direction (:x p) (:y p) (:id p))
                :vx        (velocity (:vx p) (Math/cos (:direction p)))
                :vy        (velocity (:vy p) (Math/sin (:direction p)))))
       particles))

(defn draw-state [particles]
  ;;(apply q/background (:background palette))
  (q/no-stroke)
  (doseq [p particles]
    (apply q/fill (conj (:color p) 2))
    (q/ellipse (:x p) (:y p) (:size p) (:size p))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch quil1
    :host "quil1"
    :size [w h]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
