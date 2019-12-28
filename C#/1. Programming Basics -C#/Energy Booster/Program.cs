using System;

namespace Energy_Booster
{
    class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            string size = Console.ReadLine();
            double count = double.Parse(Console.ReadLine());

            double sum = 0;

            if (product == "Watermelon")
            {
                if (size == "small")
                {
                    sum = 2 * 56.00;
                }
                else if (size == "big")
                {
                    sum = 5 * 28.70;
                }
            }
            else if (product == "Mango")
            {
                if (size == "small")
                {
                    sum = 2 * 36.66;
                }
                else if (size == "big")
                {
                    sum = 5 * 19.60;
                }
            }
            else if (product == "Pineapple")
            {
                if (size == "small")
                {
                    sum = 2 * 42.10;
                }
                else if (size == "big")
                {
                    sum = 5 * 24.80;
                }
            }
            else if (product == "Raspberry")
            {
                if (size == "small")
                {
                    sum = 2 * 20.00;
                }
                else if (size == "big")
                {
                    sum = 5 * 15.20;
                }
            }
            double total = sum * count;

            if (total >= 400 && total <= 1000)
            {
                total -= total * 0.15;
            }
            else if (total > 1000)
            {
                total -= total * 0.50;
            }
            Console.WriteLine($"{total:f2} lv.");
        }
    }
}
