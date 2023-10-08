import React, { useState } from 'react'
import "../styles/Form.css"
import image from "../assets/Rectangle 1.png"

const Form = ({setData}) => {
    let [cardHolderName, setCardHolderName] = useState('');
    let [cardHolderNumber, setCardHolderNumber] = useState('');
    let [expiryDateMonth, setExpiryDateMonth] = useState('');
    let [expiryDateYear, setExpiryDateYear] = useState('');
    let [CVCNumber, setCVCNumber] = useState('');

    let [successMessage, setSuccessMessage] = useState('');

    let [errorName, setErrorName] = useState('');
    let [errorNumber, setErrorNumber] = useState('');
    let [errorMonth, setErrorMonth] = useState('');
    let [errorYear, setErrorYear] = useState('');
    let [errorCVC, setErrorCVC] = useState('');

    function validateCardName(){
        if (cardHolderName.length == 0) {
            setErrorName("CardHolder Name is Required");
            return true;
        }
        else{
            let numbers = ["0","1","2","3","4","5","6","7","8","9"];
            for(let i=0;i<cardHolderName.length;i++)
            {
                console.log(cardHolderName[i]);
                if(numbers.includes(cardHolderName[i]))
                {
                    setCardHolderName("");
                    setErrorName("Numbers are not allowed");
                    return true;
                }
            }
        }
        setErrorName("");
        return false;
    }

    function validateCardNumber() {
        if (cardHolderNumber.length == 0) {
            setErrorNumber("Card Number is Required");
            return true;
        }
        else if(cardHolderNumber.length < 16){
            setCardHolderNumber("");
            setErrorNumber("Card Number should be 16 characters long");
            return true;
        }
        else{
            for(let i =0;i<cardHolderNumber.length;i++){
                let charCode = cardHolderNumber.charCodeAt(i);
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    setCardHolderNumber("");
                    setErrorNumber("Characters not allowed"); 
                    return true;

                }
            }
        }
        setErrorNumber("");
        return false;
    }

    function validateCardMonth() {
        if (expiryDateMonth.length == 0) {
            setErrorMonth("Month Required");
            return true;
        }
        else if(expiryDateMonth.length < 2){
            setErrorMonth("Month should be 2 characters long");
            setExpiryDateMonth("");
            return true;
        }
        else{
            for(let i =0;i<expiryDateMonth.length;i++){
                let charCode = expiryDateMonth.charCodeAt(i);
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    setErrorMonth("Characters not allowed");
                    setExpiryDateMonth("");
                    return true;

                }
            }
        }
        setErrorMonth("");
        return false;
    }

    function validateCardYear() {
        if (expiryDateYear.length == 0) {
            setErrorYear("Year Required");
            return true;
        }
        else if(expiryDateYear.length < 2){
            setErrorYear("Year should be 2 characters long");
            setExpiryDateYear("");
            return true;
        }
        else{
            for(let i =0;i<expiryDateYear.length;i++){
                let charCode = expiryDateYear.charCodeAt(i);
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    setErrorYear("Characters not allowed");
                    setExpiryDateYear("");
                    return true;

                }
            }
        }
        setErrorYear("");
        return false;
    }

    function validateCardCVC() {
        if (CVCNumber.length == 0) {
            setErrorCVC("CVC is Required");
            return true;
        }
        else if(CVCNumber.length < 3){
            setErrorCVC("CVC should be 3 characters long");
            setCVCNumber("");
            return true;
        }
        else{
            for(let i =0;i<CVCNumber.length;i++){
                let charCode = CVCNumber.charCodeAt(i);
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    setErrorCVC("Characters not allowed"); 
                    setCVCNumber("");
                    return true;

                }
            }
        }
        setErrorCVC("");
        return false;
    }

    function displaySuccessMessage(){
       return !validateCardName() && !validateCardNumber() && !validateCardMonth() && !validateCardYear() && !validateCardCVC()
    }
    

    return (
        <div className='form-container'>

            <img src={image} alt="" className='img' />

            <div className='rightside-part'>
                <h3 style={{marginBottom:"5rem",color:"green"}}>{successMessage}</h3>
                <form className="form" onSubmit={(e) => {
                    e.preventDefault();

                    if (validateCardName() && validateCardNumber() && validateCardMonth() && validateCardYear() && validateCardCVC()) {
                        return;
                    }
                    
                    if (displaySuccessMessage()) {
                        setSuccessMessage("Congratulations!!! Credit Card generated Successfully.");
                        let obj ={
                            name:cardHolderName,
                            number:cardHolderNumber,
                            month:expiryDateMonth + "/",
                            year:expiryDateYear,
                            cvc:CVCNumber
                        }
                        setData(obj);

                        setCardHolderName("");
                        setCardHolderNumber("");
                        setExpiryDateMonth("");
                        setExpiryDateYear("");
                        setCVCNumber("");

                        setErrorName("");
                        setErrorNumber("");
                        setErrorMonth("");
                        setErrorYear("");
                        setErrorCVC("");

                    }

                    
                }}>
                    <section className='cardholder-name'>
                        <label htmlFor="cardholder_name">CARDHOLDER NAME</label><br />
                        <input type="text" name="cardholder-name" value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} id="cardholder-name" placeholder='e.g. Jane Appleseed' />
                        <p style={{ color: "red" }}>{errorName}</p>
                    </section>

                    <section className='card-number'>
                        <label htmlFor="card_number">CARD NUMBER</label><br />
                        <input type="text" name="card-number" id="card-number" value={cardHolderNumber} onChange={(e) => setCardHolderNumber(e.target.value)} placeholder='e.g. 1234 5678 9123 0000' maxLength="16" />
                        <p style={{ color: "red" }}>{errorNumber}</p>
                    </section>

                    <section className='card-expiry-dates'>
                        <div>
                            <label htmlFor="expiry_date">EXP.DATE (MM/YY)</label><br />
                            <input type="text" name="expiry-date" className='expiry-date' value={expiryDateMonth} onChange={(e) => setExpiryDateMonth(e.target.value)} id="expiry-date-month" maxLength="2" placeholder='MM' />
                            
                            <input type="text" name="expiry-date" className='expiry-date' value={expiryDateYear} onChange={(e) => setExpiryDateYear(e.target.value)} id="expiry-date-year" maxLength="2" placeholder='YY' />
                            <p style={{ color: "red" }}>{errorMonth}</p>
                            <p style={{marginTop:"5px", color: "red" }}>{errorYear}</p>

                        </div>
                        <div style={{marginLeft:"5px"}}>
                            <label htmlFor="cvc">CVC</label><br />
                            <input  type="text" name="cvc" id="cvc" value={CVCNumber} onChange={(e) => setCVCNumber(e.target.value)} placeholder='e.g. 123' maxLength="3" />
                            <p style={{ color: "red" }}>{errorCVC}</p>
                        </div>
                    </section>

                    <section className='button-container'>
                        <button className='confirm-btn'>Confirm</button>
                    </section>
                </form>

            </div>
        </div>

    )
}

export default Form
