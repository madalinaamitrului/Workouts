<template>
  <el-row>
    <el-col :span="18">
      <el-input
      @change="exerciseTitleChange"
      v-model="exerciseTitle"
      type="text"
      placeholder="Add exercise"
      size="small"
      /></el-col>
    <el-col :span="6"><el-button size="small" @click="addNewExercise(workout.id)" type="primary">Add</el-button></el-col>
  </el-row>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      exerciseTitle: "",
    };
  },
  props: {
    workout: {},
  },
  methods: {
    ...mapActions(["addExercise","verifyWorkoutStatus"]),
    addNewExercise(workoutId) {
      this.addExercise([workoutId, {
        id: v1(),
        title: this.exerciseTitle,
        done: false
      }]);
      this.verifyWorkoutStatus([workoutId, {
        id: v1(),
        title: this.exerciseTitle,
        done: false
      }])
    },
    exerciseTitleChange(event) {
      this.exerciseTitle = event.target.value;
    },
  },
};
</script>

<style lang="css" scoped>
.el-row{
  padding-block:20px;
}
</style>
