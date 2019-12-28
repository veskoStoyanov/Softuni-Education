using System;
using System.Collections.Generic;
using System.Linq;

namespace List_Operations
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split().Select(int.Parse).ToList();

            while (true)
            {
                string[] input = Console.ReadLine().Split();
                if (input[0] == "End")
                {
                    break;
                }
                string command = input[0];

                if (command == "Add")
                {
                    int num = int.Parse(input[1]);
                    list.Add(num);
                }

                else if (command == "Insert")
                {
                    int num = int.Parse(input[1]);
                    int index = int.Parse(input[2]);

                    if (index >= 0 && index < list.Count)
                    {
                        list.Insert(index, num);
                    }
                    else
                    {
                        Console.WriteLine("Invalid index");
                    }

                }
                else if (command == "Remove")
                {
                    int index = int.Parse(input[1]);

                    if (index >= 0 && index < list.Count)
                    {
                        list.RemoveAt(index);
                    }
                    else
                    {
                        Console.WriteLine("Invalid index");
                    }
                }
                else if (command == "Shift")
                {
                    string type = input[1];
                    int num = int.Parse(input[2]);

                    if (type == "left")
                    {
                        for (int i = 1; i <= num; i++)
                        {
                            list.Add(list[0]);
                            list.RemoveAt(0);
                        }
                    }
                    else if (type == "right")
                    {
                        for (int i = 1; i <= num; i++)
                        {
                            list.Insert(0, list[list.Count - 1]);
                            list.RemoveAt(list.Count - 1);
                        }
                    }
                }
            }
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
