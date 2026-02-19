import type * as W from 'win32-def';

/**
 * SECURITY_ATTRIBUTES structure
 * https://learn.microsoft.com/en-us/windows/win32/api/wtypesbase/ns-wtypesbase-security_attributes
 */
export interface SecurityAttributes {
  nLength: W.DWORD;
  lpSecurityDescriptor: W.LPVOID;
  bInheritHandle: W.BOOL;
}
