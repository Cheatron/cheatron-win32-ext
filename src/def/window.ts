/**
 * GetWindow command constants
 * https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindow
 */
export enum GetWindowCmd {
  /**
   * Identifies a topmost window.
   */
  HWNDFIRST = 0,

  /**
   * Identifies a topmost window (bottom of the Z-order).
   */
  HWNDLAST = 1,

  /**
   * Identifies a topmost window (below in the Z-order).
   */
  HWNDNEXT = 2,

  /**
   * Identifies a topmost window (above in the Z-order).
   */
  HWNDPREV = 3,

  /**
   * Handle identifies an owned window.
   */
  OWNER = 4,

  /**
   * Handle identifies a child window.
   */
  CHILD = 5,

  /**
   * Handle identifies an enabled popup window.
   */
  ENABLEDPOPUP = 6,
}

/**
 * GUITHREADINFO flags
 * https://learn.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-guithreadinfo
 */
export enum GUIThreadInfoFlag {
  CARETBLINKING = 0x00000001,
  INMOVESIZE = 0x00000002,
  INMENUMODE = 0x00000004,
  SYSTEMMENUMODE = 0x00000008,
  POPUPMENUMODE = 0x00000010,
  IS16BITTASK = 0x00000020,
}
