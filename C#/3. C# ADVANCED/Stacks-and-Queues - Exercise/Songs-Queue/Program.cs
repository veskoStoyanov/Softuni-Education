using System;
using System.Collections.Generic;
using System.Linq;

namespace Songs_Queue
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<string> queue = new Queue<string>();
            string[] input = Console.ReadLine().Split(", ").ToArray();
            Queue<string> songs = new Queue<string>(input);

            while (true)
            {
                List<string> command = Console.ReadLine().Split().ToList();
                if (command[0] == "Play")
                {
                    if (songs.Count > 0)
                    {
                        songs.Dequeue();
                    }
                }
                else if (command[0] == "Add")
                {
                    command.RemoveAt(0);
                    string song = String.Join(" ", command);
                    if (songs.Contains(song))
                    {
                        Console.WriteLine($"{song} is already contained!");
                        continue;
                    }

                    songs.Enqueue(song);


                }
                else if (command[0] == "Show")
                {
                    Console.WriteLine(string.Join(", ", songs));
                }
                if (songs.Count == 0)
                {
                    Console.WriteLine("No more songs!");
                    return;
                }
            }
        }
    }
}
