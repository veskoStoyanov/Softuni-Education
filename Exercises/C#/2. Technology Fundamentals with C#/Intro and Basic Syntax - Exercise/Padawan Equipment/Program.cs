using System;

namespace Padawan_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal money = decimal.Parse(Console.ReadLine());

            int students = int.Parse(Console.ReadLine());

            decimal priseSabes = decimal.Parse(Console.ReadLine());
            decimal priseRobes = decimal.Parse(Console.ReadLine());
            decimal priseBelts = decimal.Parse(Console.ReadLine());

            decimal bonusSables = Math.Ceiling(students * 0.1m);

            decimal sabes = priseSabes * (students + bonusSables);

            decimal robes = priseRobes * students;

            double discountBell = Math.Floor((double)students / 6);

            decimal belts = priseBelts * (students - (decimal)discountBell);

            decimal total = sabes + robes + belts;

            if (total <= money)
            {
                Console.WriteLine($"The money is enough - it would cost {total:f2}lv.");
            }
            else
            {
                total -= money;
                Console.WriteLine($"Ivan Cho will need {total:f2}lv more.");
            }
        }
    }
}
