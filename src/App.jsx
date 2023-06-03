import { Provider } from 'react-redux'
import Header from './Components/Header'
import Input from './Components/Input'
import Todos from './Components/Todos'
import store from './Redux/Store/store'
import TaskUpdater from './Components/TaskUpdater'
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <div className='text-center col-5 m-auto shadow-lg p-3 mb-5 bg-body rounded mt-5 mainDiv'>
        <Header />
        <Input />
        <Todos />
        <TaskUpdater />
      </div>
    </Provider>
  )
}

export default App
