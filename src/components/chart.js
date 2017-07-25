import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import _ from 'lodash';

const average = (data) => _.round(_.sum(data)/data.length);

export default (props)=>{
  return(
    <div className="chart-line">

      <Sparklines height={100} width={120} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
      <div>  {average(props.data)} {props.units}</div>

    </div>
  )
}
