import { ffi, Def } from 'win32-def';

// Koffi struct for MODULEINFO
export const MODULEINFO = ffi.struct('MODULEINFO', {
  lpBaseOfDll: Def.uint64,
  SizeOfImage: Def.uint32,
  EntryPoint: Def.uint64,
});

export const MODULEINFO_SIZE = ffi.sizeof(MODULEINFO);
