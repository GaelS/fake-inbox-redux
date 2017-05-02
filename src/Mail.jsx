import React from "react";
import { Button, Image, Label, Icon } from "semantic-ui-react";

import S from "./styles.js";
import store from "./redux/store.js";

const Mail = props => {
  const {
    mail: { firstName, lastName, avatar, object, content, timeStamp, read },
    index,
    onDelete,
    onClickAsRead
  } = props;
console.log(index % 2 === 0)
  return (
    <div
      style={{
        ...S.mailWrapper,
        backgroundColor: index % 2 === 0 ? "lightgrey" : "white"
      }}
    >
      <div style={S.mailHeader}>

        {
          <div style={S.senderInfo}>
            <div style={S.header}>
              <div>
                <img src={avatar} style={S.senderAvatar} />
                <div color="blue" style={S.senderLabel}>
                  {`${firstName} ${lastName}`}
                  <div style={S.mailTimeStamp}>
                    {`${Math.round((Date.now() - timeStamp) / 6000)} minutes ago`}
                  </div>
                </div>
              </div>
              <div style={S.subheader}>
                <div style={S.mailObject}>
                  <div>{object}</div>
                </div>
                <div style={S.subheaderActions}>
                  <Button
                    icon
                    onClick={onClickAsRead}
                    color={read ? "green" : "blue"}
                    style={S.mailButton}
                  >
                    <Icon name={read ? "check" : "envelope"} />
                  </Button>
                  <Button
                    icon
                    onClick={onDelete}
                    color="red"
                    style={S.mailButton}
                  >
                    <Icon name="delete" />
                  </Button>
                </div>
              </div>
            </div>
            <div style={S.mailContent}>
              <div>{content}</div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Mail;
