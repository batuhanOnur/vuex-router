
        export const catLength = state => {
            return state.categories.length
        };

        export const getEventById = state => id => {
            return state.events.find(event => event.id === id)
        }

