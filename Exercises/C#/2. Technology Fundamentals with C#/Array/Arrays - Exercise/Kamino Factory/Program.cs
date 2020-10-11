using System;
using System.Collections.Generic;
using System.Linq;

namespace Kamino_Factory
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<int> maxDNA = new List<int>();
            int maxLength = 0;
            int maxSum = 0;
            int maxIndex = -1;
            int row = 0;
            int maxRow = 0;
            List<int> DNA = new List<int>();

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Clone them!")
                    break;

                DNA = input
                   .Split('!', StringSplitOptions.RemoveEmptyEntries)
                   .Select(int.Parse)
                   .ToList();

                row++;
                int length = 0;
                int index = -1;
                int sum = 0;
                for (int i = 0; i < n; i++)
                {
                    if (DNA[i] == 1)
                    {
                        length++;
                        index = i;
                        sum = DNA.Sum();
                        if (length > maxLength)
                        {
                            maxLength = length;
                            maxIndex = index;
                            maxSum = sum;
                            maxDNA = DNA;
                            maxRow = row;
                        }
                        else if (length == maxLength)
                        {
                            if (index < maxIndex)
                            {
                                maxIndex = index;
                                maxSum = sum;
                                maxDNA = DNA;
                                maxRow = row;
                            }
                            else if (index == maxIndex)
                            {
                                if (sum > maxSum)
                                {
                                    maxSum = sum;
                                    maxDNA = DNA;
                                    maxRow = row;
                                }
                            }
                        }

                    }
                    else
                    {
                        length = 0;
                    }
                }
            }
            if (maxSum > 0)
            {
                Console.WriteLine($"Best DNA sample {maxRow} with sum: {maxSum}.");
                Console.WriteLine(string.Join(" ", maxDNA));
            }
            else
            {
                Console.WriteLine($"Best DNA sample {1} with sum: {maxSum}.");
                Console.WriteLine(string.Join(" ", DNA));
            }
        }
    }
}
