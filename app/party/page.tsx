import Profile from "../components/profile"
import SubHeader from "../components/subHeader"
export default function Page() {
    return(
        <main>
            <div className="block sm:hidden mt-6">
                <SubHeader/>
            </div>
            <div className="grid grid-cols-2 max-w-7xl mx-auto px-4 mt-12 gap-4">
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
            </div>
        </main>
    )
}