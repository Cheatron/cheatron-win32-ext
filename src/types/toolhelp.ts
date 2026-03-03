import type * as W from 'win32-def';

/**
 * PROCESSENTRY32W structure
 */
export interface ProcessEntry32W {
  dwSize: W.DWORD;
  cntUsage: W.DWORD;
  th32ProcessID: W.DWORD;
  th32DefaultHeapID: W.ULONG_PTR;
  th32ModuleID: W.DWORD;
  cntThreads: W.DWORD;
  th32ParentProcessID: W.DWORD;
  pcPriClassBase: W.LONG;
  dwFlags: W.DWORD;
  szExeFile: number[]; // WCHAR[MAX_PATH]
}

/**
 * PROCESSENTRY32A structure
 */
export interface ProcessEntry32 {
  dwSize: W.DWORD;
  cntUsage: W.DWORD;
  th32ProcessID: W.DWORD;
  th32DefaultHeapID: W.ULONG_PTR;
  th32ModuleID: W.DWORD;
  cntThreads: W.DWORD;
  th32ParentProcessID: W.DWORD;
  pcPriClassBase: W.LONG;
  dwFlags: W.DWORD;
  szExeFile: number[]; // CHAR[MAX_PATH]
}

/**
 * THREADENTRY32 structure
 */
export interface ThreadEntry32 {
  dwSize: W.DWORD;
  cntUsage: W.DWORD;
  th32ThreadID: W.DWORD;
  th32OwnerProcessID: W.DWORD;
  tpBasePri: W.LONG;
  tpDeltaPri: W.LONG;
  dwFlags: W.DWORD;
}

/**
 * MODULEENTRY32W structure
 */
export interface ModuleEntry32W {
  dwSize: W.DWORD;
  th32ModuleID: W.DWORD;
  th32ProcessID: W.DWORD;
  GlblcntUsage: W.DWORD;
  ProccntUsage: W.DWORD;
  modBaseAddr: W.PBYTE;
  modBaseSize: W.DWORD;
  hModule: W.HMODULE;
  szModule: number[]; // WCHAR[MAX_MODULE_NAME32 + 1]
  szExePath: number[]; // WCHAR[MAX_PATH]
}

/**
 * MODULEENTRY32A structure
 */
export interface ModuleEntry32 {
  dwSize: W.DWORD;
  th32ModuleID: W.DWORD;
  th32ProcessID: W.DWORD;
  GlblcntUsage: W.DWORD;
  ProccntUsage: W.DWORD;
  modBaseAddr: W.PBYTE;
  modBaseSize: W.DWORD;
  hModule: W.HMODULE;
  szModule: number[]; // CHAR[MAX_MODULE_NAME32 + 1]
  szExePath: number[]; // CHAR[MAX_PATH]
}

/**
 * HEAPLIST32 structure
 */
export interface HeapList32 {
  dwSize: W.SIZE_T;
  th32ProcessID: W.DWORD;
  th32HeapID: W.ULONG_PTR;
  dwFlags: W.DWORD;
}

/**
 * HEAPENTRY32 structure
 */
export interface HeapEntry32 {
  dwSize: W.SIZE_T;
  hHandle: W.HANDLE;
  dwAddress: W.ULONG_PTR;
  dwBlockSize: W.SIZE_T;
  dwFlags: W.DWORD;
  dwLockCount: W.DWORD;
  resvd: W.DWORD;
  th32ProcessID: W.DWORD;
  th32HeapID: W.ULONG_PTR;
}
