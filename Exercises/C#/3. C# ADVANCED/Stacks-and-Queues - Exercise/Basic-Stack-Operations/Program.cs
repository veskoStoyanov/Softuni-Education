using System;
using System.Collections.Generic;
using System.Linq;

namespace Basic_Stack_Operations
{
    class Program
    {
        static void Main(string[] args)
        {
            var data = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int forPush = data[0];
            int forPop = data[1];
            int searchNum = data[2];
            int smallestNum = int.MaxValue;
            Stack<int> stack = new Stack<int>();

            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < forPush; i++)
            {
                if (i <= numbers.Length - 1)
                {
                    stack.Push(numbers[i]);
                }
            }

            for (int i = 0; i < forPop; i++)
            {
                if (stack.Count > 0)
                {
                    stack.Pop();
                }

            }

            if (stack.Count == 0)
            {
                Console.WriteLine(0);
                return;
            }

            foreach (var any in stack)
            {
                if (any == searchNum)
                {
                    Console.WriteLine("true");
                    return;
                }

                if (smallestNum > any)
                {
                    smallestNum = any;
                }
            }

            Console.WriteLine(smallestNum);
        }
    }
}
