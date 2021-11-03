import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workouts: [
      {
        id: 1,
        title: "Upper body workout",
        workoutCompleted:false,
        exercisesCompleted:[],
        exercises: [
          [1,{
            id: 1,
            title: "Dumbbell curls",
            done: false,
          }],
          [1,{
            id: 2,
            title: "Triceps kickback",
            done:false,
          }],
          [1,{
            id: 3,
            title: "Triceps dip",
            done: false,
          }],
        ],
      },
      {
        id: 2,
        title: "Legs workout",
        workoutCompleted:false,
        exercisesCompleted:[],
        exercises: [
          [2,{
            id: 1,
            title: "Goblet squat",
            done: false,
          }],
          [2,{
            id: 2,
            title: "Banded lateral walk",
            done: false,
          }],
          [2,{
            id: 3,
            title: "Single-leg deadlift",
            done: false,
          }],
        ],
      },
    ],
  },
  getters: {
    allWorkouts: (state) => state.workouts,
  },
  actions: {
    addWorkout({ commit }, workout) {
      commit("add_workout", workout);
    },
    deleteWorkout({ commit }, id) {
      commit("delete_workout", id);
    },
    addExercise({commit}, exercise){
      commit("add_exercise", exercise)
    },
    deleteExercise({commit}, exercise){
      commit("delete_exercise", exercise)
    },
    handleCheckbox({commit}, exercise){
      commit("handle_checkbox", exercise)
    },
    verifyWorkoutStatus({commit}, workout){
      commit("verify_workoutStatus", workout);
    }
  },
  mutations: {
    add_workout(state, workout) {
      state.workouts.push(workout);
    },
    delete_workout(state, id) {
      state.workouts = state.workouts.filter((workout) => workout.id != id);
    },
    delete_exercise(state, exercise){
      let workoutId=exercise[0];
      let arrOfExercises = state.workouts.find((workout)=>workout.id == workoutId);
      let exerciseId= arrOfExercises.exercises.indexOf(exercise);
      arrOfExercises.exercises.splice(exerciseId, 1);
    },
    add_exercise(state, exercise){
      let workout=state.workouts.find((workout)=> workout.id== exercise[0]);
      workout.exercises.push(exercise);
    },
    handle_checkbox(state, exercise){
      !exercise[1].done;
      let workout=state.workouts.find((workout)=> workout.id== exercise[0]);
      let exerciseTitle= exercise[1].title; 
      if(exercise[1].done){
       workout.exercisesCompleted.push(exerciseTitle);
      }else{ 
        workout.exercisesCompleted = workout.exercisesCompleted.filter(elem=>elem != exerciseTitle);
      }
    },
    verify_workoutStatus(state, exercise){
      let workoutFound=state.workouts.find((workout)=> workout.id== exercise[0]);
      if(workoutFound.exercisesCompleted.length === workoutFound.exercises.length){
        workoutFound.workoutCompleted=true;
      }else{
        workoutFound.workoutCompleted=false;
      }
      console.log(workoutFound.workoutCompleted)
    }
  },
});
