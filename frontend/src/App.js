import './App.css'

import { Switch, Route, Link } from 'react-router-dom'
import GetStarted from './screens/GetStartedScreen'
import OfficeDetails from './screens/OfficeDetail'
import SimpleContainer from './components/container/SimpleContainer'
import OfficeListScreen from './screens/OfficeListScreen'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NewOfficeForm from './screens/NewOfficeForm'
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <SimpleContainer>
          <Switch>
            <Route exact path={['/', 'login']} component={GetStarted} />
            <Route exact path='/home' component={OfficeListScreen} />
            <Route exact path='/office/new' component={NewOfficeForm} />
            <Route path='/office/:id' component={OfficeDetails} />
          </Switch>
        </SimpleContainer>
      </main>
      <Footer />
    </div>
  )
}

export default App
