export default function listReducer (state = (JSON.parse(localStorage.getItem('task')) !== null) ? JSON.parse(localStorage.getItem('task')) : [], 
    action){
    
    switch(action.type){
        case 'add':
            return [...action.payload[0], action.payload[1]];
        
        case 'del':
            return action.payload[0].splice(1,1); 
            
        case 'edit': 
            action.payload[0] = action.payload[1]; 
            return  action.payload[0] 
                
        case 'finish':
            return 

        default:
        return state
    } 
}