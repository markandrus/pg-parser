import { NodeTag } from "./node.js"

/**
 * If a node type is given, unwrap it to its fields. If any other object type is
 * given, return it as is.
 */
type NodeFields<T extends object> = T extends any
  ? keyof T extends infer TKey
    ? TKey extends NodeTag & keyof T
      ? T[TKey]
      : T
    : never
  : never

/**
 * The return type of the `select` function. It takes an object and a
 * dot-separated field path. The field path should *not* include node types
 * (i.e. SelectStmt).
 */
export type FieldSelection<
  T extends object,
  TFieldPath extends string,
> = T extends any
  ? NodeFields<T> extends infer TFields
    ? TFieldPath extends `${infer TField}.${infer TRest}`
      ? TField extends keyof TFields
        ? TFields[TField] extends object
          ? FieldSelection<TFields[TField], TRest>
          : undefined
        : undefined
      : TFieldPath extends keyof TFields
        ? TFields[TFieldPath]
        : undefined
    : never
  : never

/**
 * Select a field using a dot-separated field path (which must not contain node
 * types like "SelectStmt"). If a field in the field path is not found,
 * `undefined` is returned, so this can be used to safely check for a field deep
 * within a node tree. Especially useful when dealing with a node that can be
 * multiple types, but you only care about using one of them.
 *
 * **Caveat:** Array fields are not supported.
 */
export function select<T extends object, TFieldPath extends string>(
  root: T,
  path: TFieldPath,
): FieldSelection<T, TFieldPath> {
  const keys = path.split(".")
  let current: any = root

  for (const key of keys) {
    if (current === null || typeof current !== "object") {
      return undefined as any
    }

    // Check if the current object is a node (has a single capitalized key)
    const nodeKeys = Object.keys(current)
    if (nodeKeys.length === 1 && /^[A-Z]/.test(nodeKeys[0])) {
      current = current[nodeKeys[0]]
    }

    if (!(key in current)) {
      return undefined as any
    }

    current = current[key]
  }

  return current
}

/**
 * Proxy a given node so you can deeply and safely access its fields without the
 * burden of type-checking first. It also dissolves node types, so you can do
 * `$(node).larg.sortClause` instead of `node.larg.SelectStmt.sortClause`.
 */
export function $<T extends object>(root: T): NodeFields<T> {
  return new Proxy(root as any, {
    get(target, prop) {
      return select(target, prop as string)
    },
  })
}
