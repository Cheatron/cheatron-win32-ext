/**
 * CONTEXT flags for x64
 * https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-context
 */
const CONTEXT_AMD64 = 0x00100000;

export enum ContextFlags {
  AMD64 = CONTEXT_AMD64,
  CONTROL = CONTEXT_AMD64 | 0x01,
  INTEGER = CONTEXT_AMD64 | 0x02,
  SEGMENTS = CONTEXT_AMD64 | 0x04,
  FLOATING_POINT = CONTEXT_AMD64 | 0x08,
  DEBUG_REGISTERS = CONTEXT_AMD64 | 0x10,
  FULL = CONTEXT_AMD64 | 0x01 | 0x02 | 0x08,
  ALL = CONTEXT_AMD64 | 0x01 | 0x02 | 0x04 | 0x08 | 0x10,
}
