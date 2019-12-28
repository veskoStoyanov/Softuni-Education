using System;

namespace Family_House
{
    class Program
    {
        static void Main(string[] args)
        {
            double month = double.Parse(Console.ReadLine());
            double priceHell = default(double);

            double hell = 0;

            for (int i = 1; i <= month; i++)
            {
                priceHell = double.Parse(Console.ReadLine());
                hell += priceHell;
            }
            double water = month * 20;
            double internet = month * 15;
            double res = hell + water + internet;

            double other = res + (res * 0.20);
            double total = other + res;
            double average = total / month;

            Console.WriteLine($"Electricity: {hell:f2} lv");
            Console.WriteLine($"Water: {water:f2} lv");
            Console.WriteLine($"Internet: {internet:f2} lv");

            Console.WriteLine($"Other: {other:f2} lv");
            Console.WriteLine($"Average: {average:f2} lv");
        }
    }
}
