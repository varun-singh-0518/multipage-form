import {toast} from "react-toastify";

const AddressStep = ({formData, setFormData, next, prev}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const isAlphabetic = (value) => /^[a-zA-Z]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAlphabetic(formData.city.trim())) {
      toast.error("City should contain only alphabets");
      return;
    }

    if (!isAlphabetic(formData.country.trim())) {
      toast.error("Country should contain only alphabets");
      return;
    }

    next();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 2: Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Country:
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-zinc-400 text-white p-2 rounded hover:bg-zinc-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressStep;
