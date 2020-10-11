using System;
using System.Collections.Generic;
using System.Linq;

namespace Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            int max = -1;
            int num = -1;
            int cnr = 1;
            for (int i = 0; i < list.Count - 1; i++)
            {
                if (list[i] == list[i + 1])
                {
                    cnr++;
                    if (cnr > max)
                    {
                        max = cnr;
                        num = list[i];
                    }
                }
                else
                {
                    cnr = 1;
                }
            }
            for (int i = 0; i < max; i++)
            {
                Console.Write($"{num} ");
            }
        }
    }
}
