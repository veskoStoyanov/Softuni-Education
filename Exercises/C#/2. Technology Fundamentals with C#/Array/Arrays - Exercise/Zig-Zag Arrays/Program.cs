using System;
using System.Collections.Generic;
using System.Linq;

namespace Zig_Zag_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<int> first = new List<int>();
            List<int> second = new List<int>();

            for (int i = 0; i < n; i++)
            {
                List<int> one = Console.ReadLine()
                    .Split()
                    .Select(int.Parse)
                    .ToList();

                if (i % 2 == 0)
                {
                    first.Add(one[0]);
                    second.Add(one[1]);
                }
                else
                {
                    second.Add(one[0]);
                    first.Add(one[1]);
                }
            }
            Console.WriteLine(string.Join(" ", first));
            Console.WriteLine(string.Join(" ", second));
        }
    }
}
