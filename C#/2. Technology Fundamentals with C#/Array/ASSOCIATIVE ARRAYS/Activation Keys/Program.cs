using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Activation_Keys
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> total = new List<string>();
            string[] input = Console.ReadLine().Split("&");

            for (int i = 0; i < input.Length; i++)
            {
                string token = input[i];
                string pattern = @"[0-9A-Za-z]+";

                Match match = Regex.Match(token, pattern);

                if (match.Success)
                {
                    string text = match.Value;
                    if (text.Length == 16)
                    {
                        text = Subtract(text);
                        text = DivatedivisionStr(text, 4);

                        total.Add(text);
                    }
                    else if (text.Length == 25)
                    {
                        text = Subtract(text);
                        text = DivatedivisionStr(text, 5);

                        total.Add(text);
                    }
                }
            }
            Console.WriteLine(string.Join(", ", total));
        }
        public static string Subtract(string text)
        {
            string emptyStr = string.Empty;
            for (int i = 0; i < text.Length; i++)
            {
                char symbol = text[i];
                if (char.IsDigit(symbol))
                {
                    int num = Math.Abs(symbol - '0' - 9);
                    emptyStr += num.ToString();
                }
                else
                {
                    emptyStr += symbol;
                }
            }
            return emptyStr.ToUpper();
        }
        public static string DivatedivisionStr(string text, int n)
        {
            List<string> list = new List<string>();

            for (int i = 0; i < n; i++)
            {
                string emptyStr = string.Empty;
                for (int j = 0; j < n; j++)
                {
                    emptyStr += text[0];
                    text = text.Remove(0, 1);
                }
                list.Add(emptyStr);
            }
            return string.Join("-", list); ;
        }
    }
}
