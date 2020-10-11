using System;

namespace Water_Overflow
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int litre = default(int);
            int capacity = 0;

            for (int i = 0; i < n; i++)
            {
                litre = int.Parse(Console.ReadLine());
                if (litre + capacity > 255)
                {
                    Console.WriteLine("Insufficient capacity!");
                }
                else
                {
                    capacity += litre;
                }
            }
            Console.WriteLine(capacity);
        }
    }
}
