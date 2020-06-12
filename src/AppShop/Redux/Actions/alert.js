export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlert = (reason) => ({
    type: SHOW_ALERT,
    reason
});

export const hideAlert = (reason) => ({
    type: HIDE_ALERT,
    reason
});
