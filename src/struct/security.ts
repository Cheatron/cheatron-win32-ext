import { ffi, Def } from 'win32-def';

/**
 * SECURITY_ATTRIBUTES structure
 * https://learn.microsoft.com/en-us/windows/win32/api/wtypesbase/ns-wtypesbase-security_attributes
 */
export const SECURITY_ATTRIBUTES = ffi.struct('SECURITY_ATTRIBUTES', {
  nLength: Def.uint32,
  lpSecurityDescriptor: Def.uint64, // LPVOID is 64-bit on x64
  bInheritHandle: Def.bool,
});

export const SECURITY_ATTRIBUTES_SIZE = ffi.sizeof(SECURITY_ATTRIBUTES);
