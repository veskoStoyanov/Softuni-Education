using System;
using System.Collections.Generic;
using System.Linq;

namespace Truck_Tour
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int[]> petrols = new Queue<int[]>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                int[] arr = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                petrols.Enqueue(arr);
            }
            int fuel = 0;
            int index = 0;

            while (true)
            {
                foreach (var any in petrols)
                {
                    if (fuel >= 0)
                    {
                        fuel += any[0];
                        fuel -= any[1];
                    }

                    else
                    {
                        index++;
                        int[] arrray = petrols.Dequeue();
                        fuel = 0;
                        petrols.Enqueue(arrray);
                        break;
                    }
                }
                if (fuel > 0)
                {
                    break;
                }

            }

            Console.WriteLine(index);
        }
    }
}
