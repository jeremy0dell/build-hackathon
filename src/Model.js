import React, { Component } from 'react';

import Ideogram from 'ideogram';
import './App.css'

class Model extends Component {

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
    <div style={{margin: '50px 15%'}} class="container">
      <h2>Model Performance </h2>
      <p>The confusion matrix on the test set is shown below. The test set is constituted of 4,197 new observations which were not used to train the model. A confusion matrix is used to assess the model performance on new data. </p>
      <p>Here, among the cancerous observations, 99.7% are classified correctly and the remaining 0.3% are classified as non-cancerous. Conversely, among the non-cancerous observations, 98.5% are classified as such and the remaining 1.5% are classified as cancerous. </p>
      <p>This overall gives the model an impressive accuracy of 99.33% (the higher the better) and a f1 score of 99.79% (the higher the better). </p>
      <img id="matrix" src={process.env.PUBLIC_URL + "/confusion_matrix2.png"} />
      <h2>CpG Site Importance </h2>
      <p>Using the model architecture, we can extract a list of the most useful CpG sites, i.e. the CpG sites for which the model attributes the greater importance. This information is especially for bioengineers who can then try to understand the gene role in the process. 

The 20 most important CpG sites and their location on chromosomes are highlighted on the graph below. </p>
      <div id="ideo-container"></div>
    </div>
    );
  }
}

export default Model;