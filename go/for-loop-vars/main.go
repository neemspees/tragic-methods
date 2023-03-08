package main

import (
	"fmt"
)

func main() {
	nums := make([]int, 6)
	for i := 0; i < 6; i++ {
		val := i
		nums[i] = val
	}

	toPopulate := make([]*int, 0)

	for _, num := range nums {
		toPopulate = append(toPopulate, &num)
	}

	for _, val := range toPopulate {
		fmt.Printf("%d %v\n", *val, val)
	}
}
