import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test('should return shakespeare description', () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe((
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    ));
  });

  test('should return name', () => {
    const query = "What is your name?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Ahmed");
  });

  test('should return andrewid', () => {
    const query = "andrew id";
    const response: string = QueryProcessor(query);
    expect(response).toBe("akawaz");
  });

  test('should return sum of two numbers', () => {
    const query = "What is 46 plus 67?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("113");
  });

  test('should return the largest number', () => {
    const query = "Which of the following numbers is the largest: 50, 43, 32?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("50");
  });

  test('should return the number that is both a square and a cube', () => {
    const query = "Which of the following numbers is both a square and a cube: 2896, 1184, 520, 4873, 64, 4761?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("64");
  });

  test('should return product of two numbers', () => {
    const query = "What is 34 multiplied by 39?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("1326");
  });
});