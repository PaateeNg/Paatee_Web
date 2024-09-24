import React from 'react'

const Account = () => {
  return (
    <div>
      <h2 className='font-bold text-xl pb-3 mb-6'>Account overview</h2>
      <div className="flex gap-8">
            {/* inner info */}
            <div className="flex flex-col gap-5"> 
                <div>
                    <h4 className="text-gray-500">Name</h4>
                    <p>Aderomke Balogun</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Phone number</h4>
                    <p>0815 4168 554</p>
                </div>
            </div>
            {/* inner info */}
            <div className="flex flex-col gap-5">
                <div>
                    <h4 className="text-gray-500">Email </h4>
                    <p>chime</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Physical Adress</h4>
                    <p>6 Cheveron drive, Lekki, Lagos</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account