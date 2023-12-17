import React, { useState, useLayoutEffect } from "react";
import "./Card.css";

export default function Card({
  item,
  handleClick,
  handleDecrease,
  handleIncrease,
}) {
  const {
    company,
    title,
    about,
    price,
    discount,
    oldPrice,
    img,
    img2,
    img3,
    img4,
    img5,
    quantity,
  } = item;

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="images">
        <img src={isSmallScreen ? img5 : img} alt="Product" />
        <div className="sub--images">
          <img src={img} alt="shoe" />
          <img src={img2} alt="shoe" />
          <img src={img3} alt="shoe" />
          <img src={img4} alt="shoe" />
        </div>
      </div>

      <div className="content">
        <h2>{company}</h2>
        <h1>{title}</h1>
        <p>{about}</p>
        <div className="prices">
          <div className="amount">
            <h3>${price}.00</h3>
            <h4>{discount}%</h4>
          </div>
          <div>
            <h5 className="promo">${oldPrice}.00</h5>
          </div>
        </div>
        <div className="buttons">
          <button className="count">
            <svg
              onClick={() => handleDecrease(item)}
              className="countsvg"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="4"
              viewBox="0 0 12 4"
              fill="none"
            >
              <path
                d="M11.3571 3.33214C11.7134 3.33214 12 3.04554 12 2.68929V0.642857C12 0.286607 11.7134 0 11.3571 0H0.642857C0.286607 0 0 0.286607 0 0.642857V2.68929C0 3.04554 0.286607 3.33214 0.642857 3.33214H11.3571Z"
                fill="#FF7E1B"
              />
            </svg>
            <span>{quantity}</span>
            <svg
              onClick={() => handleIncrease(item)}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M12 7.02321V4.97679C12 4.62054 11.7134 4.33393 11.3571 4.33393H7.66607V0.642857C7.66607 0.286607 7.37946 0 7.02321 0H4.97679C4.62054 0 4.33393 0.286607 4.33393 0.642857V4.33393H0.642857C0.286607 4.33393 0 4.62054 0 4.97679V7.02321C0 7.37946 0.286607 7.66607 0.642857 7.66607H4.33393V11.3571C4.33393 11.7134 4.62054 12 4.97679 12H7.02321C7.37946 12 7.66607 11.7134 7.66607 11.3571V7.66607H11.3571C11.7134 7.66607 12 7.37946 12 7.02321Z"
                fill="#FF7E1B"
              />
            </svg>
          </button>
          <button className="add-to-cart" onClick={() => handleClick(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z"
                fill="white"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
