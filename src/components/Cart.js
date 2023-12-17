import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const handleRemove = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  return (
    <div className="cart">
      <h1 className="cart-tittle">Cart</h1>
      <div className="border-cart"></div>

      {cart.length === 0 ? (
        <p className="cart-p">Your cart is empty.</p>
      ) : (
        <div className="added">
          {cart?.map((item) => (
            <div className="cart-list" key={item.id}>
              <div className="list">
                <span className="cart-img">
                  <img src={item.img} alt="shoe" />
                </span>
                <div>
                  <p className="font">{item.title}</p>
                  <div className="price">
                    <p className="font">
                      ${item.price} x {item.quantity || 1}
                    </p>
                    {cart.length > 0 && (
                      <div className="cart-summary">
                        <p className="total">${calculateTotal()}</p>
                      </div>
                    )}
                  </div>
                </div>
                <svg
                  onClick={() => handleRemove(item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z"
                    fill="#C3CAD9"
                  />
                </svg>
              </div>
            </div>
          ))}
          <button className="checkoout">Checkout</button>
        </div>
      )}
    </div>
  );
}
