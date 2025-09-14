import React, { useState, useEffect } from 'react';
import { Download, Plus, Edit, Trash2, User, FileText, Calendar, DollarSign } from 'lucide-react';

const OrderGenerator = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Acme Coffee Roasters',
      email: 'orders@acmecoffee.com',
      address: '123 Bean Street, Coffee City, CC 12345',
      phone: '(555) 123-4567'
    },
    {
      id: 2,
      name: 'Mountain View Cafe',
      email: 'procurement@mountaincafe.com', 
      address: '456 Summit Ave, Peak Town, PT 67890',
      phone: '(555) 987-6543'
    }
  ]);

  const [orders, setOrders] = useState([]);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);

  const [customerForm, setCustomerForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const [orderForm, setOrderForm] = useState({
    customerId: '',
    orderNumber: '',
    date: new Date().toISOString().split('T')[0],
    items: [{ product: '', quantity: 1, price: 0 }],
    notes: ''
  });

  const coffeeProducts = [
    'Ethiopian Single Origin - Light Roast',
    'Colombian Supreme - Medium Roast', 
    'French Roast - Dark Roast',
    'Espresso Blend - Extra Dark',
    'Decaf House Blend - Medium Roast',
    'Cold Brew Concentrate',
    'JavaTRAX Signature Blend'
  ];

  // Generate order number
  const generateOrderNumber = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `JT${year}${month}${day}-${random}`;
  };

  // Customer management
  const handleCustomerSubmit = () => {
    if (!customerForm.name || !customerForm.email) return;
    
    if (editingCustomer) {
      setCustomers(customers.map(c => 
        c.id === editingCustomer.id ? { ...customerForm, id: editingCustomer.id } : c
      ));
      setEditingCustomer(null);
    } else {
      const newCustomer = {
        ...customerForm,
        id: Math.max(...customers.map(c => c.id), 0) + 1
      };
      setCustomers([...customers, newCustomer]);
    }
    setCustomerForm({ name: '', email: '', address: '', phone: '' });
    setShowCustomerForm(false);
  };

  const editCustomer = (customer) => {
    setCustomerForm(customer);
    setEditingCustomer(customer);
    setShowCustomerForm(true);
  };

  const deleteCustomer = (id) => {
    if (confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  // Order management
  const handleOrderSubmit = () => {
    if (!orderForm.customerId) return;
    
    const customer = customers.find(c => c.id === parseInt(orderForm.customerId));
    const total = orderForm.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    
    const newOrder = {
      ...orderForm,
      id: Math.max(...orders.map(o => o.id), 0) + 1,
      orderNumber: orderForm.orderNumber || generateOrderNumber(),
      customerName: customer?.name || '',
      total: total
    };

    if (editingOrder) {
      setOrders(orders.map(o => o.id === editingOrder.id ? { ...newOrder, id: editingOrder.id } : o));
      setEditingOrder(null);
    } else {
      setOrders([...orders, newOrder]);
    }

    setOrderForm({
      customerId: '',
      orderNumber: '',
      date: new Date().toISOString().split('T')[0],
      items: [{ product: '', quantity: 1, price: 0 }],
      notes: ''
    });
    setShowOrderForm(false);
  };

  const addOrderItem = () => {
    setOrderForm({
      ...orderForm,
      items: [...orderForm.items, { product: '', quantity: 1, price: 0 }]
    });
  };

  const updateOrderItem = (index, field, value) => {
    const newItems = orderForm.items.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setOrderForm({ ...orderForm, items: newItems });
  };

  const removeOrderItem = (index) => {
    setOrderForm({
      ...orderForm,
      items: orderForm.items.filter((_, i) => i !== index)
    });
  };

  // PDF Generation
  const generatePDF = (order) => {
    const customer = customers.find(c => c.id === parseInt(order.customerId));
    
    // Create PDF content as HTML
    const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JavaTRAX Order ${order.orderNumber}</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 3px solid #8B4513; padding-bottom: 20px; margin-bottom: 30px; }
        .logo { font-size: 2.5em; font-weight: bold; color: #8B4513; margin-bottom: 10px; }
        .tagline { color: #666; font-style: italic; }
        .order-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #8B4513; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f5f5f5; font-weight: bold; }
        .total-row { font-weight: bold; background-color: #f9f9f9; }
        .footer { margin-top: 40px; text-align: center; color: #666; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">☕ JavaTRAX-3000</div>
        <div class="tagline">Premium Coffee Solutions</div>
    </div>
    
    <div class="order-info">
        <div>
            <strong>Order #: ${order.orderNumber}</strong><br>
            <strong>Date: ${new Date(order.date).toLocaleDateString()}</strong>
        </div>
        <div style="text-align: right;">
            <strong>Total: ${order.total.toFixed(2)}</strong>
        </div>
    </div>
    
    <div class="section">
        <h3>Customer Information</h3>
        <strong>${customer?.name || 'N/A'}</strong><br>
        ${customer?.address || ''}<br>
        ${customer?.phone || ''}<br>
        ${customer?.email || ''}
    </div>
    
    <div class="section">
        <h3>Order Details</h3>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${order.items.map(item => `
                    <tr>
                        <td>${item.product}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.price).toFixed(2)}</td>
                    </tr>
                `).join('')}
                <tr class="total-row">
                    <td colspan="3"><strong>Total Amount</strong></td>
                    <td><strong>${order.total.toFixed(2)}</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    ${order.notes ? `
        <div class="section">
            <h3>Notes</h3>
            <p>${order.notes}</p>
        </div>
    ` : ''}
    
    <div class="footer">
        <p>Thank you for choosing JavaTRAX-3000!</p>
        <p>Visit us at java-trax.com | Email: orders@java-trax.com</p>
    </div>
</body>
</html>`;

    // Create and download PDF
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `JavaTRAX_Order_${order.orderNumber}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">☕ JavaTRAX Order Generator</h1>
          <p className="text-amber-700">Manage customers and generate professional PDF orders</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => {
              setShowCustomerForm(true);
              setEditingCustomer(null);
              setCustomerForm({ name: '', email: '', address: '', phone: '' });
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Customer
          </button>
          <button
            onClick={() => {
              setShowOrderForm(true);
              setEditingOrder(null);
              setOrderForm({
                customerId: '',
                orderNumber: generateOrderNumber(),
                date: new Date().toISOString().split('T')[0],
                items: [{ product: '', quantity: 1, price: 0 }],
                notes: ''
              });
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Create Order
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customers Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-6 h-6" />
              Customers ({customers.length})
            </h2>
            <div className="space-y-4">
              {customers.map(customer => (
                <div key={customer.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{customer.name}</h3>
                      <p className="text-gray-600">{customer.email}</p>
                      <p className="text-gray-500 text-sm">{customer.address}</p>
                      <p className="text-gray-500 text-sm">{customer.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => editCustomer(customer)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteCustomer(customer.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orders Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Recent Orders ({orders.length})
            </h2>
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{order.orderNumber}</h3>
                      <p className="text-gray-600">{order.customerName}</p>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                      <p className="text-green-600 font-semibold flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        ${order.total.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => generatePDF(order)}
                      className="bg-amber-600 text-white px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-amber-700 transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
              ))}
              {orders.length === 0 && (
                <p className="text-gray-500 text-center py-8">No orders yet. Create your first order!</p>
              )}
            </div>
          </div>
        </div>

        {/* Customer Form Modal */}
        {showCustomerForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">
                {editingCustomer ? 'Edit Customer' : 'Add New Customer'}
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={customerForm.name}
                  onChange={(e) => setCustomerForm({...customerForm, name: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={customerForm.email}
                  onChange={(e) => setCustomerForm({...customerForm, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <textarea
                  placeholder="Address"
                  value={customerForm.address}
                  onChange={(e) => setCustomerForm({...customerForm, address: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg h-20"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={customerForm.phone}
                  onChange={(e) => setCustomerForm({...customerForm, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleCustomerSubmit}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  {editingCustomer ? 'Update' : 'Add'} Customer
                </button>
                <button
                  onClick={() => {
                    setShowCustomerForm(false);
                    setEditingCustomer(null);
                  }}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order Form Modal */}
        {showOrderForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">Create New Order</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={orderForm.customerId}
                    onChange={(e) => setOrderForm({...orderForm, customerId: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                      <option key={customer.id} value={customer.id}>
                        {customer.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Order Number"
                    value={orderForm.orderNumber}
                    onChange={(e) => setOrderForm({...orderForm, orderNumber: e.target.value})}
                    className="p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <input
                  type="date"
                  value={orderForm.date}
                  onChange={(e) => setOrderForm({...orderForm, date: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                
                <div>
                  <h4 className="font-bold mb-2">Order Items</h4>
                  {orderForm.items.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <select
                        value={item.product}
                        onChange={(e) => updateOrderItem(index, 'product', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="">Select Product</option>
                        {coffeeProducts.map(product => (
                          <option key={product} value={product}>{product}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        placeholder="Qty"
                        value={item.quantity}
                        onChange={(e) => updateOrderItem(index, 'quantity', parseInt(e.target.value) || 1)}
                        className="w-20 p-2 border border-gray-300 rounded-lg text-sm"
                        min="1"
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) => updateOrderItem(index, 'price', parseFloat(e.target.value) || 0)}
                        className="w-24 p-2 border border-gray-300 rounded-lg text-sm"
                        step="0.01"
                        min="0"
                      />
                      <button
                        onClick={() => removeOrderItem(index)}
                        className="text-red-600 hover:text-red-800 p-2"
                        disabled={orderForm.items.length === 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addOrderItem}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Item
                  </button>
                </div>

                <textarea
                  placeholder="Order Notes (optional)"
                  value={orderForm.notes}
                  onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg h-20"
                />
                
                <div className="text-right font-bold text-lg">
                  Total: ${orderForm.items.reduce((sum, item) => sum + (item.quantity * item.price), 0).toFixed(2)}
                </div>
              </div>
              
              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleOrderSubmit}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Create Order
                </button>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderGenerator;