class Main {
    public static void main(String... args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("foo", 42);
        map.put("bar", null);
        map.put("baz", 0);
        if (map.containsKey("bar")) {
            // Throws NullPointerException
            int bar = map.get("bar");
            System.out.println("Bar: "+bar);
        } else {
            System.out.println("Bar not in map");
        }
    }
}
