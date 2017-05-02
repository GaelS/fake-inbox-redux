export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const MARK_MAIL_AS_READ = 'MARK_MAIL_AS_READ';

export const addMail = () => ({
    type: ADD,
});

export const removeMail = index => ({
    type: REMOVE,
    payload: { index },
});

export const markMailAsRead = index => ({
    type: MARK_MAIL_AS_READ,
    payload: { index },
});