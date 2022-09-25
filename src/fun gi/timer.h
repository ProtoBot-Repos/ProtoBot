#include <chrono>
#include <iostream>

class Timer {
    private:
        void hw() {
            std::cout << "Hello, world!" << std::endl;

            std::cin.get();
        }

    public:
        std::chrono::time_point<std::chrono::high_resolution_clock> time_function(auto (*function)(auto, auto)) 
        {
            auto start = std::chrono::high_resolution_clock::now();


        }
};