import { create } from "zustand";
import {
  ShortenedUrl,
  ShortenedUrlCreationRequest,
} from "../url-shortening/interfaces/interfaces";
import UrlShortenerService from "@/lib/services/UrlShortenerService";

interface ShortenedUrlStore {
  shortenedUrls: ShortenedUrl[];
  getShortenedUrls: () => Promise<void>;
  addShortenedUrl: (request: ShortenedUrlCreationRequest) => Promise<void>;
  deleteShortenedUrl: (id: number) => Promise<void>;
}

const useShortenedUrlStore = create<ShortenedUrlStore>((set) => ({
  shortenedUrls: [],
  getShortenedUrls: async () => {
    const shortenedUrls = await UrlShortenerService.getShortenedUrls();
    set({
      shortenedUrls: shortenedUrls,
    });
  },
  addShortenedUrl: async (request: ShortenedUrlCreationRequest) => {
    const newShortenedUrl = await UrlShortenerService.createShortenedUrl(
      request
    );

    set((state) => ({
      ...state,
      shortenedUrls: [...state.shortenedUrls, newShortenedUrl],
    }));
  },
  deleteShortenedUrl: async (id: number) => {
    const deleted = await UrlShortenerService.deleteShortenedUrl(id);
    if (deleted) {
      set((state) => ({
        ...state,
        shortenedUrls: state.shortenedUrls.filter(
          (url: ShortenedUrl) => url.id !== id
        ),
      }));
    }
  },
}));

export default useShortenedUrlStore;
