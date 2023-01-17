const initial_contact = {contacts:[]} 


function Contactreducer (state = initial_contact, action ) {
    switch(action.type){
        case "Get-contacts":
            return {
                ...state,
                contacts:action.payload
            }
        default :
            return state;
    }
}



export default Contactreducer ; 