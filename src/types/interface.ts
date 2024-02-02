import { Meaning, Phonetic } from "./type";

export interface APIResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string;
}
