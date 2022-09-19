import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}

// export const NAVIGATE = 'NAVIGATE'
// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

// export function navigate(destination) {
//   return {
//     type: NAVIGATE,
//     payload: destination, // 'home' or 'cart'
//   }
// }

// export function addToCart(id, name) {
//   return {
//     type: ADD_TO_CART,
//     payload: {
//       id: id,
//       name: name,
//       quantity: 1,
//     },
//   }
// }

// export function removeFromCart(id) {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: id,
//   }
// }

// export function updateQuantity(updatedQuantities) {
//   return {
//     type: UPDATE_QUANTITY,
//     payload: updatedQuantities,
//   }
// }
