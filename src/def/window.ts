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
