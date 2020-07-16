
        export const increment = context => {
            context.commit('increment')
        };
        export const decrement = context => {
            context.commit('decrement')
        };
        export const zero = context => {
            context.commit('zero')
        };
        export const createCate = (context,categories) =>{
            context.commit('addcate',categories)
        }
