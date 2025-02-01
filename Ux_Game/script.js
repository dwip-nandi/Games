let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
const target = 10;

function playGame() {
    const xInput = parseInt(document.getElementById('xInput').value);
    const yInput = parseInt(document.getElementById('yInput').value);

    const op = Math.floor(Math.random() * 2); // Generate 0 or 1
    const rx = Math.floor(Math.random() * 10);
    const ry = Math.floor(Math.random() * 10);

    let xs = rx;
    let ys = ry;

    if (op === 1) {
        xs += xInput;
        ys += yInput;
    } else {
        xs -= xInput;
        ys -= yInput;
    }

    let result = '';

    if (xs === target) {
        result = 'X wins the game.';
    } else {
        result += `X needs ${target - xs} more to reach the target.<br>`;
    }

    if (ys === target) {
        result += 'Y wins the game.';
    } else {
        result += `Y needs ${target - ys} more to reach the target.`;
    }

    document.getElementById('result').innerHTML = result;
}
