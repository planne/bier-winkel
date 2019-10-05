import { types } from './../../actions/types';

const sum = (items, key) => {
    return items.reduce((a, b) => a + (b[key] || 0), 0);
}

const initialState = { items: [], subtotal: 0 };

export default (state = initialState, action) => {
    // payload is a single product item
    let payload = action.payload;
    let updatedItems = state.items;

    switch (action.type) {
        case types.ADD_TO_CART:
            const quantity = parseInt(payload.quantity, 10);
            const amount = payload.price * quantity;
            const itemIndex = updatedItems.map(item => item.id).indexOf(payload.id);
            if (itemIndex > -1) {
                updatedItems[itemIndex].quantity += quantity;
                console.log(updatedItems[itemIndex].quantity );
            } else {
                updatedItems.push(payload);
            }
            return {
                items: updatedItems,
                subtotal: state.subtotal + amount
            };
        case types.REMOVE_ITEM:
            const total = payload.price * payload.quantity;
            return {
                items: [
                    ...state.items.slice(0, payload),
                    ...state.items.slice(payload + 1)
                ],
                subtotal: state.subtotal - total
            };
        case types.ADD_QUANTITY:
        case types.SUB_QUANTITY:
            updatedItems = state.items.map(item => {
                return payload.id === item.id ? payload : item;
            });
            const subtotal = sum(updatedItems, 'total');
            return {
                items: updatedItems,
                subtotal: subtotal
            };
        default:
            return state;
    }
};
