const SolidButton = ({name,onclick}) => {

    return <button className="h-[45px] w-auto p-2 bg-blue-600 rounded-md text-white" onClick={onclick}>{name}</button>
}


export default SolidButton;