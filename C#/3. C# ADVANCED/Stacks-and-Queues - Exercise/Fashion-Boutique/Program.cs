using System;
using System.Collections.Generic;
using System.Linq;

namespace Fashion_Boutique
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> inputClothes = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            Stack<int> clothes = new Stack<int>(inputClothes);

            int capacity = int.Parse(Console.ReadLine());
            int currentCapacity = capacity;
            int racks = 1;
            int sum = 0;


            while (clothes.Any())
            {
                if (sum + clothes.Peek() <= capacity)
                {
                    sum += clothes.Pop();
                }
                else
                {
                    racks++;
                    sum = 0;
                }
            }
            Console.WriteLine(racks);
        }
    }
}
