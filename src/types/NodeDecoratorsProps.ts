import { EditorThemeClasses, LexicalEditor } from 'lexical'
import { MdxJsxAttribute } from 'mdast-util-mdx-jsx'
import { TableNode } from '../nodes/Table'
import * as Mdast from 'mdast'

export interface FrontmatterEditorProps {
  yaml: string
  onChange: (yaml: string) => void
}

export type JsxKind = 'text' | 'flow'

export interface JsxEditorProps {
  kind: JsxKind
  attributes: MdxJsxAttribute[]
  componentName: string
  onSubmit: (values: Record<string, string>) => void
  theme: EditorThemeClasses
  editor: LexicalEditor
}

export interface VoidEmitter {
  publish: () => void
  subscribe: (callback: () => void) => void
}

export interface SandpackEditorProps {
  code: string
  nodeKey: string
  meta: string
  onChange: (code: string) => void
  focusEmitter: VoidEmitter
}

export interface CodeBlockEditorProps extends SandpackEditorProps {
  language: string
}

export interface TableEditorProps {
  parentEditor: LexicalEditor
  lexicalTable: TableNode
  mdastNode: Mdast.Table
}