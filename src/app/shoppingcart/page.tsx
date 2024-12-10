import React from 'react';

import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';



const ShoppingCart = () => {
  return (
    <div>
      <Com />

      {/* Full-Screen Header Image Section */}
      <div className="relative">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <img
          src="https://s3-alpha-sig.figma.com/img/82bc/a07c/de288adf1e3ed51d209d2c3f30979e78?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQL~Nowe5qHeDwvYTwOPBHfxtToNJ3j1p~R65RrtA3PCLRY-hR8k16Auv57VWEHjebKmSFe8OPaBs6m7zHMn3bxM7MSoVmyl3xY8CyFZGqvo6ia80FhQngEdyc2tl6n6WZatLKelDXF~4n5TdAIbVmmqjVwGN~cmZX3pPFvMXwP7c6by92RAYZbIAlqaWceeoeNu9pAUPyGZeRND7npJAFlZPVILvGR7qFdkM4RyJFLWqC3G5sGvPb7v7eRken4Ba3uC~MneFHQHWPCJAu4eMGr-69tGrYJffGvvGSlbjUgMKmVqJHRD3QhKhNkLQEpgp0mVPONTxkQOqdTJPoTC-Q__"
          alt="Sign-in Header"
          className="w-full h-[250px] md:h-[410px] object-cover"
        />

        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Shopping Cart</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Shopping Cart</span>
          </p>
        </div>
      </div>

      <div className="flex mt-6 justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-3xl md:max-w-5xl bg-white rounded-lg shadow-md p-4 md:p-6">
          {/* Cart Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm md:text-base">
              <thead>
                <tr className="text-left">
                  <th className="p-2 md:p-3">Product</th>
                  <th className="p-2 md:p-3">Price</th>
                  <th className="p-2 md:p-3">Quantity</th>
                  <th className="p-2 md:p-3">Total</th>
                  <th className="p-2 md:p-3">Remove</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Burger', price: 35, total: 221 },
                  { name: 'Fresh Lime', price: 25, total: 521 },
                  { name: 'Pizza', price: 15, total: 421 },
                  { name: 'Chocolate Muffin', price: 45, total: 521 },
                  { name: 'Cheese Butter', price: 15, total: 325 },
                ].map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 md:p-3">
                      <div className="flex items-start gap-2 md:gap-3">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/dbae/9661/65e940fcfef374c3c3e6db19c32ffc99?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1wdFrhsRrIYN0cURIoBq2Q5bb4gz8y5wq-cJtoKANgcRzlgUIlR5xNvM3TOkZI8EDO9s6u-84zdh19MBZhMCTLYQCb62XV5Mmc1R8u9uMn7C9Sx1unfz2HJkv5KMIZizf3dIw5AdrVsoseQB7l2DLCd7ZY78-l7nvFL7-FC0WvpXcgOxJdkCk4en88Gtg9LxlCvD6kHDuYlWjTsKld7602FQeN0ozSm5kStuPZzOlzuq7VJwZ7Xl5kMAFygjfRHYN8E6qR7t6aNPcnRnbb0GpyY1m2nT1ZwGyuLH~8gvxBHvWVyqcwL2dICUELlmyg0mLZcKDFF3Q1L2JcN9bYOhg__"
                          alt={item.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover"
                        />
                        <div>
                          <span>{item.name}</span>
                          <div className="text-yellow-400 text-xs md:text-sm flex gap-1">★★★★☆</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 md:p-3">${item.price.toFixed(2)}</td>
                    <td className="p-2 md:p-3">
                      <div className="flex items-center justify-between border rounded-full px-2 h-6 py-1 md:px-3 md:h-8 md:py-2 w-16 md:w-20">
                        <button className="text-gray-400 font-bold text-xs md:text-base">-</button>
                        <span>1</span>
                        <button className="font-bold text-gray-700 text-xs md:text-base">+</button>
                      </div>
                    </td>
                    <td className="p-2 md:p-3">${item.total.toFixed(2)}</td>
                    <td className="p-2 md:p-3">
                      <button className="text-black font-medium">X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Coupon Code */}
            <div className="p-3 md:p-4 rounded-md">
              <p className="mb-4 text-gray-700 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter Here code"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <button className="bg-[#FF9F0D] text-white px-3 md:px-4 py-2 rounded-md hover:bg-orange-600">
                  Apply
                </button>
              </div>
            </div>

            {/* Total Bill */}
            <div className="p-3 md:p-4 rounded-md">
              <p className="flex justify-between text-gray-700 mb-2 text-sm md:text-base">
                <span>Cart Subtotal:</span>
                <span>$120.00</span>
              </p>
              <p className="flex justify-between text-gray-700 mb-2 text-sm md:text-base">
                <span>Shipping Charge:</span>
                <span>$0.00</span>
              </p>
              <p className="flex justify-between text-gray-700 mb-4 font-bold text-sm md:text-base">
                <span>Total Amount:</span>
                <span>$205.00</span>
              </p>
              <button className="w-full bg-[#FF9F0D] text-white py-2 rounded-md hover:bg-orange-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCart;