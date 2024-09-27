export function InputComponent({ cambio }) {
    return (
        <input type="text" className='rounded-3xl h-8
        ps-7 pe-20 py-7 text-xl w-full text-ellipsis 
        ' placeholder="Anotando... " onChange={cambio} />
    )
}