
// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */
 function elDivisor(a) { //el numero a evaluar es "a"
    if (typeof a !== "number") {
    console.log("not a number");
             return; 
    } // las llaves agrupan sentencias
            
             if (a % 3 === 0 && a % 5 === 0) // en esta parte evalua el numero con 3 y 5
             console.log("fizzbuzz")
         else if (a % 3 === 0) // aqui lo evalua con 3
            console.log("fizz");
        else if (a % 5 === 0) //aqui lo evalua con 5 // else if va con sentencia
             console.log("buzz");
         else //el else puede ir sin sentencia // es la sentencia final
            console.log("input");
        }
 elDivisor(0);

 // limite de velocidad
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */
 function limiteVelocidad(n){
        let puntosMalos = Math.floor(n - 70 / 5)
        if (puntosMalos > 12)
        console.log("Licencia suspendida")
        else console.log ("Sin suspender...aún")
    
 }
 limiteVelocidad(35)

  // Par or non
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique si es par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */

   function serie(num){
       for(i=0; i<=num; i++){
       if(i % 2 == 0)
           console.log(i +" es " + "par")
        else (i % 2 != 0)
        console.log( i+ " es " + "non")
    }
   }
   console.log(serie(5))

   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

    // function multiplos(number){
    //     let multi = 0
    //     for (i=0; i<=number; i++){
    //         if (number % 3 += i) 
            
    //     }
        
    // }
    // console.log(multiplos(10))

    // Show the stars
    function showStars(v){7
        let stars = "*"
        for (i=0; i<=v; i++)
        console.log("*" + i)
    }
    console.log(showStars(10))

    // // // Print Primes  
    // 