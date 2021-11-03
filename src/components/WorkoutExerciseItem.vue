<template>
    <el-row>
        <el-col :span="16"><p>{{exercise[1].title}}</p></el-col>
        <el-col :span="4"><el-button  size="small" icon="el-icon-delete" circle @click="deleteExercisePlease(exercise)"/></el-col>
        <el-col :span="4"><el-checkbox label="Done" border v-model="exercise[1].done" @change="handleCheckboxChange(exercise)"/></el-col>
    </el-row>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        props:{
            exercise:[]
        },
        methods: {
            ...mapActions(['deleteExercise', 'handleCheckbox','verifyWorkoutStatus']),
            handleCheckboxChange(exercise){
                this.handleCheckbox(exercise);
                this.verifyWorkoutStatus(exercise);
            }, 
            deleteExercisePlease(exercise){
                this.deleteExercise(exercise);
                this.verifyWorkoutStatus(exercise);
            }
        }
    }
</script>

<style lang="css" scoped>
.el-row{
    max-height:300px;
    max-width:90%;
}
</style>