import { ffi, Def } from 'win32-def';

/**
 * M128A structure (128-bit register value)
 * https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-m128a
 */
export const M128A = ffi.struct('M128A', {
  Low: Def.uint64,
  High: Def.int64,
});

/**
 * CONTEXT structure for x64 (AMD64)
 * https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-context
 */
export const CONTEXT = ffi.struct('CONTEXT', {
  // Register parameter home addresses
  P1Home: Def.uint64,
  P2Home: Def.uint64,
  P3Home: Def.uint64,
  P4Home: Def.uint64,
  P5Home: Def.uint64,
  P6Home: Def.uint64,

  // Control flags
  ContextFlags: Def.uint32,
  MxCsr: Def.uint32,

  // Segment registers
  SegCs: Def.uint16,
  SegDs: Def.uint16,
  SegEs: Def.uint16,
  SegFs: Def.uint16,
  SegGs: Def.uint16,
  SegSs: Def.uint16,

  // Flags
  EFlags: Def.uint32,

  // Debug registers
  Dr0: Def.uint64,
  Dr1: Def.uint64,
  Dr2: Def.uint64,
  Dr3: Def.uint64,
  Dr6: Def.uint64,
  Dr7: Def.uint64,

  // Integer registers
  Rax: Def.uint64,
  Rcx: Def.uint64,
  Rdx: Def.uint64,
  Rbx: Def.uint64,
  Rsp: Def.uint64,
  Rbp: Def.uint64,
  Rsi: Def.uint64,
  Rdi: Def.uint64,
  R8: Def.uint64,
  R9: Def.uint64,
  R10: Def.uint64,
  R11: Def.uint64,
  R12: Def.uint64,
  R13: Def.uint64,
  R14: Def.uint64,
  R15: Def.uint64,

  // Program counter
  Rip: Def.uint64,

  // Floating point / XMM save area (XMM_SAVE_AREA32 = 512 bytes)
  FltSave: `${Def.uint8}[512]`,

  // Vector registers
  VectorRegister: 'M128A[26]',
  VectorControl: Def.uint64,

  // Special debug registers
  DebugControl: Def.uint64,
  LastBranchToRip: Def.uint64,
  LastBranchFromRip: Def.uint64,
  LastExceptionToRip: Def.uint64,
  LastExceptionFromRip: Def.uint64,
});

export const CONTEXT_SIZE = ffi.sizeof(CONTEXT);
