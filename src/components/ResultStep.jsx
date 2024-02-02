const ResultStep = ({formData, prev}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Result</h2>
      <p className="mb-2">
        <span className="font-bold">Name:</span> {formData.name}
      </p>
      <p className="mb-2">
        <span className="font-bold">Email:</span> {formData.email}
      </p>
      <p className="mb-2">
        <span className="font-bold">Phone:</span> {formData.phoneNo}
      </p>
      <p className="mb-2">
        <span className="font-bold">Address:</span> {formData.address}
      </p>
      <p className="mb-2">
        <span className="font-bold">City:</span> {formData.city}
      </p>
      <p className="mb-2">
        <span className="font-bold">Country:</span> {formData.country}
      </p>
      <p className="mb-2">
        <span className="font-bold">Card Number:</span> {formData.cardNumber}
      </p>
      <p className="mb-2">
        <span className="font-bold">CVV:</span> {formData.cvv}
      </p>
      <button
        type="button"
        onClick={prev}
        className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
      >
        Previous
      </button>
    </div>
  );
};

export default ResultStep;
