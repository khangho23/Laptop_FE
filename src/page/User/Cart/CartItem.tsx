import { FaMinus, FaPlus, FaTrash, FaHeart } from "react-icons/fa"
import { formatter } from "src/util/formatCurrency";
import CartItemProps from "src/common/types/CartItemProps";

const CartItem = ({ object, handleIncreaseQuantity, handleDecreaseQuantity, handleDeleteItem, enableButton }: CartItemProps) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          {/* Image */}
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img src={object.product.logo} alt="" className="w-100" />
            <a href="#!">
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
            </a>
          </div>
          {/* Image */}
        </div>
        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* Data */}
          <p><strong>{object.product.name}</strong></p>
          <p>Màu sắc: {object.product.color.name}</p>
          <button type="button" onClick={() => { handleDeleteItem(object.cartId); }} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
            <FaTrash />
          </button>
          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
            <FaHeart />
          </button>
          {/* Data */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          {/* Quantity */}
          <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
            <button
              onClick={() => {
                if (object.quantity <= 1) handleDeleteItem(object.cartId);

                handleDecreaseQuantity(object.quantity)
              }
              }
              className="btn btn-primary px-3 me-2 h-50"
            >
              <FaMinus />
            </button>
            <div className="form-outline">
              <input id="form1" min={0} name="quantity" value={object.quantity} type="number" className="form-control" disabled />
              <label className="form-label" htmlFor="form1">Số lượng</label>
            </div>
            <button
              onClick={() => { handleIncreaseQuantity(object.quantity) }}
              className="btn btn-primary px-3 ms-2 h-50"
            >
              <FaPlus />
            </button>
          </div>
          {/* Quantity */}
          {/* Price */}
          <p className="text-start text-md-center">
            <strong>{formatter.format(object.product.price)}</strong>
          </p>
          {/* Price */}
        </div>
      </div>
      <hr className="my-4" />
    </>
  )
}

export default CartItem;