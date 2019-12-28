using System;

namespace Fan_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            double money = double.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            double sum = 0;

            for (int i = 0; i < n; i++)
            {
                string stick = Console.ReadLine();

                if (stick == "hoodie")
                {
                    sum += 30;
                }
                else if (stick == "keychain")
                {
                    sum += 4;
                }
                else if (stick == "T-shirt")
                {
                    sum += 20;
                }
                else if (stick == "flag")
                {
                    sum += 15;
                }
                else if (stick == "sticker")
                {
                    sum += 1;
                }
            }
            if (money >= sum)
            {
                money = money - sum;
                Console.WriteLine($"You bought {n} items and left with {money} lv.");
            }
            else
            {
                money = Math.Abs(money - sum);

                Console.WriteLine($"Not enough money, you need {money} more lv.");
            }
        }
    }
}
