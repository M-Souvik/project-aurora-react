
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const events = [
  {
    name: "Aurora",
    description: "Annual tech fest",
    subEvents: [
      {
        name: "Hackathon",
        type: "Tech",
        date: "2023-09-15",
        description: "24-hour coding competition"
      },
      {
        name: "Robo Wars",
        type: "Tech",
        date: "2023-09-16",
        description: "Robot fighting competition"
      },
      {
        name: "Tech Quiz",
        type: "Tech",
        date: "2023-09-17",
        description: "Quiz on latest technology trends"
      }
    ]
  },
  {
    name: "Vyro",
    description: "Annual cultural fest",
    subEvents: [
      {
        name: "Battle of Bands",
        type: "Cultural",
        date: "2023-10-20",
        description: "Music band competition"
      },
      {
        name: "Street Play",
        type: "Cultural",
        date: "2023-10-21",
        description: "Street theater competition"
      },
      {
        name: "Fashion Show",
        type: "Cultural",
        date: "2023-10-22",
        description: "Themed fashion walk"
      }
    ]
  }
]

export default function Events() {
  return (
    <div className='relative top-16'>

      <div className=" min-h-screen w-full">
        <h1 className="text-3xl font-bold mb-6 nabla">Upcoming Events</h1>
        
        <Accordion type="single" collapsible className="space-y-4 w-full">
          {events.map((event, index) => (
            <div className='flex flex-grow w-full'>
            <AccordionItem className="w-full" value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-xl font-semibold grow w-[70rem] border-2 border-gray-500 rounded-xl border-b-none">
                {event.name}
              </AccordionTrigger>
              <AccordionContent className="w-full flex flex-col">
                <Card className="">
                  <CardContent>
                    <h3 className="text-lg font-semibold my-2">Sub Events</h3>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {event.subEvents.map((subEvent, subIndex) => (
                        <Card key={subIndex}>
                          <CardHeader>
                            <CardTitle>{subEvent.name}</CardTitle>
                            <CardDescription>{subEvent.type}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p><strong>Date:</strong> {subEvent.date}</p>
                            <p>{subEvent.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            </div>
            // <div className="join join-vertical w-full">
            //    <div className="collapse collapse-arrow join-item border-base-300 border">
            //     <input type="radio" name="my-accordion-4"/>
            //     <div className="collapse-title text-xl font-medium">{event.name}</div>
            //     <div className="collapse-content">
            //     <Card>
            //       <CardHeader>
            //        <CardTitle>{event.name}</CardTitle>
            //         <CardDescription>{event.description}</CardDescription>
            //       </CardHeader>
            //       <CardContent>
            //         <h3 className="text-lg font-semibold mb-2">Sub Events</h3>
            //         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            //           {event.subEvents.map((subEvent, subIndex) => (
            //             <Card key={subIndex}>
            //               <CardHeader>
            //                 <CardTitle>{subEvent.name}</CardTitle>
            //                 <CardDescription>{subEvent.type}</CardDescription>
            //               </CardHeader>
            //               <CardContent>
            //                 <p><strong>Date:</strong> {subEvent.date}</p>
            //                 <p>{subEvent.description}</p>
            //               </CardContent>
            //             </Card>
            //           ))}
            //         </div>
            //       </CardContent>
            //     </Card>
            //     </div>
            //   </div>
            // </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

