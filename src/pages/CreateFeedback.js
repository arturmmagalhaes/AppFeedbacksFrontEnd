import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import axios from 'axios';
import Header from '../components/Header';
import * as Styles from '../styles/CreateFeedback';

export default function CreateFeedback() {
    const history = useHistory();
    const params = useParams();
    const [token] = useState(localStorage.getItem('token'))
    const { form, handleForm } = useForm({
        improve: '',
        keep: '',
        suggestions: '',
        final_fb: '',
    });

    if(!token){
        history.replace('/signin');
    }


    const handleInput = (event) => {
        const { name, value } = event.target;
        handleForm(name, value);
    }

    const createFeedback = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3003/createfeedback/${params.id}`, form, {
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
        <Styles.FormCreateFb onSubmit={createFeedback}>
          <div>
            <Styles.Label name="improve">Melhorar</Styles.Label>
            <Styles.Input 
                name="improve"
                placeholder="Melhorar"
                onChange={handleInput}
                value={form.improve}/>
            <Styles.Label name="keep">Manter</Styles.Label>
            <Styles.Input  
                name="keep"
                placeholder="Manter"
                onChange={handleInput}
                value={form.keep}/>
            <Styles.Label name="suggestions">Sugestões</Styles.Label>
            <Styles.Input  
                name="suggestions"
                placeholder="Sugestões"
                onChange={handleInput}
                value={form.suggestions}/>
            <Styles.Label name="final_fb">Feedback Final</Styles.Label>
            <Styles.Input  
                name="final_fb"
                placeholder="Feedback Final"
                onChange={handleInput}
                value={form.final_fb}/>
            <hr />
            <Styles.Button>Enviar</Styles.Button>
          </div>
        </Styles.FormCreateFb>
    </Styles.DivContainer>
    </>)
}