
namespace Santa_s_Secret_Helper
{
    using System;
    using System.Text.RegularExpressions;

    class Program
    {
        static void Main(string[] args)
        {
            int key = int.Parse(Console.ReadLine());

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end")
                    break;
                string text = string.Empty;
                for (int i = 0; i < input.Length; i++)
                {
                    int token = input[i] - key;
                    char symbol = (char)token;
                    text += symbol;
                }
                string pattern = @"@([A-Za-z]+)[^@!:>-]*!([GN])!";

                Match match = Regex.Match(text, pattern);

                if (match.Success)
                {
                    string name = match.Groups[1].Value;
                    string type = match.Groups[2].Value;

                    if (type == "G")
                    {
                        Console.WriteLine(name);
                    }
                }
            }
        }
    }
}
