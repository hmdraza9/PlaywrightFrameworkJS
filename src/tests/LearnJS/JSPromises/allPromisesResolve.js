async function fetchData() {
    let p1 = Promise.resolve("Data 1");
    let p2 = Promise.reject("ERROR: Data 2");
    let p3 = Promise.resolve("Data 3");


    try{
    let result = await Promise.all([p1, p2, p3]);
    console.log(result);
    }
    catch(error){
        console.error("Error", error);
    }

    try{
    const ss = await Promise.allSettled();
    console.log("ss", ss);
    }
    catch(error){
        console.error("Error", error);
    }
}

fetchData();