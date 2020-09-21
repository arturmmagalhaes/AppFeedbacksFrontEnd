import React from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import * as Styles from '../styles/SignUp';

export default function SignUp() {
  const history = useHistory();

  const { form, handleForm } = useForm({
      name: '',
      email: '',
      password: '',
  });

  const onChangeForm = (event) => {
    const {name, value} = event.target;
    handleForm(name, value);
  }

  const login = () => {
    history.push('/signin')
  }

  const signUp = (event) => {
      event.preventDefault();

      axios.post(`http://localhost:3003/signup`, form)
        .then(response => {
            history.push('/signin');
        })
        .catch(error => {
            alert(error.message);
        })
  }
  
  return(
    <Styles.DivContainer>
        <Styles.FormLogin onSubmit={signUp}>
          <div>
            <Styles.Label name="name">Nome</Styles.Label>
            <Styles.Input 
                name="name"
                type="text" 
                placeholder="nome" 
                onChange={onChangeForm} 
                value={form.name} />
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
                placeholder="senha" 
                onChange={onChangeForm} 
                value={form.password} />
            <hr />
            <Styles.Button>Cadastrar</Styles.Button>
            <Styles.P onClick={login}>Fazer login</Styles.P>
          </div>
        </Styles.FormLogin>
    </Styles.DivContainer>);
}