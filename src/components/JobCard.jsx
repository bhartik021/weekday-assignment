import React from "react";
import { Card, CardContent, Typography } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary">
          {job.company}
        </Typography>
        <Typography variant="body2" component="p">
          {job.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
