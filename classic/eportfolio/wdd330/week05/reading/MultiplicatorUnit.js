
class MultiplicatorUnitFailure extends Error {}

export default class MultiplicatorUnit {
  constructor() {
    this.tries = 0;
  }

  // Faulty unit has a chance of failure
  primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure("Klunk");
    }
  }

  // Retry until unit succeeds, and count the number of tries
  reliableMultiply(a, b) {
    this.tries = 0;
    while (true) {
      try {
        this.tries++;
        return this.primitiveMultiply(a, b);
      }
      catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure))
          throw e;
      }
    }
  }
}
