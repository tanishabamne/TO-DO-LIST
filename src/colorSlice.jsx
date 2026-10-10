import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
    name: "mytask",

    initialState: {
        task: []
    },

    reducers: {
        add_to_task: (state, actions) => {
            console.log(actions);
            state.task.push(actions.payload);
        },
        recDel: (state, actions) => {
            console.log(actions.payload.id);
            state.task = state.task.filter(key => key.id !== actions.payload.id);
        },

        // recComp: (state, actions) => {
        //     console.log(actions.payload.id);

        //     for (var i = 0; i < state.task.length; i++) {
        //         state.task[i].status = "complete";
        //     }
        // },

        // recComp: (state, actions) => {
        //     for (let i = 0; i < state.task.length; i++) {
        //         if (state.task[i].id == actions.payload.id) {
        //             state.task[i].status = "complete";
        //         }
        //     }
        // },
        recComp: (state, actions) => {
            const task = state.task.find(
                key => key.id === actions.payload.id
            );

            if (task) {
                task.status = "complete";
            }
        },


        recinComp: (state, actions) => {
            for (let i = 0; i < state.task.length; i++) {
                if (state.task[i].id == actions.payload.id) {
                    state.task[i].status = "incomplete";
                }
            }
        },

        editSave: (state, actions) => {
            for (var i = 0; i < state.task.length; i++) {
                if (state.task[i].id == actions.payload.id) {
                    state.task[i].work = actions.payload.work;
                }
            }
        }
    }
})

export const { add_to_task, recDel, recComp, recinComp, editSave } = colorSlice.actions
export default colorSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const slice=createSlice({
//     name:"mycolor",
//     initialState:{
//         color:"red"
//     },
//     reducers:{
//         changeColor:(state)=>{
//             state.color="blue"
//         }
//     }
// })
// export const {changeColor}=slice.actions;
// export default slice.reducer