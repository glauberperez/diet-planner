import { useState } from "react"
import { Menu, Transition, Dialog } from '@headlessui/react'
import { FaGear } from "react-icons/fa6"


const links = [
    {
        name: 'Register Food',
        href: '#',
    },
    {
        name: 'Settings',
        href: '#',
    },
]

const NavbarMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="items-center ml-3" onClick={() => setShowMenu(!showMenu)}>
                <FaGear className="text-2xl dark:text-white"/>
            </Menu.Button>
            <Transition
                show={showMenu}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Menu.Items className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    <div className="px-1 py-1 ">
                        {links.map((link, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <a
                                        href={link.href}
                                        className={`${
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default NavbarMenu;


<Menu.Item>
{({ active }) => (
    <a
        href="#"
        className={`${
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
    >
        Settings
    </a>
)}
</Menu.Item>