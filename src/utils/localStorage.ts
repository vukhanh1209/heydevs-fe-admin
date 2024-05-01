

export const storageConstants = {
  accessToken: "accessToken",
  dataGoogle: "dataGoogle",
  refreshToken: "refreshToken",
};

export const LocalStorage = (function () {
  function _setToken(accessToken:string) {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  }

  function _getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  function _getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  function _setProfile(profile : any) {
    return localStorage.setItem("profile", JSON.stringify(profile))
  }

  function _getProfile() {
    const jsonProfile = localStorage.getItem("profile")
    if(jsonProfile) return JSON.parse(jsonProfile)
    return null
  }

  function _clearToken() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("profile");

  }
  function _setDataGoogle(data: any) {
    if (data) {
      localStorage.setItem(storageConstants.dataGoogle, JSON.stringify(data));
    }
  }

  function _getDataGoogle() {
    return localStorage.getItem(storageConstants.dataGoogle);
  }
  return {
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    setDataGoogle: _setDataGoogle,
    setProfile: _setProfile,
    getProfile: _getProfile
  };
})();
