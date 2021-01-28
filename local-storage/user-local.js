const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}
export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const user = JSON.parse(stringyUser);
    return user;
}
export function updateStats(sanity, media, deprogrammed){
    const user = getUser();
    user.sanity += sanity;
    user.media += media;
    user.deprogrammed += deprogrammed;
    setUser(user);
}