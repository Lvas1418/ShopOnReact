export const showAlert = (reason) => ({
    type: 'SHOW_ALERT',
    reason
});

export const hideAlert = (reason) => ({
    type: 'HIDE_ALERT',
    reason
});