import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import JobCard from './components/JobCard';
import FilterPanel from './components/FilterPanel';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ limit: 10, offset: 0 }),
        });
        const data = await response.json();
        if (Array.isArray(data)) {
          setJobs(data);
          localStorage.setItem('jobs', JSON.stringify(data));
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FilterPanel />
        </Grid>
        <Grid item xs={12} sm={8}>
          {Array.isArray(jobs) && jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
