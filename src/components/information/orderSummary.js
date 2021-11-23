import React, { Component } from 'react';

import { UnderlinedTitle, InfoLabel } from './infoHelp' ;

class OrderSummary extends Component {
     render() {
        const { className } = this.props;
       return(
         <div className={`${className} order-summary`}>
             <UnderlinedTitle className='order-summary__title' />
             <InfoLabel className='order-summary__subtotal' title='4 stickers' value='$7.96'/>
             <InfoLabel className='order-summary__tax-shipping' title='Taxes & Shipping' value='$0.16'/>
             <InfoLabel className='order-summary__total' title='Total' value='$8.12'/>
         </div>
       );
   }
}

export default OrderSummary;