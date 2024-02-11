// thats gonna be the menu on the side of the table to add new items

const Menu = () => {
  return (
    <div>
        <div className="flex flex-row w-64 h-screen">
            <div className="flex items-center justify-center h-16 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">Menu</h1>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5">
                <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400">Add Item</div>
                </div>
                </li>
                <li className="px-5">
                <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-400">Add Item</div>
                </div>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu