import axios from 'axios'


const rooms = await axios.get('http://localhost:1337/rooms/1')
rooms.data

