using System;
using System.Collections.Generic;
using System.Linq;

namespace Fast_Food
{
    class Program
    {
        static void Main(string[] args)
        {
            int foodQuantity = int.Parse(Console.ReadLine());

            List<int> inputOrders = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToList();

            Console.WriteLine(inputOrders.Max());

            Queue<int> orders = new Queue<int>(inputOrders);


            while (true)
            {
                if (orders.Count > 0)
                {
                    int any = orders.Peek();



                    if (foodQuantity - any >= 0)
                    {
                        foodQuantity -= any;
                        orders.Dequeue();
                    }
                    else
                    {
                        Console.WriteLine($"Orders left: {string.Join(" ", orders)}");
                        return;
                    }
                }
                else
                {
                    Console.WriteLine("Orders complete");
                    return;
                }
            }
        }
    }
}
