using System;

namespace Challenge_the_Wedding
{
    class Program
    {
        static void Main(string[] args)
        {
            int men = int.Parse(Console.ReadLine());
            int women = int.Parse(Console.ReadLine());
            int max = int.Parse(Console.ReadLine());

            int counter = 0;

            for (int i = 1; i <= men; i++)
            {
                for (int k = 1; k <= women; k++)
                {
                    Console.Write($"({i} <-> {k}) ");
                    counter++;

                    if (counter == max)
                    {
                        return;
                    }
                }
            }
        }
    }
}
