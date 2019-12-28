using System;

namespace Triples_of_Latin_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int num = 97 + n - 1;
            char element = (char)num;

            for (char i = 'a'; i <= element; i++)
            {
                for (char j = 'a'; j <= element; j++)
                {
                    for (char k = 'a'; k <= element; k++)
                    {
                        Console.WriteLine($"{i}{j}{k}");
                    }
                }
            }
        }
    }
}
