
public class MethodOverLoading{

public static void main(String [] args){


System.out.printf("square of int number %d%n is: ", square(7));
System.out.println("square of double number  is: " + square(7.5));


	}



public static int square(int number){

	return number * number;
}

public static double square(double number){

	return number * number;
	}



}