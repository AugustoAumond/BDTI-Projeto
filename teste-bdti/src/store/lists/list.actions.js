
export function add (list, newList){
    return {
        type: 'add',
        payload:[list, newList]
    }   
}

export function del (list){
    return {
        type: 'del',
        payload:[list]
    }
}

export function edit(list, newList){
    return {
        type: 'edit',
        payload:[list, newList]
    }
}

export function finished (list){
    return {
        type: 'finsh',
        payload:[list]
    }
}