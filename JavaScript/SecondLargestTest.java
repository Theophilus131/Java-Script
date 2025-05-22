
import java.util.Scanner;
import java.util.Arrays;

public class SecondLargestTest{
public static void main(String [] args){


Scanner input = new Scanner(System.in);

System.out.println("Enter how many element you want: ");
 int numbers = input.nextInt();
 
 int[] element = new int[numbers];


for(int count = 0; count < element.length; count++){
	element[count] = input.nextInt();
	
}

System.out.println("   " + Arrays.toString(AraySecondLargest.secondLargest(element)));



	}


}