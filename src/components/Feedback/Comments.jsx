import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Comments() {

    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const action = { type: 'SET_COMMENTS', payload: event.target.value };
        dispatch(action);
    }

    const nextStep = (event) => {
        event.preventDefault();
        if (comments > 0) {
            return history.push('/support')
        }
    }
    const previousPage = () => {
        return history.push('/support')
    }

    return (
        <div>
            <h3>Any comments you want to leave?</h3>
            <h4>Comments?</h4>
            <form className='' onSubmit={nextStep}>
                <input type="text" name='text' value={comments} onChange={handleSubmit} />
                <button onClick={nextStep}>Next</button>
            </form>
            <button onSubmit={previousPage}>Go Back</button>
        </div>
    );
}

export default Comments;