export function add (validator, index){
    return {
        type: 'change',
        validator: validator,
        index: index
    }   
}

