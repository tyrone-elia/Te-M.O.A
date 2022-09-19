/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navigate, removeFromCart, updateQuantity } from '../actions'

function Cart() {
  // TODO: replace cart
  const cart = useSelector((redux) => redux.cart)
  const [updatedQuantities, setUpdatedQuantities] = useState([])
  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(navigate('home'))
  }

  const handleUpdate = () => {
    console.log(updatedQuantities)
    dispatch(updateQuantity(updatedQuantities))
  }

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td>Beer</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, quantity = 1 }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  <input
                    className="update-input"
                    defaultValue={quantity}
                    onChange={(e) =>
                      setUpdatedQuantities([
                        ...updatedQuantities,
                        {
                          id: id,
                          name: name,
                          quantity: Number(e.target.value),
                        },
                      ])
                    }
                  />
                </td>
                {/* TODO: implement deletes */}
                <td>
                  <button onClick={() => dispatch(removeFromCart(id))}>
                    <span className="fa fa-trash fa-2x" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className="actions">
        <a onClick={handleNavigate}>Continue shopping</a>
        <button onClick={handleUpdate}>Update</button>{' '}
        {/* TODO: implement updates */}
        <button className="button-primary">Checkout</button>
      </p>
    </div>
  )
}

export default Cart
