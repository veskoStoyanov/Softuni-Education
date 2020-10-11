
namespace Santa_s_New_List
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            Dictionary<string, int> childer = new Dictionary<string, int>();
            Dictionary<string, int> toys = new Dictionary<string, int>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "END")
                    break;

                string[] token = input
                    .Split(new[] { '-', '>' }, StringSplitOptions.RemoveEmptyEntries);

                if (token[0] == "Remove")
                {
                    string deleteName = token[1];
                    if (childer.ContainsKey(deleteName))
                    {
                        childer.Remove(deleteName);
                    }
                    continue;
                }
                string name = token[0];
                string toy = token[1];
                int count = int.Parse(token[2]);

                if (childer.ContainsKey(name) == false)
                {
                    childer.Add(name, 0);
                }
                childer[name] += count;

                if (toys.ContainsKey(toy) == false)
                {
                    toys.Add(toy, 0);
                }
                toys[toy] += count;
            }
            Console.WriteLine("Children:");

            foreach (var kvp in childer.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
            {
                Console.WriteLine($"{kvp.Key} -> {kvp.Value}");
            }
            Console.WriteLine("Presents:");

            foreach (var kvp in toys)
            {
                Console.WriteLine($"{kvp.Key} -> {kvp.Value}");
            }
        }
    }
}
