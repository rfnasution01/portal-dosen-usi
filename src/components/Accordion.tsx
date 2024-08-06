import { useState } from 'react'

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="rounded-2x border bg-primary-50 shadow-md">
      <div
        className="flex cursor-pointer items-center justify-between p-32 text-primary-900"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="px-32 pb-32">{children}</div>}
    </div>
  )
}
