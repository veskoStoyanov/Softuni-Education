using System;
using System.Collections.Generic;
using System.Linq;

namespace MeTube_Statistics
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> views = new Dictionary<string, int>();
            Dictionary<string, int> likes = new Dictionary<string, int>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "stats time")
                    break;

                if (input.Contains('-'))
                {
                    string[] token = input
                        .Split("-")
                        .Select(x => x.Trim())
                        .ToArray();
                    string videoName = token[0];
                    int view = int.Parse(token[1]);

                    if (views.ContainsKey(videoName) == false)
                    {
                        views.Add(videoName, 0);

                        likes.Add(videoName, 0);
                    }
                    views[videoName] += view;
                }
                else if (input.Contains(":"))
                {
                    string[] token = input
                        .Split(":")
                        .Select(x => x.Trim())
                        .ToArray();
                    string type = token[0];
                    string videoName = token[1];

                    if (likes.ContainsKey(videoName))
                    {
                        if (type == "like")
                        {
                            likes[videoName] += 1;
                        }
                        else
                        {
                            likes[videoName] -= 1;
                        }
                    }
                }
            }
            string typePrint = Console.ReadLine();

            if (typePrint == "by likes")
            {
                foreach (var kvp in likes.OrderByDescending(x => x.Value))
                {
                    int cnrView = views[kvp.Key];
                    Console.WriteLine($"{kvp.Key} - {cnrView} views - {kvp.Value} likes");
                }
            }
            else
            {
                foreach (var kvp in views.OrderByDescending(x => x.Value))
                {
                    int cnrView = likes[kvp.Key];
                    Console.WriteLine($"{kvp.Key} - {kvp.Value} views - {cnrView} likes");
                }
            }
        }
    }
}
