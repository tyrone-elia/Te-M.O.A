import { getTours } from '../apis/tours'

export const SET_TOURS = 'SET_TOURS'

export function setTours(tours) {
  return {
    type: SET_TOURS,
    payload: tours,
  }
}

export function fetchTours() {
  return (dispatch) => {
    return getTours().then((tours) => {
      dispatch(setTours(tours))
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
