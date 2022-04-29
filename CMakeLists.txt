# minimum CMake version required
cmake_minimum_required(VERSION 3.15)
# Project name, version and description
project(ProtoBot)
 
# Add DPP as dependency
add_subdirectory(libs/DPP)
 
# Create an executable
add_executable(${PROJECT_NAME}
    src/bot/main.cpp
)
 
# Linking libraries
target_link_libraries(${PROJECT_NAME}
    dpp
)
 
# Specify includes
target_include_directories(${PROJECT_NAME} PRIVATE
    libs/DPP/include
)
 
# Set C++ version
set_target_properties(${PROJECT_NAME} PROPERTIES
    CXX_STANDARD 20
    CXX_STANDARD_REQUIRED ON
)
