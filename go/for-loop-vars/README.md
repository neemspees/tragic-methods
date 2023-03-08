# For loop vars

When you use a for loop in Go, only the value of the variables used in the iteration is updated - the address in memory stays the same. This can lead to some gotchas.

In the first example, I initialized an integer slice with a few numbers. In the second slice, I want to store pointers to each of the vars in the first slice. The instinctive way to go about it would be to iterate over it using range, and appending to the 2nd slice the address of the 2nd variable defined in the for loop. Doing so results in the following behavior:

    go run main.go 
    5 0xc000134000
    5 0xc000134000
    5 0xc000134000
    5 0xc000134000
    5 0xc000134000
    5 0xc000134000

Pretty much the same thing but with goroutines:

    go run with-goroutines.go
    5 0xc000018078
    5 0xc000018078
    5 0xc000018078
    5 0xc000018078
    5 0xc000018078
    5 0xc000018078

The correct way to do this would be to create a copy before passing it to the append:

    go run correct.go
    0 0xc000134000
    1 0xc000134008
    2 0xc000134010
    3 0xc000134018
    4 0xc000134020
    5 0xc000134028

This is a known issue. See discussion about it [here.](https://github.com/golang/go/discussions/56010)
Last tested with Go 1.19.3 and still manifesting.