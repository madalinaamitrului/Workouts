import {mount} from '@vue/test-utils';
import WorkoutItem from '../../src/components/WorkoutItem.vue';
describe('WorkoutItem.vue', ()=>{
    test('changes status of exercise when clicked', ()=>{
        const wrapper= mount(WorkoutItem, {propsData :{
            workout:{
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
            }}
        });
        expect(wrapper.text()).toContain("Way to go!")
    })
})