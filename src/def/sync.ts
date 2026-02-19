/**
 * Wait return values and synchronization constants
 * https://learn.microsoft.com/en-us/windows/win32/api/synchapi/nf-synchapi-waitforsingleobject
 */
export enum WaitReturn {
  /**
   * The specified object is a mutex object that was not released by the thread that owned the mutex object before the owning thread terminated.
   * Ownership of the mutex object is granted to the calling thread and the mutex state is set to nonsignaled.
   */
  ABANDONED = 0x00000080,

  /**
   * The state of the specified object is signaled.
   */
  OBJECT_0 = 0x00000000,

  /**
   * The time-out interval elapsed, and the object's state is nonsignaled.
   */
  TIMEOUT = 0x00000102,

  /**
   * The function has failed. To get extended error information, call GetLastError.
   */
  FAILED = 0xffffffff,
}

/**
 * The time-out interval, in milliseconds. If a nonzero value is specified, the function waits until the object is signaled or the interval elapses.
 * If dwMilliseconds is zero, the function does not enter a wait state if the object is not signaled; it always returns immediately.
 * If dwMilliseconds is INFINITE, the function will return only when the object is signaled.
 */
export const INFINITE = 0xffffffff;
