using System;
using System.Linq;

namespace Squares_in_Matrix
{
    class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            int cols = int.Parse(Console.ReadLine());

            string[,] matrix = new string[rows, cols];

            for (int row = 0; row < rows; row++)
            {

                string[] arr = Console.ReadLine()
                  .Split()
                  .ToArray();
                   
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = arr[col];
                }

            }

            Console.WriteLine();
        }
    }
}
