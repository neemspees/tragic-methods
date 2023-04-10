#include <string>
#include <map>
#include <iostream>
using std::string;
using std::map;
using std::cout;

void print_some_config_item(map<string, int> &config) {
    cout << "config[foo] = " << config["foo"] << "\n";
}

int main() {
    map<string, int>(empty_config);
    print_some_config_item(empty_config);
    // Prints "Config has 1 item(s)"
    cout << "Config has " << empty_config.size() << " item(s)\n";
}
