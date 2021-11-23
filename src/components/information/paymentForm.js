import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';
import OrderSummary from './orderSummary';

class PaymentForm extends Component {
     render() {
         const { className, handleSubmit } = this.props;
       return(
         <form onSubmit={handleSubmit} className={`${className} 'payment-form`}>
            <Field
                className='payment-form__name'
                name='name'
                type='text'
                title='Name on Card'
                placeholder='Name'
                component={FormInput}
            />
            <Field
                className='payment-form__card'
                name='card'
                type='text'
                title='Card Number'
                placeholder='____-____-____-____'
                component={FormInput}
            />
                        <Field
                className='payment-form__expiration'
                name='expiration'
                type='expiration'
                title='Expiration Date'
                placeholder='MM/YY'
                component={FormInput}
            />
            <Field
                className='payment-form__ccv'
                name='ccv'
                type='CCV'
                title='CCV'
                placeholder='CCV'
                component={FormInput}
            />

            <div className='payment-form__line'></div>
            <Field
                className='payment-form__pay-complete'
                onClick={() => history.push('/information/payment')}
                name='pay-complete'
                type='submit'
                title='Pay & Complete'
                component={FormButton}
            />
            <Field
                className='payment-form__back'
                onClick={() => history.push('/order/review')}
                name='back'
                type='button'
                title='Back'
                component={FormButton}
                short={true}
            />
            <OrderSummary className='payment-form__order-summary'/>
         </form>
       );
   }
}

PaymentForm = reduxForm({
  form: 'SignIn'
})(PaymentForm);
export default PaymentForm;