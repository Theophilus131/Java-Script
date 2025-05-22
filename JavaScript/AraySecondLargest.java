public class AraySecondLargest{

public static int [] secondLargest(int [] number){

	int largest = number [0];
	int secondLargest = number [0];

	for(int i = 0; i < number.length; i++ ){

		if(number[i] > largest)
		
		secondLargest = largest;
                    largest = number[i];

}
		//return new int [] {largest};		

		return new int [] {secondLargest};



	}




}