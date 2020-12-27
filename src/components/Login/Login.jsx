import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Forms'
import { loginTC } from '../../redux/auth-reducer'
import { maxLengthCreator, required } from '../../valid/valid'

const max =  maxLengthCreator(20)

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={'email'} component={Input} placeholder={'Логин'} validate={[required, max]} />
        </div>
        <div>
          <Field placeholder={'Пароль'} name={'password'} component={'input'} type={'password'} />
        </div>
        <div>
          <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> Запомнить
        </div>
        <div>
          <div>
            {props.error}
          </div>
          <button>Войти</button>
        </div>
      </form> 
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginTC(formData.email, formData.password, formData.rememberMe)
    
  }

  if(props.isAuth){
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC: loginTC})(Login)