import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        // fetch shop products action creator
        const headerLinks = [
            {
              _id: 0,
              title: 'Login',
              path: '/signin'
            }
          ]
          this.props.setHeaderLinks(headerLinks);
          this.props.fetchShopCategories();
            // filter products with links
          this.props.fetchShopProducts();
    }

     render() {
       return(
         <div className='shop'>
             {/* shop searchbar component */}
             {/* shop product component */}
             {/* shop cart button */}
             Shop
         </div>
       );
   }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;