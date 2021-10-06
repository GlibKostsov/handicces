import './App.css'
import { Switch, Route, Link } from 'react-router-dom'

import SimpleContainer from './components/container/SimpleContainer'
import OfficeListScreen from './screens/OfficeListScreen'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <SimpleContainer>
          <Switch>
            <Route path='/offices/' component={OfficeListScreen} />
          </Switch>
        </SimpleContainer>
      </main>
      <Footer />
    </div>
  )
}

export default App
