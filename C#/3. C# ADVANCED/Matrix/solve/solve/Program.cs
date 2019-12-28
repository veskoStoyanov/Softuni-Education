using System;
using System.Linq;

namespace solve
{
    class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            double[][] matrix = new double[rows][];

            for (int row = 0; row < rows; row++)
            {
                double[] arr = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                    .Select(double.Parse)
                    .ToArray();

                matrix[row] = arr;        
            }

            Analyse(matrix);

            while (true)
            {
                string[] input = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                string command = input[0];
                if (command.ToLower() == "end")
                {
                    break;
                }

                int row = int.Parse(input[1]);
                int col = int.Parse(input[2]);
                double value = double.Parse(input[3]);

                if (row >= matrix.Length || row < 0)
                {
                    continue;
                }

                if (col >= matrix[row].Length || col < 0)
                {
                    continue;
                }  
                
                else if(command == "Add")
                {
                    matrix[row][col] += value;
                }
                else if(command == "Subtract")
                {
                    matrix[row][col] -= value;
                }         
            }

            foreach (var arr in matrix)
            {
                Console.WriteLine(string.Join(" ", arr));
            }
        }

        private static void Analyse(double[][] matrix)
        {
            for (int row = 0; row < matrix.Length - 1; row++)
            {
                if(matrix[row].Length == matrix[row+ 1].Length)
                {
                    for (int col = 0; col < matrix[row].Length; col++)
                    {
                        matrix[row][col] *= 2;
                        matrix[row+1][col] *= 2;
                    }                 
                }
                else
                {
                    for (int col = 0; col < matrix[row].Length; col++)
                    {
                        matrix[row][col] /= 2;                       
                    }
                    for (int col = 0; col < matrix[row+1].Length; col++)
                    {
                        matrix[row+1][col] /= 2;
                    }
                }
            }
        }
    }
}
