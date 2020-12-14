/*
 * @Author: mellow 
 * @Date: 2020-12-11 10:03:25 
 * @Last Modified by: mellow
 * @Last Modified time: 2020-12-11 10:03:55
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
