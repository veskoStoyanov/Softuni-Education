using System;
using System.Collections.Generic;
using System.Linq;

namespace Append_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine().Split("|").ToList();

            input.Reverse();

            string token = string.Join(" ", input);

            List<int> nums = token.Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToList();

            Console.WriteLine(string.Join(" ", nums));
        }
    }
}
