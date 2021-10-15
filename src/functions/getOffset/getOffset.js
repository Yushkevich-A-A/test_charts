const getOffset = (value, limit = 260) => {
    if (value < limit) {
      return 1;
    }
    let offset = 1;
    do {
      offset *= 10;
    } while (value / offset > limit)
    return offset;
  }

export default getOffset;