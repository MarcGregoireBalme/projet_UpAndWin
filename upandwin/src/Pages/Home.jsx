import React, { Component } from 'react';
import './Home.css';
import LogoJeu from '../Images/League_of_Legends_Logo.png';
import Topnav from '../Components/Topnav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <Topnav />

        <div className="Addvertising-img">
          <div className="Addvertising">
            <img src={LogoJeu} className="Logo-jeu" alt="" />
            <h1>
              <span className="Text-background">
              Les tutos
                {' '}
                <span className="Semi-bold-Italic">League of Legends</span>
                {' '}
              sont maintenant disponibles sur Up&Win !
              </span>
            </h1>
            <button type="button" className="Button">
              Go !
            </button>
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend dapibus ipsum a mattis. Mauris at est vel justo euismod tristique a ac ipsum. Donec non justo felis. Donec magna quam, ornare a magna id, maximus pellentesque velit. Nunc ultricies mi sed sapien porttitor dignissim. Aliquam posuere sagittis aliquet. Donec non elit elementum, venenatis elit ac, aliquet tortor. Nunc placerat est faucibus, condimentum lorem vitae, maximus orci. Integer pulvinar ipsum non massa efficitur, non gravida sapien venenatis. Vivamus luctus est eu diam cursus gravida. Maecenas in rhoncus lacus. Aliquam ultrices ultrices congue. Vivamus hendrerit rutrum nisl. Ut fringilla risus non arcu aliquam porttitor.

            Praesent aliquet euismod ligula, a pretium mi tristique sit amet. Quisque ac tortor eget lectus rutrum accumsan in sed nibh. Quisque sollicitudin mauris risus, id facilisis metus pharetra in. Nunc vel erat eget turpis commodo tempor sed ac nunc. Aliquam congue aliquet eros, a finibus lorem cursus eget. Suspendisse malesuada auctor lorem blandit dictum. Etiam eget pellentesque quam. Fusce eu lacinia quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque erat ac ipsum sagittis finibus. Morbi et nisl ligula.

            Nam sem purus, vehicula sed scelerisque eget, dapibus vitae leo. Sed a efficitur orci. Aenean at enim elit. Nulla ultrices tincidunt lacus nec efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempus nec eros id sodales. Sed iaculis cursus est tincidunt fringilla. Suspendisse gravida vel quam ac condimentum.

            Suspendisse eu dui quis lacus viverra mollis. Duis porttitor massa sapien, quis imperdiet tortor pharetra sed. Nunc molestie rhoncus justo, dapibus tempor metus hendrerit et. Aliquam erat volutpat. Cras tristique eros nec velit dapibus, quis sagittis tellus hendrerit. Pellentesque in lobortis augue. Sed at porta risus, at viverra nisl. Duis quis pulvinar magna. Aenean ac dui porttitor, molestie lacus at, semper turpis. Aenean ut ante nunc. Aliquam non diam pretium, tempor eros id, vulputate tellus. Donec sem nisl, gravida in auctor ac, tempor eleifend enim. Nulla facilisi. Sed pulvinar convallis ex tempor laoreet. Aenean at neque eget ex semper rutrum eget non enim.

            Aliquam erat volutpat. Nulla viverra, sapien non lobortis posuere, augue quam fringilla turpis, quis mattis turpis felis sit amet neque. In molestie tortor vel lacus mollis, ut sagittis arcu egestas. Maecenas eros orci, pellentesque sit amet justo quis, euismod sodales eros. Nulla quis tincidunt nulla. Nullam congue felis dolor, eget interdum tortor vulputate id. Integer ut ultrices ex. Donec gravida arcu sem, a aliquet dolor sollicitudin eu. In massa dui, rhoncus vel lorem in, sollicitudin ultricies nisl. Nullam vitae lobortis libero. Donec eget ex eget magna convallis pulvinar vitae ac dolor. Nunc fringilla nisl quis tellus scelerisque, nec finibus metus venenatis.
          </p>
        </div>

      </div>
    );
  }
}

export default Home;
