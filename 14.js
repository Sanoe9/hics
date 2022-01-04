async function apicall() {
    return new Promise(resolve => {
        setTimeout(() => (resolve( 'b' ), 50));
    });
};

async function logger() {
    setTimeout (() => console.log('a'), 10);
    console.log (await apicall());
    console.log('c');
};

logger();