using System;
using System.Collections.Generic;
using System.Linq;

namespace SoftUni_Exam_Results
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> dicpoints = new Dictionary<string, int>();
            Dictionary<string, int> dicLanguages = new Dictionary<string, int>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "exam finished")
                    break;
                string[] token = input.Split("-");

                string name = token[0];
                string language = token[1];

                if (language == "banned")
                {
                    if (dicpoints.ContainsKey(name))
                    {
                        dicpoints.Remove(name);
                    }
                }
                else
                {
                    int points = int.Parse(token[2]);

                    if (dicpoints.ContainsKey(name) == false)
                    {
                        dicpoints.Add(name, points);
                    }
                    else
                    {
                        if (dicpoints[name] < points)
                        {
                            dicpoints[name] = points;
                        }
                    }
                    if (dicLanguages.ContainsKey(language) == false)
                    {
                        dicLanguages.Add(language, 0);
                    }
                    dicLanguages[language]++;
                }
            }
            Console.WriteLine("Results:");
            foreach (var kvp in dicpoints.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{kvp.Key} | {kvp.Value}");
            }

            Console.WriteLine("Submissions:");

            foreach (var kvp in dicLanguages.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{kvp.Key} - {kvp.Value}");
            }
        }
    }
}
