import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Info from './Info'
import Results from './Results'

 
import { CSVReader } from 'react-papaparse'
 
const buttonRef = React.createRef()
 
class Reader extends Component {
  state = {
    file: '',
    result: '',
    error: false,
  }

  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point 
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  }
  
  handleOnFileLoad = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
    this.setState({ file: data })
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }
 
  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }
 
  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }
  }
 
  handleUpload = (e, a, b) => {

    var copy = this.state.file.slice()
    copy.pop()
    copy = copy.slice(1)
    console.log('copy', copy)

    const res = [[],[],[],[],[]]

    for (var i = 0; i < copy.length; i++) {
      var idx = i % 5
      res[idx].push(Number(copy[i].data[2]))
    }

    console.log( 'calling ai-test-new with', JSON.stringify(res))
    // console.log('calling https://us-central1-gcp-nyc.cloudfunctions.net/ai-test-0 with', [this.state.file.slice(0,2).map(x => x.data)])
    // const arr = this.state.file.slice()

    fetch('https://us-central1-gcp-nyc.cloudfunctions.net/ai-test-new', {
      method: 'POST',
      body: JSON.stringify(res)
    })
      .then(r => {
        return r.text()
      })
      .then(res => {
        if (res === 'Hello World0') {
          this.setState({
            error: true,
            result: 'There was a problem with the CSV input, check GCP logs for more info'
          })
        } else {
          this.setState({
            error: false,
            result: res
          })
        }
      })
      .catch(console.log)

  }
 
  handleOptions = (e, a, b) => {
    // const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk2MGE3ZThlODM0MWVkNzUyZjEyYjE4NmZhMTI5NzMxZmUwYjA0YzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3ODEyMjA5MDc5NjU4NDM5OTA5IiwiZW1haWwiOiJqZXJlbXkub2RlbGxAc2xhbG9tLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiODQzNFV1M2FfLXlKOHg3RC1YX1VsZyIsImlhdCI6MTU5MDUxNjEzMCwiZXhwIjoxNTkwNTE5NzMwfQ.VhuSRXaZH0Mf_-FoH_O9pFSkU5G_72s2zVbeIf4VDAVB7HtgbCzclUzcswTahEkqKMReP_wFNtrpdTVWxDOA15pU5QZQiCyD96kDGOzLHhF-T-2C4WPxsyf7EMb9gdw7S-ydYGJR35V6vUONcA2KlhKE0EUa_8hsEHylgBn4EXeoQaWq-K448jATUx2jBUHWJ6Sqk9L0SsjBMO87uGGLcz5-4zlmp3pNY8xxWu1hSrHsk0PxhGBsawMhJnXMklRSG5KQR348NJsoONWIVkm-VuTUl1HVvYB_qkY9oaJ7Zzk81_-CHpZZBvWPEks4AJ5q7O_5jbwmI9AuToMm2MqLTw'
     // POST https://us-central1-gcp-nyc.cloudfuons.net/ai-test-1 -H "Content-Type:application/json" -d '["hi"]'  -H "Authorization: bearer $(gcloud auth print-identity-token)"

    console.log('calling https://us-central1-gcp-nyc.cloudfunctions.net/ai-test-1')
    fetch('https://us-central1-gcp-nyc.cloudfunctions.net/ai-test-1', {
      method: 'POST',
      body: {"hi": "bye"}
    })
      .then(r => r.text())
      .then(console.log)
      .catch(console.log)
  }
 
  render() {
    return (
      <div style={{ padding: 25 }}>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <div style={{ marginBottom: 20 }}>
              <h1>DNA Methylation Dashboard</h1>
              <p>Instructions:</p>
              <ol>
                <li>Choose or drag CSV with Methylation data into file input</li>
                <li>Press 'Upload' button to send data to run ML job on CSV data</li>
                <li>Wait for resuts to be printed below</li>
              </ol>
              <div>
                <button
                  type='button'
                  onClick={this.handleOpenDialog}
                  style={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    width: '10%',
                    height: 40,
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginBottom: 25
                  }}
                >
                  Browse file
                </button>
                <div
                  style={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ccc',
                    height: 45,
                    lineHeight: 2.5,
                    marginTop: 5,
                    marginBottom: 25,
                    paddingLeft: 13,
                    paddingTop: 3,
                    width: '60%'
                  }}
                >
                  {!file ? 'Click \'Browse file\' or drag a file in to upload' : file.name}
                </div>
                <button
                  style={{
                    borderRadius: 0,
                    height: 40,
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20
                  }}
                  onClick={this.handleRemoveFile}
                >
                  Remove
                </button>
                <button
                  style={{
                    borderRadius: 0,
                    height: 40,
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    display: this.state.file ? '' : 'none'
                  }}
                  onClick={this.handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          )}
        </CSVReader>
        <div>
          <h2>Results:</h2>
          { this.state.result.length > 0 &&
            <div style={{ color: this.state.error && 'darkred' }}>
              {this.state.error === true ? this.state.result :
              <div>
                Predicted stages:
                <Results result={JSON.parse(this.state.result)} />
              </div>
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Project Info" {...a11yProps(0)} />
          <Tab label="Project Methodology" {...a11yProps(1)} />
          <Tab label="DNA Methylation AI/ML POC" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Info />
      </TabPanel>
      <TabPanel value={value} index={1}>
      To be built: Info about methodology page
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Reader />
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}