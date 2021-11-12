import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class SignInForm extends Component {
     render() {
         const { className, handleSubmit } = this.props;
         const links = [
           {
             _id: 0,
             title: 'Not Registered? Create Account Here',
             onClick: () => history.push('/signup')
           },
           {
            _id: 1,
            title: 'Forgot Account Email',
            onClick: () => console.log('Forgot email')
          },
          {
            _id: 2,
            title: 'Forgot Password',
            onClick: () => console.log('Link password')
          }
         ]
       return(
         <form onSubmit={handleSubmit} className={`${className} 'sign-in-form`}>
             <Field
                className='sign-in-form__email'
                name='email'
                type='email'
                title='Email'
                placeholder='Email'
                component={FormInput}
            />
            <Field
                className='sign-in-form__password'
                name='password'
                type='password'
                title='Password'
                placeholder='Password'
                component={FormInput}
            />
            <div className='sign-in-form__line'></div>
            <Field
                className='sign-in-form__login'
                onClick={() => history.push('/account')}
                name='login'
                type='submit'
                title='Login'
                component={FormButton}
            />
            <Details className='sign-in-form__details' title='Quick Links' links={links}/>
         </form>
       );
   }
}

SignInForm = reduxForm({
  form: 'SignIn'
})(SignInForm);
export default SignInForm;