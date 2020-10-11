using System;

namespace Multiply_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int three = 0;
            int sum = 0;

            int two = 0;
            int one = 0;
            int res = 0;

            for (int i = 1; i <= 3; i++)
            {
                if (i == 1)
                {
                    three = n % 10;
                }
                else if (i == 2)
                {
                    two = sum % 10;
                }
                else if (i == 3)
                {
                    one = n / 100;
                }
                sum = n / 10;
            }
            for (int i = 1; i <= three; i++)
            {
                for (int k = 1; k <= two; k++)
                {
                    for (int z = 1; z <= one; z++)
                    {
                        res = i * k * z;
                        Console.WriteLine($"{i} * {k} * {z} = {res};");
                    }
                }
            }
        }
    }
}
