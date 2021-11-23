import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './infoHelp';

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
            <div className='payment-form__shipping-info shipping-info'>
                <UnderlinedTitle className='shipping-info__title' title='Shipping To' />
                <div className='shipping-info__name small-text'>{this.props.name}</div>
                <div className='shipping-info__address small-text'>{this.props.address}</div>
            </div>
         </form>
       );
   }
}

function mapStateToProps(state) {
    const { name, address } = state.user.user;
    return {name, address }
}

PaymentForm = reduxForm({
  form: 'SignIn'
})(PaymentForm);

PaymentForm = connect(mapStateToProps)(PaymentForm)

export default PaymentForm;