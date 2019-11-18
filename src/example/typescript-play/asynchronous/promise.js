new Promise(function (resolve, reject) {
    console.log('===');
    setTimeout(function () {
        resolve('000');
    }, 200);
}).then(function (res) {
    (function (r) {
        console.log(r);
    })(res);
});
