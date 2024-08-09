import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts/Contacts'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:category' element={<ItemListContainer />}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
        <Route path='/category/*' element={<NotFoundPage />}></Route>
        <Route path='/detail/*' element={<NotFoundPage />}></Route>
        <Route path='/contactos' element={<Contacts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
