import React from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import * as Styles from '../styles/LoginPage';

export default function LoginPage() {
  const history = useHistory();

  const { form, handleForm } = useForm({
      email: '',
      password: '',
  });

  const onChangeForm = (event) => {
    const {name, value} = event.target;
    handleForm(name, value);
  }

  const signIn = (event) => {
      event.preventDefault();

      axios.post(`http://localhost:3003/login`, form)
        .then(response => {
            localStorage.setItem('token', response.data.result.token);
            history.push('/home');
        })
        .catch(error => {
            alert(error.message);
        })
  }
  
  return(
    <Styles.DivContainer>
        <Styles.FormLogin onSubmit={signIn}>
          <div>
            <Styles.Label name="email">E-mail</Styles.Label>
            <Styles.Input 
                name="email"
                type="email" 
                placeholder="e-mail" 
                onChange={onChangeForm} 
                value={form.email} />
            <Styles.Label name="password">Senha</Styles.Label>
            <Styles.Input  
                name="password"
                type="password" 
                placeholder="password" 
                onChange={onChangeForm} 
                value={form.password} />
            <hr />
            <Styles.Button>Entrar</Styles.Button>
          </div>
        </Styles.FormLogin>
    </Styles.DivContainer>);
}