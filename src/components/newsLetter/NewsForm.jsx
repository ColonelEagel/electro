/**
 * Newsletter Form Component
 *
 * A simple form component that allows users to enter their email address and
 * sign up for the newsletter.
 *
 * @returns {JSX.Element} The JSX element to be rendered.
 */
function NewsForm() {
  return (
    <form className="inline-flex  rounded-full ">
      {/* Input field for email address */}
      <input
        type="text"
        placeholder="Enter your email address"
        className="border-0 px-8 py-3  w-full outline-none rounded-l-full flex-1 "
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-gray-700 text-white px-9 py-1  rounded-r-full  capitalize"
      >
        Sign up
      </button>
    </form>
  );
}

export default NewsForm;

