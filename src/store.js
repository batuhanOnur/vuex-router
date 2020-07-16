import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        user: { id: 'aaa', name: 'adadad'},
        counter: 0,
        events: [
            {
                id: 1,
                title: 'title one',
                organizer: 'a'
            },
            {
                id: 2,
                title: 'title two',
                organizer: 'b'
            },
            {
                id: 3,
                title: 'title three',
                organizer: 'c'
            },
        ],
        categories:[
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
        ]
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        zero(state){
            state.counter=0
        }, 
        addcate(state,categories){
            state.categories.push(categories)
        }
    },
    actions:{
        increment({ commit }){
            commit('increment')
        },
        decrement({ commit }){
            commit('decrement')
        },
        zero({ commit }){
            commit('zero')
        },
        createCate({ commit }, categories){
            commit('addcate',categories)
        }
    },
    /* compute derived state based on store state */
    getters:{
        catLength: state => {
            return state.categories.length
        },

        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        },
    }
})