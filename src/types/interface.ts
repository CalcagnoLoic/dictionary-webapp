import { Meaning } from "./type";

export interface APIResponse {
  word: string;
  phonetic: string;
  meanings: Meaning[];
  sourceUrls: string;
}
