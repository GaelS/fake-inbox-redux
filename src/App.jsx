import React, { Component } from 'react';
import Mail from './Mail';
import {Icon } from 'semantic-ui-react';

import generateMails from './utils';
import S from './styles';
import store from './redux/store.js';

class App extends Component {
  constructor(props) {
    super(props);
  };
  
  //Fake refresh button and add random mails each time
  // it is clicked
  hitRefreshButton = () => {
    //Calculate random number between 1 and 5
    const newMails = Math.round(Math.random() * 4) + 1; 
    for(let i = 0; i < newMails; i++) {
      store.dispatch('ADD');
    };
  };

  render() {
    const { counter } = this.props;
    const mails = generateMails(store.getState().counter);
    const unreadMails = mails.filter(mail => !mail.read);

    return (
      <div 
        style={S.mainWrapper}
      >
        <div 
          style={S.mainTitle}
        >
          <div>{`MY INBOX (${ unreadMails.length }/${mails.length})`}</div>
          <Icon 
            name='repeat' 
            style={S.refreshButton}  
            onClick={this.hitRefreshButton}
          />
        </div>
        { mails.map( (mail, index) => <Mail key={mail.object} mail={mail} index={index} />) }
      </div>
    );
  }
}

export default App;
