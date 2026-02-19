/**
 * Thread creation flags
 * https://learn.microsoft.com/en-us/windows/win32/procthread/thread-creation-flags
 */
export enum ThreadCreationFlags {
  /**
   * The thread runs immediately after creation.
   */
  IMMEDIATE = 0,

  /**
   * The thread is created in a suspended state, and does not run until the ResumeThread function is called.
   */
  CREATE_SUSPENDED = 0x00000004,

  /**
   * The dwStackSize parameter specifies the initial reserve size of the stack.
   * If this flag is not specified, dwStackSize specifies the commit size.
   */
  STACK_SIZE_PARAM_IS_A_RESERVATION = 0x00010000,
}

/**
 * The thread is still running.
 */
export const STILL_ACTIVE = 259;
