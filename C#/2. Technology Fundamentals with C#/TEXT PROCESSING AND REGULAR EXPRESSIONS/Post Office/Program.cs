using System;
using System.Text.RegularExpressions;

namespace Post_Office
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] token = input.Split("|");

            string patternFirst = @"([#$%*&])([A-Z]+)\1";
            string firstStr = token[0];

            Match firstMatch = Regex.Match(firstStr, patternFirst);

            string text = firstMatch.Groups[2].Value;

            for (int i = 0; i < text.Length; i++)
            {              
                char symbol = text[i];
                int num = (int)symbol;

                string secondStr = token[1];
                string patternSecond = $@"{num}:([0-9][0-9])";

                Match secondMatch = Regex.Match(secondStr, patternSecond);

                int secNum = int.Parse(secondMatch.Groups[1].Value) + 1;
                string thirdStr = token[2];

                string[] words = thirdStr
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);

                for (int j = 0; j < words.Length; j++)
                {
                    string word = words[j];
                    if (word.Length == secNum && word[0] == symbol)
                    {
                        Console.WriteLine(word);
                    }
                }
            }
        }
    }
}
