using System;
using System.Collections.Generic;
using System.Linq;

namespace Common_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> first = Console.ReadLine().Split().ToList();
            List<string> second = Console.ReadLine().Split().ToList();
            List<string> total = new List<string>();

            for (int i = 0; i < second.Count; i++)
            {
                for (int j = 0; j < first.Count; j++)
                {
                    if (second[i] == first[j])
                    {
                        total.Add(second[i]);
                    }
                }
            }
            Console.WriteLine(string.Join(" ", total));
        }
    }
}
