export const log = (
  severity: 'log' | 'warn' | 'error',
  ...optionalParams: any[]
) =>
  // eslint-disable-next-line no-restricted-syntax
  console[severity]('fabric', ...optionalParams);

// copy from lib.es2022.error.d.ts
interface ErrorOptions {
  cause?: unknown;
}
export class FabricError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    // @ts-ignore
    super(`fabric: ${message}`, options);
  }
}

export class SignalAbortedError extends FabricError {
  constructor(context: string) {
    super(`${context} 'options.signal' is in 'aborted' state`);
  }
}
