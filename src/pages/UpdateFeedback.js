import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import axios from 'axios';
import Header from '../components/Header';
import * as Styles from '../styles/CreateFeedback';

export default function UpdateFeedback(props) {
    const history = useHistory();
    const params = useParams();
    const [token] = useState(localStorage.getItem('token'))
    const { form, handleForm } = useForm({
        improve: props.location.state.element.improve,
        keep: props.location.state.element.keep,
        suggestions: props.location.state.element.suggestions,
        final_fb: props.location.state.element.final_fb,
    });

    if(!token){
        history.replace('/signin');
    }
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        handleForm(name, value);
    }

    //FALTA A URL
    const updateFeedback = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3003/updatefeedback/${params.id}`, form, {
            headers: {
                Authorization: token
            }
        })
            .then(() => {
                history.replace('/');
            })
            .catch(error => 
            alert(error.message)
            );
    } 
    
    return (<>
      <Header />
      <Styles.DivContainer>
        <Styles.FormCreateFb onSubmit={updateFeedback}>
          <div>
            <Styles.Label name="improve">Melhorar</Styles.Label>
            <Styles.Input 
                name="improve"
                placeholder="Melhorar"
                onChange={handleInput}
                value={form.improve}
                required />
            <Styles.Label name="keep">Manter</Styles.Label>
            <Styles.Input  
                name="keep"
                placeholder="Manter"
                onChange={handleInput}
                value={form.keep}
                required />
            <Styles.Label name="suggestions">Sugestões</Styles.Label>
            <Styles.Input  
                name="suggestions"
                placeholder="Sugestões"
                onChange={handleInput}
                value={form.suggestions}
                required />
            <Styles.Label name="final_fb">Feedback Final</Styles.Label>
            <Styles.Input  
                name="final_fb"
                placeholder="Feedback Final"
                onChange={handleInput}
                value={form.final_fb}
                required />
            <hr />
            <Styles.Button>Enviar</Styles.Button>
          </div>
        </Styles.FormCreateFb>
    </Styles.DivContainer>
    </>)
}