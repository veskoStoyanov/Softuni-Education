using System;
using System.Collections.Generic;

namespace Print_Part_Of_ASCII_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            List<char> symbols = new List<char>();

            int n = int.Parse(Console.ReadLine());
            int num = int.Parse(Console.ReadLine());

            char start = (char)n;
            char end = (char)num;

            for (char i = start; i <= end; i++)
            {
                symbols.Add(i);
            }
            Console.WriteLine(string.Join(" ", symbols));
        }
    }
}
