import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'

const menu = () => {
  return (
    <div>
      <Com/>
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
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Our Menu</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Menu</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-24 py-8">
  {/* Starter Menu */}
  <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/2ef1/1051/7b8c3eddb066952f6e1be779929684a8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jCwtZHsSPR~p7W0XLtDAoCKpnw8QrF8mTYg-GXbvXN0HD7rjsgp~NaEU80~rYRjdhaO4E~nK2L~qxistEJV3D6eUhPfhgMhuPQu7~HegM6Rre1NkZoWTfHZuF6ChGwWzOX6y0S~OiKUkGJeCWqZQge0LhlAUT0wFsCfKkCRGm6kNSgDwA3JlqPnIyvQApKOVjuci32aegxM86WLtboM1d66kt-STdkpba5xmqyMfDrj1kNHMfiYpL70Wt9IfMQgyu1dANz5xI5Scoug4DOCwuiD56Le4BiVYFI54pVS67leMQchi2IHLxkLeMX5xfDe6Na8LQyOmLzNLSN~DVC5SCQ__"
        alt="Starter Dish"
        className="w-60 h-84 object-cover mx-auto rounded-sm shadow-md"
      />
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Starter Menu</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Alder Grilled Chinook Salmon
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with salmon, chives
            </p>
            <span className="text-gray-400 text-xs">580 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Berries and creme tart
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Tormentoso Bush Pizza Pinotage
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Main Course */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Main Course</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Optic Big Breakfast Combo Menu
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with romesco, cheddar
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Cashew Chicken With Stir-Fry
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Vegetables & Green Salad
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/dd50/b096/eef6ea1c9dc8d1c018019a6d4123e8dd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6YqybZFZ5fhsfVr~-ucUOgp1YYeOOAi06-ZvGVD8t3mIAs26L6mpVEFD4pPvVtBY-JhvnsyP6dMwbRV5hPfCz0waP1-Mpa0NnwwWx0XXvqhgKSN-cjyGlBTo8sUg0-gxt-0aK5r1w~dgWu9CbLQIjUApKbKFpBuN4BNJcvN0idINaWiQgn9SPV5JtZQhHdDIpc-Ep-WBHI~ISG-WBSZDX~BNCg7iMOvRqc6YUgy3tRAxm2YMXljBwUOBucIFsrvJP104JDCcLO8Hv-afW1TSVafDjVbMYJd3Xpqa8DcLvdjiNilj57lgeHC-14~GXFS7m5nzpHRRYfBFzLYcoPDNw__"
        alt="Main Course Dish"
        className="w-60 h-84 object-cover mx-auto rounded-sm shadow-md"
      />
    </div>
  </div>
</div>



<div
  className="relative h-80 bg-cover bg-black bg-center text-white flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://s3-alpha-sig.figma.com/img/1944/ac8e/e3b37e0565ec1924d79ec4cd31db8f19?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEcHnEoMGhDqTbaz9rT5JicX020~6F69OhuiJ707E7-nGnlHc5CBdnwy6nkKJ4n0SnNwgT-jH0W~N0qUkM6xuT5E2G8s0~wdFG2sS2-B1EXfxLY8AqTQmeIC7LgtpzMkBDteNeTh9u7sd8EcisofRQSR-e61pfmx00znOUO-FtrEz5GpxHtRcz8NMfsn4Xx~bLKKGz6jSsvMgivhujEflMTEBXMoACi-gT5qfJzpb0yqd1Z~7pPTOHCVUEdLEchwgqwU-P4gGBIE1V4OoKQBezJD-WA1rVJVlCFHfVHMUCvapmQxKaAyJ-NZiNduStX4pK-qMO5WO5B9bUdixkERkQ__')",
    opacity: 0.9,
  }}
>
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-center max-w-5xl mx-auto">
  <div className="group">
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍳</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Professional Chefs
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">420</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍔</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Items Of Food
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">320</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍴</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Years Of Experience
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">30+</p>
  </div>
  <div className="group">
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍕</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Happy Customers
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">220</p>
  </div>
</div>
</div>

<div className="max-w-5xl mx-auto px-24 py-8">
  {/* Starter Menu */}
  <div className="grid grid-cols-1 md:grid-cols-2  mb-8">
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/9e10/d828/1897c148b074de9923bdd3905350d22f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UA2O2Y6cDP~cfOTf13Qhm8w6LRFuqZhRSMyptkBxl0eNlICro4uBFlQ4NTGY1SgdyQyWrSm93dmkhLOcaBxJ3x0ELx5BhhipZwIv7yt7QFwlFniCtIscobpWBSeKdypusVY0cZrrYh95dIDbSBlHVHXmBNRF-fPa0ZSDGQd1PcKZ900OlnS5JdktEta~c0i3FoaKzNC81VnIAr2NEct2di0t0ieymMBT11AtKvuveISqpwoq~Iii19JLicMBON9ACoyvdeg5tI9tJOGdZVnutxjL9C4N5h6D9aGy9uaFLif5wxKqrx7q0v3zHxl4Wf1Xdw8-dsSX4KeIejDM3yUuNw__"
        alt="Starter Dish"
        className="w-60 h-84 object-cover mx-auto rounded-sm shadow-md"
      />
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Starter Menu</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Alder Grilled Chinook Salmon
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with salmon, chives
            </p>
            <span className="text-gray-400 text-xs">580 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Berries and creme tart
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Tormentoso Bush Pizza Pinotage
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Main Course */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-gray-800 mb-3">Main Course</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Optic Big Breakfast Combo Menu
            </h3>
            <p className="text-gray-500 text-sm">
              Toasted French bread topped with romesco, cheddar
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">325$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Cashew Chicken With Stir-Fry
            </h3>
            <p className="text-gray-500 text-sm">
              Grapeskin, ricotta, mozzarella, taleggio
            </p>
            <span className="text-gray-400 text-xs">700 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">435$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Vegetables & Green Salad
            </h3>
            <p className="text-gray-500 text-sm">
              Ground cumin, avocado, peeled and cubed
            </p>
            <span className="text-gray-400 text-xs">1000 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">145$</span>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-semibold text-gray-700">
              Spicy Vegan Potato Curry
            </h3>
            <p className="text-gray-500 text-sm">
              Spreadable cream cheese, crushed blue cheese
            </p>
            <span className="text-gray-400 text-xs">560 CAL</span>
          </div>
          <span className="text-yellow-500 text-sm font-bold">355$</span>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/5235/4165/44401eb111411b6f79133895e3d7920c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDpRRfShxe~VxnSUVTJrG~jTcOiGycvjjjtnFM3WkFzOt0Qop7STHskm9wFYt3k9xQVXH-y1bW9aZevj4W~iAgxOQGn-kD-V8nBJMQ2FkktUX4Myh3LaVTCWu41OG-LOco7K2yVhyxhaH3om~ewDG7LjqIHHUju5XtH0jhLHuMaTVuNBS3ZFp8yUDGnNGVzN0wcNo-V2FqxcB6QRAKUM-TAkTqUHp9JwglheqhYravjD4Tiz5pLxb6PLvAUfbzDgKpFTaCkvms3ZgYscLZIga1ZZWpcJjhxUPGqiawccpRiVtAuba~UWOroRo-TRcHRgnigED3hYCth5SuWxOj5Luw__"
        alt="Main Course Dish"
        className="w-60 h-84 object-cover mx-auto rounded-sm shadow-md"
      />
    </div>
  </div>
</div>

      <Footer/>
    </div>
  )
}

export default menu
