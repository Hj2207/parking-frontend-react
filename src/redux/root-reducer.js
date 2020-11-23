import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import parkingReducer from "./parking/parking.reducer";
import {persistReducer} from 'redux-persist'
//for local storage
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key: 'root',
    storage,
    whitelist:['user']
}

const rootReducer=combineReducers({
        user: userReducer,
        parking: parkingReducer
    });


export default persistReducer(persistConfig,rootReducer)