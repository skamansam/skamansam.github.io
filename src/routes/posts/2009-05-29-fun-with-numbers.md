---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Fun With Numbers! (revised)
description: How to Find polynomial coefficients using Pascal's Triangle
excerpt: I have always had a certain love for math and the neat things you can do with
  it.
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - programming
tags:
  - Math
  - Pascal's Triangle
  - Polynomials
created_at: 2009-05-29 8:48:00
updated_at: 2016-09-14 7:56:00
lastmod: 2022-11-06T21:44:22.048Z
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

<div class='notice'>
  This post is heavy with math formualae, so may take a few seconds to format correctly.
</div>

<div class='notice'>
  This post was originally written 2009/05/29, but was never finished. I just
  finished the revisions on 2016/09/14 and it is now complete.
</div>

I have always had a certain love for math and the neat things you can do with it. Here is a bit of information and shortcuts I have picked up in a few of my math classes.

## Pascal's Triangle
Pascal's Triangle is a pretty neat thing. It is very simple to construct and can be used to understand a lot of different ideas. It follows a very simple form: start with a '1' and add the two digits above  to get the next number. The first few line look like this:

<div class='center'>

```
1
1  1
1  2  1
1  3  3  1
1  4  6  4  1
1  5 10 10  5  1
1  6 15 20 15  6  1
...
```

</div>

The line numbers start at 0, and continue on ad infinitum. In order to generate this triangle, programmatically, you would use something like this:

```cpp
vector<int> pascal(
      vector<int> prev, //the current (old) row data
      int *len,		//the length of the data
      int end,			//the row to retrieve
      int cur=0		//the current row we are on
      );

vector<int> pascal(vector<int> prev,int *len,int end,int cur){

       //return immediately if we are at the last row
      if (cur==end) return prev;

     	//if the current vector length is 0, then set it to 1
      	if (*len==0) *len=1;

      	//create a temp vector (all 1's) to store the new row data
      	vector<int> t((*len)+1,1);

      	//sum the two rows
      	for(int i=1;i<(*len);i++)
            t[i]=prev[i-1]+prev[i];

      	//increase the length by 1
      	*len=(*len)+1;

      	//return the new row data
      	return pascal(t,len,end,cur+1);

}
```

## Binomial Expansion
Remember binomials from algebra? They were the pair of numbers used to create or simplify polynomial expressions, something like:

$$ 
( x + 3 )^3 = x^3 + 9x^2 + 27x + 27 
$$

You can use Pascal's triangle to find the coefficients of the polynomials. Let's begin by solving for the generic  case:

$$
(a+b)^n = 
$$
$$
(a+b)^{n-1}(a+b) = 
$$
$$
(a+b)^{n-2}(a+b)^2 = 
$$
$$
(a+b)^{n-2}((a+b)(a+b)) = 
$$
$$
( (a*a) + (a*b) + (b*a) + (b*b) )(a+b)^{n-1}= 
$$
$$
(a^2+2ab+b^2)(a+b)^{n-1} = 
$$

See the coefficients so far, with $n = 2$ ? They are $[1 2 1]$, which corresponds
to the second row in Pascal's triangle. But this could be a fluke, right, so
let's jump ahead to $n = 5$ to see if that works as well.


$$
(a+b)^n = 
$$
$$
(a+b)^{n-6}(a+b)^5 = 
$$
$$
(a+b)^{n-6}( (a+b) (a+b) (a+b) (a+b) (a+b) ) = 
$$
$$
(a+b)^{n-6}( ( (a+b)(a+b) )( (a+b)(a+b) ) (a+b) ) = 
$$

[we know what $(a+b)^2$ is, so: ]

