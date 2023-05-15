function triangle(value1, type1, value2, type2) {

    const validTypes = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log('Некоректні типи аргументів. Будь ласка, перечитайте інструкцію.');
        return 'failed';
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log('Значення мають бути більше за нуль.');
        return 'failed';
    }
    let a, b, c, alpha, beta;

    if (type1 === 'leg' && type2 === 'leg') {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    }

    else if (type1 === 'leg' && type2 === 'hypotenuse') {
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    }

    else if (type1 === 'hypotenuse' && type2 === 'leg') {
        c = value1;
        a = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    }

    else if (type1 === 'leg' && type2 === 'opposite angle') {
        a = value1;
        beta = value2;
        alpha = 90 - beta;
        b = a / Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
    }

    else if (type1 === 'leg' && type2 === 'adjacent angle') {
        a = value1;
        alpha = value2;
        beta = 90 - alpha;
        b = a * Math.tan(alpha * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
    }

    else if (type1 === 'hypotenuse' && type2 === 'opposite angle') {
        c = value1;
        beta = value2;
        alpha = 90 - beta;
        a = c * Math.sin(alpha * (Math.PI / 180));
        b = c * Math.cos(alpha * (Math.PI / 180));
    }

    else if (type1 === 'hypotenuse' && type2 === 'adjacent angle') {
        c = value1;
        alpha = value2;
        beta = 90 - alpha;
        a = c * Math.cos(alpha * (Math.PI / 180));
        b = c * Math.sin(alpha * (Math.PI / 180));
    }

    else if (type1 === 'angle' && type2 === 'angle') {
        alpha = value1;
        beta = value2;
        if (alpha <= 0 || beta <= 0 || alpha + beta >= 90) {
            console.log('Некоректні значення кутів.');
            return 'failed';
        }
        a = Math.sin(alpha * (Math.PI / 180));
        b = Math.sin(beta * (Math.PI / 180));
        c = Math.sqrt(a * a + b * b);
    }

    else {
        console.log('Некоректна комбінація типів аргументів. Будь ласка, перечитайте інструкцію.');
        return 'failed';
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log('Некоректний трикутник. Сума довжин будь-яких двох сторін повинна бути більша за третю сторону.');
        return 'failed';
    }

    console.log(`Сторона a (катет): ${a}`);
    console.log(`Сторона b (катет): ${b}`);
    console.log(`Сторона c (гіпотенуза): ${c}`);
    console.log(`Кут alpha (навпроти катета a): ${alpha}°`);
    console.log(`Кут beta (навпроти катета b): ${beta}°`);

    return 'success';
}

