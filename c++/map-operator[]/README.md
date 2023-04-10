# std::map::operator[]
Tested with: clang 15

`std::map::operator[]` can be used to read a value from a map with the same syntax as in many
other languages. However, in C++, this mutates the map if the key is not already present,
inserting the key together with a default-constructed value.
The same holds for `std::unordered_map` and `std::flat_map`.

This can sometimes be useful:
```cpp
for(const auto item: items) {
    counts[item]++;
}
```
but also can easily lead to bugs.