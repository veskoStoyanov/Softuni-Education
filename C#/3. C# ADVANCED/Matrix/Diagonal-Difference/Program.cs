using System;
using System.Linq;

namespace Diagonal_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];

            for (int row = 0; row < n; row++)
            {
                int[] input = Console
                    .ReadLine()
                    .Split()
                    .Select(int.Parse)
                    .ToArray();

                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = input[col];
                }
            }

            int leftRightDiagonalSum = 0;
            int rowIndex = 0;
            int colIndex = 0;

            while(true)
            {
                if(rowIndex > matrix.GetLength(0) -1 || colIndex > matrix.GetLength(1) -1)
                {
                    break;
                }

                leftRightDiagonalSum += matrix[rowIndex, colIndex];
                rowIndex++;
                colIndex++;
            }

            rowIndex = 0;
            colIndex --;
            int rightLeftDiagonalSum = 0;

            while (true)
            {
                if (rowIndex <= - 1 || colIndex <=- 1)
                {
                    break;
                }

                rightLeftDiagonalSum += matrix[rowIndex, colIndex];
                rowIndex++;
                colIndex--;
            }

            Console.WriteLine(Math.Abs(leftRightDiagonalSum- rightLeftDiagonalSum));
        }
    }
}
