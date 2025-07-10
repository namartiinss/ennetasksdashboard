import Board from '../components/view/Dashboard/Board'
import Sidebar from '../components/view/Dashboard/Sidebar'

function page() {

  return (
    <div className='flex items-start p-8 bg-[#F3F3F3] gap-8'>
      <Sidebar />
      <Board />
    </div>
  )
}

export default page