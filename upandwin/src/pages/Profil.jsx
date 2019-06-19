import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
      selectedFile: null,
      uploadedImage: '',
    };

    this.fileSelectedhandler = this.fileSelectedhandler.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      const { user } = this.props;
      const userString = JSON.stringify(user.alias);
      localStorage.setItem('user', userString);
    }
    const { profils } = this.state;
    profils.push(JSON.parse(localStorage.getItem('user')));
    this.setState({ profils });
  }

  fileSelectedhandler = (event) => {
    this.setState({
      selectedFile: (event.target.files[0]),
      uploadedImage: URL.createObjectURL(event.target.files[0]),
    });
  }

  fileUploadHandler = () => {
    const { selectedFile } = this.state;
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    axios.post('http://localhost:3005/', fd, {
      onUploadProgress: (ProgressEvent) => {
        console.log(`Upload Progress: ${Math.round(ProgressEvent.loaded / ProgressEvent.total * 100)}%`);
      },
    })
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    const { user } = this.props;
    const { profils } = this.state;
    const { uploadedImage } = this.state;
    return (
      <div className="profil">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>{user ? user.alias : profils[0]}</h1>
        </div>
        <div>
          <input
            type="file"
            onChange={this.fileSelectedhandler}
          />
          <button type="button" onClick={this.fileUploadHandler}>Upload</button>
        </div>
        <div>
          {this.selectedFile}
        </div>
        <div>
          <img alt="avatar" src={uploadedImage} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

const mstp = state => ({
  ...state,
});

export default connect(mstp)(Profil);
