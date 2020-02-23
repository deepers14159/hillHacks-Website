import java.security.SecureRandom;
import java.util.Scanner;
import java.util.ArrayList;

public class DataScience {

    private static final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
    private static final String NUMBER = "0123456789";

    private static final String DATA_FOR_RANDOM_STRING = CHAR_LOWER + CHAR_UPPER + NUMBER;
    private static SecureRandom random = new SecureRandom();
    
    private static ArrayList<String> randomStrings = new ArrayList<String>();
    private static ArrayList<String> hillsStrings = new ArrayList<String>();
    
    private static int rand = (int) (Math.random() * 50);
    private static int hillsCounter = 0;

    public static void main(String[] args) {

        for (int i = 0; i < 1000; i++) {
            randomStrings.add(generateRandomString(8));
            if (i % rand == 0) {
                randomStrings.add("hillsHacks2020");
            }
        }
        
        for (int i = 0; i < randomStrings.size(); i++) {
            System.out.print(randomStrings.get(i) + ", ");
            if (i % 10 == 0) {
                System.out.println(randomStrings.get(i) + ", ");
            }
        }
       
    }

    public static String generateRandomString(int length) {
        if (length < 1) throw new IllegalArgumentException();

        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {

			// 0-62 (exclusive), random returns 0-61
            int rndCharAt = random.nextInt(DATA_FOR_RANDOM_STRING.length());
            char rndChar = DATA_FOR_RANDOM_STRING.charAt(rndCharAt);

            // debug

            sb.append(rndChar);

        }

        return sb.toString();

    }

}
