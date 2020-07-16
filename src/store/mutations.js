        export const increment = state => {
            state.counter++
        };
        export const decrement= state =>{
            state.counter--
        };
        export const zero= state =>{
            state.counter=0
        }; 
        export const addcate= (state,categories) => {
            state.categories.push(categories) 
        };

