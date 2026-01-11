const myPromise = new Promise<number>((resolve, reject) =>
    setTimeout(() => {
        resolve(100);
        reject("No me pago!!!");
    }, 2000));

myPromise
    .then((myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }).catch((reason) => {
        console.warn(reason);
    }).finally(() => {
        console.log('A seguir con la vida...')
    });