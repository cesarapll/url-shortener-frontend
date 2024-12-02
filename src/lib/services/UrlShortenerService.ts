import axiosInstance from "../axios";
import { ShortenedUrl, ShortenedUrlCreationRequest } from '../../url-shortening/interfaces/interfaces';


const UrlShortenerService = {
    getShortenedUrls: async (): Promise<ShortenedUrl[]> => {
        const response = await axiosInstance.get(
            "/shortened-urls"
        );

        return response.data.data;
    },
    createShortenedUrl: async (request: ShortenedUrlCreationRequest): Promise<ShortenedUrl> => {
        const response = await axiosInstance.post(
            "/shortened-urls",
            request
        );

        return response.data.data;
    },
    getOriginalUrlByCode: async (code: string): Promise<string> => {
        const response = await axiosInstance.get(
            `/shortened-urls/${code}`
        );

        return response.data.data;
    },
    deleteShortenedUrl: async (id: number): Promise<boolean> => {
        const response = await axiosInstance.delete(
            `/shortened-urls/${id}`
        )

        return response.data.data;
    }
}

export default UrlShortenerService;

