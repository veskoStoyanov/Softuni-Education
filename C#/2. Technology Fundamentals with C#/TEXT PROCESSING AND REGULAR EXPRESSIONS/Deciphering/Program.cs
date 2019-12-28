using System;
using System.Text.RegularExpressions;

namespace Deciphering
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] token = Console.ReadLine().Split(" ");

            string pattern = @"^[d-z}{,|#]+$";

            Match match = Regex.Match(input, pattern);

            if (match.Success)
            {
                string text = match.Value;
                string newString = string.Empty;
                for (int i = 0; i < text.Length; i++)
                {
                    int num = text[i] - 3;
                    char symbol = (char)num;

                    newString += symbol;

                    string first = token[0];
                    string sec = token[1];

                    newString = newString.Replace(first, sec);
                }
                Console.WriteLine(newString);
            }
            else
            {
                Console.WriteLine($"This is not the book you are looking for.");
            }
        }
    }
}
