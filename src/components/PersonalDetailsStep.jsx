import {toast} from "react-toastify";

const PersonalDetailsStep = ({formData, setFormData, next}) => {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNumeric(formData.phoneNo)) {
      toast.error("Phone Number should contain only numbers");
      return;
    }

    if (formData.phoneNo.length < 10) {
      toast.error("Phone Number should be at least 10 characters");
      return;
    }
    next();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-zinc-400 text-white p-2 rounded hover:bg-zinc-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsStep;
