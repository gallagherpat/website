import Profile from "../components/profile"
import SubHeader from "../components/subHeader"
export default function Page() {
    return(
        <main>
            <div className="block sm:hidden mt-6">
                <SubHeader/>
            </div>
            <div className="grid grid-cols-2 max-w-7xl mx-auto px-4 mt-12 gap-4">
                <Profile name="Hunter" lastName="Graves" partyMember="Bestman"/>
                <Profile name="Tori" lastName="Daily" partyMember="Maid of honor"/>
                <Profile name="Sean" lastName="Gallagher" partyMember="Groomsman"/>
                <Profile name="Meagan" lastName="Smith" partyMember="Bridesmaid"/>
                <Profile name="Reagan" lastName="Gallagher" partyMember="Groomsman"/>
                <Profile name="Jordan" lastName="Furman" partyMember="Bridesmaid"/>
                <Profile name="Jose" lastName="Izaguirre" partyMember="Groomsman"/>
                <br />
                <Profile name="Josh" lastName="Carver" partyMember="Groomsman"/>


            </div>
        </main>
    )
}