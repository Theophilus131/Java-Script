
public class Range{
 	

public static int [] maxMin(int [] input ){

     int  maximum = input[0];
     int  minimum = input[0];
     int range = 0;

for(int i = 0; i < input.length; i++){

  if(input[i] > maximum)
	maximum = input[i];
 
  if(input[i] < minimum)
        minimum = input[i];
}
 return new int[] {maximum - minimum};
  
  }	 

}
