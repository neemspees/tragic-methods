#include <stdint.h>
#include <stdio.h>


int main(void) {
    unsigned int c = 1;
    signed int d = -2;
    if(c + d > 0)
      puts("1 + -2 > 0");
}