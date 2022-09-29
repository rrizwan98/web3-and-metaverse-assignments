/*
1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
 would you like to learn some Python today?”
 */
var name = "Hello Eric,would you like to learn some Python today?"
console.log(name)

/*
2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

var person_name = "raza rizwan"
console.log(person_name.toLowerCase())
console.log(person_name.toUpperCase())

function sentenceCase (txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()};

console.log(sentenceCase(person_name)) 

/*
3.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks:

Famous Quote:
Muhammad Ali Jinnah once said, “Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.”
*/
 var famous_person = "Muhammad Ali Jinnah once said:"
 var Quote = "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man."

 console.log(famous_person+ " " +Quote)

 /*
 4. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
  character combination, "\t" and "\n", at least once. Print the name once,so the whitespace around the name is displayed.
   Then print the name after striping the white spaces.
 */ 

var name1 = "\t Raza \n Rizwan"
console.log(name1)

/**
 * 5. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your 
 * operations in print statements to see the results. */ 

console.log(4+4)
console.log(12-4)
console.log(4*2)
console.log(16/2)

/**
6. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
 Print that message.
*/ 

var favorite_num = 6
var reason = ": my favorite number is below 10, not a 6 it's just Random, I get started learning or I get to start work in any field so I want to lay in below 10 around  the world"
console.log(favorite_num+''+ reason )

/*
7. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
 just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
 */

// Meaning of Raza: Name Raza in the Arabic origin, means One who brings hope to people. Name Raza is of Arabic origin
// the second name is my respected father name "Rizwan Ahmed" name of the meaning is Acceptance. Goodwill. Name of the keeper of the Gates of Heaven.
var name1 = "Raza Rizwan Ahmed"
console.log(name1)
