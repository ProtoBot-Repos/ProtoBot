import math
import os


def secRng(min: int, max: int) -> int:
    bytearr = os.urandom(1)

    RANGE_ = max - min + 1
    MAX_ = 256

    if(int.from_bytes(bytearr, "little") >= math.floor(MAX_ / RANGE_) * RANGE_):
        return secRng(min, max)

    return min + (int.from_bytes(bytearr, "little") % RANGE_)

print(secRng(1, 10))
