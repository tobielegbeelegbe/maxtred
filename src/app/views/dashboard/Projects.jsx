import { Grid, styled } from '@mui/material';
import { Fragment } from 'react';
import RowCards from './shared/RowCards';
import StatCards from './shared/ProjectCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';


const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));


const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Projects = () => {
  

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={20} md={8} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Projects;
