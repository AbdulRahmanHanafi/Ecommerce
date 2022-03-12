import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { CounterPlus, CounterMinus } from "../state/actionCreator";
const Cart = () => {
  let navigate = useNavigate();
  const cartData = useSelector((state) => state.items.cartData);
  const dispatch = useDispatch();
  //console.log(cartData);
  return (
    <>
      <div className="body-content">
        <div className="cart">
          <ul>
            {cartData.slice(1).map((item, index) => {
              return (
                <li id="row" key={index}>
                  <div className="item-cartPage">{item.name}</div>
                  <div className="item-cartPage">
                    <img className="image" src={item.img} alt="#" />
                  </div>
                  <div className="item-cartPage">
                    <button
                      onClick={() =>
                        dispatch(
                          CounterMinus(index + 1, item.pathName, item.index)
                        )
                      }
                    >
                      -
                    </button>
                    <h4>{item.quantity}</h4>
                    <button
                      onClick={() =>
                        dispatch(
                          CounterPlus(index + 1, item.pathName, item.index)
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="item-cartPage">price : {item.price}$</div>
                  <div className="item-cartPage">
                    total price : {item.price * item.quantity}$
                  </div>
                  <button className="item-cartPage">
                    <DeleteOutlineIcon />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>total price : 112000$</div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
};

export default Cart;
