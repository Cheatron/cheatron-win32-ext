/**
 * Process access rights
 * https://learn.microsoft.com/en-us/windows/win32/procthread/process-security-and-access-rights
 */
export enum ProcessAccess {
  TERMINATE = 0x0001,
  CREATE_THREAD = 0x0002,
  SET_SESSIONID = 0x0004,
  VM_OPERATION = 0x0008,
  VM_READ = 0x0010,
  VM_WRITE = 0x0020,
  DUP_HANDLE = 0x0040,
  CREATE_PROCESS = 0x0080,
  SET_QUOTA = 0x0100,
  SET_INFORMATION = 0x0200,
  QUERY_INFORMATION = 0x0400,
  SUSPEND_RESUME = 0x0800,
  QUERY_LIMITED_INFORMATION = 0x1000,
  SET_LIMITED_INFORMATION = 0x2000,
  ALL_ACCESS = 0x1fffff,
}

/**
 * Thread access rights
 * https://learn.microsoft.com/en-us/windows/win32/procthread/thread-security-and-access-rights
 */
export enum ThreadAccess {
  TERMINATE = 0x0001,
  SUSPEND_RESUME = 0x0002,
  GET_CONTEXT = 0x0008,
  SET_CONTEXT = 0x0010,
  SET_INFORMATION = 0x0020,
  QUERY_INFORMATION = 0x0040,
  SET_THREAD_TOKEN = 0x0080,
  IMPERSONATE = 0x0100,
  DIRECT_IMPERSONATION = 0x0200,
  SET_LIMITED_INFORMATION = 0x0400,
  ALL_ACCESS = 0x1fffff,
}

export type ProcessAccessValue = ProcessAccess;
export type ThreadAccessValue = ThreadAccess;
