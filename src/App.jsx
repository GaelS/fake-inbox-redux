import React, { Component } from 'react';
import Mail from './Mail';
import { Icon, Label } from 'semantic-ui-react';

//import generateMails from './utils';
import S from './styles';
import store from './redux/store';
import { addMail, removeMail, markMailAsRead } from './redux/actions';
class App extends Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  };

  //Fake refresh button and add random mails each time
  // it is clicked
  hitRefreshButton = () => {
    //Calculate random number between 1 and 5
    const newMails = Math.round(Math.random() * 4) + 1; 
    for(let i = 0; i < newMails; i++) {
      store.dispatch(addMail());
    };
  };

  render() {
    const mails = store.getState().mails;
    const unreadMails = mails.filter(mail => !mail.read);

    return (
      <div 
        style={S.mainWrapper}
      >
        <div 
          style={S.mainTitle}
        >
          <div 
            style={S.title}
          >
            My Inbox
            {' '}  
          </div>
          <Label 
            color={mails !== 0 ? 'green' : ''}
          >
            <Icon name='mail'/> {unreadMails.length}
          </Label>
        </div>
        <div
          style={S.refreshButton} 
        >
        <Label 
          as="button"
          content="Refresh" 
          icon="refresh"
          onClick={this.hitRefreshButton}
        />
        </div>
        {mails.length === 0 && <div style={S.centeredContainer}><div>No new mail, have a good day !</div></div>}
        { mails.map( (mail, index) => (
          <Mail key={mail.object} mail={mail} index={index} onDelete={ () => store.dispatch(removeMail(index)) } onClickAsRead={ () => store.dispatch(markMailAsRead(index))} />) 
        ) }
      </div>
    );
  }
}

export default App;
