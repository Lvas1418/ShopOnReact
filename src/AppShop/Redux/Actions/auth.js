export const showAuth = () =>  ( {
        type: 'SHOW_AUTH'
    });


export const hideAuth = () => ({
    type: 'HIDE_AUTH'
});

export const signIn = (token) => ({
    type: 'SIGN_IN',
    token
});

export const signOut = () => ({
    type: 'SIGN_OUT'
});