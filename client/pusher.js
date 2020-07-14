import Pusher from 'pusher-js'

const token = localStorage.getItem('token')

const pusher = new Pusher('5d682af0f7e87d469d92', {
    cluster: 'ap2',
    auth: {
        headers: {
            Authorization: `Bearer ${token}`
        },
    },
    authEndpoint: 'http://localhost:8000/broadcasting/auth'
})

export default pusher
