import ScheduleCard from "../components/scheduleCard"
import SubHeader from "../components/subHeader"

const object = {
    "data": [
        {
            "event": "Ceremony",
            "date": "Sunday, September 29th, 2024",
            "time": "3:00pm",
            "name": "The House on Barber Mill",
            "location": "2239 Barber Mill Rd, Clayton, NC 27520",
            "description": "This will be held on the outside of the house"
        },
        {
            "event": "Reception",
            "date": "Sunday, September 29th, 2024",
            "time": "4:30pm",
            "name": "The House on Barber Mill",
            "location": "2239 Barber Mill Rd, Clayton, NC 27520",
            "description": "A delicous whole roasted pig"
        },            
        {
            "event": "Cocktail Hour",
            "date": "Sunday, September 29th, 2024",
            "time": "5:30pm",
            "name": "The House on Barber Mill",
            "location": "2239 Barber Mill Rd, Clayton, NC 27520",
            "description": "Drinks and good times sure to come"
        }
    ]
}

export default function Page() {
    return(
        <main className="w-3/4 mx-auto mt-6 sm:mt-12 max-w-md">
            <div className="block sm:hidden">
                <SubHeader/>
            </div>
            <ScheduleCard data={object.data[0]}/>
            <ScheduleCard data={object.data[1]}/>
            <ScheduleCard data={object.data[2]} lastCard={true}/>
        </main>
    )
}