using System;

namespace Computer_Firm
{
    class Program
    {
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            double num = default(int);

            double last = 0;
            double rest = 0;

            double totalLast = 0;
            double totalRest = 0;

            for (int i = 1; i <= n; i++)
            {
                num = double.Parse(Console.ReadLine());
                last = num % 10;

                rest = Math.Floor(num / 10);
                totalLast += last;

                if (last < 3)
                {
                    totalRest += 0;
                }
                else if (last >= 3 & last < 4)
                {
                    totalRest += rest * 0.50;
                }
                else if (last >= 4 && last < 5)
                {
                    totalRest += rest * 0.70;
                }
                else if (last >= 5 && last < 6)
                {
                    totalRest += rest * 0.85;
                }
                else if (last >= 6)
                {
                    totalRest += rest;
                }
            }
            totalLast /= n;

            Console.WriteLine($"{totalRest:f2}");
            Console.WriteLine($"{totalLast:f2}");
        }
    }
}
