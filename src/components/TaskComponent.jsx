import { CrossIcon } from "../assets/CrossIcon";

export function TaskComponent({ title, date, eliminar }) {


    return (
        <div className="
        flex flex-col text-center lg:text-left
        lg:flex-row lg:justify-between w-10/12  lg:w-1/2 mx-auto bg-[#454545]
        text-white p-5 rounded-lg items-center">
            <p className="w-[70%] text-md mt-5 lg:mt-0 lg:text-xl">
                {title}
            </p>
            <p className="flex flex-col pt-10 text-sm lg:pt-0 lg:flex-row items-center lg:gap-x-4">
                {date}
                <CrossIcon eliminar={eliminar} />
            </p>
        </div>
    )
}