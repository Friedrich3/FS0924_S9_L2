import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import WelcomeAlert from './components/WelcomeAlert'
import AllTheBooks from "./components/AllTheBooks";

function App() {
 
  return (
    <>
      <MyNav />
      <WelcomeAlert />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
