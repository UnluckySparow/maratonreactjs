const Countreducer = (state,action)=>{
    switch (action.type){
        case "plus" :
            return {
                count : state.count + 1
            };
        case "moins" :
            return {
                count : state.count - 1
            }
        default : 
            return { 
                count : 0
            }
    }
}


export default Countreducer