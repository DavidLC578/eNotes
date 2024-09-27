export function ArrowIcon({click}) {
    return (
        <svg
            id="arrowIcon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer size-12 absolute right-2 top-1/2 transform -translate-y-1/2 -rotate-90"
            onClick={click}
            type="submit"
        ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.82 14.24L12.53 18.53C12.39 18.67 12.2 18.75 12 18.75C11.8 18.75 11.61 18.67 11.47 18.53L7.18 14.24C6.89 13.95 6.89 13.47 7.18 13.18C7.47 12.89 7.95 12.89 8.24 13.18L11.25 16.19V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V16.19L15.76 13.18C16.05 12.89 16.53 12.89 16.82 13.18C16.97 13.33 17.04 13.52 17.04 13.71C17.04 13.9 16.96 14.1 16.82 14.24Z"
                    fill="#292D32"></path>
            </g></svg
        >
    )
}