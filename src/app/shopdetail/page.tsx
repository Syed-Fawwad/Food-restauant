import React from 'react';


import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';



const ShoppingDetail = () => {
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
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Shop Details</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Shop Details</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
  {/* Main Section */}
  <div className="flex flex-col lg:flex-row gap-4">
  {/* Left Section: Product Images */}
  <div className="flex flex-col space-y-2">
    {["https://s3-alpha-sig.figma.com/img/c3a2/d77b/0f075eb1d335305aaa92862ab18a3cb8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kTNs3w0MsImtq7-BggvQSoNOzZ7J4mqwD6zZ0aEXmJGZYzyHlrlceXPVJ-TGC9FBj8etZsHumVO03M7zdBxTxS1WJLEryOQTfmQOFQ-0nueztuQ0kAzx4br5~9oJAKXcf5ehE~RXbqYeMkEccQYPxXqmKl5tfuAoTdUpmljgM28tO1547cGqBqN-xZ7IiKqbhGmLtXHXt0vjNCCtg1FnJCHDaSwnmSyDbRp3e-5RvfcpnSxEHcWCLktFQ4-XObVTR6BowkAA4QcFTBei~bU2XP9gyk1IgoaQ02Gig5M~6E-KgP3Ll8JXKn86kwVfWSkQlCvR2eZIncRsMSIfUv-NJw__", "https://s3-alpha-sig.figma.com/img/48c0/3327/7e449194ff1bd3ddacf7f849e76b68f4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VghsAJlaySEgw-YDA6Fe0A5u3dHydeYFOlac0AdXOBA8Dl98BbG-S-wrEqazqk0t3jAzXmTeZubCB0IYR2yWKxwWne6zjrWdE-~MqStTTp-cqm-yj8qA2R7bysq3vpleoL21fy8cxv5WGFDjFrAOzV2~1W5ToXmxvhF4d-WW4Hjeom9wodu5qtkXZvzj8oZddTQ8SkPOH23c18AaeA2lf9UdXVwgThTTK-lzg14rWiJBxyWCjxjgVNm6JDp4mF08DmGMX0SZpXik6GW8M7Ini4KIZPYpyWcFs3dx1dVrQsAyMp3u~U3vsv3~5zLywDeTlpmKU857jIkoV2z04UIp4g__", "https://s3-alpha-sig.figma.com/img/b354/1c17/01139b4b80104920d17307cc3c5cd3c1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQORKE2eV1-vx4dqFBS~qth1KsKXLln3glkVA4BI-PCv10Zj3EfKwiCF1xZ5jEv4spY~g1q52TnKSByX8mTBSawSHOqB5P~Vl0kDGo3exqPZXkQ2l8cy4uEj2S~fcE0Se7wZ89hz01NxgCfuBspS9PRgLsWcySIGp72-yv~EgCeP6Dmwt7kNT~BCnK7buEL9ncw7LyV7aPO650SUsUILGUDClDDT--ctiuV4sCHlymKJM8SqKitz9gcQxC8tKjkKxCq0UlqNzdGfv2l~nugetAlIYDRvrW~iFIkpE8ylTVCj4VkOWinlBb8OtAmH~k0JFIiXC8AwE5C3FxblRH~vSQ__", "https://s3-alpha-sig.figma.com/img/143d/b147/f381590fda25256c00cbfa6105afa496?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=htTYrMnxnPrWYN~kF8YbB3aqZU9EEwgz~8YxDMyau012IogeTgAKi6Z9O2CYKshWOJvM-LTB~OtnwtfvuNVxldMO7KCIpUX5ISS8nD-lxmqCqTgkIZTq2puYra3XMazseSi4mGlVDATrJUCyLKHODBXVER5jK2wID5uRp8wTv2tEuBygAL07XPm7lRkyou7dCO0W870UvzlY-Weo7fBh6xDs2F2tb1mcfYU4VCv-nn8fVhzJTwJioizjwnVUCQXjdaXZhVn6E2AK0xbKurtldNMe6wxQUIY~5xMlZ7Y1x1oaUNyfuEYY5n04wj4Rj5v7Xzu8GnFtD87nwvJhUtaZAw__"].map((src, index) => (
      <div
        key={index}
        className="w-24 h-24 border border-gray-300 rounded-md overflow-hidden cursor-pointer"
      >
        <img
          src={src} // Separate URL for each image
          alt={'Thumbnail ${index + 1}'}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* Main Image */}
  <div className="flex-1">
    <img
      src="https://s3-alpha-sig.figma.com/img/eb74/454b/eb94364126821b5afdd60d1554f43624?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PM0jbljOlYLac9SVT~AU36AC-55akEuRJSQnvWHiprOGFDX8THB16oiTW9vu9vbwsulidbg-02jG5wNCkZvemSiGuHzn0p14OkZOCZiNm6USoq0G41GwbKGdWS23gecGt~C3bU01LiBS51fK~tNK6~cKLiYkdoH92MCd3K4qMUFZoqiD48gtItGVdxHeDYGHA2hl8J0GrtG4HPXMlXqPZEfJY-TWQTalG1hjvqhdsg2Xng7BO5wXarlUuoP7etcO~iR1uk9HhsZ5M35eQggflhvpcTeLOkKFncXPsdDyZl~rNwqEpY03iFdpP~d7HoISaX5UeSzgjf-Mv1xH8Zflaw__" // Placeholder for main image URL
      alt="Main Product"
      className="w-full h-full object-cover rounded-md"
      style={{
        height: "calc(5 * 5rem + 8px)", // Adjust height to match 4 thumbnails + gaps
      }}
    />
  </div>

  {/* Right Section: Product Details */}
  <div className="flex-1">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-md">
        In Stock
      </span>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 flex items-center space-x-1">
          <i className="fas fa-chevron-left"></i>
          <span>Prev</span>
        </button>
        <button className="text-gray-500 flex items-center space-x-1">
          <span>Next</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <h1 className="text-3xl font-bold mb-4">Yummy Chicken Chup</h1>
    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum ut tristique et egestas quis. Nulla facilisi.
      Urna, vitae feugiat pretium donec id elementum. Ut mattis sed vitae
      mus risus.
    </p>
    <div className="flex items-center space-x-2 mb-4">
      <div className="flex space-x-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
      <p className="text-gray-600">
        <span className="font-semibold">5.0</span> | 22 reviews
      </p>
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-4">$54.00</div>
    <div className="text-sm text-gray-500 mb-4">Dictum/Cursus/Risus</div>
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center border border-gray-300 rounded">
        <button className="px-3 py-2 text-gray-700">-</button>
        <input
          type="text"
          className="w-12 text-center border-l border-r border-gray-300"
          defaultValue="1"
        />
        <button className="px-3 py-2 text-gray-700">+</button>
      </div>
      <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
    <div className="flex items-center space-x-4 mb-4">
      <button className="flex items-center space-x-1 text-gray-500">
        <i className="fas fa-heart"></i>
        <span>Add to Wishlist</span>
      </button>
      <button className="flex items-center space-x-1 text-gray-500">
        <i className="fas fa-exchange-alt"></i>
        <span>Compare</span>
      </button>
    </div>
    <div className="text-sm text-gray-500 mb-2">
      Category: <span className="font-medium">Pizza</span>
    </div>
    <div className="text-sm text-gray-500 mb-6">
      Tag: <span className="font-medium">Our Shop</span>
    </div>
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-500 mb-2">Share:</p>
      <div className="flex space-x-4">
        <button className="text-gray-500">
          <i className="fab fa-facebook-square text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fab fa-twitter-square text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fab fa-instagram text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fab fa-linkedin text-xl"></i>
        </button>
      </div>
    </div>
  </div>
</div>

  {/* Description and Reviews */}
  <div className="mt-12">
    <div className="flex items-center space-x-8 border-b border-gray-300 pb-2 mb-6">
      <button className="text-lg font-medium text-gray-900">Description</button>
      <button className="text-lg font-medium text-gray-500">Reviews (24)</button>
    </div>
    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
      This is the detailed description of the product. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio.
      Faucibus interdum posuere lorem ipsum.
    </p>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      <li>High-quality product</li>
      <li>Made from fresh ingredients</li>
      <li>Available for quick delivery</li>
      <li>Special discounts for bulk orders</li>
    </ul>
  </div>


 {/* Similar Products */}
<div className="mt-12">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold">Similar Products</h2>
    <div className="flex space-x-2">
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="p-2 bg-[#FF9F0D] rounded-full hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { url: "https://s3-alpha-sig.figma.com/img/9408/1ed7/b1dd8833b5511b01e2d2bcb788cff0ba?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2ZSL2vObCznsFHAc9-5x9ODpE61KaNUL48HjXAMKh-YCM-Z8bpOjEg-7nSI7RrwPZb8QABCkHtr093bVHQMMXZdCirvtP~ptVu2aWK~3-Z7aNBUV6uV8eGCi0oOGbm9rEGW7-3DrYiaQYrQ7p5XDAWsX2OU-ay5MYlVc95UeGtNMHnBSVdzYzjDdvIZSGk9i2o2IlP31pAW8S5H2nDLay5mr6svulIJSL8PIJ7zGvU2-I9uuVNnUFgQb-H79N0ScTH~k1eA-avHkJdSWA4XxUVxtO6-unsqmhze6Ql5t3sIckbwypoLCSAd1aGi9wOmB1fHTH6QuhXNv4rwTPpvfQ__", name: "Product 1", price: "$25.00" },
      { url: "https://s3-alpha-sig.figma.com/img/da04/ac29/4b26bea2f0204896af43be472b92103e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj8Doguhp9Zb6BurtKrxH~FKURmjiiRQirCUOAfFqu4wv6N1Z9VewJrbJkwrYK9oOS43NUz2v31VTP2vtDclO8Uu7wdBF6GUZ6VN~BjxSnQlwBKKPq49YdsoE-FFYUg1jfcPNloKYNQf1kE4Bx7VYVcKPzxYPrXeD5FE2Ar8NVG0iEINHbNLPl5z1GNuY6eofuwaPbvuf4jDBUI6U~6DRrgFQ~l~O3QzZEKWiNeo11GEAuuhP7KF-MyjLXKH3ngMhV~gGs8fJ9vldpSGRURe9nvs-EZUdMe9PtXvAUlAUsaZPXDpUIwJ9MvOOhVuqpz6Zi9Oncauzi65mdLrHepgEg__", name: "Product 2", price: "$30.00" },
      { url: "https://s3-alpha-sig.figma.com/img/bf62/e9e8/0dbc5ea6fe99bf5d7a1f97946724ed8f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LL6WvcU5tRB1D9Pxb58P5Uhn4ZX9jLMTAhhJ3i0o6eifoShW7TNXSwFmeKkmVqm3l13-b2BewFEAvbzGWiDaAJHQ2BNZ2T4kU4zw~oQpsmtqvxm3YCeQ2XBSdy4eXUzDapSwZhQQO7JNL8G0Zfh-eQKaeBl~jgoobXIeM4eP~B7a3EN64sfCUWlL6TTRlb1Y8nd7F2HMk7LlviQQWWDPw65YdqHDjZSJPUkdUor8WHZ66gmRLytPZNQk1p74CaZmX141DvE-NMLmXB0AXyqPR988wlZ3Zvp-ZtquU~CiuddPtay36cfrVQOm1jRlnkz3RIIiWKDrJATa90-i0PJSkw__", name: "Product 3", price: "$20.00" },
      { url: "https://s3-alpha-sig.figma.com/img/9408/1ed7/b1dd8833b5511b01e2d2bcb788cff0ba?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R2ZSL2vObCznsFHAc9-5x9ODpE61KaNUL48HjXAMKh-YCM-Z8bpOjEg-7nSI7RrwPZb8QABCkHtr093bVHQMMXZdCirvtP~ptVu2aWK~3-Z7aNBUV6uV8eGCi0oOGbm9rEGW7-3DrYiaQYrQ7p5XDAWsX2OU-ay5MYlVc95UeGtNMHnBSVdzYzjDdvIZSGk9i2o2IlP31pAW8S5H2nDLay5mr6svulIJSL8PIJ7zGvU2-I9uuVNnUFgQb-H79N0ScTH~k1eA-avHkJdSWA4XxUVxtO6-unsqmhze6Ql5t3sIckbwypoLCSAd1aGi9wOmB1fHTH6QuhXNv4rwTPpvfQ__", name: "Product 4", price: "$40.00" },
    ].map((product, index) => (
      <div key={index} className="   p-0">
        <img
          src={product.url} // Separate URL for each product
          alt={product.name}
          className="w-full h-44 object-cover  mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-yellow-500 font-bold">{product.price}</p>
      </div>
    ))}
  </div>

  </div>
  </div>


      <Footer />
    </div>
  );
};

export default ShoppingDetail;