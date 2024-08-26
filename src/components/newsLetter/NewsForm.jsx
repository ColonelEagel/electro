function NewsForm() {
  return (
    <form className="inline-flex  rounded-full ">
      <input
        type="text"
        placeholder="Enter your email address"
        className="border-0 px-8 py-3  w-full outline-none rounded-l-full flex-1 "
      />

      <button
        type="submit"
        className="bg-gray-700 text-white px-9 py-1  rounded-r-full  capitalize"
      >
        sign up
      </button>
    </form>
  );
}

export default NewsForm;
