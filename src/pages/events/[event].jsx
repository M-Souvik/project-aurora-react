import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Modal from '@/components/Modal'

// Set up the localizer for Big Calendar
const localizer = momentLocalizer(moment)

const events = [
  {
    name: "Sports",
    subEvents: [
      {
        name: "Hackathon",
        type: "Tech",
        start: new Date(2023, 8, 15), // Note: Month is 0-indexed
        end: new Date(2023, 8, 16),
        description: "24-hour coding competition"
      },
      {
        name: "Robo Wars",
        type: "Tech",
        start: new Date(2023, 8, 16),
        end: new Date(2023, 8, 17),
        description: "Robot fighting competition"
      },
      {
        name: "Tech Quiz",
        type: "Tech",
        start: new Date(2023, 8, 17),
        end: new Date(2023, 8, 18),
        description: "Quiz on latest technology trends"
      }
    ]
  },
  {
    name: "Cultural",
    subEvents: [
      {
        name: "Battle of Bands",
        type: "Cultural",
        start: new Date(2023, 9, 20),
        end: new Date(2023, 9, 21),
        description: "Music band competition"
      },
      {
        name: "Street Play",
        type: "Cultural",
        start: new Date(2023, 9, 21),
        end: new Date(2023, 9, 22),
        description: "Street theater competition"
      },
      {
        name: "Fashion Show",
        type: "Cultural",
        start: new Date(2023, 9, 22),
        end: new Date(2023, 9, 23),
        description: "Themed fashion walk"
      }
    ]
  }
]

const SpecificEvent = () => {
  const { event } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  return (
    <>
      <div className="container mx-auto py-8 min-h-screen px-10 w-full">
        <div className='relative top-16 uppercase monoton text-red-500 text-center text-5xl px-10 pb-5'>{event}</div>
        <div className='relative top-16 w-full'>
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {events.map((eventCategory, index) => (
              <div className='flex flex-grow w-full' key={index}>
                <AccordionItem className="w-full" value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-semibold grow w-[19rem] md:w-[36rem] lg:w-[70rem] border-2 border-gray-500 rounded-xl px-2 border-b-none">
                    {eventCategory.name}
                  </AccordionTrigger>
                  <AccordionContent className="w-full flex flex-col">
                    <Card className="mt-2 rounded-xl">
                      <CardContent>
                        <h3 className="text-lg font-semibold my-2">Sub Events</h3>
                        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
                          {eventCategory.subEvents.map((subEvent, subIndex) => (
                            <Card 
                              className="rounded-xl cursor-pointer" 
                              key={subIndex} 
                              onClick={() => handleEventClick(subEvent)}
                            >
                              <CardHeader>
                                <CardTitle>{subEvent.name}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p><strong>Date:</strong> {moment(subEvent.start).format('YYYY-MM-DD')}</p>
                                <p>{subEvent.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div> */}
                        <div className="h-[400px]">
                          <Calendar
                            localizer={localizer}
                            events={eventCategory.subEvents}
                            startAccessor="start"
                            endAccessor="end"
                            titleAccessor="name"
                            views={['month', 'week', 'day']}
                            defaultView='month'
                            defaultDate={eventCategory.subEvents[0].start}
                            onSelectEvent={handleEventClick}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>

      {selectedEvent && (
        <dialog id="my_modal_1" className={`modal bg-white ${isOpen ? 'modal-open' : ''}`}>
          <div className="modal-box bg-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setIsOpen(false)}>✕</button>
            </form>
            <Card className="rounded-xl border-none">
              <CardHeader>
                <CardTitle>{selectedEvent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Date:</strong> {moment(selectedEvent.start).format('YYYY-MM-DD')}</p>
                <p>{selectedEvent.description}</p>
              </CardContent>
            </Card>
            <div className="flex justify-end mt-4">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Register
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default SpecificEvent