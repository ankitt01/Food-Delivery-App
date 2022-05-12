export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "undefined" ?
    JSON.parse(localStorage.getItem('user')) :
    localStorage.clear();

    return userInfo
}

//fetching from local storage the user info