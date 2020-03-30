
//BRUTE 
//проверява всички възможни варианти и избира най подходящия.Лошо от към перформанс.(позва се при разбиване на парола 
//като изцикля всички възможни комбинации)


//GREEDY
//Опитва се да намери оптимално решение на базата локални решения, което не винаги дава верен резултат, на всяка стъпка 
//преценява кой е най добрия вариант, ппц е най ефикасния вариант(позлва се при банкомати като ти връща възможно най 
//голяма банкнота 329лв 3х100 1х20 1х5 2х2).

    // let finalSum = 18;
    // let currentSum = 0;
    // let coins = [10, 10, 5, 5, 2, 2, 1, 1]
    // let resultCoin = [];

    // for (let i = 0; i < coins.length; i++) {

    //     if (currentSum + coins[i] > finalSum) {
    //         continue;
    //     } else if(currentSum == finalSum) {
    //         break;
    //     }

    //     currentSum += coins[i];
    //     resultCoin.push(coins[i])
    // }
    // console.log(resultCoin.join(' '));

    //peak point пример с масив със числа търси къде някое число е по голямо от съседите си. greedy не е релевантен подход
  
    //проблем coins = [10, 10, 5, 5, 4, 4, 1, 1, 1]
    //решение 10, 5, 1, 1, 1
    //по-добро - 10, 4, 4

    //КОГА СЕ ПОЛЗВА 
    //Greedy choise property
    //Optimal Substructore
    //Когато проблема е същия а не си се сменя всеки път
  
   
    //Проблем Да намерим най много двойки без да се заричат
//     let startingTime = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2,12];
//     let edningTime = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//     let activities = [];

//     for (let i = 0; i < startingTime.length; i++) {
//        activities.push({startingTime: startingTime[i], edningTime: edningTime[i]})
//     }

//     activities.sort((a, b) => {
//        return a['edningTime'] - b['edningTime']
//     })

//     let last = activities.shift();

//     console.log(`${last.startingTime} - ${last.edningTime}`);

//    for (let i = 0; i < activities.length; i++) {

//        if(last.edningTime < activities[i].startingTime) {
//         console.log(`${activities[i].startingTime} - ${activities[i].edningTime}`);
//         last = activities[i];
//        }     
//    }

                //HEURISTIC 
                //Решават проблемите приблизително, намират добро решение но не ни гарантират че е оптималното
                //P проблем: с нарастването на n алтогитама се забавя .
                // NP ако имаме готово решение е много по бързо само да го валидираме с отговор да или не 


               
    

    

   
    