$$
(( a^2+2ab+b^2 )( a^2+2ab+b^2 )(a+b) )(a+b)^{n-6} =
$$
$$
( ( (a^2*a^2)+(a^2*2ab) + (a^2*b^2) + ( 2ab*a^2) + (2ab*2ab) + (2ab*b^2) + (b^2*a^2)+(b^2*2ab) + (b^2*b^2) ) (a+b) )(a+b)^{n-6} = 
$$
$$
( ( a^4 + 2a^3b+ a^2b^2 + 2a^3b + 4a^2b^2 + 2ab^3 + b^2a^2 + 2ab^3+ b^4) (a+b) )(a+b)^{n-6} =
$$
$$
( ( a^4 + 4a^3b + 6a2b^2 + 4ab^3+b^4) (a+b) )(a+b)^{n-6} =
$$

[note: notice that the coefficients of $(a+b)^4$ are (1 4 6 4 1) ! ]
$$
( ( a^4*a + a^4*b + 4a^3b*a + 4a^3b*b + 6a^2b^2*a + 6a^2b^2*b + 4ab^3*a + 4ab^3*b + b^4*a+b^4*b))(a+b)^{n-6} =
$$
$$
( ( a^5 + a^4b + 4a^4b + 4a^3b^2 + 6a^3b^2 + 6a^2b^3 + 4a^2b^3 + 4ab^4 + ab^4+b^5))(a+b)^{n-6}=
$$
$$
( ( a^5 +5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5)(a+b)^{n-6}
$$


There it is! The coefficients correspond to the rows on Pascal's Triangle!

### Features
Now, to make things a little simpler, I will note some interesting "features" about what we just did.

#### General Formula for Binomial Expansion
The general formula for binomial expansion is:

$$
(a+b)^n = \sum_{i=0}^n (P_{ni}a^{n-i}b^i)
$$

$$
\sum\limits_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}
$$

Where $P_{ni}$ is the coefficient at row $n$ (starting from 0) and column $i$ in
Pascal's Triangle. The formula means to add from $i=0$ to $n$ all the terms
$(P_{ni}a^{n-i}b^i)$ , replacing $i$ with the number you are at. For example,
supposing $i=3$, you would get:


$$
\sum_{i=0}^{3}(P_{3i}a^{3-i}b^i) = 
$$

$$
(P_{(3,0)}a^{3-0}b^0) + (P_{(3,1)}a^{3-1}b^1) + (P_{(3,2)}a^{3-2}b^2) + (P_{(3,3)}a^{3-3}b^3) = 
$$

since $P_3 = [1 3 3 1]$ , we finally get:

$$
((1)a^{3-0}b^0) + ((3)a^{3-1}b^1) + ((3)a^{3-2}b^2) + ((1)a^{3-3}b^3) 
$$

cleaning up a bit :

$$
a^3 + 3a^2b + 3ab^2 + b^3
$$


#### Exponents
Note in all the expansions, the first variable counts down from $n$ to $0$, while the second variable counts up from $0$ to $n$.

### Does your binomial already have coefficients?
If your binomial already has coefficients, simply put them with their terms like so:

$$
\sum_{i=0}^{n}(P_{ni}(xa)^{n-i}(yb)^i)
$$

Using the commutative property, it can be rewritten as such:

$$
\sum_{i=0}^{n}(P_{3i}(x^{n-i}y^{i})a^{n-i}b^i) 
$$

Let's try an example!

$$
(3a+2b)^3 =
(1)(3a)^{3}(2b)^0 + (3)(3a)^{2}(2b) + (3)(3a)(2b)^2 + (1)(2b)^3 =
(1)(3^3)a^3 + (3)(3^2*2)a^{2}b + (3)(3*2^2)ab^2 + (1)(2^3)b^3 =
(1)(27)a^3 + (3)(18)a^{2}b + (3)(12)ab^2 + (1)(8)b^3 =
27a^3 + 54a^{2}b + 36ab^2 + 8b^3
$$

# Conclusion

As you can see, it is fairly easy to use Pascal's Triagel as a lookup table for
binomial exapnsion's coefficients. I hope you have much more fun in your maths!
