using System;
using System.Collections.Generic;
using System.Linq;

namespace Pokemon_Don_t_Go
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                    .Split()
                    .Select(int.Parse)
                    .ToList();

            long sum = 0;

            while (list.Count > 0)
            {
                int index = int.Parse(Console.ReadLine());

                if (index > list.Count - 1)
                {
                    index = list.Count - 1;
                    int num = list[index];

                    list = Greater(list, index, num);
                    sum += num;
                }
                else if (index < 0)
                {
                    index = 0;
                    int num = list[index];

                    list = Smaller(list, index, num);
                    sum += num;
                }
                else
                {
                    int num = list[index];
                    sum += num;

                    list.RemoveAt(index);

                    list = Result(list, num);
                }
            }
            Console.WriteLine(sum);
        }
        public static List<int> Result(List<int> list, int num)
        {
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] <= num)
                {
                    list[i] += num;
                }
                else
                {
                    list[i] -= num;
                }
            }
            return list;
        }
        public static List<int> Greater(List<int> list, int index, int num)
        {
            list.RemoveAt(index);
            int digit = list[0];

            list.Add(digit);

            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] <= num)
                {
                    list[i] += num;
                }
                else
                {
                    list[i] -= num;
                }
            }
            return list;
       }
        public static List<int> Smaller(List<int> list, int index, int num)
        {
            list.RemoveAt(index);
            int digit = list[list.Count - 1];
            list.Insert(0, digit);

            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] <= num)
                {
                    list[i] += num;
                }
                else
                {
                    list[i] -= num;
                }
            }

            return list;
        }
    }
}
