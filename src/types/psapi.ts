import type * as W from 'win32-def';

/**
 * MODULEINFO structure
 * https://learn.microsoft.com/en-us/windows/win32/api/psapi/ns-psapi-moduleinfo
 */
export interface ModuleInfo {
  lpBaseOfDll: W.LPVOID;
  SizeOfImage: W.DWORD;
  EntryPoint: W.LPVOID;
}
