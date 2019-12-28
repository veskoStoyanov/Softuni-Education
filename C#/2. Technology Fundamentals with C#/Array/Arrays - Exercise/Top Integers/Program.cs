using System;
using System.Collections.Generic;
using System.Linq;

namespace Top_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            List<int> nums = new List<int>();

            for (int i = 0; i < list.Count - 1; i++)
            {
                bool isTrue = true;
                for (int j = i + 1; j < list.Count; j++)
                {
                    if (list[i] <= list[j])
                    {
                        isTrue = false;
                    }
                }
                if (isTrue)
                {
                    nums.Add(list[i]);
                }
            }
            nums.Add(list[list.Count - 1]);
            Console.WriteLine(string.Join(" ", nums));
        }
    }
}
