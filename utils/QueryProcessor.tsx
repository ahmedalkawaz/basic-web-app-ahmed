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

    // Handles "Which of the following numbers is both a square and a cube: ..."
  const squareCubeMatch = query.match(/square and a cube[:\s]+([\d,\s]+)/i);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].match(/\d+/g)?.map(Number) || [];
    const result = numbers.find(n => {
      const sqrt = Math.round(Math.sqrt(n));
      const cbrt = Math.round(Math.cbrt(n));
      return sqrt * sqrt === n && cbrt * cbrt * cbrt === n;
    });
    return result !== undefined ? result.toString() : "none";
  }

  return "";
}
