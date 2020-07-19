import axios from 'axios'

export default {
     namespaced: true,
     state: {
        threads: []
     },

     getters: {
        getThreads(state) {
                var threadsLastMessages = []

                state.threads.map(thread => {
                    threadsLastMessages = thread.messages[thread.messages.length - 1]
                })
                return threadsLastMessages
        },

        getThreadMessages(state, getters, rootState) {

                if(rootState.route.path == "/messages/user") {
                        const threadIndex = state.threads.findIndex(thread => thread.id == rootState.route.params.threadId)
                        let messages =  state.threads[threadIndex].messages
                        console.log(messages)
                        return messages
                }
        }         
     },

     mutations: {
        ADD_THREADS(state, threads) {
                threads.map(thread => {
                        state.threads.unshift(thread)
                }) 
        },

        ADD_MESSAGE(state, newMessage) {
                const threadIndex = state.threads.findIndex(thread => thread.id == newMessage.thread_id)
                console.log(threadIndex)
                //state.threads[threadIndex].unshift(newMessage)
        }
     },

     actions: {
        // sending a message to the user
                async sendMessage({commit}, {receiverId, formData}) {
                        const response = await axios.post(`message/${receiverId}`, formData)
                        const newMessage = response.data.newMessage
                        console.log(newMessage)
                        commit('ADD_MESSAGE', newMessage)
                },

                // fetching threads with their messages
                async fetchThreads({commit}) {
                        const response = await axios.get('messages')
                        commit('ADD_THREADS', response.data.threads)
                }
        }
}
