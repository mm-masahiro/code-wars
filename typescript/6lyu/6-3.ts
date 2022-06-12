// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/typescript
export class G964 {
  public static printerError(s: string): string {
    const stringArray = s.split('')
    
    const errorStr = stringArray.filter(str => str > 'm')
    return `${errorStr.length}/${s.length}`
  }
}

// Best practice
// export class G964 {
//   public static printerError(s: string): string {
//    let r = s.replace(/[a-m]/g, '');
//    return r.length+'/'+s.length;
//  }
// }
