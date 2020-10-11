using System;
using System.Collections.Generic;
using System.Linq;

namespace Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            while (true)
            {
                string[] array = Console.ReadLine().Split();

                if (array[0] == "end") break;

                string command = array[0];

                if (command == "Delete")
                {
                    int num = int.Parse(array[1]);

                    for (int i = 0; i < numbers.Count; i++)
                    {
                        if (numbers[i] == num)
                        {
                            numbers.RemoveAt(i);
                            i--;
                        }
                    }
                }
                else if (command == "Insert")
                {
                    int num = int.Parse(array[1]);
                    int index = int.Parse(array[2]);

                    numbers.Insert(index, num);
                }
            }
            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
