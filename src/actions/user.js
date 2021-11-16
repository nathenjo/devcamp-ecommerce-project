import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.73,
                orderNumber: 'A0987F2T0794F',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 1,
                total: 19.73,
                orderNumber: 'A0987F2T0794F',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Matthew Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 2,
                total: 9.31,
                orderNumber: 'L8ASDHGF9721',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tiffany Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 3,
                total: 4.23,
                orderNumber: 'SDHOFY091678',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Luke Johnson',
                    shippingAddress: '123 East State St'
                }
            },
            {
                _id: 4,
                total: 1.92,
                orderNumber: 'N98H60S96GZ',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Nathen Johnson',
                    shippingAddress: '123 East State St'
                }
            },
            {
                _id: 5,
                total: 5.01,
                orderNumber: 'LJKYHB09A8E6T9',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Peyton Johnson',
                    shippingAddress: '123 East State St'
                }
            },
            {
                _id: 6,
                total: 7.37,
                orderNumber: 'DF90GH76A03',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kristine Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 7,
                total: 12.45,
                orderNumber: 'J9H8G9S06H97',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Josh Smallsquatch',
                    shippingAddress: '123 East State St'
                }
            }
        ]
    })
}