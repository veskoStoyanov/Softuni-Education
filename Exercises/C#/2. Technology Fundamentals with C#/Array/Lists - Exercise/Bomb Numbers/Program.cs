using System;
using System.Collections.Generic;
using System.Linq;

namespace Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            int[] input = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            int num = input[0];

            int bomb = input[1];

            int start = -1;
            int end = -1;

            while (true)
            {
                for (int j = 0; j < list.Count; j++)
                {
                    if (list[j] == num)
                    {
                        start = j - bomb;
                        end = j + bomb;
                        break;
                    }
                }
                start = Math.Max(start, 0);
                end = Math.Min(list.Count - 1, end);

                for (int i = start; i <= end; i++)
                {
                    list.RemoveAt(start);
                }
                if (!list.Contains(num))
                {
                    break;
                }
            }
            Console.WriteLine(list.Sum());
        }
    }
}
