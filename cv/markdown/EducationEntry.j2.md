### <<entry.institution>>, ((* if entry.degree *))<<entry.degree>> in ((* endif *))<<entry.area>>

((* if entry.date_string or entry.location *))
<span class="text-muted-foreground">
  ((* if entry.date_string *))
    <time datetime="<<entry.date_string>>"><<entry.date_string>></time>
  ((* endif *))
  ((* if entry.date_string and entry.location *)) • ((* endif *))
  ((* if entry.location *))
    <address style="display: inline;" class="text-muted-foreground"><<entry.location>></address>
  ((* endif *))
</span>
((* endif *))

((* for item in entry.highlights *))
- <<item>>
((* endfor *))
