using System;

namespace Wedding_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            double counterGuests = double.Parse(Console.ReadLine());
            double budget = double.Parse(Console.ReadLine());

            double rest = 0;
            double cuvert = counterGuests * 20;

            if (budget >= cuvert)
            {
                rest = budget - cuvert;
                double foyerverk = rest * 0.40;

                double gift = rest - foyerverk;
                Console.WriteLine($"Yes! {Math.Round(foyerverk)} lv are for fireworks and {Math.Round(gift)} lv are for donation.");
            }
            else
            {
                rest = Math.Abs(budget - cuvert);
                Console.WriteLine($"They won't have enough money to pay the covert. They will need {Math.Round(rest)} lv more.");
            }
        }
    }
}
