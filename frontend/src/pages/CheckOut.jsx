import React, { useState } from "react";
import { assets } from "../assets/assets";
import AddressCard from "../components/checkout-address/AddressCard";
import { Link } from "react-router-dom";
import PaymentMethod from "../components/checkout-address/PaymentMethod";
import CreditCardCard from "../components/checkout-address/CreditCardCard";

const CheckOut = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleClickAddress = (index) => {
    setSelectedAddress(index);
    console.log("Selected address index:", index);
  };

  return (
    <div className="h-screen bg-[#f2f2f2]">
      <div className="bg-white flex justify-center items-center gap-4 p-4">
        <Link to={"/cart"}>
          <button className="absolute top-3 left-6">
            <img className="h-8" src={assets.back_cart} alt="" />
          </button>
        </Link>
        <span className="">Checkout Info</span>
      </div>
      <div className="bg-white my-4">
        <div className="flex gap-3 items-center px-6 pt-4 pb-2">
          <button>
            <img src={assets.card} alt="" />
          </button>
          <span>Payment Method</span>
        </div>
        <div className="flex flex-col items-center pb-6">
          <PaymentMethod
            name="PayPal"
            img1={assets.paypal}
            isSelected={selectedPayment === "paypal"}
            onChange={() => setSelectedPayment("paypal")}
            selectedPayment={selectedPayment}
          />
          <CreditCardCard
            name="Credit Card / Debit Card"
            img1={assets.mastercard}
            img2={assets.visa}
            isSelected={selectedPayment === "creditcard"}
            onChange={() => setSelectedPayment("creditcard")}
            selectedPayment={selectedPayment}
          />
          <PaymentMethod
            name="Bakong KHQR"
            img1={assets.khqr}
            isSelected={selectedPayment === "khqr"}
            selectedPayment={selectedPayment}
            onChange={() => setSelectedPayment("khqr")}
          />
        </div>
      </div>
      <div className="bg-white pb-1">
        <div className="flex gap-3 items-center px-6 pt-4">
          <button>
            <img src={assets.gps_stroke} alt="" />
          </button>
          <span>Addresses</span>
        </div>
        <div>
          <AddressCard
            isSelected={selectedAddress === 0}
            onClick={() => handleClickAddress(0)}
          />
          <AddressCard
            isSelected={selectedAddress === 1}
            onClick={() => handleClickAddress(1)}
          />
          <div className="flex items-center justify-center gap-2 mb-4 cursor-pointer">
            <button>
              <img className="h-6" src={assets.add_address} alt="" />
            </button>
            <span className="text-[#0062BE]">Add Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
