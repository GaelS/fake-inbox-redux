export default {
    mainWrapper: {
        width : '1000px',
        maxHeight : '1000px',
        overflow: 'auto',
        margin: 'auto',
        marginTop: '20px',
        boxShadow: '2px 2px 8px 2px rgba(0,0,0,.3)',
        borderRadius: '3px',
        backgroundColor: 'white',
    },
    mainTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',    
        fontSize: '25px',
        padding: ' 20px 0px 30px 0',
    },
    refreshButton: {
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '15px',
    },
    senderInfo: {
        display: 'flex',
    },
    senderLabel: {
        margin: 'auto',
        padding: '5px',

    },
    senderAvatar: {
        borderRadius: '40px',
        maxWidth: '60px',
        maxHeight: '60px' 
    },
    mailWrapper: {
        borderBottom: '1px solid grey',
        paddingBottom: '10px',
    },
    mailHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
        padding: '10px',
    },
    mailObject: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
    mailTimeStamp: {
        fontSize: '9px',
    },
    mailButton: {
        height : '36px',
        borderRadius: '30px',
    },
    mailContent: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'justify',
        padding: '10px 40px 10px 40px',
    },
};