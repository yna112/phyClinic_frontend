import { TherapyModel } from "../Components/Models/TherapyModel";

export class TherapyAppState{
    public therapy:TherapyModel[]=[];

    
}

export enum ThrerapyActionType{
    therapyList="therapyList",
}


export interface TherapyAction{
    type:ThrerapyActionType;
    payload:any;
}


export function therapyListAction(therapyList:TherapyModel[]):TherapyAction{
    return {type:ThrerapyActionType.therapyList,payload:therapyList}
}


export function therapyReducer(currentState:TherapyAppState=new TherapyAppState(),action:TherapyAction):TherapyAppState{

    const newState={...currentState}

    switch(action.type){
        case ThrerapyActionType.therapyList:
            newState.therapy=action.payload;
            break;
        
    }



    return newState;
}