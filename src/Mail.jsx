import React, { Component } from 'react';
import { Button, Item, Image, Label, Icon } from 'semantic-ui-react';

import S from './styles.js';
import store from './redux/store.js';

class Mail extends Component {
  constructor(props) {
      super(props);
  };

  onClick =  () => store.dispatch('SUBSTRACT');

  render() {
    const {     
        mail : {
          firstName,
          lastName,
          avatar, 
          object,
          content,
          timeStamp,
        },
        index,
    } = this.props;

    return (
    <div style={{ ...S.mailWrapper, backgroundColor: index%2 === 0 ? '#f5f4f4' : 'white' }}>
        <div style={S.mailHeader}>
          <div style={S.senderInfo}>
            <img src={avatar} style={S.senderAvatar}/>
            <div 
              color='blue'
              style={S.senderLabel}  
            >
              {`${ firstName} ${ lastName}`}
            </div>
          </div>
          <div 
            style={S.mailObject}
          >
            <div>{object}</div>
          </div>
          <div 
            style={S.mailTimeStamp}
          >
            {`${ Math.round(( Date.now() - timeStamp) / 6000) } minutes ago` }
          </div>
        </div>
        <div 
          style={S.mailContent}
        >
          <div>{content}</div>
          <Button
            icon
            onClick={this.onClick}
            color='red'
            style= {S.mailButton}
          >
            <Icon name='delete' />
          </Button>
        </div>
      </div>
    );
  }
};

export default Mail;