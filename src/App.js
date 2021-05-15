import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import './App.css';
import {Container} from 'react-bootstrap';
import Job from './Job';
import Jobspagination from './Jobspagination';
 
function App() {

const [params, setParams] = useState({});
const [page, setPage] = useState(1);
const { jobs, loading, error, hasNextPage } = useFetchJobs(params,page);

  return (
    <Container>
      <h1 className="mb-4 mt-2">Github Jobs</h1>
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
