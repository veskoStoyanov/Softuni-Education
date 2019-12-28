
function solve() {

    return (function () {
        let ingredientObj = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

        let reciplesObj = {
            'apple': { carbohydrate: 1, flavour: 2 },
            'lemonade': { carbohydrate: 10, flavour: 20 },
            'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
            'eggs': { protein: 5, fat: 1, flavour: 1 },
            'turkey': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }

        let prepare = (reciple, neededQuantity) => {
            let neededIngredients = Object.entries(reciplesObj[reciple]);

            for (const [ing, qty] of neededIngredients) {
                let ingredientStore = ingredientObj[ing];
                let quantity = neededQuantity * qty;

                if (quantity > ingredientStore) {
                    return `Error: not enough ${ing} in stock`;
                }
            }

            for (const [ing, qty] of neededIngredients) {
                ingredientObj[ing] -= qty * neededQuantity;
            }
            return 'Success';
        }

        return function (input) {
            let token = input.split(' ');
            let command = token[0];
            if (command === 'restock') {
                let spice = token[1];
                let quantity = Number(token[2]);
                ingredientObj[spice] += quantity;
                return 'Success';
            } else if (command === 'prepare') {
                let product = token[1];
                let quantity = token[2];
                return prepare(product, quantity);
            } else if (command === 'report') {
                return Object.entries(ingredientObj)
                    .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                    .join(' ')
            }
        }
    })()
}
