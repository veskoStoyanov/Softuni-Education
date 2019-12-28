using System;

namespace Math_Puzzle
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            double sum = 0;
            double result = 0;
            bool isTrue = true;
            for (int i = 1; i <= 30; i++)
            {
                for (int k = 1; k <= 30; k++)
                {
                    for (int m = 1; m <= 30; m++)
                    {
                        sum = i + k + m;
                        result = i * k * m;
                        if (sum == num)
                        {
                            if (i < k && k < m)
                            {
                                Console.WriteLine($"{i} + {k} + {m} = {sum}");
                                isTrue = false;
                            }
                        }
                        if (result == num)
                        {
                            if (i > k && k > m)
                            {
                                Console.WriteLine($"{i} * {k} * {m} = {result}");
                                isTrue = false;
                            }
                        }
                    }
                }
            }
            if (isTrue == true)
            {
                Console.WriteLine("No!");
            }
        }
    }
}
