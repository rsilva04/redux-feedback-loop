import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Review () {

    const axios = axios;
    const history = useHistory();

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    // const handleSubmit = () =>{
        
    // }



    return (

<div>
            <h3>Review Your Feedback</h3>
            <h4>Feelings:{}</h4>
            <h4>Understanding:{}</h4>
            <h4>Support:{}</h4>
            <h4>Comments:{}</h4>
            {/* <button onClick={handleSubmit}>Submit</button> */}


</div>
    );



}

export default Review;