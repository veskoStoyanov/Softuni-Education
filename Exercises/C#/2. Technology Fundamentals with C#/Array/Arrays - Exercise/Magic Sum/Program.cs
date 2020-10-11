using System;
using System.Collections.Generic;
using System.Linq;

namespace Magic_Sum
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

            for (int i = 0; i < list.Count - 1; i++)
            {
                for (int j = i + 1; j < list.Count; j++)
                {
                    if (list[i] + list[j] == n)
                    {
                        Console.WriteLine($"{list[i]} {list[j]}");
                    }
                }
            }
        }
    }
}
