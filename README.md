# Astro HTTP 2

How to reproduce:
```
bun i
bun dev
curl -ksI https://localhost:4321/ -o/dev/null -w '%{http_version}\n'
```

Output: `1.1`
Wanted output: `2`