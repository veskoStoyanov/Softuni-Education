using System;
using System.Numerics;

namespace Snowballs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int quality = 0;
            BigInteger max = 0;
            int snow = 0;
            int time = 0;

            for (int i = 1; i <= n; i++)
            {
                int snowballSnow = int.Parse(Console.ReadLine());
                int snowballTime = int.Parse(Console.ReadLine());
                int snowballQuality = int.Parse(Console.ReadLine());

                BigInteger snowballValue = BigInteger.Pow((snowballSnow / snowballTime), snowballQuality);

                if (snowballValue > max)
                {
                    max = snowballValue;
                    quality = snowballQuality;
                    snow = snowballSnow;
                    time = snowballTime;
                }
            }
            Console.WriteLine($"{snow} : {time} = {max} ({quality})");
        }
    }
}
