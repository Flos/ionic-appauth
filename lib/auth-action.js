export var AuthActions;
(function (AuthActions) {
    AuthActions["Default"] = "Default";
    AuthActions["SignInSuccess"] = "Sign In Success";
    AuthActions["SignInFailed"] = "Sign In Failed";
    AuthActions["SignOutSuccess"] = "Sign Out Success";
    AuthActions["SignOutFailed"] = "Sign Out Failed";
    AuthActions["RefreshSuccess"] = "Refresh Success";
    AuthActions["RefreshFailed"] = "Refesh Failed";
    AuthActions["LoadTokenFromStorageSuccess"] = "Get Token From Storage Success";
    AuthActions["LoadTokenFromStorageFailed"] = "Get Token From Storage Failed";
    AuthActions["LoadUserInfoSuccess"] = "Load User Info Success";
    AuthActions["LoadUserInfoFailed"] = "Load User Info Failed";
})(AuthActions || (AuthActions = {}));
export class AuthActionBuilder {
    static Default() {
        return {
            action: AuthActions.Default,
        };
    }
    static SignOutSuccess() {
        return {
            action: AuthActions.SignOutSuccess,
        };
    }
    static SignOutFailed(error) {
        return {
            action: AuthActions.SignOutFailed,
            error: error.message
        };
    }
    static RefreshSuccess(tokenResponse) {
        return {
            action: AuthActions.RefreshSuccess,
            tokenResponse
        };
    }
    static RefreshFailed(error) {
        return {
            action: AuthActions.RefreshFailed,
            error: error.message,
        };
    }
    static SignInSuccess(tokenResponse) {
        return {
            action: AuthActions.SignInSuccess,
            tokenResponse
        };
    }
    static SignInFailed(error) {
        return {
            action: AuthActions.SignInFailed,
            error: error.message
        };
    }
    static LoadTokenFromStorageSuccess(tokenResponse) {
        return {
            action: AuthActions.LoadTokenFromStorageSuccess,
            tokenResponse
        };
    }
    static LoadTokenFromStorageFailed(error) {
        return {
            action: AuthActions.LoadTokenFromStorageFailed,
            error: error.message
        };
    }
    static LoadUserInfoSuccess(user) {
        return {
            action: AuthActions.LoadUserInfoSuccess,
            user
        };
    }
    static LoadUserInfoFailed(error) {
        return {
            action: AuthActions.LoadUserInfoFailed,
            error: error.message
        };
    }
}
