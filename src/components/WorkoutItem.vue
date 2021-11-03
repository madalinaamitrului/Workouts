<template>
  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="workout">
    <el-button type="danger" icon="el-icon-delete" circle @click="deleteWorkout(workout.id)"></el-button>
    <div class="card">
        <h2>{{ workout.title }}</h2>
        <h4 class="done" v-if="workout.workoutCompleted">Completed!</h4>
        <h4 v-else>Way to go!</h4>
        <WorkoutExercisesList :workout="workout" />
    </div>
    
  </el-col>
</template>

<script>
import { mapActions } from "vuex";
import WorkoutExercisesList from "./WorkoutExercisesList.vue";
export default {
  props: {
    workout: {},
  },
  components: {
    WorkoutExercisesList,
  },
  methods: {
    ...mapActions(["deleteWorkout"]),
  },
};
</script>

<style lang="css" scoped>
.workout{
    margin-bottom: 20px;
}
.el-button{
    float: right;
    margin: 10px;
}
.card{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding:20px;
    min-height:500px;
}
.done{
    color:green;
}

</style>
