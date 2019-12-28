using System;
using System.Numerics;

namespace Spice_Must_Flow
{
    class Program
    {
        static void Main(string[] args)
        {
            int days = 0;
            long ruda = long.Parse(Console.ReadLine());
            if (ruda < 100)
            {
                Console.WriteLine(0);
                Console.WriteLine(0);
                return;
            }
            BigInteger sum = 0;

            while (true)
            {
                sum += ruda;
                sum -= 26;
                days++;
                ruda -= 10;
                if (ruda < 100)
                {
                    if (sum >= 26)
                    {
                        sum -= 26;
                    }
                    else
                    {
                        sum = 0;
                    }
                    break;
                }
            }
            Console.WriteLine(days);
            Console.WriteLine(sum);
        }
    }
}
