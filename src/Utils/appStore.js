import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import connections from './connections';
import newConnectionSlice  from './newConnections';
import userFeed from './feedSlice'
const appStore = configureStore({
    reducer: {
        user: userReducer,
        connections:connections,
        newConnections:newConnectionSlice,
        userFeed:userFeed
    },
    devTools: true
})

export default appStore;