#include <stdint.h>
#include <stdio.h>

int main(void) {
    // On a 32 bit or 64 bit platform, this prints -25536 as expected.
    // On a 16-bit platform however, this triggers UB and therefore may do anything.
    int16_t a = 20000;
    int16_t b = a + a;
    printf("%d\n", b);
}