
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

         {/* Sidebar */}
      <Sidebar className='app__sidebar' style={{backgroundColor:' rgb(22,24,42)'}}/>
         {/* Header */}

         <div className='app__containerHnDdivision'>
         <Header className="app__containerHeader"/>
         <Dashboard className="app__containerDashboard"/>
        </div>
      
     

     

      {/* Dashscreen
       */}
    </div>
  );
}

export default App;
