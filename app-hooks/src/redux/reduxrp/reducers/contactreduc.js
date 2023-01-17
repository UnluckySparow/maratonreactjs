const initialecontact = {contacts:[]}
function contactreduc(state= initialecontact , action){
    switch(action.type){
        case 'getcontact':
            return {
                ...state, 
                contacts  : action.payload
            }
        default :
            return state;
    }
}
export default contactreduc
