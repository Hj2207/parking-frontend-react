import  UserActionTypes  from './user.types'
import axios from 'axios'

export const googleSignInStart=()=>({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess=user=>({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure=error=>({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart=()=>({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const emailSignInStartAsync= (emailPasswordAndUserType)=>{
    return async (dispatch)=>{
        dispatch(emailSignInStart());
        try {
            console.log('sending data');
            const data =  await axios.post('http://localhost:5000/api/parking/auth/login',emailPasswordAndUserType);
            const user=data.data.data;
            dispatch(signInSuccess(user));
        } catch (error) {
            dispatch(signInFailure(error))
        }
    }
}

export const checkUserSession=()=>({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart=()=>({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess=()=>({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure=error=>({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});
