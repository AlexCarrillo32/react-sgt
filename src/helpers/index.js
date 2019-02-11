
export function randomString ( length = 8 ) {
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPrRsStTuUvVwWxXyYzZ0123456789';
    let output = '';

    for(let c = 0; c < length; c++){
        const randomIndex = Math.floor(Math.random() * characters.length);

        output += characters[randomIndex];
    }

    return output
}