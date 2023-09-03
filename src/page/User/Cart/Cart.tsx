import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import UserLayout from "src/components/Layout/UserLayout";
import { useFetch } from "src/util/CustomHook";
import { formatter } from "src/util/formatCurrency";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem"

const Cart = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(['user']);
  const [data, setData] = useState<any>();
  const [quantity, setQuantity] = useState(1);

  const init = async () => {
    const { data: result } = await useFetch.get("/api/cart", { params: { userId: cookie.user.id } });
    setData(result);
  }

  useEffect(() => {
    if (cookie.user == null) {
      navigate("/login");
    } else {
      init();
    }
  }, []);

  const handleDeleteItem = async (id: any) => {
    const { data: result } = await useFetch.get("/api/cart/" + id);
    if (result === 1) {
      init();
    }
  }

  const sum = (a: any, b: any) => {
    return a + b;
  }

  const saveOrder = async (e: any) => {
    // e.preventDefault();
    const param = {
      customerId: cookie.user.id,
      place: "",
      order_details: [
        ...data
      ]
    }
    const { data: result } = await useFetch.post("/api/order/save", param);
    if (result === 1) {
      navigate("/my-account");
    }
  }

  const updateCart = async (data: any) => {
    data = { ...data, quantity: quantity, userId: cookie.user.id };
    const { data: result } = await useFetch.post("/api/cart/save", data);
    console.log(result)
  }

  console.log(data);
  const total = data?.length === 0 ? 0 : data?.map((s: any) => s.quantity * s.product.price).reduce(sum);

  return (
    <UserLayout>
      <div className="container">
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Giỏ hàng - {data?.length} sản phẩm</h5>
                  </div>
                  <div className="card-body">
                    {
                      data?.map((s: any) => {
                        const handleIncrease = (value: any) => {
                          setQuantity(s.quantity++)
                          // updateCart(data)
                        }

                        const handleDecrementQuantity = () => {
                          if (s.quantity <= 1) return;

                          setQuantity(s.quantity--);
                        };

                        return <CartItem
                          enableButton={false} handleIncreaseQuantity={handleIncrease}
                          handleDecreaseQuantity={handleDecrementQuantity} object={s} handleDeleteItem={handleDeleteItem}
                        />
                      })
                    }
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p><strong>Chúng tôi chấp nhận</strong></p>
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp" alt="PayPal acceptance mark" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Hóa đơn</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {
                        data?.map((s: any) => {
                          return <>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Sản phẩm
                              <span>{s.product.name}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Giá
                              <span>{formatter.format(s.product.price)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Số lượng
                              <span>{s.quantity}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              Thành tiền
                              <span>{formatter.format(s.quantity * s.product.price)}</span>
                            </li>
                          </>
                        })
                      }
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Tổng đơn hàng</strong>
                          <strong>
                            <p className="mb-0">(Bao gồm VAT)</p>
                          </strong>
                        </div>
                        <span><strong>{formatter.format(total || 0)}</strong></span>
                      </li>
                    </ul>
                    <button type="button" onClick={saveOrder} className="btn btn-primary btn-lg btn-block">
                      Đi tới thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </UserLayout>
  )
}

export default Cart;