import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import WelcomeAlert from './components/WelcomeAlert'
//import AllTheBooks from "./components/AllTheBooks";
import AllTheBooksClass from "./components/AllTheBooksClass";

function App() {
 
  return (
    <>
      <MyNav />
      <WelcomeAlert />
      <AllTheBooksClass />
      <MyFooter />
    </>
  )
}

export default App
