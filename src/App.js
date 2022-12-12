import './App.css';
import { Friday } from './Friday';
import { Monday } from './Monday';
import { Saturday } from './Saturday';
import { Sunday } from './Sunday';
import { Thursday } from './Thursday';
import { Tuesday } from './Tuesday';
import { Wednesday } from './Wednesday';

function App() {
  return (
    <div>
    <div className="App">
      <Monday/>
      <Tuesday/>
      <Wednesday/>
      <Thursday/>
      <Friday/>
    </div>
    <div className='AppWeekend'>
      <Saturday/>
      <Sunday/>
    </div>

    </div>
  );
}

export default App;
