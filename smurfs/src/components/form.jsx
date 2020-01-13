import React from 'react';
import S from 'styled-components';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const Form = (props) => {
    const dispatch = useDispatch();

    console.log(props.state.newSmurf);
    const changeHandler = (event) => {
        if(event.target.name === 'name') {
            dispatch({type: 'SET_NEW_SMURF_NAME', payload: event.target.value})
        } else if(event.target.name === 'age') {
            dispatch({type: 'SET_NEW_SMURF_AGE', payload:event.target.value})
        } else if(event.target.name === 'height') {
            dispatch({type:'SET_NEW_SMURF_HEIGHT', payload:event.target.value})
        }

    }
    const submitHandler = event => {
        event.preventDefault();
        console.log('I still submit');
        axios.post('http://localhost:3333/smurfs', props.state.newSmurf, {  
            headers: {
              'content-type': 'application/json'  // Tell the server we are sending this over as JSON
            },
          }).then(response => {
              props.dispatch({type:'SET_SMURFS', payload: response.data})
          }).catch(error => console.log(error));
    }
    return(
        <>
        <h1>Add a smurf!</h1>
            <StyledForm action="/smurfs'" method="post" onSubmit={submitHandler}>
                <StyledInput type='text' name='name' value={props.state.newSmurf.name} onChange={changeHandler} />
                <StyledInput type='text' name='age' value={props.state.newSmurf.age} onChange={changeHandler}/>
                <StyledInput type='text' name='height' value={props.state.newSmurf.height} onChange={changeHandler}/>
                <StyledButton type="submit">Add Smurf</StyledButton>
            </StyledForm>
        </>

    );
}

export default Form;

const StyledForm = S.form`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: auto;
    justify-content: center;
`;
const StyledInput = S.input`
    border-radius: 5px;
    border: 1px solid #999;
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
`;

const StyledButton = S.button`
    padding: 10px 20px;
    margin-top: 10px;
    color: #fff;
    background-color: #333;
`;