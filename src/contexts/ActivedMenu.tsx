import { createContext, useState, useEffect } from 'react';

import { ActivedMenuInterface } from '../@types/@type.ActivedMenu';

export const ActivedMenu = createContext<ActivedMenuInterface | null>(null);

export default function ActivedMenuProvider({ children }: { children: React.ReactNode }) {

    const [activedMenuItem, setActivedMenuItem] = useState('All');

    return (
        <ActivedMenu.Provider value={{ activedMenuItem, setActivedMenuItem }}>
            {children}
        </ActivedMenu.Provider>
    )
}
