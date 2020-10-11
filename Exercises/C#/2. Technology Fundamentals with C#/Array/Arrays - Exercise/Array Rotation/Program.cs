using System;
using System.Collections.Generic;
using System.Linq;

namespace Array_Rotation
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                list.Add(list[0]);
                list.RemoveAt(0);
            }
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
