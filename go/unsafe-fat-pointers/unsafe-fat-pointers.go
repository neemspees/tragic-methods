package main

import "fmt"

type I interface{ method() string }
type A struct{ s string }
type B struct {
	u uint32
	s string
}

func (a A) method() string { return a.s }
func (b B) method() string { return b.s }

func main() {
	a := A{s: "…"}
	b := B{u: ^uint32(0), s: "…"}
	var i I = a
	go func() {
		for {
			i = a
			i = b
		}
	}()
	for {
		if s := i.method(); len(s) > 3 {
			// Crashes with a segmentation fault
			fmt.Println(s)
			return
		}
	}
}