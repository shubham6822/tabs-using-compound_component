import React, { createContext, useContext, useState } from 'react'

const TabContext = createContext<any>(null)

export default function Tabs({ children, defdefaultValue, className }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defdefaultValue)
    const contextValue = {
        activeTab,
        setActiveTab
    }
    return (
        <TabContext.Provider value={contextValue}>
            <div className={`${className}`}>
                {children}
            </div>
        </TabContext.Provider>

    )
}

Tabs.List = function TabsList({ children, className }: TabsListProps) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}

Tabs.Trigger = function TabsTrigger({ children, className, value }: TabsTriggerProps) {
    const { setActiveTab, activeTab } = useContext(TabContext)
    const isActive = activeTab === value;
    const activeClass = isActive ? 'bg-orange-500' : 'bg-slate-300';
    return (
        <button className={`${className} ${activeClass} px-4 py-3 m-3 rounded-xl`} onClick={() => setActiveTab(value)}>
            {children}
        </button>
    )
}

Tabs.Content = function TabsContent({ children, className, value }: TabsContentProps) {
    const { activeTab } = useContext(TabContext)
    return (
        <div className={`${className} px-4`}>
            {activeTab === value ? children : null}
        </div>
    )
}

interface TabsContentProps {
    children: React.ReactNode
    className?: string
    value: string
}

interface TabsTriggerProps {
    children: React.ReactNode
    className?: string,
    value: string
}

interface TabsListProps {
    children: React.ReactNode
    className?: string
}

interface TabsProps {
    children: React.ReactNode,
    defdefaultValue: string
    className?: string
}

