function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user ...  ');
        callback({ id: id, gitHubUsername: 'omarturki' });
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        callback('repository');
    }, 2000);
}


function getBrunch(repo, callback) {
    setTimeout(() => {
        callback('commit');
    }, 2000)
}

function postCommit(n, callback) {
    let committed = true; 
    if (committed) {
        let data = "commited";
        callback(data);
    } else {
        let data = "not commited";
        callback(data);
    }

}

getusers = (id) => {
    getUser(id, getRepository)
}

getRepository= (b) => {
    getRepositories(b, getBrunchs)
}

getBrunchs = (c) => {
    getBrunch(c, postCommits)
}

postCommits = (d) => {
    postCommit(d, console.log)
}

getusers(5)


// exercice 2 part 2 (promise )
getUser = (a) => {
    return new Promise((resolve, reject) => {

        let user = 'omarturki';
        if (user !== null)
            resolve(user.gitHubUsername)
        else
            reject('error in  User')
    })
}
getRepositories = (b) => {

    return new Promise((resolve, reject) => {
        let repos =  "Dsnode";
        let levelNumber = 0;
        if (repos !== null && levelNumber !== null) {
            resolve([repos, levelNumber])
        } else {
            reject("error levet function in  Repository !!!")
        }

    })
}

getBrunch = (c) => {
    return new Promise((resolve, reject) => {

        let brunch = "master"; 
        console.log("get Brunch")
        if (brunch !== null)
            resolve(brunch)
        else
            reject("error in the brunch !")


    })
}

postCommit = (d) => {

    return new Promise((resolve, reject) => {
        let committed = true
        console.log("post Commit")
        if (d === "master") {
            if (committed)
                resolve("The new version is Commited")
            else
                resolve("The new version is not commited")
        } else {
            reject("error not master")
        }

    })
}


getUser(1)
    .then(getRepositories)
    .then(getBrunch)
    .then(postCommit)
    .then(console.log)
    .catch(console.log)



/// exercice 2 part 3 async 

getuser2 = async(a) => {
    try {
        let user = { 'gitHubUsername': "omarturki" } 

        let [repos, levelNumber] = await getRepositories(user.gitHubUsername);

        brunch = await getBrunch(repos[levelNumber]);
        verif = await postCommit(brunch)
        console.log(verif)
    } catch (e) {
        console.log(e)
    }


}

getuser2(1)