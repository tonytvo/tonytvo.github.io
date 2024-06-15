/**
 * Represents a custom type that can hold either a successful result or an error.
 * It is defined as a tuple with two optional elements, T for success and E for error.
 */
export type Result<T, E> = [T | null, E | null];

/**
 * Creates a new `Result` object representing an error condition (`Err`).
 *
 * The function takes an `Error` object and constructs a `Result` tuple
 * with a `null` value for success and the provided error value.
 */
export const Err = <T extends Error>(error: T): Result<null, T> => [null, error];

/**
 * Creates a new `Result` object representing a successful outcome (`Ok`).
 *
 * The function takes a value of type `T` (or `null`) and constructs a `Result` tuple
 * with the provided value for success.
 */
export const Ok = <T>(result: T | null): Result<T, null> => [result, null];

/**
 * Checks if the given `Result` object represents an error (`Err`).
 *
 * The function examines the `Result` tuple and determines if it represents an error case.
 * It returns a boolean value indicating whether the `Result` is an error.
 */
export const isErr = <T, E>(result: Result<T, E>): result is [null, E] =>
  result[0] === null && result[1] !== null;

/**
 * Checks if the given `Result` object represents a successful result (`Ok`).
 *
 * The function examines the `Result` tuple and determines if it represents a successful outcome.
 * It returns a boolean value indicating whether the `Result` is a success.
 */
export const isOk = <T, E>(result: Result<T, E>): result is [T, null] =>
  result[0] !== null && result[1] === null;

/**
 * Matches the result of a `Result` type and applies the appropriate callback function.
 * If the `Result` is `Ok`, the `onSuccess` callback is called with the value of type `T`.
 * If the `Result` is `Err`, the `onError` callback is called with the error value of type `E`.
 */
export const match = <T, E, R>(
  result: Result<T, E>,
  onSuccess: (value: T) => R,
  onError: (error: E) => null | unknown
): R => {
  if (isOk(result)) {
    return onSuccess(result[0]!);
  } else {
    return onError(result[1]!);
  }
};