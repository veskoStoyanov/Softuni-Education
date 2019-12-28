using System;
using System.Collections.Generic;
using System.Linq;

namespace Vapor_Winter_Sale
{
    class Program
    {
        static void Main(string[] args)
        {

            Dictionary<string, decimal> games = new Dictionary<string, decimal>();
            Dictionary<string, string> DLC = new Dictionary<string, string>();

            string[] input = Console.ReadLine().Split(", ");

            for (int i = 0; i < input.Length; i++)
            {
                string token = input[i];

                if (token.Contains(":"))
                {
                    string[] arr = token.Split(":");

                    string nameGame = arr[0];
                    string dlc = arr[1].Trim();

                    if (games.ContainsKey(nameGame))
                    {
                        DLC.Add(nameGame, dlc);
                        games[nameGame] += games[nameGame] * 0.20m;
                    }
                }
                else
                {
                    string[] arr = token.Split("-");

                    string nameGame = arr[0];
                    decimal price = decimal.Parse(arr[1]);

                    if (games.ContainsKey(nameGame) == false)
                    {
                        games.Add(nameGame, price);
                    }
                }
            }
            Dictionary<string, decimal> dicGames = games.ToDictionary(x => x.Key, y => y.Value);
            foreach (var kvp in games)
            {
                if (DLC.ContainsKey(kvp.Key))
                {
                    dicGames[kvp.Key] -= kvp.Value * 0.50m;
                }
                else
                {
                    dicGames[kvp.Key] -= kvp.Value * 0.20m;
                }
            }
            foreach (var kvp in dicGames.OrderBy(x => x.Value))
            {
                if (DLC.ContainsKey(kvp.Key))
                {
                    Console.WriteLine($"{kvp.Key} - {DLC[kvp.Key]} - {kvp.Value:f2}");
                }
            }
            foreach (var kvp in dicGames.OrderByDescending(x => x.Value))
            {
                if (DLC.ContainsKey(kvp.Key) == false)
                {
                    Console.WriteLine($"{kvp.Key} - {kvp.Value:f2}");
                }
            }
        }
    }
}
