import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
    
    <div className="flex flex-col items-center mx-56 gap-9">
    <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">Discover Your next Adventure with AI: </span>
        Personalized itineraries at your fingertips.
    </h1>
    <p className="text-xl text-gray-500 text-center">Ypur personal trip planner and travel curator, creating custom trips tailored to your budget hehehehhe</p>
    <Link to={"/create-trip"}>
        <Button variant="outline">Get Started</Button>
    </Link>
    
    </div>
    </>
  );
}
export default Landing;