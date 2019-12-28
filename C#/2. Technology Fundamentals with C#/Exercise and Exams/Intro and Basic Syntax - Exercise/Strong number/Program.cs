using System;

namespace Strong_number
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int num = n;
            int procent = 0;
            int sum = 0;

            while (num != 0)
            {
                procent = num % 10;

                for (int i = procent - 1; i >= 1; i--)
                {
                    procent *= i;
                }
                if (procent == 0)
                {
                    procent = 1;
                }
                sum += procent;

                num /= 10;
            }
            if (sum == n)
            {
                Console.WriteLine("yes");
            }
            else
            {
                Console.WriteLine("no");
            }
        }
    }
}
