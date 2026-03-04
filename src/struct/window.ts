import { ffi, Def } from 'win32-def';

/**
 * RECT structure
 * https://learn.microsoft.com/en-us/windows/win32/api/windef/ns-windef-rect
 */
export const RECT = ffi.struct('RECT', {
  left: Def.int32,
  top: Def.int32,
  right: Def.int32,
  bottom: Def.int32,
});

/**
 * GUITHREADINFO structure
 * https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-guithreadinfo
 */
export const GUITHREADINFO = ffi.struct('GUITHREADINFO', {
  cbSize: Def.uint32,
  flags: Def.uint32,
  hwndActive: Def.uintPtr,
  hwndFocus: Def.uintPtr,
  hwndCapture: Def.uintPtr,
  hwndMenuOwner: Def.uintPtr,
  hwndMoveSize: Def.uintPtr,
  hwndCaret: Def.uintPtr,
  rcCaret: RECT,
});

export const RECT_SIZE = ffi.sizeof(RECT);
export const GUITHREADINFO_SIZE = ffi.sizeof(GUITHREADINFO);
