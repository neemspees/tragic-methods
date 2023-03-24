class Main {
    public static void main(String... args) {
        var map = java.util.Map.of("foo", 42, "bar", null, "baz": 0);
        if (map.containsKey("bar")) {
            // Throws NullPointerException
            int bar = map.get("foo");
            System.out.println("Bar: "+bar);
        } else {
            System.out.println("Bar not in map");
        }
    }
}
