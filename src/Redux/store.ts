import { combineReducers, createStore } from "redux";
import { patientReducer } from "./PatientAppState";
import { loginReducer } from "./AutoReduxState";
import { therapyReducer } from "./TherapyAppState";


const reducers=combineReducers({patientReducer:patientReducer,therapyReducer:therapyReducer,loginReducer:loginReducer})

const store = createStore(reducers)

export default store;


