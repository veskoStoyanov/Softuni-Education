function solve(input) {
    let heroes = [];

    for (let text of input) {
        let [name, level, items] = text.split(' / ');
        level = Number(level);
        items = items.split(', ');

        heroes.push(JSON.stringify({
            name,
            level,
            items
        }));
    }

    console.log(`[${heroes.join(',')}]`);
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);