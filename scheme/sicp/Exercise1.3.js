
function square(x) {
	return x * x;
}
function sumOfSquares(x, y) {
	return square(x) + square(y);
}
function sumOfLargestSquares(x, y, z) {
	if ((x > y) && (y > z)) {
		return sumOfSquares(x, y);
	} else if ((x < y) && (y < z)) {
		return sumOfSquares(y, z);
	} else {
		return sumOfSquares(x, z);
	}
}

// Write to console when invoked from cscript on Windows, e.g.
// >C:\Users\haysg\Documents\GitHub\Exercises\scheme\sicp>cscript Exercise1.3.js
// Microsoft (R) Windows Script Host Version 5.8
// Copyright (C) Microsoft Corporation. All rights reserved.
//
// 13
// 13
WScript.Echo(sumOfLargestSquares(1, 2, 3));
WScript.Echo(sumOfLargestSquares(3, 2, 1));