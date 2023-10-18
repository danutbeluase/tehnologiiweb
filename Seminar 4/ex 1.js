function increaseSalary(salarii, procent) {
    if(Array.isArray(salarii) && typeof(procent) == 'number') {
        return salarii.map(s => s *= procent);
    }
    else {
        throw new Error("Nu se poate calcula");
    }
}

try {
    console.info(increaseSalary([1000, 1200], 4));
    console.info(increaseSalary([1000, 1200], ""));
    console.info(increaseSalary("", 4));
}
catch(err) {
    console.error(err.message);
}