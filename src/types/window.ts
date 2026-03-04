import type * as W from 'win32-def';

/**
 * RECT structure
 */
export interface Rect {
  left: W.LONG;
  top: W.LONG;
  right: W.LONG;
  bottom: W.LONG;
}

/**
 * GUITHREADINFO structure
 */
export interface GUIThreadInfo {
  cbSize: W.DWORD;
  flags: W.DWORD;
  hwndActive: W.HWND;
  hwndFocus: W.HWND;
  hwndCapture: W.HWND;
  hwndMenuOwner: W.HWND;
  hwndMoveSize: W.HWND;
  hwndCaret: W.HWND;
  rcCaret: Rect;
}
