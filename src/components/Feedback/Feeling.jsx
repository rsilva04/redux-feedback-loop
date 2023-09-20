import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function feeling(){

const history = useHistory();
const feeling = useSelector(store => store.feeling);
const dispatch = useDispatch

const handleSubmit = (event) => {
    const action = { type: 'SET_FEELING' , payload: event.target.value };
    dispatch(action);
}

const nextStep = (event) => {
    event.preventdefault();
    if(feeling > 0) {
        return history.push('/understanding')
    }
    else {
        alert('You must provide an answer!')
    }
}

const previousPage = () => {
    return history.push('/')
}

return(








    
)




}