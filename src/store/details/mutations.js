const state = {
    list: [],
    name: ''
}

const mutations = {
    SET_NAME(state, data) {
        state.name = data
    },
    SET_LIST(state, data) {
        state.list = data
    }
}