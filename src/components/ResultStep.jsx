

const ResultStep = ({ formData, prev }) => {
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
        <span className="font-bold">Address Line 1:</span> {formData.address_1}
      </p>
      <p className="mb-2">
        <span className="font-bold">Address Line 2:</span> {formData.address_2}
      </p>
      <p className="mb-2">
        <span className="font-bold">City:</span> {formData.city}
      </p>
      <p className="mb-2">
        <span className="font-bold">State:</span> {formData.state}
      </p>
      <p className="mb-2">
        <span className="font-bold">Zip Code:</span> {formData.zipcode}
      </p>
      <button
        type="button"
        onClick={prev}
        className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default ResultStep;
