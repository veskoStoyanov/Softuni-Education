using System;
using System.Numerics;

namespace Beer_Kegs
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            BigInteger max = new BigInteger();

            string bigger = String.Empty;

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                double radius = double.Parse(Console.ReadLine());
                long height = long.Parse(Console.ReadLine());

                BigInteger sum = (BigInteger)(Math.PI * Math.Pow(radius, 2) * height);

                if (sum > max)
                {
                    max = sum;
                    bigger = input;
                }
            }
            Console.WriteLine(bigger);
        }
    }
}
