import React, { useEffect, useState } from 'react';
import customersData from '../assets/customers.json';
import PageHeader from "../components/PageHeader";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  const totalPages = Math.ceil(customers.length / customersPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const loyaltyColors = {
    Bronze: "text-yellow-800",
    Silver: "text-gray-500",
    Gold: "text-yellow-600"
  };

  return (
    <div className="px-4">
      <PageHeader title="Customer List" breadcrumb={["Customers", "Customer List"]}>
        <button onClick={() => window.location.href = "/customerform"} className="bg-green-600 text-white px-4 py-2 rounded-lg mr-2">Add Customer</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mr-2">Export</button>
        <button onClick={() => window.location.href = "/"} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Kembali</button>
      </PageHeader>

      <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Customers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Loyalty</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentCustomers.map((customer) => (
                <tr key={customer.customerId} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{customer.customerId}</td>
                  <td className="px-4 py-2">{customer.customerName}</td>
                  <td className="px-4 py-2">{customer.email}</td>
                  <td className="px-4 py-2">{customer.phone}</td>
                  <td className={`px-4 py-2 font-semibold ${loyaltyColors[customer.loyalty]}`}>
                    {customer.loyalty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === 1 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
