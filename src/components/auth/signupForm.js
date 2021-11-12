import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class SignUpForm extends Component {
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
         <form onSubmit={handleSubmit} className={`${className} 'sign-up-form`}>
             <Field
                className='sign-up-form__name'
                name='name'
                type='text'
                title='Name'
                placeholder='Name'
                component={FormInput}
            />
            <Field
                className='sign-up-form__email'
                name='email'
                type='email'
                title='Email'
                placeholder='Email'
                component={FormInput}
            />
            <Field
                className='sign-up-form__password'
                name='password'
                type='password'
                title='Password'
                placeholder='Password'
                component={FormInput}
            />
            <Field
                className='sign-up-form__confirm-password'
                name='confirm'
                type='password'
                title='Confirm Password'
                placeholder='Confirm Password'
                component={FormInput}
            />



            <div className='sign-up-form__line'></div>
            <Field
                className='sign-up-form__login'
                onClick={() => console.log('Submit Click')}
                name='login'
                type='submit'
                title='Login'
                component={FormButton}
            />
            <Field
                className='sign-up-form__back'
                onClick={() => console.log('Back Click')}
                name='back'
                type='button'
                title='Back'
                component={FormButton}
                short={true}
            />
            <Details className='sign-up-form__details' title='Quick Links' links={links}/>
         </form>
       );
   }
}

SignUpForm = reduxForm({
  form: 'SignIn'
})(SignUpForm);
export default SignUpForm;