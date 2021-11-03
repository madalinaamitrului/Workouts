<template>
  <el-row :gutter="10">
    <div v-for="workout in allWorkouts" :key="workout.id">
      <WorkoutItem :workout="workout" />
    </div>
  </el-row>
</template>
<script>
import { mapGetters } from "vuex";
import WorkoutItem from "./WorkoutItem.vue";
export default {
  components: {
    WorkoutItem,
  },
  computed: {
    ...mapGetters(["allWorkouts"]),
  },
};
</script>

<style lang="scss" scoped></style>
