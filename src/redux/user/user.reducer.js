import UserActionTypes from './user.types'
const INITIAL_STATE={
    currentUser: null,
    type:null,
    error:null,
    isLogging:false
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return{
                ...state,
                error:null,
                isLogging: true
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser : action.payload,
                error: null,
                isLogging: false
            };
            case UserActionTypes.SIGN_OUT_SUCCESS:
                return {
                    ...state,
                    currentUser : null,
                    error: null
                };
        default :
            return state;
    }
};

export default userReducer;