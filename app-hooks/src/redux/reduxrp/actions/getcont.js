export const getcont = () => {
    JSON.parse(localStorage.getItem("contacts"));
    return (dispatch) => {
        dispatch(
            {
                type:"getcontact",
                payload:contacts
            }
        )
    }
}