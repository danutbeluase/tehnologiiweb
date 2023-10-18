const f = (text, word) => {
    let index = text.indexOf(word);
    if(index >= 0) {
        console.info(`Word found at index: ${index}`);
    }
};

f("Eu sunt Danut", "Danut");