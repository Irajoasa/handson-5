import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout