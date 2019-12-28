using System;

namespace Unique_PIN_Codes
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int num = int.Parse(Console.ReadLine());
            int number = int.Parse(Console.ReadLine());

            for (int i = 2; i <= n; i += 2)
            {
                for (int k = 2; k <= num; k++)
                {
                    for (int m = 2; m <= number; m += 2)
                    {
                        if (k == 2 || k == 3 || k == 5 || k == 7)
                        {
                            Console.WriteLine($"{i} {k} {m}");
                        }
                    }
                }
            }
        }
    }
}
