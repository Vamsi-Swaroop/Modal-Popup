const Popup = ({modalSettings,onClose}) => {

   
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className='flex flex-col p-2 w-2/5 bg-white rounded-lg shadow-lg'>
        <div className="flex justify-between items-center p-3 ">
            <h2>Modal Heading</h2>
            <button onClick={onClose}>x</button>
        </div>

        <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam corrupti debitis ut iste enim unde magni repudiandae ipsum incidunt earum in sequi, ad consequatur exercitationem illo similique asperiores necessitatibus.</p>
        <div className='flex flex-row-reverse'>
            <button onClick={onClose} className='border bg-gray-200 w-15 h-9'>Close</button>
        </div>
    </div>
    </div>
  )
}

export default Popup