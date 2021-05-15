import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import './App.css';
import {Container} from 'react-bootstrap';
import Job from './Job';
import Jobspagination from './Jobspagination';
import SearchForm from './SearchForm';
 
function App() {

const [params, setParams] = useState({});
const [page, setPage] = useState(1);
const { jobs, loading, error, hasNextPage } = useFetchJobs(params,page);

function handleParams(e){
  const param = e.target.name;
  const value = e.target.value;
  setPage(1)
  setParams(prevParams => {
    return {
      ...prevParams, [param]: value
    }
  })
}

  return (
    <Container>
      <h1 className="mb-4 mt-2 ml-3">Github Jobs</h1>
      <SearchForm param={params} onParamsChange={handleParams} />
      <Jobspagination page={page} setPage={setPage} hasnextPage={hasNextPage}></Jobspagination>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error!! Try refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <Jobspagination page={page} setPage={setPage} hasnextPage={hasNextPage}></Jobspagination>
      
    </Container>
  );
}

export default App;
