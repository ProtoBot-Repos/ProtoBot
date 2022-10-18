#include <cmath>
#include <vector>
#include <iostream>
#include <fstream>
#include <chrono>

static unsigned long long int *times = new unsigned long long int[10];
static int it = 0;

unsigned long long int secRng();

unsigned long long int gen()
{
    auto start = std::chrono::steady_clock::now();

    std::ofstream kg("m.ccst");

    kg << 1 + 5 - (12 / 5) + (sqrt(1 / 1000 + (sqrt(10 / 5) / 20) - sin(cos(cosf(4234))) / 5 * (10 / tan(5))));

    kg.close();

    remove("m.ccst");

    auto dr = std::chrono::duration_cast<std::chrono::nanoseconds>(std::chrono::steady_clock::now() - start);

    unsigned long long int dr2 = (dr.count() / sqrt(3.141592653589793) * sqrt(dr.count()));

    if (dr2 == 0)
        return gen();

    times[it];
}

int main()
{
    secRng();

    return 0;
}

unsigned long long int secRng()
{
    for (int i = 0; i < 10; i++)
    {
        gen();
        it++;
    }

    unsigned long long int mn = (times[0] + times[1] + times[2] + times[3] + times[4] + times[5] + times[6] + times[7] + times[8] + times[9]) / 10;
}
