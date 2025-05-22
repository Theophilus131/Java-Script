	import org.junit.jupiter.api.Test;
        import static org.junit.jupiter.api.Assertions.assertArrayEquals;

	public class ArraySecondLargestTdd{

 @Test
   public void testSecondLargestIsCorrect(){

 	int [] input = {9, 6, 8, 11, 12};
	int [] expected = {11};
  	
	AraySecondLargest theo  = new AraySecondLargest();
	int [] range   = theo.secondLargest(input);

	assertArrayEquals(expected, range);



 
	}
}