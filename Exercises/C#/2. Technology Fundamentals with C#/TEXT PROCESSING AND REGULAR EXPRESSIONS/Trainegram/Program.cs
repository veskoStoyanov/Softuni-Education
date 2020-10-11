using System;
using System.Text.RegularExpressions;

namespace Trainegram
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string pattern = @"^(<\[[^A-Za-z0-9]*\]\.)(\.\[[A-Za-z0-9]*\]\.)*$";
                string input = Console.ReadLine();
                if (input == "Traincode!")
                {
                    break;
                }
                Match match = Regex.Match(input, pattern);
                if (match.Success)
                {
                    Console.WriteLine(match.Value);
                }
            }
        }
    }
}
