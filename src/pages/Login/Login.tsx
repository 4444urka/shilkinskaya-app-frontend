import React from 'react'
import FormInput from '../../components/FormInput/FormInput'
import "./styles.css";

const Login = () => {
  return (
    <form className='loginForm'>
      <FormInput label='username: '/>
      <FormInput label='password: '/>
    </form>
  )
}

export default Login