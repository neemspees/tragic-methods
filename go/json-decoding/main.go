package main

import (
	"encoding/json"
	"fmt"
)

type myvalue struct {
	First int `json:"first"`
}

func main() {
	var obj myvalue
	js = "{\"second\": \"whatever\"}"
	err = json.Unmarshal([]byte(js), &obj)
	if err != nil {
		fmt.Errorf("Error")
		return
	}
	// Prints {First:0}
	fmt.Printf("%+v", obj)
}
