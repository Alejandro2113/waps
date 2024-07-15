import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="contstr">
      <h1>hola</h1>
      <p>Somos waps, nos apasiona la tecnología y queremos compartir esa pasión contigo. Somos tu destino confiable para encontrar los últimos modelos de iPhones, Samsung Galaxy y otros dispositivos móviles de primera línea. Pero eso no es todo: también ofrecemos una amplia gama de accesorios, desde fundas elegantes hasta auriculares de alta calidad.</p>
      <p>¿Eres un amante de los videojuegos? ¡Estás en el lugar correcto! Explora nuestra selección de consolas de última generación, desde las clásicas hasta las más innovadoras. Ya sea que prefieras PlayStation, Xbox o Nintendo Switch, tenemos algo para todos los jugadores.</p>
      <p>Navega por nuestra tienda virtual y descubre lo último en tecnología. ¿Necesitas ayuda? Nuestro equipo de expertos está listo para asistirte. ¡Bienvenidos a TechGadget Store, donde la innovación y la diversión se encuentran!</p>

      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:category' element={<ItemListContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
