let UserProfile = (function () {
    let session_token = "";
    let getToken = function () {
        return session_token;    // Or pull this from cookie/localStorage
    };

    let setToken = function (name) {
        session_token = name;
    };
    let remToken = function () {
        session_token = "";
    };

    return {
        getToken: getToken,
        setToken: setToken,
        remToken: remToken
    }

})();

export default UserProfile;