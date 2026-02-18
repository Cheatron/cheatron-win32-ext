import { ffi, Def } from 'win32-def';

// Koffi struct for MEMORY_BASIC_INFORMATION (64-bit)
export const MEMORY_BASIC_INFORMATION = ffi.struct('MEMORY_BASIC_INFORMATION', {
  BaseAddress: Def.uint64,
  AllocationBase: Def.uint64,
  AllocationProtect: Def.uint32,
  __PartitionId: Def.uint16,
  __pad: Def.uint16,
  RegionSize: Def.uint64,
  State: Def.uint32,
  Protect: Def.uint32,
  Type: Def.uint32,
  __pad2: Def.uint32,
});

export const MBI_SIZE = ffi.sizeof(MEMORY_BASIC_INFORMATION);
