| Feature | Default Type (`=`) | Constraint (`extends`) |

| Purpose | Provides a fallback type | Restricts which types are allowed |
| Syntax | `<T = string>` | `<T extends string>` |
| When used | When TypeScript cannot infer the type | Every time a generic type is provided or inferred |
| Can accept other types? | Yes | Only if they satisfy the constraint |
| Prevents invalid types? | ❌ No | ✅ Yes |
