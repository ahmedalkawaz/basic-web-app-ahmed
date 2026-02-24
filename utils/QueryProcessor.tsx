export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Ahmed";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "akawaz";
  }

  // Handles "What is X plus Y?"
  const plusMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (plusMatch) {
    const result = parseInt(plusMatch[1]) + parseInt(plusMatch[2]);
    return result.toString();
  }

  // Handles "Which of the following numbers is the largest: X, Y, Z?"
  const largestMatch = query.match(/largest[:\s]+([\d,\s]+)/i);
  if (largestMatch) {
    const numbers = largestMatch[1].match(/\d+/g)?.map(Number) || [];
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  //handle square cube
  const squareCubeMatch = query.match(/square and a cube[:\s]+([\d,\s]+)/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].match(/\d+/g)?.map(Number) || [];
    const results = numbers.filter(n => {
      const sqrt = Math.round(Math.sqrt(n));
      const cbrt = Math.round(Math.cbrt(n));
      return sqrt * sqrt === n && cbrt * cbrt * cbrt === n;
    });
    return results.length > 0 ? results.join(", ") : "none";
  }

  const multiplyMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multiplyMatch) {
    return (parseInt(multiplyMatch[1]) * parseInt(multiplyMatch[2])).toString();
  }
  // Handles "Which of the following numbers are primes: X, Y, Z?"
  const primesMatch = query.match(/primes[:\s]+([\d,\s]+)/i);
  if (primesMatch) {
    const numbers = primesMatch[1].match(/\d+/g)?.map(Number) || [];
    const isPrime = (n: number) => {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    };
    const primes = numbers.filter(isPrime);
    return primes.length > 0 ? primes.join(", ") : "none";
  }
  // Handles "What is X minus Y?"
  const minusMatch = query.match(/what is (-?\d+) minus (-?\d+)/i);
  if (minusMatch) {
    return (parseInt(minusMatch[1]) - parseInt(minusMatch[2])).toString();
  }

  // Handles "What is X divided by Y?"
  const divideMatch = query.match(/what is (-?\d+) divided by (-?\d+)/i);
  if (divideMatch) {
    const numerator = parseInt(divideMatch[1]);
    const denominator = parseInt(divideMatch[2]);
    if (denominator === 0) return "undefined";
    return (numerator / denominator).toString();
  }

  return "";
}
