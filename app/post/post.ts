export interface INode {
    name: string
    alias: string
    tabs: Array<any>
}

export interface IPost {
    _id: string
    title: string
    author: Object
    node: INode
    tab: string
    content: string
    create_at: number
    update_at: number
    last_comment_at: number
    last_comment_by: string
    comment_count: number
}