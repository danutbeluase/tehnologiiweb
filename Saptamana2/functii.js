function logMessage(m) {
    console.info(m);
}

logMessage('Un mesaj');

const logMessage2 = (m) => {
    console.info(m);
}

logMessage2('Alt mesaj');

const logMessage3 = m => console.info(m);

logMessage3('Alt fel de mesaj');
