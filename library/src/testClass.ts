class Base {
  k = 4;
}

class TestFabric extends Base {
  private a: number = 10
  declare test: boolean
  constructor() {
    super()
    this.a = 20
  }

  remove(...objects: FabricObject[]) {
    const removed = super.remove(...objects);
    removed.length > 0 && this.renderOnAddRemove && this.requestRenderAll();
    return removed;
  }

  add(...objects: FabricObject[]) {
    const size = super.add(...objects);
    objects.length > 0 && this.renderOnAddRemove && this.requestRenderAll();
    return size;
  }
}