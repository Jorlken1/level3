const initState = {
    collapsed:false
}

function reducer(state=initState,action){
    switch(action.type){
        case 'show':
            return {
                collapsed:false
            }
        case 'hide':
            return {
                collapsed:true
            }
        default:
            return state;
    }
}
export default reducer
