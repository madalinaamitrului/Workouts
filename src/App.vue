<template>
  <div id="app">
    <WorkoutInput />
    <WorkoutsList/>
  </div>
</template>

<script>

import WorkoutInput from '@/components/WorkoutInput';
import WorkoutsList from '@/components/WorkoutsList';
export default {
  name: 'App',
  components: {
  WorkoutInput,
  WorkoutsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
