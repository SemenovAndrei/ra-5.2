import './App.css'
import ExchangeRates from './components/ExchangeRates/ExchangeRates'
import Filters from './components/Filters/Filters'
import NewsList from './components/NewsList/NewsList'

function App() {
  return (
    <div className="App">
      <Filters />
      <NewsList />
      <ExchangeRates />
    </div>
  )
}

export default App
