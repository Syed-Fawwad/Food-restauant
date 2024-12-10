import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'

const blog = () => {
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
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">Blog List</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">Blog List</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-5">
  {/* Main Layout */}
  <div className="flex flex-wrap gap-6">
    {/* Left Section */}
    <div className="flex-1 min-w-[65%] space-y-6">
      {/* 4 Posts with Unique Images */}
      {[
        { imageUrl: "https://s3-alpha-sig.figma.com/img/07f0/bb7c/27a192d5b8643fd652ce73df48c8fcf8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnurGrNyqW32nr4dU~6b9dj-tg5vJwburrSsNplYyw-eWVH1iXSBojDVd3S0KS42X6gghquqmpU6rU0scqdAL0NIG7MCwxj7FF0NZ~6FWK4Ze2ambbWwMe7KNHLWoepwBh3gmWFRLB3TBTlucdI0Gub~j84qsxs5kJiNgbsAYnpXdve2Ztg0hYawDzqDfCVSBJF3F-pr0S7zF9p5VIkNh5KRESHNBr3eUhv9shuaJTCmBQs7H-7nSsbaPTyrV6YsanpMtVe87PkNrw1so1~08YRfzVVkydEd0wBf7ZLq-fV88QcoYyFVF1lyLv7jtr77nlubdcN47rLsBqGVdZcz2Q__", title: "Post 1" },
        { imageUrl: "https://s3-alpha-sig.figma.com/img/373b/e4f2/119dfb5eeb120f2d15266db9d5145177?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbfsaqR~DZFtEtUrtgPzvm-2Iit5seTwh-8CNmsgYux3cgzlSOCuagiQZcQkRZO7gUxHbTmscpXqhqZopVDA-qyV-05ZywZnf1BAeyF67HVHHScdzTN4y-N2roKR34D-5nxOVp-KTYGWV1FMK4vhtIRzE1k0EdnwKA4zLw4KnB1073d9yzzL4rGS93zuPoy-S3Ozz253N~EmFOsFyJFEsNZ3hzHFG98732mMTQeMkrOLUTe~SZZmfNsKx-ViiIwevXx-zqKS5WMzKa4MYFhRV9X-NMceUmeKy0y2UigqBm-ntmmNZXaudSd73h0-~SfsVBxUBmIze0OEZo6zVVbgfA__", title: "Post 2" },
        { imageUrl: "https://s3-alpha-sig.figma.com/img/1787/46c6/b548b87aa5d9894cc4977e2c76a8999d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QvHywZEHrRarUQPXtCTBksA4~qmBPCDMMzLgdQdHNJ1q4B0axkXsMqerqd7UCOJekJ1N1SA0v2v7v~Vmgz-iDlcDS9THN1CEkcVnSs6mQ7Hpcspiba5rGJ2BRaT8kWFBq6gOK75h36-uIfFc5oyrlXmaeFhg~iDH9E1vhXj8sjZVNYwB3tuFnM31F83sThJ33GrpsbKtTJunFJ-H6SKyuSkgPnMhE687bCau2W4rpnztK~WQhK7aewiqfjqjU5R63xaM3aTR1Wf-4s1dC-2JN3H2KURuUQIH4oN1-cmJvLHMJNZeWYR4MK5BahBSq9Z-maJmD1dSrHb7AJM53d-GeA__", title: "Post 3" },
        { imageUrl: "https://s3-alpha-sig.figma.com/img/a927/cbf7/53ee9985b1d1061ca88e7557c0be0587?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxaCGhECdTZ4l~lEnIptSANp4W7RJfO4n7sWa0Q3V3wvLBKYtQZZsfIHU5xIcPWG4Esj7J~lnmHiTG3SAb3titW1FBXu76rBJTsW7CnNALzSmoKuuGJMTbCmz6ALzX26JInnBtHcOggDHu5leF9nsJtPgUMCznmOceYoD9X8eoBH5EUDceLvdIOeaYzSXNF9m6TlnOitkAkToZ0iPK3P7Z-vfMa~u4JHMU~iL7OhVFTWOJaBs-nrQ3S6Du28IspfGj2YCgmPNdLYXCkwMi3O9r3rGaJjeH129o8OgHhvxLpBggx~ynEi9w4dpqxLZfpuKecAmxB9CksnPEC8m8bupA__", title: "Post 4" },
      ].map((post, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-2 left-2 bg-[#FF9F0D] text-white px-3 py-1 rounded-md">
              14 Feb
            </div>
          </div>
          <div className="p-4">
          <div className="flex items-center text-[#FF9F0D] text-sm space-x-4 mb-4">
              <span className="flex items-center space-x-1">
                <i className="fa fa-calendar"></i>
                <span>Feb 14, 2022</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fa fa-comments"></i>
                <span>3 Comments</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fa fa-user"></i>
                <span>Admin</span>
              </span>
            </div>
            <h2 className="text-lg font-bold mb-2">
              {post.title} - 10 Reasons To Do A Digital Detox Challenge
            </h2>
           
            <p className="mb-4">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.
            </p>
            <button className="bg-transparent border-[2px] border-[#FF9F0D] text-[#FF9F0D] py-2 px-4 rounded-sm">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>

   {/* Right Section */}
<div className="flex-[0.35] min-w-[30%] space-y-6">
  {/* Search Input */}
  <div className="w-full flex justify-center mb-6">
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-lg">
      <input
        type="text"
        placeholder="Search Your Keyword.."
        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button className="bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
        <i className="fas fa-search"></i>
      </button>
    </div>
  </div>

  <div className="w-full flex justify-center items-center mx-auto my-8 max-w-lg"> {/* Adjusted max-width */}
    {/* Profile Section */}
    <div className="flex flex-col space-y-6 w-full"> {/* Removed md:w-[60%] */}
      <div className="text-center border p-6 rounded-lg shadow-lg">
        <img
          src="https://s3-alpha-sig.figma.com/img/fc03/8103/01108efcaef6a06c7f72059be3a27982?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zn35HD1~2JqE25cZPkwUMP5VykkOerytYCTgyoYT6kmWhfMhUWIbA8TTaZpuP5QLypm0gzIo4D6AP0i1A6mQuO8Wn~nVf~3JKZwUj84VqSszw6gEptotl6ubQecUdsroItMWePOdw6~fKESIzatVQ4ZQ7J~596lcvFBSwIeh5Sq8Ba-20lOQ2wu-rVa4WpUFZYk0v5SmOrwJ6Ct3X-wWAkHm-ZFXoWDRTNUnV-lch61aUuXT1NjraahGZ7a2Zls4VLhCFKogod50ezphgPaRgQcfSEcwDWJsflHZdF6~KGOwgkL9nY46CupueE0YXD3wdSEq0n5OtF9xLEMJrUxw2g__"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h2 className="text-lg font-bold mt-4">Prince Miyako</h2>
        <p className="text-gray-500">Blogger/Photographer</p>
        <div className="flex justify-center mt-2">
          <span className="text-[#FF9F0D]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p className="ml-2 text-sm text-gray-500">(1 Review)</p>
        </div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis
          distinction, odio eligendi suscipit reprehenderit atque.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  </div>



  <div className="p-4">
  {/* Recent Post Section */}
  <div className="mb-8">
    <h2 className="text-lg font-bold mb-4">Recent Post</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('https://s3-alpha-sig.figma.com/img/32f9/2511/46f9dcaea80c7b5035c8dffd6ba99bab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpANthwQ1Is5J2vmoGBtIV9ivC4gva7yOVTcbKA0sv7wrcQ8MyJML-MW0ei8HXrlgOV13Bn-PrKpMexplm1YkzfRHKmEFe4Dfx~PLd2WZmQspVHHYl5ieOmuuyhrTMzvd58KQb3WZER8~KS2HDjk9yaejpbJwQi82eDJxhoQDc4E9IrH3pDIe9E2HZMw7DrI78WygSxd7vQjCCVLKH8TfJ85uNj126JyUX2vE8AtJlmuSQE8zG4rtsSOvkkb2X6doYJiA4jbGfSl4SaPL8~KyzoMe0EXCuab6kgyf8G7ONaUDCggXNunBFEUw8rnmYhBncO33M7eSSoiWHXCkLEW1Q__')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('https://s3-alpha-sig.figma.com/img/c4a9/8213/7fb5cf286534bc68335ee28bddba6d22?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GH8~afusWerDB~CJ7K9fy4O7w4nQge5Z-dVh3gn1VT4ZuUHJGi3ZQFATlvOOGgFMwl2s8pZfBeT327Z7FZ79a3-UGYt0EIKXXCauyVRU8gOZtehIMF1J6TxL0O26lPNiDXclDvmL8MiMWpQrrdpS3Aop2JgM5zBWY3y8BbkNX913hTbZS89kP-eIrpzbGLiwN4OrlvD9akMXOfISoQysOmHpU~HHwBbl-nidU2UfVj4l~vjhrfHCoKm2vhkVM3uVNHjhe90k1hquiTXi~ShoRI72feWjGYNxV70oH3~28llktBn7Zd7kapwB9WR-bsjfITEhxnIZlQNdl1aDvdAIiQ__')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('https://s3-alpha-sig.figma.com/img/501b/2409/7bb7439b5ea205c15290f204572869de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dk6ajvEr8W1OCQISXhORVaEhjnVrcQ8r531n043kB8TodfkehvDiNPrwRdmgElI~XjzBqqqZ-2cczbuoyMJxv6pvb7di6DH3iRBIDAbLfbwNAymt1aK5QMnJD9dzxt9orENlJTQg1fOWK4D231zAp9BxgJ3qaMva~CNixuD8LWzuiDNcCbGgJZbG1eSEl6xuQx9iNLBVAVm-GWlw0TLzDu-pmyClye6-eqYVr8m-TDpEa24vVJZSMm-t1iRIZqNmf-PS0I8d3-8dIenWJ~F9ySTSpO4tLYI1mQlfFRIPIcetOIpaRTu86-kQqMPP0QFd875pnxWoK4V4JqHv5bbGLw__')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[url('https://s3-alpha-sig.figma.com/img/d3bb/75c5/6e8cf04a18a97d9f245244a92fa0273f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPlEVU8a3QCzOsoNeWP4WVei4B3UVzXX4Jkj5CGQZz9Ql9pd-GkdnUr8o9TajHJTv2zXlo6z0o5Y4wlNe77BhazpX2P2U8g6X2EkDHecMtb1sAWai33RVylAvxb~JhoboXsCbzXfLVM9qDAwKgnyXKXnD6kX3~b11OAMak8l-P0r5dUn1S71ZtVgYAGNS6kTv~h3-X~R4ONb~SM6WFcoIj3-R21AwsufbGD6kjLUQUnIeKLnqtqSevilE~jFlHUCvIC5ZtUl9TD63OnOGGq~z4lsVcP146FfdiaM77qbj3Yx3Ia0cIKRVh-hR1ui8aPE4MC9-Edrzdvz5VchpTJKJA__')] bg-cover bg-center"></div>
        <div>
          <p className="text-sm text-gray-500">June 22, 2020</p>
          <p className="text-base font-medium">Lorem ipsum dolor sit cing elit, sed do.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Filter By Menu Section */}
  <div>
    <h2 className="text-lg font-bold mb-4">Filter By Menu</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('https://s3-alpha-sig.figma.com/img/6376/eadb/c6c39ef105321d6d00bad32d22ee6c1c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=onRRN5LOdUxankw8RKyZwaB003PZ5xtC0CYUNl6nFR3WpXri5u3kMpvNBjyd2OI6B0XG4C0UNNHytWgOIy-p74wVL~oNOSEiXrHxCJY-f6ZPBLwXiVElbRrsBejM-R6dOLNS1QpDDiaH8vL3kVlDJ~r6ZKYf7fzsW-dE6QwUNrX0sJc8ApeECsddVCFxAPXm53uSqW7phvzx7oVsMBIrU8HZeE27YrZT6WJdgPcPHxdSdMu7bKW5L2UxXlPg3nEA~dM1pFX1ykTHH0Zz3Ut2NwhImK~J1h2P9LTLFfFznBSrfaAExkO7FWJ6lUJoBM7VsyTYdpGUZ-ETYuWFx9KZJA__')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Chicken Fry</p>
        </div>
        <p className="text-sm text-gray-500">26</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('https://s3-alpha-sig.figma.com/img/e8ff/0c50/762c289e5ca879be45c1e5e58fd5adce?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aon1H~WzNtGG0tRV2YGxHzOcCPSL7LTZWzjlyb~APxs~Bbs0zlV76QS~JtUEstv0NMKDhNFjCXxSvf0kCc2xfhrhr0210ffdiX51RKUcXAqxjd2AkUMSnM9Q04sxjZ1hUMUCogJn1SuR~DaMXh72WEZqELe~hOSuPqjPwjVAQM18gkeixGSkSnXqSVPqUXzX4SYwD~iJc6zY6wJzCsLq0rugx8fWDKQlcL8Dm5Zu6sCuLg7NASoX8PdtZapkHZR2seWkJ73fs0GZ9RvjwkMh5PrIdfdmFP9z5ebFkNf4cusES7OxR8xox9N4Hxb0U~PR2JwEOlsUVDkH29bqWajIKw__')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Burger Food</p>
        </div>
        <p className="text-sm text-gray-500">46</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('https://s3-alpha-sig.figma.com/img/ecf5/3f17/adac01ca40a1a164d9adb3ea5f5ceabd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PmskI0h~~4gN6shgNy0zCOP4MrvtisdZVoPW-I2XkxOtDVFZdbxW-TpCG7VhQ2ebLyT13-RQ3KDndvs2-ed4IkiLbyegMLXsUemHL~Wmf3s7rjfZ5yPi3NLROgNKJFfqSX9gujGLrnm1xYfc94DPiteyQ5tT9SSUsj6wfvG9iRqrmPVrUTG-W79KbiUqr1pbzZdU8zcKzo8p~pJzlg5v4TswinAYsSH3ifFoBDCShT97J1RKM~~L6pifAK-Mvn01dIjE0i33Frgan50qVHzKeOID~VjT0Y05ib~U9D-Tz0NKzxQwjdWp9AMdUmZS9Y9ytfZFwLx8fUn~PXlYWA0WfA__')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Pizza</p>
        </div>
        <p className="text-sm text-gray-500">16</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('https://s3-alpha-sig.figma.com/img/d3bb/75c5/6e8cf04a18a97d9f245244a92fa0273f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPlEVU8a3QCzOsoNeWP4WVei4B3UVzXX4Jkj5CGQZz9Ql9pd-GkdnUr8o9TajHJTv2zXlo6z0o5Y4wlNe77BhazpX2P2U8g6X2EkDHecMtb1sAWai33RVylAvxb~JhoboXsCbzXfLVM9qDAwKgnyXKXnD6kX3~b11OAMak8l-P0r5dUn1S71ZtVgYAGNS6kTv~h3-X~R4ONb~SM6WFcoIj3-R21AwsufbGD6kjLUQUnIeKLnqtqSevilE~jFlHUCvIC5ZtUl9TD63OnOGGq~z4lsVcP146FfdiaM77qbj3Yx3Ia0cIKRVh-hR1ui8aPE4MC9-Edrzdvz5VchpTJKJA__')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Fresh Fruits</p>
        </div>
        <p className="text-sm text-gray-500">36</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[url('https://s3-alpha-sig.figma.com/img/32f9/2511/46f9dcaea80c7b5035c8dffd6ba99bab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpANthwQ1Is5J2vmoGBtIV9ivC4gva7yOVTcbKA0sv7wrcQ8MyJML-MW0ei8HXrlgOV13Bn-PrKpMexplm1YkzfRHKmEFe4Dfx~PLd2WZmQspVHHYl5ieOmuuyhrTMzvd58KQb3WZER8~KS2HDjk9yaejpbJwQi82eDJxhoQDc4E9IrH3pDIe9E2HZMw7DrI78WygSxd7vQjCCVLKH8TfJ85uNj126JyUX2vE8AtJlmuSQE8zG4rtsSOvkkb2X6doYJiA4jbGfSl4SaPL8~KyzoMe0EXCuab6kgyf8G7ONaUDCggXNunBFEUw8rnmYhBncO33M7eSSoiWHXCkLEW1Q__')] bg-cover bg-center"></div>
          <p className="text-base font-medium">Vegetables</p>
        </div>
        <p className="text-sm text-gray-500">16</p>
      </div>
    </div>
  </div>
</div>


<div className="p-6">
  {/* Popular Tags */}
  <div>
    <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
    <div className="flex flex-wrap gap-2">
      {[
        "Sandwich",
        "Tikka",
        "Bbq",
        "Restaurant",
        "Chicken Sharma",
        "Health",
        "Fastfood",
        "Food",
        "Pizza",
        "Burger",
        "Chicken",
      ].map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-sm px-3 py-1 rounded-md hover:bg-gray-300 cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Photo Gallery */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4">Photo Gallery</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gray-300 rounded-md flex items-center justify-center relative"
            style={{
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d3bb/75c5/6e8cf04a18a97d9f245244a92fa0273f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lPlEVU8a3QCzOsoNeWP4WVei4B3UVzXX4Jkj5CGQZz9Ql9pd-GkdnUr8o9TajHJTv2zXlo6z0o5Y4wlNe77BhazpX2P2U8g6X2EkDHecMtb1sAWai33RVylAvxb~JhoboXsCbzXfLVM9qDAwKgnyXKXnD6kX3~b11OAMak8l-P0r5dUn1S71ZtVgYAGNS6kTv~h3-X~R4ONb~SM6WFcoIj3-R21AwsufbGD6kjLUQUnIeKLnqtqSevilE~jFlHUCvIC5ZtUl9TD63OnOGGq~z4lsVcP146FfdiaM77qbj3Yx3Ia0cIKRVh-hR1ui8aPE4MC9-Edrzdvz5VchpTJKJA__')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {index === 1 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
            )}
          </div>
        ))}
    </div>
  </div>

  {/* Follow Us */}
  <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
    <div className="flex space-x-4">
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-twitter text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-youtube text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-[#FF9F0D] rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-pinterest text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
      <a
        href="#"
        className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center hover:bg-gray-300"
      >
        <i className="fab fa-facebook text-xl"></i>
      </a>
    </div>
  </div>
</div>


</div>

</div>

</div>
      <Footer/>
    </div>
  )
}

export default blog
