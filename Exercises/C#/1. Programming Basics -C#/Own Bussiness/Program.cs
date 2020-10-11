using System;

namespace Own_Bussiness
{
    class Program
    {
        static void Main(string[] args)
        {
            int roomWidth = int.Parse(Console.ReadLine());
            int roomLength = int.Parse(Console.ReadLine());
            int roomHeight = int.Parse(Console.ReadLine());

            int roomVolume = roomWidth * roomLength * roomHeight;
            bool hasEnoughFreeSpace = true;

            string command = string.Empty;

            while ((command = Console.ReadLine()) != "Done")
            {
                int computerVolume = int.Parse(command);
                roomVolume -= computerVolume;

                if (roomVolume < 0)
                {
                    Console.WriteLine($"No more free space! You need {Math.Abs(roomVolume)} Cubic meters more.");
                    hasEnoughFreeSpace = false;
                    break;
                }
            }
            if (hasEnoughFreeSpace)
            {
                Console.WriteLine($"{roomVolume} Cubic meters left.");
            }
        }
    }
}
