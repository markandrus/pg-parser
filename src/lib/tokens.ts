// Synced from https://github.com/pganalyze/libpg_query/blob/16-latest/protobuf/pg_query.proto

export type KeywordKind =
  | 'NO_KEYWORD'
  | 'UNRESERVED_KEYWORD'
  | 'COL_NAME_KEYWORD'
  | 'TYPE_FUNC_NAME_KEYWORD'
  | 'RESERVED_KEYWORD'

export type Token =
  | 'NUL'
  // Single-character tokens that are returned 1:1 (identical with "self" list in scan.l)
  // Either supporting syntax, or single-character operators (some can be both)
  // Also see https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-SYNTAX-SPECIAL-CHARS
  | 'ASCII_36' // "$"
  | 'ASCII_37' // "%"
  | 'ASCII_40' // "("
  | 'ASCII_41' // ")"
  | 'ASCII_42' // "*"
  | 'ASCII_43' // "+"
  | 'ASCII_44' // ","
  | 'ASCII_45' // "-"
  | 'ASCII_46' // "."
  | 'ASCII_47' // "/"
  | 'ASCII_58' // ":"
  | 'ASCII_59' // ";"
  | 'ASCII_60' // "<"
  | 'ASCII_61' // "="
  | 'ASCII_62' // ">"
  | 'ASCII_63' // "?"
  | 'ASCII_91' // "["
  | 'ASCII_92' // "\"
  | 'ASCII_93' // "]"
  | 'ASCII_94' // "^"
  // Named tokens in scan.l
  | 'IDENT'
  | 'UIDENT'
  | 'FCONST'
  | 'SCONST'
  | 'USCONST'
  | 'BCONST'
  | 'XCONST'
  | 'Op'
  | 'ICONST'
  | 'PARAM'
  | 'TYPECAST'
  | 'DOT_DOT'
  | 'COLON_EQUALS'
  | 'EQUALS_GREATER'
  | 'LESS_EQUALS'
  | 'GREATER_EQUALS'
  | 'NOT_EQUALS'
  | 'SQL_COMMENT'
  | 'C_COMMENT'
  | 'ABORT_P'
  | 'ABSENT'
  | 'ABSOLUTE_P'
  | 'ACCESS'
  | 'ACTION'
  | 'ADD_P'
  | 'ADMIN'
  | 'AFTER'
  | 'AGGREGATE'
  | 'ALL'
  | 'ALSO'
  | 'ALTER'
  | 'ALWAYS'
  | 'ANALYSE'
  | 'ANALYZE'
  | 'AND'
  | 'ANY'
  | 'ARRAY'
  | 'AS'
  | 'ASC'
  | 'ASENSITIVE'
  | 'ASSERTION'
  | 'ASSIGNMENT'
  | 'ASYMMETRIC'
  | 'ATOMIC'
  | 'AT'
  | 'ATTACH'
  | 'ATTRIBUTE'
  | 'AUTHORIZATION'
  | 'BACKWARD'
  | 'BEFORE'
  | 'BEGIN_P'
  | 'BETWEEN'
  | 'BIGINT'
  | 'BINARY'
  | 'BIT'
  | 'BOOLEAN_P'
  | 'BOTH'
  | 'BREADTH'
  | 'BY'
  | 'CACHE'
  | 'CALL'
  | 'CALLED'
  | 'CASCADE'
  | 'CASCADED'
  | 'CASE'
  | 'CAST'
  | 'CATALOG_P'
  | 'CHAIN'
  | 'CHAR_P'
  | 'CHARACTER'
  | 'CHARACTERISTICS'
  | 'CHECK'
  | 'CHECKPOINT'
  | 'CLASS'
  | 'CLOSE'
  | 'CLUSTER'
  | 'COALESCE'
  | 'COLLATE'
  | 'COLLATION'
  | 'COLUMN'
  | 'COLUMNS'
  | 'COMMENT'
  | 'COMMENTS'
  | 'COMMIT'
  | 'COMMITTED'
  | 'COMPRESSION'
  | 'CONCURRENTLY'
  | 'CONFIGURATION'
  | 'CONFLICT'
  | 'CONNECTION'
  | 'CONSTRAINT'
  | 'CONSTRAINTS'
  | 'CONTENT_P'
  | 'CONTINUE_P'
  | 'CONVERSION_P'
  | 'COPY'
  | 'COST'
  | 'CREATE'
  | 'CROSS'
  | 'CSV'
  | 'CUBE'
  | 'CURRENT_P'
  | 'CURRENT_CATALOG'
  | 'CURRENT_DATE'
  | 'CURRENT_ROLE'
  | 'CURRENT_SCHEMA'
  | 'CURRENT_TIME'
  | 'CURRENT_TIMESTAMP'
  | 'CURRENT_USER'
  | 'CURSOR'
  | 'CYCLE'
  | 'DATA_P'
  | 'DATABASE'
  | 'DAY_P'
  | 'DEALLOCATE'
  | 'DEC'
  | 'DECIMAL_P'
  | 'DECLARE'
  | 'DEFAULT'
  | 'DEFAULTS'
  | 'DEFERRABLE'
  | 'DEFERRED'
  | 'DEFINER'
  | 'DELETE_P'
  | 'DELIMITER'
  | 'DELIMITERS'
  | 'DEPENDS'
  | 'DEPTH'
  | 'DESC'
  | 'DETACH'
  | 'DICTIONARY'
  | 'DISABLE_P'
  | 'DISCARD'
  | 'DISTINCT'
  | 'DO'
  | 'DOCUMENT_P'
  | 'DOMAIN_P'
  | 'DOUBLE_P'
  | 'DROP'
  | 'EACH'
  | 'ELSE'
  | 'ENABLE_P'
  | 'ENCODING'
  | 'ENCRYPTED'
  | 'END_P'
  | 'ENUM_P'
  | 'ESCAPE'
  | 'EVENT'
  | 'EXCEPT'
  | 'EXCLUDE'
  | 'EXCLUDING'
  | 'EXCLUSIVE'
  | 'EXECUTE'
  | 'EXISTS'
  | 'EXPLAIN'
  | 'EXPRESSION'
  | 'EXTENSION'
  | 'EXTERNAL'
  | 'EXTRACT'
  | 'FALSE_P'
  | 'FAMILY'
  | 'FETCH'
  | 'FILTER'
  | 'FINALIZE'
  | 'FIRST_P'
  | 'FLOAT_P'
  | 'FOLLOWING'
  | 'FOR'
  | 'FORCE'
  | 'FOREIGN'
  | 'FORMAT'
  | 'FORWARD'
  | 'FREEZE'
  | 'FROM'
  | 'FULL'
  | 'FUNCTION'
  | 'FUNCTIONS'
  | 'GENERATED'
  | 'GLOBAL'
  | 'GRANT'
  | 'GRANTED'
  | 'GREATEST'
  | 'GROUP_P'
  | 'GROUPING'
  | 'GROUPS'
  | 'HANDLER'
  | 'HAVING'
  | 'HEADER_P'
  | 'HOLD'
  | 'HOUR_P'
  | 'IDENTITY_P'
  | 'IF_P'
  | 'ILIKE'
  | 'IMMEDIATE'
  | 'IMMUTABLE'
  | 'IMPLICIT_P'
  | 'IMPORT_P'
  | 'IN_P'
  | 'INCLUDE'
  | 'INCLUDING'
  | 'INCREMENT'
  | 'INDENT'
  | 'INDEX'
  | 'INDEXES'
  | 'INHERIT'
  | 'INHERITS'
  | 'INITIALLY'
  | 'INLINE_P'
  | 'INNER_P'
  | 'INOUT'
  | 'INPUT_P'
  | 'INSENSITIVE'
  | 'INSERT'
  | 'INSTEAD'
  | 'INT_P'
  | 'INTEGER'
  | 'INTERSECT'
  | 'INTERVAL'
  | 'INTO'
  | 'INVOKER'
  | 'IS'
  | 'ISNULL'
  | 'ISOLATION'
  | 'JOIN'
  | 'JSON'
  | 'JSON_ARRAY'
  | 'JSON_ARRAYAGG'
  | 'JSON_OBJECT'
  | 'JSON_OBJECTAGG'
  | 'KEY'
  | 'KEYS'
  | 'LABEL'
  | 'LANGUAGE'
  | 'LARGE_P'
  | 'LAST_P'
  | 'LATERAL_P'
  | 'LEADING'
  | 'LEAKPROOF'
  | 'LEAST'
  | 'LEFT'
  | 'LEVEL'
  | 'LIKE'
  | 'LIMIT'
  | 'LISTEN'
  | 'LOAD'
  | 'LOCAL'
  | 'LOCALTIME'
  | 'LOCALTIMESTAMP'
  | 'LOCATION'
  | 'LOCK_P'
  | 'LOCKED'
  | 'LOGGED'
  | 'MAPPING'
  | 'MATCH'
  | 'MATCHED'
  | 'MATERIALIZED'
  | 'MAXVALUE'
  | 'MERGE'
  | 'METHOD'
  | 'MINUTE_P'
  | 'MINVALUE'
  | 'MODE'
  | 'MONTH_P'
  | 'MOVE'
  | 'NAME_P'
  | 'NAMES'
  | 'NATIONAL'
  | 'NATURAL'
  | 'NCHAR'
  | 'NEW'
  | 'NEXT'
  | 'NFC'
  | 'NFD'
  | 'NFKC'
  | 'NFKD'
  | 'NO'
  | 'NONE'
  | 'NORMALIZE'
  | 'NORMALIZED'
  | 'NOT'
  | 'NOTHING'
  | 'NOTIFY'
  | 'NOTNULL'
  | 'NOWAIT'
  | 'NULL_P'
  | 'NULLIF'
  | 'NULLS_P'
  | 'NUMERIC'
  | 'OBJECT_P'
  | 'OF'
  | 'OFF'
  | 'OFFSET'
  | 'OIDS'
  | 'OLD'
  | 'ON'
  | 'ONLY'
  | 'OPERATOR'
  | 'OPTION'
  | 'OPTIONS'
  | 'OR'
  | 'ORDER'
  | 'ORDINALITY'
  | 'OTHERS'
  | 'OUT_P'
  | 'OUTER_P'
  | 'OVER'
  | 'OVERLAPS'
  | 'OVERLAY'
  | 'OVERRIDING'
  | 'OWNED'
  | 'OWNER'
  | 'PARALLEL'
  | 'PARAMETER'
  | 'PARSER'
  | 'PARTIAL'
  | 'PARTITION'
  | 'PASSING'
  | 'PASSWORD'
  | 'PLACING'
  | 'PLANS'
  | 'POLICY'
  | 'POSITION'
  | 'PRECEDING'
  | 'PRECISION'
  | 'PRESERVE'
  | 'PREPARE'
  | 'PREPARED'
  | 'PRIMARY'
  | 'PRIOR'
  | 'PRIVILEGES'
  | 'PROCEDURAL'
  | 'PROCEDURE'
  | 'PROCEDURES'
  | 'PROGRAM'
  | 'PUBLICATION'
  | 'QUOTE'
  | 'RANGE'
  | 'READ'
  | 'REAL'
  | 'REASSIGN'
  | 'RECHECK'
  | 'RECURSIVE'
  | 'REF_P'
  | 'REFERENCES'
  | 'REFERENCING'
  | 'REFRESH'
  | 'REINDEX'
  | 'RELATIVE_P'
  | 'RELEASE'
  | 'RENAME'
  | 'REPEATABLE'
  | 'REPLACE'
  | 'REPLICA'
  | 'RESET'
  | 'RESTART'
  | 'RESTRICT'
  | 'RETURN'
  | 'RETURNING'
  | 'RETURNS'
  | 'REVOKE'
  | 'RIGHT'
  | 'ROLE'
  | 'ROLLBACK'
  | 'ROLLUP'
  | 'ROUTINE'
  | 'ROUTINES'
  | 'ROW'
  | 'ROWS'
  | 'RULE'
  | 'SAVEPOINT'
  | 'SCALAR'
  | 'SCHEMA'
  | 'SCHEMAS'
  | 'SCROLL'
  | 'SEARCH'
  | 'SECOND_P'
  | 'SECURITY'
  | 'SELECT'
  | 'SEQUENCE'
  | 'SEQUENCES'
  | 'SERIALIZABLE'
  | 'SERVER'
  | 'SESSION'
  | 'SESSION_USER'
  | 'SET'
  | 'SETS'
  | 'SETOF'
  | 'SHARE'
  | 'SHOW'
  | 'SIMILAR'
  | 'SIMPLE'
  | 'SKIP'
  | 'SMALLINT'
  | 'SNAPSHOT'
  | 'SOME'
  | 'SQL_P'
  | 'STABLE'
  | 'STANDALONE_P'
  | 'START'
  | 'STATEMENT'
  | 'STATISTICS'
  | 'STDIN'
  | 'STDOUT'
  | 'STORAGE'
  | 'STORED'
  | 'STRICT_P'
  | 'STRIP_P'
  | 'SUBSCRIPTION'
  | 'SUBSTRING'
  | 'SUPPORT'
  | 'SYMMETRIC'
  | 'SYSID'
  | 'SYSTEM_P'
  | 'SYSTEM_USER'
  | 'TABLE'
  | 'TABLES'
  | 'TABLESAMPLE'
  | 'TABLESPACE'
  | 'TEMP'
  | 'TEMPLATE'
  | 'TEMPORARY'
  | 'TEXT_P'
  | 'THEN'
  | 'TIES'
  | 'TIME'
  | 'TIMESTAMP'
  | 'TO'
  | 'TRAILING'
  | 'TRANSACTION'
  | 'TRANSFORM'
  | 'TREAT'
  | 'TRIGGER'
  | 'TRIM'
  | 'TRUE_P'
  | 'TRUNCATE'
  | 'TRUSTED'
  | 'TYPE_P'
  | 'TYPES_P'
  | 'UESCAPE'
  | 'UNBOUNDED'
  | 'UNCOMMITTED'
  | 'UNENCRYPTED'
  | 'UNION'
  | 'UNIQUE'
  | 'UNKNOWN'
  | 'UNLISTEN'
  | 'UNLOGGED'
  | 'UNTIL'
  | 'UPDATE'
  | 'USER'
  | 'USING'
  | 'VACUUM'
  | 'VALID'
  | 'VALIDATE'
  | 'VALIDATOR'
  | 'VALUE_P'
  | 'VALUES'
  | 'VARCHAR'
  | 'VARIADIC'
  | 'VARYING'
  | 'VERBOSE'
  | 'VERSION_P'
  | 'VIEW'
  | 'VIEWS'
  | 'VOLATILE'
  | 'WHEN'
  | 'WHERE'
  | 'WHITESPACE_P'
  | 'WINDOW'
  | 'WITH'
  | 'WITHIN'
  | 'WITHOUT'
  | 'WORK'
  | 'WRAPPER'
  | 'WRITE'
  | 'XML_P'
  | 'XMLATTRIBUTES'
  | 'XMLCONCAT'
  | 'XMLELEMENT'
  | 'XMLEXISTS'
  | 'XMLFOREST'
  | 'XMLNAMESPACES'
  | 'XMLPARSE'
  | 'XMLPI'
  | 'XMLROOT'
  | 'XMLSERIALIZE'
  | 'XMLTABLE'
  | 'YEAR_P'
  | 'YES_P'
  | 'ZONE'
  | 'FORMAT_LA'
  | 'NOT_LA'
  | 'NULLS_LA'
  | 'WITH_LA'
  | 'WITHOUT_LA'
  | 'MODE_TYPE_NAME'
  | 'MODE_PLPGSQL_EXPR'
  | 'MODE_PLPGSQL_ASSIGN1'
  | 'MODE_PLPGSQL_ASSIGN2'
  | 'MODE_PLPGSQL_ASSIGN3'
  | 'UMINUS'
