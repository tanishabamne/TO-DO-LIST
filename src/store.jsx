import { configureStore } from "@reduxjs/toolkit";
import xyz from "./colorSlice"

const store = configureStore({
    reducer:{

        mytask:xyz
    }

})
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import xyz from "./colorSlice"
// const  store=configureStore({
//     reducer:{
//         mycolor:xyz
//     }
// })
// export default store;
