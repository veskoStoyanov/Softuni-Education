using System;

namespace Wedding_Decoration
{
    class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            double count = default(double);

            string kind = string.Empty;
            double baloons = 0;

            double flowers = 0;
            double candles = 0;

            double ribbon = 0;
            double sum = 0;

            while (true)
            {
                kind = Console.ReadLine();
                if (kind == "stop")
                {
                    Console.WriteLine($"Spend money: {sum:f2}");
                    budget -= sum;

                    Console.WriteLine($"Money left: {budget:f2}");
                    break;
                }
                count = double.Parse(Console.ReadLine());

                if (kind == "balloons")
                {
                    baloons += count;
                    sum += count * 0.10;
                }
                else if (kind == "flowers")
                {
                    flowers += count;
                    sum += count * 1.50;
                }
                else if (kind == "candles")
                {
                    candles += count;
                    sum += count * 0.50;
                }
                else if (kind == "ribbon")
                {
                    ribbon += count; ;
                    sum += count * 2.00;
                }
                if (sum >= budget)
                {
                    Console.WriteLine("All money is spent!");
                    break;
                }
            }
            Console.WriteLine($"Purchased decoration is {baloons} balloons, {ribbon} m ribbon, {flowers} flowers and {candles} candles.");
        }
    }
}
