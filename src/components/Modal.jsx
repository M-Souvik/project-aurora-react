import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Modal = ({isOpen,setIsOpen,event, name, description, start, link}) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(`/events/register/${link}`);
  }
  return (
<dialog id="my_modal_1" className={`modal ${isOpen ? 'modal-open':''}`} >
  <div className="modal-box bg-gradient-to-br from-black via-gray-900 border border-gray-800 shadow-lg shadow-cyan-700 to-black">

    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "  onClick={()=>setIsOpen(!isOpen)}>✕</button>
    </form>
    <Card className="rounded-xl border-none ">
      <CardHeader>
        <CardTitle className="">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <p><strong>Date:</strong> {start}</p>
      </CardContent>
    </Card>
    <div className="flex justify-between items-center">
      <div>
        <a href={`/events/details/${link}`} className="hover:underline text-blue-400 px-5">Know more...</a>
      </div>
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors  shadow-md shadow-gray-600" 
    onClick={handleClick}>Register</button> 
    </div>
    </div>
</dialog>
  )
}

export default Modal