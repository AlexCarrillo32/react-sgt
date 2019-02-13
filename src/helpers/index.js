
export function randomString ( length = 8 ) {
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPrRsStTuUvVwWxXyYzZ0123456789';
    let output = '';

    for(let c = 0; c < length; c++){
        const randomIndex = Math.floor(Math.random() * characters.length);

        output += characters[randomIndex];
    }

    return output
}

export function formatPostData( data ) {
    const urlParams = new URLSearchParams ();

    for ( let [key, value] of Object.entries(data)){
        urlParams.append(key, value);
    }
    return urlParams;
}