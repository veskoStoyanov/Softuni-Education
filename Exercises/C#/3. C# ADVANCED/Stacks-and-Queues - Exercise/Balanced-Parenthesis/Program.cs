using System;
using System.Collections.Generic;

namespace Balanced_Parenthesis
{
    class Program
    {
        static void Main(string[] args)
        {
            string brakets = Console.ReadLine();
            Stack<char> container = new Stack<char>();

            Dictionary<char, char> pairsBraket = new Dictionary<char, char>
            {
                {'(', ')' }, {'[',']' }, {'{','}'}
            };

            if (brakets.Length % 2 != 0)
            {
                Console.WriteLine("NO");
                return;
            }

            for (int i = 0; i < brakets.Length; i++)
            {
                char braket = brakets[i];
                if (braket == '(' || braket == '[' || braket == '{')
                {
                    container.Push(braket);
                }
                else
                {
                    if (container.Count == 0)
                    {
                        Console.WriteLine("NO");
                        return;
                    }

                    char lastBraked = container.Pop();
                    if (!(pairsBraket[lastBraked] == braket))
                    {
                        Console.WriteLine("NO");
                        return;
                    }
                }
            }

            Console.WriteLine("YES");
        }
    }
}
