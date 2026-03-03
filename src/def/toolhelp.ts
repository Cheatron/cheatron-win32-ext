/**
 * Toolhelp snapshot flags
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/nf-tlhelp32-createtoolhelp32snapshot
 */
export enum ToolhelpSnapshotFlag {
  INHERIT = 0x80000000,
  SNAPALL = 0x0000000f,
  SNAPHEAPLIST = 0x00000001,
  SNAPMODULE = 0x00000008,
  SNAPMODULE32 = 0x00000010,
  SNAPPROCESS = 0x00000002,
  SNAPTHREAD = 0x00000004,
}

/**
 * Heap entry flags
 * https://learn.microsoft.com/en-us/windows/win32/api/tlhelp32/ns-tlhelp32-heapentry32
 */
export enum HeapEntryFlag {
  FIXED = 0x00000001,
  FREE = 0x00000002,
  MOVEABLE = 0x00000004,
}
