import type * as W from 'win32-def';

/**
 * MEMORY_BASIC_INFORMATION structure
 * https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-memory_basic_information
 */
export interface MemoryBasicInformation {
  BaseAddress: W.UINT64;
  AllocationBase: W.UINT64;
  AllocationProtect: W.DWORD;
  RegionSize: W.SIZE_T;
  State: W.DWORD;
  Protect: W.DWORD;
  Type: W.DWORD;
}
