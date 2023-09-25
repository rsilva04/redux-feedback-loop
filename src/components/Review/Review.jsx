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

    const handleSubmit = () => {
        axios.post("/feedback", {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
          })
          .then((response) => {
            console.log(response);
            // history.push("/thankYou");
          })
          .catch((error) => {
            console.log(`Error posting feedback ${error}`);
          });
      };



    return (

<div>
            <h3>Review Your Feedback</h3>
            <h4>Feeling:{feeling}</h4>
            <h4>Understanding:{understanding}</h4>
            <h4>Support:{support}</h4>
            <h4>Comments:{comments}</h4>
            <button onClick={handleSubmit}>Submit</button>


</div>
    );



}

export default Review;