using System;
using System.Collections.Generic;
using System.Linq;

namespace Basic_Queue_Operations
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
            Queue<int> queue = new Queue<int>();

            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < forPush; i++)
            {
                if (i <= numbers.Length - 1)
                {
                    queue.Enqueue(numbers[i]);
                }
            }

            for (int i = 0; i < forPop; i++)
            {
                if (queue.Count > 0)
                {
                    queue.Dequeue();
                }

            }

            if (queue.Count == 0)
            {
                Console.WriteLine(0);
                return;
            }

            foreach (var any in queue)
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
