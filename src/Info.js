import React, { Component } from 'react';

class AppIdeogram extends Component {

  render() {
    return (
    <div style={{margin: '50px 15%'}} >
      <h2>Introduction</h2>
      <p>We partnered with Dr Noah Ollikainen, from the California Institute of Technology to use machine learning on DNA data to help cancer detection. 

This webapp is part of our team’s submission to the 2020 Hack for Social Good Hackathon. </p>
      <h2>Why</h2>
      <p>The Cancer Genome Atlas Program is a project that collected over 2.5 petabytes of data over 12 years. Vast portions of this data potential are still untapped. Dr Noah Ollikainen, who is a computational biologist, reached out to Slalom to explore, analyze, and better understand the data collected through the TCGA Project. Our hope is to be able to streamline the cancer detection process by bringing new ways of identifying cancerous tissues. The first part of the project was visualizing this data and the relation between cancer development; this project won the Tableau Hackathon in 2019. We are now taking this to the next step by modeling the relation between DNA data and cancer development. </p>
      <p>By partnering with CalTech, Dr Noah Ollikainen is bringing the domain knowledge while we are bringing novel ways of solving this problem through machine learning algorithms. </p>
      <h2>What</h2>
      <p>Our main focus was building a model to link DNA Methylation data with cancer development. DNA Methylation is DNA metadata and measures a process by which methyl groups are added on to the DNA molecule, on specific CpG sites.  </p>
      <p>We carefully selected the 5,000 DNA sites that showed the greatest difference between cancerous and healthy patients. We then first built a model to predict whether the patient was likely to be diagnosed with cancer. We tried multiple machine learning algorithms and settled on using XGBoost. </p>
      <p>Because our goal is to make our model widely available, we then moved on to developing our MVP: a web-application to allow users to interact with our trained model. </p>
      <h2>Wow</h2>
      <p>Our XGBoost model that predicts whether a patient’s tissue sample is cancerous has an overall accuracy of more than 99%. This means that fewer than 1 out 100 samples will be misclassified. Building on this, our MVP allows a non-initiated machine learning user to submit new observations to the model and receive the model’s predictions. Moreover, the MVP explains how our model makes the decision. By displaying the features of the model, thus the DNA sites that the model is using, it allows researchers to look further into the role of those genes into cancer development. All of this, we hope will help streamline cancer detection and tell with greater efficiency whether someone could be diagnosed with cancer.  </p>
      <h2>Who are we?</h2>
      <p>Our team is composed of four data scientists - Antonin Fontaine (NYC), Malik Mubeen (NYC), Hassan Mahmood (NYC) and Adrien Galamez (NYC), one software engineer – Jeremy Odell (NYC) and one consultant with a bioengineering background – Elizabeth Schongar (Denver). </p>
    </div>
    );
  }
}

export default AppIdeogram
