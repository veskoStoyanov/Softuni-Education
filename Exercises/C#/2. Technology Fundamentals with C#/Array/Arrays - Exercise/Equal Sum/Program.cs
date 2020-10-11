using System;
using System.Collections.Generic;
using System.Linq;

namespace Equal_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            int left = 0;
            int rigth = list.Sum();
            for (int i = 0; i < list.Count; i++)
            {
                rigth -= list[i];
                if (rigth == left)
                {
                    Console.WriteLine(i);
                    return;
                }
                left += list[i];
            }
            Console.WriteLine("no");
        }
    }
}
