import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';

class ReviewForm extends Component {
     render() {
         const { className, handleSubmit } = this.props;
    
       return(
         <form onSubmit={handleSubmit} className={`${className} 'review-form`}>

             <ReviewProducts className='review-form__products' />

            <div className='review-form__line'></div>
            <Field
                className='review-form__proceed'
                onClick={() => history.push('/signin')}
                name='proceed'
                type='submit'
                title='Proceed to Checkout'
                component={FormButton}
            />
            <Field
                className='review-form__back'
                onClick={() => history.push('/shop')}
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

ReviewForm = reduxForm({
  form: 'SignIn'
})(ReviewForm);
export default ReviewForm;