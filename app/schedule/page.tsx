import ScheduleCard from "../components/scheduleCard"
export default function Page() {
    return(
        <main className="w-3/4 mx-auto mt-12 max-w-md">
            <ScheduleCard id={0}/>
            <ScheduleCard id={1}/>
            <ScheduleCard id={2} lastCard={true}/>
        </main>
    )
}