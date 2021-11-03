<template>
  <div>
    <WorkoutExercisesInput :workout="workout"/>
    <div v-for="exercise in workout.exercises" :key="exercise.id">
    <WorkoutExerciseItem :exercise="exercise"/>
    </div>
  </div>
</template>

<script>
import WorkoutExerciseItem from './WorkoutExerciseItem.vue';
import WorkoutExercisesInput from './WorkoutExercisesInput.vue';
export default {
  props: {
    workout: {},
  },
  components: {
    WorkoutExercisesInput,
    WorkoutExerciseItem
  },
};
</script>

<style lang="scss" scoped></style>
