import { ffi, Def } from 'win32-def';
import { MAX_PATH, MAX_MODULE_NAME32 } from '../def/index.js';

// Toolhelp structures
// Note: Using Wide versions (W) for string members

/**
 * PROCESSENTRY32W (Unicode)
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-processentry32w
 */
export const PROCESSENTRY32W = ffi.struct('PROCESSENTRY32W', {
  dwSize: Def.uint32,
  cntUsage: Def.uint32,
  th32ProcessID: Def.uint32,
  th32DefaultHeapID: Def.uintPtr,
  th32ModuleID: Def.uint32,
  cntThreads: Def.uint32,
  th32ParentProcessID: Def.uint32,
  pcPriClassBase: Def.int32,
  dwFlags: Def.uint32,
  szExeFile: ffi.array('uint16', MAX_PATH),
});

/**
 * PROCESSENTRY32 (ANSI)
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-processentry32
 */
export const PROCESSENTRY32 = ffi.struct('PROCESSENTRY32A', {
  dwSize: Def.uint32,
  cntUsage: Def.uint32,
  th32ProcessID: Def.uint32,
  th32DefaultHeapID: Def.uintPtr,
  th32ModuleID: Def.uint32,
  cntThreads: Def.uint32,
  th32ParentProcessID: Def.uint32,
  pcPriClassBase: Def.int32,
  dwFlags: Def.uint32,
  szExeFile: ffi.array('uint8', MAX_PATH),
});

/**
 * THREADENTRY32
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-threadentry32
 */
export const THREADENTRY32 = ffi.struct('THREADENTRY32', {
  dwSize: Def.uint32,
  cntUsage: Def.uint32,
  th32ThreadID: Def.uint32,
  th32OwnerProcessID: Def.uint32,
  tpBasePri: Def.int32,
  tpDeltaPri: Def.int32,
  dwFlags: Def.uint32,
});

/**
 * MODULEENTRY32W (Unicode)
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-moduleentry32w
 */
export const MODULEENTRY32W = ffi.struct('MODULEENTRY32W', {
  dwSize: Def.uint32,
  th32ModuleID: Def.uint32,
  th32ProcessID: Def.uint32,
  GlblcntUsage: Def.uint32,
  ProccntUsage: Def.uint32,
  modBaseAddr: Def.uintPtr,
  modBaseSize: Def.uint32,
  hModule: Def.uintPtr,
  szModule: ffi.array('uint16', MAX_MODULE_NAME32 + 1),
  szExePath: ffi.array('uint16', MAX_PATH),
});

/**
 * MODULEENTRY32 (ANSI)
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-moduleentry32
 */
export const MODULEENTRY32 = ffi.struct('MODULEENTRY32A', {
  dwSize: Def.uint32,
  th32ModuleID: Def.uint32,
  th32ProcessID: Def.uint32,
  GlblcntUsage: Def.uint32,
  ProccntUsage: Def.uint32,
  modBaseAddr: Def.uintPtr,
  modBaseSize: Def.uint32,
  hModule: Def.uintPtr,
  szModule: ffi.array('uint8', MAX_MODULE_NAME32 + 1),
  szExePath: ffi.array('uint8', MAX_PATH),
});

/**
 * HEAPLIST32
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-heaplist32
 */
export const HEAPLIST32 = ffi.struct('HEAPLIST32', {
  dwSize: Def.uintPtr,
  th32ProcessID: Def.uint32,
  th32HeapID: Def.uintPtr,
  dwFlags: Def.uint32,
});

/**
 * HEAPENTRY32
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-heapentry32
 */
export const HEAPENTRY32 = ffi.struct('HEAPENTRY32', {
  dwSize: Def.uintPtr,
  hHandle: Def.uintPtr,
  dwAddress: Def.uintPtr,
  dwBlockSize: Def.uintPtr,
  dwFlags: Def.uint32,
  dwLockCount: Def.uint32,
  resvd: Def.uint32,
  th32ProcessID: Def.uint32,
  th32HeapID: Def.uintPtr,
});

export const PROCESSENTRY32W_SIZE = ffi.sizeof(PROCESSENTRY32W);
export const PROCESSENTRY32A_SIZE = ffi.sizeof(PROCESSENTRY32);
export const THREADENTRY32_SIZE = ffi.sizeof(THREADENTRY32);
export const MODULEENTRY32W_SIZE = ffi.sizeof(MODULEENTRY32W);
export const MODULEENTRY32A_SIZE = ffi.sizeof(MODULEENTRY32);
export const HEAPLIST32_SIZE = ffi.sizeof(HEAPLIST32);
export const HEAPENTRY32_SIZE = ffi.sizeof(HEAPENTRY32);
