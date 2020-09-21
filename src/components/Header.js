import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styles from '../styles/Header';

export default function Header() {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const createdFeedBack = () => {
        history.push('/getcreatefeedback');
    }

    const feedbacksReceived = () => {
        history.push('/getfeedbackreceived');
    }

    return(
      <Styles.DivContainer>
        <Styles.Items onClick={homePage}>Home</Styles.Items>
        <Styles.Items onClick={createdFeedBack}>Created Feedbacks</Styles.Items>
        <Styles.Items onClick={feedbacksReceived}>Feedbacks Receiveds</Styles.Items>
      </Styles.DivContainer>)
}