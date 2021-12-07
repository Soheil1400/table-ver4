import './App.css';
import Table from "./components/Table/table";
import Form from "./components/Form/form";
import {useState} from "react";

const students = [
  {id: 1, firstName: 'Soheil', lastName: 'Saedi Fard', job: 'Developer'},
  {id: 2, firstName: 'Reza', lastName: 'Tafreshi', job: 'Student'},
  {id: 3, firstName: 'Ali', lastName: 'Sadeghi', job: 'Designer'}
]

function App() {
  const [users, setUsers] = useState(students)
  const [nUser, setNUser] = useState({id: '', firstName: '', lastName: '', job: ''})
  const [state, setState] = useState('Create')
  const [visible,setVisible] = useState('none')
  const [search, setSearch] = useState('')
  return (
      <div className="App">
        <div className={'table'}>
          <Table state={state} setState={setState} nUser={nUser} setNUser={setNUser} users={users} setUsers={setUsers} setVisible={setVisible} search={search} setSearch={setSearch}/>
        </div>
        <div className={'black'} style={{display:visible}}>
        </div>
        <div className={'form'} style={{display:visible}}>
          <Form state={state} setState={setState} nUser={nUser} setNUser={setNUser} users={users} setUsers={setUsers} setVisible={setVisible}/>
        </div>
      </div>
  );
}

export default App;
