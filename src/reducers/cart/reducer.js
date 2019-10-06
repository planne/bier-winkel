import { types } from './../../actions/types';

const MAX_QTY = 10;

const sum = (items, key) => {
    return items.reduce((a, b) => a + (b[key] || 0), 0);
}

const initialState = { items: [], subtotal: 0 };

export default (state = initialState, action) => {
    let payload = action.payload;
    let updatedItems = state.items;

    switch (action.type) {
        case types.ADD_TO_CART:
            const itemIndex = updatedItems.map(item => item.id).indexOf(payload.id);
            let payloadQty = parseInt(payload.quantity, 10);
            let amount = payload.price * payload.quantity;
            if (updatedItems.length === 0 || itemIndex === -1) {
                // push item
                updatedItems.push(payload);
            } else {
                // update item
                let currentQty = parseInt(updatedItems[itemIndex].quantity, 10);
                let newQty = currentQty + payloadQty;
                if (newQty > MAX_QTY) {
                    newQty = MAX_QTY;
                    amount = (MAX_QTY - currentQty) * payload.price;
                }
                updatedItems[itemIndex].quantity = newQty;
            }
            return {
                items: updatedItems,
                subtotal: state.subtotal + amount
            };
        case types.REMOVE_ITEM:
            const item = state.items.filter(item =>
                item.id === payload.id
            );
            return {
                items: state.items.filter(item =>
                    item.id !== payload.id
                ),
                subtotal: state.subtotal - item[0].total
            };
        case types.UPDATE_ITEM_QUANTITY:
            const targetIndex = updatedItems.map(item => item.id).indexOf(payload.id);
            if (targetIndex > -1) {
                let quantity = parseInt(payload.quantity, 10);
                let price = updatedItems[targetIndex].price;
                updatedItems[targetIndex].quantity = quantity;
                updatedItems[targetIndex].total = quantity * price;
                return {
                    items: updatedItems,
                    subtotal: sum(updatedItems, 'total')
                }
            }
            return state;
        default:
            return state;
    }
};
