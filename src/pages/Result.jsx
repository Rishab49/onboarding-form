import { useEffect } from "react";
import { useSelector } from "react-redux";
import ResultElement from "../components/ResultElement";

const Result = ({setProgress}) => {


  useEffect(() => setProgress(100),[]);

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="h-screen w-screen flex items-start justify-center md:items-center overflow-auto p-4">

    <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-md h-fit w-auto flex-col md:flex-row">
      {Object.values(state.Form.value).map((data,index) => <ResultElement index={index} data={data}/>)}
    </div>
    </div>
  );
};

export default Result;
