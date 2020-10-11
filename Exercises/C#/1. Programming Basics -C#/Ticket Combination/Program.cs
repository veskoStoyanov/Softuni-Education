using System;

namespace Ticket_Combination
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int counter = 0;

            for (char i = 'B'; i <= 'L'; i++)
            {
                if (i % 2 == 0)
                {
                    for (char k = 'f'; k >= 'a'; k--)
                    {
                        for (char z = 'A'; z <= 'C'; z++)
                        {
                            for (int m = 1; m <= 10; m++)
                            {
                                for (int r = 10; r >= 1; r--)
                                {
                                    double sum = i + k + z + m + r;
                                    counter++;
                                    if (counter == n)
                                    {
                                        Console.WriteLine($"Ticket combination: {i}{k}{z}{m}{r}");
                                        Console.WriteLine($"Prize: {sum} lv.");
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
