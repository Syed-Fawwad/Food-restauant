import React from 'react'

import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';


const CheckOut = () => {
  return (
    <div>
       
    <Com/>
      {/* Full-Screen Header Image Section */}
      <div className="relative">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <img
          src="https://s3-alpha-sig.figma.com/img/82bc/a07c/de288adf1e3ed51d209d2c3f30979e78?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQL~Nowe5qHeDwvYTwOPBHfxtToNJ3j1p~R65RrtA3PCLRY-hR8k16Auv57VWEHjebKmSFe8OPaBs6m7zHMn3bxM7MSoVmyl3xY8CyFZGqvo6ia80FhQngEdyc2tl6n6WZatLKelDXF~4n5TdAIbVmmqjVwGN~cmZX3pPFvMXwP7c6by92RAYZbIAlqaWceeoeNu9pAUPyGZeRND7npJAFlZPVILvGR7qFdkM4RyJFLWqC3G5sGvPb7v7eRken4Ba3uC~MneFHQHWPCJAu4eMGr-69tGrYJffGvvGSlbjUgMKmVqJHRD3QhKhNkLQEpgp0mVPONTxkQOqdTJPoTC-Q__"
          alt="Sign-in Header"
          className="w-full h-[410px] object-cover"
        />
        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">Checkout Page</h1>
          <p className="text-lg mb-2">Home / <span className='text-[#FF9F0D]'>Checkout</span></p>
        </div>
      </div>
      

      <div className="flex justify-center items-center min-h-screen mt-6 ">
  {/* Outer Box */}
  <div className="w-full max-w-5xl bg-white shadow-lg rounded-md p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Section - Shipping Address */}
      <div className="col-span-2 bg-white rounded-md shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Company"
            className="border p-2 w-full"
          />
          <select
            className="border p-2 w-full"
            defaultValue="Choose country"
          >
            <option disabled>Choose country</option>
            <option>Country 1</option>
            <option>Country 2</option>
          </select>
          <select
            className="border p-2 w-full"
            defaultValue="Choose city"
          >
            <option disabled>Choose city</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
          <input
            type="text"
            placeholder="Zip code"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Address 1"
            className="border p-2 w-full"
          />
          <input
            type="text"
            placeholder="Address 2"
            className="border p-2 w-full"
          />
        </form>
        {/* Billing Address */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Billing Address</h3>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Same as shipping address
          </label>
        </div>
        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-auto pt-6">
          <button className="w-full  text-gray-800 font-medium py-3 shadow-md hover:bg-gray-400 transition">
            Back to cart
          </button>
          <button className="w-full bg-[#FF9F0D] text-white font-medium py-3 shadow-md hover:bg-orange-600 transition">
            Proceed to shipping
          </button>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-white rounded-md shadow-md p-6 flex flex-col justify-between" style={{ height: "85%" }}>
        <div>
          <ul className="space-y-4">
            {[...Array(3)].map((_, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200">
                    <img src="https://s3-alpha-sig.figma.com/img/b3c4/f89f/63d784f7e0694faa1abbb2c2e8c2f4cd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewSCFmbFGPIoz76A~uaUx3eARwlvwr56UH6Jx-X2~zXo34vZv3sgxfg5dRo~yPikjqXGsk7EPD79Hz09qCrEmpqAbdvFPgJLR-SNx2xLSkGvkcgELz~0jYMgm3mvP85mwnIk9Vdh-BsQ5VyWSrLuLOTH2xEa4K4xZSKXL3LUdeXi0V8g~op3gzUAWZVxZz80kfdvoPlnvV6jB6FKCsXNzJr7jNOjjmNRQhhNYxx1zL33ob91wU9TFbuIKrGlTNoJ9QTGqihs1KFp1l1Xwrp-bdSITyl77Lz5HcsIgLZX5adaAHTPvdbNcrN3uMC81eS~J-hEXVdiJqpGlzyEUU7GxQ__" alt="tikka" className='object-cover w-full h-full' /></div> {/* Image Placeholder */}
                <div className="flex-1">
                  <p className="font-medium">Chicken Tikka Kabab</p>
                  <p className="text-sm text-gray-500">150 gm net</p>
                </div>
                <p>$50</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>$130</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$54.76</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Total</span>
            <span>$432.65</span>
          </div>
          {/* Place Order Button Inside the Div */}
          <button className="w-full bg-[#FF9F0D] text-white py-3 rounded-md mt-4 shadow-md hover:bg-orange-600 transition">
            Place an order
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer/>
    </div>
  )
}

export default CheckOut;
