class Main {
    public static void main(String... args) {
        var string =
            // Java source files are UTF-8, so you can use any unicode directly
            // in string literals (though the string is represented in UTF-16)!
            "Hä?";
        var match =
            // But string literals can also have unicode escapes like \u000A!
            string.equals("H\u00E4?");

        if (match) {
            // But something strange is going on...
            System.out.println("This never prints!");
        }

        var chars_match =
            // Yet if we treat it as a CharSequence...
            string.contentEquals("H\u00E4?");

        if (chars_match) {
            System.out.println("This prints!");
        }
    }
}
