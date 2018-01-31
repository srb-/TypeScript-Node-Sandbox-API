
console.log('Hello from the Client (Chrome)');

fetch('/api').then( (response) => {
    response.text().then( (text) => {
        console.log(text);
    });
});
