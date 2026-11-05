import { useState,useEffect } from "react"
import Popup from "./Components/Popup"

const App = () => {

  const[popupStatus,setPopupStatus] = useState(false)
  const[modalSettings, setModalSettings] = useState({
    outsideClick: true,
    escapeButton:true,
    showCloseIcon:true,
    showBackdrop:true
  })

  const handleModalSettings = (setting)=>{
    setModalSettings((prev) => ({
      ...prev,
      [setting] : !prev[setting]
    })
    )
  }
  
  useEffect(() => {
    const handleEscape = (e) => {
        if (
            e.key === "Escape" &&
            modalSettings.escapeButton &&
            popupStatus
        ) {
            setPopupStatus(false);
        }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
        window.removeEventListener("keydown", handleEscape);
    };
}, [modalSettings.escapeButton, popupStatus]);

  return (
    <>
      <h1 className="text-4xl font-bold flex justify-center">Modal Popup</h1>
      <div className="min-h-screen flex flex-col justify-center items-center gap-2.5">
        <div className="flex justify-center items-baseline gap-2">
          <h3>Close dialog on outside click</h3>
          <input onChange={()=> handleModalSettings("outsideClick")} type="checkbox" checked={modalSettings.outsideClick} name="close-on-outside-click" id="close-1" className="w-5 h-5" />
        </div>
        <div className="flex gap-2">
          <h3>Close dialog on escape</h3>
          <input onChange={()=> handleModalSettings("escapeButton")} type="checkbox" checked={modalSettings.escapeButton} name="close-on-outside-click" id="close-1" className="w-5 h-5" />
        </div>
        <div className="flex gap-2">
          <h3>Show close icon</h3>
          <input onChange={()=> handleModalSettings("showCloseIcon")} type="checkbox" checked={modalSettings.showCloseIcon} name="close-on-outside-click" id="close-1" className="w-5 h-5" />
        </div>
        <div className="flex gap-2">
          <h3>Show backdrop</h3>
          <input onChange={()=> handleModalSettings("showBackdrop")} type="checkbox" checked={modalSettings.showBackdrop} name="close-on-outside-click" id="close-1" className="w-5 h-5" />
        </div>
        <button onClick={()=> setPopupStatus(true)} className="h-8 w-24 border text-sm bg-gray-200 mt-5" >Open Modal</button>
      </div>
      {popupStatus && <Popup modalSettings={modalSettings} onClose={()=> setPopupStatus(false)} />}
    </>
  )
}

export default App