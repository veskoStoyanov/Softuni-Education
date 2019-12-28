using System;

namespace Vending_Machine
{
    class Program
    {
        static void Main(string[] args)
        {
            double n = default(double);
            double coin = 0;

            bool isStart = true;
            string staf = string.Empty;

            while (true)
            {
                staf = Console.ReadLine();
                if (staf == "End")
                {
                    Console.WriteLine($"Change: {coin:f2}");
                    return;
                }
                else if (staf == "Start")
                {

                    isStart = false;
                }
                if (isStart)
                {
                    n = double.Parse(staf);
                    if (n != 0.1 && n != 0.2 && n != 0.5 && n != 1 && n != 2)
                    {
                        Console.WriteLine($"Cannot accept {n}");
                    }
                    else
                    {
                        coin += n;
                    }
                }
                if (staf == "Nuts")
                {
                    if (coin >= 2.00)
                    {
                        coin -= 2.00;
                        Console.WriteLine($"Purchased nuts");
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (staf == "Water")
                {
                    if (coin >= 0.7)
                    {
                        coin -= 0.7;
                        Console.WriteLine($"Purchased water");
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (staf == "Crisps")
                {
                    if (coin >= 1.5)
                    {
                        coin -= 1.5;
                        Console.WriteLine($"Purchased crisps");
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (staf == "Soda")
                {
                    if (coin >= 0.8)
                    {
                        coin -= 0.8;
                        Console.WriteLine($"Purchased soda");
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else if (staf == "Coke")
                {
                    if (coin >= 1.0)
                    {
                        coin -= 1.0;
                        Console.WriteLine($"Purchased coke");
                    }
                    else
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                }
                else
                {
                    if (isStart == false && staf != "Start")
                    {
                        Console.WriteLine("Invalid product");
                    }
                }
            }
        }
    }
}
