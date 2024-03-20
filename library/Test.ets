@Component
struct IndexTest {
  @State message: string = 'Hello World';
  build() {
    Row() {
      Column() {
      }
      .width('100%')
    }
    .height('100%')
  }
}

export { IndexTest }