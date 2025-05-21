import java.util.Arrays;
import java.util.Scanner;
public class RangeTest{

public static void main(String [] args){

Scanner scanner = new Scanner(System.in);

	System.out.print("Enter number of elements in the array: ");
	int number = scanner.nextInt();

	 int[] element = new int[number];

	for(int count = 0; count < element.length; count++){
	element[count] = scanner.nextInt();
	}

	System.out.println("The range of the array is: " + Arrays.toString(Range.maxMin(element)));


	}

}