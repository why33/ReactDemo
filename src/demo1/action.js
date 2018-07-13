import {type} from './type';

export default {
    init:val=>(dispatch,getState)=>{
        dispatch({type:type.change,data:[val]});
        dispatch({type:type.checked,data:val});

    },
    change:(val,data)=>(dispatch,getState)=>{
        dispatch({type:type.change,data:Array.from(new Set([...data,val]))})
    },
    checked:val=>dispatch=>dispatch({type:type.checked,data:val})
    
}