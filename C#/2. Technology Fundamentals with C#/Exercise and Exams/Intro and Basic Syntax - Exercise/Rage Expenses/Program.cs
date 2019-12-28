using System;

namespace Rage_Expenses
{
    class Program
    {
        static void Main(string[] args)
        {
            int lost = int.Parse(Console.ReadLine());

            decimal headPrice = decimal.Parse(Console.ReadLine());
            decimal mousePrice = decimal.Parse(Console.ReadLine());
            decimal keyboardPrice = decimal.Parse(Console.ReadLine());
            decimal displayPrice = decimal.Parse(Console.ReadLine());

            int headCount = 0;
            int mouseCount = 0;
            int keyboardCount = 0;
            int displayCount = 0;

            for (int i = 1; i <= lost; i++)
            {
                if (i % 2 == 0)
                {
                    headCount++;
                }
                if (i % 3 == 0)
                {
                    mouseCount++;
                }
                if (i % 6 == 0)
                {
                    keyboardCount++;
                }
                if (i % 12 == 0)
                {
                    displayCount++;
                }
            }
            decimal head = headCount * headPrice;
            decimal mouse = mouseCount * mousePrice;
            decimal keyboard = keyboardCount * keyboardPrice;
            decimal display = displayCount * displayPrice;

            decimal total = head + mouse + keyboard + display;
            Console.WriteLine($"Rage expenses: {total:f2} lv.");
        }
    }
}
