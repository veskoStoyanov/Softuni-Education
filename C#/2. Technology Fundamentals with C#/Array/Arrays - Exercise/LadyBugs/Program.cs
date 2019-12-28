using System;
using System.Linq;

namespace LadyBugs
{
    class Program
    {
        static void Main(string[] args)
        {
            long n = long.Parse(Console.ReadLine());
            if (n == 0)
            {
                return;
            }
            long[] arr = new long[n];
            long[] position = Console.ReadLine().Split().Select(long.Parse).ToArray();

            bool isTrue = true;

            for (int i = 0; i < position.Length; i++)
            {
                long pos = position[i];
                if (pos < 0 || pos > arr.Length - 1)
                {
                    continue;
                }
                arr[pos] = 1;
                isTrue = false;
            }

            if (isTrue)
            {
                return;
            }

            while (true)
            {
                string[] input = Console.ReadLine().Split();

                if (input[0] == "end")
                {
                    break;
                }
                long index = long.Parse(input[0]);

                if (index < 0 || index > arr.Length - 1)
                {
                    continue;
                }
                if (arr[index] == 0)
                {
                    continue;
                }
                string command = input[1];
                long fly = long.Parse(input[2]);

                long res = index;

                if (command == "right")
                {
                    while (true)
                    {
                        res += fly;

                        if (res > arr.Length - 1)
                        {
                            arr[index] = 0;
                            break;
                        }
                        if (arr[res] == 1)
                        {
                            continue;
                        }
                        arr[index] = 0;
                        arr[res] = 1;
                        break;
                    }
                }
                else if (command == "left")
                {
                    while (true)
                    {
                        res -= fly;

                        if (res < 0)
                        {
                            arr[index] = 0;
                            break;
                        }
                        if (arr[res] == 1)
                        {
                            continue;
                        }
                        arr[index] = 0;
                        arr[res] = 1;
                        break;
                    }
                }
            }
            Console.WriteLine(string.Join(" ", arr));
        }
    }
}
