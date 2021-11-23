import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class PaymentForm extends Component {
     render() {
         const { className, handleSubmit } = this.props;
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
                className='sign-up-form__address'
                name='address'
                type='text'
                title='Street Address'
                placeholder='Street Address'
                component={FormInput}
            />
            <Field
                className='sign-up-form__city'
                name='city'
                type='city'
                title='City'
                placeholder='City'
                component={FormInput}
            />
            <Field
                className='sign-up-form__state'
                name='state'
                type='state'
                title='State'
                placeholder='State'
                component={FormInput}
            />
            <Field
                className='sign-up-form__zipcode'
                name='zipcode'
                type='zipcode'
                title='Zipcode'
                placeholder='Zipcode'
                component={FormInput}
            />

            <div className='sign-up-form__line'></div>
            <Field
                className='sign-up-form__login'
                onClick={() => history.push('/account')}
                name='login'
                type='submit'
                title='Create Account'
                component={FormButton}
            />
            <Field
                className='sign-up-form__back'
                onClick={() => history.push('/signin')}
                name='back'
                type='button'
                title='Back'
                component={FormButton}
                short={true}
            />
         </form>
       );
   }
}

PaymentForm = reduxForm({
  form: 'SignIn'
})(PaymentForm);
export default PaymentForm;