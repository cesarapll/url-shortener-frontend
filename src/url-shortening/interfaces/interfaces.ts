
export interface ShortenedUrl {
    id: number
    code: string
    original_url: string
    created_at: string
    updated_at: string
}

export interface ShortenedUrlCreationRequest {
    original_url: string
}