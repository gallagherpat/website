import ScheduleCard from "../components/scheduleCard"
export default function Page() {
    return(
        <main className="w-3/4 mx-auto mt-12 max-w-md">
            <ScheduleCard/>
            <ScheduleCard/>
            <ScheduleCard lastCard={true}/>
        </main>
    )
}