const ResultElement = ({ index,data }) => {
  return (
    <div className="flex flex-col gap-2 h-fit w-[250px] min-w-[200px] bg-cyan-100/30 p-2 rounded-md">
        <div className="flex items-center">
            <h1 className="font-bold text-lg">Step{index+1}</h1>
        </div>
        <hr width="100%"></hr>
      <div className="flex items-center">
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">First Name</p>
          <p className="font-semibold">{data.first_name}</p>
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">Last Name</p>
          <p className="font-semibold">{data.last_name}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">Contact No.</p>
          <p className="font-semibold text-sm">{data.contact}</p>
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">Gender</p>
          <p className="font-semibold">{data.gender}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-semibold text-sm">{data.email}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-start justify-center flex-1">
          <p className="text-gray-500 text-sm">Plan</p>
          <p className="font-semibold">{data.plan}</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-2 border border-cyan-300 rounded-md gap-2">
      <div className="h-full aspect-square flex items-center justify-center">
       <p className="uppercase font-bold text-lg">
       {
            data.document.fileName.split(".")[1]
        }
        </p> 
      </div>
      <div className="flex flex-col items-start justify-center flex-1">
        <p className="text-sm">{data.document.fileName}</p>
        <p className="text-xs">{data.document.fileSize} bytes</p>
      </div>
      </div>
    </div>
  );
};

export default ResultElement;
