export default interface CartItemProps {
    object: any,
    handleIncreaseQuantity: (value: any) => void,
    handleDecreaseQuantity: (value: any) => void,
    handleDeleteItem: (id: any) => void,
    enableButton?: boolean
}