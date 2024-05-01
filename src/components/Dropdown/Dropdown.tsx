const Dropdown = ({itemList, currentItem, handleClickDropdownItem, isFocusing} : any) => {
    
    return (
        <>
            <div className="h-2 w-full absolute top-[100%] left-0 bg-transparent z-50 "></div>
            <div className={`${isFocusing ? "visible opacity-100" : "invisible opacity-0"} transition-opacity w-full md:right-0 flex duration-500 absolute border border-dropdown-border mt-2 left-0 top-[100%] flex-col bg-white rounded-lg p-[0.625rem] z-50 shadow-lg`}>
                {Array.from(itemList.values()).map((item : any, index : number) => (
                        <div 
                            key={index}
                            onClick={() => {
                                handleClickDropdownItem(Array.from(itemList.keys())[index])
                            }}
                            className={`${itemList.get(currentItem) == item && 'bg-white-red'} hover:bg-white-red text-left px-3 py-[0.625rem] rounded-lg text-primary-black text-base whitespace-nowrap`}
                            >
                            <div className="min-w-[106px]">{item}</div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Dropdown;