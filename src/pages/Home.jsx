import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SolidButton from "../components/SolidButton"

const Home =({setProgress}) => {

    useEffect(() => setProgress(-1),[]);
    const navigate = useNavigate();

    return <div className="h-screen w-screen flex items-center justify-center">
        <SolidButton name="Navigate To Form" onclick={() => navigate("/step/1")}></SolidButton>
    </div>
}


export default Home;