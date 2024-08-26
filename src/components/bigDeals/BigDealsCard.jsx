/**
 * A component that renders a single big deal card.
 * @param {Object} props The component props.
 * @param {string} props.imageUrl The URL of the image to be rendered.
 * @param {string} props.imageAlt The alt text for the image.
 * @param {string} props.children The text to be rendered inside the card.
 * @param {string} props.buttonText The text for the button.
 * @param {number} [props.discount] The discount percentage to be rendered.
 * @returns {ReactElement} The JSX element to be rendered.
 */
function BigDealsCard({
  imageUrl,
  imageAlt,
  children,
  buttonText,
  discount,
}) {
  // Render the discount text if it is provided
  const discountElement = (
    <>
      <div className="mr-2 leading-3">
        up <br /> to
      </div>{" "}
      <div className="text-lg font-bold">
        {discount}
        <small className="align-top">%</small>
      </div>
    </>
  );

  // Render the button text with an arrow icon
  const buttonTextElement = (
    <>
      {discount ? discountElement : (
        <span className="font-bold">{buttonText}</span>
      )}
      <span className="ml-2 w-4 h-4 inline-flex justify-center items-center rounded-full bg-yellow-300 text-white">
        &gt;
      </span>
    </>
  );

  return (
    <div className="flex justify-center gap-4 py-5  items-center bg-gray-200  ">
      {/* image */}
      <div className="w-1/2">
        <img src={imageUrl} alt={imageAlt} className="w-full" />
      </div>
      {/* text */}
      <div className="w">
        <p className="uppercase ">{children}</p>
        <button className="text-center flex justify-center items-center">
          {buttonTextElement}
        </button>
      </div>
    </div>
  );
}

export default BigDealsCard;

