using System;
using System.Collections.Generic;
using System.Linq;

namespace Cups_and_Bottles
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> cups = new Queue<int>(Console.ReadLine()
                .Split()
                .Select(int.Parse));

            Stack<int> bottles = new Stack<int>(Console.ReadLine()
                .Split()
                .Select(int.Parse));

            int wastedWater = 0;
            int cup = cups.Dequeue();

            while (true)
            {
                int bottle = bottles.Pop();
                if (bottle >= cup)
                {
                    bottle -= cup;
                    wastedWater += bottle;
                    if (cups.Any() && bottles.Any())
                    {
                        cup = cups.Dequeue();

                    }
                    else
                    {
                        break;
                    }
                }
                else
                {
                    cup -= bottle;
                }
            }

            if (bottles.Any())
            {
                Console.WriteLine($"Bottles: {string.Join(" ", bottles)}");
            }
            else if (cups.Any())
            {
                Console.WriteLine($"Cups: {string.Join(" ", cups)}");
            }
            Console.WriteLine($"Wasted litters of water: {wastedWater}");
        }
    }
}
