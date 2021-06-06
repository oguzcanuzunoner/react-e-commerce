import React from "react";
import "./Basket.css";
import BuyButton from "../Buttons/Buy/Buy";
function Basket({ basketProducts }) {
  const itemsPrice = basketProducts.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );
  const taxPrice = itemsPrice * 0.08;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside>
      <div className="block">
        <div>{basketProducts.length === 0 && <div>Sepet Boş</div>}</div>
        {basketProducts.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1">{item.name}</div>
            <div className="col-1">
              {item.quantity} x ₺{item.price}
            </div>
          </div>
        ))}
        {basketProducts.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Ürün Fiyatı</div>
              <div className="col-1 text-right">₺{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Vergi</div>
              <div className="col-1 text-right">₺{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Kargo Ücreti</div>
              <div className="col-1 text-right">
                ₺{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Toplam Tutar</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₺{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <BuyButton onClick={() => alert("Satın Alındı!")}> Satın AL! </BuyButton>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Basket;
