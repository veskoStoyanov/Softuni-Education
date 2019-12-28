using System;
using System.Collections.Generic;
using System.Linq;

namespace Dictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> dicWords = new Dictionary<string, List<string>>();

            string[] input = Console.ReadLine()
                .Split(" | ");

            for (int i = 0; i < input.Length; i++)
            {
                string[] arr = input[i]
                    .Split(": ");

                string word = arr[0];
                string definition = arr[1];

                if (dicWords.ContainsKey(word) == false)
                {
                    dicWords.Add(word, new List<string>());
                }
                dicWords[word].Add(definition);
            }
            string[] token = Console.ReadLine()
                .Split(" | ");

            foreach (var item in token)
            {
                if (dicWords.ContainsKey(item))
                {
                    Console.WriteLine(item);
                    foreach (var kvp in dicWords[item].OrderByDescending(x => x.Length))
                    {
                        Console.WriteLine($" -{kvp}");
                    }
                }
            }
            string secInput = Console.ReadLine();
            if (secInput == "End")
            {
                return;
            }
            List<string> words = new List<string>();
            foreach (var kvp in dicWords)
            {
                words.Add(kvp.Key);
            }
            words.Sort();
            Console.WriteLine(string.Join(" ", words));
        }
    }
}
