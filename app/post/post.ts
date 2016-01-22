export interface Post {
    id: string;
    title: string;
    author: string;
    create_at: number;
    update_at: number;
    last_comment_at: number;
    last_comment_by: string;
    comment_count: number;
}