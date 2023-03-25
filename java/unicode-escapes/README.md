# Unicode escapes

Java allows unicode escapes in the form of `\` followed by at least one `u`
followed by four hex digits representing the unicode code point. Notably this
isn't limited to string and character literals.

In the example, there is no difference between using `Object.equals` and
`String.contentEquals`. Instead, the `\u000A` in the line comment on line 8
gets parsed as a newline, ending the comment, so the following `!` is considered
part of the boolean expression and negates it. Nevertheless, most syntax highlighting
engines are not aware of this and treat it as a comment.
