	import org.junit.jupiter.api.Test;
        import static org.junit.jupiter.api.Assertions.assertArrayEquals;

	public class RangeTdd{

 @Test
   public void testRangeIsCorrect(){

 	int [] input = {5, 6, 10, 15, 20};
	int expected = {15};
  	
	Range addition = new Range();
	int  addition = addition.maxMin(input);

	assertArrayEquals(expected, addition.maxMin(input));

	}
}