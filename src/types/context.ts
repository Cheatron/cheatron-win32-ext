import type * as W from 'win32-def';

export interface M128AValue {
  Low: W.UINT64;
  High: W.INT64;
}

/**
 * Parsed thread context (x64)
 */
export interface ThreadContext {
  P1Home: W.UINT64;
  P2Home: W.UINT64;
  P3Home: W.UINT64;
  P4Home: W.UINT64;
  P5Home: W.UINT64;
  P6Home: W.UINT64;
  ContextFlags: W.DWORD;
  MxCsr: W.DWORD;
  SegCs: W.WORD;
  SegDs: W.WORD;
  SegEs: W.WORD;
  SegFs: W.WORD;
  SegGs: W.WORD;
  SegSs: W.WORD;
  EFlags: W.DWORD;
  Dr0: W.UINT64;
  Dr1: W.UINT64;
  Dr2: W.UINT64;
  Dr3: W.UINT64;
  Dr6: W.UINT64;
  Dr7: W.UINT64;
  Rax: W.UINT64;
  Rcx: W.UINT64;
  Rdx: W.UINT64;
  Rbx: W.UINT64;
  Rsp: W.UINT64;
  Rbp: W.UINT64;
  Rsi: W.UINT64;
  Rdi: W.UINT64;
  R8: W.UINT64;
  R9: W.UINT64;
  R10: W.UINT64;
  R11: W.UINT64;
  R12: W.UINT64;
  R13: W.UINT64;
  R14: W.UINT64;
  R15: W.UINT64;
  Rip: W.UINT64;
  FltSave: W.UINT8[];
  VectorRegister: M128AValue[];
  VectorControl: W.UINT64;
  DebugControl: W.UINT64;
  LastBranchToRip: W.UINT64;
  LastBranchFromRip: W.UINT64;
  LastExceptionToRip: W.UINT64;
  LastExceptionFromRip: W.UINT64;
}
