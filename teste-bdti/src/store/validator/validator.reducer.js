export default function validatorReducer (state = 0, 
    action){
    
    switch(action.type){
        case 'change':
            return action.validator = action.index;
        

        default:
        return state
    } 
}