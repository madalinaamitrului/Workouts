<template>
  <div class="row">
    <h1>My workouts</h1>
    <el-input
      @change="workoutTitleChange"
      v-model="workoutTitle"
      type="text"
      placeholder="Add workout"
      class="input"
    />
    <el-button type="primary" @click="addWorkoutDetails" round>Add</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      workoutTitle: "",
    };
  },
  methods: {
    ...mapActions(["addWorkout"]),
    addWorkoutDetails() {
      this.addWorkout({
        id: v1(),
        title: this.workoutTitle,
        workoutCompleted:false,
        exercisesCompleted:[],
        exercises: [],
      });
    },
    workoutTitleChange(event) {
      this.workoutTitle = event.target.value;
    },
  },
};
</script>

<style lang="css" scoped>
h1{
  color:rgb(20, 20, 20);
}
.row{
  margin-bottom: 40px;
}
.input{
  max-width:400px;
  margin-bottom:20px;
}
.el-button{
  margin-inline: 20px;
}
</style>
