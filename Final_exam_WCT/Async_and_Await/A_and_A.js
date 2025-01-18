function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Data fetched! Student Name : Hok Souchhean' });
        }, 1000);
    });
}

async function fetchAndProcessData() {
    console.log('Student Name: [Hok Souchhean]'); 
    try {
        console.log('Using async/await...');
        const data = await fetchData();
        console.log(data);
        const processed = 'Processing Data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();