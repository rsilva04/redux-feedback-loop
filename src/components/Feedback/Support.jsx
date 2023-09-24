import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Support() {

    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const action = { type: 'SET_SUPPORT', payload: event.target.value };
        dispatch(action);
    }

    const nextStep = (event) => {
        event.preventDefault();
        if (support > 0) {
            return history.push('/comments')
        }
        else {
            alert('You must provide an answer!')
        }
    }

    const previousPage = () => {
        return history.push('/understanding')
    }

    return (
        <div>
            <h3>How well are you being supported?</h3>
            <h4>Support?</h4>
            <form className='' onSubmit={nextStep}>
                <input type="number" name='' value={support} onChange={handleSubmit} />
                <button onClick = {nextStep}>Next</button>
            </form>
            <button onSubmit={previousPage}>Go Back</button>
        </div>
    );
}

export default Support;