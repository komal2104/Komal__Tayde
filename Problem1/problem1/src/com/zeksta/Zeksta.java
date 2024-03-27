package com.zeksta;


	import java.util.ArrayList;
	import java.util.List;
	import java.util.Scanner;

	public class Zeksta {
	    public static void virusIndices(int t, String[][] testCases) {
	        for (int i = 0; i < t; i++) {
	            String p = testCases[i][0];
	            String v = testCases[i][1];
	            List<Integer> indices = new ArrayList<>();

	            for (int j = 0; j <= p.length() - v.length(); j++) {
	                if (isMatch(p.substring(j, j + v.length()), v)) {
	                    indices.add(j);
	                }
	            }

	            if (!indices.isEmpty()) {
	                for (int index : indices) {
	                    System.out.print(index + " ");
	                }
	                System.out.println();
	            } else {
	                System.out.println("No Match!");
	            }
	        }
	    }

	    public static boolean isMatch(String s1, String s2) {
	        int countDiff = 0;
	        for (int i = 0; i < s1.length(); i++) {
	            if (s1.charAt(i) != s2.charAt(i)) {
	                countDiff++;
	            }
	            if (countDiff > 1) {
	                return false;
	            }
	        }
	        return true;
	    }

	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        int t = scanner.nextInt();
	        scanner.nextLine(); // Consume newline character after reading integer input
	        String[][] testCases = new String[t][2];

	        for (int i = 0; i < t; i++) {
	            String[] testCase = scanner.nextLine().split(" ");
	            testCases[i][0] = testCase[0];
	            testCases[i][1] = testCase[1];
	        }

	        virusIndices(t, testCases);
	    }
	}


