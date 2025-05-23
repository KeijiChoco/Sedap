import React, { useState } from 'react';

const AddCustomerForm = ({ onAddCustomer }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    loyalty: 'Bronze',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs if needed
    if (!formData.customerName.trim()) return;
    if (!formData.email.trim()) return;
    if (!formData.phone.trim()) return;

    onAddCustomer({
      ...formData,
    });

    setFormData({
      customerName: '',
      email: '',
      phone: '',
      loyalty: 'Bronze',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 max-w-md mx-auto mb-8">
      <h2 className="text-xl font-semibold mb-4">Add Customer</h2>

      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-semibold mb-1">
          Customer Name
        </label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          value={formData.customerName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Enter customer name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Enter email address"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Enter phone number"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="loyalty" className="block text-gray-700 font-semibold mb-1">
          Loyalty Level
        </label>
        <select
          id="loyalty"
          name="loyalty"
          value={formData.loyalty}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
        >
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
      </div>

      <button
        type="submit"
        onClick={() => window.location.href = "/customers"}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
      >
        Add Customer
      </button>
    </form>
  );
};  

export default AddCustomerForm;
