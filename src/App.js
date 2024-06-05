import React, {useState} from "react";
import { QueryClient,QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Collection from './components/Collection';

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('');

  
  return (
    <QueryClientProvider client= {queryClient}>
      <div className="App">
      <h1>infos</h1>
      <Navbar setPage= {setPage}/>
      <div className="content">
        {page === 'collection' ? <Collection /> : " "}
      </div>
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
