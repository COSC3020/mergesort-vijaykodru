[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


The time complexity for the implemented in place mergesort is $\theta(n^2log(n))$ this is because, the outer loop is responsible for breaking the original array into smaller pieces which takes time complexity of $\log(n)$. After this iteration, the code uses a second for loop inside the first one that is resposible in checking each individual element with n number of elements present in the array and does this for n times. this iteration represents the time complexity of n^2. because we are using both the loops for the mergesort, the time complexity will be $\theta(n^2logn)$ which is also the worst case time complexity. This tells us that as the size of the array increases, the time it takes to sort the array using the implemented code increases drastically. 
