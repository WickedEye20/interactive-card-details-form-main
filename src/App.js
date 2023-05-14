import card_front_img from "./assets/images/bg-card-front.png";
import card_logo from "./assets/images/card-logo.svg";
import card_back_img from "./assets/images/bg-card-back.png";
import "./assets/css/style.css";
import { useState } from "react";

function App() {
  const [cardInfo, setcardInfo] = useState({
    cardName: "Name",
    cardNumber: "0000 0000 0000 0000",
    exp_mm: "mm",
    exp_yy: "yy",
    cvc: "000",
  });

  const onchange = (e) => {
    let card_num = document.getElementById("card_number").value;
    let card_name = document.getElementById("card_name").value;
    let exp_mm = document.getElementById("exp_mm").value;
    let exp_yy = document.getElementById("exp_yy").value;
    let cvc = document.getElementById("cvc").value;

    card_num = card_num
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setcardInfo((values) => ({
      ...values,
      cardNumber: card_num,
      cardName: card_name,
      exp_mm: exp_mm,
      exp_yy: exp_yy,
      cvc: cvc,
    }));
  };

  return (
    <main className="main_content_grid">
      <div className="card_previews grid_content">
        <div className="card_front">
          <img
            className="card_front_img"
            src={card_front_img}
            alt="Card Front"
          />
          <img
            className="card_front_logo"
            src={card_logo}
            alt="Card Logo"
          ></img>
          <span className="card_front_number">{cardInfo.cardNumber}</span>
          <span className="card_front_name">{cardInfo.cardName}</span>
          <span className="card_front_exp">
            {cardInfo.exp_mm}/{cardInfo.exp_yy}
          </span>
        </div>
        <div className="card_back">
          <img src={card_back_img} alt="Card Back" className="card_back_img" />
          <span className="card_back_cvv">{cardInfo.cvc}</span>
        </div>
      </div>
      <form action="" className="form_main grid_content">
        <div className="form_control">
          <label htmlFor="" className="form_labels">
            Cardholder Name
          </label>
          <input
            type="text"
            name="card_name"
            id="card_name"
            placeholder="e.g. Jane Appleseed"
            onChange={onchange}
          />
        </div>
        <div className="form_control">
          <label htmlFor="" className="form_labels">
            Card Number
          </label>
          <input
            type="text"
            name="card_number"
            id="card_number"
            maxLength={16}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={onchange}
          />
        </div>
        <div className="form_control form_grid">
          <div className="form_control_inner">
            <label htmlFor="" className="form_labels">
              Exp. Date (MM/YY)
            </label>
            <input
              type="text"
              name=""
              maxLength={2}
              id="exp_mm"
              placeholder="MM"
              onChange={onchange}
            />
            <input
              type="text"
              name=""
              id="exp_yy"
              maxLength={2}
              placeholder="YY"
              onChange={onchange}
            />
          </div>
          <div className="form_control_inner">
            <label htmlFor="" className="form_labels">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              maxLength={3}
              placeholder="e.g. 123"
              onChange={onchange}
            />
          </div>
        </div>
        <button type="submit" className="confirm_btn">
          Confirm
        </button>
      </form>
    </main>
  );
}

export default App;
