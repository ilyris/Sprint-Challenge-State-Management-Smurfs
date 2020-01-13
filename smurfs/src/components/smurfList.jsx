import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import S from 'styled-components';
import axios from 'axios';
import Form from './form.jsx';



const SmurfList = () => {
    const state = useSelector(state => state);
    
    const dispatch = useDispatch();
    useEffect(() => {
        const getSmurfs = async () => {
            axios.get('http://localhost:3333/smurfs')
            .then(response =>  {
                console.log(response.data);
                dispatch({type: 'SET_SMURFS', payload: response.data})
            })
            .catch(error => console.log(error));
        }
        getSmurfs();
    }, [])
    console.log('smurf life rendered');
    return(
        <div>
        {state.smurfs.map( (smurfs, index) => {
            return(
                <div key={index} style={{'background-color': '#333', 'color': '#fff', 'padding': '10px'}}>
                <h2>{smurfs.name}</h2>
                <p>{smurfs.height}</p>
                <p>{smurfs.age}</p>
                </div>
            )
        })}
        <Form state={state} dispatch={dispatch}/>
        </div>
    );
}

export default SmurfList;