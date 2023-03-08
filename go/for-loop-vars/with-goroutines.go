package main

import (
	"fmt"
	"sync"
)

func main() {
	nums := make([]int, 6)
	for i := 0; i < 6; i++ {
		val := i
		nums[i] = val
	}

	var wg sync.WaitGroup

	for _, val := range nums {
		wg.Add(1)

		go func(arg *int) {
			defer wg.Done()
			fmt.Printf("%d %v\n", *arg, arg)
		}(&val)
	}

	wg.Wait()
}
