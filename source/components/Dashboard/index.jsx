import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

import { numberFormat } from 'Utilities';
import { fetchDashboardData } from 'Actions';
import { GridItem } from 'Components/GridItem';
import { Icon } from 'Components/Icon';
import { ErrorMessage } from 'Components/ErrorMessage';

import './styles.sass';

function Dashboard(props) {
  useEffect(() => {
    document.title = 'Admin Panel • Dashboard';

    props.fetchDashboardData();
  }, []);


  if (props.dashboard.fetchingError) {
    return (
      <ErrorMessage
        errorTitle={props.dashboard.fetchingError.name}
        errorText={props.dashboard.fetchingError.message}
        reloadBtn={true}
      />
    );
  }

  if (props.dashboard.isFetching) {
    return (
      <div className='loading__container'>
        <Icon className='loading__spinner'type='spinner' width='50' height='50'/>
      </div>
    );
  }

  const data = props.dashboard.data;
  return (
    <div className='db__layout'>
      <GridItem className='db__currencies'>
        {
          data.currencies.map((v, k) => {
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
      <GridItem>
        <h3 className='db__chart-title'>Пользователи по странам</h3>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data.users_from}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='country' angle={-45} textAnchor='end' interval={0} height={80}/>
            <YAxis allowDecimals={false}/>
            <Tooltip separator=': ' formatter={(v) => `${numberFormat(v)}`}/>
            <Bar name='Количество' dataKey='value' fill='#8884d8'/>
          </BarChart>
        </ResponsiveContainer>
      </GridItem>
      <GridItem>
        <h3 className='db__chart-title'>Пользователи по странам</h3>
        <ResponsiveContainer width='100%' height={300}>
          <RadarChart outerRadius={130} data={data.users_from}>
            <PolarGrid/>
            <PolarAngleAxis dataKey='country'/>
            <PolarRadiusAxis/>
            <Radar dataKey='value' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6}/>
          </RadarChart>
        </ResponsiveContainer>
      </GridItem>
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