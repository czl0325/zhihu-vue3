export interface UserProps {
    id?: number;
    userName?: string;
    email?: string;
}

export interface AuthorProps {
    avatar_url_template: string,
    name: string,
    url: string,
    gender: number,
    user_type: string,
    url_token: string,
    is_advertiser: boolean,
    avatar_url: string,
    is_org: boolean,
    headline: string,
    type: string,
    id: string
}

export interface ArticleProps {
    updated: number,
    is_labeled: boolean,
    excerpt: string,
    admin_closed_comment: boolean,
    article_type: string
    excerpt_title: string,
    id: number,
    voteup_count: number,
    voting: number,
    author: AuthorProps,
    url: string,
    comment_permission: string,
    copyright_permission: string,
    created: number,
    content: string
    comment_count: number,
    image_url: string,
    title: string,
    type: string,
    is_normal: boolean
}
