/**
 * typeof won't try to evaluate "window",
 * it will only try to get its type,
 * by doing that we know if the script
 * is running on a web browser
 * @returns boolean
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}
