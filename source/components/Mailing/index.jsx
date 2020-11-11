import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { fetchMailingData } from 'Actions';
import { Icon } from 'Components/Icon';
import { ErrorMessage } from 'Components/ErrorMessage';

import './styles.sass';

const SORT_DIR_ASC = 'sort-asc';
const SORT_DIR_DESC = 'sort-desc';

const tableColumns = [
  { key: 'id', title: 'id', width: '5%' },
  { key: 'title', title: 'title', width: '15%' },
  { key: 'message', title: 'message', width: '60%' },
  { key: 'open_date', title: 'date', width: '10%' },
  { key: '', title: '', width: '10%' }
];

function Mailing(props) {
  const [ sortDirection, setSortDirection ] = useState(SORT_DIR_ASC);
  const [ sortColumn, setSortColumn ] = useState('id');

  useEffect(() => {
    document.title = 'Admin Panel • Mailing';

    props.fetchMailingData();
  }, []);

  const onSort = (newSortColumn) => {
    if (sortColumn === newSortColumn) {
      setSortDirection(sortDirection === SORT_DIR_ASC ? SORT_DIR_DESC : SORT_DIR_ASC);
    }
    else {
      setSortColumn(newSortColumn);
      setSortDirection(SORT_DIR_ASC);
    }
  };

  const sorter = ({ [sortColumn]: a }, { [sortColumn]: b }) => {
    return sortDirection === SORT_DIR_ASC ?
      (a < b) ? -1 : (a > b) :
      (a < b) ? 1 : (a > b) ? -1 : 0;
  };


  if (props.mailing.fetchingError) {
    return (
      <ErrorMessage
        errorTitle={props.mailing.fetchingError.name}
        errorText={props.mailing.fetchingError.message}
        reloadBtn={true}
      />
    );
  }

  if (props.mailing.isFetching) {
    return (
      <div className='loading__container'>
        <Icon className='loading__spinner'type='spinner' width='50' height='50'/>
      </div>
    );
  }

  if (_.isEmpty(props.mailing.data)) {
    return <div className='mailing_layout mailing__no-mails'>Empty</div>;
  }

  return (
    <div className='mailing_layout'>
      <table className='mailing_table' rules='cols'>
        <thead>
          <tr>
            {
              tableColumns.map((v, k) => (
                <th
                  key={k}
                  width={v.width}
                  onClick={() => onSort(v.key)}>
                    {v.key && <Icon type={v.key === sortColumn ? sortDirection : 'sort'}/>}
                    {v.title}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.mailing.data
              .sort(sorter)
              .map((v, k) => {
                return (
                  <tr key={k} className='mailing__item'>
                    <td>{v.id}</td>
                    <td>{v.title}</td>
                    <td>{v.message}</td>
                    <td>{new Date(v.open_date * 1000).toLocaleString()}</td>
                    <td>
                      <button className='mailing__act-btn--mark'>
                        <Icon type='start' width='15px' height='20px'/>
                      </button>
                      <button className='mailing__act-btn--reply'>
                        <Icon type='reply' width='15px' height='20px'/>
                      </button>
                      <button className='mailing__act-btn--delete'>
                        <Icon type='trash' width='15px' height='20px'/>
                      </button>
                    </td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  );
}

Mailing.propTypes = {
  mailing: object.isRequired,
  fetchMailingData: func.isRequired
};

const mapStateToProps = (state) => ({ mailing: state.mailing });

const MailingWrapped = connect(
  mapStateToProps,
  { fetchMailingData }
)(Mailing);

export { MailingWrapped as Mailing };