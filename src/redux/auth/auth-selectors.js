export const selectAuthLoading = store => store.auth.isLoading;
export const selectAuthError = store => store.auth.error;
export const selectIsLogin = store => store.auth.isLogin;
export const selectUser = store => store.auth.user;
export const selectToken = state => state.auth.token;
