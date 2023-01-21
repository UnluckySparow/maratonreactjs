const initial_contact = {contacts:[]} 


function Contactreducer (state = initial_contact, action ) {
    switch(action.type){
        case "getcontact":
            return {
                ...state,
                contacts:action.payload
            }
            case "ADD_CONTACT":
            return {
                ...state,
                contacts:action.payload
            }
            case "DEL_CONTACT":
            return {
                ...state,
                contacts:action.payload
            }
        default :
            return state;
    }
}

export default Contactreducer ; 