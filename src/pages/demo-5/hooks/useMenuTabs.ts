import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { menuTabs } from '../data/menuData'

export function useMenuTabs() {
  const [activeTab, setActiveTab] = useState(menuTabs[0].id)
  const contentRef = useRef<HTMLDivElement>(null)

  const changeTab = (tabId: string) => {
    if (tabId === activeTab) return
    const el = contentRef.current
    if (!el) {
      setActiveTab(tabId)
      return
    }
    gsap.to(el, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(tabId)
        gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 })
      },
    })
  }

  const activeTabData = menuTabs.find((t) => t.id === activeTab)!
  return { menuTabs, activeTab, activeTabData, changeTab, contentRef }
}
