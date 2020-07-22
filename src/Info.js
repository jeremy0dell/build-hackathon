import React, { Component } from 'react';

import Ideogram from 'ideogram';

class AppIdeogram extends Component {

  componentDidMount() {
    return new Ideogram({
      organism: 'human',
      annotations: [{
        name: 'GNRH2',
        chr: '20',
        start: 3026277,
        stop: 3027468
      },
      {
        name: 'DEFB118',
        chr: '20',
        start: 31368601,
        stop: 31373923
      },
      {
        name: 'DEFB119',
        chr: '20',
        start: 31377164,
        stop: 31390590
      },{
        name: 'C20orf165',
        chr: '20',
        start: 44518897,
        stop: 44520361
      },
      {
        name: 'DEFB118',
        chr: '20',
        start: 31368601,
        stop: 31373923
      },
      {
        name: 'PMEPA1',
        chr: '20',
        start: 56283891,
        stop: 56285395
      },
      {
        name: 'IVL',
        chr: '1',
        start: 152908546,
        stop: 152911886
      },
      {
        name: 'CDH9',
        chr: '5',
        start: 26880597,
        stop: 27038586
      },
      {
        name: 'TERT',
        chr: '5',
        start: 1289275,
        stop: 1295970
      },
      {
        name: 'POMC',
        chr: '2',
        start: 25391072,
        stop: 25391875
      },
      {
        name: 'EFEMP1',
        chr: '2',
        start: 56150340,
        stop: 56151180
      },
      {
        name: 'HIST1H4D',
        chr: '6',
        start: 26188997,
        stop: 26189295
      },
      {
        name: 'PLA2G4E',
        chr: '15',
        start: 41981582,
        stop: 42051190
      },
      {
        name: 'KIR3DX1',
        chr: '19',
        start: 54532760,
        stop: 54532760
      },
      {
        name: 'ACER1',
        chr: '19',
        start: 6306142,
        stop: 6333612
      },
      {
        name: 'WT1',
        chr: '11',
        start: 32452144,
        stop: 32452708
      },
      {
        name: 'WT1',
        chr: '11',
        start: 32454874,
        stop: 32457311
      },
      {
        name: 'MADD',
        chr: '11',
        start: 47291200,
        stop: 47291858
      },
      {
        name: 'POLG2',
        chr: '17',
        start: 62492882,
        stop: 62493323
      },
      {
        name: 'SLC26A11',
        chr: '17',
        start: 78193980,
        stop: 78194954
      },
      {
        name: 'ASAM',
        chr: '11',
        start: 123066517,
        stop: 123066986
      }],
      container: '#ideo-container'
    });
  }

  render() {
    return (
    <div>
      <div>helloo</div>
      <div id="ideo-container"></div>
      <div>bye</div>
    </div>
    );
  }
}

export default AppIdeogram
