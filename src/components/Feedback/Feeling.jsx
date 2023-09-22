import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Feeling() {

    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value };
        dispatch(action);
    }

    const nextStep = (event) => {
        event.preventDefault();
        if (feeling > 0) {
            return history.push('/understanding')
        }
        else {
            alert('You must provide an answer!')
        }
    }

    const previousPage = () => {
        return history.push('/')
    }

    return (
        <div>
            <h3>How are you feeling today?</h3>
            <h4>Feeling?</h4>
            <form className='' onSubmit={nextStep}>
                <input type="number" name='' value={feeling} onChange={handleSubmit} />

            </form>
            <button onSubmit={previousPage}>Go Back</button>
        </div>
    );
}

export default Feeling;