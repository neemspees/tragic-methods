package main

import (
	"fmt"
)

func main() {    
	var this_is_nil *int = nil

    var x interface{}
    x = this_is_nil
    
    if x != nil {
		var x_as_int = x.(*int)
		// Segmentation fault:
        fmt.Println(*x_as_int)
    }
}