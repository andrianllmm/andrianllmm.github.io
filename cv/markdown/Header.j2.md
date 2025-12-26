# <<cv.name>>'s <abbr title="Curriculum Vitae">CV</abbr>

((* set has_prev = False *))
((* if cv.location *))
  <address style="display: inline;"><<cv.location>></address>
  ((* set has_prev = True *))
((* endif *))
((* if cv.phone *))
  ((* if has_prev *)) / ((* endif *))
  <a href="tel:+<<cv.phone|replace("tel:", "")|replace("-"," ")>>" target="_blank">
    <<cv.phone|replace("tel:", "")|replace("-"," ")>>
  </a>
  ((* set has_prev = True *))
((* endif *))
((* if cv.email *))
  ((* if has_prev *)) / ((* endif *))
  <a href="mailto:<<cv.email>>" target="_blank">
    <<cv.email>>
  </a>
  ((* set has_prev = True *))
((* endif *))
((* if cv.social_networks *))
  ((* for network in cv.social_networks *))
    ((* if has_prev *)) / ((* endif *))
    <a href="<<network.url>>" target="_blank">
      <<network.network>>
    </a>
    ((* set has_prev = True *))
  ((* endfor *))
((* endif *))
