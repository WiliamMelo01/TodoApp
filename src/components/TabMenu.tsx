import React, { useState, useContext } from 'react';

type PropTypes = {
    menuList: string[]
}

import { ActivedMenu } from '../contexts/ActivedMenu';

import { ActivedMenuInterface } from '../@types/@type.ActivedMenu';

export default function tabMenu({ menuList }: PropTypes) {

    const { activedMenuItem, setActivedMenuItem } = useContext(ActivedMenu) as ActivedMenuInterface;

    return (
        <div className="w-full">
            <ul className="h-12 w-full border-b border-secondary-100 flex items-center justify-center gap-4  sm:gap-6 md:gap-10 lg:gap-14 xl:gap-18 2xl:gap-20 mb-4" >
                {menuList.map((item, index) => {
                    return (
                        <li className='h-full relative'
                            key={index}
                            onClick={() => setActivedMenuItem(item)}
                        >
                            <a
                                className=' font-montserrat font-semibold text-secondary-100 text-sm hover:cursor-pointer px-3'
                                key={index}
                            >
                                {item}
                            </a>
                            {activedMenuItem === item &&
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#2F80ED] rounded-t-md">
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
