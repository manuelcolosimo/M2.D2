/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
JavaScript ha alcuni tipi di dati principali che possiamo usare per creare variabili e costruire programmi. Ecco alcuni di loro:

Number: i numeri possono essere interi (come 1, 2, 3) o decimali (come 0,5). Possono essere utilizzati per fare calcoli matematici.

String: le stringhe sono come le parole o le frasi. Possono essere utilizzate per creare messaggi o per lavorare con testo.

Boolean: un valore booleano può essere vero o falso. Possono essere utilizzati per controllare se una cosa è vera o falsa.

Array: un array è come una lista di cose. Puoi avere un array di numeri, un array di stringhe, o anche un array di altri array.

Object: Gli oggetti sono simili alle scatole. Possono contenere diverse cose al loro interno, come numeri, stringhe e altri oggetti.

Function: Funzione è una specie di ricetta, che ti dice come fare qualcosa.

Ecco alcuni esempi per bambini:

Se vogliamo contare quante mele abbiamo, useremmo un numero
Se vogliamo scrivere una lettera al nostro amico, useremo una stringa per scrivere ciò che vogliamo dire
Se vogliamo sapere se il nostro gelato è finito useremo un booleano, che può essere vero se finito o falso se ancora c'è
Se vogliamo fare la lista di compiti per la giornata useremo un array per elencare tutte le cose da fare
Se vogliamo descrivere il nostro giocattolo preferito useremo un oggetto per descrivere tutte le sue caratteristiche
Se vogliamo sapere come fare la crostata useremo una funzione che ci darà tutti i passaggi per farla.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
In JavaScript, un oggetto è una struttura dati che permette di raccogliere e organizzare informazioni.
Immagina un oggetto come una scatola piena di tanti piccoli compartimenti, ciascuno dei quali può contenere un valore diverso.
Ciascuno di questi compartimenti ha un nome unico che ci consente di accedere al suo valore.
Gli oggetti ci consentono di creare dati più complessi e di organizzarli in modo più significativo rispetto a utilizzare solo variabili singole.
Inoltre, gli oggetti in javascript possono avere anche metodi, che sono come funzioni.
Un metodo è un insieme di istruzioni che possono essere eseguite sui dati contenuti nell'oggetto.

Per fare un esempio concreto, immagina di voler creare un programma per un negozio di frutta.
Potremmo creare un oggetto "mela" che avrebbe diverse proprietà come colore, forma, prezzo, peso e così via. 
In questo modo abbiamo organizzato le informazioni relative alle mele in un unico oggetto, invece di doverle tenere in una serie di variabili separate.
*/

/* ESERCIZIO 3
 Scriviti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

In primo luogo creiamo due variabili num1 e num2 e gli assegnamo i valori 12 e 20 rispettivamente.
Poi, creiamo una terza variabile chiamata "sum" e utilizziamo l'operatore aritmetico di somma (+) per assegnare
alla variabile la somma dei valori delle due variabili num1 e num2.
Infine, usiamo il metodo console.log() per stampare il valore della variabile "sum" , che in questo caso corrisponde al risultato della somma 12+20 = 32
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
let x = 12;

Questa istruzione dichiara una nuova variabile chiamata "x" e le assegna il valore 12.
In questo modo, ogni volta che utilizziamo "x" nell'applicazione, essa rappresenterà il numero 12.
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
let name = "Manuel";

Questa istruzione dichiara una nuova variabile chiamata "name" e le assegna il valore "Manuel", che è una stringa di caratteri.
In questo modo, ogni volta che utilizziamo "name" nell'applicazione, essa rappresenterà la stringa "Manuel"
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
Per eseguire una sottrazione tra il numero 4 e la variabile "x" (che contiene il numero 12),
possiamo utilizzare l'operatore aritmetico di sottrazione (-) e assegnare il risultato a una nuova variabile o stamparlo direttamente:

let result = 4 - x;
console.log(result);

In questo caso il risultato sarebbe -8, quindi la variabile "result" conterrà il numero -8 e il metodo console.log() stamperà -8
Anche questo codice potrebbe essere scritto in una sola riga:

console.log(4-x);

In questo caso la sottrazione tra 4 e x (che è 12) avviene direttamente nel metodo console.log() e quindi non serve creare una nuova variabile,
ma solo per far vedere il risultato.
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2); // questo console.log() restituirà true
console.log(name1.toLowerCase() === name2.toLowerCase()); // questo console.log() restituirà true

La prima riga del codice crea una variabile "name1" e le assegna la stringa "john".
La seconda riga del codice crea una variabile "name2" e le assegna la stringa "John" .
Il primo console.log() utilizza l'operatore di confronto di non uguaglianza (!==) per verificare se le due stringhe sono diverse.
Poichè le stringhe hanno il case differente, il valore che verrà stampato sarà true
Il secondo console.log() utilizza il metodo toLowerCase() per trasformare entrambe le stringhe in lowercase,
e poi l'operatore di uguaglianza (===) per confrontare i due valori. in questo caso il valore stampato sarà true.
*/
