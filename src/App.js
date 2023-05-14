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
    cardNameErr: false,
    cardNumberErr: false,
    exp_mmErr: false,
    exp_yyErr: false,
    cvcErr: false,
  });

  let card_num, card_name, exp_mm, exp_yy, cvc;

  const onchange = (e) => {
    card_num = document.getElementById("card_number").value;
    card_name = document.getElementById("card_name").value;
    exp_mm = document.getElementById("exp_mm").value;
    exp_yy = document.getElementById("exp_yy").value;
    cvc = document.getElementById("cvc").value;

    if (isNaN(card_num)) {
      setcardInfo((values) => ({
        ...values,
        cardNumberErr: true,
      }));
    }else if(!isNaN(card_num)){
      setcardInfo((values) => ({
        ...values,
        cardNumberErr: false,
      }));
    }

    if (isNaN(exp_mm)) {
      setcardInfo((values) => ({
        ...values,
        exp_mmErr: true,
      }));
    }else if(!isNaN(exp_mm)){
      setcardInfo((values) => ({
        ...values,
        exp_mmErr: false,
      }));
    }

    if (isNaN(exp_yy)) {
      setcardInfo((values) => ({
        ...values,
        exp_yyErr: true,
      }));
    }else if(!isNaN(exp_yy)){
      setcardInfo((values) => ({
        ...values,
        exp_yyErr: false,
      }));
    }

    if (isNaN(cvc)) {
      setcardInfo((values) => ({
        ...values,
        cvcErr: true,
      }));
    }else if(!isNaN(cvc)){
      setcardInfo((values) => ({
        ...values,
        cvcErr: false,
      }));
    }


    card_num = card_num
      .replace(/(.{4})/g, "$1 ")
      .trim();

    if (card_num) {
      setcardInfo((values) => ({
        ...values,
        cardNumber: card_num,
      }));
    }

    if (card_name) {
      setcardInfo((values) => ({
        ...values,
        cardName: card_name,
      }));
    }

    if (exp_mm) {
      setcardInfo((values) => ({
        ...values,
        exp_mm: exp_mm,
      }));
    }

    if (exp_yy) {
      setcardInfo((values) => ({
        ...values,
        exp_yy: exp_yy,
      }));
    }

    if (cvc) {
      setcardInfo((values) => ({
        ...values,
        cvc: cvc,
      }));
    }
  };

  const onkeypress = (e) => {

    if (e.key === "Backspace" || e.key === "Delete") {
      if (document.activeElement.name === "card_number") {
        setcardInfo((values) => ({
          ...values,
          cardNumber: "0000 0000 0000 0000",
        }));
      }
      if (document.activeElement.name === "card_name") {
        setcardInfo((values) => ({
          ...values,
          cardName: "Name",
        }));
      }
      if (document.activeElement.name === "exp_mm") {
        setcardInfo((values) => ({
          ...values,
          exp_mm: "mm",
        }));
      }
      if (document.activeElement.name === "exp_yy") {
        setcardInfo((values) => ({
          ...values,
          exp_yy: "yy",
        }));
      }
      if (document.activeElement.name === "cvc") {
        setcardInfo((values) => ({
          ...values,
          cvc: "000",
        }));
      }
    }
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
            onKeyDown={onkeypress}
          />
        </div>
        <div className={`form_control ${cardInfo.cardNumberErr ? "form_error" : ""}`}>
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
            onKeyDown={onkeypress}
          />
          <span>Wrong format, numbers only</span>
        </div>
        <div className="form_control form_grid">
          <div className={`form_control_inner ${cardInfo.exp_mmErr || cardInfo.exp_yyErr ? "form_error" : ""}`}>
            <label htmlFor="" className="form_labels">
              Exp. Date (MM/YY)
            </label>
            <input
              type="text"
              name="exp_mm"
              maxLength={2}
              id="exp_mm"
              placeholder="MM"
              onChange={onchange}
              onKeyDown={onkeypress}
            />
            <input
              type="text"
              name="exp_yy"
              id="exp_yy"
              maxLength={2}
              placeholder="YY"
              onChange={onchange}
              onKeyDown={onkeypress}
            />
            <span>Wrong format, numbers only</span>
          </div>
          <div className={`form_control_inner ${cardInfo.cvcErr ? "form_error" : ""}`}>
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
              onKeyDown={onkeypress}
            />
            <span>Wrong format, numbers only</span>
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
