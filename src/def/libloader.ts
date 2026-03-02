/**
 * GetModuleHandleEx flags
 * https://learn.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-getmodulehandleexa
 */
export enum GetModuleHandleExFlag {
  PIN = 0x00000001,
  UNCHANGED_REFCOUNT = 0x00000002,
  FROM_ADDRESS = 0x00000004,
}
