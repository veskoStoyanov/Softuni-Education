using System;
using System.Text.RegularExpressions;

namespace Song_Encryption
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "end")
                    break;

                string pattern = @"^([A-Z][a-z' ]+):[A-Z ]+$";

                Match match = Regex.Match(input, pattern);

                if (match.Success)
                {
                    string text = match.Value;

                    string artist = match.Groups[1].Value;
                    int length = artist.Length;

                    text = Encryption(text, length);

                    Console.WriteLine($"Successful encryption: {text}");
                }
                else
                {
                    Console.WriteLine("Invalid input!");
                }
            }
        }
        public static string Encryption(string text, int n)
        {
            string emptyStr = string.Empty;
            for (int i = 0; i < text.Length; i++)
            {
                char symbol = text[i];
                if (symbol == ':')
                {
                    symbol = '@';
                    emptyStr += symbol;
                    continue;
                }
                if (symbol == ' ' || symbol == '\'')
                {
                    emptyStr += symbol;
                    continue;
                }
                int num = symbol;
                for (int j = 0; j < n; j++)
                {
                    num++;
                    if (num == 91)
                    {
                        num = 65;
                    }
                    else if (num == 123)
                    {
                        num = 97;
                    }
                }
                emptyStr += (char)num;
            }
            return emptyStr;
        }
    }
}
