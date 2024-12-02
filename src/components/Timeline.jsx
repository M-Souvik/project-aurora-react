import { Check, CheckCircle, Ticket } from "lucide-react";
import { FaCalendarCheck } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
export function Timeline({ events }) {
    return (
      <ul className="timeline timeline-vertical">
        {events.map((event, index) => (
          <li key={index} className="flex justify-center items-center bg-transparent p-2 text-black">
            {index !== events.length && (
                <hr className="bg-blue-300 my-4 w-full absolute z-0 left-1/2 transform -translate-x-1/2" />
            )}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 w-full ">
            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} border-2  border-gray-500 p-2 rounded-xl`}><p className="text-sm mt-2"> {event.date}</p></div>
                <div className="timeline-middle relative z-10 bg-blue-700 rounded-full p-2">
                <FaCalendarCheck size={20} color="white"/>
                </div>
                <div className={`timeline-box text-white timeline-${index % 2 === 0 ? 'end' : 'start'} text-center bg-transparent p-4 rounded-xl w-64 h-32 shadow-md hover:scale-105 transition-transform ease-in-out `} 
                style={{
                    "backgroundImage":`url(/public/sports.jpg)`,
                    "backgroundPosition":"center",
                }
                }>
                    {/* <img src="/public/sports.jpg" className="bg-opacity-5"/> */}
                    <TooltipProvider>
                    <Tooltip >
                        <TooltipTrigger><a className="font-bold text-lg hover:underline" href={`events/${event.link}`}>{event.name}</a></TooltipTrigger>
                        <TooltipContent className="bg-white  text-black rounded-xl">
                        <p>Tap to know more</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    
                  
                  <p className="text-sm opacity-70">{event.description}</p>
                  
                </div>
            </div>


          </li>
        ))}
      </ul>
    )
  }
  
  