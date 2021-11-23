import React, { Component } from 'react';

import { UnderlinedTitle, InfoLabel } from './infoHelp' ;
import { connect } from 'react-redux';

class OrderSummary extends Component {
     render() {
        const { className } = this.props;
        let subtotal = 0;
        const tax = 0.16;
        let amtStickers = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amtStickers += cartProduct.quantity;   
        })
       return(
         <div className={`${className} order-summary`}>
             <UnderlinedTitle className='order-summary__title' title='Order Summary' />
             <InfoLabel className='order-summary__subtotal' title={`${amtStickers} stickers`} value={`$${subtotal}`} />
             <InfoLabel className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${tax}`}/>
             <InfoLabel className='order-summary__total info-label-green' title='Total' value={`$${subtotal + tax}`} />
         </div>
       );
   }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;