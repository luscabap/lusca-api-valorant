import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [agents, setAgents] = useState([]);

  async function requisicao(){
    const req = await axios.get('https://valorant-api.com/v1/agents');
    const teste = req.data.data
    const agentesReq = teste.map(x => x.displayName)
    console.log(agentesReq)
    setAgents(agentesReq)
  }

  // useEffect(() => {
  //   requisicao()
  //   }, [])

  return (
    <>
    <div className='flex items-center justify-center flex-col bg-zinc-950 h-screen'>
      <Header />
      <button className='p-1 bg-slate-200 ease-in-out duration-300 rounded-sm hover:bg-slate-500'>CLIQUE</button>
      <div>
        {
          agents.map((item, i) => <Card nome={item} key={i}/>)
        }
      </div>
      <h3>teste</h3>
    </div>
      
    </>
  )
}

export default App
