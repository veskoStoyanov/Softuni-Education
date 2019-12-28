using System;

namespace Substitute
{
    class Program
    {
        static void Main(string[] args)
        {
            int K = int.Parse(Console.ReadLine());
            int N = int.Parse(Console.ReadLine());

            int L = int.Parse(Console.ReadLine());
            int M = int.Parse(Console.ReadLine());

            int counter = 0;

            for (int i = K; i <= 8; i++)
            {
                for (int k = 9; k >= N; k--)
                {
                    for (int z = L; z <= 8; z++)
                    {
                        for (int m = 9; m >= M; m--)
                        {
                            if (i % 2 == 0 && k % 2 != 0 && z % 2 == 0 && m % 2 != 0)
                            {
                                if (i == z && k == m)
                                {
                                    Console.WriteLine("Cannot change the same player.");
                                }
                                else
                                {
                                    Console.WriteLine($"{i}{k} - {z}{m}");
                                    counter++;
                                    if (counter == 6)
                                    {
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
