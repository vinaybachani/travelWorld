import React, { useState, useContext } from 'react';
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './css/login.css';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext)

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json();

      if(!res.ok) alert(result.message)
      dispatch({type:'RSGISTER_SUCCESS'})
    } catch (error) {
      
    }
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <dic className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder='Username' id="username" required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' id="email" required onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id="password" required onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </dic>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
