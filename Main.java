package main;
public class Main {
    public static void main(String[] args) {
        int n = 5; // Change the value of n as needed
        long factorial = calculateFactorial(n);
        System.out.println("Factorial of " + n + " is: " + factorial);
    }

    // Function to calculate factorial recursively
    public static long calculateFactorial(int n) {
        if (n == 0) {
            return 1; // Base case: 0! = 1
        } else {
            return n * calculateFactorial(n - 1); // Recursive case: n! = n * (n-1)!
        }
    }
}