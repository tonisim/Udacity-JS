function add(x, y) {
    var result;
    if ((typeof x && typeof y) !== 'number')
    {
        throw new Error('Params must be a number');
    }

    result = x + y;
    if parseInt(result) !== result{
        result = parseFloat(result.toFixed(1));
    }
    return result;
}

// kui x on 2 ja y 5 siis saame kokku 5
expect(add(2, 3)).toBe(5);

// Me saame errori, kui üheks on number ja teiseks tekst
expect(add(2, 'test')).toThrow();


// Kui x on 0.1 ja y on 0.2 siis saame kokku 0.3
expect(add(0.1, 0.2)).toBe(0.3);

