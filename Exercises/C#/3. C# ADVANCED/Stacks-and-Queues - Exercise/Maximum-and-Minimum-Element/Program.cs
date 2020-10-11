using System;
using System.Collections.Generic;
using System.Linq;

namespace Maximum_and_Minimum_Element
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> stack = new Stack<int>();
            int count = int.Parse(Console.ReadLine());
            int min = int.MaxValue;
            int max = int.MinValue;

            for (int i = 0; i < count; i++)
            {
                var data = Console.ReadLine().Split().Select(int.Parse).ToArray();
                var command = data[0];

                switch (command)
                {
                    case 1:
                        int forAdd = data[1];

                        if (min > forAdd)
                            min = forAdd;
                        if (max < forAdd)
                            max = forAdd;

                        stack.Push(forAdd);

                        break;
                    case 2:
                        if (stack.Count > 0)
                        {

                            int forPop = stack.Pop();
                            if (stack.Count > 0)
                            {
                                if (forPop == min)
                                {
                                    min = stack.Min();
                                }
                                if (forPop == max)
                                {
                                    max = stack.Max();
                                }
                            }
                            else
                            {
                                min = int.MaxValue;
                                max = int.MinValue;
                            }

                        }

                        break;
                    case 3:
                        if (stack.Count > 0)
                            Console.WriteLine(max);

                        break;
                    case 4:
                        if (stack.Count > 0)
                            Console.WriteLine(min);

                        break;
                    default:
                        break;
                }

            }
            Console.WriteLine(string.Join(", ", stack));
        }
    }
}
