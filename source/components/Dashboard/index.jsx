import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDashboardData } from 'Actions';
import { object, func } from 'prop-types';
import { GridItem } from 'Components/GridItem';
import { Icon } from 'Components/Icon';

import './styles.sass';

function Dashboard(props) {
  useEffect(() => {
    document.title = 'Admin Panel • Dashboard';

    props.fetchDashboardData();
  }, []);


  if (props.dashboard.isFetching) {
    return (
      <div className='loading__container'>
        <Icon className='loading__spinner'type='spinner' width='50' height='50'/>
      </div>
    );
  }

  return (
    <div className='db__layout'>
      <GridItem className='db__currencies'>
        {
          props.dashboard.data.currencies.map((v, k) => {
            return (
              <div key={k} className='currencies__container' style={{
                background: `linear-gradient(135deg, ${v.color_from} 0%, ${v.color_to} 100%)`
              }}>
                <div className='currencies__pair'>{v.pair}</div>
                <div className='currencies__rate'>{v.rate}$</div>
              </div>
            );
          })
        }
      </GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </div>
  );
}

Dashboard.propTypes = {
  dashboard: object.isRequired,
  fetchDashboardData: func.isRequired
};

const mapStateToProps = (state) => ({ dashboard: state.dashboard });

const DashboardWrapped = connect(
  mapStateToProps,
  { fetchDashboardData }
)(Dashboard);

export { DashboardWrapped as Dashboard };