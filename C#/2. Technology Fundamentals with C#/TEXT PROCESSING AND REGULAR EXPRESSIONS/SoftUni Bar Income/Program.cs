using System;
using System.Text.RegularExpressions;

namespace SoftUni_Bar_Income
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal totalPrice = 0m;
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end of shift")
                    break;

                string pattern = @"^%([A-Z][a-z]+)%[^$%.\|]*<(\w+)>[^$%.\|]*\|([0-9]+)\|[^$%.\|]*([0-9]+\.*[0-9]*)\$$";

                Match match = Regex.Match(input, pattern);

                if (match.Success)
                {
                    string text = match.Value;
                    string name = match.Groups[1].Value;
                    string product = match.Groups[2].Value;

                    decimal count = decimal.Parse(match.Groups[3].Value);
                    string patternPrice = @"([0-9]+\.*[0-9]*)\$";

                    Match priceMatch = Regex.Match(text, patternPrice);

                    decimal price = decimal.Parse(priceMatch.Groups[1].Value);
                    decimal currentPrice = count * price;

                    totalPrice += currentPrice;

                    Console.WriteLine($"{name}: {product} - {currentPrice:f2}");
                }
            }
            Console.WriteLine($"Total income: {totalPrice:f2}");
        }
    }
}
