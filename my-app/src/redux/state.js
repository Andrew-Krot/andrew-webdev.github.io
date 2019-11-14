let state = {
    profilePage: {
        posts: [{id: '1', message: 'Hello! How are you?', likeCount: '20'},
            {id: '2', message: "It's my first post", likeCount: '24'}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrew'},
            {id: '3', name: 'Lena'},
            {id: '4', name: 'Marina'},
            {id: '5', name: 'Olya'},
            {id: '6', name: 'Masha'}],
        messages: [
            {id: '1', message: 'Hi!'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Whats up?!'},
            {id: '4', message: 'Wanna eat?'},
            {id: '5', message: 'Ok'},
            {id: '6', message: 'Yo'}]
    }
};

export default state;
