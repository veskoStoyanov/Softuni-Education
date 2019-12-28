using System;
using System.Collections.Generic;
using System.Linq;

namespace Anonymous_Threat
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> input = Console.ReadLine()
                .Split().ToList();

            while (true)
            {
                string[] array = Console.ReadLine()
                    .Split(); if (array[0] == "3:1") break;

                string command = array[0];

                if (command == "merge")
                {
                    input = Merge(input, array);

                }
                else if (command == "divide")
                {
                    input = Divide(input, array);

                }
            }
            Console.WriteLine(string.Join(" ", input));
        }

        public static List<string> Merge(List<string> input, string[] array)
        {
            int startIndex = int.Parse(array[1]);
            int endIndex = int.Parse(array[2]);

            if (startIndex < 0)
            {
                startIndex = 0;
            }
            if (endIndex > input.Count - 1)
            {
                endIndex = input.Count - 1;
            }

            for (int i = startIndex; i < endIndex; i++)
            {
                input[startIndex] += input[startIndex + 1];
                input.RemoveAt(startIndex + 1);
            }
            return input;
        }
        public static List<string> Divide(List<string> input, string[] array)
        {
            int index = int.Parse(array[1]);
            int partition = int.Parse(array[2]);

            string element = input[index];

            int length = element.Length;
            int token = length / partition;

            List<string> list = new List<string>();
            string arr = string.Empty;

            for (int i = 0; i < partition; i++)
            {
                arr = element.Substring(0, token);
                list.Add(arr);

                element = element.Remove(0, token);
            }
            if (element.Length > 0)
            {
                list[list.Count - 1] += element;
            }
            input.RemoveAt(index);
            input.InsertRange(index, list);
            return input;
        }
    }
}
