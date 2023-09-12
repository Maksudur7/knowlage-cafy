
import './App.css'
import Bookmarks from './ComponentHeader/Bookmarks'
import Header from './ComponentHeader/Header'
import Blocks from './blocks/Blocks'

function App() {

  return (
    <>

      <Header></Header>
      <main className='md:flex'>
        <Blocks></Blocks>
        <Bookmarks></Bookmarks>
      </main>

    </>
  )
}

export default App
