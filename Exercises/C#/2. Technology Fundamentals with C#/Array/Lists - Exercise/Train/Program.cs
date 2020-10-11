using System;
using System.Collections.Generic;
using System.Linq;

namespace Train
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split().Select(int.Parse).ToList();
            int n = int.Parse(Console.ReadLine());

            while (true)
            {
                string input = Console.ReadLine();

                if (input == "end")
                {
                    break;
                }

                string[] token = input.Split();

                if (token[0] == "Add")
                {
                    int num = int.Parse(token[1]);
                    list.Add(num);
                }
                else
                {
                    int num = int.Parse(token[0]);

                    for (int i = 0; i < list.Count; i++)
                    {
                        if (num + list[i] <= n)
                        {
                            list[i] += num;
                            break;
                        }
                    }
                }
            }
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
