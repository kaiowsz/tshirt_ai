import React, { MouseEventHandler } from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

interface TabProps {
  tab: { name: string, icon: string };
  isFilterTab?: boolean;
  isActiveTab?: unknown;
  handleClick: MouseEventHandler<HTMLDivElement>;
}


const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }: TabProps) => {
  const snap = useSnapshot(state)
  const activeStyles = isFilterTab && isActiveTab 
  ? { backgroundColor: snap.color, opacity: 0.5 } 
  : { background: "transparent", opacity: 1 }

  return (
    <div key={tab.name} className={`tab-btn ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
    onClick={handleClick}
    >
      <img src={tab.icon} alt={tab.name} className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"}`} />


    </div>
  )
}

export default Tab