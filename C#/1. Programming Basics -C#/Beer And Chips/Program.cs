using System;

namespace Beer_And_Chips
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            double money = double.Parse(Console.ReadLine());

            double countBeer = double.Parse(Console.ReadLine());
            double countChips = double.Parse(Console.ReadLine());

            double beer = countBeer * 1.20;
            double chips = beer * 0.45;

            chips = Math.Ceiling(chips * countChips);
            Console.WriteLine();

            double total = money - (chips + beer);

            if (total >= 0)
            {
                Console.WriteLine($"{name} bought a snack and has {total:f2} leva left.");
            }
            else
            {
                total = Math.Abs(total);
                Console.WriteLine($"{name} needs {total:f2} more leva!");
            }
        }
    }
}
