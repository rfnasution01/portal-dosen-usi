import { Outlet } from 'react-router-dom'

export default function CommonLayout() {
  return (
    <div className="scrollbar flex h-full w-full overflow-y-auto">
      <Outlet />
    </div>
  )
}
