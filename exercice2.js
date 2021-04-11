
getUser(1, func);
function getUser(n, func) {
    func(user, call);
}
function func(user, callback) {
    callback()
}
function callback() {
    getRepositories(user.gitHubUsername, fn(repos, levelNumber))
}
function fn(repos, levelNumber) {
    getBrunch(repos[levelNumber], f(brunch))
}
function f(brunch) {
    if (brunch == "master")
        postCommit(newVersion, com(committed))
}
function com(committed) {
    if (committed)
        console.log("The new version is committed");
    else
        console.log("The new version is not committed");
}


/* exercice 2 part 2*/

getUser(1).then(data => func(user, call))
            .catch(err => console.log("erreur", err));
function func(user, callback) {
    return new Promise((resolve, reject) => {
        resolve(callback());
    });
}
function callback() {
    return new Promise((resolve, reject) => {
        getRepositories(user.gitHubUsername, fn(repos, levelNumber))
    })
}
function fn(repos, levelNumber) {
    return new Promise((resolve, reject) => {
        resolve(getBrunch(repos[levelNumber], f(brunch)))
    })
}
function f(brunch) {
    return new Promise((resolve, reject) => {
        if (brunch == "master")
            resolve(postCommit(newVersion, com(committed)));
    })

}
function com(committed) {
    return new Promise((resolve, reject) => {
        if (committed)
            resolve(console.log("The new version is committed"));
        else
            reject(console.log("The new version is not committed"));
    })

/*exercice 2 part 3*/
async function getUser(n,user){
let next = await func(user, callback)
next= await callback()
next = await fn(repos, levelNumber)
next = await f(brunch)
next = await com(committed)

}
getUser(1, func);
/*
function getUser(n, func) {
    func(user, call);
}
function func(user, callback) {
    callback()
}
function callback() {
    getRepositories(user.gitHubUsername, fn(repos, levelNumber))
}
function fn(repos, levelNumber) {
    getBrunch(repos[levelNumber], f(brunch))
}
function f(brunch) {
    if (brunch == "master")
        postCommit(newVersion, com(committed))
}
function com(committed) {
    if (committed)
        console.log("The new version is committed");
    else
        console.log("The new version is not committed");
}

getUser(1,user)

}*/