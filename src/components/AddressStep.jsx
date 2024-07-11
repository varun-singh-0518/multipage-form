import  { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddressStep = ({ formData, setFormData, next, prev }) => {
  useEffect(() => {
    // Retrieve data from local storage and set initial form data if available
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Store updated form data in local storage
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const isAlphabetic = (value) => /^[a-zA-Z]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAlphabetic(formData.city.trim())) {
      toast.error('City should contain only alphabets');
      return;
    }

    if (!isAlphabetic(formData.state.trim())) {
      toast.error('State should contain only alphabets');
      return;
    }

    next();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 2: Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address Line 1:</label>
          <input
            type="text"
            name="address_1"
            value={formData.address_1}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address Line 2:</label>
          <input
            type="text"
            name="address_2"
            value={formData.address_2}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
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
          <label className="block text-gray-700 text-sm font-bold mb-2">State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Zip Code:</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressStep;
