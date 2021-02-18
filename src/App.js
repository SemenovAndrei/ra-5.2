import './App.css'
import SearchBlock from './components/SearchBlock/SearchBlock'
import WidgetBottom from './components/WidgetBottom/WidgetBottom'
import WidgetTop from './components/WidgetTop/WidgetTop'

/**
 * Приложение
 */
function App() {
  return (
    <div className="App">
      <WidgetTop />
      <SearchBlock />
      <WidgetBottom />
    </div>
  )
}

export default App
