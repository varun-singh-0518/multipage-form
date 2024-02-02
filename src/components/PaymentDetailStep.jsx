import {toast} from "react-toastify";

const PaymentDetailsStep = ({formData, setFormData, next, prev}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNumeric(formData.cardNumber)) {
      toast.error("Card Number should contain only numbers");
      return;
    }

    if (formData.cardNumber.length < 10) {
      toast.error("Card Number should be at least 10 characters");
      return;
    }

    if (!isNumeric(formData.cvv)) {
      toast.error("CVV should contain only numbers");
      return;
    }

    if (formData.cvv.length > 4) {
      toast.error("CVV should not be more than 4 characters");
      return;
    }
    next();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 3: Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Number:
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            CVV:
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
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

export default PaymentDetailsStep;
