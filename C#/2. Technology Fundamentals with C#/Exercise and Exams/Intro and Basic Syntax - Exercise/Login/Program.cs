using System;

namespace Login
{
    class Program
    {
        static void Main(string[] args)
        {
            string user = Console.ReadLine();
            string password = string.Empty;

            int counter = 0;

            while (true)
            {
                password = Console.ReadLine();

                string correctPas = "";
                for (int i = password.Length - 1; i >= 0; i--)
                {
                    char element = password[i];
                    correctPas += element;
                }
                if (correctPas == user)
                {
                    break;
                }
                else
                {
                    counter++;
                    if (counter == 4)
                    {
                        Console.WriteLine($"User {user} blocked!");
                        return;
                    }
                    Console.WriteLine("Incorrect password. Try again.");
                }
            }
            Console.WriteLine($"User {user} logged in.");
        }
    }
}
