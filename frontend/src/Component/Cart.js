import React from "react";

function Cart({ CartItem, del, onRemove, onAdd }) {
  const Price = CartItem.reduce((a, c) => a + c.qty * c.price, 0);
  const Shipment_Charges = 0;
  const mydata = Price >= 5000 ? 0 : Shipment_Charges;
  const total = Price;
  return (
    <div className="container mt-5">
      <br />
      <br />
      <br />
      <br />
      <table className="table table-bordered">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Add</th>
          <th>Qty</th>
          <th>Remove</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {CartItem.map((item) => (
          <tr>
            <td class="align-middle">{item.name}</td>
            <td class="align-middle">{item.price}</td>
            <button
              className="btn btn-primary mt-4"
              onClick={() => onAdd(item)}
            >
              +
            </button>
            <td class="align-middle">{item.qty}</td>
            <button className="btn btn-danger mt-4" onClick={() => del(item)}>
              -
            </button>
            <td>
              <img
                style={{ height: "75px" }}
                src={`http://127.0.0.1:6100/${item.image}`}
              />
            </td>
            <button
              onClick={() => {
                onRemove(item);
              }}
              className="btn btn-danger mt-4"
            >
              Delete
            </button>
          </tr>
        ))}
      </table>
      <br />
      <br />
      <br />
      <p> Price is {Price}</p>
      <p>Shipment charges= {mydata}</p>
      <p>Total charges are ={total}</p>
      <button className="btn btn-warning">Checkout</button>
    </div>
  );
}

export default Cart;
