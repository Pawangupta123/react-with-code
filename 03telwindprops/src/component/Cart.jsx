import React from 'react'

function Cart({UserName,btnText='Vist me'}) {
    console.log(UserName);
    
  return (
   <div className="w-60 flex flex-col rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="text-lg font-semibold text-white"></h1>
            <h1>Price{UserName}</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
           {btnText}
            </button>
          </div>
        </div>
      </div>
        
  )
} export default Cart