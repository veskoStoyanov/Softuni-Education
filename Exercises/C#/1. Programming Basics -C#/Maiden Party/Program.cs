using System;

namespace Maiden_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            double priceParty = double.Parse(Console.ReadLine());
            double countLoveLetter = double.Parse(Console.ReadLine());

            double countRoses = double.Parse(Console.ReadLine());
            double countKeys = double.Parse(Console.ReadLine());

            double countPic = double.Parse(Console.ReadLine());
            double countLuck = double.Parse(Console.ReadLine());

            double res = 0;

            double totLetters = countLoveLetter * 0.60;
            double totRoses = countRoses * 7.20;

            double totKeys = countKeys * 3.60;
            double totPics = countPic * 18.20;

            double totLuck = countLuck * 22.00;

            res = totLetters + totRoses + totKeys + totPics + totLuck;
            double count = countLoveLetter + countRoses + countKeys + countPic + countLuck;

            if (count >= 25)
            {
                res -= res * 0.35;
            }
            res -= res * 0.10;

            if (res >= priceParty)
            {
                res -= priceParty;
                Console.WriteLine($"Yes! {$"{res:f2}"} lv left.");
            }
            else
            {
                res = Math.Abs(res - priceParty);
                Console.WriteLine($"Not enough money! {$"{res:f2}"} lv needed.");
            }
        }
    }
}
