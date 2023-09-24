import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Understanding() {

    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const action = { type: 'SET_UNDERSTANDING', payload: event.target.value };
        dispatch(action);
    }

    const nextStep = (event) => {
        event.preventDefault();
        if (understanding > 0) {
            return history.push('/support')
        }
        else {
            alert('You must provide an answer!')
        }
    }

    const previousPage = () => {
        return history.push('/feeling')
    }

    return (
        <div>
            <h3>How well are you understaning the context?</h3>
            <form className='' onSubmit={nextStep}>
                <input type="number" name='' value={understanding} onChange={handleSubmit} />
                <button onClick = {nextStep}>Next</button>
            </form>
            <button onSubmit={previousPage}>Go Back</button>
        </div>
    );
}

export default Understanding;