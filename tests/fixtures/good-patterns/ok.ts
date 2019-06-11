import path       from 'path'

export interface TestOptions {
  foo?    : string
  barrrr? : number
}

export class Test {
  public static async resolve (
    options: TestOptions
  ): Promise<any> {
    console.info([
      1,
      2,
    ], options)
    const test = path.join('xixi', 'haha')
    console.info(test)
  }
}
