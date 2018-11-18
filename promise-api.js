async function level2Promise() {
    await level1Promise1;
    await level1Promise2;
}

function level1Promise1() {
    return new Promise(resolve => {
        script1()
            .then(() => {
                return script2() && script3()
            });
        script1()
            .then(() => {
                return
            })
            .then(() => {
                return script4()
            })
            // .catch(err => console.log("Error", err.message))
            .then(() => {
                resolve(console.log("all scripts complete"))
            });
    })
}

async function level1Promise2() {
    const s1 = script1();
    const s2 = script2();
    const s3 = script3();
    const c1 = await checkPromises(s1, s2, s3);
    const s4 = await script4();
}

function checkPromises(s1, s2, s3) {
    return new Promise((resolve) => {
        Promise.all([s1, s2, s3]).then(resolve);
    })
}

function script1() {
    return new Promise((resolve) => {
        console.log("wait for 3 seconds");
        setTimeout(() => {
            resolve(console.log("script1 complete"));
        }, 3000);
    })
}

function script2() {
    return new Promise((resolve) => {
        console.log("wait for 5 seconds");
        setTimeout(() => {
            resolve(console.log("script2 complete"));
        }, 5000);
    })
}

function script3() {
    return new Promise((resolve) => {
        console.log("wait for 1 seconds");
        setTimeout(() => {
            resolve(console.log("script3 complete"));
        }, 1000);
    })
}

function script4() {
    return new Promise((resolve) => {
        console.log("wait for 2 seconds");
        setTimeout(() => {
            resolve(console.log("script4 complete"));
        }, 2000);
    })
}