import React, { useState } from 'react';

const AddOrderForm = ({ onAddOrder }) => {
  const [formData, setFormData] = useState({
    orderId: '',
    status: 'Pending',
    totalPrice: '',
    orderDate: '',
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
    // Basic validation
    if (!formData.orderId.trim()) return;
    if (!formData.totalPrice.trim()) return;
    if (!formData.orderDate.trim()) return;

    // Convert orderId and totalPrice to numbers if needed
    const newOrder = {
      orderId: Number(formData.orderId),
      status: formData.status,
      totalPrice: Number(formData.totalPrice),
      orderDate: formData.orderDate,
    };

    onAddOrder(newOrder);

    setFormData({
      orderId: '',
      status: 'Pending',
      totalPrice: '',
      orderDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 max-w-md mx-auto mb-8">
      <h2 className="text-xl font-semibold mb-4">Add Order</h2>

      <div className="mb-4">
        <label htmlFor="orderId" className="block text-gray-700 font-semibold mb-1">
          Order ID
        </label>
        <input
          id="orderId"
          name="orderId"
          type="number"
          value={formData.orderId}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Enter order ID"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-semibold mb-1">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="totalPrice" className="block text-gray-700 font-semibold mb-1">
          Total Price
        </label>
        <input
          id="totalPrice"
          name="totalPrice"
          type="number"
          value={formData.totalPrice}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Enter total price"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="orderDate" className="block text-gray-700 font-semibold mb-1">
          Order Date
        </label>
        <input
          id="orderDate"
          name="orderDate"
          type="date"
          value={formData.orderDate}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        onClick={() => window.location.href = "/orders"}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
      >
        Add Order
      </button>
    </form>
  );
};

export default AddOrderForm;