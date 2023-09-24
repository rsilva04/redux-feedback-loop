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

    





}