/**
 * Memory protection constants
 * https://learn.microsoft.com/en-us/windows/win32/memory/memory-protection-constants
 */
export enum MemoryProtection {
  NOACCESS = 0x01,
  READONLY = 0x02,
  READWRITE = 0x04,
  WRITECOPY = 0x08,
  EXECUTE = 0x10,
  EXECUTE_READ = 0x20,
  EXECUTE_READWRITE = 0x40,
  EXECUTE_WRITECOPY = 0x80,
  GUARD = 0x100,
  NOCACHE = 0x200,
  WRITECOMBINE = 0x400,
}

/**
 * Memory state constants
 */
export enum MemoryState {
  COMMIT = 0x1000,
  RESERVE = 0x2000,
  FREE = 0x10000,
}

/**
 * Memory type constants
 */
export enum MemoryType {
  PRIVATE = 0x20000,
  MAPPED = 0x40000,
  IMAGE = 0x1000000,
}
