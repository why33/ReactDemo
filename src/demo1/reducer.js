import {type} from './type';

const initState={
    check:{},
    data:[],
    dataAll:[{cont:'第一项',id:1},{cont:'第二项',id:2},{cont:'第三项',id:3}],
}
export default function(state=initState,action){
    switch(action.type){
        case type.change:
            return {
                ...state,
                data:action.data
              
            }
        case type.checked:
            return {
                ...state,
                check:action.data
            }
        default:
            return state
    }
}