export type Function<I, O> = I extends void ? () => O : (input: I) => O

export type AsyncFunction<I, O> = I extends void ? () => Promise<O> : (input: I) => Promise<O>
