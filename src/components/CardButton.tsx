const CardButton = () => {
  return (
    <div className="">
      <button className="flex border-2 border-gray-400 p-2 bg-white rounded-full justify-center items-center space-x-2">
        <img  src={`${process.env.PUBLIC_URL}/assets/images/icon-add-to-cart.svg`} alt="Add to Cart"></img>
        <h3 className="text-sm font-semibold">Add To Cart</h3>
      </button>
    </div>
  );
};

export default CardButton;
