import { ADD, REMOVE, MARK_MAIL_AS_READ } from './actions';
import generateMail from '../utils';

export default (action, state) => {
  switch(action.type){
    case ADD:
      const newMail = generateMail(); 
      return { mails: [ ...state.mails, newMail ] };      
      break;
    case REMOVE:
      const indexToDelete = action.payload.index;
      const mails = state.mails.filter((mail, i) => i !== indexToDelete); 
      return { mails };
      break;
    case MARK_MAIL_AS_READ:
      const indexAsRead = action.payload.index;
      return { mails: state.mails.map( (mail, index) => ({...mail, read : mail.read || index === indexAsRead }) ) };
    default:
      return state;
  };
};
